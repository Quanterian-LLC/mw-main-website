import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      id: "self-prepared-returns-grew-faster",
      title: "Self-Prepared Returns Grew Four Times Faster Than Yours",
      excerpt: "By 17 April 2026 the IRS had received 72.8 million e-filed returns from tax professionals, up 0.4% on the prior year, and 64.8 million self-prepared returns, up 1.7%. Self-prepared grew more than four times faster, in a season when total returns fell and the free government filing option no longer existed. Firms are pointing AI at the half that is shrinking.",
      date: "24 August, 2026",
      readTime: "4 min read",
      category: "Accounting",
      gradient: "from-ai-mint to-ai-peach",
    },
    {
      id: "reviewers-on-day-one",
      title: "Reviewers on Day One: The Part of the AI Plan Nobody Costed",
      excerpt: "PwC plans to take junior associate hiring from 3,242 to 2,197 by fiscal 2028, a 32% cut, citing technological change. Its own AI assurance leader says new joiners will become reviewers almost instantly. Reviewing is a skill people acquired by doing the work that is being automated, and no plan yet explains where the replacement comes from.",
      date: "24 August, 2026",
      readTime: "5 min read",
      category: "Accounting",
      gradient: "from-ai-mint to-ai-cyan",
    },
    {
      id: "job-bookkeepers-want-automated",
      title: "The Job Bookkeepers Want Automated Is Not Bookkeeping",
      excerpt: "Asked which task they would most like to hand to an AI agent, 68% of accounting firms picked chasing clients for missing documents. It was the number one answer. Categorising transactions was not on the list, and only 24% currently use AI for data entry and reconciliation at all. The bottleneck in bookkeeping was never the bookkeeping.",
      date: "24 August, 2026",
      readTime: "4 min read",
      category: "Accounting",
      gradient: "from-ai-mint to-ai-blue",
    },
    {
      id: "close-got-faster-answers-did-not",
      title: "Your Close Got Faster. Your Answers Did Not.",
      excerpt: "Sixty-three percent of finance leaders say they have fully deployed AI inside the function. Only 21% can point to clear, measurable value from it. The gap is not a technology problem. It is that the close metric everyone optimised stops at the financial statements, and the questions start the next morning.",
      date: "24 August, 2026",
      readTime: "4 min read",
      category: "Accounting",
      gradient: "from-ai-cyan to-ai-violet",
    },
    {
      id: "ai-tax-research-section-7216",
      title: "Written in 1971: The Rule Your AI Tax Research Just Ran Into",
      excerpt: "Sixty percent of tax professionals now use AI for tax research at least weekly, up from 33% a year ago. The rule that governs what may leave a firm carrying client tax data was written in 1971 and carries a criminal penalty. The exception most firms assume covers their software stops at the word analysis, which is the thing the software is for.",
      date: "24 August, 2026",
      readTime: "5 min read",
      category: "Accounting",
      gradient: "from-ai-cyan to-ai-peach",
    },
    {
      id: "ten-apps-five-hours",
      title: "Ten Apps, Five Hours a Week, and the Advisory Work That Never Starts",
      excerpt: "725 accounting and bookkeeping professionals were asked what is blocking advisory work at their firms. Staffing shortages came second at 24%. First, at 30%, was manual data cleanup. The same firms run about ten software tools, spend $21,000 a year on them, and lose five hours a week moving data between them.",
      date: "11 August, 2026",
      readTime: "4 min read",
      category: "Accounting",
      gradient: "from-ai-cyan to-ai-mint",
    },
    {
      id: "defensible-not-just-accurate",
      title: "Tax Professionals Were Asked What AI Needs to Earn Their Trust. Accuracy Was Not the Answer.",
      excerpt: "When more than 600 tax professionals were asked what AI would need before they would trust it with client work, the top three answers were confidentiality at 96%, outputs grounded in authoritative content at 94%, and reasoning that is explainable and defensible at 90%. Not one of them is a question about whether the answer is right.",
      date: "11 August, 2026",
      readTime: "4 min read",
      category: "Accounting",
      gradient: "from-ai-blue to-ai-peach",
    },
    {
      id: "close-gap-is-a-data-problem",
      title: "The Difference Between a Five-Day Close and a Ten-Day Close Is Not Effort",
      excerpt: "APQC benchmarked 2,300 organisations on how long it takes to close the books. The median is 6.4 calendar days. The fastest quarter finish in 4.8 or less; the slowest quarter take ten or more. The teams closing in ten days are not working less hard than the ones closing in five. They are paying interest on messy data, twelve times a year.",
      date: "11 August, 2026",
      readTime: "4 min read",
      category: "Accounting",
      gradient: "from-ai-blue to-ai-cyan",
    },
    {
      id: "small-firms-biggest-problem-not-hiring",
      title: "The AICPA Asked Small Firms Their Biggest Problem. It Wasn't Hiring.",
      excerpt: "629 firms answered the AICPA's 2026 Top Issues Survey. Solo practitioners and firms with two to ten professionals both put managing tax law complexity first. Hiring experienced staff topped the list only at firms with 11 to 30 employees. The smallest firms are not short of people so much as short of answers they already own.",
      date: "10 August, 2026",
      readTime: "5 min read",
      category: "Accounting",
      gradient: "from-ai-violet to-ai-blue",
    },
    {
      id: "fixed-fee-priced-on-vanished-effort",
      title: "Your Fixed Fee Was Priced on Effort That No Longer Exists",
      excerpt: "At large accounting firms, 35% now report clients questioning their pricing model because of AI, and 73% responded by changing their messaging. But this was never a communications problem. A fixed fee is a bet on how much effort an engagement takes, and that estimate is now wrong.",
      date: "8 August, 2026",
      readTime: "5 min read",
      category: "Accounting",
      gradient: "from-ai-mint to-ai-cyan",
    },
    {
      id: "capacity-problem-talent-shortage-cpa",
      title: "A Capacity Problem Wearing a Talent Shortage Costume",
      excerpt: "Every small CPA firm owner has turned away valuable clients this year. Not because the work was wrong, but because there was nobody left to do it. Here's the reality inside small firms: 99% of accountants report exhaustion, and 300,000 have left the profession. The solution isn't finding more people—it's reclaiming hours.",
      date: "14 July, 2026",
      readTime: "4 min read",
      category: "Finance",
      gradient: "from-ai-violet to-ai-cyan",
    },
    {
      id: "confidently-wrong-ai-trust-report",
      title: "Confidently Wrong: Why an AI Trust Firm Had to Pull Its Own Report",
      excerpt: "A major advisory firm published an agentic AI report with 45 sources guiding firms on building trust. When citations were checked, 40 of them were found to be completely fabricated by the model. This is a preview of what happens when firms treat AI output like a first-year associate's draft without verifying the sources.",
      date: "13 July, 2026",
      readTime: "4 min read",
      category: "AI",
      gradient: "from-ai-blue to-ai-violet",
    },
    {
      id: "question-exposed-blind-spot-cpa-roundtable",
      title: "The Question That Exposed a Blind Spot at a CPA Roundtable",
      excerpt: "At a roundtable, one question silenced a room of CPAs: 'How many hours did your team spend last season on work that added zero value for the client?' Silence. Turning this invisible number into visibility is how firms find capacity without hiring.",
      date: "10 July, 2026",
      readTime: "4 min read",
      category: "Accounting",
      gradient: "from-ai-blue to-ai-mint",
    },
    {
      id: "problem-not-workload-how-work-moves",
      title: "The Real Problem Isn't the Workload — It's How Work Moves Through Your Firm",
      excerpt: "Stress and delays are often diagnosed as workload issues, but the true culprit is workflow. Add headcount to a broken workflow, and the confusion just gets bigger. Here is how to fix the path your work travels.",
      date: "9 July, 2026",
      readTime: "4 min read",
      category: "Accounting",
      gradient: "from-ai-violet to-ai-cyan",
    },
    {
      id: "busiest-season-most-profitable",
      title: "What If Your Busiest Season Became Your Most Profitable One?",
      excerpt: "For most accounting firms, busy season and profitable season aren't the same thing, and that's a contradiction. Margin leaks out in document collection and client follow-ups. Here is how to change that dynamic.",
      date: "8 July, 2026",
      readTime: "4 min read",
      category: "Accounting",
      gradient: "from-ai-peach to-ai-blue",
    },
    {
      id: "biggest-risk-accounting-untracked-hours",
      title: "The Biggest Risk in Accounting Isn't a Mistake — It's the Hours You Never Track",
      excerpt: "Ask a CPA firm to name their biggest risk, and you'll hear the same answers: a missed deadline or compliance error. But there's a quieter risk that rarely makes the list: thousands of small, invisible hours spent on manual work.",
      date: "7 July, 2026",
      readTime: "4 min read",
      category: "Accounting",
      gradient: "from-ai-cyan to-ai-blue",
    },
    {
      id: "tax-season-not-exhausting-wrong-problem",
      title: "Tax Season Doesn't Have to Be Exhausting — Most Firms Are Solving the Wrong Problem",
      excerpt: "Every year, the same conversation happens inside accounting firms: 'We need more hands.' But look closer at where the hours actually go, and a different problem shows up entirely. The problem was never the workload—it was what kind of work was filling the hours.",
      date: "6 July, 2026",
      readTime: "4 min read",
      category: "Accounting",
      gradient: "from-ai-blue to-ai-violet",
    },
    {
      id: "how-tax-accounting-firms-use-ai",
      title: "How Tax and Accounting Firms Are Actually Using AI — And What We've Learned",
      excerpt: "Every accounting firm is talking about AI. Very few are using it in a way that changes how they actually work. The gap between firms that have added an AI tool and firms that have built their practice around AI is growing — and the difference shows up in turnaround times, client responsiveness, and margin.",
      date: "16 June, 2026",
      readTime: "5 min read",
      category: "Finance",
      gradient: "from-ai-blue to-ai-violet",
    },
    {
      id: "ai-tax-research-cpa-firms",
      title: "AI in Tax Research and Return Preparation for Small to Mid-Sized CPA Firms",
      excerpt: "AI adoption in tax practice is accelerating fast—27% of CPA firms have already integrated AI tools, with another 22% planning to within the year. From automated document intake and RAG-powered tax research to AI-driven quality assurance, the technology is reshaping how small and mid-sized firms compete. MetaWurks brings orchestration, native integrations, and multi-model flexibility together, helping smaller practices achieve the operational efficiency once reserved for larger firms.",
      date: "12 June, 2026",
      readTime: "10 min read",
      category: "AI",
      gradient: "from-ai-peach to-ai-cyan",
    },
    {
      id: "high-cost-running-ai-commercial-llms",
      title: "High Cost of Running AI Applications Using Commercial LLMs",
      excerpt: "AI promises transformation, but commercial LLM pricing can quietly devour your margins. Token-based costs from OpenAI, Anthropic, and Google scale unpredictably with usage—turning a $1,500 pilot into a multi-million-dollar enterprise expense. From margin compression and vendor lock-in to the hidden overhead of prompt engineering talent, the true cost of commercial AI demands the same financial scrutiny as any major capital investment.",
      date: "8 June, 2026",
      readTime: "9 min read",
      category: "AI",
      gradient: "from-ai-mint to-ai-violet",
    },
    {
      id: "hidden-risk-finance-team-ai-workflow",
      title: "The Hidden Risk in Your Finance Team's AI Workflow",
      excerpt: "64% of finance teams use ChatGPT regularly—yet fewer than 20% have any formal AI usage policy. Every time someone pastes client financials into a public AI tool, your organization takes on risk it can't track. MetaWurks gives finance teams the AI workflow they need—document-level security, multi-LLM flexibility, and SSO with audit logs by default—so confidentiality and compliance are never an afterthought.",
      date: "27 May, 2026",
      readTime: "3 min read",
      category: "Finance",
      gradient: "from-ai-blue to-ai-peach",
    },
    {
      id: "ai-adoption-gap-in-finance",
      title: "The AI Adoption Gap Nobody in Finance Talks About",
      excerpt: "56% of finance teams say they've 'adopted AI.' Only 17% use it where the actual work happens. That gap isn't a hype problem—it's a trust problem. Most finance leaders aren't slow, they're careful: you can't paste a client's bank statement or a live P&L into a public chatbot and hope for the best. Here's why adoption stalls at email drafts, and what closes the gap.",
      date: "11 June, 2026",
      readTime: "4 min read",
      category: "Finance",
      gradient: "from-ai-cyan to-ai-blue",
    },
    {
      id: "5-ai-tools-zero-rules",
      title: "5 AI Tools. Zero Rules.",
      excerpt: "The average small business now runs about five AI tools—and most have zero rules for what those tools are allowed to see. One 2026 estimate puts the share of small businesses with no AI guardrails near 77%. The real question for 2026 isn't which AI tool is the smartest—it's whether your data stays yours.",
      date: "10 June, 2026",
      readTime: "3 min read",
      category: "AI",
      gradient: "from-ai-blue to-ai-mint",
    },
    {
      id: "ai-tools-pointed-at-the-money",
      title: "Everyone Has AI Tools. Almost No One Has Them Pointed at the Money.",
      excerpt: "76% of small businesses are already using or exploring AI, and the average one runs about 5 tools. But ~70% are stuck experimenting, while only ~8% have actually pulled ahead. The gap isn't who has the tools—it's who adapted their business around AI instead of just bolting it on. Here's how the 8% do it.",
      date: "9 June, 2026",
      readTime: "4 min read",
      category: "AI",
      gradient: "from-ai-peach to-ai-blue",
    },
    {
      id: "why-general-purpose-ai-no-longer-enough",
      title: "Why General-Purpose AI Is No Longer Enough",
      excerpt: "Every query you send to a public AI is data you've handed to someone else—and for regulated industries, that's the whole problem. The enterprises winning with AI have stopped renting generic intelligence and started building their own: specialized, secure, and cost-controlled. Here's why private, domain-trained LLMs are moving from luxury to competitive necessity.",
      date: "9 June, 2026",
      readTime: "3 min read",
      category: "AI",
      gradient: "from-ai-peach to-ai-mint",
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
    {
      id: "private-ai-by-contract-not-possession",
      title: "Private AI: Private by Contract, Not by Possession",
      excerpt: "'Private AI' is one of the most overused phrases in enterprise software. But when Anthropic or OpenAI use the word 'private,' what does it actually guarantee? If you don't host the model, don't own it, and can't see inside it, your 'private' deployment is private by contract—not by possession. Here's what's worth verifying before you trust that label with client data.",
      date: "3 June, 2026",
      readTime: "3 min read",
      category: "AI",
      gradient: "from-ai-mint to-ai-peach",
    },
    {
      id: "chatgpt-claude-training-client-financial-data",
      title: "ChatGPT and Claude Are Training on Your Clients' Confidential Financial Data",
      excerpt: "By default, OpenAI and Anthropic use your conversations to train their models—and Anthropic now retains chats for up to five years. A U.S. federal court recently ordered OpenAI to hand over 20 million 'private' ChatGPT conversations, with zero opt-out for users. For accountants pasting client P&Ls, payroll, and tax data into these tools, that's not a hypothetical—it's the deal you've already accepted, one prompt at a time.",
      date: "1 June, 2026",
      readTime: "4 min read",
      category: "Finance",
      gradient: "from-ai-violet to-ai-mint",
    },
    {
      id: "ai-took-6-finance-jobs-2026",
      title: "AI Quietly Took Over 6 Finance Jobs in 2026",
      excerpt: "Everyone is still debating whether AI will replace the CFO. Meanwhile in 2026, AI quietly took over 6 jobs underneath them—and the finance teams who noticed are running 30-40% leaner this year. From variance analysis to close anomaly detection, here's what AI is actually doing inside finance teams right now, and why the real question isn't 'will AI replace me?'",
      date: "29 May, 2026",
      readTime: "5 min read",
      category: "Finance",
      gradient: "from-ai-violet to-ai-cyan",
    },
    {
      id: "ai-bookkeeping-client-data-confidentiality",
      title: "83% of Accounting Firms Have No Controls Over Client Data in AI Tools",
      excerpt: "Every time you paste a client's financial statement into ChatGPT, that document leaves your control—and 83% of accounting firms have no technical controls to stop it. For bookkeepers, that's not a cybersecurity problem, it's a fiduciary one. The fix isn't to stop using AI; it's to run it inside a secure, encrypted environment where your client's files never touch a public training dataset.",
      date: "27 May, 2026",
      readTime: "4 min read",
      category: "Finance",
      gradient: "from-ai-cyan to-ai-peach",
    },
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

