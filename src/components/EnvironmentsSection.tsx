import { MessageSquare, BarChart3, Zap, BookOpen, Workflow, Bot } from "lucide-react";

const environments = [
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description: "Natural dialogue with context-aware responses across multiple models",
    gradient: "from-ai-blue to-ai-cyan",
  },
  {
    icon: BarChart3,
    title: "Deep Analysis",
    description: "Complex data processing with reasoning chains and insights extraction",
    gradient: "from-ai-violet to-ai-peach",
  },
  {
    icon: Zap,
    title: "Task Automation",
    description: "Intelligent workflows that adapt and optimize in real-time",
    gradient: "from-ai-cyan to-ai-mint",
  },
  {
    icon: BookOpen,
    title: "Knowledge Retrieval",
    description: "Semantic search across your entire knowledge base with RAG",
    gradient: "from-ai-peach to-ai-violet",
  },
  {
    icon: Workflow,
    title: "Multi-Agent Pipelines",
    description: "Orchestrated AI agents working together on complex tasks",
    gradient: "from-ai-mint to-ai-blue",
  },
  {
    icon: Bot,
    title: "Custom Assistants",
    description: "Build specialized AI assistants for your unique needs",
    gradient: "from-ai-blue to-ai-violet",
  },
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Every AI workflow.{" "}
            <span className="gradient-warm-text">One platform.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Purpose-built environments for every use case. Each one powered by your choice of LLMs.
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
              <h3 className="text-xl font-display font-semibold mb-3">{env.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{env.description}</p>

              {/* Arrow indicator */}
              <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span className={`bg-gradient-to-r ${env.gradient} bg-clip-text text-transparent`}>Explore</span>
                <span className="text-ai-violet">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnvironmentsSection;
