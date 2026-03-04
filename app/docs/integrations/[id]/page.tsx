"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { notFound } from "next/navigation";
import { useState } from "react";
import { integrationDocs, integrationsList } from "@/lib/integration-docs";
import { ChevronDown } from "lucide-react";

export default function IntegrationDocsPage({ params }: { params: { id: string } }) {
  const pathname = usePathname();
  const doc = integrationDocs[params.id];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!doc) {
    notFound();
  }

  // Dynamic table of contents - includes FAQ only if it exists
  const tableOfContents = [
    { id: "what-it-does", label: "What this connector does" },
    { id: "how-to-connect", label: "How to connect" },
    ...(doc.customConnector ? [{ id: "custom-connector", label: "Custom connector" }] : []),
    { id: "permissions", label: "Permissions required" },
    { id: "supported-actions", label: "Supported actions" },
    { id: "example-use-cases", label: "Example use cases" },
    { id: "using-safely", label: "Using it safely" },
    { id: "troubleshooting", label: "Setup and troubleshooting" },
    ...(doc.faq && doc.faq.length > 0 ? [{ id: "faq", label: "Frequently Asked Questions" }] : []),
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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
              <span className="font-semibold text-lg text-[#1A1A1A] dark:text-white">Metawurks Docs</span>
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
        <aside className="w-72 shrink-0 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto hidden md:block py-8 pl-8 pr-4 border-r border-[#E5E5E5] dark:border-[#2A2A2A]">
          <nav className="space-y-1">
            {integrationsList.map((integration) => (
              <Link
                key={integration.id}
                href={`/docs/integrations/${integration.id}`}
                className={`block px-3 py-2.5 text-base font-medium rounded-lg transition-colors ${
                  pathname === `/docs/integrations/${integration.id}`
                    ? "bg-[#DBEAFE] dark:bg-[#1E3A5F] text-[#1D4ED8] dark:text-[#60A5FA] font-semibold"
                    : "text-[#374151] dark:text-[#D1D5DB] hover:text-[#1A1A1A] dark:hover:text-white hover:bg-[#F3F4F6] dark:hover:bg-[#1A1A1A]"
                }`}
              >
                {integration.name}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 py-8 px-8">
          <div className="max-w-3xl">
            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight text-[#111827] dark:text-white mb-4 leading-tight">
              {doc.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-[#4B5563] dark:text-[#9CA3AF] mb-10 leading-relaxed">
              {doc.subtitle}
            </p>

            {/* What it does */}
            <section id="what-it-does" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                What the {doc.title.replace(" integration", "")} connector does
              </h2>
              <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                {doc.whatItDoes}
              </p>
            </section>

            {/* How to connect */}
            <section id="how-to-connect" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                How to connect
              </h2>
              <ol className="space-y-3">
                {doc.howToConnect.map((step, index) => (
                  <li key={index} className="flex gap-3 text-[#374151] dark:text-[#D1D5DB]">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#DBEAFE] dark:bg-[#1E3A5F] text-[#1D4ED8] dark:text-[#60A5FA] text-sm font-medium flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed pt-0.5">
                      {step.includes("Knowledge Sources") || step.includes("card") || step.includes("Connect") || step.includes("Integrations") ? (
                        <span dangerouslySetInnerHTML={{
                          __html: step
                            .replace(/Knowledge Sources/g, '<strong class="text-[#111827] dark:text-white">Knowledge Sources</strong>')
                            .replace(/Integrations/g, '<strong class="text-[#111827] dark:text-white">Integrations</strong>')
                            .replace(/Connect(?!ion)/g, '<strong class="text-[#111827] dark:text-white">Connect</strong>')
                            .replace(new RegExp(`${doc.title.replace(" integration", "")} card`, "g"), `<strong class="text-[#111827] dark:text-white">${doc.title.replace(" integration", "")} card</strong>`)
                        }} />
                      ) : step}
                    </span>
                  </li>
                ))}
              </ol>
              {/* Custom Connector Note */}
              {doc.customConnector && (
                <div id="custom-connector" className="mt-6 scroll-mt-24">
                  <h3 className="text-base font-bold text-[#111827] dark:text-white mb-2">
                    Need a custom connector?
                  </h3>
                  <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                    {doc.customConnector}
                  </p>
                </div>
              )}
            </section>

            {/* Permissions */}
            <section id="permissions" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Permissions required
              </h2>
              <p className="text-[#374151] dark:text-[#D1D5DB] mb-4">When you connect, you will be asked for permission to:</p>
              <ul className="space-y-2">
                {doc.permissions.map((permission, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#374151] dark:text-[#D1D5DB]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                    <span>{permission}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Supported actions */}
            <section id="supported-actions" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Supported actions
              </h2>
              <ul className="space-y-2">
                {doc.supportedActions.map((action, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#374151] dark:text-[#D1D5DB]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Example use cases */}
            <section id="example-use-cases" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Example use cases
              </h2>
              <ul className="space-y-2">
                {doc.exampleUseCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#374151] dark:text-[#D1D5DB]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Using safely */}
            <section id="using-safely" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Using it safely
              </h2>
              <ul className="space-y-2">
                {doc.usingSafely.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#374151] dark:text-[#D1D5DB]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                Setup and troubleshooting
              </h2>
              <ul className="space-y-3">
                {doc.troubleshooting.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#374151] dark:text-[#D1D5DB]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-[#111827] dark:text-white">{item.question}</strong>{" "}
                      {item.answer}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ Section - Only renders if faq exists and has items */}
            {doc.faq && doc.faq.length > 0 && (
              <section id="faq" className="mb-12 scroll-mt-24">
                <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {doc.faq.map((item, index) => (
                    <div
                      key={index}
                      className="border border-[#E5E5E5] dark:border-[#333333] rounded-lg overflow-hidden bg-white dark:bg-[#1A1A1A]"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-[#F3F4F6] dark:hover:bg-[#222222] transition-colors"
                      >
                        <span className="font-medium text-[#111827] dark:text-white">{item.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#6B7280] dark:text-[#9CA3AF] transition-transform duration-200 ${
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
            )}
          </div>
        </main>

        {/* Right Sidebar - Table of Contents */}
        <aside className="w-72 shrink-0 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto hidden lg:block py-8 px-6 border-l border-[#E5E5E5] dark:border-[#2A2A2A]">
          <div className="mb-4">
            <span className="text-lg font-bold text-[#111827] dark:text-white">On this page</span>
          </div>
          <nav className="space-y-1 border-l border-[#E5E5E5] dark:border-[#333333]">
            {tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block pl-4 py-2 text-base font-medium text-[#374151] dark:text-[#D1D5DB] hover:text-[#1D4ED8] dark:hover:text-[#60A5FA] border-l-2 border-transparent hover:border-[#3B82F6] -ml-px transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </div>
  );
}
