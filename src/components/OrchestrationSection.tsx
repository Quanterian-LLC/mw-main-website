import { ArrowRight } from "lucide-react";

const OrchestrationSection = () => {
  return (
    <section id="orchestration" className="py-32 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <span className="inline-block text-sm font-medium text-ai-cyan mb-4">INTELLIGENT ORCHESTRATION</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Models that{" "}
              <span className="gradient-text">think together</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our orchestration layer intelligently routes tasks to the best model, enabling parallel processing and seamless collaboration between LLMs.
            </p>

            <div className="space-y-6">
              {[
                { title: "Smart Routing", description: "Auto-select the optimal model for each task based on capability, cost, and latency" },
                { title: "Parallel Execution", description: "Run multiple models simultaneously for faster, more comprehensive results" },
                { title: "Consensus Building", description: "Cross-validate responses across models for higher accuracy and reliability" },
              ].map((feature, index) => (
                <div key={index} className="flex gap-4 group cursor-pointer">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-ai-blue to-ai-violet mt-3 group-hover:scale-150 transition-transform" />
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-ai-violet transition-colors">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Central orchestrator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-ai-blue via-ai-violet to-ai-cyan animate-spin-slow opacity-20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full glass-card flex items-center justify-center glow-effect">
                <span className="font-display font-bold text-lg">Router</span>
              </div>

              {/* Model nodes */}
              {[
                { angle: 0, label: "GPT-5", color: "from-ai-blue to-ai-cyan" },
                { angle: 72, label: "Claude", color: "from-ai-violet to-ai-peach" },
                { angle: 144, label: "Gemini", color: "from-ai-cyan to-ai-mint" },
                { angle: 216, label: "Llama", color: "from-ai-peach to-ai-violet" },
                { angle: 288, label: "Mistral", color: "from-ai-mint to-ai-blue" },
              ].map((node, i) => {
                const radius = 140;
                const x = Math.cos((node.angle * Math.PI) / 180) * radius;
                const y = Math.sin((node.angle * Math.PI) / 180) * radius;
                
                return (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 animate-pulse-soft"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${node.color} shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer`}>
                      <span className="text-primary-foreground text-sm font-medium">{node.label}</span>
                    </div>
                  </div>
                );
              })}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {[0, 72, 144, 216, 288].map((angle, i) => {
                  const radius = 140;
                  const x = 50 + (Math.cos((angle * Math.PI) / 180) * radius) / 4;
                  const y = 50 + (Math.sin((angle * Math.PI) / 180) * radius) / 4;
                  
                  return (
                    <line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${x}%`}
                      y2={`${y}%`}
                      stroke="url(#orchestrationGradient)"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                      className="opacity-30"
                    />
                  );
                })}
                <defs>
                  <linearGradient id="orchestrationGradient" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="hsl(220, 90%, 60%)" />
                    <stop offset="100%" stopColor="hsl(270, 80%, 60%)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrchestrationSection;
