import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Cable,
  BookOpen,
  Rocket,
  ArrowRight,
  MessageSquare,
  Upload,
  Zap,
  FileDown,
  Share2,
  Shield,
} from "lucide-react";

export default function DocsPage() {
  const sections = [
    {
      id: "connections",
      name: "Connections",
      description:
        "Learn how to connect your favorite tools and services to MetaWurks. Set up OAuth, manage multiple accounts, and configure integrations.",
      icon: Cable,
      gradient: "from-emerald-500 to-teal-600",
      href: "/docs/connections",
      features: [
        "Connect external services via OAuth",
        "Multi-account support (up to 5 per service)",
        "Manage and disconnect services",
        "Custom MCP server setup",
      ],
    },
    {
      id: "integrations",
      name: "Integration Guides",
      description:
        "Detailed guides for each supported integration — Gmail, Slack, Figma, Teams, and more. Learn what each connector does and how to use it.",
      icon: BookOpen,
      gradient: "from-blue-500 to-indigo-600",
      href: "/docs/integrations",
      features: [
        "Step-by-step setup for each service",
        "Supported actions & permissions",
        "Example use cases",
        "Troubleshooting tips",
      ],
    },
    {
      id: "how-to-use",
      name: "How to Use the Product",
      description:
        "A complete guide to using MetaWurks — from your first chat to advanced features like background tasks, document uploads, and AI model selection.",
      icon: Rocket,
      gradient: "from-violet-500 to-purple-600",
      href: "/docs/how-to-use",
      features: [
        "Getting started & chat basics",
        "Upload documents & search with AI",
        "Background tasks & research",
        "Export, share & collaborate",
      ],
    },
  ];

  const highlights = [
    {
      icon: MessageSquare,
      title: "Multi-Model AI Chat",
      description:
        "Chat with GPT, Claude, Gemini, Grok, DeepSeek, and Perplexity — switch models anytime.",
    },
    {
      icon: Upload,
      title: "Document Intelligence",
      description:
        "Upload PDFs, Word docs, spreadsheets, images, and videos. Ask questions and get source-backed answers.",
    },
    {
      icon: Zap,
      title: "Background Tasks",
      description:
        "Run up to 5 concurrent research tasks that work behind the scenes for up to 15 minutes each.",
    },
    {
      icon: FileDown,
      title: "Professional Exports",
      description:
        "Export AI-generated content to PDF, Word, Excel, PowerPoint, CSV, or plain text.",
    },
    {
      icon: Share2,
      title: "Chat Sharing",
      description:
        "Share conversations via secure links. Recipients get read-only access — no account needed.",
    },
    {
      icon: Shield,
      title: "Secure Connections",
      description:
        "OAuth-based integrations with Gmail, Slack, Figma, Teams, and more. Your passwords are never stored.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, hsl(270, 80%, 60%, 0.3), transparent 60%)",
            filter: "blur(100px)",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium text-ai-violet mb-4">
              DOCUMENTATION
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
              MetaWurks{" "}
              <span className="gradient-warm-text">Documentation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to get started with MetaWurks. Learn how to
              connect your tools, explore integrations, and master the platform.
            </p>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={section.href}
                className="group relative p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 hover:scale-[1.02] transition-all duration-500 flex flex-col"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none`}
                />

                <div className="relative z-10 flex items-start gap-4 mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <section.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-semibold tracking-tight">
                      {section.name}
                    </h3>
                  </div>
                </div>

                <p className="relative z-10 text-muted-foreground font-body font-normal leading-relaxed mb-5">
                  {section.description}
                </p>

                <div className="relative z-10 mb-6 flex-1">
                  <ul className="space-y-2">
                    {section.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${section.gradient}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <span className="relative z-10 inline-flex items-center gap-2 text-sm font-medium text-ai-violet group-hover:text-ai-violet/80 transition-colors mt-auto">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Highlights */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              What MetaWurks Can Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              An AI-powered productivity platform that combines real-time
              conversations, document intelligence, and seamless integrations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl backdrop-blur-xl bg-card/40 border border-border/30"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-ai-violet" />
                </div>
                <h3 className="text-base font-display font-semibold tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported AI Models */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="p-8 md:p-10 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50">
            <h2 className="text-2xl font-display font-bold tracking-tight mb-6 text-center">
              Supported AI Models
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  provider: "OpenAI",
                  models: "GPT-5.2, GPT-5.1, GPT-4",
                  desc: "General tasks, coding, analysis",
                },
                {
                  provider: "Anthropic",
                  models: "Claude 3.5 Sonnet, Claude 4.5",
                  desc: "Long-form writing, reasoning",
                },
                {
                  provider: "Google",
                  models: "Gemini 2.5 Flash",
                  desc: "Fast responses, multimodal",
                },
                {
                  provider: "xAI",
                  models: "Grok 4.1 Fast Reasoning",
                  desc: "Real-time info, fast reasoning",
                },
                {
                  provider: "DeepSeek",
                  models: "DeepSeek Chat",
                  desc: "Technical & coding tasks",
                },
                {
                  provider: "Perplexity",
                  models: "Sonar Pro",
                  desc: "Web search, live information",
                },
              ].map((item) => (
                <div
                  key={item.provider}
                  className="p-4 rounded-xl bg-secondary/50 border border-border/30"
                >
                  <p className="font-semibold text-sm mb-1">{item.provider}</p>
                  <p className="text-sm text-muted-foreground">{item.models}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Sign up for MetaWurks and start chatting with AI in minutes.
                  Connect your tools, upload documents, and unlock powerful
                  insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://app.metawurks.com"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-ai-violet to-ai-blue text-white font-semibold hover:opacity-90 transition-opacity"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary text-foreground font-semibold hover:bg-secondary/80 transition-colors"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
