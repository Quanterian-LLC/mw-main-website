// Single source of truth for the /product page.
//
// Everything the page renders AND everything the page emits as JSON-LD is read from
// this file. That is deliberate: it makes it structurally impossible for the
// structured data to claim something the visible page does not say, which is the
// failure mode Google treats as hidden SEO-only content.
//
// PROVENANCE. Every claim below is traceable to a file in this repository. Where the
// repository contradicts itself, see FACTUAL_CONFLICTS.md for which source was treated
// as authoritative and why. Unverifiable claims were dropped, not softened.

/**
 * AI model providers.
 * Source: app/docs/page.tsx:399-404 (and the identical literal at :788-793).
 * Corroborated by lib/blogPosts.tsx:1046-1047.
 * See FACTUAL_CONFLICTS.md section 1 - two other, mutually inconsistent model lists
 * exist in this repository (pricing FAQ copy, and decorative homepage graphics).
 * Neither is used here.
 */
export const modelProviders = [
  { provider: "OpenAI", models: "GPT-5.2, GPT-5.1, GPT-4", bestFor: "General tasks, coding, analysis" },
  { provider: "Anthropic", models: "Claude 3.5 Sonnet, Claude 4.5", bestFor: "Long-form writing, reasoning, safety" },
  { provider: "Google", models: "Gemini 2.5 Flash", bestFor: "Fast responses, multimodal tasks" },
  { provider: "xAI", models: "Grok 4.1 Fast Reasoning", bestFor: "Real-time info, fast reasoning" },
  { provider: "DeepSeek", models: "DeepSeek Chat", bestFor: "Technical and coding tasks" },
  { provider: "Perplexity", models: "Sonar Pro", bestFor: "Web search, real-time information" },
] as const;

/**
 * Supported file types.
 * Source: app/docs/page.tsx:97 (documentation FAQ), consistent with :423.
 * NOTE: the repository nowhere states that MetaWurks performs OCR on scanned pages.
 * Image formats are listed because they are accepted for upload - that is not the
 * same claim as text extraction. See FACTUAL_CONFLICTS.md section 6.
 */
export const fileTypeGroups = [
  { group: "Documents", formats: "PDF, DOCX, TXT, MD, RTF, XML, JSON", limit: "50 MB per file" },
  { group: "Spreadsheets", formats: "XLSX, CSV", limit: "50 MB per file" },
  { group: "Presentations", formats: "PPTX", limit: "50 MB per file" },
  { group: "Images", formats: "PNG, JPG, JPEG, GIF, WEBP, BMP, TIFF, SVG", limit: "50 MB per file" },
  { group: "Video", formats: "MP4, MOV, AVI, WebM, MKV, FLV", limit: "200 MB per file" },
] as const;

/**
 * Entry price.
 * Source: app/pricing/page.tsx:47-50 - Starter, "$19", "/per month".
 * Only the entry price is published here. Enterprise and annual figures are omitted
 * on purpose: see FACTUAL_CONFLICTS.md section 3.
 */
export const entryPrice = { amount: "19", currency: "USD", planName: "Starter" } as const;

/**
 * Comparison against general-purpose chat assistants.
 *
 * The "assistant" column describes what a conversation-first assistant is *designed
 * around*, not the current feature list of any named third-party product - those change
 * often and are not verifiable from this repository. The "metawurks" column is sourced.
 *
 * The spec asked for an audit-log row. There is no audit-log evidence outside marketing
 * copy, so that row was dropped rather than published. FACTUAL_CONFLICTS.md section 5.
 */
export const comparisonRows = [
  {
    dimension: "Working with your files",
    metawurks: "Built around your uploads. Ask questions about documents you have added and get answers drawn from them.",
    assistant: "Built around a conversation. Files are something you attach to a chat rather than the substance of the product.",
  },
  {
    dimension: "Persistent document library",
    metawurks: "Uploaded files are kept in Knowledge Sources and stay available across conversations.",
    assistant: "Context generally belongs to a session, not to a library you maintain.",
  },
  {
    dimension: "Search across many documents",
    metawurks: "Retrieval runs across your indexed documents, so one question can span several files at once.",
    assistant: "Scoped to whatever is in the current conversation.",
  },
  {
    dimension: "Source citations",
    metawurks: "Answers cite the passages they were built from, so you can check them against the original file.",
    assistant: "Varies by product; not a guarantee of the format.",
  },
  {
    dimension: "Choice of AI model",
    metawurks: "Six providers available in one workspace, switchable mid-conversation.",
    assistant: "Usually one vendor's own models.",
  },
  {
    dimension: "Cloud storage",
    metawurks: "Connect Google Drive or OneDrive over OAuth and import folders directly.",
    assistant: "Varies by product and plan.",
  },
  {
    dimension: "Access and data handling",
    metawurks: "Connections are per-user and private to you. OAuth tokens are stored encrypted; passwords are never stored.",
    assistant: "Governed by that vendor's own terms - worth reading before client data goes in.",
  },
  {
    dimension: "Intended use",
    metawurks: "Answering questions about a business's own document set.",
    assistant: "General-purpose reasoning, drafting and coding.",
  },
  {
    dimension: "Pricing",
    metawurks: `Free plan available; paid plans from $${entryPrice.amount}/month.`,
    assistant: "Typically per seat.",
  },
] as const;

