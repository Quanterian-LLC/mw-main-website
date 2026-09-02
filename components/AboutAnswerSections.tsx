import Link from "next/link";
import { modelProviders } from "@/lib/productContent";

// Answer-first sections for /about-us.
//
// These replace a block that was duplicated verbatim from /product ("Empowering your
// business with AI-driven insights" plus the same three process steps). Duplicating a
// pillar page's copy on the entity page competes with it and tells a search engine nothing
// new about the entity, so the space is used to answer entity questions instead.
//
// SOURCING — every claim traces to a file in this repository:
//   retrieval / RAG            app/docs/page.tsx:100
//   citations                  app/docs/page.tsx:460
//   Drive / OneDrive, OAuth    app/docs/page.tsx:103, :619, :650-651
//   six providers              app/docs/page.tsx:399-404
//   file types                 app/docs/page.tsx:97
//   exports                    app/docs/page.tsx:122, :512-516
//   security statements        app/privacy-policy/page.tsx:87, :100, :104, :111, :120-122
//   parent company             components/Footer.tsx / lib/seo.ts (SkyllMakers)
//   registered address         components/Footer.tsx
//
// NOT stated here, because the repository does not support it: a founding year, any
// founder or team credential beyond the names and roles already published, SOC 2 or any
// other certification, SSO, role-based access control, audit logs, end-to-end encryption,
// uptime or SLA figures, and any claim about whether customer documents are used to train
// models. See SEO_AEO_IMPLEMENTATION_REPORT.md Appendix A.

export const aboutFaqs = [
  {
    q: "What is MetaWurks?",
    a: "MetaWurks is an AI document intelligence platform. It takes the documents a business already has — PDFs, spreadsheets, presentations, text files and images — and makes them answerable: you ask a question in plain English and get a response drawn from those files, citing the passage it came from.",
  },
  {
    q: "What does MetaWurks actually do?",
    a: "It indexes the documents you add, then answers questions about them using retrieval-augmented generation. Rather than answering from general knowledge, it first searches your own files for the passages that bear on the question and builds the answer from those. You can add files by upload or by connecting Google Drive or OneDrive, switch between six model providers mid-conversation, and export results to PDF, Word, Excel, PowerPoint, CSV or plain text.",
  },
  {
    q: "Who is MetaWurks for?",
    a: "Document-heavy small businesses: bookkeepers and small accounting firms, solo attorneys and small law firms, real estate agents and transaction coordinators, and SMB owners and operations managers. What they share is a working day shaped by documents other people produced, and no head-count to index them.",
  },
  {
    q: "What makes MetaWurks different?",
    a: "A general-purpose assistant is built around a conversation; MetaWurks is built around a document library you maintain. Your files stay available across conversations, one question can search several documents at once, answers cite their source passage, and you can change model provider without changing tools.",
  },
  {
    q: "Is MetaWurks part of a larger company?",
    a: "MetaWurks is built by SkyllMakers. The company is registered at 16192 Coastal Hwy, Lewes, DE 19958, United States.",
  },
];

export default function AboutAnswerSections() {
  return (
    <>
      {/* What is MetaWurks / what it does */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-6">
              What is MetaWurks?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {aboutFaqs[0].a}
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-6">
              What does MetaWurks actually do?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {aboutFaqs[1].a}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The{" "}
              <Link href="/product" className="text-primary underline underline-offset-4 hover:no-underline">
                product page
              </Link>{" "}
              covers the platform in full, and the{" "}
              <Link href="/docs" className="text-primary underline underline-offset-4 hover:no-underline">
                documentation
              </Link>{" "}
              walks through uploading, querying and connecting cloud storage.
            </p>
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-6">
              Who is MetaWurks for?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {aboutFaqs[2].a}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              That focus is why the platform is priced per account rather than per seat, and
              why a solo practitioner can start on the same product a ten-person firm uses.
              Plan detail is on the{" "}
              <Link href="/pricing" className="text-primary underline underline-offset-4 hover:no-underline">
                pricing page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* What makes it different */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-6">
              What makes MetaWurks different?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {aboutFaqs[3].a}
            </p>

            <div className="p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 mb-8">
              <p className="text-sm font-medium text-ai-violet mb-4">
                MODEL PROVIDERS AVAILABLE IN ONE WORKSPACE
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                {modelProviders.map((m) => (
                  <li key={m.provider} className="text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-medium">{m.provider}</span>{" "}
                    &mdash; {m.models}
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-2xl font-display font-semibold tracking-tight mb-4">
              Is MetaWurks part of a larger company?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {aboutFaqs[4].a}
            </p>

            <h3 className="text-2xl font-display font-semibold tracking-tight mb-4">
              How MetaWurks handles your data
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Most of our users handle other people&rsquo;s confidential records, so it is
              worth being precise rather than reassuring. OAuth tokens and sensitive data are
              stored encrypted, data is transmitted over HTTPS, and access controls are
              applied to prevent unauthorized use. Cloud storage connects over OAuth, so your
              password is never shared with MetaWurks or stored by it, and each connection is
              private to the user who created it. Hosting runs on Google Cloud Platform,
              deleting your account removes the associated data, and personal data is not
              sold or disclosed to third parties for advertising.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The{" "}
              <Link href="/privacy-policy" className="text-primary underline underline-offset-4 hover:no-underline">
                privacy policy
              </Link>{" "}
              sets out the full terms, including what is collected and how long it is kept. If
              you carry professional confidentiality obligations of your own, confirm them
              with your compliance adviser before uploading regulated client records.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
