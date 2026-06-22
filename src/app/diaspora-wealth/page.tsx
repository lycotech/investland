import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, Globe, Shield, FileText, TrendingUp, Users, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Diaspora Wealth Solutions | ITAML',
  description:
    'Secure access to Nigerian investment opportunities from anywhere in the world. Transparent reporting, independent custody and dedicated advisory support for diaspora investors.',
};

const CHALLENGES = [
  { title: 'Distance & Trust', desc: 'Managing investments remotely requires a partner you can trust with independent custody and full transparency.' },
  { title: 'Repatriation Complexity', desc: 'Moving funds into and out of Nigeria requires careful structuring to comply with CBN regulations and avoid unnecessary friction.' },
  { title: 'Market Access', desc: 'Many of the best Nigerian investment opportunities are not available on retail platforms — requiring institutional relationships to access.' },
  { title: 'Reporting & Visibility', desc: 'Diaspora investors need clear, regular reporting they can review from abroad — not phone calls that leave them guessing.' },
];

const WHAT_WE_OFFER = [
  {
    icon: Globe,
    title: 'Remote Onboarding',
    description: 'Complete your KYC/AML documentation and mandate setup entirely online. No need to visit Nigeria to get started.',
  },
  {
    icon: Shield,
    title: 'Independent Custody',
    description: 'Your Nigerian investments are held by a regulated, independent custodian — fully ring-fenced and never on ITAML\'s balance sheet.',
  },
  {
    icon: TrendingUp,
    title: 'Full Market Access',
    description: 'T-bills, bonds, private credit, real estate and structured products — the same instruments available to institutional investors in Nigeria.',
  },
  {
    icon: FileText,
    title: 'Transparent Reporting',
    description: 'Monthly performance summaries and quarterly full reports delivered to your email. Track every position from anywhere in the world.',
  },
  {
    icon: Users,
    title: 'Dedicated Advisor',
    description: 'A named relationship manager handles your account. Reachable by phone, email and video call across time zones.',
  },
  {
    icon: Phone,
    title: 'Repatriation Support',
    description: 'We guide you through the process of repatriating income and principal when you need it — navigating CBN guidelines efficiently.',
  },
];

const INVESTMENT_OPTIONS = [
  {
    title: 'Fixed Income Portfolio',
    return: 'Defined quarterly income',
    description: 'T-bills, FGN bonds and corporate bonds structured to deliver naira income that can be repatriated or reinvested.',
    min: '₦10,000,000 equivalent',
    img: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=600&auto=format&q=80',
  },
  {
    title: 'Real Asset Participation',
    return: 'Income + capital appreciation',
    description: 'Structured access to commercial real estate, logistics facilities and hospitality assets with defined income distributions.',
    min: '₦25,000,000 equivalent',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&auto=format&q=80',
  },
  {
    title: 'Private Credit Access',
    return: 'High-yield defined income',
    description: 'Invoice financing, structured credit and SME growth capital opportunities with defined tenors and clear exit mechanisms.',
    min: '₦15,000,000 equivalent',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&q=80',
  },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Initial Consultation', desc: 'Schedule a video call with your dedicated advisor. We discuss your objectives, timeline and the amount you wish to invest in Nigeria.' },
  { step: '02', title: 'Remote KYC & Onboarding', desc: 'Complete identity verification and account opening documentation digitally. No need to travel.' },
  { step: '03', title: 'Fund Transfer', desc: 'Transfer funds into your designated custodian account. We guide you through the documentation for inward remittance compliance.' },
  { step: '04', title: 'Portfolio Deployment', desc: 'Your mandate is executed within agreed timelines. You receive trade confirmations and a portfolio summary.' },
  { step: '05', title: 'Ongoing Reporting', desc: 'Monthly summaries and quarterly full reports keep you fully informed. Your advisor is available across time zones for any queries.' },
];

export default function DiasporaWealthPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E8A] via-[#1852CC] to-[#0A1F5C]" />
        <div className="absolute inset-y-0 right-0 w-[45%] hidden lg:block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1488998527040-85054a85150e?w=1200&auto=format&q=80"
            alt="Diaspora Wealth"
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
              Diaspora Wealth Solutions
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Invest in Nigeria <span className="text-gold">From Anywhere</span> in the World.
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
              Secure access to Nigerian investment opportunities with transparent reporting, independent custody and dedicated advisory support — whether you're in London, Houston or Dubai.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg group"
            >
              Schedule a Video Consultation
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&auto=format&q=80"
                alt="Diaspora investor"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">The Challenge</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                Why Most Diaspora Investors Struggle to Invest in Nigeria
              </h2>
              <div className="space-y-5">
                {CHALLENGES.map((c) => (
                  <div key={c.title} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{c.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Our Solution</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything You Need to Invest from Abroad</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_WE_OFFER.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group p-8 rounded-2xl border border-border/50 bg-background hover:border-gold/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                    <Icon size={26} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Investment Options</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What You Can Invest In</h2>
            <p className="text-lg text-muted-foreground">Institutional-grade Nigerian investment opportunities, accessible remotely.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INVESTMENT_OPTIONS.map((opt) => (
              <div key={opt.title} className="group rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={opt.img} alt={opt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{opt.title}</h3>
                  <p className="text-xs font-semibold text-gold mb-3 uppercase tracking-wide">{opt.return}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{opt.description}</p>
                  <div className="pt-3 border-t border-border/40">
                    <p className="text-xs text-muted-foreground">Minimum: <span className="font-semibold text-foreground">{opt.min}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Getting Started from Abroad</h2>
            <p className="text-white/65 text-lg">The entire process can be completed remotely. No flights required.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {HOW_IT_WORKS.map((p) => (
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
              Book a Video Consultation
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
