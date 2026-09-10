// Product screenshot.
//
// Real capture of the MetaWurks chat workspace, supplied by the product owner and stored
// at public/product/metawurks-chat-workspace.png (1920x956). It replaces the
// dashed-border placeholder that previously occupied this slot.
//
// next/image is used with the file's exact intrinsic width/height so the browser reserves
// the correct space before the file arrives (no cumulative layout shift). `w-full h-auto`
// keeps the native 1920:956 aspect ratio at every breakpoint, and the wrapper's
// `overflow-hidden` clips the capture to the rounded corners. This block sits well below
// the fold, so `loading="lazy"` - next/image's default - is correct. It must NOT be given
// `priority`: that is reserved for the LCP element, which on this page is the H1.
//
// quality={95} overrides next/image's default of 75. This is a UI capture whose fine
// text goes mushy under default WebP compression: the 1080px variant was 11 KB at q=75
// and 23 KB at q=95, so the sharpness is essentially free.
//
// NOTE FOR WHOEVER REPLACES THIS: the capture retains browser chrome showing the
// dev-apps.metawurks.com address and a personal bookmarks bar, and the signed-in user is
// a "Testing" account on the Free Plan. Kept uncropped exactly as supplied, and raised
// with the product owner. Swap in a clean production capture when one exists.

import Image from "next/image";

const SCREENSHOT = {
  src: "/product/metawurks-chat-workspace.png",
  width: 1920,
  height: 956,
};

const ALT =
  "The MetaWurks workspace: a left sidebar with New Conversation, Knowledge Source (Data Library and Integrations), Projects and Agents & Skills, beside a main panel with an “Ask anything…” prompt box and a bar offering to connect your knowledge sources.";

export default function ProductScreenshot() {
  return (
    <figure className="max-w-5xl mx-auto">
      <div className="rounded-3xl overflow-hidden border border-border/50 backdrop-blur-xl bg-card/60">
        <Image
          src={SCREENSHOT.src}
          alt={ALT}
          width={SCREENSHOT.width}
          height={SCREENSHOT.height}
          sizes="(max-width: 1024px) 100vw, 1024px"
          quality={95}
          className="w-full h-auto"
        />
      </div>
      <figcaption className="text-sm text-muted-foreground text-center mt-4">
        The MetaWurks workspace: start a conversation, connect a knowledge source, or open
        your data library.
      </figcaption>
    </figure>
  );
}
