import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, ShieldCheck, TrendingUp, Wallet, Gift } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InvestmentCalculator from '@/components/InvestmentCalculator';

export const metadata: Metadata = {
  title: 'Retirement Income Solutions',
  description:
    'Structured retirement income strategies designed to sustain your lifestyle long after you stop working. ITAML Retirement Income Framework — Accumulation, Growth, Income, Legacy.',
};

const PROBLEMS = [
  'Properties that do not generate consistent cashflow',
  'Businesses that still depend on your daily presence',
  'Savings eroded by inflation year after year',
];

const PHASES = [
  {
    number: '01',
    icon: TrendingUp,
    phase: 'Accumulation Phase',
    description:
      'Building the capital base through systematic investment while your earning years fund future income.',
  },
  {
    number: '02',
    icon: ShieldCheck,
    phase: 'Growth Phase',
    description:
      'Deploying accumulated capital into diversified, income-producing assets that grow faster than inflation.',
  },
  {
    number: '03',
    icon: Wallet,
    phase: 'Income Phase',
    description:
      'Transitioning your portfolio to deliver regular, sustainable cashflow that replaces your employment income.',
  },
  {
    number: '04',
    icon: Gift,
    phase: 'Legacy Phase',
    description:
      'Structuring the residual estate for efficient transfer — ensuring your heirs inherit wealth, not liabilities.',
  },
];

export default function RetirementPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark opacity-90" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #C8A45D 0%, transparent 60%)' }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-sm mb-10"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <span className="text-gold font-semibold tracking-widest uppercase text-xs mb-4 block">
              Retirement Solutions
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Retire With Income. <span className="text-gold">Not Anxiety.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
              A structured retirement income framework that ensures your money works harder than you ever did — so your lifestyle is never at the mercy of markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact-section"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg group"
              >
                Book Retirement Consultation
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#calculator"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/8 border border-white/20 text-white font-medium rounded-md hover:bg-white/15 transition-colors"
              >
                Use the Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Most Nigerians Retire Without a Plan
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            After decades of work, most high earners arrive at retirement with significant assets — but no reliable income stream. The result is anxiety, dependency and the gradual erosion of the wealth they built.
          </p>
          <div className="space-y-4">
            {PROBLEMS.map((problem, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-muted/40 border border-border/50"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">{i + 1}</span>
                </div>
                <p className="text-foreground font-medium">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ITAML Retirement Framework */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
              The Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ITAML Retirement Income Framework
            </h2>
            <p className="text-lg text-muted-foreground">
              A four-phase lifecycle approach to building and sustaining retirement income.
            </p>
          </div>

          {/* Funnel visual */}
          <div className="max-w-2xl mx-auto space-y-4">
            {PHASES.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.phase}
                  className="relative bg-background rounded-2xl border border-border/50 p-7 shadow-sm hover:shadow-md hover:border-gold/25 transition-all duration-300"
                  style={{ marginLeft: `${index * 20}px`, marginRight: `${index * 20}px` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-gold">{phase.number}</span>
                        <h3 className="text-lg font-bold text-foreground">{phase.phase}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                  {index < PHASES.length - 1 && (
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gold/30" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <div id="calculator">
        <InvestmentCalculator />
      </div>

      {/* CTA */}
      <section id="contact-section" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Plan Your Retirement Income?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Book a confidential consultation with one of our retirement income specialists. No obligation. Just clarity.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-colors shadow-lg group"
          >
            Book Retirement Consultation
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
