'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, BarChart3, Users } from 'lucide-react';

const PILLARS = [
  {
    icon: TrendingUp,
    title: 'Income',
    description: 'Generate sustainable cashflow.',
  },
  {
    icon: ShieldCheck,
    title: 'Protection',
    description: 'Preserve capital against inflation and uncertainty.',
  },
  {
    icon: BarChart3,
    title: 'Growth',
    description: 'Compound wealth through patient, consistent capital allocation.',
  },
  {
    icon: Users,
    title: 'Legacy',
    description: 'Transfer wealth across generations.',
  },
];

export default function WealthPillars() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            The Wealth Mandate
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Wealth Is More Than Investment Returns
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl border border-border/60 bg-background hover:bg-muted/40 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
