import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-ai-blue via-ai-violet to-ai-peach flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">N</span>
            </div>
            <span className="font-display font-bold text-xl">NeuralOS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#environments" className="text-muted-foreground hover:text-foreground transition-colors">
              Environments
            </a>
            <a href="#orchestration" className="text-muted-foreground hover:text-foreground transition-colors">
              Orchestration
            </a>
            <a href="#usecases" className="text-muted-foreground hover:text-foreground transition-colors">
              Use Cases
            </a>
            <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="gradient">Get Started</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 p-6">
          <div className="flex flex-col gap-4">
            <a href="#environments" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Environments
            </a>
            <a href="#orchestration" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Orchestration
            </a>
            <a href="#usecases" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Use Cases
            </a>
            <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Dashboard
            </a>
            <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
              <Button variant="ghost" className="w-full justify-center">Sign In</Button>
              <Button variant="gradient" className="w-full justify-center">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
