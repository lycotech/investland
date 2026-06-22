import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, TrendingDown, BarChart3, FileText, Shield, Users, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Corporate Treasury Management | ITAML',
  description:
    'Structured deployment of surplus corporate liquidity with institutional governance, transparent reporting and active risk oversight. Turn idle cash into working capital.',
};

const PROBLEM_STATS = [
  { value: '₦0', label: 'Return on idle cash in a current account' },
  { value: '32%+', label: 'Average Nigerian inflation rate eroding idle balances' },
  { value: '90%', label: 'Of corporate surplus remains uninvested in Nigeria' },
];

const SOLUTIONS = [
  {
    icon: Clock,
    title: 'Liquidity Management',
    description: 'We structure your cash across short-duration instruments — T-bills, commercial papers and call placements — ensuring capital is available when needed while earning above-market rates.',
  },
  {
    icon: TrendingDown,
    title: 'Surplus Capital Deployment',
    description: 'Longer-duration allocations into FGN bonds, corporate bonds and structured instruments deliver defined income on capital with no near-term operational requirement.',
  },
  {
    icon: Shield,
    title: 'Risk & Governance Oversight',
    description: 'We build an Investment Policy Statement (IPS) for your treasury function — defining approved instruments, counterparty limits, duration bands and escalation procedures.',
  },
  {
    icon: FileText,
    title: 'Board-Ready Reporting',
    description: 'Monthly performance reports and quarterly treasury reviews formatted for presentation to finance committees and boards. Full audit trail on every transaction.',
  },
  {
    icon: BarChart3,
    title: 'Benchmarked Performance',
    description: 'All treasury returns are measured against appropriate benchmarks — MPR, inflation and peer comparators — so your board can see exactly how your treasury is performing.',
  },
  {
    icon: Users,
    title: 'Dedicated Relationship Management',
    description: 'A named relationship manager and fixed income specialist are assigned to every corporate mandate. Direct access, responsive reporting and proactive market updates.',
  },
];

const WHO_WE_SERVE = [
  {
    title: 'Listed Companies',
    description: 'Public companies with significant cash reserves, dividend accounts and proceeds awaiting deployment — requiring governance-compliant treasury management.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&q=80',
  },
  {
    title: 'Private Businesses',
    description: 'Growing businesses with surplus operating cash, retained earnings or proceeds from asset sales that are currently sitting idle in bank accounts.',
    img: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&auto=format&q=80',
  },
  {
    title: 'NGOs & Foundations',
    description: 'Non-profit organisations and endowments requiring structured deployment of donor funds and reserves with appropriate governance and impact reporting.',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&q=80',
  },
];

const PROCESS = [
  { step: '01', title: 'Treasury Audit', desc: 'We review your current cash position, existing banking arrangements, liquidity requirements and upcoming capital needs.' },
  { step: '02', title: 'Policy Design', desc: 'An Investment Policy Statement is drafted — defining approved instruments, risk parameters, reporting requirements and governance framework.' },
  { step: '03', title: 'Portfolio Construction', desc: 'Surplus liquidity is deployed into an optimised mix of instruments across the short and medium-term yield curve.' },
  { step: '04', title: 'Active Management', desc: 'Ongoing monitoring, rollover management and tactical adjustments to maximise returns within policy limits.' },
  { step: '05', title: 'Board Reporting', desc: 'Monthly statements and quarterly treasury reviews delivered in a format ready for finance committee and board presentation.' },
];

export default function CorporateTreasuryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E8A] via-[#1852CC] to-[#0A1F5C]" />
        <div className="absolute inset-y-0 right-0 w-[45%] hidden lg:block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&q=80"
            alt="Corporate Treasury"
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
              Corporate Treasury Management
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Transform Idle Capital Into <span className="text-gold">Working Assets.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
              Structured deployment of surplus corporate liquidity with institutional governance, transparent reporting and active risk oversight — so your cash works as hard as your business.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg group"
            >
              Speak With Our Treasury Team
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-foreground text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">The Cost of Inaction</span>
            <h2 className="text-3xl md:text-4xl font-bold">Every Day Your Cash Sits Idle, It Loses Value</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {PROBLEM_STATS.map((stat) => (
              <div key={stat.label} className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-4xl font-bold text-gold mb-3">{stat.value}</p>
                <p className="text-white/65 text-sm leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">A Complete Treasury Management Service</h2>
            <p className="text-lg text-muted-foreground">
              From liquidity management to board-level reporting — we manage every aspect of your corporate treasury function.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((sol) => {
              const Icon = sol.icon;
              return (
                <div key={sol.title} className="group p-8 rounded-2xl border border-border/50 bg-background hover:border-gold/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                    <Icon size={26} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-gold transition-colors">{sol.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{sol.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Who We Serve</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built for Organisations with Capital to Optimise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHO_WE_SERVE.map((client) => (
              <div key={client.title} className="group rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={client.img} alt={client.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{client.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{client.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From Audit to Active Management</h2>
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
          <div className="text-center mt-12">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg group"
            >
              Request a Treasury Review
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
