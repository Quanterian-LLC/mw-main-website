import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      id: "creating-powerpoint-presentations-metawurks",
      title: "How to Create Professional PowerPoint Presentations in Minutes with MetaWurks",
      excerpt: "Creating a polished PowerPoint on a complex topic usually takes hours—researching, outlining, designing slides, and refining the narrative until it's presentation-ready. With MetaWurks, you can go from a blank page to a fully downloadable PPT file in minutes by prompting the platform to handle the heavy lifting.",
      date: "12 January, 2026",
      readTime: "8 min read",
      category: "Productivity",
      gradient: "from-ai-violet to-ai-peach",
    },
    {
      id: "real-world-use-cases-metawurks-industries",
      title: "Real-World Use Cases for MetaWurks Across Industries — From Legal to HR to Finance",
      excerpt: "Every organization is different — but many share common pain points: overflowing documents, repetitive manual tasks, slow approvals, and inefficient workflows. That's why a flexible AI automation platform like MetaWurks can deliver value across industries. Here are a few real-world use cases.",
      date: "6 January, 2026",
      readTime: "7 min read",
      category: "Use Cases",
      gradient: "from-ai-mint to-ai-blue",
    },
    {
      id: "metawurks-redefining-ai-collaboration",
      title: "MetaWurks — Redefining AI Collaboration for the Modern Enterprise",
      excerpt: "In today's digital-first world, teams manage huge amounts of scattered documents. The challenge isn't storage—it's turning that data into insights. MetaWurks, a next-gen AI agent platform, solves this by converting unstructured information into clear, actionable intelligence.",
      date: "10 December, 2025",
      readTime: "6 min read",
      category: "Enterprise",
      gradient: "from-ai-blue to-ai-cyan",
    },
    {
      id: "shaping-future-ai-workflows",
      title: "How MetaWurks is Shaping the Future of AI-Driven Workflows?",
      excerpt: "Artificial Intelligence is rapidly transforming how companies operate, yet many teams still struggle to apply AI in practical, everyday ways. MetaWurks changes this by embedding intelligence directly into business workflows—turning scattered information into clear, actionable insights.",
      date: "20 November, 2025",
      readTime: "7 min read",
      category: "Technology",
      gradient: "from-ai-violet to-ai-peach",
    },
    {
      id: "ai-agents-transforming-productivity",
      title: "How AI Agents Are Transforming Business Productivity-Meet MetaWurks",
      excerpt: "MetaWurks boosts smart productivity with AI agents that act like tireless digital co-workers, instantly processing documents and data. Its platform enables secure, scalable team collaboration with encryption, SSO, role-based access, and full audit logging for enterprises.",
      date: "5 November, 2025",
      readTime: "5 min read",
      category: "Productivity",
      gradient: "from-ai-cyan to-ai-mint",
    },
    {
      id: "multi-llm-systems-future",
      title: "Why Multi-LLM Systems Are the Future of Automation-And How MetaWurks Leads the Way",
      excerpt: "Generative AI evolves quickly, with models excelling in different areas. MetaWurks enables powerful flexibility by supporting multiple LLMs simultaneously, letting teams leverage the best model for every task.",
      date: "1 November, 2025",
      readTime: "8 min read",
      category: "AI",
      gradient: "from-ai-peach to-ai-violet",
    },
    {
      id: "drive-connectivity-document-uploads",
      title: "The Power of Drive Connectivity & Document Uploads in AI Workflows: Why MetaWurks Excels",
      excerpt: "With remote teams, enterprises need more than AI chat— they need cloud integration, document support, uploads, and smart workflows. MetaWurks delivers advanced, document-aware automation.",
      date: "15 October, 2025",
      readTime: "6 min read",
      category: "Workflows",
      gradient: "from-ai-blue to-ai-violet",
    },
    {
      id: "custom-trained-private-llms",
      title: "Custom Trained Private LLMs: Benefits of Domain-Specific Accuracy",
      excerpt: "The enterprises winning with AI in 2025 share one trait: they stopped renting generic intelligence and started building their own. Custom-trained private LLMs are rapidly moving from luxury to competitive necessity—and for good reason. While general-purpose models like GPT-4 or Gemini handle broad tasks adequately, they lack the domain-specific precision that complex industries demand. A private LLM trained on your proprietary data delivers sharper accuracy, fewer hallucinations, and outputs that actually reflect your business context.",
      date: "9 June, 2026",
      readTime: "10 min read",
      category: "AI",
      gradient: "from-ai-cyan to-ai-violet",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(270, 80%, 60%, 0.3), transparent 60%)",
            filter: "blur(100px)",
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight">
              Our Blog
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.id}`}
                className="group relative p-6 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden block"
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${post.gradient} text-primary-foreground`}>
                  {post.category}
                </div>

                <h2 className="text-xl font-display font-semibold tracking-tight mb-3 group-hover:text-ai-violet transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm text-justify">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className={`bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent`}>Read More</span>
                  <ArrowRight className="w-4 h-4 text-ai-violet" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 relative overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(270, 80%, 60%, 0.3), transparent 60%)",
            filter: "blur(100px)",
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50">
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight leading-tight mb-3">
              Subscribe now to Our Newsletter and get the Coupon code.
            </h2>
            <p className="text-muted-foreground mb-6 text-sm">
              All your information is completely confidential
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-2xl bg-background border border-border/50 focus:outline-none focus:ring-2 focus:ring-ai-violet"
              />
              <button className="group relative inline-flex items-center justify-center gap-2 h-11 px-6 rounded-2xl text-sm font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg">
                <div 
                  className="absolute inset-0 rounded-2xl transition-all duration-500"
                  style={{
                    background: 'linear-gradient(135deg, hsl(220, 70%, 55%), hsl(220, 70%, 50%), hsl(210, 50%, 70%))',
                  }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-ai-blue/0 via-ai-violet/0 to-ai-peach/0 group-hover:from-ai-blue/10 group-hover:via-ai-violet/10 group-hover:to-ai-peach/10 transition-all duration-300" />
                <span className="relative z-10 text-white font-semibold">
                  Sign Up
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

