import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, Building2, Landmark, Globe, Zap, GraduationCap, WarehouseIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Real Asset Opportunities',
  description:
    'Own more than paper assets. ITAML provides structured exposure to commercial real estate, infrastructure, energy and more — assets that generate income and appreciate over time.',
};

const ASSET_CLASSES = [
  {
    icon: Building2,
    title: 'Commercial Real Estate',
    description: 'Office, retail and mixed-use properties generating rental income and long-term capital appreciation.',
  },
  {
    icon: WarehouseIcon,
    title: 'Warehousing & Logistics',
    description: 'Industrial and logistics properties driven by e-commerce growth and supply chain modernisation.',
  },
  {
    icon: Landmark,
    title: 'Hospitality',
    description: 'Structured exposure to hotels and serviced accommodations in high-demand urban corridors.',
  },
  {
    icon: Globe,
    title: 'Infrastructure',
    description: 'Long-duration infrastructure assets offering stable, inflation-linked returns over extended periods.',
  },
  {
    icon: Zap,
    title: 'Energy',
    description: 'Power generation and distribution assets — from conventional energy to renewable solutions.',
  },
  {
    icon: GraduationCap,
    title: 'Student Housing',
    description: 'Purpose-built student accommodation in proximity to major Nigerian universities with consistent demand.',
  },
];

const KEY_METRICS = [
  { label: 'Asset Types', value: '6+' },
  { label: 'Focus Markets', value: 'Nigeria' },
  { label: 'Return Structure', value: 'Income + Capital' },
  { label: 'Mandate Minimum', value: '₦10M+' },
];

export default function RealAssetsPage() {
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
              Real Asset Investing
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Own More Than <span className="text-gold">Paper Assets</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
              Structured exposure to commercial real estate, infrastructure and energy assets that generate income, preserve purchasing power and appreciate over time.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg group"
            >
              Discuss Real Asset Allocation
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section className="bg-background border-b border-border/50 py-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {KEY_METRICS.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="text-2xl font-bold text-primary mb-1">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Classes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
              Asset Classes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Where We Deploy Capital
            </h2>
            <p className="text-lg text-muted-foreground">
              Each real asset class is selected for its income characteristics, inflation-hedging properties and long-term value creation potential.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ASSET_CLASSES.map((asset) => {
              const Icon = asset.icon;
              return (
                <div
                  key={asset.title}
                  className="group p-8 rounded-2xl border border-border/50 bg-background hover:border-gold/25 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                    <Icon size={26} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {asset.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{asset.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects / Map placeholder */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
              Active Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Current Opportunities
            </h2>
          </div>
          <div className="bg-primary/5 rounded-3xl border border-primary/10 p-16 text-center">
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Current real asset opportunities are shared exclusively with qualified investors following a confidential consultation.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-colors group"
            >
              Request Opportunity Overview
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
