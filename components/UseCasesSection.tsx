import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Starter",
    price: "$19/month",
    description: "For small teams trying out AI-powered document Q&A",
    features: [
      "File Uploads and Ingestion",
      "Core AI Chatbot Features Access",
      "Basic Search and Context Retention",
      "Multi-File Support",
    ],
    gradient: "from-ai-blue to-ai-cyan",
  },
  {
    name: "Professional",
    price: "$39/month",
    description: "For growing companies that need collaboration and stronger retrieval",
    features: [
      "Everything in Starter",
      "Scalable Data Storage and Queries",
      "Team Collaboration",
      "Smart Context Awareness",
    ],
    gradient: "from-ai-violet to-ai-peach",
  },
  {
    name: "Enterprise",
    price: "$99/month",
    description: "For larger enterprises requiring security, scalability, and customization",
    features: [
      "Everything in Professional",
      "Flexible Storage Options",
      "Custom AI Models",
      "Personalized Support and Guidance",
    ],
    gradient: "from-ai-cyan to-ai-mint",
  },
  {
    name: "Custom Version",
    price: "Custom",
    description: "Tailored solutions for large enterprises with specific requirements",
    features: [
      "Everything in Enterprise",
      "Customize version for large customers as per need",
      "Dedicated 24/7 resources",
      "Dedicated Infrastructure",
    ],
    gradient: "from-ai-peach to-ai-violet",
  },
];

const UseCasesSection = () => {
  return (
    <section id="usecases" className="py-32 relative overflow-hidden">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(270, 80%, 60%, 0.3), transparent 60%)",
          filter: "blur(100px)",
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
            Accelerate your business{" "}
            <span className="gradient-warm-text">with AI-powered insights</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Flexible plans for individuals, teams, and enterprises to unlock value from your unstructured business data
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 hover:scale-[1.02] transition-all duration-500"
            >
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
              />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6`}>
                <Sparkles className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-display font-semibold tracking-tight mb-2">{plan.name}</h3>
              <div className="text-3xl font-display font-bold mb-4">{plan.price}</div>
              <p className="text-muted-foreground mb-6 text-sm">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-ai-violet mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;