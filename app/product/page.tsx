import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ProductScreenshot from "@/components/ProductScreenshot";
import { SITE, organizationSchema, websiteSchema } from "@/lib/seo";
import {
  modelProviders,
  fileTypeGroups,
  comparisonRows,
  productFaqs,
  verifiedFeatures,
  entryPrice,
} from "@/lib/productContent";
import {
  Brain,
  Database,
  Shield,
  Upload,
  Search,
  Scale,
  Home,
  Building2,
  Calculator,
} from "lucide-react";

const PAGE_URL = `${SITE}/product`;

// Falls back to /pricing rather than rendering href={undefined}, which throws in
// next/link. Navbar reads the same variables with a non-null assertion; this page does
// not, because it must survive a preview build with an incomplete env.
const SIGNUP_URL = process.env.NEXT_PUBLIC_SIGNUP_URL || "/pricing";

// The only demo path that exists in this codebase. components/HeroSection.tsx:123 sends
// the homepage CTA to the same Calendly booking. The rewrite spec asked for a
// "2-Minute Demo"; no such asset exists, so the CTA is labelled for what it actually is.
// See FACTUAL_CONFLICTS.md section 7.
const DEMO_URL = "https://calendly.com/gtm-metawurks/30min?utm_source=product";

export const metadata: Metadata = {
  title: "AI Document Intelligence for Small Business | MetaWurks",
  // 138 characters - inside the ~155 Google renders before truncating.
  description:
    "MetaWurks turns your PDFs, spreadsheets and business files into an AI teammate you can query in plain English. From $19/month. Start free.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "MetaWurks",
    title: "AI Document Intelligence for Small Business | MetaWurks",
    description:
      "Upload your documents once. Ask questions in plain English. Get answers in seconds - from your own files, not the open web.",
    images: [
      {
        url: "/architecture.png",
        width: 1536,
        height: 1024,
        alt: "Diagram of the MetaWurks AI platform architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Document Intelligence for Small Business | MetaWurks",
    description:
      "Ask your PDFs, spreadsheets and contracts questions in plain English. Answers from your own files, with citations.",
    images: ["/architecture.png"],
  },
};

// JSON-LD. Every claim below is also visible in the markup rendered by this component,
// and both read from lib/productContent.ts so the two cannot drift apart.
//
// Deliberately absent: aggregateRating, review, and any price other than the $19 entry
// figure. No rating data exists anywhere in this repository, and the higher tiers carry
// unresolved contradictions (FACTUAL_CONFLICTS.md section 3).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "AI Document Intelligence for Small Business | MetaWurks",
      description:
        "MetaWurks turns your PDFs, spreadsheets and other business documents into an AI teammate you can query in plain English.",
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${PAGE_URL}#software` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE}/architecture.png` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Product", item: PAGE_URL },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${PAGE_URL}#software`,
      name: "MetaWurks",
      url: PAGE_URL,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "AI document intelligence platform",
      operatingSystem: "Web browser",
      description:
        "AI document intelligence platform. Upload PDFs, spreadsheets, presentations and images, or connect Google Drive and OneDrive, then ask questions about them in plain English and get answers drawn from your own files with citations.",
      featureList: [...verifiedFeatures],
      publisher: { "@id": `${SITE}/#organization` },
      offers: {
        "@type": "Offer",
        name: entryPrice.planName,
        price: entryPrice.amount,
        priceCurrency: entryPrice.currency,
        url: `${SITE}/pricing`,
        availability: "https://schema.org/InStock",
        description: "Entry paid plan, billed monthly. A free plan is also available.",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      isPartOf: { "@id": `${PAGE_URL}#webpage` },
      mainEntity: productFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const icpCards = [
  {
    icon: Calculator,
    title: "Bookkeepers and small accounting firms",
    body: "Invoices, receipts, bank statements and client folders pile up faster than anyone can index them. Upload a client's documents once, then ask what they paid in a given quarter, or pull every invoice mentioning a particular vendor, instead of opening files one at a time.",
    gradient: "from-ai-blue to-ai-cyan",
  },
  {
    icon: Scale,
    title: "Solo attorneys and small law firms",
    body: "Contracts, exhibits and correspondence live across dozens of PDFs. Ask what a specific agreement says about termination, or find every document that mentions a clause, and follow the citation straight back to the paragraph it came from.",
    gradient: "from-ai-violet to-ai-peach",
  },
  {
    icon: Home,
    title: "Real estate agents and transaction coordinators",
    body: "A single closing generates disclosures, inspection reports, addenda and settlement statements. Keep the whole transaction file in one place and ask about dates, amounts and conditions instead of scrolling a shared drive.",
    gradient: "from-ai-cyan to-ai-mint",
  },
  {
    icon: Building2,
    title: "SMB owners and operations managers",
    body: "Contracts, policies, supplier terms and reports accumulate across Google Drive and OneDrive. Connect the drive, ask a question in plain English, and get an answer sourced from documents your business already holds.",
    gradient: "from-ai-peach to-ai-violet",
  },
];

const features = [
  {
    icon: Search,
    title: "Plain-English retrieval",
    description:
      "Ask a question the way you would ask a colleague. MetaWurks finds the relevant passages in your own documents first, then answers from them.",
    gradient: "from-ai-blue to-ai-cyan",
  },
  {
    icon: Upload,
    title: "Your documents, indexed",
    description:
      "Upload files directly or import folders from Google Drive and OneDrive. Everything you add stays in Knowledge Sources and remains available across conversations.",
    gradient: "from-ai-violet to-ai-peach",
  },
  {
    icon: Brain,
    title: "Six model providers",
    description:
      "OpenAI, Anthropic, Google, xAI, DeepSeek and Perplexity in one workspace, switchable mid-conversation to suit the task.",
    gradient: "from-ai-cyan to-ai-mint",
  },
  {
    icon: Shield,
    title: "Private connections",
    description:
      "Cloud storage connects over OAuth, so your password is never stored, and each connection stays private to the user who created it.",
    gradient: "from-ai-peach to-ai-violet",
  },
];

const processSteps = [
  {
    title: "Intelligent Setup",
    description:
      "Add your documents once. Drag and drop files, or connect Google Drive or OneDrive and import whole folders. MetaWurks processes each file and indexes its contents so it can be searched. Nothing to install, and no IT team required.",
    gradient: "from-ai-blue to-ai-cyan",
  },
  {
    title: "Semantic Understanding",
    description:
      "Ask your question in plain English. MetaWurks uses retrieval-augmented generation: it searches your indexed documents for the sections that actually bear on the question, then uses those sections as the context for the answer instead of reaching for general knowledge.",
    gradient: "from-ai-violet to-ai-peach",
  },
  {
    title: "Personalized Insight Delivery",
    description:
      "You get an answer built from your own files, citing the passages it came from so any figure can be traced back to its source document. Chat memory carries context across your history, so a follow-up question does not start from scratch.",
    gradient: "from-ai-cyan to-ai-mint",
  },
];

const exampleQuestions = [
  "What are the key findings in the Q4 report?",
  "Summarize the contract terms from the uploaded PDF",
  "Find all mentions of revenue projections across my documents",
  "Compare the data in my two spreadsheets",
];

const securityFacts = [
  "OAuth tokens and sensitive data are stored encrypted, and tokens are revoked automatically when you disconnect an account.",
  "Data is transmitted over HTTPS.",
  "Access controls are applied to prevent unauthorized use.",
  "Cloud storage connects over OAuth. Your password is never shared with MetaWurks or stored by it.",
  "Connections are per-user: the accounts you connect stay private to you.",
  "Hosting and storage run on Google Cloud Platform.",
  "Deleting your account removes the associated data from MetaWurks systems.",
  "Personal data is not sold or disclosed to third parties for advertising or marketing.",
];

function SectionGlow() {
  return (
    <div
      aria-hidden="true"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
      style={{
        background: "radial-gradient(circle, hsl(270, 80%, 60%, 0.3), transparent 60%)",
        filter: "blur(100px)",
      }}
    />
  );
}

export default function Product() {
  return (
    <main className="min-h-screen bg-background">
      <JsonLd data={jsonLd} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <SectionGlow />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-sm font-medium text-ai-violet mb-4">
              AI DOCUMENT INTELLIGENCE PLATFORM
            </span>

            {/* The page's single H1, and its LCP element - which is why nothing above it
                is given next/image priority. */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
              AI Document Intelligence for Bookkeepers,{" "}
              <span className="gradient-warm-text">Law Firms &amp; Real Estate Teams</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Upload your documents once. Ask questions in plain English. Get answers in
              seconds &mdash; from your own files, not the open web.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl text-base font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(220, 70%, 55%), hsl(220, 70%, 50%), hsl(210, 50%, 70%))",
                  }}
                />
                <span className="relative z-10 text-white font-semibold">Start Free</span>
              </Link>

              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-10 rounded-2xl text-base font-semibold backdrop-blur-xl bg-card/60 border border-border/50 text-foreground hover:bg-card/80 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Book a Live Demo
              </a>
            </div>

            {/* Trust line. "$19/month" is verified against app/pricing/page.tsx:48. The
                spec's "15-minute setup" has no support anywhere in this repository and
                was dropped - FACTUAL_CONFLICTS.md section 7. */}
            <p className="text-sm text-muted-foreground mt-6">
              From ${entryPrice.amount}/month &middot; Free plan available &middot; No IT team
              required
            </p>
          </div>
        </div>
      </section>

      {/* Product visual */}
      <section className="pb-20 relative">
        <div className="container mx-auto px-6 relative z-10">
          <ProductScreenshot />
        </div>
      </section>

      {/* What is MetaWurks? */}
      <section className="py-24 relative overflow-hidden">
        <SectionGlow />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-8 text-center">
              What is <span className="gradient-warm-text">MetaWurks</span>?
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              MetaWurks is an AI document intelligence platform for small businesses. It
              ingests your PDFs, spreadsheets, presentations, images and text documents
              &mdash; invoices and contracts included &mdash; either uploaded directly or
              imported from Google Drive and OneDrive. You then query them in plain English
              and get answers back in seconds, drawn from your own files and cited to the
              passages they came from.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The difference from an ordinary search box is that MetaWurks reads for meaning
              rather than matching keywords, so a question phrased the way you would say it
              out loud still lands on the right paragraph in the right file. A free plan is
              available, and paid plans start at ${entryPrice.amount}/month.
            </p>

            <div className="p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50">
              <p className="text-sm font-medium text-ai-violet mb-4">
                QUESTIONS PEOPLE ACTUALLY ASK
              </p>
              <ul className="space-y-3">
                {exampleQuestions.map((q) => (
                  <li
                    key={q}
                    className="text-muted-foreground font-body leading-relaxed pl-4 border-l-2 border-border/60"
                  >
                    &ldquo;{q}&rdquo;
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight">
              What you get with{" "}
              <span className="gradient-warm-text">document intelligence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 hover:scale-[1.02] transition-all duration-500 overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon
                    className="w-7 h-7 text-primary-foreground"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-display font-semibold tracking-tight mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-body font-normal leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison with general-purpose assistants */}
      <section className="py-24 relative overflow-hidden">
        <SectionGlow />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-6">
              How is MetaWurks different from{" "}
              <span className="gradient-warm-text">ChatGPT</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              General-purpose assistants are built around a conversation. MetaWurks is built
              around a document library you maintain. The table compares the two by design
              intent rather than by feature checklist, because any one vendor&rsquo;s feature
              list moves faster than a web page can.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto rounded-3xl border border-border/50 backdrop-blur-xl bg-card/60">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <caption className="sr-only">
                MetaWurks compared with general-purpose AI chat assistants across nine
                dimensions
              </caption>
              <thead>
                <tr className="border-b border-border/50">
                  <th scope="col" className="py-4 px-6 font-display font-semibold">
                    Dimension
                  </th>
                  <th scope="col" className="py-4 px-6 font-display font-semibold">
                    MetaWurks
                  </th>
                  <th scope="col" className="py-4 px-6 font-display font-semibold">
                    General-purpose AI assistant
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.dimension} className="border-t border-border/40 align-top">
                    <th
                      scope="row"
                      className="py-5 px-6 font-medium text-foreground whitespace-nowrap"
                    >
                      {row.dimension}
                    </th>
                    <td className="py-5 px-6 text-muted-foreground leading-relaxed">
                      {row.metawurks}
                    </td>
                    <td className="py-5 px-6 text-muted-foreground leading-relaxed">
                      {row.assistant}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
            The distinction matters most where the documents are confidential. We wrote about
            that in{" "}
            <Link
              href="/blog/chatgpt-claude-training-client-financial-data"
              className="text-primary underline underline-offset-4 hover:no-underline"
            >
              ChatGPT and Claude are training on your clients&rsquo; confidential financial
              data
            </Link>{" "}
            and{" "}
            <Link
              href="/blog/why-general-purpose-ai-no-longer-enough"
              className="text-primary underline underline-offset-4 hover:no-underline"
            >
              why general-purpose AI is no longer enough
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Who is it for? */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-6">
              Who is <span className="gradient-warm-text">MetaWurks</span> for?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Four groups whose day is shaped by documents somebody else produced, and who
              rarely have the head-count to index them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {icpCards.map((card) => (
              <div
                key={card.title}
                className="group relative p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 hover:scale-[1.02] transition-all duration-500 overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6`}
                >
                  <card.icon className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-display font-semibold tracking-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground font-body font-normal leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-10 max-w-3xl mx-auto">
            Further reading:{" "}
            <Link
              href="/blog/job-bookkeepers-want-automated"
              className="text-primary underline underline-offset-4 hover:no-underline"
            >
              the job bookkeepers want automated is not bookkeeping
            </Link>
            , and{" "}
            <Link
              href="/blog/real-world-use-cases-metawurks-industries"
              className="text-primary underline underline-offset-4 hover:no-underline"
            >
              real-world MetaWurks use cases from legal to HR to finance
            </Link>
            .
          </p>
        </div>
      </section>

      {/* How does it work? */}
      <section className="py-24 relative overflow-hidden">
        <SectionGlow />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-6">
              How does <span className="gradient-warm-text">MetaWurks</span> work?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Three stages, from a folder of files to an answer you can check.
            </p>
          </div>

          <ol className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto list-none">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="group relative p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 hover:scale-[1.02] transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-primary-foreground font-display font-bold text-xl`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-display font-semibold tracking-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground font-body font-normal leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <figure className="max-w-4xl mx-auto mt-16">
            <div className="rounded-3xl overflow-hidden border border-border/50">
              {/* A real asset from this repository - the architecture diagram already
                  published on /docs. Explicit width/height reserve the layout box, and
                  lazy loading (next/image's default) is right this far below the fold. */}
              <Image
                src="/architecture.png"
                alt="MetaWurks platform architecture: document ingestion feeding an indexed store, a retrieval layer, and a multi-provider AI model layer that returns cited answers."
                width={1536}
                height={1024}
                sizes="(max-width: 896px) 100vw, 896px"
                className="w-full h-auto"
              />
            </div>
            <figcaption className="text-sm text-muted-foreground text-center mt-4">
              How the platform fits together. The full walkthrough is in the{" "}
              <Link
                href="/docs"
                className="text-primary underline underline-offset-4 hover:no-underline"
              >
                MetaWurks documentation
              </Link>
              .
            </figcaption>
          </figure>
        </div>
      </section>

      {/* File types */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-6">
              What documents can{" "}
              <span className="gradient-warm-text">MetaWurks read</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Upload from your machine, or import folders from a connected drive.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto rounded-3xl border border-border/50 backdrop-blur-xl bg-card/60">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <caption className="sr-only">
                File formats MetaWurks accepts, grouped by type, with maximum file size
              </caption>
              <thead>
                <tr className="border-b border-border/50">
                  <th scope="col" className="py-4 px-6 font-display font-semibold">
                    Type
                  </th>
                  <th scope="col" className="py-4 px-6 font-display font-semibold">
                    Formats
                  </th>
                  <th scope="col" className="py-4 px-6 font-display font-semibold">
                    Maximum size
                  </th>
                </tr>
              </thead>
              <tbody>
                {fileTypeGroups.map((row) => (
                  <tr key={row.group} className="border-t border-border/40">
                    <th scope="row" className="py-5 px-6 font-medium text-foreground">
                      {row.group}
                    </th>
                    <td className="py-5 px-6 text-muted-foreground">{row.formats}</td>
                    <td className="py-5 px-6 text-muted-foreground whitespace-nowrap">
                      {row.limit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
            Files can also come straight from cloud storage &mdash;{" "}
            <Link
              href="/blog/drive-connectivity-document-uploads"
              className="text-primary underline underline-offset-4 hover:no-underline"
            >
              how drive connectivity and document uploads work
            </Link>{" "}
            covers importing from Google Drive and OneDrive.
          </p>
        </div>
      </section>

      {/* AI models */}
      <section className="py-24 relative overflow-hidden">
        <SectionGlow />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-6">
              Which <span className="gradient-warm-text">AI models</span> does MetaWurks use?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Six providers in one workspace. Switch model mid-conversation to match the task
              &mdash; one is better at long-form reasoning, another at fetching something
              current.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto rounded-3xl border border-border/50 backdrop-blur-xl bg-card/60">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <caption className="sr-only">
                AI model providers available in MetaWurks, the models each offers, and what
                each is best suited to
              </caption>
              <thead>
                <tr className="border-b border-border/50">
                  <th scope="col" className="py-4 px-6 font-display font-semibold">
                    Provider
                  </th>
                  <th scope="col" className="py-4 px-6 font-display font-semibold">
                    Models
                  </th>
                  <th scope="col" className="py-4 px-6 font-display font-semibold">
                    Best for
                  </th>
                </tr>
              </thead>
              <tbody>
                {modelProviders.map((row) => (
                  <tr key={row.provider} className="border-t border-border/40">
                    <th scope="row" className="py-5 px-6 font-medium text-foreground">
                      {row.provider}
                    </th>
                    <td className="py-5 px-6 text-muted-foreground">{row.models}</td>
                    <td className="py-5 px-6 text-muted-foreground">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
            The{" "}
            <Link
              href="/docs"
              className="text-primary underline underline-offset-4 hover:no-underline"
            >
              documentation carries the current model list
            </Link>{" "}
            and which models each plan includes. For why a multi-model approach beats
            committing to one vendor, see{" "}
            <Link
              href="/blog/multi-llm-systems-future"
              className="text-primary underline underline-offset-4 hover:no-underline"
            >
              why multi-LLM systems are the future of automation
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Security */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-8 text-center">
              Is MetaWurks <span className="gradient-warm-text">secure enough</span> for
              financial and legal documents?
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              For this audience confidentiality is the gating question, not accuracy. Here is
              what is actually in place, stated no more strongly than the{" "}
              <Link
                href="/privacy-policy"
                className="text-primary underline underline-offset-4 hover:no-underline"
              >
                MetaWurks privacy policy
              </Link>{" "}
              states it.
            </p>

            <div className="p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 mb-8">
              <ul className="space-y-4">
                {securityFacts.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <Database
                      className="w-5 h-5 mt-0.5 shrink-0 text-ai-violet"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Two honest caveats. No system is completely secure, and the privacy policy says
              so plainly rather than promising otherwise. And if you carry professional
              confidentiality obligations of your own &mdash; IRC Section 7216 consent for tax
              preparers being the sharpest example, which we covered in{" "}
              <Link
                href="/blog/ai-tax-research-section-7216"
                className="text-primary underline underline-offset-4 hover:no-underline"
              >
                the rule your AI tax research just ran into
              </Link>{" "}
              &mdash; those remain yours to satisfy with your own compliance adviser. No
              platform discharges them for you. Related:{" "}
              <Link
                href="/blog/ai-bookkeeping-client-data-confidentiality"
                className="text-primary underline underline-offset-4 hover:no-underline"
              >
                83% of accounting firms have no controls over client data in AI tools
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 relative overflow-hidden">
        <SectionGlow />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-8">
              How much does <span className="gradient-warm-text">MetaWurks cost</span>?
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              There is a free plan to start on, and paid plans begin at $
              {entryPrice.amount}/month with the Starter tier. Higher tiers raise the token
              limit, add team members and shared workspaces, and a custom tier covers larger
              deployments. Pricing is per account rather than per seat, which is what makes it
              workable for a solo practitioner or a firm of three.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Plan-by-plan detail &mdash; models, token limits, storage, team size and support
              &mdash; is on the{" "}
              <Link
                href="/pricing"
                className="text-primary underline underline-offset-4 hover:no-underline"
              >
                MetaWurks pricing page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight">
              Frequently asked <span className="gradient-warm-text">questions</span>
            </h2>
          </div>

          {/* Every question here is also in the FAQPage JSON-LD above, from the same array
              in lib/productContent.ts. Both are always visible - no hidden SEO-only
              content, and no accordion that would hide an answer behind a click. */}
          <div className="max-w-3xl mx-auto space-y-6">
            {productFaqs.map((faq) => (
              <div
                key={faq.question}
                className="p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50"
              >
                <h3 className="text-lg font-display font-semibold tracking-tight mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground font-body font-normal leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA - one only. The previous page closed twice with near-identical copy. */}
      <section className="py-24 relative overflow-hidden">
        <SectionGlow />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-6">
              Put your documents to <span className="gradient-warm-text">work</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Add your first files and ask a question. From ${entryPrice.amount}/month, with a
              free plan to start on.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl text-base font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(220, 70%, 55%), hsl(220, 70%, 50%), hsl(210, 50%, 70%))",
                  }}
                />
                <span className="relative z-10 text-white font-semibold">Start Free</span>
              </Link>

              <Link
                href="/pricing"
                className="inline-flex items-center justify-center h-14 px-10 rounded-2xl text-base font-semibold backdrop-blur-xl bg-card/60 border border-border/50 text-foreground hover:bg-card/80 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Compare plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
