import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Privacy Policy for MetaWurks Main App
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
                MetaWurks ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and share information when you use the MetaWurks Main App ("Service").
              </p>
              <p className="text-muted-foreground mb-12">
                By using our Service, you agree to the practices described in this Privacy Policy.
              </p>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">1. Information We Collect</h2>

              <h3 className="text-2xl font-display font-semibold tracking-tight mb-4 mt-8">1.1 Account Information</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>Name, email address, and login credentials when you create an account.</li>
                <li>Profile preferences and settings you choose within the Service.</li>
              </ul>

              <h3 className="text-2xl font-display font-semibold tracking-tight mb-4 mt-8">1.2 Google and OneDrive Data</h3>
              <p className="text-muted-foreground mb-4">
                When you connect your Google Drive or OneDrive account, we may collect:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>File and folder metadata (e.g., names, IDs, timestamps, paths).</li>
                <li>File content you explicitly upload, select, or grant us access to.</li>
                <li>OAuth tokens (securely stored and encrypted) that allow us to access your files with your permission.</li>
              </ul>

              <h3 className="text-2xl font-display font-semibold tracking-tight mb-4 mt-8">1.3 Chat and Usage Data</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>Interactions with our AI chat service (input prompts, responses).</li>
                <li>Diagnostic logs (device type, IP address, error logs) for service improvement.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">2. How We Use Your Data</h2>
              <p className="text-muted-foreground mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>Provide AI-powered chat and document analysis.</li>
                <li>Enable you to add, edit, or delete files/folders in Google Drive and OneDrive.</li>
                <li>Vectorize your content (convert into embeddings) to make documents searchable and retrievable within the app.</li>
                <li>Maintain account security and prevent unauthorized access.</li>
                <li>Improve and personalize the Service experience.</li>
                <li>Comply with legal obligations.</li>
              </ul>
              <p className="text-muted-foreground mb-8">
                We do not sell, rent, or share your personal information with advertisers.
              </p>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">3. Data Storage and Retention</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>File content used for vectorization is stored securely in our database/vector store.</li>
                <li>We retain data only as long as needed to provide the Service, or until you delete your content or account.</li>
                <li>OAuth tokens are stored in encrypted form and are automatically revoked if you disconnect your account.</li>
              </ul>
              <p className="text-muted-foreground mb-8">
                Upon account deletion, all associated user data is removed from our systems in accordance with our retention policy.
              </p>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">4. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                We only share your data in the following cases:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>Google APIs and OneDrive APIs – to access your files when you grant permission.</li>
                <li>AI Providers (OpenAI, Google AI) – to generate responses to your queries.</li>
                <li>Cloud Service Providers (Google Cloud Platform) – for hosting and secure storage.</li>
                <li>Legal Requirements – when required by law, regulation, or government request.</li>
              </ul>
              <p className="text-muted-foreground mb-8">
                We do not sell or disclose personal data to third parties for advertising or marketing purposes.
              </p>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">5. User Control and Choices</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>You may revoke our access to your Google account at any time via the Google Security Settings.</li>
                <li>You may disconnect OneDrive access through your Microsoft account settings.</li>
                <li>You may request deletion of your MetaWurks account, which will delete your associated data from our systems.</li>
                <li>You may contact us directly to request access, correction, or deletion of your data.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">6. Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement industry-standard measures to protect your data, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>Encryption of OAuth tokens and sensitive data.</li>
                <li>HTTPS for secure data transmission.</li>
                <li>Access controls to prevent unauthorized use.</li>
              </ul>
              <p className="text-muted-foreground mb-8">
                However, no system is completely secure. We cannot guarantee absolute protection against all threats.
              </p>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">7. Changes to this Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. When we do, we will:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                <li>Post the updated version at <a href="https://metawurks.com/privacy-policy" className="text-ai-violet hover:underline">https://metawurks.com/privacy-policy</a>.</li>
                <li>Notify users of material changes via email or in-app notifications.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold tracking-tight mb-6 mt-12">8. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or our practices, please contact us at:
              </p>
              <div className="space-y-2 text-muted-foreground mb-8">
                <p><strong className="text-foreground">Email:</strong> admin@metawurks.com</p>
                <p><strong className="text-foreground">Address:</strong> 16192 Coastal Hwy, Lewes, DE 19958</p>
                <p><strong className="text-foreground">Phone:</strong> +1 914-265-5072</p>
              </div>
              <p className="text-muted-foreground">
                This Privacy Policy is effective as of the date listed above and will remain in effect until modified or terminated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
