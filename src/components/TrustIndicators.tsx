'use client';

import { ShieldCheck, Award, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const INDICATORS = [
  { icon: ShieldCheck, label: 'SEC Licensed & Regulated' },
  { icon: Users, label: 'Trusted by 10k+ Investors' },
  { icon: TrendingUp, label: 'Research-Driven Strategy' },
  { icon: Award, label: 'Award-Winning Firm' },
];

export default function TrustIndicators() {
  return (
    <section className="bg-background py-10 border-b border-border/50 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center justify-between">
          {INDICATORS.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-primary" size={20} />
                </div>
                <span className="text-sm font-medium text-foreground/80 leading-snug">
                  {indicator.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
