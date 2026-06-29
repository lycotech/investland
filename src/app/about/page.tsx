import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us — Invest-Trust Asset Management Ltd',
  description:
    'Invest-Trust Asset Management Ltd is a regulated wealth and investment management firm built to help individuals, families, businesses, and institutions preserve capital, generate sustainable income, and build wealth with structure.',
};

const CORE_VALUES = [
  {
    title: 'Integrity',
    body: 'We act with honesty, discretion, and fiduciary responsibility in every client relationship.',
  },
  {
    title: 'Discipline',
    body: 'We allocate capital with patience, structure, and a clear understanding of risk.',
  },
  {
    title: 'Client Mandate First',
    body: "We do not begin with products. We begin with the client's objectives, liquidity needs, time horizon, and risk appetite.",
  },
  {
    title: 'Transparency',
    body: 'We believe clients should understand what they own, why they own it, and how their capital is being managed.',
  },
  {
    title: 'Accountability',
    body: 'We take responsibility for the quality of our advice, the discipline of our process, and the confidence clients place in us.',
  },
  {
    title: 'Legacy',
    body: "We design wealth strategies not only for today's returns, but for long-term continuity, resilience, and generational impact.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
        <div
          className="absolute top-0 right-0 w-1/3 h-full opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 30%, #C8A45D 0%, transparent 70%)' }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="text-gold font-semibold tracking-widest uppercase text-xs mb-4 block">
              About ITAML
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Invest-Trust Asset <span className="text-gold">Management Ltd</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              A regulated wealth and investment management firm built to help individuals, families, businesses, and institutions preserve capital, generate sustainable income, and build wealth with structure.
            </p>
          </div>
        </div>
      </section>

      {/* About Narrative */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* MD Portrait */}
            <div className="w-full lg:w-2/5 flex-shrink-0">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src="/md.jpeg"
                  alt="Managing Director — Invest-Trust Asset Management Limited"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white font-bold text-lg">Managing Director</p>
                  <p className="text-gold text-sm font-medium">Invest-Trust Asset Management Limited</p>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="w-full lg:w-3/5">
              <div className="w-10 h-0.5 bg-gold mb-10" />
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Invest-Trust Asset Management Ltd is a regulated wealth and investment management firm built to help individuals, families, businesses, and institutions preserve capital, generate sustainable income, and build wealth with structure.
                </p>
                <p>
                  We believe wealth is not sustained by opportunity alone. It requires discipline, governance, liquidity planning, risk management, and a clear investment mandate. That is why our approach is mandate-first, not product-first. We begin by understanding each client&apos;s objectives, risk appetite, liquidity needs, time horizon, and long-term aspirations before designing a portfolio strategy that fits their goals.
                </p>
                <p>
                  Our work spans portfolio management, wealth advisory, fixed income strategies, corporate treasury management, private credit opportunities, real asset exposure, retirement income planning, diaspora wealth solutions, and family office support.
                </p>
                <p>
                  At Invest-Trust, every client relationship is built around clarity. We help clients understand what they own, why they own it, the risks involved, the expected investment horizon, and how each allocation contributes to their broader wealth objectives.
                </p>
                <p>
                  We serve clients who are intentional about building, protecting, growing, and transferring wealth. Whether the goal is income, capital preservation, liquidity, long-term growth, or legacy planning, our role is to bring structure and professional discipline to the investment process.
                </p>
                <p>
                  As a firm licensed and regulated by the Securities and Exchange Commission of Nigeria, we operate within a framework of governance, compliance, reporting, and fiduciary responsibility. This reinforces our commitment to transparency, accountability, and responsible capital management.
                </p>
                <p className="text-foreground font-semibold text-xl border-l-4 border-gold pl-6 py-2">
                  For us, wealth is more than investment returns. It is the foundation for security, opportunity, independence, and generational continuity.
                </p>
                <p>
                  Invest-Trust exists to help clients make better capital decisions today, so they can build stronger financial futures tomorrow.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div>
              <div className="w-10 h-0.5 bg-gold mb-6" />
              <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
                Our Vision
              </span>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To become one of Africa&apos;s most trusted wealth management institutions, known for disciplined capital allocation, investor confidence, and purpose-built investment solutions that help clients preserve, grow, and transfer wealth across generations.
              </p>
            </div>

            {/* Mission */}
            <div>
              <div className="w-10 h-0.5 bg-gold mb-6" />
              <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
                Our Mission
              </span>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To help individuals, families, businesses, and institutions build, protect, grow, and transfer wealth through regulated investment management, trusted advisory, rigorous research, and disciplined portfolio construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {CORE_VALUES.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-gold/25 transition-all duration-300"
              >
                <div className="w-8 h-0.5 bg-gold mb-5" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/65 leading-relaxed text-sm">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <p className="text-foreground font-semibold border-l-4 border-gold pl-6 py-2 text-xl mb-10">
            When someone entrusts us with their capital, they are entrusting us with their family&apos;s future. That is not a transaction. It is a mandate.
          </p>
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
