import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EnvironmentsSection from "@/components/EnvironmentsSection";
import OrchestrationSection from "@/components/OrchestrationSection";
import UseCasesSection from "@/components/UseCasesSection";
import DashboardPreview from "@/components/DashboardPreview";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <EnvironmentsSection />
      <OrchestrationSection />
      <UseCasesSection />
      <DashboardPreview />
      <TrustSection />
      <Footer />
    </main>
  );
};

export default Index;
