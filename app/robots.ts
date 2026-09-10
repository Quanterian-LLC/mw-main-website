import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

// Replaces public/robots.txt, which has been deleted.
//
// Both cannot coexist: a static file in public/ is served directly and would shadow this
// route, leaving two robots implementations that can disagree. There is now exactly one.
//
// What changed from the static file:
//   - the sitemap is declared (it did not exist before, and was not referenced)
//   - AI crawlers and AI search agents are named explicitly rather than relying on the
//     wildcard, so the grant is intentional and visible rather than incidental
//
// The named agents, and why each is listed separately:
//   GPTBot          OpenAI's training/indexing crawler
//   OAI-SearchBot   OpenAI's crawler for ChatGPT search results
//   ChatGPT-User    fetches a page when a ChatGPT user follows a link to it
//   ClaudeBot       Anthropic's crawler
//   Claude-Web      Anthropic's user-initiated fetcher
//   anthropic-ai    legacy Anthropic agent token, still seen in the wild
//   PerplexityBot   Perplexity's index crawler
//   Perplexity-User user-initiated fetch from a Perplexity answer
//   Google-Extended does NOT crawl; it is the opt-in token that governs whether content
//                   already fetched by Googlebot may be used by Gemini and grounding.
//                   Allowing it is what makes the site eligible for AI Overviews.
//
// All are ALLOW. That is a deliberate AEO decision: the point of this work is to be
// quotable by answer engines. To reverse it for one agent, change its `allow` to
// `disallow` here - not by re-adding a static robots.txt.
//
// /api/* is disallowed for every agent. Those are route handlers (email send, early
// access) with no indexable content.

const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
];

const CONVENTIONAL_AGENTS = ["Googlebot", "Bingbot", "Twitterbot", "facebookexternalhit"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...CONVENTIONAL_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: "/api/",
      })),
      ...AI_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: "/api/",
      })),
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
