import type { Metadata } from "next";
import { SITE } from "@/lib/seo";

// This route's page is rendered by its own page.tsx. This layout exists only to give
// the route unique metadata: before this change it inherited the site-wide title and
// description from app/layout.tsx, which ten routes were sharing verbatim.
export const metadata: Metadata = {
  title: "Documentation - Uploading, Chatting and Connections | MetaWurks",
  description: "How to use MetaWurks: uploading documents, chatting with your files, choosing an AI model, connecting Google Drive and OneDrive, and exporting results.",
  alternates: { canonical: `${SITE}/docs` },
  openGraph: {
    type: "website",
    url: `${SITE}/docs`,
    siteName: "MetaWurks",
    title: "Documentation - Uploading, Chatting and Connections | MetaWurks",
    description: "How to use MetaWurks: uploading documents, chatting with your files, choosing a model, and connecting cloud storage.",
  },
  twitter: {
    card: "summary",
    title: "Documentation - Uploading, Chatting and Connections | MetaWurks",
    description: "How to use MetaWurks: uploading documents, chatting with your files, choosing a model, and connecting cloud storage.",
  },
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
