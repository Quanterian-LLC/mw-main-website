import type { Metadata } from "next";
import { SITE } from "@/lib/seo";

// This route's page is rendered by its own page.tsx. This layout exists only to give
// the route unique metadata: before this change it inherited the site-wide title and
// description from app/layout.tsx, which ten routes were sharing verbatim.
export const metadata: Metadata = {
  title: "Privacy Policy - Data Handling and Storage | MetaWurks",
  description: "How MetaWurks collects, stores, processes and deletes your data, including OAuth tokens, uploaded file content and third-party service providers.",
  alternates: { canonical: `${SITE}/privacy-policy` },
  openGraph: {
    type: "website",
    url: `${SITE}/privacy-policy`,
    siteName: "MetaWurks",
    title: "Privacy Policy - Data Handling and Storage | MetaWurks",
    description: "How MetaWurks collects, stores, processes and deletes your data.",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - Data Handling and Storage | MetaWurks",
    description: "How MetaWurks collects, stores, processes and deletes your data.",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
