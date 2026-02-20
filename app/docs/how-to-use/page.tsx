"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronDown } from "lucide-react";

const sections = [
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
  { id: "faq", label: "FAQ" },
];

const faqs = [
  {
    question: "What file types can I upload to MetaWurks?",
    answer:
      "MetaWurks supports a wide range of file types: documents (PDF, DOCX, TXT, MD, RTF, XML, JSON), spreadsheets (XLSX, CSV), presentations (PPTX), images (PNG, JPG, JPEG, GIF, WEBP, BMP, TIFF, SVG), and videos (MP4, MOV, AVI, WebM, MKV, FLV). The max file size is 50MB for documents/images and 200MB for videos.",
  },
  {
    question: "Can I switch AI models in the middle of a conversation?",
    answer:
      "Yes. You can change the AI model at any time using the model selector dropdown in the chat. The new model will be used for subsequent messages in the same conversation. This lets you leverage different model strengths — for example, start with GPT for analysis, then switch to Perplexity for real-time web research.",
  },
  {
    question: "How many background tasks can I run at the same time?",
    answer:
      "You can run up to 5 background tasks concurrently. Each task can run for up to 15 minutes. If you've reached the limit, you'll need to wait for a running task to complete before starting a new one.",
  },
  {
    question: "What is RAG and how does it work with my documents?",
    answer:
      "RAG (Retrieval-Augmented Generation) is the technology MetaWurks uses to search your uploaded documents. When you ask a question, the AI first searches through your document chunks to find relevant sections, then uses that context to generate an accurate, source-backed answer. This means the AI's responses are grounded in your actual data rather than just general knowledge.",
  },
  {
    question: "Do shared chat links expire?",
    answer:
      "No. Shared chat links do not expire — they remain accessible as long as the chat exists. Recipients can view the shared conversation in read-only mode without needing a MetaWurks account. You can share the entire chat or from a specific message onwards.",
  },
  {
    question: "How does the token-based usage system work?",
    answer:
      "Every interaction with the AI consumes tokens based on the length of your messages and responses. Your plan determines your daily token allowance. Token usage resets daily. You can monitor your current usage from within the app. Upgrading your plan increases your daily token limit.",
  },
  {
    question: "Can I upload files from Google Drive or OneDrive?",
    answer:
      "Yes. MetaWurks supports uploading directly from Google Drive and OneDrive. Connect your cloud storage account from the Knowledge Sources panel, then browse and select files or folders to import. Files are processed the same way as local uploads — chunked, indexed, and made searchable.",
  },
  {
    question: "What happens if I run out of tokens for the day?",
    answer:
      "If you reach your daily token limit, you won't be able to send new messages until your tokens reset the next day. You can upgrade your plan at any time for a higher daily allowance, or wait for the daily reset.",
  },
  {
    question: "Is Perplexity different from the other AI models?",
    answer:
      "Yes. Perplexity Sonar Pro has built-in web search capabilities, meaning it can fetch real-time information from the internet as part of its response. Other models rely on their training data and your uploaded documents. Use Perplexity when you need current information like news, stock prices, or recent events.",
  },
  {
    question: "Can other people edit my shared chats?",
    answer:
      "No. Shared chats are read-only. Recipients can view the conversation but cannot edit messages, add new messages, or access your connected services. Only you can continue the conversation in the original chat.",
  },
];

