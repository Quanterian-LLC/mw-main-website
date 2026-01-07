import { Sparkles, Check } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "/MONTH",
    description: "Free plan for 1 month with limited access",
    features: [
      "Standard AI Models",
      "1M Token Limit",
      "Basic Chat Memory Across History",
      "Fast Speed",
      "Limited Storage",
      "Community Support",
    ],
    gradient: "from-ai-mint to-ai-cyan",
  },
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    description: "For small teams trying out AI-powered document Q&A",
    features: [
      "Standard & Enhanced AI Models",
      "3M Token Limit",
      "Full Chat Memory Across History",
      "Faster Speed",
      "1GB Storage Limit",
      "Email Support",
    ],
    gradient: "from-ai-blue to-ai-cyan",
  },
  {
    name: "Professional",
    price: "$39",
    period: "/month",
    description: "For growing companies that need collaboration and stronger retrieval",
    features: [
      "Core, Advanced & Premium AI Models",
      "6M Token Limit",
      "Full Chat Memory Across History",
      "2x Faster Speed",
      "5GB Storage Limit",
      "Priority Email Support",
    ],
    gradient: "from-ai-violet to-ai-peach",
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For larger enterprises requiring security, scalability, and customization",
    features: [
      "Core, Advanced & Premium AI Models",
      "10M Token Limit",
      "Full Chat Memory Across History",
      "Highest Speed",
      "15GB Storage Limit",
      "Priority Email Support",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 hover:scale-[1.02] transition-all duration-500 flex flex-col h-full"
            >
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
              />
              
              <div className="flex-1 flex flex-col">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6`}>
                  <Sparkles className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-display font-semibold tracking-tight mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-display font-bold">
                    {plan.price}
                  </span>
                  {'period' in plan && (plan as { period?: string }).period && (
                    <span className="text-muted-foreground">{(plan as { period: string }).period}</span>
                  )}
                </div>
                <p className="text-muted-foreground mb-6 text-sm">{plan.description}</p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-ai-violet mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto">
                {plan.name === "Custom Version" ? (
                  <Link href="/contact">
                    <button className="group relative inline-flex items-center justify-center gap-2 h-11 px-6 rounded-2xl text-sm font-medium border border-border bg-transparent hover:bg-secondary transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full">
                      <span className="relative z-10 font-semibold">
                        Contact Us
                      </span>
                    </button>
                  </Link>
                ) : (
                  <Link
                    href={process.env.NEXT_PUBLIC_SIGNUP_URL || "/contact#early-access"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-2 h-11 px-6 rounded-2xl text-sm font-medium border border-border bg-transparent hover:bg-secondary transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full"
                  >
                    <span className="relative z-10 font-semibold">
                      Get Started
                    </span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;