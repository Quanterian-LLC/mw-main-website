"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { ChevronDown, Mail, Calendar, MessageSquare, Users, Figma, Linkedin, Mic, Upload, Zap, FileDown, Share2, Shield } from "lucide-react";
import { integrationDocs } from "@/lib/integration-docs";

// ─── Sidebar navigation ───────────────────────────────────────────────────────

const sidebarNav = [
  {
    id: "how-to-use",
    label: "How to Use the Product",
    defaultItem: "what-is-metawurks",
    items: [
      { id: "what-is-metawurks", label: "What is MetaWurks?" },
      { id: "getting-started", label: "Getting started" },
      { id: "chat-interface", label: "The chat interface" },
      { id: "ai-models", label: "AI models" },
      { id: "uploading-documents", label: "Uploading documents" },
      { id: "chat-with-documents", label: "Chat with your documents" },
      { id: "background-tasks", label: "Background tasks" },
      { id: "integrations-in-chat", label: "Using integrations in chat" },
      { id: "exporting", label: "Exporting & downloading" },
      { id: "sharing", label: "Sharing chats" },
      { id: "plans-and-usage", label: "Plans & usage" },
      { id: "tips", label: "Tips & best practices" },
      { id: "platform-architecture", label: "MetaWurks AI Platform Architecture" },
      { id: "how-to-use-faq", label: "FAQ" },
    ],
  },
  {
    id: "connections",
    label: "Connections",
    defaultItem: "connections-overview",
    items: [
      { id: "connections-overview", label: "Overview" },
      { id: "how-connections-work", label: "How connections work" },
      { id: "connecting-a-service", label: "Connecting a service" },
      { id: "supported-services", label: "Supported services" },
      { id: "connections-troubleshooting", label: "Troubleshooting" },
      { id: "connections-faq", label: "FAQ" },
    ],
  },
  {
    id: "integration-guides",
    label: "Integration Guides",
    defaultItem: "int-gmail",
    items: [
      { id: "int-gmail", label: "Gmail" },
      { id: "int-google-calendar", label: "Google Calendar" },
      { id: "int-outlook", label: "Outlook" },
      { id: "int-teams", label: "Microsoft Teams" },
      { id: "int-slack", label: "Slack" },
      { id: "int-figma", label: "Figma" },
      { id: "int-linkedin", label: "LinkedIn" },
      { id: "int-fireflies", label: "Fireflies.ai" },
    ],
  },
  {
    id: "what-metawurks-can-do",
    label: "What MetaWurks Can Do",
    defaultItem: "what-metawurks-can-do",
    items: [],
  },
];

// How-to-Use section IDs (shown as one combined long page)
const howToUseIds = [
  "what-is-metawurks", "getting-started", "chat-interface", "ai-models",
  "uploading-documents", "chat-with-documents", "background-tasks",
  "integrations-in-chat", "exporting", "sharing", "plans-and-usage",
  "tips", "platform-architecture", "how-to-use-faq",
];

const connectionsIds = [
  "connections-overview", "how-connections-work", "connecting-a-service",
  "supported-services", "connections-troubleshooting", "connections-faq",
];

// Map sidebar integration IDs → integrationDocs keys
const integrationKeyMap: Record<string, string> = {
  "int-gmail": "gmail",
  "int-google-calendar": "google-calendar",
  "int-outlook": "outlook",
  "int-teams": "teams",
  "int-slack": "slack",
  "int-figma": "figma",
  "int-linkedin": "linkedin",
  "int-fireflies": "fireflies",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const howToUseFaqs = [
  { question: "What file types can I upload to MetaWurks?", answer: "MetaWurks supports documents (PDF, DOCX, TXT, MD, RTF, XML, JSON), spreadsheets (XLSX, CSV), presentations (PPTX), images (PNG, JPG, JPEG, GIF, WEBP, BMP, TIFF, SVG), and videos (MP4, MOV, AVI, WebM, MKV, FLV). Max file size is 50 MB for documents/images and 200 MB for videos." },
  { question: "Can I switch AI models in the middle of a conversation?", answer: "Yes. You can change the AI model at any time using the model selector dropdown in the chat. The new model will be used for subsequent messages in the same conversation." },
  { question: "How many background tasks can I run at the same time?", answer: "You can run up to 5 background tasks concurrently. Each task can run for up to 15 minutes." },
  { question: "What is RAG and how does it work with my documents?", answer: "RAG (Retrieval-Augmented Generation) is the technology MetaWurks uses to search your uploaded documents. When you ask a question, the AI first searches through your document chunks to find relevant sections, then uses that context to generate an accurate, source-backed answer." },
  { question: "Do shared chat links expire?", answer: "No. Shared chat links do not expire. Recipients can view the shared conversation in read-only mode without needing a MetaWurks account." },
  { question: "How does the token-based usage system work?", answer: "Every interaction with the AI consumes tokens based on the length of your messages and responses. Your plan determines your daily token allowance. Token usage resets daily." },
  { question: "Can I upload files from Google Drive or OneDrive?", answer: "Yes. Connect your cloud storage account from the Knowledge Sources panel, then browse and select files or folders to import." },
  { question: "What happens if I run out of tokens for the day?", answer: "If you reach your daily token limit, you won't be able to send new messages until your tokens reset the next day. You can upgrade your plan at any time for a higher daily allowance." },
  { question: "Is Perplexity different from the other AI models?", answer: "Yes. Perplexity Sonar Pro has built-in web search capabilities, meaning it can fetch real-time information from the internet. Use Perplexity when you need current information like news, stock prices, or recent events." },
  { question: "Can other people edit my shared chats?", answer: "No. Shared chats are read-only. Recipients can view the conversation but cannot edit messages or add new messages." },
];

const connectionsFaqs = [
  { question: "Does MetaWurks store my passwords for connected services?", answer: "No. MetaWurks uses OAuth for all connections. MetaWurks only stores the OAuth access token — never your password." },
  { question: "What happens to my data when I disconnect a service?", answer: "When you disconnect a service, MetaWurks immediately deletes the stored OAuth tokens. No new data can be retrieved, though previous chat histories remain." },
  { question: "Why does my connection show an error status?", answer: "This usually means the OAuth token has expired or been revoked. Try disconnecting and reconnecting the service." },
  { question: "Do connected services use my token quota?", answer: "Yes. When the AI processes files from a connected service, the tokens used count toward your plan's limit. The file transfer itself does not count." },
  { question: "Can I use connected services in background tasks?", answer: "Yes. Background tasks have access to all your connected services." },
  { question: "Are my connected service interactions private?", answer: "Yes. Connections are per-user — only you can access your connected accounts. Shared chats show AI responses but do not expose your credentials." },
];

const platformCapabilities = [
  { icon: MessageSquare, title: "Multi-Model AI Chat", description: "Chat with GPT, Claude, Gemini, Grok, DeepSeek, and Perplexity — switch models anytime." },
  { icon: Upload, title: "Document Intelligence", description: "Upload PDFs, Word docs, spreadsheets, images, and videos. Ask questions and get source-backed answers." },
  { icon: Zap, title: "Background Tasks", description: "Run up to 5 concurrent research tasks that work behind the scenes for up to 15 minutes each." },
  { icon: FileDown, title: "Professional Exports", description: "Export AI-generated content to PDF, Word, Excel, PowerPoint, CSV, or plain text." },
  { icon: Share2, title: "Chat Sharing", description: "Share conversations via secure links. Recipients get read-only access — no account needed." },
  { icon: Shield, title: "Secure Connections", description: "OAuth-based integrations with Gmail, Slack, Figma, Teams, and more. Your passwords are never stored." },
];

// ─── Reusable sub-components ──────────────────────────────────────────────────

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
          <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
          <span className="text-[17px] leading-8">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-6">
      {items.map((step, i) => (
        <li key={i} className="flex gap-4 text-[#1A1A1A] dark:text-[#A1A1AA]">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EFF6FF] dark:bg-[#1E3A5F] text-[#1D4ED8] dark:text-[#60A5FA] text-sm font-semibold flex items-center justify-center mt-0.5">
            {i + 1}
          </span>
          <span className="text-[17px] leading-8 pt-0">{step}</span>
        </li>
      ))}
    </ol>
  );
}

function FaqAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((item, i) => (
        <div key={i} className="border border-[#E4E4E7] dark:border-[#27272A] rounded-lg overflow-hidden bg-white dark:bg-[#18181B]">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#F4F4F5] dark:hover:bg-[#27272A] transition-colors"
          >
            <span className="font-semibold text-[#18181B] dark:text-white text-sm pr-4 leading-6">{item.question}</span>
            <ChevronDown className={`w-4 h-4 text-[#A1A1AA] flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-200 ${openIndex === i ? "max-h-96" : "max-h-0"}`}>
            <div className="px-5 py-4 text-sm text-[#1A1A1A] dark:text-[#A1A1AA] leading-7 border-t border-[#E4E4E7] dark:border-[#27272A]">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <h1 className="text-4xl font-extrabold tracking-tight text-[#09090B] dark:text-white mb-4 leading-tight">{title}</h1>
      {subtitle && <p className="text-xl text-[#3F3F46] dark:text-[#A1A1AA] leading-9">{subtitle}</p>}
      <div className="h-px bg-[#E4E4E7] dark:bg-[#27272A] mt-7" />
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold text-[#09090B] dark:text-white mb-5 mt-12 leading-snug">{children}</h2>;
}

function Prose({ children }: { children: React.ReactNode }) {
  return <p className="text-[17px] text-[#1A1A1A] dark:text-[#A1A1AA] leading-9 mb-6">{children}</p>;
}

// ─── Integration detail view ──────────────────────────────────────────────────

function IntegrationDetailView({ docKey }: { docKey: string }) {
  const doc = integrationDocs[docKey];
  if (!doc) return null;

  const integrationIcons: Record<string, React.ElementType> = {
    gmail: Mail,
    "google-calendar": Calendar,
    outlook: Mail,
    teams: Users,
    slack: MessageSquare,
    figma: Figma,
    linkedin: Linkedin,
    fireflies: Mic,
  };

  const integrationGradients: Record<string, string> = {
    gmail: "from-red-500 to-red-600",
    "google-calendar": "from-blue-500 to-blue-600",
    outlook: "from-blue-600 to-blue-700",
    teams: "from-indigo-500 to-purple-600",
    slack: "from-purple-500 to-pink-500",
    figma: "from-pink-500 to-orange-500",
    linkedin: "from-blue-700 to-blue-800",
    fireflies: "from-violet-500 to-purple-600",
  };

  const Icon = integrationIcons[docKey] || Mail;
  const gradient = integrationGradients[docKey] || "from-gray-500 to-gray-600";

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#09090B] dark:text-white leading-tight">{doc.title}</h1>
        </div>
        <p className="text-lg text-[#3F3F46] dark:text-[#A1A1AA] leading-8 mb-6">{doc.subtitle}</p>
        <div className="h-px bg-[#E4E4E7] dark:bg-[#27272A]" />
      </div>

      {/* What it does */}
      <div className="mb-8">
        <SubHeading>What this connector does</SubHeading>
        <Prose>{doc.whatItDoes}</Prose>
      </div>

      {/* How to connect */}
      <div className="mb-8">
        <SubHeading>How to connect</SubHeading>
        <NumberedList items={doc.howToConnect} />
        {doc.customConnector && (
          <div className="mt-4 p-4 rounded-lg bg-[#F0FDF4] dark:bg-[#052e16] border border-[#BBF7D0] dark:border-[#166534]">
            <p className="text-sm font-semibold text-[#15803D] dark:text-[#4ADE80] mb-1">Need a custom connector?</p>
            <p className="text-sm text-[#1A1A1A] dark:text-[#A1A1AA]">{doc.customConnector}</p>
          </div>
        )}
      </div>

      {/* Permissions */}
      <div className="mb-8">
        <SubHeading>Permissions required</SubHeading>
        <Prose>When you connect, you will be asked to grant the following permissions:</Prose>
        <BulletList items={doc.permissions} />
      </div>

      {/* Supported actions */}
      <div className="mb-8">
        <SubHeading>Supported actions</SubHeading>
        <BulletList items={doc.supportedActions} />
      </div>

      {/* Example use cases */}
      <div className="mb-8">
        <SubHeading>Example use cases</SubHeading>
        <ul className="space-y-5">
          {doc.exampleUseCases.map((useCase, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-[0.45rem] flex-shrink-0" />
              <span className="leading-7 italic">{useCase}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Using it safely */}
      <div className="mb-8">
        <SubHeading>Using it safely</SubHeading>
        <BulletList items={doc.usingSafely} />
      </div>

      {/* Troubleshooting */}
      <div className="mb-8">
        <SubHeading>Setup and troubleshooting</SubHeading>
        <ul className="space-y-4">
          {doc.troubleshooting.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-[0.45rem] flex-shrink-0" />
              <span className="leading-7">
                <strong className="text-[#09090B] dark:text-white font-semibold">{item.question}</strong>{" "}
                {item.answer}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ */}
      {doc.faq && doc.faq.length > 0 && (
        <div className="mb-8">
          <SubHeading>Frequently Asked Questions</SubHeading>
          <FaqAccordion faqs={doc.faq} />
        </div>
      )}
    </div>
  );
}

// ─── Combined "How to Use" long-page view ─────────────────────────────────────

function HowToUseAllSections({ navigate }: { navigate: (id: string) => void }) {
  const divider = "scroll-mt-24 pt-10 mt-4 border-t border-[#E4E4E7] dark:border-[#27272A] mb-16";
  const first = "scroll-mt-24 mb-16";
  return (
    <div>
      {/* What is MetaWurks */}
      <div id="section-what-is-metawurks" className={first}>
        <SectionHeading title="What is MetaWurks?" />
        <Prose>
          MetaWurks is an{" "}
          <strong className="text-[#09090B] dark:text-white">All-in-One Multi-Modal AI Orchestrator</strong>{" "}
          that unifies multiple AI models, document intelligence, external service integrations, and background task processing into a single powerful platform.
        </Prose>
        <Prose>Think of it as your AI assistant that can:</Prose>
        <BulletList items={[
          "Chat with multiple AI models (GPT, Claude, Gemini, Grok, DeepSeek, Perplexity)",
          "Upload and search through your documents using AI",
          "Connect to your email, calendar, Slack, Figma, and more",
          "Run background research tasks and generate professional documents",
          "Export conversations to PDF, Word, Excel, or PowerPoint",
          "Share chats with teammates via shareable links",
        ]} />
      </div>

      {/* Getting Started */}
      <div id="section-getting-started" className={divider}>
        <SectionHeading title="Getting started" subtitle="Getting started with MetaWurks takes just a few minutes." />
        <ol className="space-y-6">
          {[
            { title: "Create an account", desc: "Visit metawurks.com and sign up with your email or Google account. You can also sign in with Microsoft." },
            { title: "Choose your plan", desc: "MetaWurks offers a free tier to get started, plus Basic, Starter, Professional, and Enterprise plans with more features and higher usage limits." },
            { title: "Start chatting", desc: "Once logged in, you land on the chat page. Type your message and the AI will respond in real time." },
            { title: "Explore features", desc: "Upload documents, connect integrations, try different AI models, and experiment with background tasks as you get comfortable." },
          ].map((step, i) => (
            <li key={i} className="flex gap-4 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#DBEAFE] dark:bg-[#1E3A5F] text-[#1D4ED8] dark:text-[#60A5FA] text-sm font-medium flex items-center justify-center mt-0.5">{i + 1}</span>
              <span className="text-[17px] leading-8"><strong className="text-[#09090B] dark:text-white">{step.title}</strong> — {step.desc}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Chat Interface */}
      <div id="section-chat-interface" className={divider}>
        <SectionHeading title="The chat interface" subtitle="The chat is the core of MetaWurks. Here is what you will find:" />
        <ul className="space-y-5">
          {[
            { title: "Sidebar", desc: "Shows your chat history, create new chats, and access settings. You can search through past conversations." },
            { title: "Message input", desc: "Type your message at the bottom. You can also attach files directly in the chat." },
            { title: "Model selector", desc: "Choose which AI model to use from the dropdown. Different models have different strengths." },
            { title: "Streaming responses", desc: "AI responses appear in real time as they are generated, so you don't have to wait for the full response." },
            { title: "Message actions", desc: "Hover over any message to edit it, regenerate the AI response, or copy the content." },
            { title: "Chat titles", desc: "Chats are automatically titled based on your first message. You can rename them anytime." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8"><strong className="text-[#09090B] dark:text-white">{item.title}</strong> — {item.desc}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* AI Models */}
      <div id="section-ai-models" className={divider}>
        <SectionHeading title="AI models" subtitle="MetaWurks gives you access to multiple AI models from different providers. Switch models at any time using the model selector in the chat." />
        <div className="overflow-x-auto rounded-lg border border-[#E4E4E7] dark:border-[#27272A]">
          <table className="w-full text-[15px] text-left">
            <thead>
              <tr className="bg-[#F3F4F6] dark:bg-[#1A1A1A]">
                <th className="py-4 px-5 font-semibold text-[#09090B] dark:text-white">Provider</th>
                <th className="py-4 px-5 font-semibold text-[#09090B] dark:text-white">Models</th>
                <th className="py-4 px-5 font-semibold text-[#09090B] dark:text-white">Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                { provider: "OpenAI", models: "GPT-5.2, GPT-5.1, GPT-4", best: "General tasks, coding, analysis" },
                { provider: "Anthropic", models: "Claude 3.5 Sonnet, Claude 4.5", best: "Long-form writing, reasoning, safety" },
                { provider: "Google", models: "Gemini 2.5 Flash", best: "Fast responses, multimodal tasks" },
                { provider: "xAI", models: "Grok 4.1 Fast Reasoning", best: "Real-time info, fast reasoning" },
                { provider: "DeepSeek", models: "DeepSeek Chat", best: "Technical & coding tasks" },
                { provider: "Perplexity", models: "Sonar Pro", best: "Web search, real-time information" },
              ].map((row, i) => (
                <tr key={row.provider} className={`border-t border-[#E4E4E7] dark:border-[#27272A] text-[#1A1A1A] dark:text-[#A1A1AA] ${i % 2 === 1 ? "bg-[#F9FAFB] dark:bg-[#111111]" : ""}`}>
                  <td className="py-4 px-5 font-medium text-[#09090B] dark:text-white">{row.provider}</td>
                  <td className="py-4 px-5">{row.models}</td>
                  <td className="py-4 px-5">{row.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Uploading Documents */}
      <div id="section-uploading-documents" className={divider}>
        <SectionHeading title="Uploading documents" subtitle="Upload documents and use AI to search, summarize, and chat with your files." />
        <SubHeading>Upload sources</SubHeading>
        <ul className="space-y-5 mb-8">
          {[
            { title: "Local upload", desc: "Drag and drop files or click to browse. Supports PDF, DOCX, TXT, XLSX, CSV, PPTX, images, and videos." },
            { title: "Google Drive", desc: "Connect your Google Drive and browse or select files and folders to import." },
            { title: "OneDrive", desc: "Connect your Microsoft OneDrive account and import files directly." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8"><strong className="text-[#09090B] dark:text-white">{item.title}</strong> — {item.desc}</span>
            </li>
          ))}
        </ul>
        <SubHeading>How to upload</SubHeading>
        <NumberedList items={[
          "Click the upload icon in the sidebar to open Knowledge Sources.",
          "Choose your upload source (Local, Google Drive, or OneDrive).",
          "Select your files. You can upload multiple files at once.",
          "Files are automatically processed — chunked, indexed, and made searchable by the AI.",
          "You can view and manage all uploaded files in the Discover page.",
        ]} />
      </div>

      {/* Chat with Documents */}
      <div id="section-chat-with-documents" className={divider}>
        <SectionHeading title="Chat with your documents" />
        <Prose>
          Once your documents are uploaded and processed, MetaWurks uses{" "}
          <strong className="text-[#09090B] dark:text-white">RAG (Retrieval-Augmented Generation)</strong>{" "}
          to search through your documents and provide accurate, source-backed answers.
        </Prose>
        <Prose>Simply ask questions about your documents in the chat:</Prose>
        <ul className="space-y-5 mb-6">
          {['"What are the key findings in the Q4 report?"', '"Summarize the contract terms from the uploaded PDF"', '"Find all mentions of revenue projections across my documents"', '"Compare the data in my two spreadsheets"'].map((ex, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8 italic">{ex}</span>
            </li>
          ))}
        </ul>
        <Prose>The AI will search your uploaded documents, find the most relevant sections, and craft an accurate response with citations.</Prose>
      </div>

      {/* Background Tasks */}
      <div id="section-background-tasks" className={divider}>
        <SectionHeading title="Background tasks" />
        <Prose>
          For complex, long-running tasks, MetaWurks can run{" "}
          <strong className="text-[#09090B] dark:text-white">background tasks</strong>{" "}
          that work behind the scenes while you continue chatting.
        </Prose>
        <SubHeading>Ideal for</SubHeading>
        <ul className="space-y-5 mb-8">
          {[
            { title: "Research", desc: "Deep web research on a topic, gathering sources and synthesizing findings." },
            { title: "Document creation", desc: "Generating comprehensive reports, proposals, or guides." },
            { title: "Analysis", desc: "Analyzing large datasets or documents that require extended processing." },
            { title: "Multi-step workflows", desc: "Tasks that require multiple steps of research, analysis, and writing." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8"><strong className="text-[#09090B] dark:text-white">{item.title}</strong> — {item.desc}</span>
            </li>
          ))}
        </ul>
        <Prose>When a background task is running, you will see a progress card in the chat with a real-time activity log. Tasks can run for up to 15 minutes, and you can run up to 5 tasks at once.</Prose>
      </div>

      {/* Integrations in Chat */}
      <div id="section-integrations-in-chat" className={divider}>
        <SectionHeading title="Using integrations in chat" />
        <Prose>
          Once you have connected external services (see{" "}
          <button onClick={() => navigate("connections-overview")} className="text-[#1D4ED8] dark:text-[#60A5FA] hover:underline">Connections</button>
          ), you can use them naturally in chat. The AI automatically detects when it needs to use a connected tool.
        </Prose>
        <SubHeading>Example prompts</SubHeading>
        <ul className="space-y-5">
          {['"Check my Gmail for emails from John this week"', '"What meetings do I have tomorrow on Google Calendar?"', '"Post a message to the #general channel in Slack"', '"Show me the latest designs in my Figma project"', '"Summarize my last meeting notes from Fireflies"'].map((ex, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8 italic">{ex}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Exporting */}
      <div id="section-exporting" className={divider}>
        <SectionHeading title="Exporting & downloading" subtitle="Export AI-generated content in multiple professional formats:" />
        <ul className="space-y-5">
          {[
            { title: "PDF", desc: "Professional layout with formatting, headers, and proper typography." },
            { title: "Word (DOCX)", desc: "Editable documents that you can further modify in Microsoft Word or Google Docs." },
            { title: "Excel (XLSX)", desc: "Spreadsheets with structured data, ideal for tables and data analysis results." },
            { title: "PowerPoint (PPTX)", desc: "Presentation slides generated from your content." },
            { title: "CSV", desc: "Simple data export for use in any spreadsheet application." },
            { title: "Plain Text (TXT)", desc: "Raw text export for maximum compatibility." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8"><strong className="text-[#09090B] dark:text-white">{item.title}</strong> — {item.desc}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sharing */}
      <div id="section-sharing" className={divider}>
        <SectionHeading title="Sharing chats" subtitle="Share any chat conversation with others using a shareable link:" />
        <NumberedList items={[
          'Open the chat you want to share and click the "Share" button.',
          "Choose whether to share the full chat or from a specific message.",
          "A unique share link is generated. Copy it and send it to anyone.",
          "Recipients can view the shared chat in read-only mode — no account required.",
        ]} />
      </div>

      {/* Plans & Usage */}
      <div id="section-plans-and-usage" className={divider}>
        <SectionHeading title="Plans & usage" />
        <Prose>MetaWurks uses a token-based usage system. Each AI interaction consumes tokens based on the length of your messages and responses.</Prose>
        <ul className="space-y-5">
          {[
            { title: "Free", desc: "Get started with a daily token allowance. Great for trying out the platform." },
            { title: "Basic", desc: "Higher token limits for regular use." },
            { title: "Starter", desc: "Increased limits plus access to all AI models." },
            { title: "Professional", desc: "Generous limits, priority support, and advanced features." },
            { title: "Enterprise", desc: "Custom limits, dedicated support, and team management. Contact sales for details." },
          ].map((plan, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8"><strong className="text-[#09090B] dark:text-white">{plan.title}</strong> — {plan.desc}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tips */}
      <div id="section-tips" className={divider}>
        <SectionHeading title="Tips & best practices" />
        <ul className="space-y-5">
          {[
            { title: "Be specific", desc: 'The more context you give the AI, the better the response. Instead of "summarize this", say "summarize the key financial metrics from the Q4 report."' },
            { title: "Use the right model", desc: "Perplexity Sonar Pro is best for real-time web searches. Claude excels at long-form writing. GPT is great for general tasks." },
            { title: "Upload relevant documents first", desc: "If you are going to ask questions about specific data, upload the documents before starting the conversation." },
            { title: "Use background tasks for deep research", desc: "For comprehensive research that requires multiple web searches and synthesis, let a background task handle it." },
            { title: "Connect your tools", desc: "The more services you connect, the more powerful MetaWurks becomes. Connect Gmail, Calendar, and Slack for a unified productivity experience." },
            { title: "Export when you need to", desc: "Use the export feature to save AI-generated reports, analyses, and documents in professional formats for sharing with your team." },
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8"><strong className="text-[#09090B] dark:text-white">{tip.title}</strong> — {tip.desc}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Platform Architecture */}
      <div id="section-platform-architecture" className={divider}>
        <SectionHeading
          title="MetaWurks AI Platform Architecture"
          subtitle="A high-level view of how MetaWurks orchestrates AI models, data storage, security, and integrations."
        />
        <div className="rounded-xl overflow-hidden border border-[#E4E4E7] dark:border-[#27272A]">
          <img
            src="/architecture.png"
            alt="MetaWurks AI Platform Architecture"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* FAQ */}
      <div id="section-how-to-use-faq" className={divider}>
        <SectionHeading title="Frequently Asked Questions" />
        <FaqAccordion faqs={howToUseFaqs} />
      </div>
    </div>
  );
}

// ─── Combined "Connections" long-page view ────────────────────────────────────

function ConnectionsAllSections({ navigate }: { navigate: (id: string) => void }) {
  const divider = "scroll-mt-24 pt-10 mt-4 border-t border-[#E4E4E7] dark:border-[#27272A] mb-16";
  const first = "scroll-mt-24 mb-16";
  return (
    <div>
      {/* Overview */}
      <div id="section-connections-overview" className={first}>
        <SectionHeading title="Connections" subtitle="Connect your cloud storage accounts to MetaWurks for AI-powered file search and analysis." />
        <Prose>
          MetaWurks allows you to connect your{" "}
          <strong className="text-[#09090B] dark:text-white">cloud storage accounts</strong>{" "}
          so you can browse, import, and analyze files directly within the platform. Connect Google Drive or OneDrive to bring your documents into MetaWurks for AI-powered search and analysis.
        </Prose>
        <Prose>Connections are per-user, meaning your connected accounts are private to you. Each connection uses OAuth for secure authentication — MetaWurks never stores your passwords.</Prose>
      </div>

      {/* How connections work */}
      <div id="section-how-connections-work" className={divider}>
        <SectionHeading title="How connections work" subtitle="When you connect an external service, here is what happens behind the scenes:" />
        <NumberedList items={[
          "You click Connect on a storage service card and are redirected to the provider's login page (Google or Microsoft).",
          "You sign in and grant MetaWurks permission to access your files and folders.",
          "The provider issues an OAuth token, which MetaWurks stores securely. Your password is never shared.",
          "MetaWurks connects to your cloud storage and lets you browse and select files to import.",
          "Imported files are available for AI-powered search, analysis, and chat — just ask questions about your documents naturally.",
        ]} />
      </div>

      {/* Connecting a service */}
      <div id="section-connecting-a-service" className={divider}>
        <SectionHeading title="Connecting a service" subtitle="Follow these steps to connect any supported service:" />
        <NumberedList items={[
          'Open the Knowledge Sources panel by clicking the upload icon in the sidebar, then go to the "Integrations" tab.',
          "Find the cloud storage service you want to connect (Google Drive or OneDrive).",
          'Click the service card, then click "Connect" on the detail page.',
          "You will be redirected to the provider's OAuth consent screen. Sign in and approve the requested permissions.",
          "Once approved, you will be redirected back to MetaWurks. The service will show as connected.",
          "You can now browse your cloud storage, import files, and ask the AI to search and analyze your documents.",
        ]} />
      </div>

      {/* Supported services */}
      <div id="section-supported-services" className={divider}>
        <SectionHeading title="Supported services" subtitle="MetaWurks currently supports the following cloud storage connections:" />
        <div className="space-y-5 mb-8">
          {[
            { name: "Google Drive", desc: "Browse and import files and folders from your Google Drive. Supports documents, spreadsheets, presentations, images, and more." },
            { name: "OneDrive", desc: "Connect your Microsoft OneDrive account to browse, select, and import files directly into MetaWurks." },
          ].map((service) => (
            <div key={service.name} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8"><strong className="text-[#09090B] dark:text-white">{service.name}</strong> — {service.desc}</span>
            </div>
          ))}
        </div>
        <Prose>
          Looking for service integrations like Gmail, Slack, or Figma? See the{" "}
          <button onClick={() => navigate("int-gmail")} className="text-[#1D4ED8] dark:text-[#60A5FA] hover:underline">Integration Guides</button>.
        </Prose>
      </div>

      {/* Troubleshooting */}
      <div id="section-connections-troubleshooting" className={divider}>
        <SectionHeading title="Troubleshooting" />
        <ul className="space-y-5">
          {[
            { q: 'Connection shows "error" status.', a: "The OAuth token may have expired. Try disconnecting and reconnecting the service. If the issue persists, ensure you approved all required permissions during the OAuth flow." },
            { q: "I connected a service but the AI can't use it.", a: 'Make sure the connection status is "active" in the Integrations tab. If you just connected, try refreshing the page or starting a new chat.' },
            { q: "OAuth redirect fails or shows an error.", a: "Ensure your browser allows pop-ups and redirects from MetaWurks. Some ad blockers or privacy extensions may interfere with the OAuth flow." },
            { q: "I want to connect a service that isn't listed.", a: "Currently MetaWurks supports Google Drive and OneDrive for cloud storage connections. For other service integrations like Gmail, Slack, or Figma, check the Integration Guides. If you need a specific integration, contact us at admin@metawurks.com." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8"><strong className="text-[#09090B] dark:text-white">{item.q}</strong> {item.a}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ */}
      <div id="section-connections-faq" className={divider}>
        <SectionHeading title="Frequently Asked Questions" />
        <FaqAccordion faqs={connectionsFaqs} />
      </div>
    </div>
  );
}

// ─── Section content renderers ────────────────────────────────────────────────

function renderSection(activeSection: string, navigate: (id: string) => void) {
  // ── How to Use: always show full combined long page ───────────────────────
  if (howToUseIds.includes(activeSection)) {
    return <HowToUseAllSections navigate={navigate} />;
  }

  // ── Connections: always show full combined long page ──────────────────────
  if (connectionsIds.includes(activeSection)) {
    return <ConnectionsAllSections navigate={navigate} />;
  }

  // ── (kept for safety, unreachable for How-to-Use ids) ────────────────────

  if (activeSection === "what-is-metawurks") {
    return (
      <div>
        <SectionHeading title="What is MetaWurks?" />
        <Prose>
          MetaWurks is an{" "}
          <strong className="text-[#09090B] dark:text-white">All-in-One Multi-Modal AI Orchestrator</strong>{" "}
          that unifies multiple AI models, document intelligence, external service integrations, and background task processing into a single powerful platform.
        </Prose>
        <Prose>Think of it as your AI assistant that can:</Prose>
        <BulletList items={[
          "Chat with multiple AI models (GPT, Claude, Gemini, Grok, DeepSeek, Perplexity)",
          "Upload and search through your documents using AI",
          "Connect to your email, calendar, Slack, Figma, and more",
          "Run background research tasks and generate professional documents",
          "Export conversations to PDF, Word, Excel, or PowerPoint",
          "Share chats with teammates via shareable links",
        ]} />
      </div>
    );
  }

  if (activeSection === "getting-started") {
    return (
      <div>
        <SectionHeading title="Getting started" subtitle="Getting started with MetaWurks takes just a few minutes." />
        <ol className="space-y-6">
          {[
            { title: "Create an account", desc: "Visit metawurks.com and sign up with your email or Google account. You can also sign in with Microsoft." },
            { title: "Choose your plan", desc: "MetaWurks offers a free tier to get started, plus Basic, Starter, Professional, and Enterprise plans with more features and higher usage limits." },
            { title: "Start chatting", desc: "Once logged in, you land on the chat page. Type your message and the AI will respond in real time." },
            { title: "Explore features", desc: "Upload documents, connect integrations, try different AI models, and experiment with background tasks as you get comfortable." },
          ].map((step, i) => (
            <li key={i} className="flex gap-4 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#DBEAFE] dark:bg-[#1E3A5F] text-[#1D4ED8] dark:text-[#60A5FA] text-sm font-medium flex items-center justify-center mt-0.5">{i + 1}</span>
              <span className="text-[17px] leading-8"><strong className="text-[#09090B] dark:text-white">{step.title}</strong> — {step.desc}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (activeSection === "chat-interface") {
    return (
      <div>
        <SectionHeading title="The chat interface" subtitle="The chat is the core of MetaWurks. Here is what you will find:" />
        <ul className="space-y-5">
          {[
            { title: "Sidebar", desc: "Shows your chat history, create new chats, and access settings. You can search through past conversations." },
            { title: "Message input", desc: "Type your message at the bottom. You can also attach files directly in the chat." },
            { title: "Model selector", desc: "Choose which AI model to use from the dropdown. Different models have different strengths." },
            { title: "Streaming responses", desc: "AI responses appear in real time as they are generated, so you don't have to wait for the full response." },
            { title: "Message actions", desc: "Hover over any message to edit it, regenerate the AI response, or copy the content." },
            { title: "Chat titles", desc: "Chats are automatically titled based on your first message. You can rename them anytime." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8"><strong className="text-[#09090B] dark:text-white">{item.title}</strong> — {item.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (activeSection === "ai-models") {
    return (
      <div>
        <SectionHeading title="AI models" subtitle="MetaWurks gives you access to multiple AI models from different providers. Switch models at any time using the model selector in the chat." />
        <div className="overflow-x-auto rounded-lg border border-[#E4E4E7] dark:border-[#27272A]">
          <table className="w-full text-[15px] text-left">
            <thead>
              <tr className="bg-[#F3F4F6] dark:bg-[#1A1A1A]">
                <th className="py-4 px-5 font-semibold text-[#09090B] dark:text-white">Provider</th>
                <th className="py-4 px-5 font-semibold text-[#09090B] dark:text-white">Models</th>
                <th className="py-4 px-5 font-semibold text-[#09090B] dark:text-white">Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                { provider: "OpenAI", models: "GPT-5.2, GPT-5.1, GPT-4", best: "General tasks, coding, analysis" },
                { provider: "Anthropic", models: "Claude 3.5 Sonnet, Claude 4.5", best: "Long-form writing, reasoning, safety" },
                { provider: "Google", models: "Gemini 2.5 Flash", best: "Fast responses, multimodal tasks" },
                { provider: "xAI", models: "Grok 4.1 Fast Reasoning", best: "Real-time info, fast reasoning" },
                { provider: "DeepSeek", models: "DeepSeek Chat", best: "Technical & coding tasks" },
                { provider: "Perplexity", models: "Sonar Pro", best: "Web search, real-time information" },
              ].map((row, i) => (
                <tr key={row.provider} className={`border-t border-[#E4E4E7] dark:border-[#27272A] text-[#1A1A1A] dark:text-[#A1A1AA] ${i % 2 === 1 ? "bg-[#F9FAFB] dark:bg-[#111111]" : ""}`}>
                  <td className="py-4 px-5 font-medium text-[#09090B] dark:text-white">{row.provider}</td>
                  <td className="py-4 px-5">{row.models}</td>
                  <td className="py-4 px-5">{row.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (activeSection === "uploading-documents") {
    return (
      <div>
        <SectionHeading title="Uploading documents" subtitle="Upload documents and use AI to search, summarize, and chat with your files." />
        <SubHeading>Upload sources</SubHeading>
        <ul className="space-y-5 mb-8">
          {[
            { title: "Local upload", desc: "Drag and drop files or click to browse. Supports PDF, DOCX, TXT, XLSX, CSV, PPTX, images, and videos." },
            { title: "Google Drive", desc: "Connect your Google Drive and browse or select files and folders to import." },
            { title: "OneDrive", desc: "Connect your Microsoft OneDrive account and import files directly." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8"><strong className="text-[#09090B] dark:text-white">{item.title}</strong> — {item.desc}</span>
            </li>
          ))}
        </ul>
        <SubHeading>How to upload</SubHeading>
        <NumberedList items={[
          "Click the upload icon in the sidebar to open Knowledge Sources.",
          "Choose your upload source (Local, Google Drive, or OneDrive).",
          "Select your files. You can upload multiple files at once.",
          "Files are automatically processed — chunked, indexed, and made searchable by the AI.",
          "You can view and manage all uploaded files in the Discover page.",
        ]} />
      </div>
    );
  }

  if (activeSection === "chat-with-documents") {
    return (
      <div>
        <SectionHeading title="Chat with your documents" />
        <Prose>
          Once your documents are uploaded and processed, MetaWurks uses{" "}
          <strong className="text-[#09090B] dark:text-white">RAG (Retrieval-Augmented Generation)</strong>{" "}
          to search through your documents and provide accurate, source-backed answers.
        </Prose>
        <Prose>Simply ask questions about your documents in the chat:</Prose>
        <ul className="space-y-5 mb-6">
          {['"What are the key findings in the Q4 report?"', '"Summarize the contract terms from the uploaded PDF"', '"Find all mentions of revenue projections across my documents"', '"Compare the data in my two spreadsheets"'].map((ex, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8 italic">{ex}</span>
            </li>
          ))}
        </ul>
        <Prose>The AI will search your uploaded documents, find the most relevant sections, and craft an accurate response with citations.</Prose>
      </div>
    );
  }

  if (activeSection === "background-tasks") {
    return (
      <div>
        <SectionHeading title="Background tasks" />
        <Prose>
          For complex, long-running tasks, MetaWurks can run{" "}
          <strong className="text-[#09090B] dark:text-white">background tasks</strong>{" "}
          that work behind the scenes while you continue chatting.
        </Prose>
        <SubHeading>Ideal for</SubHeading>
        <ul className="space-y-5 mb-8">
          {[
            { title: "Research", desc: "Deep web research on a topic, gathering sources and synthesizing findings." },
            { title: "Document creation", desc: "Generating comprehensive reports, proposals, or guides." },
            { title: "Analysis", desc: "Analyzing large datasets or documents that require extended processing." },
            { title: "Multi-step workflows", desc: "Tasks that require multiple steps of research, analysis, and writing." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8"><strong className="text-[#09090B] dark:text-white">{item.title}</strong> — {item.desc}</span>
            </li>
          ))}
        </ul>
        <Prose>When a background task is running, you will see a progress card in the chat with a real-time activity log. Tasks can run for up to 15 minutes, and you can run up to 5 tasks at once.</Prose>
      </div>
    );
  }

  if (activeSection === "integrations-in-chat") {
    return (
      <div>
        <SectionHeading title="Using integrations in chat" />
        <Prose>
          Once you have connected external services (see{" "}
          <button onClick={() => navigate("connections-overview")} className="text-[#1D4ED8] dark:text-[#60A5FA] hover:underline">Connections</button>
          ), you can use them naturally in chat. The AI automatically detects when it needs to use a connected tool.
        </Prose>
        <SubHeading>Example prompts</SubHeading>
        <ul className="space-y-5">
          {['"Check my Gmail for emails from John this week"', '"What meetings do I have tomorrow on Google Calendar?"', '"Post a message to the #general channel in Slack"', '"Show me the latest designs in my Figma project"', '"Summarize my last meeting notes from Fireflies"'].map((ex, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8 italic">{ex}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (activeSection === "exporting") {
    return (
      <div>
        <SectionHeading title="Exporting & downloading" subtitle="Export AI-generated content in multiple professional formats:" />
        <ul className="space-y-5">
          {[
            { title: "PDF", desc: "Professional layout with formatting, headers, and proper typography." },
            { title: "Word (DOCX)", desc: "Editable documents that you can further modify in Microsoft Word or Google Docs." },
            { title: "Excel (XLSX)", desc: "Spreadsheets with structured data, ideal for tables and data analysis results." },
            { title: "PowerPoint (PPTX)", desc: "Presentation slides generated from your content." },
            { title: "CSV", desc: "Simple data export for use in any spreadsheet application." },
            { title: "Plain Text (TXT)", desc: "Raw text export for maximum compatibility." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8"><strong className="text-[#09090B] dark:text-white">{item.title}</strong> — {item.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (activeSection === "sharing") {
    return (
      <div>
        <SectionHeading title="Sharing chats" subtitle="Share any chat conversation with others using a shareable link:" />
        <NumberedList items={[
          'Open the chat you want to share and click the "Share" button.',
          "Choose whether to share the full chat or from a specific message.",
          "A unique share link is generated. Copy it and send it to anyone.",
          "Recipients can view the shared chat in read-only mode — no account required.",
        ]} />
      </div>
    );
  }

  if (activeSection === "plans-and-usage") {
    return (
      <div>
        <SectionHeading title="Plans & usage" />
        <Prose>MetaWurks uses a token-based usage system. Each AI interaction consumes tokens based on the length of your messages and responses.</Prose>
        <ul className="space-y-5">
          {[
            { title: "Free", desc: "Get started with a daily token allowance. Great for trying out the platform." },
            { title: "Basic", desc: "Higher token limits for regular use." },
            { title: "Starter", desc: "Increased limits plus access to all AI models." },
            { title: "Professional", desc: "Generous limits, priority support, and advanced features." },
            { title: "Enterprise", desc: "Custom limits, dedicated support, and team management. Contact sales for details." },
          ].map((plan, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8"><strong className="text-[#09090B] dark:text-white">{plan.title}</strong> — {plan.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (activeSection === "tips") {
    return (
      <div>
        <SectionHeading title="Tips & best practices" />
        <ul className="space-y-5">
          {[
            { title: "Be specific", desc: 'The more context you give the AI, the better the response. Instead of "summarize this", say "summarize the key financial metrics from the Q4 report."' },
            { title: "Use the right model", desc: "Perplexity Sonar Pro is best for real-time web searches. Claude excels at long-form writing. GPT is great for general tasks." },
            { title: "Upload relevant documents first", desc: "If you are going to ask questions about specific data, upload the documents before starting the conversation." },
            { title: "Use background tasks for deep research", desc: "For comprehensive research that requires multiple web searches and synthesis, let a background task handle it." },
            { title: "Connect your tools", desc: "The more services you connect, the more powerful MetaWurks becomes. Connect Gmail, Calendar, and Slack for a unified productivity experience." },
            { title: "Export when you need to", desc: "Use the export feature to save AI-generated reports, analyses, and documents in professional formats for sharing with your team." },
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8"><strong className="text-[#09090B] dark:text-white">{tip.title}</strong> — {tip.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (activeSection === "how-to-use-faq") {
    return (
      <div>
        <SectionHeading title="Frequently Asked Questions" />
        <FaqAccordion faqs={howToUseFaqs} />
      </div>
    );
  }

  // ── Connections sections ─────────────────────────────────────────────────

  if (activeSection === "connections-overview") {
    return (
      <div>
        <SectionHeading title="Connections" subtitle="Connect your cloud storage accounts to MetaWurks for AI-powered file search and analysis." />
        <Prose>
          MetaWurks allows you to connect your{" "}
          <strong className="text-[#09090B] dark:text-white">cloud storage accounts</strong>{" "}
          so you can browse, import, and analyze files directly within the platform. Connect Google Drive or OneDrive to bring your documents into MetaWurks for AI-powered search and analysis.
        </Prose>
        <Prose>Connections are per-user, meaning your connected accounts are private to you. Each connection uses OAuth for secure authentication — MetaWurks never stores your passwords.</Prose>
      </div>
    );
  }

  if (activeSection === "how-connections-work") {
    return (
      <div>
        <SectionHeading title="How connections work" subtitle="When you connect an external service, here is what happens behind the scenes:" />
        <NumberedList items={[
          "You click Connect on a storage service card and are redirected to the provider's login page (Google or Microsoft).",
          "You sign in and grant MetaWurks permission to access your files and folders.",
          "The provider issues an OAuth token, which MetaWurks stores securely. Your password is never shared.",
          "MetaWurks connects to your cloud storage and lets you browse and select files to import.",
          "Imported files are available for AI-powered search, analysis, and chat — just ask questions about your documents naturally.",
        ]} />
      </div>
    );
  }

  if (activeSection === "connecting-a-service") {
    return (
      <div>
        <SectionHeading title="Connecting a service" subtitle="Follow these steps to connect any supported service:" />
        <NumberedList items={[
          'Open the Knowledge Sources panel by clicking the upload icon in the sidebar, then go to the "Integrations" tab.',
          "Find the cloud storage service you want to connect (Google Drive or OneDrive).",
          'Click the service card, then click "Connect" on the detail page.',
          "You will be redirected to the provider's OAuth consent screen. Sign in and approve the requested permissions.",
          "Once approved, you will be redirected back to MetaWurks. The service will show as connected.",
          "You can now browse your cloud storage, import files, and ask the AI to search and analyze your documents.",
        ]} />
      </div>
    );
  }

  if (activeSection === "supported-services") {
    return (
      <div>
        <SectionHeading title="Supported services" subtitle="MetaWurks currently supports the following cloud storage connections:" />
        <div className="space-y-5 mb-8">
          {[
            { name: "Google Drive", desc: "Browse and import files and folders from your Google Drive. Supports documents, spreadsheets, presentations, images, and more." },
            { name: "OneDrive", desc: "Connect your Microsoft OneDrive account to browse, select, and import files directly into MetaWurks." },
          ].map((service) => (
            <div key={service.name} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8"><strong className="text-[#09090B] dark:text-white">{service.name}</strong> — {service.desc}</span>
            </div>
          ))}
        </div>
        <Prose>
          Looking for service integrations like Gmail, Slack, or Figma? See the{" "}
          <button onClick={() => navigate("int-gmail")} className="text-[#1D4ED8] dark:text-[#60A5FA] hover:underline">Integration Guides</button>.
        </Prose>
      </div>
    );
  }

  if (activeSection === "connections-troubleshooting") {
    return (
      <div>
        <SectionHeading title="Troubleshooting" />
        <ul className="space-y-5">
          {[
            { q: 'Connection shows "error" status.', a: "The OAuth token may have expired. Try disconnecting and reconnecting the service. If the issue persists, ensure you approved all required permissions during the OAuth flow." },
            { q: "I connected a service but the AI can't use it.", a: 'Make sure the connection status is "active" in the Integrations tab. If you just connected, try refreshing the page or starting a new chat.' },
            { q: "OAuth redirect fails or shows an error.", a: "Ensure your browser allows pop-ups and redirects from MetaWurks. Some ad blockers or privacy extensions may interfere with the OAuth flow." },
            { q: "I want to connect a service that isn't listed.", a: "Currently MetaWurks supports Google Drive and OneDrive for cloud storage connections. For other service integrations like Gmail, Slack, or Figma, check the Integration Guides. If you need a specific integration, contact us at admin@metawurks.com." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#1A1A1A] dark:text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] mt-[0.55rem] flex-shrink-0" />
              <span className="text-[17px] leading-8"><strong className="text-[#09090B] dark:text-white">{item.q}</strong> {item.a}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (activeSection === "connections-faq") {
    return (
      <div>
        <SectionHeading title="Frequently Asked Questions" />
        <FaqAccordion faqs={connectionsFaqs} />
      </div>
    );
  }

  // ── Integration Guide sections ───────────────────────────────────────────

  const integrationKey = integrationKeyMap[activeSection];
  if (integrationKey) {
    return <IntegrationDetailView docKey={integrationKey} />;
  }

  // ── What MetaWurks Can Do ────────────────────────────────────────────────

  if (activeSection === "what-metawurks-can-do") {
    return (
      <div>
        <SectionHeading
          title="What MetaWurks Can Do"
          subtitle="An AI-powered productivity platform that combines real-time conversations, document intelligence, and seamless integrations."
        />
        <div className="grid sm:grid-cols-2 gap-4">
          {platformCapabilities.map((item) => (
            <div key={item.title} className="p-5 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B]">
              <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] dark:bg-[#1E3A5F] flex items-center justify-center mb-3">
                <item.icon className="w-5 h-5 text-[#1D4ED8] dark:text-[#60A5FA]" />
              </div>
              <h3 className="text-base font-semibold text-[#09090B] dark:text-white mb-2">{item.title}</h3>
              <p className="text-[15px] text-[#3F3F46] dark:text-[#A1A1AA] leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

// ─── Main page component ──────────────────────────────────────────────────────

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("what-is-metawurks");
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({ "how-to-use": true });

  useEffect(() => {
    if (scrollTarget) {
      const el = document.getElementById(`section-${scrollTarget}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setScrollTarget(null);
    }
  }, [scrollTarget]);

  const navigate = (id: string) => {
    setActiveSection(id);
    if (howToUseIds.includes(id) || connectionsIds.includes(id)) {
      setScrollTarget(id);
    }
  };

  const handleGroupClick = (group: typeof sidebarNav[0]) => {
    const isCurrentlyOpen = !!openGroups[group.id];
    setOpenGroups(prev => ({ ...prev, [group.id]: !isCurrentlyOpen }));
    // Navigate when opening a group
    if (!isCurrentlyOpen) {
      if (group.id === "how-to-use") {
        setActiveSection("what-is-metawurks");
        setScrollTarget("what-is-metawurks");
      } else if (group.id === "connections") {
        setActiveSection("connections-overview");
        setScrollTarget("connections-overview");
      } else if (group.items.length > 0) {
        setActiveSection(group.items[0].id);
      } else {
        setActiveSection(group.defaultItem);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B] flex flex-col">
      <Navbar />

      <div className="flex flex-1 pt-20">
        {/* ── Sidebar ─────────────────────────────────────────────────────── */}
        <aside className="w-96 shrink-0 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto hidden lg:block py-8 px-7 border-r border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#09090B]">
          <nav className="space-y-7">
            {sidebarNav.map((group) => (
              <div key={group.id}>
                {/* Group header with chevron */}
                <button
                  onClick={() => handleGroupClick(group)}
                  className="w-full flex items-center justify-between px-3 py-1.5 text-[17px] font-bold text-[#09090B] dark:text-white hover:text-[#1D4ED8] dark:hover:text-[#60A5FA] transition-colors mb-1"
                >
                  <span>{group.label}</span>
                  <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${openGroups[group.id] ? "rotate-180" : ""}`} />
                </button>
                {/* Sub-items — shown only when group is open */}
                {group.items.length > 0 && openGroups[group.id] && (
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => navigate(item.id)}
                          className={`w-full text-left px-3 py-2 text-[15px] rounded-lg transition-colors ${
                            activeSection === item.id
                              ? "bg-[#F3F4F6] dark:bg-[#27272A] text-[#09090B] dark:text-white font-medium"
                              : "text-[#3F3F46] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white hover:bg-[#F9FAFB] dark:hover:bg-[#1C1C1E]"
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* ── Content ──────────────────────────────────────────────────────── */}
        <main className="flex-1 min-w-0 min-h-[calc(100vh-5rem)] py-12 px-10 lg:px-16 xl:px-24">
          <div className="max-w-4xl w-full">
            {renderSection(activeSection, navigate)}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
