"use client";

import { X, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const links = {
    Product: [
      { name: "Features", path: "/product" },
      { name: "Pricing", path: "/pricing" },
    ],
    Company: [
      { name: "About Us", path: "/about-us" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ],
    Legal: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms-of-service" },
    ],
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-12 mb-16 items-start">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col">
            <Link href="/" onClick={handleLinkClick} className="mb-6">
              <Image
                src="/MetaWurks Logo-11.svg"
                alt="MetaWurks Logo"
                width={220}
                height={55}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs">
              From Insight to Action — AI That Moves Your Business Forward
            </p>
            <div className="flex gap-4">
              {[
                { icon: X, href: "https://x.com/Metawurks_ai" },
                { icon: Instagram, href: "https://instagram.com/metawurks/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/metawurks/about/" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="flex flex-col">
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      onClick={handleLinkClick}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.google.com/?q=16192+Coastal+Hwy,+Lewes,+DE+19958"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>16192 Coastal Hwy, Lewes, DE 19958</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+19142655072"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+1 914-265-5072</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@metawurks.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>admin@metawurks.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex justify-center items-center">
          <p className="text-sm text-muted-foreground text-center">
            © 2026 MetaWurks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;