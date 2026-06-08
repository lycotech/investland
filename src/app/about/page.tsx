import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About the MD — Architecting Modern African Wealth',
  description:
    'The story behind Invest-Trust Asset Management. Commerce, capital markets, real estate, private credit and a vision for building Africa\'s wealth infrastructure.',
};

const CAREER_TIMELINE = [
  {
    era: 'Commerce & Trade',
    description:
      'Early career immersed in commerce and trade — learning how capital moves, where it accumulates and what makes businesses survive economic cycles.',
  },
  {
    era: 'Capital Markets',
    description:
      'Deep exposure to the Nigerian capital markets ecosystem — understanding how institutional money thinks, how mandates are structured and what real investment discipline looks like.',
  },
  {
    era: 'Real Estate',
    description:
      'Structured real estate investments across residential and commercial segments, developing a framework for valuing income-producing assets and understanding what ‘real’ returns look like.',
  },
  {
    era: 'Private Credit',
    description:
      'Built experience in private credit origination and structuring — filling the gap between banks and businesses, and understanding the true cost and flow of private capital in Africa.',
  },
  {
    era: 'Asset Management',
    description:
      'Founded and led Invest-Trust Asset Management Limited — bringing together every strand of experience into one institution: structured, SEC-licensed and built for serious capital.',
  },
];

const PHILOSOPHY_POINTS = [
  {
    title: 'Capital Has Memory',
    body: 'Every investment decision carries a consequence. Discipline in deployment is not a constraint — it is the source of consistent returns.',
  },
  {
    title: 'Africa Is the Opportunity',
    body: 'The infrastructure gap in Africa is not a problem. It is the investment opportunity of the century — for those who understand risk and have the patience to deploy with conviction.',
  },
  {
    title: 'Wealth Must Be Structured',
    body: 'Income alone does not build wealth. Structure does. Every client needs a framework, not just a portfolio.',
  },
  {
    title: 'Institutions Outlast Individuals',
    body: 'The goal is to build an institution that serves African families long after any individual has left the room.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 30%, #C8A45D 0%, transparent 70%)' }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="text-gold font-semibold tracking-widest uppercase text-xs mb-4 block">
              About ITAML
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Architecting Modern <span className="text-gold">African Wealth</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              The story behind Invest-Trust Asset Management — and why we believe Africa&apos;s wealth infrastructure moment has arrived.
            </p>
          </div>
        </div>
      </section>

      {/* Portrait + Opening Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Portrait placeholder */}
            <div className="w-full lg:w-2/5">
              <div className="relative bg-primary/5 rounded-3xl overflow-hidden aspect-[4/5] flex items-end">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 border-2 border-primary/15 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/25">MD</span>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/60 to-gold/20" />
                <div className="relative z-10 p-8 bg-gradient-to-t from-primary/80 to-transparent w-full">
                  <p className="text-white font-bold text-lg">Managing Director</p>
                  <p className="text-gold text-sm font-medium">Invest-Trust Asset Management Limited</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3 italic">
                Full portrait and profile to be published shortly.
              </p>
            </div>

            {/* Opening narrative */}
            <div className="w-full lg:w-3/5">
              <div className="w-10 h-0.5 bg-gold mb-8" />
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  There is a story most asset management firms do not tell. It is not the story of performance charts or fund structures. It is the story of why someone decided that Africa deserved better wealth infrastructure.
                </p>
                <p>
                  Invest-Trust was not built because there was a gap in the market. It was built because the people who needed disciplined, institutional-grade wealth management in Nigeria had nowhere to go that truly understood them.
                </p>
                <p>
                  High net worth Nigerians were being sold products. Not mandates. Not frameworks. Not structures that would survive a generation. Just products.
                </p>
                <p className="text-foreground font-semibold text-xl border-l-4 border-gold pl-6 py-2">
                  &ldquo;I wanted to build the institution I wished existed when I was first deploying serious capital.&rdquo;
                </p>
                <p>
                  That is the origin of ITAML. And it remains the only reason it exists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-14">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
              The Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Experience That Shapes Every Decision
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-1">
            {CAREER_TIMELINE.map((item, index) => (
              <div key={item.era} className="relative flex gap-6">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-white text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  {index < CAREER_TIMELINE.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border my-1 min-h-[40px]" />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.era}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
              The Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What Drives Every Decision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {PHILOSOPHY_POINTS.map((point) => (
              <div
                key={point.title}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-gold/25 transition-all duration-300"
              >
                <div className="w-8 h-0.5 bg-gold mb-5" />
                <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                <p className="text-white/65 leading-relaxed text-sm">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
            The Vision
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
            Building Africa&apos;s Wealth Infrastructure
          </h2>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              Africa is not short of wealthy people. It is short of institutions that can serve them with the discipline, structure and long-term thinking they deserve.
            </p>
            <p>
              The goal for ITAML is simple: to become the most trusted institutional asset manager for private and corporate capital in Nigeria — and across the continent.
            </p>
            <p>
              Not the biggest. Not the loudest. The most trusted.
            </p>
            <p className="text-foreground font-semibold border-l-4 border-gold pl-6 py-2 text-xl">
              When someone entrusts us with their capital, they are entrusting us with their family&apos;s future. That is not a transaction. It is a mandate.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-colors shadow-lg group"
            >
              Begin the Conversation
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/wealth-blueprint"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold text-gold font-semibold rounded-md hover:bg-gold hover:text-primary transition-colors group"
            >
              Explore the Wealth Blueprint
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
