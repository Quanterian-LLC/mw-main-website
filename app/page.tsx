import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EnvironmentsSection from "@/components/EnvironmentsSection";
import OrchestrationSection from "@/components/OrchestrationSection";
import UseCasesSection from "@/components/UseCasesSection";
import DashboardPreview from "@/components/DashboardPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <EnvironmentsSection />
      <OrchestrationSection />
      <UseCasesSection />
      <DashboardPreview />
      <Footer />
    </main>
  );
}

