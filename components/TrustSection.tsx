// ############################################################################
// #  DO NOT IMPORT THIS COMPONENT. UNVERIFIED SECURITY CLAIMS.               #
// ############################################################################
//
// This component is intentionally not imported by any page. Rendering it would put
// nine security and availability claims in front of customers, none of which is
// supported anywhere in this repository:
//
//   :12  "SOC 2 Type II"                        no certification evidence exists
//   :13  "End-to-End Encryption"                contradicts app/privacy-policy/page.tsx,
//                                               which claims encryption of OAuth tokens
//                                               and sensitive data plus HTTPS — that is
//                                               not end-to-end encryption
//   :14  "Data Residency — Choose your region"  no evidence
//   :15  "99.99% Uptime — Enterprise SLA"       no evidence, no SLA document
//   :43  "SSO with SAML, OIDC, and OAuth"       no evidence
//   :44  "Granular role-based access control"   no evidence
//   :45  "Audit logs and compliance reporting"  no evidence
//   :46  "Dedicated support and custom SLAs"    no evidence
//
// Publishing an unearned certification claim such as SOC 2 Type II carries legal and
// contractual exposure well beyond an SEO concern.
//
// The file is kept rather than deleted so the intended layout survives for whenever the
// underlying capabilities are real and documented. Before importing it, each line above
// must be independently verified and the unverifiable ones deleted — not reworded.
//
// See SEO_AEO_IMPLEMENTATION_REPORT.md §6 and FACTUAL_CONFLICTS.md §5.

import { Shield, Lock, Server, Globe, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const TrustSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Trust badges */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Shield, title: "SOC 2 Type II", description: "Enterprise-grade security" },
              { icon: Lock, title: "End-to-End Encryption", description: "Your data stays yours" },
              { icon: Server, title: "Data Residency", description: "Choose your region" },
              { icon: Globe, title: "99.99% Uptime", description: "Enterprise SLA" },
            ].map((badge, i) => (
              <div 
                key={i}
                className="p-6 rounded-3xl glass-card text-center group hover:scale-[1.02] transition-transform"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-ai-blue/10 to-ai-violet/10 flex items-center justify-center group-hover:from-ai-blue/20 group-hover:to-ai-violet/20 transition-colors">
                  <badge.icon className="w-7 h-7 text-ai-violet" />
                </div>
                <h4 className="font-semibold mb-1">{badge.title}</h4>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            ))}
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-sm font-medium text-ai-blue mb-4">ENTERPRISE READY</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Scale with{" "}
              <span className="gradient-text">confidence</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              From startup to enterprise, NeuralOS grows with you. Built on battle-tested infrastructure trusted by thousands of teams.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "SSO with SAML, OIDC, and OAuth support",
                "Granular role-based access control",
                "Audit logs and compliance reporting",
                "Dedicated support and custom SLAs",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-ai-mint flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button variant="gradient" size="lg">Talk to Sales</Button>
              <Button variant="glass" size="lg">View Security Docs</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
