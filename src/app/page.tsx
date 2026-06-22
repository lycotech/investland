import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MandateBar from "@/components/MandateBar";
import WealthPillars from "@/components/WealthPillars";
import WhyWealthFails from "@/components/WhyWealthFails";
import SolutionsSection from "@/components/SolutionsSection";
import InvestmentPhilosophy from "@/components/InvestmentPhilosophy";
import WhyChooseUs from "@/components/WhyChooseUs";
import WealthBlueprintSection from "@/components/WealthBlueprintSection";
import InsightsSection from "@/components/InsightsSection";
import OnboardingExpectations from "@/components/OnboardingExpectations";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://www.investtrustasset.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Invest-Trust Asset Management Limited",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Building Africa's wealth infrastructure through disciplined capital management, institutional-grade research and purpose-built investment solutions.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
    addressLocality: "Lagos",
  },
  areaServed: "NG",
  serviceType: [
    "Asset Management",
    "Wealth Advisory",
    "Retirement Income Solutions",
    "Private Credit Investments",
    "Real Asset Opportunities",
    "Family Office Services",
  ],
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
        <Navbar />

        {/* 1. Hero */}
        <HeroSection />

        <MandateBar />

        {/* 2. Our Products */}
        <SolutionsSection />

        {/* 3. Why Investors Trust Us */}
        <WhyChooseUs />

        {/* 4. What to Expect When You Work With Us */}
        <OnboardingExpectations />

        {/* 5. The Wealth Mandate */}
        <WealthPillars />

        {/* 6. Why Wealth Fails */}
        <WhyWealthFails />

        {/* 7. Our Investment Philosophy */}
        <InvestmentPhilosophy />

        {/* 8. Your Wealth Blueprint */}
        <WealthBlueprintSection />

        {/* 9. Contact */}
        <ContactSection />

        {/* 10. Market Insights */}
        <InsightsSection />

        <Footer />
      </main>
    </>
  );
}
