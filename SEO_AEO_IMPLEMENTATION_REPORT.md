# SEO / AEO Implementation Report — `/product`

**Repo (replica):** `mw-main-website-seo-aeo` · **Branch:** `seo-aeo-implementation` · **Baseline:** `b7a84c9` · **Date:** 27 Aug 2026

## 1. Objective

The SEO/AEO recommendations for `metawurks.com/product` were implemented, together with the site-wide metadata, sitemap and robots infrastructure that page depends on. All work was done in an isolated local replica cloned from `Quanterian-LLC/mw-main-website`. The original repository and production were not modified. No ranking or traffic effect has been measured and none is claimed.

## 2. Before vs After

All "After" values were read from the rendered production build (`next build` + `next start`), not from source intent.

| Area | Before | After |
|---|---|---|
| H1 | `Our Products` | `AI Document Intelligence for Bookkeepers, Law Firms & Real Estate Teams` — exactly 1 H1 |
| Page content | ~240 words main content, 3 H2s | **2,156 words** main content, **11 H2s / 19 H3s** |
| Page title | No metadata export; inherited `MetaWurks - AI-Powered Workflow Orchestration` (shared by 10 routes) | `AI Document Intelligence for Small Business \| MetaWurks` (55 chars) |
| Meta description | Inherited site-wide description | `MetaWurks turns your PDFs, spreadsheets and business files into an AI teammate you can query in plain English. From $19/month. Start free.` (138 chars) |
| Canonical | Missing | `https://metawurks.com/product` |
| Structured data | None | 1 JSON-LD `@graph`: `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, `SoftwareApplication`, `FAQPage`. No `aggregateRating`, no `review` |
| FAQ | None | 8 Q&As, fully visible (no accordion) + `FAQPage` schema. All 8 questions and 8 answers verified present verbatim in visible HTML |
| CTA | None in body | Hero: `Start Free` (signup env URL, falls back to `/pricing`) + `Book a Live Demo` (existing Calendly). Closing: `Start Free` + `Compare plans`. Trust line: `From $19/month · Free plan available · No IT team required` |
| ICP targeting | Generic ("business", "legal teams to logistics") | 4 cards: bookkeepers/small accounting firms, solo & small law firms, real estate agents & TCs, SMB owners & ops managers |
| ChatGPT comparison | Missing | **Added** — semantic `<table>`, `<caption>`, `<th scope>`, 9 rows, MetaWurks vs general-purpose assistant |
| File-type information | Missing | **Added** — table of 5 format groups (documents, spreadsheets, presentations, images, video) + 50 MB / 200 MB size limits, sourced from `/docs` |
| Security section | 1 generic feature card ("Role-based permissions… full activity logs") + a vague closing line | Dedicated H2 with 8 statements, each traceable to `privacy-policy` or `/docs`; links to `/privacy-policy`. Unverifiable claims (SSO, audit logs, E2EE, certifications) omitted |
| Internal links | 0 body links (page was a link sink) | 12 contextual body links with descriptive anchors: `/pricing` ×3, `/docs` ×2, `/privacy-policy`, and 7 topically-matched blog posts. All return 200 |
| Sitemap | Missing (`/sitemap.xml` → 404) | `app/sitemap.ts` → **46 URLs** (9 static routes + 37 blog posts), valid XML, all 46 verified reachable |
| robots.txt | Static file, 5 groups, no sitemap, no AI agents | `app/robots.ts` (static file deleted, so one implementation only). Declares `Sitemap:` + `Host:`, disallows `/api/`, explicitly allows **9 AI agents**: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended |
| Open Graph | Missing | `og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, `og:image` (absolute, 1536×1024, with `og:image:alt`) |
| Twitter Card | Missing | `summary_large_image` + title, description, image |
| Product imagery | 0 images on page | `architecture.png` via `next/image`, explicit `width`/`height`, descriptive alt, lazy (below fold). Plus a documented screenshot **placeholder** — no real product screenshot exists in the repo and none was fabricated |
| Duplicate content | Hero subheading repeated verbatim as next H2; page closed twice with near-identical copy; stat bar contradicted `/pricing` and `/docs` | All three removed. One closing CTA. Stat bar deleted. All 9 route titles now unique (verified, zero duplicates) |

