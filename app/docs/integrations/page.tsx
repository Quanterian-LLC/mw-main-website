import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Mail, Calendar, MessageSquare, Users, Figma, Linkedin, Mic, ArrowRight } from "lucide-react";

export default function IntegrationsPage() {
  const integrations = [
    {
      id: "gmail",
      name: "Gmail",
      description: "Connect your Gmail account to search emails, draft responses, and manage your inbox with AI assistance.",
      icon: Mail,
      gradient: "from-red-500 to-red-600",
      features: ["Search emails by content or sender", "Draft and send emails", "Summarize email threads", "Find attachments"],
    },
    {
      id: "google-calendar",
      name: "Google Calendar",
      description: "Integrate Google Calendar to manage events, check availability, and schedule meetings seamlessly.",
      icon: Calendar,
      gradient: "from-blue-500 to-blue-600",
      features: ["View upcoming events", "Create and update events", "Check availability", "Set reminders"],
    },
    {
      id: "outlook",
      name: "Outlook",
      description: "Connect Microsoft Outlook for email management and calendar integration within your workflow.",
      icon: Mail,
      gradient: "from-blue-600 to-blue-700",
      features: ["Access Outlook emails", "Manage calendar events", "Search contacts", "Draft messages"],
    },
    {
      id: "teams",
      name: "Microsoft Teams",
      description: "Integrate Microsoft Teams to access conversations, channels, and collaborate with your team.",
      icon: Users,
      gradient: "from-indigo-500 to-purple-600",
      features: ["Access team channels", "Search conversations", "Send messages", "View team members"],
    },
    {
      id: "slack",
      name: "Slack",
      description: "Connect Slack to search messages, manage channels, and stay updated with your team communications.",
      icon: MessageSquare,
      gradient: "from-purple-500 to-pink-500",
      features: ["Search messages", "Access channels", "Send messages", "View user profiles"],
    },
    {
      id: "figma",
      name: "Figma",
      description: "Integrate Figma to access your design files, projects, and collaborate on design workflows.",
      icon: Figma,
      gradient: "from-pink-500 to-orange-500",
      features: ["Access design files", "View project details", "Browse team files", "Get file versions"],
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      description: "Connect LinkedIn to access your professional network, profile information, and connections.",
      icon: Linkedin,
      gradient: "from-blue-700 to-blue-800",
      features: ["View profile info", "Access connections", "Search network", "View company pages"],
    },
    {
      id: "fireflies",
      name: "Fireflies.ai",
      description: "Integrate Fireflies to access meeting transcripts, summaries, and AI-powered meeting notes.",
      icon: Mic,
      gradient: "from-violet-500 to-purple-600",
      features: ["Access transcripts", "Search meeting notes", "Get meeting summaries", "Find action items"],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(270, 80%, 60%, 0.3), transparent 60%)",
            filter: "blur(100px)",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium text-ai-violet mb-4">DOCUMENTATION</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
              Integration{" "}
              <span className="gradient-warm-text">Guides</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect your favorite tools and services to MetaWurks. Access your data, automate workflows, and get AI-powered insights across all your platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration) => (
              <div
                key={integration.id}
                className="group relative p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 hover:scale-[1.02] transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${integration.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none`}
                />

                <div className="relative z-10 flex items-start gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${integration.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <integration.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold tracking-tight">{integration.name}</h3>
                  </div>
                </div>

                <p className="relative z-10 text-muted-foreground font-body font-normal leading-relaxed mb-6">
                  {integration.description}
                </p>

                <div className="relative z-10 mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-foreground/80">Key Features:</h4>
                  <ul className="space-y-2">
                    {integration.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${integration.gradient}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/docs/integrations/${integration.id}`}
                  className="relative z-10 inline-flex items-center gap-2 text-sm font-medium text-ai-violet hover:text-ai-violet/80 transition-colors"
                >
                  View Guide
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Sign up for MetaWurks and connect your first integration in minutes. No technical setup required.
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
