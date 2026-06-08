'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Users } from 'lucide-react';

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Protect Capital',
    description: 'Capital preservation is the foundation of every mandate. We deploy only where risk is understood, quantified and actively managed.',
  },
  {
    icon: TrendingUp,
    title: 'Generate Income',
    description: 'Sustainable cashflow separates wealth that works from wealth that sits. Every portfolio is designed to produce income.',
  },
  {
    icon: Users,
    title: 'Build Legacy',
    description: 'Wealth without structure rarely survives a generation. We design for transfer, not just accumulation.',
  },
];

export default function InvestmentPhilosophy() {
  return (
    <section id="philosophy" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">

        {/* Large Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-8 block">
            Our Investment Philosophy
          </span>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-10" />
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
            &ldquo;We do not chase trends. We allocate capital with discipline, patience and conviction.&rdquo;
          </blockquote>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="w-10 h-0.5 bg-gold mx-auto mb-5" />
                <h3 className="text-xl font-bold text-foreground mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
