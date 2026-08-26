# FACTUAL_CONFLICTS.md

Factual conflicts found while implementing the `/product` SEO + AEO rewrite.

- **Repository:** isolated local replica `mw-main-website-seo-aeo`, branch `seo-aeo-implementation`
- **Baseline commit:** `b7a84c9` (`Quanterian-LLC/mw-main-website`, `main`)
- **Date:** 26 August 2026

**Rule applied throughout:** a claim was published on `/product` (visible copy *and* JSON-LD)
only where the repository itself supports it. Where sources inside the repository disagree,
the most specific and most operational source was treated as authoritative, and the
disagreement is recorded below. Where nothing in the repository supports a claim, the claim
was **not published at all** — it was neither invented nor softened into a vaguer version of
the same unsupported statement.

---

## 1. AI model list — THREE conflicting lists in the repository

### What the source material says

| Source | Claim |
|---|---|
| Rewrite spec (as relayed in the task brief) | possibly `GPT-5, Claude, Gemini, DeepSeek, Grok` **or** `GPT-5, Claude, Gemini, Llama, Mistral, Cohere`; warns against an unverified "6 AI models" claim |
| SEO audit report (`METAWURKS-FINAL-SEO-REPORT`) | "routing each query through a multi-model AI layer"; no model list. Section 6.8 explicitly *rejects* "GPT-5 / Claude / Gemini access" as a keyword target |

### What the repository says

| # | Location | List |
|---|---|---|
| A | `app/docs/page.tsx:399-404` and `:788-793` (provider/model table, rendered twice) | **OpenAI** (GPT-5.2, GPT-5.1, GPT-4) · **Anthropic** (Claude 3.5 Sonnet, Claude 4.5) · **Google** (Gemini 2.5 Flash) · **xAI** (Grok 4.1 Fast Reasoning) · **DeepSeek** (DeepSeek Chat) · **Perplexity** (Sonar Pro) |
| A2 | `app/docs/page.tsx:119`, `:338`, `:718` | "GPT, Claude, Gemini, Grok, DeepSeek, and Perplexity" — same six, prose form |
| A3 | `lib/blogPosts.tsx:1046-1047` | "GPT, Claude, Gemini, Grok, DeepSeek, and Perplexity — switchable mid-conversation" — same six |
| B | `app/pricing/page.tsx:179`, `:191` (FAQ answers) | "GPT-5, Claude, Gemini, DeepSeek, Grok, **Mistral, LLaMA**, and **30+ other AI models**" |
| B2 | `app/pricing/page.tsx:231` (hero copy) | "GPT-5, Claude, Gemini, DeepSeek, Grok and more" |
| B3 | `components/HeroSection.tsx:79` (homepage badge) | "GPT-5, Claude, Gemini, DeepSeek, Grok and more." |
| C | `components/HeroSection.tsx:155-160` (decorative orbit labels) | GPT-5, Claude, Gemini, **Llama, Mistral, Cohere** |
| C2 | `components/OrchestrationSection.tsx:47-51` (decorative orbit labels) | GPT-5, Claude, Gemini, **Llama, Mistral** |
| C3 | `components/DashboardPreview.tsx:113-137` (mock dashboard) | GPT-5, Claude, Claude 4, Gemini |

### What appears authoritative

**List A.** Reasons:

1. It is the only list that names *specific model versions* per provider, which is the shape
   of a list maintained against a real integration rather than written as marketing copy.
2. It appears in `/docs` — the product documentation, i.e. the artefact a paying user reads
   to operate the product — and is rendered twice from two independent literals.
3. It is corroborated by an independent source (`lib/blogPosts.tsx`, a published article).
4. Lists B and C contradict *each other* (Cohere appears only in C; LLaMA/Mistral appear in
   B and C but never in `/docs`), so at most one of them can be right, and neither is
   corroborated anywhere operational.
5. Lists C, C2 and C3 are **decorative** — they are labels on animated orbit graphics and a
   fake dashboard, positioned by angle and animation delay. They are visual filler, not a
   data source.

### What was published

`/product` now states: **six model providers** — OpenAI, Anthropic, Google, xAI, DeepSeek and
Perplexity — and reproduces the `/docs` provider/model table verbatim, with a link to `/docs`
as the maintained source of truth.

The page deliberately does **not** claim:

