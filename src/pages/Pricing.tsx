import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Sparkles, Zap, Users, Database, Shield, FileText, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      originalPrice: null,
      period: "/per month",
      description: "Perfect for getting started",
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      gradient: "from-ai-blue to-ai-cyan",
      features: [
        "Limited basic models",
        "Available Models: GPT-5.2,GPT-5.1,GPT-4.1,Gemini 2.5 Flash +3 More",
        "Bring your own API key(s) option",
        "Up to 1,000 messages/month",
        "No attachment",
        "Solo use only (no team features)",
        "No shared workspace",
        "Community-driven support",
      ],
      details: {
        availableModels: "Limited Basic (Gemini, Qwen, DeepSeek, Baidu)",
        messages: "No Limits",
        tokenLimit: "1M",
        fileUpload: "5MB",
        messageHistory: "No Limits",
        teamMembers: "Solo use only",
        sharedWorkspace: "No shared workspace",
        bringOwnKey: "Yes",
        liveWebSearch: "No",
        speed: "Slow",
        dailyTokenLimit: "1GB",
        support: "Community",
      },
    },
    {
      name: "Starter",
      price: isAnnual ? "$17" : "$19",
      originalPrice: isAnnual ? "$8" : "$8",
      period: "/per month",
      description: "For individuals and small teams",
      buttonText: "Choose Plan",
      buttonVariant: "gradient" as const,
      gradient: "from-ai-violet to-ai-peach",
      features: [
        "Basic and plus level models",
        "Available Models: O4 Mini, O3 Mini, GPT OSS 120B, +30 More",
        "Bring your own API key(s) option",
        "3,000 messages/month",
        "Attachment support",
        "Add up to 3 team members",
        "No shared workspace",
        "Email support",
      ],
      details: {
        availableModels: "Basic and Plus Models",
        messages: "No Limits",
        tokenLimit: "3M",
        fileUpload: "Extended Limit",
        messageHistory: "No Limits",
        teamMembers: "Invite Up to 3 Team Members",
        sharedWorkspace: "No shared workspace",
        bringOwnKey: "Yes",
        liveWebSearch: "Yes",
        speed: "Faster",
        dailyTokenLimit: "1GB",
        support: "Email Support",
      },
    },
    {
      name: "Professional",
      price: isAnnual ? "$37" : "$39",
      originalPrice: isAnnual ? "$20" : "$20",
      period: "/per month",
      description: "For growing teams",
      buttonText: "Choose Plan",
      buttonVariant: "gradient" as const,
      gradient: "from-ai-cyan to-ai-mint",
      popular: true,
      features: [
        "All available models unlocked",
        "Available Models: GPT-5.2, O3, GPT-5 Mini, +44 More",
        "Bring your own API key(s) option",
        "12,000 messages/month",
        "Larger attachment support",
        "Add up to 10 team members",
        "3 Shared workspace",
        "Priority email support",
      ],
      details: {
        availableModels: "Basic, Plus and Premium Models",
        messages: "No Limits",
        tokenLimit: "6M",
        fileUpload: "Unlimited",
        messageHistory: "No Limits",
        teamMembers: "Invite Up to 10 Team Members",
        sharedWorkspace: "3 Shared Workspaces",
        bringOwnKey: "Yes",
        liveWebSearch: "Yes",
        speed: "2x Faster",
        dailyTokenLimit: "5GB",
        support: "Priority Email Support",
      },
    },
    {
      name: "Enterprise",
      price: isAnnual ? "$97" : "$99",
      originalPrice: isAnnual ? "$39" : "$39",
      period: "/per month",
      description: "For large teams and enterprises",
      buttonText: "Choose Plan",
      buttonVariant: "gradient" as const,
      gradient: "from-ai-peach to-ai-violet",
      bestValue: true,
      features: [
        "All available models unlocked",
        "Available Models: GPT-5.2, O3, GPT-5 Mini, +44 More",
        "Bring your own API key(s) option",
        "30,000 messages/month",
        "Larger attachment support",
        "Add up to 25 team members",
        "Unlimited shared workspace",
        "Priority email support",
      ],
      details: {
        availableModels: "Basic, Plus and Premium Models",
        messages: "No Limits",
        tokenLimit: "10M",
        fileUpload: "Unlimited",
        messageHistory: "No Limits",
        teamMembers: "Invite Up to 25 Team Members",
        sharedWorkspace: "Unlimited Shared Workspaces",
        bringOwnKey: "Yes",
        liveWebSearch: "Yes",
        speed: "Highest",
        dailyTokenLimit: "15GB",
        support: "Priority Email Support",
      },
    },
  ];

  const faqs = [
    {
      question: "What is MetaWurks?",
      answer: "MetaWurks is an all-in-one AI platform and powerful AI aggregator that combines GPT-5, Claude, Gemini, DeepSeek, Grok, Mistral, LLaMA, and 30+ other AI models in one collaborative workspace. It's built for teams, developers, and creators to brainstorm, code, and create without switching tools or managing multiple subscriptions.",
    },
    {
      question: "How does MetaWurks give access to all top AI models?",
      answer: "MetaWurks integrates with multiple AI providers through their APIs, allowing you to access all major AI models from a single platform. You can also bring your own API keys for additional flexibility and cost control.",
    },
    {
      question: "What makes MetaWurks the best multi-model AI platform for teams?",
      answer: "MetaWurks offers shared workspaces, team collaboration features, unlimited message history, and priority support. Teams can work together seamlessly while accessing all the best AI models in one place.",
    },
    {
      question: "Which AI models does MetaWurks support?",
      answer: "MetaWurks supports GPT-5, Claude, Gemini, DeepSeek, Grok, Mistral, LLaMA, and 30+ other AI models. The exact models available depend on your plan tier.",
    },
    {
      question: "How is MetaWurks better than single AI tools?",
      answer: "Instead of managing multiple subscriptions and switching between different tools, MetaWurks gives you access to all major AI models in one place. This saves time, reduces costs, and improves workflow efficiency.",
    },
    {
      question: "Is MetaWurks secure for teams and businesses?",
      answer: "Yes, MetaWurks uses enterprise-grade security with encryption, role-based access control, and full audit logs. Your data is protected and compliant with industry standards.",
    },
    {
      question: "Can I use MetaWurks for free?",
      answer: "Yes, we offer a free plan with limited basic models and 1,000 messages per month. It's perfect for trying out the platform.",
    },
    {
      question: "Can developers integrate MetaWurks with their tools?",
      answer: "Yes, MetaWurks provides API access and integration capabilities for developers who want to build custom solutions or integrate AI capabilities into their existing tools.",
    },
  ];

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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get everything in one all-in-one AI platform including: GPT-5, Claude, Gemini, DeepSeek, Grok and more.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-sm ${!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-14 h-8 rounded-full bg-secondary border border-border/50 transition-colors"
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-gradient-to-r from-ai-blue to-ai-violet transition-transform duration-300 ${
                    isAnnual ? 'translate-x-6' : ''
                  }`}
                />
              </button>
              <span className={`text-sm ${isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Annually
              </span>
              {isAnnual && (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-ai-blue/10 to-ai-violet/10 text-ai-violet border border-ai-violet/20">
                  Save 30%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-32 relative overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(270, 80%, 60%, 0.3), transparent 60%)",
            filter: "blur(100px)",
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl backdrop-blur-xl bg-card/60 border-2 transition-all duration-500 ${
                  plan.popular || plan.bestValue
                    ? 'border-ai-violet/50 shadow-lg scale-105'
                    : 'border-border/50 hover:scale-[1.02]'
                }`}
              >
                {/* Badge */}
                {(plan.popular || plan.bestValue) && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-ai-blue to-ai-violet text-primary-foreground">
                      {plan.popular ? 'Popular Choice' : 'Best Value'}
                    </span>
                  </div>
                )}

                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6`}>
                  <Sparkles className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-display font-semibold tracking-tight mb-2">{plan.name}</h3>
                
                <div className="mb-4">
                  {plan.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through mr-2">
                      {plan.originalPrice}
                    </span>
                  )}
                  <span className="text-4xl font-display font-bold">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                
                <p className="text-muted-foreground mb-6 text-sm">{plan.description}</p>
                
                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full mb-8"
                >
                  {plan.buttonText}
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-ai-violet mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight mb-6">
              Compare Plans
            </h2>
            <p className="text-xl text-muted-foreground">
              See detailed feature comparison across all plans
            </p>
          </div>

          <div className="max-w-7xl mx-auto overflow-x-auto">
            <div className="rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left p-6 font-semibold">Features</th>
                    {pricingPlans.map((plan, index) => (
                      <th key={index} className="text-center p-6 font-semibold">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30">
                    <td className="p-6 font-medium">Available Models</td>
                    {pricingPlans.map((plan, index) => (
                      <td key={index} className="p-6 text-center text-sm text-muted-foreground">
                        {plan.details.availableModels}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-6 font-medium">Messages</td>
                    {pricingPlans.map((plan, index) => (
                      <td key={index} className="p-6 text-center text-sm text-muted-foreground">
                        {plan.details.messages}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-6 font-medium">Token Limit</td>
                    {pricingPlans.map((plan, index) => (
                      <td key={index} className="p-6 text-center text-sm text-muted-foreground">
                        {plan.details.tokenLimit}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-6 font-medium">File Upload</td>
                    {pricingPlans.map((plan, index) => (
                      <td key={index} className="p-6 text-center text-sm text-muted-foreground">
                        {plan.details.fileUpload}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-6 font-medium">Message History</td>
                    {pricingPlans.map((plan, index) => (
                      <td key={index} className="p-6 text-center text-sm text-muted-foreground">
                        {plan.details.messageHistory}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-6 font-medium">Team Members</td>
                    {pricingPlans.map((plan, index) => (
                      <td key={index} className="p-6 text-center text-sm text-muted-foreground">
                        {plan.details.teamMembers}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-6 font-medium">Shared Workspace</td>
                    {pricingPlans.map((plan, index) => (
                      <td key={index} className="p-6 text-center text-sm text-muted-foreground">
                        {plan.details.sharedWorkspace}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-6 font-medium">Can Bring Own AI API Key(s)</td>
                    {pricingPlans.map((plan, index) => (
                      <td key={index} className="p-6 text-center">
                        {plan.details.bringOwnKey === "Yes" ? (
                          <Check className="w-5 h-5 text-ai-violet mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-6 font-medium">Live Web Search</td>
                    {pricingPlans.map((plan, index) => (
                      <td key={index} className="p-6 text-center">
                        {plan.details.liveWebSearch === "Yes" ? (
                          <Check className="w-5 h-5 text-ai-violet mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-6 font-medium">Speed</td>
                    {pricingPlans.map((plan, index) => (
                      <td key={index} className="p-6 text-center text-sm text-muted-foreground">
                        {plan.details.speed}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-6 font-medium">Storage Limit</td>
                    {pricingPlans.map((plan, index) => (
                      <td key={index} className="p-6 text-center text-sm text-muted-foreground">
                        {plan.details.dailyTokenLimit}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Support</td>
                    {pricingPlans.map((plan, index) => (
                      <td key={index} className="p-6 text-center text-sm text-muted-foreground">
                        {plan.details.support}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(270, 80%, 60%, 0.3), transparent 60%)",
            filter: "blur(100px)",
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about MetaWurks, from models and pricing to collaboration and security.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50"
              >
                <h3 className="text-xl font-display font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Pricing;

