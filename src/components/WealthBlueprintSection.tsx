'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Target, Shield, TrendingUp, Wallet, Gift } from 'lucide-react';
import Link from 'next/link';

const STAGES = [
  {
    number: '01',
    icon: Target,
    title: 'Build',
    tagline: 'Lay the foundation of your wealth.',
    details:
      'Identify income streams, establish investment mandates and begin systematic capital accumulation with a clear strategy. This stage sets the trajectory for everything that follows.',
  },
  {
    number: '02',
    icon: Shield,
    title: 'Protect',
    tagline: 'Secure what you have built.',
    details:
      'Structure your portfolio to withstand inflation, market volatility and unforeseen risks. Protection is not passive — it requires deliberate allocation across asset classes.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Grow',
    tagline: 'Compound through disciplined investing.',
    details:
      'Deploy capital into carefully underwritten private credit, real assets and equity opportunities that generate risk-adjusted returns above inflation over time.',
  },
  {
    number: '04',
    icon: Wallet,
    title: 'Generate Income',
    tagline: 'Make your wealth work for you.',
    details:
      'Transition from accumulation to income distribution. Design a cashflow architecture that sustains your lifestyle without eroding your capital base.',
  },
  {
    number: '05',
    icon: Gift,
    title: 'Transfer Wealth',
    tagline: 'Build what outlasts you.',
    details:
      'Establish governance frameworks, succession structures and estate planning mechanisms to ensure your wealth transfers efficiently and intentionally to the next generation.',
  },
];

export default function WealthBlueprintSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="wealth-blueprint" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left: Sticky Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-2/5 lg:sticky lg:top-28"
          >
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
              The ITAML Framework
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Wealth Blueprint
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A structured five-stage framework that guides every client from first investment through to generational legacy.
            </p>
            <Link
              href="/wealth-blueprint"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-colors text-sm"
            >
              Explore the Full Blueprint
            </Link>
          </motion.div>

          {/* Right: Interactive Accordion */}
          <div className="w-full lg:w-3/5 space-y-3">
            {STAGES.map((stage, index) => {
              const Icon = stage.icon;
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-primary border-primary shadow-lg'
                      : 'bg-background border-border/50 hover:border-gold/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen ? 'bg-gold/15' : 'bg-primary/5'
                      }`}
                    >
                      <Icon size={20} className={isOpen ? 'text-gold' : 'text-primary'} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs font-semibold ${
                            isOpen ? 'text-gold/70' : 'text-muted-foreground'
                          }`}
                        >
                          {stage.number}
                        </span>
                        <h3
                          className={`text-lg font-bold ${
                            isOpen ? 'text-white' : 'text-foreground'
                          }`}
                        >
                          {stage.title}
                        </h3>
                      </div>
                      <p
                        className={`text-sm mt-0.5 ${
                          isOpen ? 'text-white/65' : 'text-muted-foreground'
                        }`}
                      >
                        {stage.tagline}
                      </p>
                    </div>
                    <div
                      className={`flex-shrink-0 ${
                        isOpen ? 'text-white/50' : 'text-muted-foreground'
                      }`}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-white/10">
                          <p className="text-white/70 leading-relaxed text-sm mt-4">
                            {stage.details}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