## 3. Implemented changes

1. Rewrote `/product` H1, hero, subheading, CTAs and trust line.
2. Added `What is MetaWurks?` definition section with 4 real example queries.
3. Added `How is MetaWurks different from ChatGPT?` semantic comparison table.
4. Added `Who is MetaWurks for?` — 4 ICP cards.
5. Rewrote `How does MetaWurks work?` — original 3 step names kept, descriptions corrected to actual behaviour (RAG, citations, chat memory).
6. Added `What documents can MetaWurks read?` file-type table.
7. Added `Which AI models does MetaWurks use?` provider table (6 verified providers).
8. Added `Is MetaWurks secure enough for financial and legal documents?` with sourced claims only.
9. Added `How much does MetaWurks cost?` linking to `/pricing`.
10. Added 8-question FAQ (visible) + `FAQPage` JSON-LD generated from the same array.
11. Added JSON-LD `@graph` (6 schema types) on `/product`; `Organization` + `WebSite` on `/`.
12. Added unique title, description, canonical, Open Graph and Twitter tags to all 9 public routes.
13. Added `app/sitemap.ts` (46 URLs) — `/sitemap.xml` previously 404.
14. Added `app/robots.ts` naming 9 AI crawlers; deleted `public/robots.txt` to avoid two conflicting implementations.
15. Added 12 contextual internal links with descriptive anchor text.
16. Added `next/image` usage with explicit dimensions, alt text and correct loading behaviour.
17. Removed the unsupported statistics bar, the duplicated H2, and the duplicated closing copy.

## 4. Files changed

| File | Change |
|---|---|
| `app/product/page.tsx` | Modified — full rewrite (content, metadata, JSON-LD) |
| `app/page.tsx` | Modified — added metadata + Organization/WebSite JSON-LD; component tree unchanged |
| `lib/productContent.ts` | Added — single source for model list, file types, comparison rows, FAQ, features, price; consumed by both the visible page and the schema |
| `lib/seo.ts` | Added — `SITE` constant, Organization and WebSite schema |
| `components/JsonLd.tsx` | Added — JSON-LD renderer with `<` escaping |
| `components/ProductScreenshot.tsx` | Added — documented screenshot placeholder reserving the real image's 16:9 box |
| `app/sitemap.ts` | Added — 46-URL sitemap |
| `app/robots.ts` | Added — robots route naming AI crawlers |
| `public/robots.txt` | **Deleted** — required; a static file in `public/` shadows the route |
| `app/pricing/layout.tsx` | Added — metadata (page is a client component and cannot export it) |
| `app/contact/layout.tsx` | Added — metadata (client component) |
| `app/docs/layout.tsx` | Added — metadata (client component) |
| `app/about-us/layout.tsx` | Added — metadata |
| `app/blog/layout.tsx` | Added — metadata (per-post metadata still overrides it; verified) |
| `app/privacy-policy/layout.tsx` | Added — metadata |
| `app/terms-of-service/layout.tsx` | Added — metadata |
| `FACTUAL_CONFLICTS.md` | Added — documents the repository's internal contradictions |

`package.json`, `package-lock.json`, `next.config.js`, `middleware.ts`, `.env`, all API routes, `lib/blogPosts.tsx` and all pre-existing components are unchanged.

## 5. Validation

