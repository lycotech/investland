import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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

        {/* Section 1: Hero */}
        <HeroSection />

        {/* Mandate minimum — visible immediately after the hero */}
        <div className="bg-foreground text-white py-4">
          <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 text-center">
            <span className="text-white/55 text-xs font-semibold tracking-widest uppercase">Minimum Portfolio Mandate</span>
            <span className="hidden sm:block text-white/20 text-sm">|</span>
            <span className="text-white font-bold text-xl tracking-tight">₦10,000,000</span>
            <span className="hidden sm:block text-white/20 text-sm">|</span>
            <span className="text-white/50 text-xs tracking-wide">Individuals &nbsp;·&nbsp; Families &nbsp;·&nbsp; Institutions</span>
          </div>
        </div>

        {/* Section 2: Wealth Is More Than Investment Returns */}
        <WealthPillars />

        {/* Section 3: Why Wealth Fails + ITAML Framework */}
        <WhyWealthFails />

        {/* Section 4: Solutions */}
        <SolutionsSection />

        {/* Section 5: Investment Philosophy */}
        <InvestmentPhilosophy />

        {/* Section 6: Why Investors Choose Invest-Trust */}
        <WhyChooseUs />

        {/* Section 7: Wealth Blueprint (Interactive) */}
        <WealthBlueprintSection />

        {/* Section 8: Market Insights */}
        <InsightsSection />

        {/* Section 9: Onboarding Expectations */}
        <OnboardingExpectations />

        {/* Contact & Footer */}
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
