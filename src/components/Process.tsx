'use client';

import { motion } from 'framer-motion';
import { MessageSquare, FileText, Briefcase, Activity } from 'lucide-react';

const STEPS = [
  {
    icon: MessageSquare,
    title: 'Initial Consultation',
    description: 'We begin with a confidential conversation to understand your capital objectives, risk profile, and investment timeline.',
  },
  {
    icon: FileText,
    title: 'Portfolio Structuring',
    description: 'A bespoke investment mandate is designed — covering asset allocation, risk parameters, return targets, and liquidity requirements.',
  },
  {
    icon: Briefcase,
    title: 'Mandate Execution',
    description: 'Capital is deployed with precision across curated strategies. All transactions are fully documented and reported.',
  },
  {
    icon: Activity,
    title: 'Ongoing Monitoring & Reporting',
    description: 'You receive detailed portfolio reporting on a regular basis. We continuously review and optimise performance against your mandate.',
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            How We Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Engagement Process
          </h2>
          <p className="text-lg text-muted-foreground">
            A structured, transparent process from first conversation to ongoing portfolio management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Step number */}
                <div className="absolute -top-3 left-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center z-10 shadow-md">
                  {index + 1}
                </div>
                <div className="relative z-10 flex flex-col items-center text-center pt-6">
                  <div className="w-20 h-20 bg-white border-2 border-primary/20 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-primary group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    <Icon size={30} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