| Check | Result |
|---|---|
| Local `/product` | **PASS** — HTTP 200 on production build (`next start`) |
| Build | **PASS** — `npm run build`, compiled 9.4s, 54/54 static pages |
| Lint | **BLOCKED by a pre-existing repository configuration defect — unrelated to this work. See §5a.** `npm run lint` cannot execute at all, at baseline or on this branch. When the defect is worked around, the SEO/AEO code contributes **0 errors**: error counts are identical to baseline (3 vs 3) |
| Typecheck | **PASS for application code — 0 errors.** `tsc --noEmit` reports 6 errors, all `TS2306` inside generated `.next/types`, caused by two API route files that are entirely commented out at baseline. Verified identical on untouched `b7a84c9` |
| Tests | **NOT RUN** — no test runner or test files exist in the repository |
| Metadata | **PASS** — unique title + description on all 9 public routes; zero duplicate titles |
| Canonical | **PASS** — present and correct on all 9 public routes |
| JSON-LD | **PASS** — 1 block, parses, 6 schema types, no fabricated ratings/reviews |
| FAQ schema | **PASS** — 8/8 questions and 8/8 answers found verbatim in visible HTML |
| Sitemap | **PASS** — 46 URLs, valid XML, all 46 verified HTTP 200 |
| robots.txt | **PASS** — 9 AI agents named, `Sitemap:` declared, no conflicting static file |
| Internal links | **PASS** — all 12 `/product` body links return 200 |

### 5a. Lint — two separate issues, kept apart

**Issue A — pre-existing repository configuration defect. NOT part of the SEO/AEO work, and deliberately not fixed.**

`npm run lint` does not run. It exits 1 before examining a single file:

```
Cannot find package 'globals' imported from .../eslint.config.js
```

`eslint.config.js` imports `globals`, `eslint-plugin-react-refresh` and `typescript-eslint`; none of the three is declared in `package.json`. The file is a leftover Vite/React scaffold config (note `ignores: ["dist"]` and the `react-refresh` plugin) sitting in a Next.js project.

- Reproduces identically at baseline `b7a84c9` and on this branch.
- `eslint.config.js`, `package.json` and `package-lock.json` are **byte-identical to baseline** — confirmed by `git diff --stat b7a84c9 HEAD` returning empty for all three.
- **No dependency change was made.** Fixing this means adding three devDependencies, which is a change to pre-existing repository configuration and is out of scope for the SEO/AEO implementation. It is logged here as a separate repository maintenance item awaiting a decision.
- The `node_modules` tree in this replica has been restored with `npm ci`, so it matches the committed lockfile exactly. Lint therefore fails here today, as it does for anyone who checks the repo out.

*Audit method (reproducible, non-destructive):* the three packages were installed transiently with `npm install --no-save` at versions matching the installed toolchain — `globals@15.15.0`, `eslint-plugin-react-refresh@0.4.20`, `typescript-eslint@8.38.0`. That touches only `node_modules`, never the manifests, and lets the repo's own `npm run lint` execute for real. They were removed afterwards.

**Issue B — lint findings attributable to the SEO/AEO work: zero errors.**

With Issue A worked around, the repo's own lint command gives:

| | Baseline `b7a84c9` | This branch `7f0e864` | Delta |
|---|---|---|---|
| **Errors** | 3 | 3 | **0** |
| Warnings | 10 | 19 | +9 |

The 3 errors are the same three findings in the same three files at both points, none of which this work touched (`git diff` on all three paths is empty):

| File | Rule |
|---|---|
| `app/api/send-email/route.ts:93` | `@typescript-eslint/no-explicit-any` |
| `components/ui/command.tsx:24` | `@typescript-eslint/no-empty-object-type` |
| `components/ui/textarea.tsx:5` | `@typescript-eslint/no-empty-object-type` |

The +9 warnings are all one rule, `react-refresh/only-export-components`, in the nine files that export page metadata (`app/page.tsx`, `app/product/page.tsx`, and the seven route `layout.tsx` files). They are **not defects**: the rule comes from a Vite Fast-Refresh plugin and fires on any file exporting something alongside a component, and `export const metadata` is the Next.js App Router's required API for page metadata — the mechanism the entire SEO deliverable rests on. Two baseline files, `app/layout.tsx:5` and `app/blog/[id]/page.tsx:27,67`, emit the identical warning for the identical reason. Silencing them would mean deleting the metadata exports.

