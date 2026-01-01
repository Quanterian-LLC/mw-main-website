import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "MetaWurks — Redefining AI Collaboration for the Modern Enterprise",
      excerpt: "In today's digital-first world, teams manage huge amounts of scattered documents. The challenge isn't storage—it's turning that data into insights. MetaWurks, a next-gen AI agent platform, solves this by converting unstructured information into clear, actionable intelligence.",
      date: "January 20, 2025",
      readTime: "6 min read",
      category: "Enterprise",
      gradient: "from-ai-blue to-ai-cyan",
    },
    {
      title: "How MetaWurks is Shaping the Future of AI-Driven Workflows?",
      excerpt: "Artificial Intelligence is rapidly transforming how companies operate, yet many teams still struggle to apply AI in practical, everyday ways. MetaWurks changes this by embedding intelligence directly into business workflows—turning scattered information into clear, actionable insights.",
      date: "January 18, 2025",
      readTime: "7 min read",
      category: "Technology",
      gradient: "from-ai-violet to-ai-peach",
    },
    {
      title: "How AI Agents Are Transforming Business Productivity-Meet MetaWurks",
      excerpt: "MetaWurks boosts smart productivity with AI agents that act like tireless digital co-workers, instantly processing documents and data. Its platform enables secure, scalable team collaboration with encryption, SSO, role-based access, and full audit logging for enterprises.",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Productivity",
      gradient: "from-ai-cyan to-ai-mint",
    },
    {
      title: "Why Multi-LLM Systems Are the Future of Automation-And How MetaWurks Leads the Way",
      excerpt: "Generative AI evolves quickly, with models excelling in different areas. MetaWurks enables powerful flexibility by supporting multiple LLMs simultaneously, letting teams leverage the best model for every task.",
      date: "January 12, 2025",
      readTime: "8 min read",
      category: "AI",
      gradient: "from-ai-peach to-ai-violet",
    },
    {
      title: "The Power of Drive Connectivity & Document Uploads in AI Workflows: Why MetaWurks Excels",
      excerpt: "With remote teams, enterprises need more than AI chat— they need cloud integration, document support, uploads, and smart workflows. MetaWurks delivers advanced, document-aware automation.",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Workflows",
      gradient: "from-ai-blue to-ai-violet",
    },
  ];

  const categories = ["All", "Enterprise", "Technology", "Productivity", "AI", "Workflows"];

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
              Our Blog
            </h1>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-gradient-to-r from-ai-blue to-ai-violet text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group relative p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 bg-gradient-to-r ${post.gradient} text-primary-foreground`}>
                  {post.category}
                </div>

                <h2 className="text-2xl font-display font-semibold tracking-tight mb-4 group-hover:text-ai-violet transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 relative overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(270, 80%, 60%, 0.3), transparent 60%)",
            filter: "blur(100px)",
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center p-12 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight mb-4">
              Subscribe now to Our Newsletter and get the Coupon code.
            </h2>
            <p className="text-muted-foreground mb-8">
              All your information is completely confidential
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-2xl bg-background border border-border/50 focus:outline-none focus:ring-2 focus:ring-ai-violet"
              />
              <Button variant="gradient">Sign Up</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;