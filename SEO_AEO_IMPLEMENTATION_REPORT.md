# SEO + AEO Implementation Report — `/product`

**Date:** 27 August 2026
**Scope:** SEO and AEO rewrite of `metawurks.com/product`, plus the supporting site-wide
metadata, sitemap and robots infrastructure that page depends on.

---

## 1. Repository

| Field | Value |
|---|---|
| Original GitHub repository | `https://github.com/Quanterian-LLC/mw-main-website` |
| Original repository status | **Untouched.** Not modified, not pushed to, no PR, no deploy |
| Local replica path | `C:\Users\hp\repos\mw-main-website-seo-aeo` |
| Cloned from | `https://github.com/Quanterian-LLC/mw-main-website.git` (fresh `git clone`) |
| Baseline commit | `b7a84c9` — *Merge pull request #30 from Quanterian-LLC/blog/batch-2026-08-24* |
| Baseline branch | `main` |
| Working branch | `seo-aeo-implementation` (created from `main`, local only) |
| Commits | **One local commit** on `seo-aeo-implementation`, one ahead of `b7a84c9`. Never pushed; the branch has no upstream |
| Push remote | **Deliberately disabled** — `git remote set-url --push origin DISABLED-local-replica-do-not-push`. `git push` cannot resolve a host from this clone |

A second, pre-existing local clone of the same repository lives at
`C:\Users\hp\repos\mw-main-website`. It was **read for reference only** and was verified
clean at `b7a84c9` on `main` both before and after this work. No file in it was changed.

### Framework and tooling (verified, not assumed)

| Item | Value |
|---|---|
| Framework | Next.js **15.1.4** (`package.json`); dev/build toolchain resolved **15.5.9** |
| Router | **App Router** (`app/`, `layout.tsx`, `page.tsx`, `generateMetadata`) |
| React | 18.3.1 |
| Language | TypeScript 5.8.3 |
| Styling | Tailwind CSS 3.4.17 + shadcn/ui (Radix), custom `ai-*` colour tokens |
| Package manager | **npm** (`package-lock.json` present and used). A stale `bun.lockb` also exists; it was not used and not modified |
| Deployment config | `vercel.json` (`framework: nextjs`), `Dockerfile`, `next.config.js` with `output: 'standalone'` |
| Notable build config | `next.config.js` sets `eslint.ignoreDuringBuilds: true` **and** `typescript.ignoreBuildErrors: true`, so `next build` validates neither. Typechecking was therefore run separately (see §6) |

---

## 2. Changes implemented

### 2.1 `/product` — full rewrite

**Before:** ~300 words, H1 `Our Products`, no metadata export, no canonical, no structured
data, no body links, no CTA, an unsupported statistics bar, and a hero subheading duplicated
verbatim as the next section's H2.

**After:** a pillar page for *AI document intelligence platform*, structured for both search
and answer engines.

| Element | Implementation |
|---|---|
| **H1** (exactly one) | `AI Document Intelligence for Bookkeepers, Law Firms & Real Estate Teams` |
| **Hero subheading** | `Upload your documents once. Ask questions in plain English. Get answers in seconds — from your own files, not the open web.` |
| **Primary CTA** | `Start Free` → `NEXT_PUBLIC_SIGNUP_URL`, falling back to `/pricing` |
| **Secondary CTA** | `Book a Live Demo` → the existing Calendly booking (`utm_source=product`) |
| **Trust line** | `From $19/month · Free plan available · No IT team required` |
| **Product visual** | `components/ProductScreenshot.tsx` — a documented placeholder; see §2.6 |
| **H2: What is MetaWurks?** | Definition paragraph + four real example questions taken from the documentation |
| **H2: What you get with document intelligence** | Four capability cards, all sourced |
| **H2: How is MetaWurks different from ChatGPT?** | Semantic `<table>` with `<caption>`, `<th scope>`, 9 rows |
| **H2: Who is MetaWurks for?** | Four ICP cards — bookkeepers, solo/small law firms, real estate, SMB owners |
| **H2: How does MetaWurks work?** | The original three steps (*Intelligent Setup*, *Semantic Understanding*, *Personalized Insight Delivery*) preserved by name, descriptions rewritten to describe what the product actually does. Marked up as an ordered list. Includes the real `/architecture.png` asset |
| **H2: What documents can MetaWurks read?** | Semantic table of file formats + size limits |
| **H2: Which AI models does MetaWurks use?** | Semantic table of the six verified providers |
| **H2: Is MetaWurks secure enough for financial and legal documents?** | Eight sourced statements, two honest caveats, link to `/privacy-policy` |
| **H2: How much does MetaWurks cost?** | Entry price only, links to `/pricing` |
| **H2: Frequently asked questions** | Eight Q&As, all fully visible (no accordion, nothing hidden) |
| **H2: Put your documents to work** | **One** closing CTA. The old page closed twice with near-identical copy |

