import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustIndicators from "@/components/TrustIndicators";
import ServicesSection from "@/components/ServicesSection";
import ValueProposition from "@/components/ValueProposition";
import InvestmentCalculator from "@/components/InvestmentCalculator";
import AboutSection from "@/components/AboutSection";
import Process from "@/components/Process";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* Navigation */}
      <Navbar />

      {/* Hero & Trust Indicators */}
      <HeroSection />
      <TrustIndicators />

      {/* Services & Value */}
      <ServicesSection />
      <ValueProposition />

      {/* Interactive Tool */}
      <InvestmentCalculator />

      {/* About & Process */}
      <AboutSection />
      <Process />

      {/* Insights */}
      <InsightsSection />

      {/* Contact & Footer */}
      <ContactSection />
      <Footer />
    </main>
  );
}
