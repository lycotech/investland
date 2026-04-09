import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustIndicators from "@/components/TrustIndicators";
import ServicesSection from "@/components/ServicesSection";
import ValueProposition from "@/components/ValueProposition";
import InvestmentCalculator from "@/components/InvestmentCalculator";
import AboutSection from "@/components/AboutSection";
import BoardSection from "@/components/BoardSection";
import Process from "@/components/Process";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://www.investtrustam.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Invest-Trust Asset Management Limited",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Professional portfolio management, wealth advisory, and investment solutions for high-net-worth individuals, families, and institutions in Nigeria.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
    addressLocality: "Lagos",
  },
  areaServed: "NG",
  serviceType: ["Asset Management", "Wealth Advisory", "Portfolio Management", "Investment Advisory"],
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Invest-Trust Asset Management",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/insights?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />

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

        {/* About, Board & Process */}
        <AboutSection />
        <BoardSection />
        <Process />

        {/* Insights */}
        <InsightsSection />

        {/* Contact & Footer */}
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