**One lint issue was attributable to this work and was fixed:** `components/JsonLd.tsx` carried an `eslint-disable-next-line react/no-danger` directive that no enabled rule needed, reported as an unused disable. Replaced with a plain explanatory comment (commit `356a9d8`).

## 6. Factual items requiring confirmation

Ten unresolved contradictions found **inside the repository**, each with the file and the exact claim. Full evidence in `FACTUAL_CONFLICTS.md`.

| # | Item | File — exact claim | Conflicts with | Handling on `/product` |
|---|---|---|---|---|
| 1 | AI model list | `app/pricing/page.tsx:179` and `:191` — "GPT-5, Claude, Gemini, DeepSeek, Grok, **Mistral, LLaMA**, and **30+ other AI models**" | `app/docs/page.tsx:399-404` lists 6 providers with versions (OpenAI, Anthropic, Google, xAI, DeepSeek, Perplexity) and never names Mistral or LLaMA | Published the `/docs` list only. No model count, no "30+" |
| 2 | Third model list | `components/HeroSection.tsx:160` — decorative orbit label "**Cohere**"; `:155-159` add Llama, Mistral | Cohere appears nowhere else in the repository | Not published |
| 3 | Free-tier duration | `app/pricing/page.tsx:19` — "Free plan for **1 month** with limited access" | `app/pricing/page.tsx:203` — "a free plan with limited basic models and **1,000 messages per month**" (implies ongoing) | Stated only that a free plan exists; no duration asserted. CTA is `Start Free` |
| 4 | Free-tier allowance | `app/pricing/page.tsx:203` — "**1,000 messages** per month" | `app/pricing/page.tsx:33` — Messages: "Limited"; `:34` — Token limit "1M" | Not published |
| 5 | Annual discount | `app/pricing/page.tsx:254` — badge "**Save 30%**" | Actual annual savings: $19→$17 (10.5%), $39→$37 (5.1%), $99→$97 (2.0%). No plan saves 30% | Not published |
| 6 | `originalPrice` field | `app/pricing/page.tsx:49, :81, :114` — Starter "$8", Professional "$20", Enterprise "**$39**" | Every value is *below* its own `price` (Enterprise $39 vs $99) — inverted for a struck-through "was" price. Never rendered (`plan.price` is the only value read, `:305`) | Not published |
| 7 | Enterprise / tier pricing | `app/pricing/page.tsx:113` — Enterprise "$99" monthly / "$97" annual | Only the $19 Starter entry price is internally consistent (items 5–6) | Published the $19 entry price only, in copy and in `Offer` |
| 8 | RBAC / audit logs / SSO | `components/OrchestrationSection.tsx:23` — "**encryption, SSO, role-based access and audit logs**" (**rendered live on the homepage**); `app/pricing/page.tsx:199` — "role-based access control, and full audit logs … compliant with industry standards"; `app/blog/page.tsx:191, :317` | `/docs` and `app/privacy-policy/page.tsx:120-122` claim only: encryption of OAuth tokens and sensitive data, HTTPS, access controls. No SSO, no audit logs anywhere operational | Omitted. Only privacy-policy/docs-backed statements published |
| 9 | Certifications & SLA | `components/TrustSection.tsx:12-15` — "**SOC 2 Type II**", "**End-to-End Encryption**", "**Data Residency**", "**99.99% Uptime / Enterprise SLA**" | No supporting evidence anywhere. **The component is not imported by any page**, so these are not currently rendered — but would go live the moment it is used | Not published. Certifications are never inferred |
| 10 | OCR / scanned documents | `app/product/page.tsx:43` (baseline) — "PDFs, spreadsheets, **scanned files**, and more" | `app/docs/page.tsx:97` lists image formats as *accepted for upload*; nothing in the repository states text is extracted from scans. "OCR" appears nowhere | No OCR claim made; file-type table reproduced verbatim from `/docs` |

