import Link from "next/link";
import { Calculator, Scale, Home, Building2 } from "lucide-react";
import { modelProviders, fileTypeGroups, entryPrice } from "@/lib/productContent";

// Answer-first sections for the homepage.
//
// Every heading is a question a buyer actually types, and every answer opens with a direct
// response before any supporting detail — the shape answer engines extract.
//
// SOURCING. Nothing here is invented. Each claim traces to:
//   file types + limits        app/docs/page.tsx:97
//   retrieval / RAG            app/docs/page.tsx:100
//   citations                  app/docs/page.tsx:460
//   Drive / OneDrive import    app/docs/page.tsx:103, :650-651
//   six model providers        app/docs/page.tsx:399-404
//   switch model mid-chat      app/docs/page.tsx:119
//   exports                    app/docs/page.tsx:122, :512-516
//   example questions          app/docs/page.tsx:453
//   security statements        app/privacy-policy/page.tsx:87, :100, :104, :111, :120-122
//   entry price                app/pricing/page.tsx:78
//
// Deliberately ABSENT: SSO, role-based access control, audit logs, end-to-end encryption,
// certifications, uptime figures, and any statement about whether customer documents are
// used to train models. None is supported by this repository.

// Shared answer strings. Rendered as the visible paragraphs below AND exported as
// `homeFaqs` for the FAQPage JSON-LD in app/page.tsx, so the two cannot diverge.
const DEF_P1 =
  "MetaWurks is an AI document intelligence platform for small businesses. You add your PDFs, spreadsheets, presentations and other business files — by upload, or by connecting Google Drive or OneDrive — and then ask questions about them in plain English. Answers come back in seconds, drawn from your own documents and citing the passage they came from.";

const DEF_P2 = `The difference from an ordinary search box is that MetaWurks reads for meaning rather than matching keywords, so a question phrased the way you would say it out loud still lands on the right paragraph in the right file. A free plan is available and paid plans start at $${entryPrice.amount}/month.`;

const AUDIENCE_LEAD =
  "Small teams whose day is shaped by documents somebody else produced, and who rarely have the head-count to index them.";

const HOW_LEAD = "Three stages, from a folder of files to an answer you can check.";

// Visible summary paragraphs. These double as the FAQPage answers, so schema and page
// carry identical text.
const HOW_SUMMARY =
  "First you add your documents, by upload or by connecting Google Drive or OneDrive. Then you ask a question in plain English, and MetaWurks searches your indexed files for the passages that bear on it. Finally you get an answer built from those passages, citing the source so you can check it.";

const FILETYPES_SUMMARY =
  "MetaWurks reads documents (PDF, DOCX, TXT, MD, RTF, XML, JSON), spreadsheets (XLSX, CSV), presentations (PPTX), images (PNG, JPG, JPEG, GIF, WEBP, BMP, TIFF, SVG) and video (MP4, MOV, AVI, WebM, MKV, FLV). The maximum file size is 50 MB for documents and images, and 200 MB for video.";

const AUDIENCE_SUMMARY =
  "Bookkeepers and small accounting firms, solo attorneys and small law firms, real estate agents and transaction coordinators, and SMB owners and operations managers.";

const MODELS_LEAD =
  "Six providers in one workspace. Switch model mid-conversation to match the task.";

const icps = [
  {
    icon: Calculator,
    title: "Bookkeepers and small accounting firms",
    body: "Invoices, receipts, bank statements and client folders arrive faster than anyone can index them. Ask what a client paid in a quarter, or pull every invoice naming a vendor, without opening files one at a time.",
  },
  {
    icon: Scale,
    title: "Solo attorneys and small law firms",
    body: "Contracts, exhibits and correspondence spread across dozens of PDFs. Ask what an agreement says about termination, then follow the citation back to the paragraph it came from.",
  },
  {
    icon: Home,
    title: "Real estate agents and transaction coordinators",
    body: "One closing produces disclosures, inspection reports, addenda and settlement statements. Keep the transaction file together and ask about dates, amounts and conditions.",
  },
  {
    icon: Building2,
    title: "SMB owners and operations managers",
    body: "Contracts, policies, supplier terms and reports accumulate across Google Drive and OneDrive. Connect the drive and ask a question instead of hunting through folders.",
  },
];

const steps = [
  {
    n: 1,
    title: "Add your documents",
    body: "Drag files in, or connect Google Drive or OneDrive over OAuth and import whole folders. MetaWurks processes each file and indexes its contents so it can be searched.",
  },
  {
    n: 2,
    title: "Ask in plain English",
    body: "MetaWurks uses retrieval-augmented generation: it searches your indexed documents for the passages that bear on your question, then answers from those passages rather than from general knowledge.",
  },
  {
    n: 3,
    title: "Check the answer against the source",
    body: "Answers cite the passages they were built from, so any figure can be traced back to the original file. Chat memory carries context across your history, so follow-up questions do not start over.",
  },
];

const exampleQuestions = [
  "What are the key findings in the Q4 report?",
  "Summarize the contract terms from the uploaded PDF",
  "Find all mentions of revenue projections across my documents",
  "Compare the data in my two spreadsheets",
];

