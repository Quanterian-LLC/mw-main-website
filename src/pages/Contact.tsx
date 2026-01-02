import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "admin@metawurks.com",
      link: "mailto:admin@metawurks.com",
      gradient: "from-ai-blue to-ai-cyan",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 914-265-5072",
      link: "tel:+19142655072",
      gradient: "from-ai-violet to-ai-peach",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "16192 Coastal Hwy, Lewes, DE 19958",
      link: "https://maps.google.com/?q=16192+Coastal+Hwy,+Lewes,+DE+19958",
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

      {/* Contact Methods - First */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith("http") ? "_blank" : undefined}
                rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-display font-semibold tracking-tight mb-2">{method.title}</h3>
                <p className="text-muted-foreground">{method.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form - Second */}
      <section className="py-32 relative overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(270, 80%, 60%, 0.3), transparent 60%)",
            filter: "blur(100px)",
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight mb-6">
                We will be glad to hear from you!
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-6 p-8 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-background border border-border/50 focus:outline-none focus:ring-2 focus:ring-ai-violet transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-background border border-border/50 focus:outline-none focus:ring-2 focus:ring-ai-violet transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-background border border-border/50 focus:outline-none focus:ring-2 focus:ring-ai-violet transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-2xl bg-background border border-border/50 focus:outline-none focus:ring-2 focus:ring-ai-violet transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  className="w-4 h-4 rounded border-border/50"
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree to terms and conditions.
                </label>
              </div>

              <button 
                type="submit" 
                className="group relative inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl text-base font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg w-full"
              >
                {/* Gradient background using theme colors */}
                <div 
                  className="absolute inset-0 rounded-2xl transition-all duration-500"
                  style={{
                    background: 'linear-gradient(135deg, hsl(220, 70%, 55%), hsl(220, 70%, 50%), hsl(210, 50%, 70%))',
                  }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-ai-blue/0 via-ai-violet/0 to-ai-peach/0 group-hover:from-ai-blue/10 group-hover:via-ai-violet/10 group-hover:to-ai-peach/10 transition-all duration-300" />
                {/* Content */}
                <span className="relative z-10 flex items-center gap-2 text-white font-semibold">
                  <Send className="w-5 h-5" />
                  Submit
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Early Access Section - Third */}
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
            <span className="inline-block text-sm font-medium text-ai-violet mb-4">EARLY ACCESS</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight mb-6">
              Get Early Access to MetaWurks
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Request early access and we'll send you a magic link to create your account. The link will be active for 48 hours.
            </p>
            <button className="group relative inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl text-base font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg">
              {/* Gradient background using theme colors */}
              <div 
                className="absolute inset-0 rounded-2xl transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, hsl(220, 70%, 55%), hsl(220, 70%, 50%), hsl(210, 50%, 70%))',
                }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-ai-blue/0 via-ai-violet/0 to-ai-peach/0 group-hover:from-ai-blue/10 group-hover:via-ai-violet/10 group-hover:to-ai-peach/10 transition-all duration-300" />
              {/* Content */}
              <span className="relative z-10 text-white font-semibold">
                Request Early Access
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 relative overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(270, 80%, 60%, 0.3), transparent 60%)",
            filter: "blur(100px)",
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center p-12 rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight mb-4">
              Subscribe now to Our Newsletter and get the Coupon code.
            </h2>
            <p className="text-muted-foreground mb-8">
              All your information is completely confidential
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-2xl bg-background border border-border/50 focus:outline-none focus:ring-2 focus:ring-ai-violet"
              />
              <button className="group relative inline-flex items-center justify-center gap-2 h-11 px-6 rounded-2xl text-sm font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg">
                {/* Gradient background using theme colors */}
                <div 
                  className="absolute inset-0 rounded-2xl transition-all duration-500"
                  style={{
                    background: 'linear-gradient(135deg, hsl(220, 70%, 55%), hsl(220, 70%, 50%), hsl(210, 50%, 70%))',
                  }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-ai-blue/0 via-ai-violet/0 to-ai-peach/0 group-hover:from-ai-blue/10 group-hover:via-ai-violet/10 group-hover:to-ai-peach/10 transition-all duration-300" />
                {/* Content */}
                <span className="relative z-10 text-white font-semibold">
                  Sign Up
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;