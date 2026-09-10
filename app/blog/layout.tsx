import type { Metadata } from "next";
import { SITE } from "@/lib/seo";

// This route's page is rendered by its own page.tsx. This layout exists only to give
// the route unique metadata: before this change it inherited the site-wide title and
// description from app/layout.tsx, which ten routes were sharing verbatim.
export const metadata: Metadata = {
  title: "MetaWurks Blog - AI for Accounting and Document-Heavy Work",
  description: "Articles on AI in accounting and bookkeeping: client data confidentiality, month-end close, document workflows and choosing tools that fit a small firm.",
  alternates: { canonical: `${SITE}/blog` },
  openGraph: {
    type: "website",
    url: `${SITE}/blog`,
    siteName: "MetaWurks",
    title: "MetaWurks Blog - AI for Accounting and Document-Heavy Work",
    description: "Articles on AI in accounting and bookkeeping, document workflows, and choosing tools that fit a small firm.",
  },
  twitter: {
    card: "summary",
    title: "MetaWurks Blog - AI for Accounting and Document-Heavy Work",
    description: "Articles on AI in accounting and bookkeeping, document workflows, and choosing tools that fit a small firm.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
