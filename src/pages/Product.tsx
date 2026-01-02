import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Brain, Database, Shield, Upload, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Product = () => {
  const features = [
    {
      icon: Search,
      title: "Semantic Query Engine",
      description: "Understand and respond to business questions using natural language—no jargon or training required.",
      gradient: "from-ai-blue to-ai-cyan",
    },
    {
      icon: Upload,
      title: "Document Intelligence",
      description: "Upload and process PDFs, DOCX etc. MetaWurks extracts, normalizes, and indexes all relevant data.",
      gradient: "from-ai-violet to-ai-peach",
    },
    {
      icon: Brain,
      title: "Contextual Memory",
      description: "Remembers past queries and documents to deliver increasingly accurate, personalized results.",
      gradient: "from-ai-cyan to-ai-mint",
    },
    {
      icon: Shield,
      title: "Secure Access & Audit Logs",
      description: "Role-based permissions, encryption, and full activity logs to keep enterprise data protected and compliant.",
      gradient: "from-ai-peach to-ai-violet",
    },
  ];

  const capabilities = [
    { label: "Embeddings", value: "+500M" },
    { label: "LLM", value: "+5" },
    { label: "Tokens Capacity", value: "+30000" },
    { label: "File Types", value: "+10" },
  ];

  const processSteps = [
    {
      title: "Intelligent Setup",
      description: "We begin by securely ingesting and organizing your business documents—PDFs, spreadsheets, scanned files, and more—readying them for real-time AI interaction.",
      gradient: "from-ai-blue to-ai-cyan",
    },
    {
      title: "Semantic Understanding",
      description: "Our AI interprets your queries in plain English, leveraging advanced domain-specific models to understand your intent and surface highly accurate answers instantly.",
      gradient: "from-ai-violet to-ai-peach",
    },
    {
      title: "Personalized Insight Delivery",
      description: "Over time, MetaWurks learns from your behavior and past queries—delivering increasingly tailored, context-aware insights across your workflows.",
      gradient: "from-ai-cyan to-ai-mint",
    },
  ];

  // const pricingPlans = [
  //   {
  //     name: "Starter",
  //     price: "$19/month",
  //     description: "For small teams trying out AI-powered document Q&A",
  //     features: [
  //       "File Uploads and Ingestion",
  //       "Core AI Chatbot Features Access",
  //       "Basic Search and Context Retention",
  //       "Multi-File Support",
  //     ],
  //     gradient: "from-ai-blue to-ai-cyan",
  //   },
  //   {
  //     name: "Professional",
  //     price: "$29/month",
  //     description: "For growing companies that need collaboration and stronger retrieval",
  //     features: [
  //       "Everything in Starter",
  //       "Scalable Data Storage and Queries",
  //       "Team Collaboration",
  //       "Smart Context Awareness",
  //     ],
  //     gradient: "from-ai-violet to-ai-peach",
  //   },
  //   {
  //     name: "Enterprise",
  //     price: "$99/month",
  //     description: "For larger enterprises requiring security, scalability, and customization",
  //     features: [
  //       "Everything in Professional",
  //       "Flexible Storage Options",
  //       "Custom AI Models",
  //       "Personalized Support and Guidance",
  //     ],
  //     gradient: "from-ai-cyan to-ai-mint",
  //   },
  //   {
  //     name: "Custom Version",
  //     price: "Custom",
  //     description: "Tailored solutions for large enterprises with specific requirements",
  //     features: [
  //       "Everything in Enterprise",
  //       "Customize version for large customers as per need",
  //       "Dedicated 24/7 resources",
  //       "Dedicated Infrastructure",
  //     ],
  //     gradient: "from-ai-peach to-ai-violet",
  //   },
  // ];

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
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground">
              We Deliver Smart AI-Powered Business Insights
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Upload your documents, ask natural questions, and get instant answers tailored to your industry—no tech skills needed.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
            <span className="inline-block text-sm font-medium text-ai-violet mb-4">WHY CHOOSE US</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
              We Deliver Smart{" "}
              <span className="gradient-warm-text">AI-Powered Business Insights</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-display font-semibold tracking-tight mb-3">{index + 1}. {feature.title}</h3>
                <p className="text-muted-foreground font-body font-normal leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Capabilities */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {capabilities.map((cap, index) => (
              <div 
                key={index}
                className="p-6 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 text-center"
              >
                <div className="text-3xl font-display font-bold gradient-text mb-2">{cap.value}</div>
                <div className="text-sm text-muted-foreground">{cap.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empowering Business Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block text-sm font-medium text-ai-violet mb-4">EMPOWERING YOUR BUSINESS</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
              Empowering your business{" "}
              <span className="gradient-warm-text">with AI-driven insights</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Struggling with documents spread across PDFs, spreadsheets, and cloud drives? MetaWurks helps you organize, understand, and query your business data in natural language—no tech skills required. From legal teams to logistics, we make your day-to-day work friction-free and insight-driven.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 hover:scale-[1.02] transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-primary-foreground font-display font-bold text-xl`}>
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-display font-semibold tracking-tight">{step.title}</h3>
                </div>
                <p className="text-muted-foreground font-body font-normal leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section
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
            <span className="inline-block text-sm font-medium text-ai-violet mb-4">PRICING</span>
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
                
                {plan.name === "Custom Version" ? (
                  <Button variant="outline" className="w-full">Contact Us</Button>
                ) : (
                  <Button variant="gradient" className="w-full">Get Started</Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Security Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
              Stay ahead with enterprise-grade{" "}
              <span className="gradient-warm-text">AI insights.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              All your information is completely confidential
            </p>
            <p className="text-lg text-muted-foreground">
              From Insight to Action — <strong>AI</strong> That Moves Your Business Forward
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Product;