**Also unresolved, lower severity:** `components/OrchestrationSection.tsx:21` claims integration with "Google Drive, **Dropbox**, OneDrive, slack and more", but `app/docs/page.tsx:650-651` documents only Google Drive and OneDrive as storage connections — Dropbox appears nowhere else.

**Not repository contradictions, but unsupported spec claims that were dropped:** "15-minute setup" (no setup-time figure exists) and "See a 2-Minute Demo" (no video or demo route exists; the only demo path is a Calendly 30-minute booking). The four `/for/*` vertical routes do not exist and were not linked. No product screenshot exists; a documented placeholder ships instead.

**Pre-existing, observed, not fixed** (repository maintenance items, none caused by or part of the SEO/AEO work): the **ESLint configuration defect that stops `npm run lint` running at all — see §5a Issue A**; `.env` is committed containing what appear to be live credentials (`SENDGRID_API_KEY`, `EMAIL_PASS`) — values were never read or printed; `/docs` emits 14 `<h1>` tags; the homepage H1 renders as one run-together token; `app/api/early-access/route.ts` and `.../verify/route.ts` are entirely commented out.

## 7. Repository safety

- Original GitHub repository was not modified — `refs/heads/main` still `b7a84c9884db…`, verified via `git ls-remote`.
- No production deployment was performed.
- No changes were pushed. The branch has no upstream and the replica's push URL is deliberately disabled (`origin  DISABLED-local-replica-do-not-push`).
- Changes exist only in the local SEO/AEO replica. The separate read-only clone at `repos/mw-main-website` remains clean at `b7a84c9` on `main`.

## 8. Final status

**Status: SEO/AEO implementation completed in the local replica and ready for human review. The SEO/AEO code introduces zero lint errors — error counts are identical to baseline. Two items sit outside this work and remain open: (1) a pre-existing ESLint configuration defect that prevents `npm run lint` from running at all, logged in §5a as a separate repository maintenance item with no dependency change made; and (2) the 10 factual items in §6, which require product-owner confirmation before this content is published.**

---

# Appendix A — Published blog claims inventory (findings only)

**Status: REPORT ONLY. No blog content was modified.** `lib/blogPosts.tsx` is byte-identical
to baseline; `app/blog/page.tsx` received additive schema only, with zero removed lines.
Nothing below has been rewritten, removed, softened, or reused on another page.

Audited 29 August 2026 across `lib/blogPosts.tsx` (37 article bodies + excerpts) and
`app/blog/page.tsx` (37 independently maintained index excerpts). 34 flagged lines in the
former, 3 in the latter.

**Status key** — *Supported*: backed by `app/privacy-policy/page.tsx` or `app/docs/page.tsx`.
*Contradicted*: conflicts with one of those sources. *Unverified*: no source either way.

## A.1 ★ Model-training claim — 10 occurrences, ALL UNVERIFIED

The claim that **"documents ingested into the platform are not used to train models or
exposed to other users"**, or a close variant.

Two verified facts frame it:

1. The claim appears **nowhere outside the blog** — not in `/docs`, not on `/product`, not
   on `/pricing`, not in any component.
2. `app/privacy-policy/page.tsx` is **entirely silent on model training**. It neither
   asserts nor denies it.

Awaiting explicit product-owner confirmation before this is reused, strengthened, moved to
`/product` or `/about-us`, or removed.