Heading structure as rendered: **1 × H1, 11 × H2, 19 × H3** — verified against the served HTML.

Content length: **~2,156 words** in the main content region (nav and footer excluded), up from
~300. This exceeds the 1,200–1,600 target. It was not padded: the overage is the comparison
table, the two reference tables and the eight FAQ answers, which are the substance answer
engines extract. Flagged rather than trimmed.

### 2.2 Single source of truth for content and schema

`lib/productContent.ts` holds the model list, file-type list, comparison rows, FAQ array,
feature list and entry price. **The visible page and the JSON-LD both render from it.** This
makes it structurally impossible for the structured data to assert something the page does not
show — the failure mode Google penalises as hidden SEO-only content. Every export carries a
`// Source:` comment pointing at the file and line it came from.

### 2.3 Metadata

Ten of eleven non-blog routes previously rendered the identical title
`MetaWurks - AI-Powered Workflow Orchestration` and the identical description, because only
`app/blog/[id]/page.tsx` exported metadata. Every public route now has its own title,
description, canonical, Open Graph and Twitter tags.

`/pricing`, `/contact` and `/docs` are client components and **cannot** export metadata in the
App Router — that is the mechanical cause of the duplication on those routes. Each was given a
`layout.tsx` that exports metadata and renders `{children}` unchanged. No page component was
touched to achieve this.

| Route | Title | Canonical |
|---|---|---|
| `/` | `MetaWurks - Chat With Your Business Documents Using AI` | `https://metawurks.com` |
| `/product` | `AI Document Intelligence for Small Business \| MetaWurks` | `https://metawurks.com/product` |
| `/pricing` | `Pricing - AI Document Platform from $19/month \| MetaWurks` | `https://metawurks.com/pricing` |
| `/docs` | `Documentation - Uploading, Chatting and Connections \| MetaWurks` | `https://metawurks.com/docs` |
| `/blog` | `MetaWurks Blog - AI for Accounting and Document-Heavy Work` | `https://metawurks.com/blog` |
| `/about-us` | `About MetaWurks - The Team Behind the Platform \| MetaWurks` | `https://metawurks.com/about-us` |
| `/contact` | `Contact MetaWurks - Sales, Support and Demos \| MetaWurks` | `https://metawurks.com/contact` |
| `/privacy-policy` | `Privacy Policy - Data Handling and Storage \| MetaWurks` | `https://metawurks.com/privacy-policy` |
| `/terms-of-service` | `Terms of Service \| MetaWurks` | `https://metawurks.com/terms-of-service` |
| `/blog/[id]` | unchanged — already per-post | unchanged |

No `title.template` was added to the root layout: `app/blog/[id]/page.tsx` already appends
`| MetaWurks` itself, and a template would have produced `… | MetaWurks | MetaWurks` on all 37
posts. No canonical was added to the root layout either — being inherited, it would have given
every non-overriding route a canonical of `/`.

### 2.4 Structured data

One JSON-LD block on `/product`, using `@graph`:

| Type | Notes |
|---|---|
| `Organization` | Name, URL, logo, email, phone, postal address, three social profiles — all taken verbatim from `components/Footer.tsx` |
| `WebSite` | Linked to the Organization as publisher |
| `WebPage` | Linked to the WebSite, the SoftwareApplication and the BreadcrumbList |
| `BreadcrumbList` | Home → Product |
| `SoftwareApplication` | `BusinessApplication`, subcategory `AI document intelligence platform`, 8-item `featureList`, one `Offer` at $19 USD linking to `/pricing` |
| `FAQPage` | All 8 questions — each verified to appear verbatim in the visible HTML |

The homepage carries `Organization` + `WebSite`.

**Deliberately absent — never fabricated:** `aggregateRating`, `review`, any rating or review
count, any price other than the verified $19 entry figure, any model count beyond the six
documented providers, and any security certification.

### 2.5 Sitemap and robots

