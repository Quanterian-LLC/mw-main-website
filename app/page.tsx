import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EnvironmentsSection from "@/components/EnvironmentsSection";
import OrchestrationSection from "@/components/OrchestrationSection";
import UseCasesSection from "@/components/UseCasesSection";
import DashboardPreview from "@/components/DashboardPreview";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE, organizationSchema, websiteSchema } from "@/lib/seo";

// Before this, the homepage had no metadata of its own and inherited the generic
// site-wide title from app/layout.tsx - the same title ten other routes were serving.
export const metadata: Metadata = {
  title: "MetaWurks - Chat With Your Business Documents Using AI",
  description:
    "Upload your PDFs, spreadsheets and contracts, then ask questions in plain English. Answers come from your own files, with citations. Free plan available.",
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "MetaWurks",
    title: "MetaWurks - Chat With Your Business Documents Using AI",
    description:
      "Upload your PDFs, spreadsheets and contracts, then ask questions in plain English. Answers come from your own files, with citations.",
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
    title: "MetaWurks - Chat With Your Business Documents Using AI",
    description:
      "Ask your PDFs, spreadsheets and contracts questions in plain English. Answers from your own files, with citations.",
    images: ["/architecture.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, websiteSchema],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <JsonLd data={jsonLd} />
      <Navbar />
      <HeroSection />
      <EnvironmentsSection />
      <OrchestrationSection />
      <UseCasesSection />
      <DashboardPreview />
      <Footer />
    </main>
  );
}
