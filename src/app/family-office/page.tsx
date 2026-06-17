import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, PieChart, FileText, Users, Landmark, Shield, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Family Office Services',
  description:
    'Beyond investment management. ITAML Family Office Services for families, founders and business owners with complex financial needs — portfolio management, estate planning, succession structuring and more.',
};

const SERVICES = [
  {
    icon: PieChart,
    title: 'Portfolio Management',
    description: 'Holistic investment management across asset classes — aligned to the family\'s values, liquidity needs and generational timeline.',
  },
  {
    icon: FileText,
    title: 'Estate Planning Coordination',
    description: 'Working with your legal and tax advisers to structure assets in a way that minimises friction at every life stage.',
  },
  {
    icon: Users,
    title: 'Succession Structuring',
    description: 'Designing governance frameworks that ensure business and investment assets pass smoothly to the next generation.',
  },
  {
    icon: Landmark,
    title: 'Alternative Investments',
    description: 'Access to private credit, real assets and co-investment opportunities not available through public markets.',
  },
  {
    icon: Shield,
    title: 'Governance Advisory',
    description: 'Building family investment policies, charters and decision-making frameworks that preserve unity across generations.',
  },
  {
    icon: Heart,
    title: 'Philanthropic Planning',
    description: 'Structuring charitable giving and impact investments to align the family\'s legacy with its values.',
  },
];

const CLIENTS = [
  {
    title: 'Wealthy Families',
    description: 'Multi-generational families seeking to preserve and transfer wealth with governance and intention.',
  },
  {
    title: 'Business Founders',
    description: 'Entrepreneurs who have built significant wealth in their businesses and are ready to diversify and plan.',
  },
  {
    title: 'Executives & Professionals',
    description: 'Senior professionals with complex income structures, equity compensation and long-term planning needs.',
  },
];

export default function FamilyOfficePage() {
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
              Family Office Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              Beyond Investment Management
            </h1>
            <p className="text-xl text-gold font-medium mb-6">
              For families, founders and business owners.
            </p>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              A comprehensive wealth management service that addresses every dimension of your financial life — from portfolio construction to legacy structuring.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg group"
            >
              Begin the Conversation
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
              Who We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Built for Multi-Generational Wealth
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENTS.map((client) => (
              <div
                key={client.title}
                className="p-8 rounded-2xl border border-border/50 bg-background text-center hover:border-gold/25 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-0.5 bg-gold mx-auto mb-5" />
                <h3 className="text-xl font-bold text-foreground mb-3">{client.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-2/5 lg:sticky lg:top-28">
              <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Everything Your Wealth Requires
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We coordinate every aspect of your financial life, working alongside your existing advisers or as your primary wealth management partner.
              </p>
            </div>
            <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-5">
              {SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group p-7 rounded-2xl bg-background border border-border/50 hover:border-gold/25 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                      <Icon size={22} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start the Conversation
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Family Office engagements begin with a confidential consultation. There is no standard package — only what your family truly needs.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg group"
          >
            Request a Confidential Meeting
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
