import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, Target, TrendingUp, ShieldCheck, BarChart3, RefreshCw, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Portfolio Management | ITAML',
  description:
    'Discretionary and managed portfolios aligned to your income, growth, liquidity and risk objectives. Institutional-grade portfolio management for individuals, families and institutions.',
};

const PILLARS = [
  {
    icon: Target,
    title: 'Mandate-Driven Construction',
    description: 'Every portfolio begins with a written investment mandate — your objectives, risk tolerance, liquidity requirements and time horizon. We build around your goals, not products.',
  },
  {
    icon: TrendingUp,
    title: 'Multi-Asset Allocation',
    description: 'Exposure across fixed income, equities, private credit and real assets — calibrated to maximise risk-adjusted returns within your defined parameters.',
  },
  {
    icon: ShieldCheck,
    title: 'Independent Custody',
    description: 'Your assets are held by a regulated, independent custodian. ITAML manages the mandate; we never hold your principal on our balance sheet.',
  },
  {
    icon: BarChart3,
    title: 'Research-Backed Decisions',
    description: 'Every allocation is underwritten by institutional-grade research. We provide investment memoranda explaining what we own, why, and what we expect.',
  },
  {
    icon: RefreshCw,
    title: 'Active Rebalancing',
    description: 'Portfolios are actively monitored and rebalanced in response to market conditions, risk drift and evolving client objectives.',
  },
  {
    icon: FileText,
    title: 'Transparent Reporting',
    description: 'Monthly performance summaries and full quarterly reports with position-level commentary, market context and forward outlook.',
  },
];

const MANDATE_TYPES = [
  {
    title: 'Income Mandate',
    tag: 'Conservative',
    tagColor: 'bg-green-100 text-green-700',
    description: 'Designed for clients who need regular, predictable cashflow. Heavy allocation to fixed income, money market instruments and dividend-paying assets.',
    suitable: 'Retirees, passive income seekers, near-retirement professionals',
  },
  {
    title: 'Balanced Mandate',
    tag: 'Moderate',
    tagColor: 'bg-blue-100 text-blue-700',
    description: 'A blend of income-generating and growth-oriented assets. Aims for capital preservation with moderate appreciation above inflation.',
    suitable: 'Mid-career professionals, family trusts, corporate surplus',
  },
  {
    title: 'Growth Mandate',
    tag: 'Aggressive',
    tagColor: 'bg-orange-100 text-orange-700',
    description: 'Oriented toward long-term capital appreciation. Higher allocation to equities, private credit and real assets with lower near-term liquidity.',
    suitable: 'Young professionals, long-horizon investors, wealth builders',
  },
  {
    title: 'Institutional Mandate',
    tag: 'Bespoke',
    tagColor: 'bg-purple-100 text-purple-700',
    description: 'Fully customised portfolios for foundations, endowments, pension schemes and corporate treasuries with specific governance and reporting requirements.',
    suitable: 'Corporations, foundations, endowments, pension funds',
  },
];

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'We understand your financial position, objectives, obligations and risk appetite through a structured discovery process.' },
  { step: '02', title: 'Mandate Design', desc: 'A written investment mandate is agreed and signed — defining asset allocation ranges, return targets, liquidity bands and reporting cadence.' },
  { step: '03', title: 'Portfolio Construction', desc: 'Assets are selected and purchased in line with the mandate. Each position is justified by our research team.' },
  { step: '04', title: 'Active Management', desc: 'Ongoing monitoring, rebalancing and tactical adjustments in response to market conditions.' },
  { step: '05', title: 'Reporting & Review', desc: 'Monthly performance summaries, quarterly full reports and annual strategy reviews with your assigned advisor.' },
];

export default function PortfolioManagementPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E8A] via-[#1852CC] to-[#0A1F5C]" />
        <div className="absolute inset-y-0 right-0 w-[45%] hidden lg:block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&q=80"
            alt="Portfolio Management"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E8A] via-[#0A2E8A]/70 to-transparent" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-sm mb-10">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <span className="text-gold font-semibold tracking-widest uppercase text-xs mb-4 block">
              Portfolio Management
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Your Wealth. <span className="text-gold">Purposefully</span> Managed.
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
              Discretionary and managed portfolios built around your income needs, growth objectives, liquidity requirements and risk appetite — not our product shelf.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg group"
              >
                Discuss Your Portfolio
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mandate Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Mandate Types</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built Around Your Objectives</h2>
            <p className="text-lg text-muted-foreground">
              We don't offer standard products. Every mandate is structured around the client's specific financial situation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MANDATE_TYPES.map((m) => (
              <div key={m.title} className="p-8 rounded-2xl border border-border/50 bg-background hover:border-gold/25 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{m.title}</h3>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${m.tagColor}`}>{m.tag}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{m.description}</p>
                <div className="pt-4 border-t border-border/40">
                  <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground/70">Suitable for:</span> {m.suitable}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Six Principles That Guide Every Portfolio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="group p-8 rounded-2xl border border-border/50 bg-background hover:border-gold/25 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                    <Icon size={26} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gold transition-colors">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
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
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">The Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From Consultation to Capital at Work</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {PROCESS.map((p, i) => (
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

      {/* Image + CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&auto=format&q=80"
                alt="Professional investment advisor"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Minimum Mandate</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Build a Portfolio That Works?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Portfolio management mandates start from ₦10,000,000. Institutional and corporate mandates are structured on a case-by-case basis.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                All mandates begin with a confidential consultation. We will assess your current position, understand your objectives and design a mandate that aligns with your financial goals.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-colors shadow-lg group"
              >
                Schedule a Consultation
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
