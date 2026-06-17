'use client';

import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Lock, BarChart2, FileSearch } from 'lucide-react';

const DIFFERENTIATORS = [
  {
    number: '01',
    icon: Layers,
    title: 'Mandate-First, Not Product-First',
    description:
      'We do not sell investment products. We design mandates aligned to your objectives, timeline and risk appetite — then source the right vehicles to deliver them. The difference is significant.',
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'SEC Licensed and Independently Regulated',
    description:
      'ITAML is licensed by the Securities and Exchange Commission of Nigeria. Every client relationship is governed by a regulated framework with defined fiduciary obligations — not just best efforts.',
  },
  {
    number: '03',
    icon: Lock,
    title: 'Your Capital, Independently Held',
    description:
      'Client funds are held in trust by a regulated, independent custodian — never on ITAML\'s balance sheet. Your assets are fully segregated. We manage the mandate; we do not touch the principal.',
  },
  {
    number: '04',
    icon: BarChart2,
    title: 'Access Beyond the Public Markets',
    description:
      'We offer clients structured access to private credit, real estate and alternative assets — investment classes that most retail platforms cannot offer to individual investors at any meaningful scale.',
  },
  {
    number: '05',
    icon: FileSearch,
    title: 'Research Before Every Allocation',
    description:
      'Every investment is underwritten before deployment. Clients receive investment memoranda that explain what we own and why — not just transaction confirmations after the fact.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            Why Invest-Trust
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Why Investors Choose Invest-Trust
          </h2>
        </motion.div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {DIFFERENTIATORS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 py-8 border-b border-border/50 last:border-0"
              >
                {/* Icon column */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center">
                    <Icon size={22} className="text-primary" />
                  </div>
                </div>

                {/* Content column */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-primary/40 tracking-widest">{item.number}</span>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
