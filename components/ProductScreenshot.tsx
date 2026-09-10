// Product screenshot slot.
//
// WHY THIS IS A PLACEHOLDER AND NOT AN IMAGE
//
// The /product SEO work called for a real product visual. There is no screenshot of the
// MetaWurks application anywhere in this repository:
//
//   public/architecture.png    1536x1024  architecture *diagram*, already used on /docs
//   public/image.png              64x64   icon
//   public/image (1).png       1536x1024  unused, not a product capture
//   public/Untitled design.svg            logo
//   public/placeholder.svg                unused
//   components/DashboardPreview.tsx       a hand-built React mock, not a real capture
//
// Rendering DashboardPreview here, or generating a mockup, would put a fabricated image
// on the page in the position a reader reads as "this is the product". That was declined.
//
// TO REPLACE THIS PLACEHOLDER
//   1. Drop a real capture at public/product/metawurks-document-chat.webp
//      (WebP or AVIF; ~2400px wide for a 2x retina render at this size).
//   2. Set HAS_REAL_SCREENSHOT to true and fill in SCREENSHOT below with the true
//      intrinsic dimensions of the file - width and height must be exact or the
//      reserved space will be wrong and the page will shift on load.
//   3. Rewrite ALT to describe what the capture actually shows. Do not ship the
//      placeholder alt text with a real image.
//
// next/image is used with explicit width/height so the browser reserves the correct
// space before the file arrives (no cumulative layout shift). This block sits well below
// the fold, so `loading="lazy"` - next/image's default - is correct. It must NOT be
// given `priority`: that is reserved for the LCP element, which on this page is the H1.

import Image from "next/image";

const HAS_REAL_SCREENSHOT = false;

const SCREENSHOT = {
  src: "/product/metawurks-document-chat.webp",
  width: 2400,
  height: 1350,
};

const ALT =
  "The MetaWurks workspace: a document library on the left and a chat panel answering a question about an uploaded file, with citations to the source passages.";

export default function ProductScreenshot() {
  if (HAS_REAL_SCREENSHOT) {
    return (
      <figure className="max-w-5xl mx-auto">
        <div className="rounded-3xl overflow-hidden border border-border/50 backdrop-blur-xl bg-card/60">
          <Image
            src={SCREENSHOT.src}
            alt={ALT}
            width={SCREENSHOT.width}
            height={SCREENSHOT.height}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="w-full h-auto"
          />
        </div>
        <figcaption className="text-sm text-muted-foreground text-center mt-4">
          Asking a question against your own document library in MetaWurks.
        </figcaption>
      </figure>
    );
  }

  // Placeholder. Reserves the same 16:9 box the real image will occupy, so swapping the
  // capture in does not move anything else on the page.
  return (
    <figure className="max-w-5xl mx-auto">
      <div
        className="relative rounded-3xl border border-dashed border-border/70 bg-card/40 backdrop-blur-xl flex items-center justify-center"
        style={{ aspectRatio: "16 / 9" }}
      >
        <div className="text-center px-8 py-12 max-w-md">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            Product screenshot pending
          </p>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            A real capture of the MetaWurks workspace belongs here. No screenshot exists in
            this repository, and none was fabricated. See the comment at the top of{" "}
            <code className="text-xs">components/ProductScreenshot.tsx</code> for how to
            drop one in.
          </p>
        </div>
      </div>
    </figure>
  );
}