| # | Post | Line | Form of the claim |
|---|---|---|---|
| 1 | Self-Prepared Returns Grew Four Times Faster Than Yours | `:83` | "not used to train models or exposed to other users" |
| 2 | Reviewers on Day One | `:174` | same |
| 3 | The Job Bookkeepers Want Automated Is Not Bookkeeping | `:265` | same |
| 4 | Your Close Got Faster. Your Answers Did Not. | `:346` | "not used to train models and are not exposed to other users" |
| 5 | Written in 1971: The Rule Your AI Tax Research Just Ran Into | `:431` | same |
| 6 | Ten Apps, Five Hours a Week | `:522` | "not used to train models or exposed to other users" |
| 7 | Tax Professionals Were Asked What AI Needs to Earn Their Trust | `:607` | same |
| 8 | The Difference Between a Five-Day Close and a Ten-Day Close | `:698` | same |
| 9 | Your Fixed Fee Was Priced on Effort That No Longer Exists | `:871` | same |
| 10 | The Job Bookkeepers Want Automated Is Not Bookkeeping | `:255` | **Not a product claim** — reports a survey finding ("53% want their data … never used to train models"). Distinct from the nine above |

Nine of the ten are product guarantees addressed to bookkeepers and CPAs. Occurrence 5 sits
inside the IRC §7216 article, where it reads as compliance guidance.

## A.2 Security and availability claims — `lib/blogPosts.tsx`

| Post | Line | Claim | Status |
|---|---|---|---|
| Self-Prepared Returns… | `:83` | Role-based access, audit logs, training | Unverified |
| Reviewers on Day One | `:174` | Role-based access, audit logs, training | Unverified |
| Job Bookkeepers… | `:265` | Role-based access, audit logs, training | Unverified |
| Close Got Faster… | `:346` | Role-based access, audit logs, training | Unverified |
| Written in 1971 (§7216) | `:431` | Role-based access, audit logs, training | Unverified |
| Written in 1971 (§7216) | `:434` | "The audit log is the part that matters for this rule" | Unverified |
| Ten Apps, Five Hours | `:522` | End-to-end encryption, SSO, RBAC, audit logs, training | **Contradicted** (E2EE) |
| Defensible Not Just Accurate | `:607` | End-to-end encryption, SSO, RBAC, audit logs, training | **Contradicted** (E2EE) |
| Close Gap Is a Data Problem | `:698` | Role-based access, audit logs, training | Unverified |
| AICPA Asked Small Firms | `:783` | End-to-end encryption, SSO, RBAC, audit logs | **Contradicted** (E2EE) |
| Fixed Fee… | `:871` | Role-based access, audit logs, training | Unverified |
| Why General-Purpose AI… | `:1396`, `:1411` | "regulated industries" framing | Unverified, generic industry commentary — not a MetaWurks guarantee |
| Hidden Risk in Finance AI | `:1673` | "SSO with audit logs **by default**" (excerpt) | **Contradicted** |
| Hidden Risk in Finance AI | `:1702` | "dedicated security layer per document"; "SSO and audit logs come standard by default" | **Contradicted** |
| AI in Tax Research (CPA) | `:1845` | SOC 2 / SSAE 16 named as **industry selection criteria** | Not a MetaWurks claim |
| AI in Tax Research (CPA) | `:1893` | ⚑ "compliance frameworks appropriate for financial services"; "encrypted data transmission and storage"; "comprehensive audit logging" | **Unverified** — names no framework |
| MetaWurks — Redefining AI Collaboration | `:1959` | "enterprise-grade security… role-based access, and detailed audits" | Unverified |
| Shaping Future AI Workflows | `:2052` | E2EE, RBAC, audit trails, "meets the strict requirements of regulated industries" | **Contradicted** |
| AI Agents Transforming Productivity | `:2073` | SSO, RBAC, full audit logging (excerpt) | **Contradicted** |
| AI Agents Transforming Productivity | `:2077` | Same claim in the body | **Contradicted** |
| AI Agents Transforming Productivity | `:2115`, `:2121`–`:2124`, `:2127` | Explicit feature list: "End-to-end encryption: all data encrypted in transit and at rest", "Single Sign-On (SSO)", "Role-based access control", "Comprehensive audit logging", "suitable for regulated industries" | **Contradicted — highest-exposure passage found** |
| Real-World Use Cases | `:2376` | ⚑ Audit trails and version history, cited "(metawurks.com)" | Unverified + circular citation |
| Real-World Use Cases | `:2406` | ⚑ Audit logs, per-role access, cited "(metawurks.com)" | Unverified + circular citation |
| Real-World Use Cases | `:2439` | ⚑ RBAC, encryption, audit logs, cited "(metawurks.com)" | Unverified + circular citation |
| Custom Trained Private LLMs | `:2575`, `:2578`, `:2582` | GDPR/CCPA, data residency, RBAC — describing **private-LLM architecture in general** | Not MetaWurks claims |

