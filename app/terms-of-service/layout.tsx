import type { Metadata } from "next";
import { SITE } from "@/lib/seo";

// This route's page is rendered by its own page.tsx. This layout exists only to give
// the route unique metadata: before this change it inherited the site-wide title and
// description from app/layout.tsx, which ten routes were sharing verbatim.
export const metadata: Metadata = {
  title: "Terms of Service | MetaWurks",
  description: "The terms governing use of the MetaWurks platform, including account responsibilities, acceptable use and limitations of liability.",
  alternates: { canonical: `${SITE}/terms-of-service` },
  openGraph: {
    type: "website",
    url: `${SITE}/terms-of-service`,
    siteName: "MetaWurks",
    title: "Terms of Service | MetaWurks",
    description: "The terms governing use of the MetaWurks platform.",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | MetaWurks",
    description: "The terms governing use of the MetaWurks platform.",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