// Consumed by the FAQPage JSON-LD on app/page.tsx. Each answer is assembled from the same
// strings rendered below, so every schema claim is visible on the page.
export const homeFaqs = [
  { q: "What is MetaWurks?", a: `${DEF_P1} ${DEF_P2}` },
  { q: "Who is MetaWurks for?", a: `${AUDIENCE_LEAD} ${AUDIENCE_SUMMARY}` },
  { q: "How does MetaWurks work?", a: `${HOW_LEAD} ${HOW_SUMMARY}` },
  { q: "What documents can MetaWurks read?", a: FILETYPES_SUMMARY },
  {
    q: "Which AI models does MetaWurks use?",
    a: `${MODELS_LEAD} The six providers are OpenAI, Anthropic, Google, xAI, DeepSeek and Perplexity.`,
  },
];

export default function HomeAnswerSections() {
  return (
    <>
      {/* What is MetaWurks? */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-6 text-center">
              What is <span className="gradient-warm-text">MetaWurks</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {DEF_P1}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {DEF_P2} The{" "}
              <Link href="/product" className="text-primary underline underline-offset-4 hover:no-underline">
                product page
              </Link>{" "}
              covers the platform in depth.
            </p>

            <div className="p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50">
              <p className="text-sm font-medium text-ai-violet mb-4">QUESTIONS PEOPLE ACTUALLY ASK</p>
              <ul className="space-y-3">
                {exampleQuestions.map((q) => (
                  <li key={q} className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-border/60">
                    &ldquo;{q}&rdquo;
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for? */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-5">
              Who is <span className="gradient-warm-text">MetaWurks</span> for?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {AUDIENCE_LEAD} {AUDIENCE_SUMMARY}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {icps.map((c) => (
              <div
                key={c.title}
                className="p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-ai-blue to-ai-violet flex items-center justify-center mb-5">
                  <c.icon className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-display font-semibold tracking-tight mb-3">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How does it work? */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-5">
              How does <span className="gradient-warm-text">MetaWurks</span> work?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {HOW_LEAD} {HOW_SUMMARY}
            </p>
          </div>

          <ol className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto list-none">
            {steps.map((s) => (
              <li key={s.n} className="p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 shrink-0 rounded-2xl bg-gradient-to-br from-ai-blue to-ai-cyan flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                    {s.n}
                  </div>
                  <h3 className="text-xl font-display font-semibold tracking-tight">{s.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>

          <p className="text-center text-muted-foreground mt-10 max-w-3xl mx-auto">
            The{" "}
            <Link href="/docs" className="text-primary underline underline-offset-4 hover:no-underline">
              MetaWurks documentation
            </Link>{" "}
            walks through uploading, chatting with your files, and connecting cloud storage.
          </p>
        </div>
      </section>

      {/* What can it do? — file types and models, both verified tables */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-5">
              What documents can <span className="gradient-warm-text">MetaWurks read</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{FILETYPES_SUMMARY}</p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto rounded-3xl border border-border/50 backdrop-blur-xl bg-card/60 mb-16">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <caption className="sr-only">
                File formats MetaWurks accepts, grouped by type, with maximum file size
              </caption>
              <thead>
                <tr className="border-b border-border/50">
                  <th scope="col" className="py-4 px-6 font-display font-semibold">Type</th>
                  <th scope="col" className="py-4 px-6 font-display font-semibold">Formats</th>
                  <th scope="col" className="py-4 px-6 font-display font-semibold">Maximum size</th>
                </tr>
              </thead>
              <tbody>
                {fileTypeGroups.map((row) => (
                  <tr key={row.group} className="border-t border-border/40">
                    <th scope="row" className="py-4 px-6 font-medium text-foreground">{row.group}</th>
                    <td className="py-4 px-6 text-muted-foreground">{row.formats}</td>
                    <td className="py-4 px-6 text-muted-foreground whitespace-nowrap">{row.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-5">
              Which <span className="gradient-warm-text">AI models</span> does MetaWurks use?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {MODELS_LEAD} The six providers are OpenAI, Anthropic, Google, xAI, DeepSeek
              and Perplexity.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto rounded-3xl border border-border/50 backdrop-blur-xl bg-card/60">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <caption className="sr-only">
                AI model providers available in MetaWurks and what each is best suited to
              </caption>
              <thead>
                <tr className="border-b border-border/50">
                  <th scope="col" className="py-4 px-6 font-display font-semibold">Provider</th>
                  <th scope="col" className="py-4 px-6 font-display font-semibold">Models</th>
                  <th scope="col" className="py-4 px-6 font-display font-semibold">Best for</th>
                </tr>
              </thead>
              <tbody>
                {modelProviders.map((row) => (
                  <tr key={row.provider} className="border-t border-border/40">
                    <th scope="row" className="py-4 px-6 font-medium text-foreground">{row.provider}</th>
                    <td className="py-4 px-6 text-muted-foreground">{row.models}</td>
                    <td className="py-4 px-6 text-muted-foreground">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
            Plan-by-plan detail is on the{" "}
            <Link href="/pricing" className="text-primary underline underline-offset-4 hover:no-underline">
              pricing page
            </Link>
            , and we write about choosing AI tools for document-heavy work on the{" "}
            <Link href="/blog" className="text-primary underline underline-offset-4 hover:no-underline">
              MetaWurks blog
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
