import { Code2, Briefcase, Palette, Users } from "lucide-react";

const useCases = [
  {
    icon: Code2,
    title: "Starter",
    description: "For small teams trying out AI-powered document Q&A",
    features: ["File Uploads and Ingestion", "Core AI Chatbot Features Access", "Basic Search and Context Retention", "Multi-File Support"],
    price: "$19/month",
    gradient: "from-ai-blue to-ai-cyan",
    image: "code",
  },
  {
    icon: Briefcase,
    title: "Professional",
    description: "For growing companies that need collaboration and stronger retrieval",
    features: ["Everything in Starter", "Scalable Data Storage and Queries", "Team Collaboration", "Smart Context Awareness"],
    price: "$29/month",
    gradient: "from-ai-violet to-ai-peach",
    image: "product",
  },
  {
    icon: Palette,
    title: "Enterprise",
    description: "For larger enterprises requiring security, scalability, and customization",
    features: ["Everything in Professional", "Flexible Storage Options", "Custom AI Models", "Personalized Support and Guidance"],
    price: "$99/month",
    gradient: "from-ai-peach to-ai-mint",
    image: "creative",
  },
  {
    icon: Users,
    title: "Custom Version",
    description: "Tailored solutions for large enterprises with specific requirements",
    features: ["Everything in Enterprise", "Customize version for large customers as per need", "Dedicated 24/7 resources", "Dedicated Infrastructure"],
    price: "Custom",
    gradient: "from-ai-cyan to-ai-blue",
    image: "enterprise",
  },
];

const UseCasesSection = () => {
  return (
    <section id="usecases" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
            Accelerate your{" "}
            <span className="gradient-warm-text">business</span>{" "}
            with AI-powered insights
          </h2>
          <p className="text-xl text-muted-foreground">
            Flexible plans for individuals, teams, and enterprises to unlock value from your unstructured business data
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
                <h3 className="text-3xl font-display font-bold tracking-tight mb-2">{useCase.title}</h3>
                <div className="text-2xl font-display font-bold mb-4 text-ai-blue">{useCase.price}</div>
                <p className="text-xl text-muted-foreground font-body font-normal leading-relaxed mb-8">{useCase.description}</p>
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