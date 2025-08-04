import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import BenefitsSection from "@/components/benefits-section";
import StatsSection from "@/components/stats-section";
import FleetIntelligence from "@/components/fleet-intelligence";
import RoqitFlowDiagram from "@/components/roqit-flow-diagram";
import AnalyticsShowcase from "@/components/analytics-showcase";
import SolutionsSection from "@/components/solutions-section";
import PlatformMatrix from "@/components/platform-matrix";
import MobileFeatures from "@/components/mobile-features";
import Testimonials from "@/components/testimonials";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      <HeroSection />
      <BenefitsSection />
      <StatsSection />
      <FleetIntelligence />
      <RoqitFlowDiagram />
      <AnalyticsShowcase />
      <SolutionsSection />
      <PlatformMatrix />
      <MobileFeatures />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
