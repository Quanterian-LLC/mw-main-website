import type { Metadata } from "next";
import { SITE } from "@/lib/seo";

// This route's page is rendered by its own page.tsx. This layout exists only to give
// the route unique metadata: before this change it inherited the site-wide title and
// description from app/layout.tsx, which ten routes were sharing verbatim.
export const metadata: Metadata = {
  title: "Contact MetaWurks - Sales, Support and Demos | MetaWurks",
  description: "Questions about connecting your document stack, a security review, or plan pricing? Reach the MetaWurks team by form, email or phone.",
  alternates: { canonical: `${SITE}/contact` },
  openGraph: {
    type: "website",
    url: `${SITE}/contact`,
    siteName: "MetaWurks",
    title: "Contact MetaWurks - Sales, Support and Demos | MetaWurks",
    description: "Reach the MetaWurks team by form, email or phone.",
  },
  twitter: {
    card: "summary",
    title: "Contact MetaWurks - Sales, Support and Demos | MetaWurks",
    description: "Reach the MetaWurks team by form, email or phone.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
