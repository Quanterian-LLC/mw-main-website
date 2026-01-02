import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Terms of Service for MetaWurks Main App
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="rounded-3xl backdrop-blur-xl bg-card/60 border border-border/50 p-8 md:p-12">
              <p className="text-muted-foreground mb-8">
                Welcome to MetaWurks Main App ("Service"). By using our Service, you agree to these Terms and our Privacy Policy. If you do not agree, please stop using the Service.
              </p>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">1. Service Overview</h2>
              <p className="text-muted-foreground mb-4">
                MetaWurks Main App provides:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>AI-powered chat and document analysis.</li>
                <li>File upload and management with Google Drive and OneDrive.</li>
                <li>Retrieval-Augmented Generation (RAG) and multi-model AI support.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">2. Accounts</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>You must be at least 13 years old.</li>
                <li>Provide accurate information when creating an account.</li>
                <li>You are responsible for keeping your login secure and for activity under your account.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">3. Acceptable Use</h2>
              <p className="text-muted-foreground mb-4">
                You may not use the Service to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>Break laws or infringe intellectual property rights.</li>
                <li>Upload harmful, abusive, or malicious content.</li>
                <li>Spread spam, fraud, or malware.</li>
                <li>Attempt to hack, reverse engineer, or misuse the system.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">4. Content & Intellectual Property</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>You keep ownership of the content you upload.</li>
                <li>You give us permission to process it for Service delivery (e.g., vectorization, AI analysis).</li>
                <li>AI-generated responses belong to MetaWurks; we don't guarantee accuracy.</li>
                <li>Our software, design, and branding are protected by law.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">5. Privacy & Data</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>We collect and use your data only to provide and improve the Service.</li>
                <li>See our <a href="/privacy" className="text-ai-violet hover:underline">Privacy Policy</a> for details.</li>
                <li>We do not sell your personal information.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">6. Service Availability</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>We aim for high availability but cannot guarantee uninterrupted access.</li>
                <li>Features may change or be discontinued without notice.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">7. Payments</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>Basic features are free.</li>
                <li>Premium features may require payment (non-refundable unless stated).</li>
              </ul>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">8. Liability</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>The Service is provided "as is."</li>
                <li>We are not liable for damages or reliance on AI responses.</li>
                <li>Our total liability is limited to the amount you paid us.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">9. Termination</h2>
              <p className="text-muted-foreground mb-4">
                We may suspend or close accounts for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>Violating these Terms.</li>
                <li>Non-payment of fees.</li>
                <li>Security risks or misuse.</li>
              </ul>
              <p className="text-muted-foreground mb-8">
                You may close your account anytime.
              </p>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">10. Disputes</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>Governed by the laws of [Your Jurisdiction].</li>
                <li>Disputes will first try to be resolved informally, then through arbitration where allowed.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">11. Contact</h2>
              <div className="space-y-2 text-muted-foreground mb-8">
                <p><strong className="text-foreground">Email:</strong> admin@metawurks.com</p>
                <p><strong className="text-foreground">Address:</strong> 16192 Coastal Hwy, Lewes, DE 19958</p>
                <p><strong className="text-foreground">Phone:</strong> +1 914-265-5072</p>
              </div>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">12. Updates</h2>
              <p className="text-muted-foreground">
                We may update these Terms. Continued use of the Service means you accept the new Terms.
              </p>
              <p className="text-muted-foreground mt-4">
                These Terms of Service are effective as of the date listed above and will remain in effect until modified or terminated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}