- **`app/sitemap.ts`** (new). `https://metawurks.com/sitemap.xml` previously returned 404.
  Now emits **46 URLs**: 9 real static routes + all 37 blog posts, with `lastModified` derived
  from each post's date (an unparseable date yields no value rather than a wrong one). API
  route handlers and `not-found` are excluded. `/for/*` is excluded because those routes do
  not exist.
- **`app/robots.ts`** (new) and **`public/robots.txt`** (deleted). Both cannot coexist — the
  static file is served directly and would shadow the route, leaving two implementations free
  to disagree. There is now exactly one. It declares
  `Sitemap: https://metawurks.com/sitemap.xml`, keeps the four conventional agents, disallows
  `/api/` for everyone, and explicitly allows the AI agents:
  `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-Web`, `anthropic-ai`,
  `PerplexityBot`, `Perplexity-User`, `Google-Extended`.

### 2.6 Images

| Image | Treatment |
|---|---|
| Product screenshot | **No real screenshot exists in the repository, and none was fabricated.** `components/ProductScreenshot.tsx` renders a documented placeholder that reserves the exact 16:9 box the real capture will occupy, so dropping the file in will not shift the page. A header comment gives the three steps to replace it |
| `/architecture.png` | A real repository asset (already published on `/docs`), used in *How does MetaWurks work?* via `next/image` with explicit `width={1536} height={1024}`, a descriptive alt, `sizes`, and lazy loading (correct — it is far below the fold) |
| LCP | The H1 is the LCP element. Nothing above it is given `priority`, so no image competes with it |

`next/image` handles WebP/AVIF negotiation automatically; no config change was needed.

### 2.7 Internal links

`/product` had **zero** body links — it was a pure link sink. It now carries contextual,
descriptively-anchored links to `/pricing` (×3), `/docs` (×2), `/privacy-policy`, and eight
genuinely relevant existing blog posts placed in the sections they actually bear on:

| From section | To |
|---|---|
| vs ChatGPT | `chatgpt-claude-training-client-financial-data`, `why-general-purpose-ai-no-longer-enough` |
| Who is it for | `job-bookkeepers-want-automated`, `real-world-use-cases-metawurks-industries` |
| File types | `drive-connectivity-document-uploads` |
| AI models | `multi-llm-systems-future`, `/docs` |
| Security | `ai-tax-research-section-7216`, `ai-bookkeeping-client-data-confidentiality`, `/privacy-policy` |

Every one was verified to return HTTP 200 (§6).

### 2.8 Removed / fixed

| Item | Action |
|---|---|
| H1 `Our Products` | Replaced with the keyword-bearing H1 |
| Hero subheading duplicated as the next H2 (`We Deliver Smart AI-Powered Business Insights`) | Removed; each heading is now distinct |
| Duplicated closing message (`All your information is completely confidential` + `From Insight to Action — AI That Moves Your Business Forward`) | Replaced with one closing CTA |
| Statistics bar (`+500M` Embeddings, `+5` LLM, `+30000` Tokens Capacity, `+10` File Types) | **Removed.** Three of the four contradicted `/pricing` or `/docs`; the fourth had no source at all. See `FACTUAL_CONFLICTS.md` §4 |
| `Role-based permissions … full activity logs` feature card | Replaced with claims the repository actually supports |
| Navigation-only internal linking | Replaced with contextual body links |
| Missing canonical / OG / Twitter | Added across all public routes |
| Missing sitemap (404) | Added |
| robots.txt not naming AI crawlers | Rewritten as a route that names them |

---

## 3. Files modified

```
app/page.tsx                     — added metadata + Organization/WebSite JSON-LD; component tree unchanged
app/product/page.tsx             — full rewrite
```

## 4. Files added

```
FACTUAL_CONFLICTS.md
SEO_AEO_IMPLEMENTATION_REPORT.md
app/robots.ts
app/sitemap.ts
app/about-us/layout.tsx
app/blog/layout.tsx
app/contact/layout.tsx
app/docs/layout.tsx
app/pricing/layout.tsx
app/privacy-policy/layout.tsx
app/terms-of-service/layout.tsx
components/JsonLd.tsx
components/ProductScreenshot.tsx
lib/productContent.ts
lib/seo.ts
```

## 5. Files deleted

```
public/robots.txt                — replaced by app/robots.ts (see §2.5). Deleting it is required:
                                   a static file in public/ shadows the route handler.
```

No other file was deleted, renamed or moved. `package.json`, `package-lock.json`,
`next.config.js`, `middleware.ts`, `.env`, the API routes, `lib/blogPosts.tsx` and every
component other than the two new ones are **byte-identical to the baseline**.

