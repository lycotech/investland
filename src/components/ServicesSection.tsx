'use client';

import { motion } from 'framer-motion';
import { BarChart3, Building2, PieChart, Landmark, Users, Globe } from 'lucide-react';

const SERVICES = [
  {
    title: 'Fixed Income Strategies',
    description: 'Stable, income-generating instruments designed for capital preservation and consistent returns across market cycles.',
    icon: BarChart3,
  },
  {
    title: 'Real Estate Investments',
    description: 'Structured exposure to high-quality real estate opportunities offering strong capital appreciation and rental yield.',
    icon: Building2,
  },
  {
    title: 'Private Credit & Alternatives',
    description: 'Carefully underwritten private credit and alternative asset opportunities delivering enhanced yield for qualified investors.',
    icon: Landmark,
  },
  {
    title: 'Portfolio & Wealth Structuring',
    description: 'Holistic portfolio construction aligned with long-term goals, risk appetite, and cross-border wealth considerations.',
    icon: PieChart,
  },
];

const WHO_WE_SERVE = [
  {
    title: 'High Net Worth Individuals',
    description: 'Structured portfolio management designed to preserve and grow multi-generational wealth.',
    icon: Users,
  },
  {
    title: 'Corporate Treasury & Business Owners',
    description: 'Efficient deployment of surplus liquidity into income-generating strategies with clear governance.',
    icon: Building2,
  },
  {
    title: 'Institutional & Syndicated Capital',
    description: 'Custom investment structures for large-scale capital allocation with detailed mandate reporting.',
    icon: Landmark,
  },
  {
    title: 'Diaspora Investors',
    description: 'Secure and transparent access to premium Nigerian investment opportunities from anywhere in the world.',
    icon: Globe,
  },
];

export default function ServicesSection() {
  return (
    <>
      {/* What We Do */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-2/5 lg:sticky lg:top-28"
            >
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
                What We Do
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                We Structure and Manage Capital with Precision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Invest-Trust, we move beyond generic investment products. We design and manage structured portfolios across fixed income, real estate, and alternative assets — tailored to preserve capital, generate income, and deliver long-term value.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Each mandate is approached with discipline, transparency, and a deep understanding of risk.
              </p>
            </motion.div>

            <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-background rounded-xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon size={26} className="text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
              Who We Serve
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Built for Individuals and Institutions Deploying Serious Capital
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHO_WE_SERVE.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-2xl border border-border/50 bg-muted/20 hover:bg-background hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <Icon size={22} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12 text-sm text-muted-foreground border border-border/60 rounded-lg px-6 py-4 max-w-lg mx-auto bg-muted/30"
          >
            <span className="font-semibold text-foreground">Minimum mandate: ₦10,000,000.</span> We work with clients deploying serious, long-term capital.
          </motion.p>
        </div>
      </section>
    </>
  );
}
