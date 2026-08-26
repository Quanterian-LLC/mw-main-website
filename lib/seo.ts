// Shared SEO constants.
//
// SITE is duplicated in app/blog/[id]/page.tsx as a local const; that file is left
// untouched. New code imports from here so there is one place to change the origin.

export const SITE = "https://metawurks.com";

export const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${SITE}${path.startsWith("/") ? path : `/${path}`}`;

// Organization details are taken verbatim from components/Footer.tsx, which is the
// only place on the site where the postal address, phone number and social profiles
// are published. Nothing here is inferred.
export const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "MetaWurks",
  url: SITE,
  logo: {
    "@type": "ImageObject",
    url: `${SITE}/Untitled design.svg`,
  },
  email: "admin@metawurks.com",
  telephone: "+1-914-265-5072",
  address: {
    "@type": "PostalAddress",
    streetAddress: "16192 Coastal Hwy",
    addressLocality: "Lewes",
    addressRegion: "DE",
    postalCode: "19958",
    addressCountry: "US",
  },
  sameAs: [
    "https://x.com/Metawurks_ai",
    "https://instagram.com/metawurks/",
    "https://www.linkedin.com/company/metawurks/about/",
  ],
} as const;

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  name: "MetaWurks",
  url: SITE,
  publisher: { "@id": `${SITE}/#organization` },
} as const;