/**
 * FAQ.
 *
 * This array is rendered visibly on /product AND serialised into FAQPage JSON-LD from
 * the same object. Never add an entry here that is not shown on the page, and never add
 * a visible FAQ that is not in this array.
 *
 * Answers are plain text so they can be reused verbatim in structured data.
 */
export const productFaqs = [
  {
    question: "What is MetaWurks?",
    answer:
      "MetaWurks is an AI document intelligence platform for small businesses. You upload your PDFs, spreadsheets, presentations and other documents - or connect Google Drive or OneDrive - and then ask questions about them in plain English. Answers are drawn from your own files and cite the passages they came from. A free plan is available and paid plans start at $19 per month.",
  },
  {
    question: "Is there an AI that can answer questions from my own PDFs and spreadsheets?",
    answer:
      "Yes. That is what MetaWurks does. It indexes the files you upload and uses retrieval-augmented generation: when you ask a question, it first searches your documents for the relevant sections, then builds the answer from those sections rather than from the open web. Supported formats include PDF, DOCX, XLSX, CSV, PPTX and plain text.",
  },
  {
    question: "How is MetaWurks different from ChatGPT?",
    answer:
      "General-purpose assistants are built around a conversation; MetaWurks is built around a document library you maintain. Your uploaded files stay available across conversations, one question can search several documents at once, answers cite their source passages, and you can switch between six model providers in the same workspace. Google Drive and OneDrive connect over OAuth and are private to your own account.",
  },
  {
    question: "What is the best AI tool for bookkeepers to search client documents?",
    answer:
      "Look for three things: the tool must search documents you supply rather than the open web, it must cite the source so a figure can be traced back to the original file, and its data-handling terms must be acceptable for client records. MetaWurks does all three, and its per-account pricing from $19 per month does not carry the per-seat minimums that price solo practitioners out of this category. Confirm any professional confidentiality obligations, such as IRC Section 7216 consent, with your own compliance adviser.",
  },
  {
    question: "How much does MetaWurks cost?",
    answer:
      "Paid plans start at $19 per month. There is a free plan, and higher tiers add larger token limits, more team members and shared workspaces, with a custom tier for larger deployments. Full plan-by-plan detail is on the pricing page.",
  },
  {
    question: "Is MetaWurks secure enough for financial and legal documents?",
    answer:
      "MetaWurks encrypts OAuth tokens and sensitive data, transmits over HTTPS, applies access controls, and hosts on Google Cloud Platform. Cloud connections use OAuth, so your password is never shared or stored, and each connection is private to the user who created it. Deleting your account removes the associated data, and MetaWurks does not sell or disclose personal data for advertising. Read the privacy policy in full, and confirm any regulatory obligations of your own with your compliance adviser, before uploading regulated client records.",
  },
  {
    question: "What file types can MetaWurks read?",
    answer:
      "Documents (PDF, DOCX, TXT, MD, RTF, XML, JSON), spreadsheets (XLSX, CSV), presentations (PPTX), images (PNG, JPG, JPEG, GIF, WEBP, BMP, TIFF, SVG) and video (MP4, MOV, AVI, WebM, MKV, FLV). The maximum file size is 50 MB for documents and images, and 200 MB for video.",
  },
  {
    question: "Which AI models does MetaWurks use?",
    answer:
      "Six providers are available in one workspace: OpenAI (GPT-5.2, GPT-5.1, GPT-4), Anthropic (Claude 3.5 Sonnet, Claude 4.5), Google (Gemini 2.5 Flash), xAI (Grok 4.1 Fast Reasoning), DeepSeek (DeepSeek Chat) and Perplexity (Sonar Pro). You can switch model mid-conversation. The documentation carries the current list.",
  },
] as const;

/**
 * Feature list used in SoftwareApplication JSON-LD.
 * Every entry corresponds to a section heading or a stated capability on the page.
 */
export const verifiedFeatures = [
  "Ask questions about your own documents in plain English",
  "Retrieval-augmented generation over your uploaded files",
  "Answers cite the source passages they were built from",
  "Six AI model providers in one workspace, switchable mid-conversation",
  "Google Drive and OneDrive import over OAuth",
  "Chat memory across conversation history",
  "Export to PDF, Word, Excel, PowerPoint, CSV and plain text",
  "Shared workspaces and team members on higher plans",
] as const;