export default function HowToUsePage() {
  const [activeSection, setActiveSection] = useState("what-is-metawurks");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0D0D0D]">
      {/* Top Header */}
      <header className="sticky top-0 z-50 border-b border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#0D0D0D]">
        <div className="flex h-16 items-center justify-between px-8">
          <div className="flex items-center gap-8">
            <Link href="/docs" className="flex items-center gap-2">
              <Image
                src="/image.png"
                alt="Metawurks"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-semibold text-lg text-[#1A1A1A] dark:text-white">
                Metawurks Docs
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://app.metawurks.com"
              className="text-sm font-medium text-[#666666] dark:text-[#999999] hover:text-[#1A1A1A] dark:hover:text-white transition-colors"
            >
              Back to Metawurks
            </Link>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-80 shrink-0 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto hidden md:block py-8 pl-8 pr-4 border-r border-[#E5E5E5] dark:border-[#2A2A2A]">
          <Link
            href="/docs"
            className="flex items-center gap-1 text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1A1A1A] dark:hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Docs
          </Link>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] dark:text-[#6B7280] mb-3">
            How to Use
          </h3>
          <nav className="space-y-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setActiveSection(section.id)}
                className={`block px-3 py-2.5 text-base font-medium rounded-lg transition-colors ${
                  activeSection === section.id
                    ? "bg-[#DBEAFE] dark:bg-[#1E3A5F] text-[#1D4ED8] dark:text-[#60A5FA] font-semibold"
                    : "text-[#374151] dark:text-[#D1D5DB] hover:text-[#1A1A1A] dark:hover:text-white hover:bg-[#F3F4F6] dark:hover:bg-[#1A1A1A]"
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 py-8 pl-8 pr-10 lg:pl-12 lg:pr-14">
          <div>
            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight text-[#111827] dark:text-white mb-4 leading-tight">
              How to Use MetaWurks
            </h1>
            <p className="text-lg text-[#4B5563] dark:text-[#9CA3AF] mb-10 leading-relaxed">
              A complete guide to getting the most out of MetaWurks — from your
              first chat to advanced features like background tasks, document
              intelligence, and multi-model AI.
            </p>

            {/* What is MetaWurks */}
            <section id="what-is-metawurks" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                What is MetaWurks?
              </h2>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                MetaWurks is an{" "}
                <strong className="text-[#111827] dark:text-white">
                  AI-powered productivity platform
                </strong>{" "}
                that combines real-time AI conversations with document
                intelligence, external service integrations, and background task
                processing.
              </p>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                Think of it as your AI assistant that can:
              </p>
              <ul className="space-y-2">
                {[
                  "Chat with multiple AI models (GPT, Claude, Gemini, Grok, DeepSeek, Perplexity)",
                  "Upload and search through your documents using AI",
                  "Connect to your email, calendar, Slack, Figma, and more",
                  "Run background research tasks and generate professional documents",
                  "Export conversations to PDF, Word, Excel, or PowerPoint",
                  "Share chats with teammates via shareable links",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#374151] dark:text-[#D1D5DB]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Getting Started */}
            <section id="getting-started" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Getting started
              </h2>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                Getting started with MetaWurks takes just a few minutes:
              </p>
              <ol className="space-y-3">
                {[
                  {
                    title: "Create an account",
                    desc: "Visit app.metawurks.com and sign up with your email or Google account. You can also sign in with Microsoft.",
                  },
                  {
                    title: "Choose your plan",
                    desc: "MetaWurks offers a free tier to get started, plus Basic, Starter, Professional, and Enterprise plans with more features and higher usage limits.",
                  },
                  {
                    title: "Start chatting",
                    desc: "Once logged in, you land on the chat page. Type your message and the AI will respond in real time. That's it — you're ready to go!",
                  },
                  {
                    title: "Explore features",
                    desc: "Upload documents, connect integrations, try different AI models, and experiment with background tasks as you get comfortable.",
                  },
                ].map((step, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-[#374151] dark:text-[#D1D5DB]"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#DBEAFE] dark:bg-[#1E3A5F] text-[#1D4ED8] dark:text-[#60A5FA] text-sm font-medium flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed pt-0.5">
                      <strong className="text-[#111827] dark:text-white">
                        {step.title}
                      </strong>{" "}
                      — {step.desc}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Chat Interface */}
            <section id="chat-interface" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                The chat interface
              </h2>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                The chat is the core of MetaWurks. Here is what you will find:
              </p>
              <ul className="space-y-2">
                {[
                  {
                    title: "Sidebar",
                    desc: "Shows your chat history, create new chats, and access settings. You can search through past conversations.",
                  },
                  {
                    title: "Message input",
                    desc: "Type your message at the bottom. You can also attach files directly in the chat.",
                  },
                  {
                    title: "Model selector",
                    desc: "Choose which AI model to use from the dropdown. Different models have different strengths.",
                  },
                  {
                    title: "Streaming responses",
                    desc: "AI responses appear in real time as they are generated, so you don't have to wait for the full response.",
                  },
                  {
                    title: "Message actions",
                    desc: "Hover over any message to edit it, regenerate the AI response, or copy the content.",
                  },
                  {
                    title: "Chat titles",
                    desc: "Chats are automatically titled based on your first message. You can rename them anytime.",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#374151] dark:text-[#D1D5DB]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-[#111827] dark:text-white">
                        {item.title}
                      </strong>{" "}
                      — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* AI Models */}
            <section id="ai-models" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                AI models
              </h2>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                MetaWurks gives you access to multiple AI models from different
                providers. You can switch models at any time using the model
                selector in the chat.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b border-[#E5E5E5] dark:border-[#333333]">
                      <th className="py-3 pr-4 font-semibold text-[#111827] dark:text-white">
                        Provider
                      </th>
                      <th className="py-3 pr-4 font-semibold text-[#111827] dark:text-white">
                        Models
                      </th>
                      <th className="py-3 font-semibold text-[#111827] dark:text-white">
                        Best for
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[#374151] dark:text-[#D1D5DB]">
                    {[
                      {
                        provider: "OpenAI",
                        models: "GPT-5.2, GPT-5.1, GPT-4",
                        best: "General tasks, coding, analysis",
                      },
                      {
                        provider: "Anthropic",
                        models: "Claude 3.5 Sonnet, Claude 4.5",
                        best: "Long-form writing, reasoning, safety",
                      },
                      {
                        provider: "Google",
                        models: "Gemini 2.5 Flash",
                        best: "Fast responses, multimodal tasks",
                      },
                      {
                        provider: "xAI",
                        models: "Grok 4.1 Fast Reasoning",
                        best: "Real-time info, fast reasoning",
                      },
                      {
                        provider: "DeepSeek",
                        models: "DeepSeek Chat",
                        best: "Technical & coding tasks",
                      },
                      {
                        provider: "Perplexity",
                        models: "Sonar Pro",
                        best: "Web search, real-time information",
                      },
                    ].map((row) => (
                      <tr
                        key={row.provider}
                        className="border-b border-[#E5E5E5] dark:border-[#333333]"
                      >
                        <td className="py-3 pr-4 font-medium text-[#111827] dark:text-white">
                          {row.provider}
                        </td>
                        <td className="py-3 pr-4">{row.models}</td>
                        <td className="py-3">{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Uploading Documents */}
            <section id="uploading-documents" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Uploading documents
              </h2>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                MetaWurks lets you upload documents and use AI to search,
                summarize, and chat with your files. You can upload from multiple
                sources:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  {
                    title: "Local upload",
                    desc: "Drag and drop files or click to browse. Supports PDF, DOCX, TXT, XLSX, CSV, PPTX, images (PNG, JPG, GIF, WEBP), and videos (MP4, WebM).",
                  },
                  {
                    title: "Google Drive",
                    desc: "Connect your Google Drive and browse or select files and folders to import.",
                  },
                  {
                    title: "OneDrive",
                    desc: "Connect your Microsoft OneDrive account and import files directly.",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#374151] dark:text-[#D1D5DB]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-[#111827] dark:text-white">
                        {item.title}
                      </strong>{" "}
                      — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                To upload documents:
              </p>
              <ol className="space-y-3">
                {[
                  "Click the upload icon in the sidebar to open Knowledge Sources.",
                  "Choose your upload source (Local, Google Drive, or OneDrive).",
                  "Select your files. You can upload multiple files at once.",
                  "Files are automatically processed — chunked, indexed, and made searchable by the AI.",
                  "You can view and manage all uploaded files in the Discover page.",
                ].map((step, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-[#374151] dark:text-[#D1D5DB]"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#DBEAFE] dark:bg-[#1E3A5F] text-[#1D4ED8] dark:text-[#60A5FA] text-sm font-medium flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Chat with Documents */}
            <section id="chat-with-documents" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Chat with your documents
              </h2>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                Once your documents are uploaded and processed, MetaWurks uses{" "}
                <strong className="text-[#111827] dark:text-white">
                  RAG (Retrieval-Augmented Generation)
                </strong>{" "}
                to search through your documents and provide accurate,
                source-backed answers.
              </p>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                Simply ask questions about your documents in the chat:
              </p>
              <ul className="space-y-2">
                {[
                  '"What are the key findings in the Q4 report?"',
                  '"Summarize the contract terms from the uploaded PDF"',
                  '"Find all mentions of revenue projections across my documents"',
                  '"Compare the data in my two spreadsheets"',
                ].map((example, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#374151] dark:text-[#D1D5DB]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                    <span className="italic">{example}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mt-4">
                The AI will search your uploaded documents, find the most
                relevant sections, and use them to craft an accurate response
                with citations.
              </p>
            </section>

            {/* Background Tasks */}
            <section id="background-tasks" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Background tasks
              </h2>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                For complex, long-running tasks, MetaWurks can run{" "}
                <strong className="text-[#111827] dark:text-white">
                  background tasks
                </strong>{" "}
                that work behind the scenes while you continue chatting.
              </p>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                Background tasks are ideal for:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  {
                    title: "Research",
                    desc: "Deep web research on a topic, gathering sources and synthesizing findings.",
                  },
                  {
                    title: "Document creation",
                    desc: "Generating comprehensive reports, proposals, or guides.",
                  },
                  {
                    title: "Analysis",
                    desc: "Analyzing large datasets or documents that require extended processing.",
                  },
                  {
                    title: "Multi-step workflows",
                    desc: "Tasks that require multiple steps of research, analysis, and writing.",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#374151] dark:text-[#D1D5DB]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-[#111827] dark:text-white">
                        {item.title}
                      </strong>{" "}
                      — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                When a background task is running, you will see a progress card
                in the chat with a real-time activity log. Tasks can run for up
                to 15 minutes, and you can run up to 5 tasks at once. Results
                are automatically injected into the conversation when complete.
              </p>
            </section>

            {/* Integrations in Chat */}
            <section
              id="integrations-in-chat"
              className="mb-12 scroll-mt-24"
            >
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Using integrations in chat
              </h2>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                Once you have connected external services (see{" "}
                <Link
                  href="/docs/connections"
                  className="text-[#1D4ED8] dark:text-[#60A5FA] hover:underline"
                >
                  Connections
                </Link>
                ), you can use them naturally in chat. The AI automatically
                detects when it needs to use a connected tool.
              </p>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                Examples:
              </p>
              <ul className="space-y-2">
                {[
                  '"Check my Gmail for emails from John this week"',
                  '"What meetings do I have tomorrow on Google Calendar?"',
                  '"Post a message to the #general channel in Slack"',
                  '"Show me the latest designs in my Figma project"',
                  '"Summarize my last meeting notes from Fireflies"',
                ].map((example, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#374151] dark:text-[#D1D5DB]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                    <span className="italic">{example}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mt-4">
                When the AI uses a tool, you will see a step indicator showing
                which action is being performed. The results are incorporated
                into the AI&#39;s response.
              </p>
            </section>

            {/* Exporting */}
            <section id="exporting" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Exporting & downloading
              </h2>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                MetaWurks lets you export AI-generated content in multiple
                professional formats:
              </p>
              <ul className="space-y-2">
                {[
                  {
                    title: "PDF",
                    desc: "Professional layout with formatting, headers, and proper typography.",
                  },
                  {
                    title: "Word (DOCX)",
                    desc: "Editable documents that you can further modify in Microsoft Word or Google Docs.",
                  },
                  {
                    title: "Excel (XLSX)",
                    desc: "Spreadsheets with structured data, ideal for tables and data analysis results.",
                  },
                  {
                    title: "PowerPoint (PPTX)",
                    desc: "Presentation slides generated from your content.",
                  },
                  {
                    title: "CSV",
                    desc: "Simple data export for use in any spreadsheet application.",
                  },
                  {
                    title: "Plain Text (TXT)",
                    desc: "Raw text export for maximum compatibility.",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#374151] dark:text-[#D1D5DB]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-[#111827] dark:text-white">
                        {item.title}
                      </strong>{" "}
                      — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Sharing */}
            <section id="sharing" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Sharing chats
              </h2>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                You can share any chat conversation with others using a
                shareable link:
              </p>
              <ol className="space-y-3">
                {[
                  'Open the chat you want to share and click the "Share" button.',
                  "Choose whether to share the full chat or from a specific message.",
                  "A unique share link is generated. Copy it and send it to anyone.",
                  "Recipients can view the shared chat in read-only mode — no account required.",
                ].map((step, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-[#374151] dark:text-[#D1D5DB]"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#DBEAFE] dark:bg-[#1E3A5F] text-[#1D4ED8] dark:text-[#60A5FA] text-sm font-medium flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Plans & Usage */}
            <section id="plans-and-usage" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Plans & usage
              </h2>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                MetaWurks uses a token-based usage system. Each AI interaction
                consumes tokens based on the length of your messages and
                responses.
              </p>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                Available plans:
              </p>
              <ul className="space-y-2">
                {[
                  {
                    title: "Free",
                    desc: "Get started with a daily token allowance. Great for trying out the platform.",
                  },
                  {
                    title: "Basic",
                    desc: "Higher token limits for regular use.",
                  },
                  {
                    title: "Starter",
                    desc: "Increased limits plus access to all AI models.",
                  },
                  {
                    title: "Professional",
                    desc: "Generous limits, priority support, and advanced features.",
                  },
                  {
                    title: "Enterprise",
                    desc: "Custom limits, dedicated support, and team management. Contact sales for details.",
                  },
                ].map((plan, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#374151] dark:text-[#D1D5DB]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-[#111827] dark:text-white">
                        {plan.title}
                      </strong>{" "}
                      — {plan.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mt-4">
                You can view your current usage and plan details in the{" "}
                <Link
                  href="https://metawurks.com/pricing"
                  className="text-[#1D4ED8] dark:text-[#60A5FA] hover:underline"
                >
                  Pricing page
                </Link>
                . Both monthly and annual billing are available.
              </p>
            </section>

            {/* Tips */}
            <section id="tips" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Tips & best practices
              </h2>
              <ul className="space-y-2">
                {[
                  {
                    title: "Be specific",
                    desc: "The more context you give the AI, the better the response. Instead of \"summarize this\", say \"summarize the key financial metrics from the Q4 report.\"",
                  },
                  {
                    title: "Use the right model",
                    desc: "Perplexity Sonar Pro is best for real-time web searches. Claude excels at long-form writing. GPT is great for general tasks.",
                  },
                  {
                    title: "Upload relevant documents first",
                    desc: "If you are going to ask questions about specific data, upload the documents before starting the conversation.",
                  },
                  {
                    title: "Use background tasks for deep research",
                    desc: "For comprehensive research that requires multiple web searches and synthesis, let a background task handle it.",
                  },
                  {
                    title: "Connect your tools",
                    desc: "The more services you connect, the more powerful MetaWurks becomes. Connect Gmail, Calendar, and Slack for a unified productivity experience.",
                  },
                  {
                    title: "Export when you need to",
                    desc: "Use the export feature to save AI-generated reports, analyses, and documents in professional formats for sharing with your team.",
                  },
                ].map((tip, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#374151] dark:text-[#D1D5DB]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-[#111827] dark:text-white">
                        {tip.title}
                      </strong>{" "}
                      — {tip.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((item, index) => (
                  <div
                    key={index}
                    className="border border-[#E5E5E5] dark:border-[#333333] rounded-lg overflow-hidden bg-white dark:bg-[#1A1A1A]"
                  >
                    <button
                      onClick={() =>
                        setOpenFaqIndex(openFaqIndex === index ? null : index)
                      }
                      className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-[#F3F4F6] dark:hover:bg-[#222222] transition-colors"
                    >
                      <span className="font-medium text-[#111827] dark:text-white">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#6B7280] dark:text-[#9CA3AF] flex-shrink-0 transition-transform duration-200 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        openFaqIndex === index ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="px-4 py-3 text-[#374151] dark:text-[#D1D5DB] border-t border-[#E5E5E5] dark:border-[#333333] bg-[#F9FAFB] dark:bg-[#0D0D0D]">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

      </div>
    </div>
  );
}
