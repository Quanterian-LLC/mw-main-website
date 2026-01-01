import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Rocket, Users, Shield, TrendingUp, Upload, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  const coreValues = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Bringing the latest AI solutions to make your workflow seamless.",
      gradient: "from-ai-blue to-ai-cyan",
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "We tailor every feature to your business needs and goals.",
      gradient: "from-ai-violet to-ai-peach",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data is protected with enterprise-grade security.",
      gradient: "from-ai-cyan to-ai-mint",
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description: "We focus on delivering measurable, impactful results.",
      gradient: "from-ai-peach to-ai-violet",
    },
  ];

  const teamMembers = [
    {
      name: "Abdul S",
      role: "CEO",
      gradient: "from-ai-blue to-ai-cyan",
    },
    {
      name: "Andrew John",
      role: "Co Founder",
      gradient: "from-ai-violet to-ai-peach",
    },
    {
      name: "Aditya Rai",
      role: "Director",
      gradient: "from-ai-cyan to-ai-mint",
    },
    {
      name: "Sachin",
      role: "VP Engineering",
      gradient: "from-ai-peach to-ai-violet",
    },
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
              Committed to People and the future
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              AI-powered insights for your <strong className="text-foreground">business</strong>
            </p>
            <p className="text-lg text-muted-foreground">
              Instantly analyze PDFs, spreadsheets, and more to answer domain-specific questions
            </p>
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

      {/* Core Values Section */}
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
            <span className="inline-block text-sm font-medium text-ai-violet mb-4">WHY BUSINESSES LOVE US</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 hover:scale-[1.02] transition-all duration-500 text-center"
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-display font-semibold tracking-tight mb-3">{value.title}</h3>
                <p className="text-muted-foreground font-body font-normal leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block text-sm font-medium text-ai-violet mb-4">ABOUT OUR EXPERT</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
              Entrust Your Project To Our Specialists
            </h2>
            <p className="text-xl text-muted-foreground">
              Our IT services converge business and technology experts to help to manage business categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 hover:scale-[1.02] transition-all duration-500 text-center"
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-primary-foreground font-display font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <h3 className="text-xl font-display font-semibold tracking-tight mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(270, 80%, 60%, 0.3), transparent 60%)",
            filter: "blur(100px)",
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight mb-6">
              We will be glad to hear from you!
            </h2>
            <Button variant="gradient" size="lg">Contact Us</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUs;