"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLink } from "./NavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="MetaWurks Logo"
              width={200}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Home
            </NavLink>
            <NavLink
              href="/product"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Product
            </NavLink>
            <NavLink
              href="/pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Pricing
            </NavLink>
            <NavLink
              href="/about-us"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              About Us
            </NavLink>
            <NavLink
              href="/blog"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Blog
            </NavLink>
            <NavLink
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Contact
            </NavLink>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href={process.env.NEXT_PUBLIC_LOGIN_URL!}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link
              href={process.env.NEXT_PUBLIC_SIGNUP_URL || "/contact#early-access"}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 h-11 px-6 rounded-2xl text-sm font-medium overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
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
              <span className="relative z-10 text-white font-semibold">
                Get Started
              </span>
            </Link>
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
            <NavLink
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              activeClassName="text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              href="/product"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              activeClassName="text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Product
            </NavLink>
            <NavLink
              href="/pricing"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              activeClassName="text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </NavLink>
            <NavLink
              href="/about-us"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              activeClassName="text-foreground"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              href="/blog"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              activeClassName="text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              activeClassName="text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
              <Link
                href={process.env.NEXT_PUBLIC_LOGIN_URL!}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                <Button variant="ghost" className="w-full justify-center">Sign In</Button>
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_SIGNUP_URL || "/contact#early-access"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group relative inline-flex items-center justify-center gap-2 h-11 px-6 rounded-2xl text-sm font-medium overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg w-full"
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
                <span className="relative z-10 text-white font-semibold">
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;