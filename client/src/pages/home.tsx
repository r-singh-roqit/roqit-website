import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import BenefitsSection from "@/components/benefits-section";
import StatsSection from "@/components/stats-section";
import FleetDashboard from "@/components/fleet-dashboard";
import DashboardPreview from "@/components/dashboard-preview";
import SolutionsSection from "@/components/solutions-section";
import PlatformMatrix from "@/components/platform-matrix";
import MobileFeatures from "@/components/mobile-features";
import SustainabilitySection from "@/components/sustainability-section";
import Testimonials from "@/components/testimonials";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <BenefitsSection />
      <StatsSection />
      <FleetDashboard />
      <DashboardPreview />
      <SolutionsSection />
      <PlatformMatrix />
      <MobileFeatures />
      <SustainabilitySection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
