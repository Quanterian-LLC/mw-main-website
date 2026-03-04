"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronDown } from "lucide-react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "how-connections-work", label: "How connections work" },
  { id: "connecting-a-service", label: "Connecting a service" },
  { id: "supported-services", label: "Supported services" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "faq", label: "FAQ" },
];

const faqs = [
  {
    question: "Does MetaWurks store my passwords for connected services?",
    answer:
      "No. MetaWurks uses OAuth for all connections. When you connect a service like Google Drive or OneDrive, you sign in directly with that provider. MetaWurks only stores the OAuth access token — never your password.",
  },
  {
    question: "What happens to my data when I disconnect a service?",
    answer:
      "When you disconnect a service, MetaWurks immediately deletes the stored OAuth tokens. The AI will no longer be able to access that service. Any data previously fetched during chat conversations remains in those chat histories, but no new data can be retrieved.",
  },
  {
    question: "Why does my connection show an error status?",
    answer:
      "This usually means the OAuth token has expired or been revoked. Try disconnecting the service and reconnecting it. If the issue persists, make sure you approved all the required permissions during the OAuth consent screen.",
  },
  {
    question: "Do connected services use my token quota?",
    answer:
      "Yes. When the AI processes files imported from a connected service (e.g., analyzing a document from Google Drive), the tokens used for the AI's request and response count toward your plan's token limit. The actual file transfer does not count.",
  },
  {
    question: "Can I use connected services in background tasks?",
    answer:
      "Yes. Background tasks have access to all your connected services. For example, you can run a background research task that analyzes documents imported from your Google Drive or OneDrive.",
  },
  {
    question: "Are my connected service interactions private?",
    answer:
      "Yes. Connections are per-user — only you can access your connected accounts. Other users cannot see or use your connections, even if you share a chat. Shared chats show the AI's responses but do not expose your connected service credentials.",
  },
];

const supportedServices = [
  {
    name: "Google Drive",
    description: "Browse and import files and folders from your Google Drive. Supports documents, spreadsheets, presentations, images, and more.",
  },
  {
    name: "OneDrive",
    description: "Connect your Microsoft OneDrive account to browse, select, and import files directly into MetaWurks.",
  },
];

export default function ConnectionsPage() {
  const [activeSection, setActiveSection] = useState("overview");
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
            Connections
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
              Connections
            </h1>
            <p className="text-lg text-[#4B5563] dark:text-[#9CA3AF] mb-10 leading-relaxed">
              Connect your cloud storage accounts to MetaWurks so you can
              import documents, browse files, and use AI to search and analyze
              your data — all from within the chat.
            </p>

            {/* Overview */}
            <section id="overview" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Overview
              </h2>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                MetaWurks allows you to connect your{" "}
                <strong className="text-[#111827] dark:text-white">
                  cloud storage accounts
                </strong>{" "}
                so you can browse, import, and analyze files directly within the
                platform. Connect Google Drive or OneDrive to bring your
                documents into MetaWurks for AI-powered search and analysis.
              </p>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                Connections are per-user, meaning your connected accounts are
                private to you. Each connection uses OAuth for secure
                authentication — MetaWurks never stores your passwords.
              </p>
            </section>

            {/* How Connections Work */}
            <section id="how-connections-work" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                How connections work
              </h2>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                When you connect an external service, here is what happens
                behind the scenes:
              </p>
              <ol className="space-y-3">
                {[
                  "You click Connect on a storage service card and are redirected to the provider's login page (Google or Microsoft).",
                  "You sign in and grant MetaWurks permission to access your files and folders.",
                  "The provider issues an OAuth token, which MetaWurks stores securely. Your password is never shared.",
                  "MetaWurks connects to your cloud storage and lets you browse and select files to import.",
                  "Imported files are available for AI-powered search, analysis, and chat — just ask questions about your documents naturally.",
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

            {/* Connecting a Service */}
            <section id="connecting-a-service" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Connecting a service
              </h2>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                Follow these steps to connect any supported service:
              </p>
              <ol className="space-y-3">
                {[
                  'Open the Knowledge Sources panel by clicking the upload icon in the sidebar, then go to the "Integrations" tab.',
                  "Find the cloud storage service you want to connect (Google Drive or OneDrive).",
                  'Click the service card, then click "Connect" on the detail page.',
                  "You will be redirected to the provider's OAuth consent screen. Sign in and approve the requested permissions.",
                  "Once approved, you will be redirected back to MetaWurks. The service will show as connected.",
                  "You can now browse your cloud storage, import files, and ask the AI to search and analyze your documents.",
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

            {/* Supported Services */}
            <section id="supported-services" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Supported services
              </h2>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mb-4">
                MetaWurks currently supports the following cloud storage connections:
              </p>
              <div className="space-y-3">
                {supportedServices.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-start gap-3 text-[#374151] dark:text-[#D1D5DB]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-[#111827] dark:text-white">
                        {service.name}
                      </strong>{" "}
                      — {service.description}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed mt-4">
                Looking for service integrations like Gmail, Slack, or Figma? See the{" "}
                <Link
                  href="/docs/integrations"
                  className="text-[#1D4ED8] dark:text-[#60A5FA] hover:underline"
                >
                  Integration Guides
                </Link>
                .
              </p>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Troubleshooting
              </h2>
              <ul className="space-y-3">
                {[
                  {
                    question: "Connection shows \"error\" status.",
                    answer:
                      "The OAuth token may have expired. Try disconnecting and reconnecting the service. If the issue persists, ensure you approved all required permissions during the OAuth flow.",
                  },
                  {
                    question: "I connected a service but the AI can't use it.",
                    answer:
                      "Make sure the connection status is \"active\" in the Integrations tab. If you just connected, try refreshing the page or starting a new chat.",
                  },
                  {
                    question: "OAuth redirect fails or shows an error.",
                    answer:
                      "Ensure your browser allows pop-ups and redirects from MetaWurks. Some ad blockers or privacy extensions may interfere with the OAuth flow.",
                  },
                  {
                    question: "I want to connect a service that isn't listed.",
                    answer:
                      "Currently MetaWurks supports Google Drive and OneDrive for cloud storage connections. For other service integrations like Gmail, Slack, or Figma, check the Integration Guides. If you need a specific integration, contact us at admin@metawurks.com.",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#374151] dark:text-[#D1D5DB]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-[#111827] dark:text-white">
                        {item.question}
                      </strong>{" "}
                      {item.answer}
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
