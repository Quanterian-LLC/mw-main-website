import fs from "node:fs";
import path from "node:path";

// Reads the intrinsic pixel dimensions of an image in public/.
//
// WHY: Google's Article guidance asks for an ImageObject with width and height rather
// than a bare URL string. Hardcoding the numbers would create a second source of truth
// that silently rots the moment an asset is replaced, so they are read from the file.
//
// WHEN THIS RUNS: only at build time. Every blog post is statically generated
// (generateStaticParams in app/blog/[id]/page.tsx), so no filesystem access happens per
// request. Results are memoised so a repeated image is read once.
//
// Only the PNG and JPEG headers are parsed — those are the two formats in public/blog.
// Anything unrecognised, missing, or unreadable returns null and the caller falls back
// to emitting a plain URL string, which is still valid structured data.

type Dimensions = { width: number; height: number } | null;

const cache = new Map<string, Dimensions>();

function readPng(buf: Buffer): Dimensions {
  // 8-byte signature, then IHDR: width at offset 16, height at offset 20 (big-endian).
  if (buf.length < 24) return null;
  if (buf.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a") return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function readJpeg(buf: Buffer): Dimensions {
  // Walk the marker segments to the first SOF (start of frame), which carries the size.
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let offset = 2;
  while (offset < buf.length - 8) {
    if (buf[offset] !== 0xff) {
      offset++;
      continue;
    }
    const marker = buf[offset + 1];
    // SOF0-SOF15, excluding DHT (c4), JPG (c8) and DAC (cc), which are not frame headers.
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) };
    }
    const segmentLength = buf.readUInt16BE(offset + 2);
    if (segmentLength < 2) return null; // malformed; stop rather than loop forever
    offset += 2 + segmentLength;
  }
  return null;
}

/**
 * @param publicPath a path as stored in the post record, e.g. "/blog/two-lanes.png"
 */
export function getImageDimensions(publicPath: string): Dimensions {
  if (cache.has(publicPath)) return cache.get(publicPath)!;

  let result: Dimensions = null;
  try {
    const abs = path.join(process.cwd(), "public", publicPath);
    const buf = fs.readFileSync(abs);
    result = readPng(buf) ?? readJpeg(buf);
  } catch {
    // Missing or unreadable file. Caller falls back to a plain URL.
    result = null;
  }

  cache.set(publicPath, result);
  return result;
}
