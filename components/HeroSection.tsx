"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import FloatingOrbs from "./FloatingOrbs";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force a repaint to ensure smooth first animation
    if (headlineRef.current) {
      // Trigger a reflow to ensure browser is ready
      void headlineRef.current.offsetHeight;
      
      // Small delay to ensure everything is rendered
      requestAnimationFrame(() => {
        if (headlineRef.current) {
          headlineRef.current.style.visibility = 'visible';
        }
      });
    }
  }, []);

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
            <span className="text-sm text-muted-foreground">GPT-5, Claude, Gemini, DeepSeek, Grok and more.</span>
          </div>

          {/* Headline */}
          <h1 
            ref={headlineRef}
            className="font-display font-extrabold tracking-tight leading-tight mb-6"
            style={{ visibility: 'hidden' }}
          >
            <div className="flex flex-wrap justify-center items-baseline gap-3 md:gap-4">
              {/* "A" */}
              <span
                className="text-foreground inline-block animate-fade-in-fade-out-continuous"
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  fontWeight: 600,
                  animationDelay: '0s',
                  animationDuration: '6s'
                }}
              >
                A
              </span>

              {/* "Single" */}
              <span
                className="text-foreground inline-block animate-fade-in-fade-out-continuous"
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  fontWeight: 600,
                  animationDelay: '0.3s',
                  animationDuration: '6s'
                }}
              >
                Single
              </span>

              {/* "Interface" */}
              <span
                className="gradient-text inline-block animate-fade-in-fade-out-continuous animate-gradient-flow"
                style={{
                  fontSize: 'clamp(3rem, 9vw, 6rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  fontWeight: 600,
                  animationDelay: '0.6s',
                  animationDuration: '6s',
                  backgroundSize: '200% auto'
                }}
              >
                Interface
              </span>

              {/* "for" */}
              <span
                className="text-foreground inline-block animate-fade-in-fade-out-continuous"
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  fontWeight: 600,
                  animationDelay: '0.9s',
                  animationDuration: '6s'
                }}
              >
                for
              </span>

              {/* "Every" */}
              <span
                className="text-foreground inline-block animate-fade-in-fade-out-continuous"
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  fontWeight: 600,
                  animationDelay: '1.2s',
                  animationDuration: '6s'
                }}
              >
                Every
              </span>

              {/* "AI" */}
              <span
                className="gradient-text inline-block animate-fade-in-fade-out-continuous animate-gradient-flow"
                style={{
                  fontSize: 'clamp(3rem, 9vw, 6rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  fontWeight: 600,
                  animationDelay: '1.5s',
                  animationDuration: '6s',
                  backgroundSize: '200% auto'
                }}
              >
                AI
              </span>

              {/* "Model" */}
              <span
                className="text-foreground inline-block animate-fade-in-fade-out-continuous"
                style={{
                  fontSize: 'clamp(3rem, 9vw, 6rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  fontWeight: 600,
                  animationDelay: '1.8s',
                  animationDuration: '6s'
                }}
              >
                Model
              </span>
            </div>
          </h1>
          {/* Subheadline */}
          <p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Upload, ask, and get insights instantly—
            built for busy enterprises
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <button className="group relative inline-flex items-center justify-center gap-2 h-16 px-12 rounded-3xl text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl">
              {/* Gradient background using theme colors - same as Get Started */}
              <div
                className="absolute inset-0 rounded-3xl transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, hsl(220, 70%, 55%), hsl(220, 70%, 50%), hsl(210, 50%, 70%))',
                }}
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-ai-blue/0 via-ai-violet/0 to-ai-peach/0 group-hover:from-ai-blue/10 group-hover:via-ai-violet/10 group-hover:to-ai-peach/10 transition-all duration-300" />
              {/* Content */}
              <span className="relative z-10 flex items-center gap-2 text-white font-semibold">
                <Play className="w-5 h-5" />
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
                { top: "10%", left: "20%", color: "from-ai-blue to-ai-cyan", label: "GPT-5", delay: 0 },
                { top: "15%", left: "70%", color: "from-ai-blue to-ai-cyan", label: "Claude", delay: 1 },
                { top: "70%", left: "15%", color: "from-ai-peach to-ai-mint", label: "Gemini", delay: 2 },
                { top: "65%", left: "75%", color: "from-ai-cyan to-ai-blue", label: "Llama", delay: 0.5 },
                { top: "40%", left: "5%", color: "from-ai-mint to-ai-blue", label: "Mistral", delay: 1.5 },
                { top: "35%", left: "90%", color: "from-ai-blue to-ai-cyan", label: "Cohere", delay: 2.5 },
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