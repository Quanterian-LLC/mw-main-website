import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import AboutAnswerSections, { aboutFaqs } from "@/components/AboutAnswerSections";
import { SITE, organizationSchema, websiteSchema } from "@/lib/seo";
import { Rocket, Users, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";


// AboutPage + BreadcrumbList + FAQPage. Every FAQ below is rendered visibly by
// <AboutAnswerSections />. No Person entities are emitted: the team records in this file
// carry names and roles but no verified credentials, photos or profile URLs, and inventing
// them is not an option. Add Person nodes only once real details are supplied.
const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    {
      "@type": "AboutPage",
      "@id": `${SITE}/about-us#webpage`,
      url: `${SITE}/about-us`,
      name: "About MetaWurks",
      description:
        "MetaWurks is an AI document intelligence platform for document-heavy small businesses, built by SkyllMakers.",
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#organization` },
      breadcrumb: { "@id": `${SITE}/about-us#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE}/about-us#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE}/about-us` },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/about-us#faq`,
      isPartOf: { "@id": `${SITE}/about-us#webpage` },
      mainEntity: aboutFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function AboutUs() {
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
      description: "OAuth tokens and sensitive data stored encrypted, HTTPS in transit, and access controls. Full terms in our privacy policy.",
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



  return (
    <main className="min-h-screen bg-background">
      <JsonLd data={aboutJsonLd} />
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
              About MetaWurks
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              MetaWurks is an{" "}
              <strong className="text-foreground">AI document intelligence platform</strong>{" "}
              for document-heavy small businesses.
            </p>
            <p className="text-lg text-muted-foreground">
              Upload your PDFs, spreadsheets and other business files, or connect Google
              Drive or OneDrive, then ask questions in plain English and get answers drawn
              from your own documents &mdash; each one citing the passage it came from.
            </p>
          </div>
        </div>
      </section>

      <AboutAnswerSections />

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
            <span className="inline-block text-sm font-medium text-ai-violet mb-4">TEAM</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
              Who builds MetaWurks
            </h2>
            {/* The names and roles below are the only team details recorded anywhere in this
                repository. No credentials, photos, biographies or profile links exist, and
                none were invented. Supply real details to expand this section — and only
                then add Person schema. */}
            <p className="text-xl text-muted-foreground">
              MetaWurks is built by SkyllMakers.
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
              Questions about your documents or which plan fits?
            </h2>
            <Link href="/contact" className="group relative inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl text-base font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg">
              <div 
                className="absolute inset-0 rounded-2xl transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, hsl(220, 70%, 55%), hsl(220, 70%, 50%), hsl(210, 50%, 70%))',
                }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-ai-blue/0 via-ai-violet/0 to-ai-peach/0 group-hover:from-ai-blue/10 group-hover:via-ai-violet/10 group-hover:to-ai-peach/10 transition-all duration-300" />
              <span className="relative z-10 text-white font-semibold">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

