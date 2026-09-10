import type { Metadata } from "next";
import { SITE } from "@/lib/seo";

// This route's page is rendered by its own page.tsx. This layout exists only to give
// the route unique metadata: before this change it inherited the site-wide title and
// description from app/layout.tsx, which ten routes were sharing verbatim.
export const metadata: Metadata = {
  title: "Pricing - AI Document Platform from $19/month | MetaWurks",
  description: "MetaWurks pricing: a free plan, Starter from $19/month, plus Professional, Enterprise and custom tiers. Priced per account, not per seat.",
  alternates: { canonical: `${SITE}/pricing` },
  openGraph: {
    type: "website",
    url: `${SITE}/pricing`,
    siteName: "MetaWurks",
    title: "Pricing - AI Document Platform from $19/month | MetaWurks",
    description: "A free plan, Starter from $19/month, and higher tiers. Priced per account, not per seat - no five-user minimum.",
  },
  twitter: {
    card: "summary",
    title: "Pricing - AI Document Platform from $19/month | MetaWurks",
    description: "A free plan, Starter from $19/month, and higher tiers. Priced per account, not per seat - no five-user minimum.",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
