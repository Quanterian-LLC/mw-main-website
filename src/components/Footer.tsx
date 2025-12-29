import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const links = {
    Product: ["Features", "Pricing", "Changelog", "Roadmap"],
    Resources: ["Documentation", "API Reference", "Tutorials", "Blog"],
    Company: ["About", "Careers", "Press", "Contact"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };

  return (
    <footer className="py-20 border-t border-border/50 relative overflow-hidden">
      {/* Background accent */}
      <div 
        className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, hsl(220, 90%, 60%), transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-ai-blue via-ai-violet to-ai-peach flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">N</span>
              </div>
              <span className="font-display font-bold text-xl">NeuralOS</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-xs">
              The unified platform for multi-LLM orchestration. Built for the future of AI collaboration.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 NeuralOS. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Made with ✨ for the AI era</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
