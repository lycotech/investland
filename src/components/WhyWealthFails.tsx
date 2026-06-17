'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FAILURE_CARDS = [
  {
    number: '01',
    title: 'Income Without Structure',
    description: 'High earnings without a clear investment strategy rarely translate to lasting wealth.',
  },
  {
    number: '02',
    title: 'Assets Without Liquidity',
    description: 'Wealth locked in illiquid assets creates vulnerability when it matters most.',
  },
  {
    number: '03',
    title: 'Retirement Without Planning',
    description: 'Most Nigerians reach retirement without a reliable income stream to sustain their lifestyle.',
  },
  {
    number: '04',
    title: 'Legacy Without Governance',
    description: 'Generational wealth erodes when there is no structure to manage succession and transfer.',
  },
];

const FRAMEWORK_STAGES = ['Earn', 'Invest', 'Grow', 'Generate Income', 'Transfer Wealth'];

export default function WhyWealthFails() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-200 font-semibold tracking-wider uppercase text-sm mb-3 block">
            The Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Why Wealth Fails
          </h2>
        </motion.div>

        {/* 4 Failure Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {FAILURE_CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/6 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-white/12 flex items-center justify-center mb-5">
                <span className="text-white font-bold text-xs">{card.number}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Signature Framework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-white/50 font-semibold tracking-widest uppercase text-xs mb-10">
            How ITAML Solves This
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-0">
            {FRAMEWORK_STAGES.map((stage, index) => (
              <div key={stage} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 + 0.3 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-white/8 border border-white/25 flex items-center justify-center mb-3 hover:bg-white/15 hover:border-white/50 transition-all duration-300 cursor-default">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-white font-semibold text-xs text-center max-w-[90px] leading-snug">
                    {stage}
                  </span>
                </motion.div>
                {index < FRAMEWORK_STAGES.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="text-white/25 mx-3 mb-6 hidden md:block flex-shrink-0"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
