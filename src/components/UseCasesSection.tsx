import { Code2, Briefcase, Palette, Users } from "lucide-react";

const useCases = [
  {
    icon: Code2,
    title: "Developers",
    description: "Build AI-native applications with our SDK. Integrate multiple LLMs without managing infrastructure.",
    features: ["API-first design", "Type-safe SDKs", "Real-time streaming"],
    gradient: "from-ai-blue to-ai-cyan",
    image: "code",
  },
  {
    icon: Briefcase,
    title: "Product Teams",
    description: "Prototype and ship AI features faster. No ML expertise required.",
    features: ["Visual workflow builder", "A/B testing built-in", "Usage analytics"],
    gradient: "from-ai-violet to-ai-peach",
    image: "product",
  },
  {
    icon: Palette,
    title: "Creative Technologists",
    description: "Push the boundaries of human-AI collaboration in creative workflows.",
    features: ["Multimodal support", "Creative pipelines", "Real-time generation"],
    gradient: "from-ai-peach to-ai-mint",
    image: "creative",
  },
  {
    icon: Users,
    title: "Enterprise",
    description: "Scale AI across your organization with security and compliance built-in.",
    features: ["SSO & RBAC", "Data residency", "SLA guarantees"],
    gradient: "from-ai-cyan to-ai-blue",
    image: "enterprise",
  },
];

const UseCasesSection = () => {
  return (
    <section id="usecases" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-sm font-medium text-ai-peach mb-4">USE CASES</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Built for{" "}
            <span className="gradient-warm-text">every builder</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Whether you're a solo developer or an enterprise team, NeuralOS scales with your ambitions.
          </p>
        </div>

        <div className="space-y-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center p-8 md:p-12 rounded-4xl glass-card ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-6`}>
                  <useCase.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">{useCase.title}</h3>
                <p className="text-xl text-muted-foreground mb-8">{useCase.description}</p>
                <div className="flex flex-wrap gap-3">
                  {useCase.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`relative aspect-[4/3] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${useCase.gradient} opacity-10`} />
                <div className="absolute inset-4 rounded-2xl glass-card overflow-hidden">
                  {/* Placeholder for actual screenshots/visuals */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${useCase.gradient} opacity-30 animate-morph`} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-card to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