---

## 6. Testing

All commands run in `C:\Users\hp\repos\mw-main-website-seo-aeo` with npm.

| Check | Command | Result |
|---|---|---|
| Install | `npm ci` | ✅ 524 packages, clean |
| **Typecheck** | `npx tsc --noEmit` | ⚠️ **6 errors — all pre-existing, none from this work.** Run separately because `next.config.js` sets `typescript.ignoreBuildErrors: true`. Every error is `TS2306: … is not a module`, emitted inside generated `.next/types/**` and pointing at `app/api/early-access/route.ts` and `app/api/early-access/verify/route.ts` — both of which are **entirely commented out** at baseline and untouched here. **Zero errors in application code**: filtering `.next/types` out of the output leaves nothing. **Verified by direct comparison** — checked out the untouched baseline `b7a84c9`, rebuilt from a clean `.next`, re-ran `tsc`: it produced the *identical six errors*. See §9 |
| **Production build** | `npm run build` | ✅ **Compiled successfully in 18.2s**, 54/54 static pages generated, `/robots.txt` and `/sitemap.xml` registered as routes |
| **Lint** | `npm run lint` | ❌ **Fails at baseline — pre-existing, not caused by this work.** `eslint.config.js` imports `globals`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` and `typescript-eslint`, none of which are in `package.json`. Installing them transiently (`--no-save`) got further but hit a second config/version mismatch (`preserve-caught-error` rule not found). Fixing it means editing `package.json` and `eslint.config.js` — unrelated refactoring, so it was left alone. `package.json` and `package-lock.json` were confirmed unmodified afterwards |
| **Tests** | — | **None configured.** `package.json` has only `dev`, `build`, `start`, `lint`. No test runner, no test files |
| **DAST security scan** | HawkScan | **Not run.** No `hawk` runtime and no `HAWK_API_KEY` in this environment, and running it would require serving the app to a scanner. The change adds no API surface, no auth path, no user input handling and no new dependency — it is static marketing content, metadata and two static routes |

### Local verification

Verified on **both** servers, from a clean `.next`:

- Development: **`http://localhost:3000`** (`npm run dev`)
- Production: **`http://localhost:3100`** (`npm run build` then `npx next start -p 3100`) — the production output is what a crawler would actually receive, so every SEO assertion below was re-confirmed against it

| Route | HTTP |
|---|---|
| `/product` | 200 |
| `/` | 200 |
| `/pricing` | 200 |
| `/docs` | 200 |
| `/sitemap.xml` | 200 |
| `/robots.txt` | 200 |
| All 8 other public routes | 200 |
| All 8 blog posts linked from `/product` | 200 |

**Browser checks** (Chromium via the Browser pane; screenshots were unavailable in this
non-interactive session, so the DOM and console were inspected directly):

- **Console errors: none** on `/product`, `/pricing` or `/`. The only message is a pre-existing
  preload warning for the Navbar logo, present on every page at baseline.
- **Mobile (375×812):** `document.scrollWidth === 375` — **no horizontal page scroll**. All
  three tables scroll inside their own `overflow-x: auto` containers, confirmed by measurement.
- **Layout shift:** every image carries explicit `width`/`height`; the screenshot placeholder
  reserves the same 16:9 box the real capture will occupy.
- `/pricing` renders all five plans and its monthly/annual toggle works.
- Homepage renders all six sections unchanged.
- `/blog/job-bookkeepers-want-automated` still returns its own per-post title, canonical,
  `og:type: article` and `article:published_time` — the new `app/blog/layout.tsx` does not
  override it.

### SEO / AEO verification against served HTML

