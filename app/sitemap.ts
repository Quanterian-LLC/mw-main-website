import type { MetadataRoute } from "next";
import { blogPostsData } from "@/lib/blogPosts";
import { SITE } from "@/lib/seo";

// https://metawurks.com/sitemap.xml returned 404 before this file existed, and
// robots.txt declared no sitemap, so the 37 blog posts had no discovery path beyond
// the paginated listing.
//
// Only routes that actually exist in app/ are listed. Verified against the directory
// tree at commit b7a84c9:
//   app/page.tsx, app/product, app/pricing, app/about-us, app/blog, app/blog/[id],
//   app/contact, app/docs, app/privacy-policy, app/terms-of-service
// app/api/* is excluded - route handlers, not pages. app/not-found.tsx is excluded.
//
// Deliberately NOT listed: /for/bookkeepers, /for/law-firms, /for/real-estate and
// /for/small-business. The rewrite spec references them but they do not exist; a
// sitemap entry for a 404 is worse than no entry. See FACTUAL_CONFLICTS.md section 7.

// Posts store dates as "21 August, 2026". An unparseable date yields undefined rather
// than a wrong lastModified, which is the same rule app/blog/[id]/page.tsx applies to
// article:published_time.
function postDate(date: string): Date | undefined {
  const parsed = Date.parse(date.replace(",", ""));
  return Number.isNaN(parsed) ? undefined : new Date(parsed);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/product`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/pricing`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/docs`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE}/about-us`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/terms-of-service`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const posts: MetadataRoute.Sitemap = Object.entries(blogPostsData).map(([id, post]) => ({
    url: `${SITE}/blog/${id}`,
    lastModified: postDate(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...posts];
}
