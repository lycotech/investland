import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, Landmark, FileText, Shield, TrendingUp, Clock, BarChart2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fixed Income Strategies | ITAML',
  description:
    'Treasury bills, FGN/corporate bonds, commercial papers and bank placements structured to deliver defined, predictable income for individuals and institutions.',
};

const INSTRUMENTS = [
  {
    icon: Landmark,
    title: 'Treasury Bills (T-Bills)',
    tenor: '91 – 364 days',
    description: 'Short-duration sovereign instruments issued by the Central Bank of Nigeria. Zero credit risk, high liquidity and competitive returns above inflation.',
    highlight: 'Sovereign-backed. Highest safety.',
  },
  {
    icon: FileText,
    title: 'FGN Bonds',
    tenor: '2 – 30 years',
    description: 'Federal Government of Nigeria bonds offering fixed coupon income with strong secondary market liquidity. Ideal for long-duration income needs.',
    highlight: 'Fixed coupon. Long-term income.',
  },
  {
    icon: BarChart2,
    title: 'Corporate Bonds',
    tenor: '1 – 7 years',
    description: 'Bonds issued by creditworthy Nigerian corporates and banks, offering premium yields above sovereign rates with appropriate credit analysis.',
    highlight: 'Enhanced yield. Rated issuers.',
  },
  {
    icon: Clock,
    title: 'Commercial Papers',
    tenor: '30 – 270 days',
    description: 'Short-term debt instruments from investment-grade corporates. High yield relative to duration. Suitable for liquidity management with income.',
    highlight: 'Short tenor. High yield.',
  },
  {
    icon: Shield,
    title: 'Bank Placements',
    tenor: '30 – 365 days',
    description: 'Fixed-term deposits and negotiated placements with Tier-1 and Tier-2 Nigerian banks, structured to optimise rate and tenor.',
    highlight: 'Capital protected. Negotiated rates.',
  },
  {
    icon: TrendingUp,
    title: 'Money Market Instruments',
    tenor: 'Overnight – 90 days',
    description: 'Ultra-short instruments for surplus liquidity parking with daily or near-daily access. Designed for capital preservation above all else.',
    highlight: 'Daily liquidity. Capital safe.',
  },
];

const WHY_FIXED_INCOME = [
  { title: 'Predictable Cashflow', desc: 'Fixed coupon payments and known maturity dates allow you to plan income with precision.' },
  { title: 'Capital Preservation', desc: 'Sovereign and investment-grade instruments protect your principal while generating returns.' },
  { title: 'Inflation Hedge', desc: 'Properly structured fixed income portfolios outperform inflation — protecting real purchasing power.' },
  { title: 'Portfolio Anchor', desc: 'Fixed income reduces overall portfolio volatility and provides stability during equity market stress.' },
];

const PROCESS = [
  { step: '01', title: 'Objective Setting', desc: 'We define your income targets, liquidity windows, duration preference and acceptable credit risk.' },
  { step: '02', title: 'Instrument Selection', desc: 'Our fixed income desk identifies the optimal mix of instruments across sovereign, corporate and money market.' },
  { step: '03', title: 'Execution & Custody', desc: 'Securities are purchased and held via an independent custodian. You receive trade confirmations for every transaction.' },
  { step: '04', title: 'Monitoring & Rollover', desc: 'Maturities are actively managed. We reinvest at optimal rates and adjust duration based on market conditions.' },
  { step: '05', title: 'Income Distribution', desc: 'Coupon payments and maturity proceeds are distributed or reinvested according to your instructions.' },
];

export default function FixedIncomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E8A] via-[#1852CC] to-[#0A1F5C]" />
        <div className="absolute inset-y-0 right-0 w-[45%] hidden lg:block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&q=80"
            alt="Fixed Income"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E8A] via-[#0A2E8A]/70 to-transparent" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-sm mb-10">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <span className="text-gold font-semibold tracking-widest uppercase text-xs mb-4 block">
              Fixed Income Strategies
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Predictable Income. <span className="text-gold">Institutional</span> Discipline.
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
              Treasury bills, FGN bonds, corporate bonds, commercial papers and bank placements — structured to deliver defined income above inflation with appropriate capital protection.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg group"
            >
              Discuss Fixed Income Allocation
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Fixed Income */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&auto=format&q=80"
                alt="Fixed income investment"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Why Fixed Income</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                The Case for Structured Income Investing
              </h2>
              <div className="space-y-5">
                {WHY_FIXED_INCOME.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instruments */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Instruments</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Invest In</h2>
            <p className="text-lg text-muted-foreground">
              Each instrument is selected based on your income target, duration preference and risk tolerance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTRUMENTS.map((inst) => {
              const Icon = inst.icon;
              return (
                <div key={inst.title} className="group p-8 rounded-2xl border border-border/50 bg-background hover:border-gold/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                    <Icon size={26} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors">{inst.title}</h3>
                  </div>
                  <p className="text-xs font-semibold text-primary/70 mb-3 uppercase tracking-wide">Tenor: {inst.tenor}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{inst.description}</p>
                  <div className="pt-3 border-t border-border/40">
                    <p className="text-xs font-semibold text-gold">{inst.highlight}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Manage Fixed Income</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="flex gap-6 items-start bg-white/8 rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-bold text-sm">{p.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{p.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Build a Fixed Income Portfolio That Outperforms Inflation
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Whether you need monthly income, capital preservation or a structured ladder of maturities — our fixed income desk will design the right solution. Minimum mandate: ₦10,000,000.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-colors shadow-lg group"
          >
            Request a Fixed Income Consultation
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
