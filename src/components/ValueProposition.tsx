'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, TrendingUp, Eye, Target } from 'lucide-react';

const PHILOSOPHY = [
  { icon: ShieldCheck, label: 'Preserve capital first' },
  { icon: Target, label: 'Deploy with discipline' },
  { icon: TrendingUp, label: 'Optimize for long-term value' },
  { icon: Eye, label: 'Maintain full transparency' },
];

const ADVANTAGES = [
  'Institutional-grade investment discipline',
  'Structured and transparent portfolio management',
  'Access to curated investment opportunities',
  'Strong governance and risk oversight',
  'Long-term wealth preservation focus',
];

export default function ValueProposition() {
  return (
    <>
      {/* Investment Approach */}
      <section id="value-proposition" className="py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <span className="text-white/60 font-semibold tracking-wider uppercase text-sm mb-3 block">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                A Disciplined Approach to Wealth Management
              </h2>
              <p className="text-lg text-white/80 mb-10 leading-relaxed">
                We combine market intelligence, structured execution, and rigorous risk management to deliver consistent outcomes.
              </p>
              <div className="space-y-4">
                {PHILOSOPHY.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className="flex items-center gap-4 bg-white/10 rounded-xl px-6 py-4 border border-white/10"
                    >
                      <Icon className="text-gold flex-shrink-0" size={22} />
                      <span className="font-medium text-white">{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="bg-white rounded-3xl p-10 text-foreground shadow-2xl">
                <h3 className="text-2xl font-bold mb-2 text-foreground">The Invest-Trust Advantage</h3>
                <p className="text-muted-foreground text-sm mb-8">What sets our investment process apart.</p>
                <div className="space-y-5">
                  {ADVANTAGES.map((adv, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.12 + 0.4 }}
                      className="flex items-start gap-4 group"
                    >
                      <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={22} />
                      <p className="text-base font-medium text-foreground/90">{adv}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-10 border-t border-border pt-8">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Detailed investment memoranda and portfolio reporting are provided to all clients. Every investment is carefully structured, reviewed, and managed within a disciplined framework.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
