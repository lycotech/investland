import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, Search, Shield, FileText, Activity, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Private Credit Investments',
  description:
    'Access carefully selected income-generating private credit opportunities backed by rigorous due diligence. Invoice financing, revenue-based financing, asset-backed lending and more.',
};

const OPPORTUNITY_TYPES = [
  {
    title: 'Invoice Financing',
    description: 'Short-duration, high-yield instruments backed by receivables from creditworthy obligors.',
  },
  {
    title: 'Revenue-Based Financing',
    description: 'Growth capital structured against predictable revenue streams of established businesses.',
  },
  {
    title: 'Asset-Backed Lending',
    description: 'Loans collateralised by tangible assets — real estate, equipment and inventory.',
  },
  {
    title: 'Structured Credit',
    description: 'Complex multi-tranche structures designed to deliver defined risk-return profiles.',
  },
  {
    title: 'SME Growth Capital',
    description: 'Carefully underwritten growth financing for established small and mid-sized enterprises.',
  },
];

const PROCESS_STEPS = [
  { icon: Search, step: 'Source', description: 'Proprietary deal flow from vetted origination partners and direct relationships.' },
  { icon: Shield, step: 'Screen', description: 'Rigorous credit analysis, sector review and borrower due diligence.' },
  { icon: FileText, step: 'Structure', description: 'Legal documentation, covenants and security packages designed to protect investor capital.' },
  { icon: Activity, step: 'Monitor', description: 'Active portfolio monitoring with quarterly reporting on every position.' },
  { icon: ArrowRight, step: 'Exit', description: 'Clear defined exit mechanisms and maturity management for every instrument.' },
];

export default function PrivateCreditPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center pt-24 pb-16 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-sm mb-10">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <span className="text-gold font-semibold tracking-widest uppercase text-xs mb-4 block">
              Private Credit
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Institutional Private Credit <span className="text-gold">Opportunities</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
              Access carefully selected income-generating opportunities backed by rigorous due diligence and structured for capital protection.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg group"
            >
              Enquire About Access
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Opportunity Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Private Credit Opportunity Types
            </h2>
            <p className="text-lg text-muted-foreground">
              Each instrument is sourced, screened and structured to deliver defined income with appropriate risk controls.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OPPORTUNITY_TYPES.map((item, index) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-border/50 bg-background hover:border-gold/25 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                  <span className="text-gold font-bold text-xs">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How We Deploy Capital
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative text-center group">
                  <div className="w-16 h-16 rounded-full bg-primary/5 border-2 border-primary/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <Icon size={24} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{step.step}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Access Private Credit Opportunities
          </h2>
          <p className="text-white/70 mb-8 text-lg leading-relaxed">
            Private credit is available to qualified investors. Contact our team to discuss minimum participation, current opportunities and mandate terms.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg group"
          >
            Request Information Pack
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
