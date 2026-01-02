import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  const blogPosts: Record<string, {
    title: string;
    category: string;
    date: string;
    readTime: string;
    gradient: string;
    content: JSX.Element;
  }> = {
    "metawurks-redefining-ai-collaboration": {
      title: "MetaWurks — Redefining AI Collaboration for the Modern Enterprise",
      category: "AI & Technology",
      date: "10 December, 2025",
      readTime: "6 min read",
      gradient: "from-ai-blue to-ai-cyan",
      content: (
        <>
          <p className="text-xl text-foreground">
            In today's digital-first business environment, teams handle overwhelming amounts of documents spread across spreadsheets, PDFs, and cloud drives. The real challenge isn't storing all this information—it's making sense of it in a way that drives meaningful decisions. MetaWurks, a next‑generation AI agent platform, solves this by transforming unstructured data into clear, actionable intelligence.
          </p>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              Intelligent Document Understanding
            </h2>
            <p>
              At its core, MetaWurks enables organizations to ingest a wide variety of files and convert them into a unified, searchable system. Instead of forcing teams into rigid folder structures, MetaWurks allows users to ask natural-language questions and instantly receive insightful answers. Using advanced language models, the platform interprets context, identifies relationships, and builds a living knowledge base for your business.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              A Proactive Digital Teammate
            </h2>
            <p>
              What truly sets MetaWurks apart is the way it behaves like a proactive member of your team. It doesn't wait for a prompt—it anticipates what you might need next based on context and patterns. Whether it's automatically summarizing a long report before your meeting, reminding you of something important that requires action, or surfacing relevant insights from past documents, MetaWurks works alongside you rather than behind you, becoming an active participant in your workflow.
            </p>
            <p>
              Over time, the system learns your role, work habits, communication style, and priorities through continuous interaction, evolving into a personalized assistant that understands your unique needs. This adaptive learning helps you stay organized, anticipate challenges, and stay ahead of your tasks with minimal effort, making your workday significantly more productive and less stressful.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              Built for Modern Workflows
            </h2>
            <p>
              MetaWurks integrates smoothly with the tools teams already use. Whether your files are stored on Google Drive, OneDrive, or Dropbox, the AI works directly with them so there's no need to change existing workflows. The platform is also built with enterprise-grade security, offering encryption, role-based access, and detailed audits—ensuring your data stays protected while your team becomes more productive.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              Scaling Intelligence with Multiple Models
            </h2>
            <p>
              One of the most exciting elements in the MetaWurks roadmap is its ability to use multiple AI models together. This means the system can choose the best-performing model for the task—balancing accuracy, cost, and speed. This flexible approach results in a smarter, more efficient AI that grows alongside your business needs.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              A Long-Term Partner in Productivity
            </h2>
            <p>
              As the system learns from your interactions, it becomes increasingly aligned with your style of work. It understands which documents matter most, how you ask questions, and what information should be prioritized. This makes MetaWurks not just an AI tool, but a long-term collaborator that continuously improves and adapts.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              Why MetaWurks Matters
            </h2>
            <ul className="space-y-3 list-disc list-inside ml-4">
              <li>It enables faster, more informed decision-making</li>
              <li>It saves teams hours of manual document searching</li>
              <li>It makes AI accessible to non-technical users</li>
              <li>It scales securely across teams and departments</li>
            </ul>
            <p className="mt-6">
              In a world where data continues to grow and complexity increases, MetaWurks is helping companies redefine how AI fits into everyday work. It's more than a tool—it's the future of intelligent collaboration.
            </p>
          </div>
        </>
      ),
    },
    "shaping-future-ai-workflows": {
      title: "How MetaWurks is Shaping the Future of AI-Driven Workflows?",
      category: "AI & Technology",
      date: "20 November, 2025",
      readTime: "7 min read",
      gradient: "from-ai-violet to-ai-peach",
      content: (
        <>
          <p className="text-xl text-foreground">
            Artificial Intelligence is rapidly transforming how companies operate, yet many teams still struggle to apply AI in practical, everyday ways. The gap between AI's potential and its real-world implementation remains significant. MetaWurks changes this by embedding intelligence directly into business workflows—turning scattered information into clear, actionable insights that drive meaningful decisions and measurable outcomes.
          </p>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              Turning Fragmented Data into Unified Knowledge
            </h2>
            <p>
              Business data rarely lives in one place. It spans cloud drives, shared folders, spreadsheets, documents, and more. MetaWurks brings all of this together by ingesting different file types and converting them into a knowledge system that understands meaning, context, and relationships. Teams simply ask questions in their own words, and the AI delivers accurate, context-rich responses.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              Context Awareness at Its Core
            </h2>
            <p>
              Unlike many AI tools that treat every query the same, MetaWurks understands the bigger picture—who is asking, what their role is, and what they've been working on recently. By analyzing user behavior patterns and organizational structure, it learns workflows, tracks history, and adapts its responses to support each user more effectively. This personalized approach ensures that every interaction becomes more relevant and valuable over time.
            </p>
            <p>
              This context-aware design enables MetaWurks to act proactively rather than reactively. It automatically generates summaries of lengthy documents, highlights important information that requires attention, and provides timely insights without needing to be prompted. The result is an intelligent system that works like an assistant that actually knows your day-to-day responsibilities and anticipates your needs before you even ask.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              Designed for Seamless Adoption
            </h2>
            <p>
              Adopting AI shouldn't require major workflow changes. MetaWurks integrates with popular storage platforms and communication tools, ensuring that AI becomes a natural part of the work environment. Teams can continue using the platforms they're already comfortable with while MetaWurks enhances the experience behind the scenes.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              Security That Meets Enterprise Standards
            </h2>
            <p>
              For businesses, AI adoption comes with valid concerns about data safety and regulatory compliance. MetaWurks addresses this with comprehensive security measures, including end-to-end encryption, role-based controlled access, and detailed usage logs that provide full audit trails. Its enterprise-grade architecture supports teams of all sizes while keeping sensitive information protected and ensuring compliance with industry standards and regulations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              Smarter AI Through Multi‑Model Intelligence
            </h2>
            <p>
              A major innovation within MetaWurks is its ability to use more than one AI model at a time. This gives the system flexibility—lighter models can handle quick tasks, while more powerful ones can be used for complex analysis. This multi‑model approach not only improves accuracy but also ensures faster response times and better resource efficiency.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              A Learning System That Grows with You
            </h2>
            <p>
              Every interaction helps MetaWurks better understand your preferences, patterns, and workflows. With time, it begins delivering more personalized insights, reducing the amount of back‑and‑forth and making everyday tasks easier. This ongoing learning creates a highly adaptive experience that benefits users across the organization.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              The Strategic Value of MetaWurks
            </h2>
            <ul className="space-y-3 list-disc list-inside ml-4">
              <li>It reduces manual work and boosts operational efficiency</li>
              <li>It improves decision-making through timely insights</li>
              <li>It makes powerful AI accessible to all teams</li>
              <li>It supports safe, scalable enterprise adoption</li>
            </ul>
            <p className="mt-6">
              MetaWurks represents an important evolution in how organizations use AI. It's not just about automating tasks—it's about creating a smart, dependable partner that understands your business and helps your team work smarter every day. As AI becomes increasingly central to modern operations, tools like MetaWurks will define the future of intelligent workflow automation.
            </p>
          </div>
        </>
      ),
    },
    "ai-agents-transforming-productivity": {
      title: "How AI Agents Are Transforming Business Productivity — Meet MetaWurks",
      category: "AI & Technology",
      date: "5 November, 2025",
      readTime: "5 min read",
      gradient: "from-ai-cyan to-ai-mint",
      content: (
        <>
          <p className="text-xl text-foreground">
            In today's fast-paced business environment, productivity isn't just about working harder — it's about working smarter. That's where AI agents come into play. Imagine a "digital co-worker" that never sleeps, doesn't forget, and can instantly ingest documents, context, and data to take action. That's precisely the promise of MetaWurks. On their homepage, MetaWurks describes itself as enabling "Secure, Scalable Collaboration" across teams with features like encryption, SSO, role-based access and audit logs — built to support enterprise-grade collaboration.
          </p>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              The Productivity Leap with AI Agents
            </h2>
            <p>
              At the heart of modern AI automation is the combination of large language models (LLMs) and agents — systems that don't just respond to prompts, but orchestrate workflows, integrate with tools, and act on context. As noted broadly in the industry, pairing AI agents with LLMs offers "dramatic improvements in task accuracy and process efficiency" because the LLM deeply understands natural language, while the agent executes tasks, retrieves data, and interfaces with external systems.
            </p>
            <p>
              With MetaWurks, you can harness multiple leading LLMs in parallel ("Multi-LLM Power") to deliver the best possible output — making processes faster, more reliable, and tailored to business needs.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              What That Means for Your Business
            </h2>
            <ul className="space-y-3 list-disc list-inside ml-4">
              <li><strong>Fewer manual handoffs.</strong> Instead of juggling spreadsheets, emails, file uploads, and manual reviews, a MetaWurks agent can run document parsing, data extraction, summarization, or even generate reports — all automatically.</li>
              <li><strong>Reduced errors and higher consistency.</strong> Because the process is automated, human error — from misfiling documents to misreading requests — is minimized.</li>
              <li><strong>24/7 productivity.</strong> Agents don't take breaks, so tasks like document processing, data extraction, or report generation can run overnight or during off-hours, cutting turnaround time drastically.</li>
              <li><strong>Faster scaling.</strong> As volume grows — more documents, more requests — the system scales without needing to proportionally add headcount.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              Real-World Impact
            </h2>
            <p>
              Companies that adopt intelligent document automation and agentic workflows often see dramatic reductions in manual processing time, improved compliance, and faster decision-making. For example, what used to take days of manual review and coordination can now be done in hours — or even minutes.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              Why MetaWurks is a Smart Choice
            </h2>
            <p>
              Because MetaWurks supports multiple LLMs (via "Multi-LLM Power"), you're not locked into a single model's limitations; you benefit from "ensemble intelligence," which increases reliability and resilience. And with enterprise-grade features — encryption, SSO, role-based access, audit logs — MetaWurks is built for teams that care about security and governance, not just convenience.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              Call to Action
            </h2>
            <p>
              If you're ready to unlock next-level productivity for your business, consider booking a demo with MetaWurks today — see how AI agents can become a reliable part of your team, automating repetitive tasks and freeing your people for high-value work.
            </p>
          </div>
        </>
      ),
    },
    "multi-llm-systems-future": {
      title: "Why Multi-LLM Systems Are the Future of Automation — And How MetaWurks Leads the Way",
      category: "AI & Technology",
      date: "1 November, 2025",
      readTime: "8 min read",
      gradient: "from-ai-peach to-ai-violet",
      content: (
        <>
          <p className="text-xl text-foreground">
            The world of generative AI is moving fast. New language models are released frequently, each with different strengths — some are better at language generation, some at reasoning, others at domain-specific knowledge. That's why a platform that supports multiple LLMs simultaneously is so powerful. That's exactly what MetaWurks offers.
          </p>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              The Problem with Single-Model Lock-In
            </h2>
            <p>
              If your AI workflows rely on a single LLM, you're betting everything on one model's performance. When it's great, fine. When the model struggles (for instance with complex reasoning, domain-specific terminology, or ambiguous prompts), your workflow suffers.
            </p>
            <p>
              But multi-LLM systems — especially ones with "ensemble intelligence" — combine the strengths of multiple models. They can run inputs through several LLMs in parallel and pick the best result, or even merge outputs to improve confidence, accuracy, and nuance. That means fewer mistakes, more robust outputs, and better adaptability as tasks evolve.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              What Research and Industry Trends Show
            </h2>
            <p>
              Agentic AI systems built on multi-agent workflows routinely split tasks across specialized agents — some for document parsing, others for summarization, extraction, compliance checks, or generation. Recent frameworks even emphasize dynamic task routing: different models (or agents) handle different "cognitive requirements."
            </p>
            <p>
              This architecture dramatically improves task completion rates, reduces resource waste (e.g. tokens or compute for simple tasks), and boosts output quality compared to monolithic, single-model designs.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              MetaWurks: Future-Proof Automation
            </h2>
            <p>
              By offering "Multi-LLM Power," MetaWurks positions itself as a future-proof automation platform. As new models emerge — better at summarizing, reasoning, code generation, or domain-specific tasks — you can plug them in without rearchitecting your workflows. That adaptability is key in 2025's rapidly evolving AI landscape.
            </p>
            <p>
              For enterprises, this flexibility is especially important: you might use different LLMs for different tasks (e.g., summarizing legal documents vs generating marketing content), or swap models when licensing, compliance, or performance demands shift.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              Benefits for Teams and Businesses
            </h2>
            <ul className="space-y-3 list-disc list-inside ml-4">
              <li><strong>Higher accuracy across diverse tasks.</strong> Whether the task is legal-document summarization, financial report generation, or customer-facing content creation — multi-LLM gives you the model best suited for each.</li>
              <li><strong>Reduced dependency risk.</strong> If one LLM becomes unavailable (e.g. deprecated, license issues), you're not forced to rebuild your stack — you can route tasks to alternative models.</li>
              <li><strong>Best-of-breed output.</strong> Ensemble approaches often outperform single-model approaches, because they can cross-validate, combine strengths, and mitigate weaknesses.</li>
              <li><strong>Scalability and flexibility.</strong> As business needs evolve — for example, new document types, languages, compliance requirements — multi-LLM systems like MetaWurks can adapt without a major overhaul.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              Call to Action
            </h2>
            <p>
              If you want to stay ahead of the curve, invest in automation infrastructure that's designed for longevity. Explore MetaWurks and see how its multi-LLM architecture can power reliable, flexible, enterprise-grade workflows — regardless of how AI evolves next.
            </p>
          </div>
        </>
      ),
    },
    "drive-connectivity-document-uploads": {
      title: "The Power of Drive Connectivity & Document Uploads in AI Workflows: Why MetaWurks Excels",
      category: "AI & Technology",
      date: "15 October, 2025",
      readTime: "6 min read",
      gradient: "from-ai-blue to-ai-violet",
      content: (
        <>
          <p className="text-xl text-foreground">
            In the era of remote work, hybrid teams, and distributed documentation, it's no longer enough for an AI platform to just "chat." What enterprises truly need is seamless integration with existing document repositories — cloud drives, shared folders, or enterprise DMS — plus the ability to upload files directly, and then run intelligent workflows over them. That's where MetaWurks shines.
          </p>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              Why Document Connectivity Matters
            </h2>
            <p>
              Most businesses generate large volumes of documents — contracts, reports, invoices, compliance papers, proposals, logs, etc. Traditionally, handling this flood of unstructured or semi-structured data has involved manual work. But with cloud-based document storage plus AI, you unlock powerful benefits:
            </p>
            <ul className="space-y-2 list-disc list-inside ml-4 mt-4">
              <li>Secure central storage accessible by teams globally</li>
              <li>Real-time collaboration and version control</li>
              <li>Audit trails and compliance-ready workflows</li>
              <li>Instant accessibility (any file, any time, any device)</li>
            </ul>
            <p className="mt-4">
              Layer AI over this stack — and suddenly your documents aren't passive storage; they become actionable data.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              What AI + Document Workflows Can Do
            </h2>
            <p>
              With an AI automation platform that supports document uploads and drive connectivity, you can:
            </p>
            <ul className="space-y-2 list-disc list-inside ml-4 mt-4">
              <li>Automatically parse, classify, and extract key data from uploaded documents (e.g., extract invoice amounts, contract terms, deadline dates)</li>
              <li>Run natural-language queries across your entire document repository — e.g., "Show me all contracts expiring next quarter," or "Summarize the key risks in all vendor agreements."</li>
              <li>Trigger downstream workflows automatically — e.g., notify finance to pay an invoice, alert legal when renewal dates approach, route files for review.</li>
            </ul>
            <p className="mt-4">
              AI-driven document automation improves speed, accuracy, and compliance. According to industry analyses, AI-led document processing results in faster ROI, improved flexibility, rapid response times, and accelerates digital transformation.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              How MetaWurks Enables These Benefits
            </h2>
            <p>
              MetaWurks's support for cloud drives + document uploads means you don't have to adapt your existing storage: you bring in what you already have (shared drives, cloud storage) and let agents operate on top.
            </p>
            <p>
              Once uploaded, documents become part of an intelligent, searchable, automatable workflow. And with enterprise-grade security (encryption, role-based access, audit logs), you get peace of mind — a must for regulated industries or companies handling sensitive data.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              Real-World Value — From Chaos to Clarity
            </h2>
            <ul className="space-y-3 list-disc list-inside ml-4">
              <li>A small legal team buried under hundreds of contracts can use MetaWurks to auto-extract key clauses — enabling quick summaries and saving hours per agreement.</li>
              <li>Finance departments can automate invoice ingestion: upload a batch of PDFs, have AI extract vendor, amount, due date — then automatically populate the ERP or send it for approval.</li>
              <li>HR teams can digitize onboarding documents, resumes, compliance forms — making search, compliance audits, and onboarding tracking seamless.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-foreground">
              Call to Action
            </h2>
            <p>
              If your organization is drowning in documents and you know there's valuable data locked inside — it's time to bring AI to that data. Check out MetaWurks, connect your drives or upload documents, and see how quickly you can transform static files into dynamic, actionable workflows.
            </p>
          </div>
        </>
      ),
    },
  };

  const post = id ? blogPosts[id] : null;

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-ai-violet hover:underline">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      
            {/* Hero Section */}
            <section className="relative pt-24 pb-8 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(270, 80%, 60%, 0.3), transparent 60%)",
            filter: "blur(100px)",
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 bg-gradient-to-r ${post.gradient} text-primary-foreground`}>
              {post.category}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <article className="max-w-4xl mx-auto prose prose-lg prose-invert">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {post.content}
            </div>
          </article>
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
};

export default BlogPost;