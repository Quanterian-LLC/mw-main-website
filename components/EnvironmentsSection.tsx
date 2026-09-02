import { MessageSquare, BarChart3, Zap, BookOpen, Workflow, Bot } from "lucide-react";

// Card copy rewritten to describe what MetaWurks actually does with documents.
//
// The previous descriptions ("Multi-Agent Pipelines", "orchestrated AI agents", "workflows
// that adapt and optimize in real-time") described a generic agent platform and were not
// supported by app/docs/page.tsx. Each entry below cites its source.
const environments = [
  {
    icon: MessageSquare,
    title: "Chat with your documents",
    description:
      "Ask a question in plain English and get an answer built from your uploaded files, citing the passage it came from.",
    gradient: "from-ai-blue to-ai-cyan",
  }, // app/docs/page.tsx:447-460
  {
    icon: BookOpen,
    title: "Retrieval across your whole set",
    description:
      "Retrieval-augmented generation searches every document you have added, so one question can span several files at once.",
    gradient: "from-ai-peach to-ai-violet",
  }, // app/docs/page.tsx:100
  {
    icon: Bot,
    title: "Six model providers, one workspace",
    description:
      "OpenAI, Anthropic, Google, xAI, DeepSeek and Perplexity, switchable mid-conversation to suit the task.",
    gradient: "from-ai-blue to-ai-violet",
  }, // app/docs/page.tsx:399-404, :119
  {
    icon: Workflow,
    title: "Cloud storage connections",
    description:
      "Connect Google Drive or OneDrive over OAuth and import folders. Connections are per-user and private to you.",
    gradient: "from-ai-mint to-ai-blue",
  }, // app/docs/page.tsx:103, :619, :650-651
  {
    icon: Zap,
    title: "Background tasks",
    description:
      "Longer jobs run in the background with a live progress card. Tasks can run up to 15 minutes, and up to 5 at once.",
    gradient: "from-ai-cyan to-ai-mint",
  }, // app/docs/page.tsx:485
  {
    icon: BarChart3,
    title: "Export what you produce",
    description:
      "Send results out as PDF, Word, Excel, PowerPoint, CSV or plain text.",
    gradient: "from-ai-violet to-ai-peach",
  }, // app/docs/page.tsx:122, :512-516
];

const EnvironmentsSection = () => {
  return (
    <section id="environments" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(270, 80%, 60%, 0.3), transparent 60%)",
          filter: "blur(100px)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-sm font-medium text-ai-violet mb-4">AI ENVIRONMENTS</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
            Every AI workflow.{" "}
            <span className="gradient-warm-text">One platform.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            What you can do once your documents are in MetaWurks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {environments.map((env, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl glass-card hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${env.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${env.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <env.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold tracking-tight mb-3">{env.title}</h3>
              <p className="text-muted-foreground font-body font-normal leading-relaxed">{env.description}</p>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnvironmentsSection;
