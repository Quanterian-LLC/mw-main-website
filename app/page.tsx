import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EnvironmentsSection from "@/components/EnvironmentsSection";
import OrchestrationSection from "@/components/OrchestrationSection";
import UseCasesSection from "@/components/UseCasesSection";
import DashboardPreview from "@/components/DashboardPreview";
import HomeAnswerSections, { homeFaqs } from "@/components/HomeAnswerSections";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE, organizationSchema, websiteSchema } from "@/lib/seo";

// Before this, the homepage had no metadata of its own and inherited the generic
// site-wide title from app/layout.tsx - the same title ten other routes were serving.
export const metadata: Metadata = {
  title: "MetaWurks — AI That Answers Questions From Your Documents",
  description:
    "Upload your PDFs, spreadsheets and business files, then ask questions in plain English. Answers come from your own documents and cite their source. Free plan available.",
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "MetaWurks",
    title: "MetaWurks — AI That Answers Questions From Your Documents",
    description:
      "Upload your PDFs, spreadsheets and business files, then ask questions in plain English. Answers come from your own documents and cite their source.",
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
    title: "MetaWurks — AI That Answers Questions From Your Documents",
    description:
      "Ask your PDFs, spreadsheets and contracts questions in plain English. Answers from your own files, with citations.",
    images: ["/architecture.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    {
      "@type": "WebPage",
      "@id": SITE + "/#webpage",
      url: SITE,
      name: "MetaWurks — AI That Answers Questions From Your Documents",
      description:
        "AI document intelligence platform. Upload your PDFs, spreadsheets and business files, or connect Google Drive and OneDrive, then ask questions in plain English.",
      isPartOf: { "@id": SITE + "/#website" },
      about: { "@id": SITE + "/#organization" },
    },
    // Every question and answer below is rendered visibly by <HomeAnswerSections />.
    // Nothing is asserted here that a reader cannot see on the page.
    {
      "@type": "FAQPage",
      "@id": SITE + "/#faq",
      isPartOf: { "@id": SITE + "/#webpage" },
      mainEntity: homeFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <JsonLd data={jsonLd} />
      <Navbar />
      <HeroSection />
      {/* Answer-first sections sit directly under the hero: the definition, the audience,
          the workflow and the capability tables are what a reader — and an answer engine —
          needs before any of the visual sections below. */}
      <HomeAnswerSections />
      <EnvironmentsSection />
      <OrchestrationSection />
      <UseCasesSection />
      <DashboardPreview />
      <Footer />
    </main>
  );
}
