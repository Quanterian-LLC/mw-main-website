import type { Metadata } from "next";
import { SITE } from "@/lib/seo";

// This route's page is rendered by its own page.tsx. This layout exists only to give
// the route unique metadata: before this change it inherited the site-wide title and
// description from app/layout.tsx, which ten routes were sharing verbatim.
export const metadata: Metadata = {
  title: "About MetaWurks - The Team Behind the Platform | MetaWurks",
  description: "Who builds MetaWurks, what the platform is for, and how it approaches business documents and AI.",
  alternates: { canonical: `${SITE}/about-us` },
  openGraph: {
    type: "website",
    url: `${SITE}/about-us`,
    siteName: "MetaWurks",
    title: "About MetaWurks - The Team Behind the Platform | MetaWurks",
    description: "Who builds MetaWurks, what the platform is for, and how it approaches business documents and AI.",
  },
  twitter: {
    card: "summary",
    title: "About MetaWurks - The Team Behind the Platform | MetaWurks",
    description: "Who builds MetaWurks, what the platform is for, and how it approaches business documents and AI.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