- a count of individual *models* (the spec's warned-against "6 AI models" phrasing);
- "30+ other AI models" (list B) — unsupported anywhere operational;
- Mistral, LLaMA or Cohere — present only in marketing copy and decorative graphics.

### Requires human confirmation

- [ ] **Is list A current?** It names GPT-5.2 / Claude 4.5 / Grok 4.1. If the integration has
      moved on, `/docs` and `/product` both need updating.
- [ ] **Are Mistral, LLaMA or Cohere actually integrated?** If yes, `/docs` is incomplete. If
      no, `app/pricing/page.tsx:179,191` and the decorative labels in `HeroSection.tsx` and
      `OrchestrationSection.tsx` are making claims the product does not support.
- [ ] **Is "30+ other AI models" true?** If yes it needs an operational source; if no, the two
      pricing FAQ answers should be corrected — they are rendered on `/pricing`, and the audit
      report notes this FAQ set is a candidate for `FAQPage` structured data, so an inaccurate
      answer risks being served as machine-readable fact.

---

## 2. Free tier — the pricing table contradicts the pricing FAQ

| Source | Claim |
|---|---|
| `app/pricing/page.tsx:19` (plan card) | "Free plan for **1 month** with limited access" |
| `app/pricing/page.tsx:25,33,34` (plan detail) | Messages: "**Limited**"; Token limit: "**1M**"; Standard Models |
| `app/pricing/page.tsx:202-203` (FAQ answer) | "a free plan with limited basic models and **1,000 messages per month**" — implies an *ongoing* free plan, and states a message cap the table calls "Limited" |

The audit report flags this same discrepancy (section 16.1, "Pricing FAQ — factual
discrepancy") and notes it ships inside `FAQPage` structured data in their working repo.

**Authoritative:** neither. The two disagree on both the *duration* (1 month vs ongoing) and
the *message allowance* (unspecified vs 1,000/month).

**What was published:** `/product` states that a free plan exists and that paid plans start at
$19/month, and links to `/pricing`. It states **no** free-tier duration and **no** message
allowance. The hero CTA reads "Start Free" rather than asserting a trial length.

- [ ] **Requires human confirmation:** the real free-tier terms — duration, model access, and
      message/token allowance — then reconcile the table and the FAQ.

---

## 3. Enterprise pricing and the annual discount

| Source | Claim |
|---|---|
| `app/pricing/page.tsx:112-113` | Enterprise **$99**/month monthly, **$97**/month annually |
| `app/pricing/page.tsx:114` | `originalPrice: "$39"` — **lower** than the price it accompanies |
| `app/pricing/page.tsx:48-49` | Starter $19 / $17 annual, `originalPrice: "$8"` |
| `app/pricing/page.tsx:80-81` | Professional $39 / $37 annual, `originalPrice: "$20"` |
| `app/pricing/page.tsx:252` | Annual toggle badge: "**Save 30%**" |
| SEO audit report section 9 (`/pricing` recommended description) | "a free tier, Starter at $19/month, Professional at $39/month and Enterprise at $99/month" |

Two problems:

1. **"Save 30%" does not match any plan.** Actual annual savings are $19 to $17 (10.5%),
   $39 to $37 (5.1%), $99 to $97 (2.0%). None is 30%.
2. **`originalPrice` is inverted and dead.** Every `originalPrice` is *below* its `price`
   (Enterprise $39 vs $99), which is backwards for a struck-through "was" price. The field is
   also never rendered — `plan.price` is the only value read (`app/pricing/page.tsx:305`) — so
   it is currently invisible dead data. It would display a false discount if wired up.

**What was published:** `/product` states only **"Paid plans start at $19/month"** and links to
`/pricing`. It publishes **no** Enterprise figure, **no** annual price, and **no** discount
percentage, in either visible copy or JSON-LD. The `Offer` in the `SoftwareApplication` schema
carries the $19 entry price only, which is the one figure that is internally consistent.

- [ ] **Requires human confirmation:** the real annual discount (fix or remove the "Save 30%"
      badge), and whether `originalPrice` is a stale field to delete or an unfinished feature.

**Note on provenance:** the task brief mentions "conflicting Enterprise pricing" identified by
the rewrite spec. The rewrite spec document itself was **not attached to this session** — only
`METAWURKS-FINAL-SEO-REPORT` (`.pdf` / `.docx`) was available locally, and it contains no "AEO"
section. The conflicts above are the ones observable in the repository. If the spec cites a
different Enterprise figure, it disagrees with `app/pricing/page.tsx`, and the repository was
treated as authoritative per the task instructions.

---

## 4. The `/product` statistics bar contradicts `/pricing` and `/docs`

`app/product/page.tsx:32-37` rendered a four-item stat bar:

| Stat shown | Conflicts with |
|---|---|
| `+500M` Embeddings | Nothing in the repository. No source, no unit, no defined meaning. **Unverifiable.** |
| `+5` LLM | `/docs` documents **6** providers (section 1). `/pricing` FAQ claims **30+** models. |
| `+30000` Tokens Capacity | `/pricing` states token limits of **1M / 3M / 6M / 10M** per plan. 30,000 is roughly two orders of magnitude below the smallest published tier. |
| `+10` File Types | `/docs` FAQ (`app/docs/page.tsx:97`) enumerates **~25** extensions. |

**Authoritative:** `/docs` and `/pricing`. The stat bar agrees with neither.

**What was published:** the stat bar was **removed**. Three of its four numbers contradicted
other pages on the same site and the fourth was unsourced. The information it gestured at is
now carried accurately by the verified model table and the verified file-type table.

---

## 5. Security claims

| Claim | Repository support | Verdict |
|---|---|---|
| Encryption of OAuth tokens and sensitive data | `app/privacy-policy/page.tsx:120`, `:87` | Published |
| HTTPS in transit | `app/privacy-policy/page.tsx:121` | Published |
| Access controls to prevent unauthorized use | `app/privacy-policy/page.tsx:122` | Published (in the policy's own wording) |
| OAuth for cloud connections; passwords never stored | `app/docs/page.tsx:619`, `:626-628` | Published |
| Connections are per-user / private to the user | `app/docs/page.tsx:619` | Published |
| Data deleted on account deletion | `app/privacy-policy/page.tsx:90`, `:111` | Published |
| Data not sold or disclosed for advertising | `app/privacy-policy/page.tsx:104` | Published |
| Hosted on Google Cloud Platform | `app/privacy-policy/page.tsx:100` | Published |
| Answers cite the source document | `app/docs/page.tsx:100`, `:460` | Published |
| **End-to-end encryption** | **Nothing.** The policy claims encryption of tokens and sensitive data plus HTTPS — that is not E2EE | **Not published** |
| **SSO** | **Nothing.** No occurrence anywhere in the repository | **Not published** |
| **Role-based access control** | Marketing copy only: `app/product/page.tsx:27`, `app/pricing/page.tsx:198`. Absent from `/docs` and the privacy policy | **Not published as a specific claim** — `/product` uses the privacy policy's "access controls" wording instead |
| **Audit logs / full activity logs** | Marketing copy only: `app/product/page.tsx:27`, `app/pricing/page.tsx:198`. Absent from `/docs` and the privacy policy | **Not published** |
| **SOC 2 / ISO 27001 / GDPR / HIPAA** | **Nothing.** No certification named anywhere in the repository | **Not published** — certifications are never inferred |
| "compliant with industry standards" (`app/pricing/page.tsx:198`) | Unfalsifiable; names no standard | **Not published** |

The privacy policy also carries an explicit disclaimer — "no system is completely secure. We
cannot guarantee absolute protection against all threats" (`:125`). The `/product` security
section is written to be consistent with that disclaimer rather than to override it, and it
links to `/privacy-policy` so the reader reaches the governing document.

- [ ] **Requires human confirmation:** are RBAC and audit logs shipped? If yes they belong in
      `/docs` and can then be published on `/product`. If no, `app/product/page.tsx:27`
      ("Role-based permissions, encryption, and full activity logs") and
      `app/pricing/page.tsx:198` are overstating the product.
- [ ] **Requires human confirmation:** is any certification held or in progress? Do not publish
      until awarded.

---

## 6. File types — OCR and "scanned files"

| Source | Claim |
|---|---|
| `app/docs/page.tsx:97` (FAQ, authoritative) | Documents: PDF, DOCX, TXT, MD, RTF, XML, JSON · Spreadsheets: XLSX, CSV · Presentations: PPTX · Images: PNG, JPG, JPEG, GIF, WEBP, BMP, TIFF, SVG · Videos: MP4, MOV, AVI, WebM, MKV, FLV. Max file size 50 MB for documents/images, 200 MB for videos |
| `app/docs/page.tsx:423` | "Supports PDF, DOCX, TXT, XLSX, CSV, PPTX, images, and videos" — consistent subset |
| `app/product/page.tsx:41` (old copy) | "PDFs, spreadsheets, **scanned files**, and more" |
| Rewrite spec (task brief) | "scanned images/OCR" listed as a *potential* example |

**Conflict:** image formats are accepted for upload, but **no source in the repository states
that MetaWurks performs OCR** — i.e. extracts and indexes *text* from a scanned page.
"Accepts TIFF" and "reads the text in a scanned invoice" are different claims.

**What was published:** the file-type table reproduces the `/docs` list verbatim, including the
image formats and the size limits. `/product` does **not** claim OCR and does **not** use the
phrase "scanned files" in a way that implies text extraction.

- [ ] **Requires human confirmation:** does ingestion run OCR on image files and image-only
      PDFs? This is a material claim for the bookkeeping and real-estate ICPs, whose source
      documents are frequently scans. If OCR exists, document it in `/docs` and it can then be
      stated on `/product`.

---

## 7. Claims in the rewrite spec with no repository support

| Spec text | Status | Action taken |
|---|---|---|
| Trust line: "**15-minute setup**" | **Unsupported.** No setup-time claim anywhere in the repository | **Not published.** Replaced with "No IT team required" plus verified onboarding facts (upload directly, or connect Google Drive / OneDrive) |
| Secondary CTA: "**See a 2-Minute Demo**" | **No such asset.** No video, no demo route, no embed anywhere in the repository. The only demo path is `components/HeroSection.tsx:123` — a Calendly **30-minute** booking | **Not published as written.** The CTA slot was implemented as "Book a Live Demo" pointing at the existing, working Calendly link |
| Trust line: "From **$19/month**" | **Verified** — `app/pricing/page.tsx:48`, Starter, monthly | Published |
| Metadata description: "from $19/month" | **Verified**, same source | Published |
| Definition: "Plans start at **$19/month**" | **Verified**, same source | Published |
| Primary CTA: "Start Your Free Trial" | A free plan exists (`app/pricing/page.tsx:15-19`) but its terms are contradictory (section 2) | Published as "**Start Free**" — asserts the free plan exists without asserting a trial length |
| Vertical pages `/for/bookkeepers`, `/for/law-firms`, `/for/real-estate`, `/for/small-business` | **Do not exist.** `app/` contains only `about-us`, `api`, `blog`, `contact`, `docs`, `pricing`, `privacy-policy`, `product`, `terms-of-service` | **Not linked.** Linking would have produced four 404s. The ICP section ships as non-linked cards; the routes are recorded as future architecture in `SEO_AEO_IMPLEMENTATION_REPORT.md` |
| Product screenshot | **No screenshot exists.** `public/` holds `architecture.png` (a 1536x1024 architecture *diagram*, already used on `/docs`), `image.png` (64x64 icon), `image (1).png` (unused), `Untitled design.svg` (logo), `placeholder.svg` (unused). `components/DashboardPreview.tsx` is a hand-built React mock, not a capture of the product | **Not fabricated.** A documented placeholder component was added with a visible "awaiting real screenshot" state |

---

## 8. Positioning conflict (recorded, not resolved)

`/pricing` positions MetaWurks as "an all-in-one AI platform and powerful AI aggregator … built
for teams, developers, and creators" (`app/pricing/page.tsx:179`). The rewrite spec positions
`/product` around document intelligence for bookkeepers, law firms, real-estate teams and SMBs.
The 37 blog articles in `lib/blogPosts.tsx` are almost entirely accounting- and finance-facing,
which supports the spec's direction.

These are not factually contradictory — an aggregator can be sold into a vertical — but they
are two different products in the reader's mind. The audit report reaches the same conclusion
(section 16.1, "Pricing FAQ — positioning": "Broader than the accounting strategy, but not
factually wrong").

`/product` was written to the spec's positioning. `/pricing` was **not** re-positioned — that is
a brand decision, not an SEO fix, and it was outside the requested scope.

- [ ] **Requires human confirmation:** which positioning is primary. If the document-intelligence
      framing wins, the `/pricing` FAQ answers and the homepage hero need to follow.

---

## Summary of open questions for a human

1. Is the `/docs` provider list (OpenAI, Anthropic, Google, xAI, DeepSeek, Perplexity) current and complete?
2. Are Mistral, LLaMA and Cohere integrated? Is "30+ other AI models" true?
3. What are the real free-tier terms — duration, models, message/token allowance?
4. What is the real annual discount? Is "Save 30%" correct? Is `originalPrice` dead data to delete?
5. Are RBAC and audit logs shipped? Is there SSO?
6. Is any security certification held or in progress?
7. Does ingestion perform OCR on scans and image-only PDFs?
8. Is there a real setup-time figure to support a "15-minute setup" claim?
9. Is a 2-minute demo video planned, or is Calendly the only demo path?
10. Are the four `/for/*` vertical pages planned? The spec references them but they do not exist.
11. Which positioning is primary — document intelligence, or multi-model aggregator?
