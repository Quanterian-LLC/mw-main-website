
"use client";

import FloatingOrbs from "./FloatingOrbs";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const headlineRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(false);
  const [currentHeadline, setCurrentHeadline] = useState(0);

  // The H1 is now STATIC.
  //
  // It previously rotated between three headlines on an 8-second interval, so a crawler
  // captured whichever frame it happened to hit — the most important heading on the domain
  // was non-deterministic. Worse, the words rendered as adjacent <span>s with no whitespace
  // between them, so the H1's text content read as the single unparseable token
  // "All-in-OneAIHubforBusiness" to crawlers and screen readers alike. Both defects are
  // still live on metawurks.com today.
  //
  // Motion is preserved by rotating the sub-line beneath, which carries no SEO weight.
  // Each sub-line states something the repository supports:
  //   1. app/docs/page.tsx:419-423, :435-439  (upload, then ask)
  //   2. app/docs/page.tsx:100, :460          (retrieval over your files; cited answers)
  //   3. app/docs/page.tsx:103, :650-651      (Google Drive / OneDrive import)
  const subheadlines = [
    "Upload your documents once, then ask questions in plain English.",
    "Answers are drawn from your own files and cite the passage they came from.",
    "Connect Google Drive or OneDrive and import whole folders.",
  ];

  useEffect(() => {
    if (isMountedRef.current) return;
    isMountedRef.current = true;

    intervalRef.current = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % subheadlines.length);
    }, 8000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      isMountedRef.current = false;
    };
  }, [subheadlines.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <FloatingOrbs />

      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 rounded-full bg-ai-cyan animate-pulse" />
            <span className="text-sm text-muted-foreground">GPT, Claude, Gemini, Grok, DeepSeek and Perplexity.</span>
          </div>

          {/* Headline — static, single string, normal inline text flow so the words are
              separated by real whitespace in the DOM. */}
          <h1
            ref={headlineRef}
            className="font-display font-extrabold tracking-tight mb-6 text-foreground"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 4.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 600,
            }}
          >
            AI That Answers Questions From{" "}
            <span className="gradient-text animate-gradient-flow" style={{ backgroundSize: "200% auto" }}>
              Your Own Business Documents
            </span>
          </h1>

          {/* Sub-line — this is the element that rotates now. min-h keeps the CTA below it
              from shifting as the three lines differ in length. */}
          <p
            key={`subtitle-${currentHeadline}`}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 min-h-[4.5rem] opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {subheadlines[currentHeadline]}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <button 
              onClick={() => window.location.href = 'https://calendly.com/gtm-metawurks/30min?utm_source=hero'}
              className="group relative inline-flex items-center justify-center gap-2 h-16 px-12 rounded-3xl text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              {/* Gradient background using theme colors - same as Get Started */}
              <div
                className="absolute inset-0 rounded-3xl transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, hsl(220, 70%, 55%), hsl(220, 70%, 50%), hsl(210, 50%, 70%))',
                }}
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-ai-blue/0 via-ai-violet/0 to-ai-peach/0 group-hover:from-ai-blue/10 group-hover:via-ai-violet/10 group-hover:to-ai-peach/10 transition-all duration-300" />
              {/* Content */}
              <span className="relative z-10 text-white font-semibold">
                Book a Demo
              </span>
            </button>
          </div>

          {/* Abstract Visualization */}
          <div
            className="relative mt-20 opacity-0 animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="relative aspect-[16/9] max-w-4xl mx-auto">
              {/* Central node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-ai-blue via-ai-blue to-ai-cyan animate-pulse-soft shadow-2xl glow-effect flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-background/80 backdrop-blur flex items-center justify-center">
                  <span className="font-display font-bold text-2xl gradient-text">N</span>
                </div>
              </div>

              {/* Orbiting nodes */}
              {[
                { top: "10%", left: "20%", color: "from-ai-blue to-ai-cyan", label: "GPT", delay: 0 },
                { top: "15%", left: "70%", color: "from-ai-blue to-ai-cyan", label: "Claude", delay: 1 },
                { top: "70%", left: "15%", color: "from-ai-peach to-ai-mint", label: "Gemini", delay: 2 },
                { top: "65%", left: "75%", color: "from-ai-cyan to-ai-blue", label: "Grok", delay: 0.5 },
                { top: "40%", left: "5%", color: "from-ai-mint to-ai-blue", label: "DeepSeek", delay: 1.5 },
                { top: "35%", left: "90%", color: "from-ai-blue to-ai-cyan", label: "Perplexity", delay: 2.5 },
              ].map((node, i) => (
                <div
                  key={i}
                  className="absolute animate-float"
                  style={{
                    top: node.top,
                    left: node.left,
                    animationDelay: `${node.delay}s`
                  }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${node.color} shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer`}>
                    <span className="text-primary-foreground text-xs font-medium">{node.label}</span>
                  </div>
                  {/* Connection line */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{
                    left: "50%",
                    top: "50%",
                    width: "200%",
                    height: "200%",
                    transform: "translate(-25%, -25%)"
                  }}>
                    <line
                      x1="25%"
                      y1="25%"
                      x2="50%"
                      y2="50%"
                      stroke="url(#gradient)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <defs>
                      <linearGradient id="gradient">
                        <stop offset="0%" stopColor="hsl(220, 90%, 60%)" />
                        <stop offset="100%" stopColor="hsl(220, 80%, 60%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;