## A.3 Security claims — `app/blog/page.tsx` (index excerpts)

| Post | Line | Claim | Mirrors |
|---|---|---|---|
| Hidden Risk in Finance AI | `:191` | "SSO with audit logs by default" | `lib/blogPosts.tsx:1673` |
| Why General-Purpose AI… | `:227` | "regulated industries" framing | `lib/blogPosts.tsx:1396` |
| AI Agents Transforming Productivity | `:317` | SSO, RBAC, full audit logging | `lib/blogPosts.tsx:2073` |

## A.4 Duplicated excerpts — source-of-truth determination

`app/blog/page.tsx` is **independently maintained, not generated.** It declares its own
`const blogPosts = [...]` (line 7, 37 entries) and never imports `blogPostsData`.

Measured 29 August 2026: **37 of 37 excerpts byte-identical, zero drift.** They are kept in
sync by hand, so the first one-sided edit introduces divergence — the index and the post
would then disagree, and the index excerpt is what feeds search snippets and social cards.

Both copies left exactly as found. Consolidating to a single source is recommended
**before** any excerpt is edited, and is a separate change.

## A.5 Asset and content limitations (no images generated, replaced or altered)

Recorded as limitations. No image was created, substituted or modified.

**Seven images below Google's 1200px width recommendation for Article rich results.** They
are emitted in schema with their true dimensions; they are simply smaller than the guidance.
Resolving this needs approved replacement assets.

| File | Actual size |
|---|---|
| `/blog/Finance-1.jpeg` | 1031 × 1280 |
| `/blog/5_AI-Tools.jpeg` | 1031 × 1280 |
| `/blog/blog1.jpg` | 1024 × 576 |
| `/blog/blog2.jpg` | 1024 × 576 |
| `/blog/blog3.png` | 1024 × 576 |
| `/blog/blog4.jpg` | 1024 × 576 |
| `/blog/blog5.jpg` | 1024 × 576 |

**Seven posts declare no image.** Each emits **no** `image` property rather than a
fabricated or borrowed one, which reduces Article rich-result eligibility for those URLs:

`metawurks-redefining-ai-collaboration` · `shaping-future-ai-workflows` ·
`ai-agents-transforming-productivity` · `multi-llm-systems-future` ·
`drive-connectivity-document-uploads` · `real-world-use-cases-metawurks-industries` ·
`creating-powerpoint-presentations-metawurks`

## A.6 Blog technical integrity (verified clean)

| Check | Result |
|---|---|
| Index links resolving to real post routes | **37 / 37** — no 404s |
| Posts reachable from the index | **37 / 37** — no orphans |
| Declared image files present on disk | **30 / 30** — no broken schema image URLs |
| `datePublished` parseable from the stored date | **37 / 37** |
| `description` available (excerpt present) | **37 / 37** |

## A.7 Claims deliberately withheld from structured data

Visible copy is unchanged in every case. These are only declined as machine-readable fact.

| Surface | Withheld | Reason |
|---|---|---|
| `/pricing` FAQPage | 5 of 8 FAQs | Model list, free-tier terms, security claims and undocumented API access each contradict another source. All 8 remain visible |
| `/blog` ItemList | `description` on all 37 items | Three excerpts carry contradicted security claims. Names and URLs are emitted; excerpts stay visible on the page |
| `/product` | SSO, audit logs, E2EE, certifications | Never published — see §6 |
| Blog `BlogPosting` | `dateModified`; a named Person author | No modification date and no author field exist in the data. Organization is the author of record |