| Check | Result |
|---|---|
| `<title>` | `AI Document Intelligence for Small Business \| MetaWurks` (55 chars) |
| `<meta name="description">` | 138 chars, unique — inside the ~155 Google renders |
| `<link rel="canonical">` | `https://metawurks.com/product` |
| Open Graph | `og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, `og:image` (absolute, 1536×1024, with alt) |
| Twitter | `summary_large_image` + title, description, image |
| H1 | **exactly 1** |
| H2 / H3 | 11 / 19, logical order, no duplicates |
| JSON-LD | 1 block, parses, `@graph` = Organization, WebSite, WebPage, BreadcrumbList, SoftwareApplication, FAQPage |
| `aggregateRating` / `review` | **absent** (asserted by test) |
| FAQ schema ↔ visible FAQ | **8/8 questions and 8/8 answers found verbatim in the visible HTML** |
| Breadcrumb schema | Home → Product, both resolvable |
| Internal links | 12 contextual body links, all HTTP 200, all descriptive anchors |
| Image alt text | Present and descriptive on every `<img>` |
| Sitemap | 46 URLs, valid XML, all real routes |
| All 46 sitemap URLs | verified reachable (HTTP 200) on the production server |
| Robots | Sitemap declared; 9 AI agents named explicitly; `/api/` disallowed |

---

## 7. Factual conflicts

Full detail, with file and line citations, is in **`FACTUAL_CONFLICTS.md`**. Summary:

| # | Conflict | Resolution |
|---|---|---|
| 1 | **Three different AI model lists** in the repository: `/docs` (6 named providers with versions), `/pricing` FAQ (adds Mistral + LLaMA + "30+ other models"), decorative homepage graphics (adds Cohere) | `/docs` treated as authoritative — it names model versions, appears twice, and is corroborated by a blog article. Published: **six providers**, not a model count. Mistral, LLaMA, Cohere and "30+" **not published** |
| 2 | **Free tier** — plan card says "free for 1 month, limited"; FAQ says "1,000 messages per month" (ongoing) | Neither published. `/product` says a free plan exists and links to `/pricing`. CTA reads `Start Free`, not "Start Your Free Trial", so no duration is asserted |
| 3 | **Pricing** — annual toggle claims "Save 30%" but actual savings are 2–10.5%; `originalPrice` is *below* `price` on every plan and is never rendered | Only the **$19 entry price** published, in copy and in `Offer`. No Enterprise figure, no annual price, no discount percentage anywhere |
| 4 | **`/product` stat bar** contradicted `/pricing` (30,000 tokens vs 1M–10M) and `/docs` (5 LLMs vs 6; 10 file types vs ~25); `+500M Embeddings` had no source at all | Removed entirely |
| 5 | **Security** — E2EE, SSO, RBAC and audit logs appear only in marketing copy, never in `/docs` or the privacy policy. No certification named anywhere | Only the privacy-policy and docs-backed statements published. E2EE, SSO and audit logs **not published**; RBAC softened to the policy's own "access controls" wording; **no certification claimed** |
| 6 | **OCR** — image formats are accepted for upload, but nothing states MetaWurks extracts text from scans | File-type table published verbatim from `/docs`. **No OCR claim** |
| 7 | **Spec claims with no repository support** — "15-minute setup", "See a 2-Minute Demo", `/for/*` vertical pages, a product screenshot | "15-minute setup" dropped. Demo CTA relabelled `Book a Live Demo` → the real Calendly link. `/for/*` **not linked** (they would 404). Screenshot **not fabricated** |
| 8 | **Positioning** — `/pricing` sells a multi-model aggregator for "teams, developers and creators"; the spec sells document intelligence for four verticals | `/product` written to the spec. `/pricing` **not** re-positioned — that is a brand decision, not an SEO fix |

**The `SEO + AEO Rewrite Spec` document was not attached to this session.** Only
`METAWURKS-FINAL-SEO-REPORT.pdf` / `.docx` was available locally
(`C:\Users\hp\repos\metawurks-seo-report`); it contains no AEO section and no `/product`
rewrite spec. The spec content was therefore taken from the task brief, which transcribed it
in full, and the repository was treated as the source of truth throughout — as instructed.

---

## 8. Not implemented, and why

| Item | Why |
|---|---|
| `/for/bookkeepers`, `/for/law-firms`, `/for/real-estate`, `/for/small-business` links | **The routes do not exist.** Linking would ship four 404s from the site's most important commercial page. Recorded as future architecture below |
| Building those four vertical pages | Outside the requested scope. Each needs its own keyword research, copy and approval. The `/product` ICP section is written so a link can be added to each card in one line once they exist |
| A real product screenshot | None exists in the repository. Fabricating one and presenting it as the product was declined. A documented placeholder ships instead |
| `"See a 2-Minute Demo"` CTA | No such asset exists. The slot ships as `Book a Live Demo` pointing at the real, working Calendly booking |
| `"15-minute setup"` trust claim | No setup-time figure exists anywhere in the repository |
| `"Start Your Free Trial"` wording | The free tier's terms contradict themselves (§7 #2). `Start Free` asserts only what is certain |
| Enterprise / annual pricing in copy or schema | Contradictory at baseline (§7 #3) |
| SSO, audit logs, E2EE, certifications in the security section | Unverifiable (§7 #5) |
| Fixing the `/pricing` free-tier FAQ contradiction | It is a **factual** error needing a product owner, not an SEO fix. Flagged in `FACTUAL_CONFLICTS.md` §2 |
| Fixing the `/pricing` "Save 30%" badge | Same — needs the real discount figure |
| Fixing the homepage H1 whitespace defect | The H1's word spans are adjacent with no whitespace, so its text content is one run-together token. A real defect, but outside the requested scope, and any fix needs visual QA on a flex-gap layout. **Recommended as a follow-up** |
| Fixing `/docs` emitting **14 H1 tags** on one URL | Confirmed still present (measured: 14). Requires restructuring the shared `SectionHeading` component across a 1,100-line page — genuine refactoring, outside scope. **Recommended as a follow-up** |
| Fixing `/about-us` and `/contact` sharing an H1 | Copy decision for the brand owner |
| Repairing `npm run lint` | Broken at baseline; fixing it means editing `package.json` and `eslint.config.js`, which is unrelated refactoring |
| Re-positioning `/pricing` or the homepage hero | Brand decision (§7 #8) |

### Future architecture — the vertical pages

If the four ICP pages are built, this is the shape `/product` is already written to support:

```
/product                      ← pillar (this page)
  ├── /for/bookkeepers        ← "AI tool for bookkeepers to search client documents"
  ├── /for/law-firms          ← "AI contract and clause search for small law firms"
  ├── /for/real-estate        ← "AI transaction-document search for real estate teams"
  └── /for/small-business     ← "AI business-document search for SMBs"
```

Each would carry its own metadata, canonical, `BreadcrumbList` (Home → Product → Vertical) and
`FAQPage`, and link back to `/product`. Adding them means: create `app/for/<slug>/page.tsx`,
add the route to `app/sitemap.ts`, and add one `href` to the matching card in the `icpCards`
array in `app/product/page.tsx`.

---

## 9. Pre-existing issues observed (not introduced, not fixed)

1. **`.env` is committed with an empty `NEXT_PUBLIC_SIGNUP_URL` / `NEXT_PUBLIC_LOGIN_URL`**, and
   `components/Navbar.tsx` reads them with a non-null assertion. The result is that the Navbar
   "Get Started" link renders as `href=""` on every page locally. The new `/product` CTAs avoid
   this with an explicit fallback.
2. **`.env` also contains what appear to be live credentials** (`SENDGRID_API_KEY`,
   `EMAIL_PASS`). The audit report raises this as its highest-priority finding. **These values
   were never read, printed or transmitted here** — only the key names were listed, with values
   redacted. Rotating them is a security matter that outranks any SEO work.
3. `/docs` emits 14 `<h1>` tags on a single URL.
4. The homepage H1's text content is a single run-together token.
5. `npm run lint` cannot run (missing ESLint plugin dependencies).
6. **`app/api/early-access/route.ts` and `app/api/early-access/verify/route.ts` are entirely commented out.** They are still registered as route handlers, so Next.js generates types for them and `tsc` reports `TS2306: … is not a module` — six errors, all pre-existing (proved by rebuilding and typechecking the untouched `b7a84c9`). The routes also do nothing at runtime: `/api/early-access` has no exported handler. Either restore them or delete the directory.
7. `app/pricing/page.tsx` `originalPrice` is dead, inverted data.
8. `public/image (1).png` (2.1 MB) and `public/placeholder.svg` are unreferenced.

---

## 10. Production safety

**Original GitHub repository was not modified.**
**No commits were pushed.**
**No pull request was created.**
**No production deployment was performed.**

Supporting evidence:

- All work was done in `C:\Users\hp\repos\mw-main-website-seo-aeo`, a fresh clone, on a local
  branch `seo-aeo-implementation`.
- The clone's **push URL was deliberately broken** immediately after cloning:
  `origin  DISABLED-local-replica-do-not-push (push)`. `git push` cannot resolve a host.
- The fetch URL is left intact so the origin remains identifiable.
- The separate pre-existing clone at `C:\Users\hp\repos\mw-main-website` was verified clean at
  `b7a84c9` on `main` before and after; nothing in it was written to.
- No `git push`, no `gh pr create`, no deploy command, and no CI trigger was run at any point.
- No production environment variable or secret was created, read, printed or changed.

Nothing here reaches production until you review and deploy it yourself.
