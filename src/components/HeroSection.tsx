'use client';

import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, BarChart3, Landmark, Users } from 'lucide-react';

const METRICS = [
  { icon: ShieldCheck, label: 'SEC Licensed' },
  { icon: BarChart3, label: 'Institutional Grade Research' },
  { icon: Landmark, label: 'Private Market Access' },
  { icon: Users, label: 'Retirement Solutions' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image — Lagos skyline / premium architectural imagery */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* Dark navy overlay — solid on left, lighter on right to let texture breathe */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/97 via-primary/92 to-primary/70" />
      {/* Subtle gold ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.08, 0.14, 0.08] }}
          transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
          className="absolute -top-40 right-20 w-[30rem] h-[30rem] bg-gold/15 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -20, 0], opacity: [0.04, 0.09, 0.04] }}
          transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
          className="absolute bottom-24 left-10 w-[22rem] h-[22rem] bg-gold/8 rounded-full blur-[100px]"
        />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left — Headline + Copy + CTAs */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 text-gold text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
                SEC Licensed Asset Manager · Nigeria
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
                Building Africa&apos;s <br className="hidden md:block" />
                <span className="text-gold">Wealth</span>{' '}
                Infrastructure
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              Helping individuals, families, businesses and institutions preserve
              wealth, generate sustainable income and build lasting legacies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-gold text-primary font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg flex items-center justify-center gap-2 group"
              >
                Start Your Wealth Journey
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/8 border border-white/20 text-white font-medium rounded-md hover:bg-white/15 transition-colors flex items-center justify-center"
              >
                Speak With An Advisor
              </a>
            </motion.div>
          </div>

          {/* Right — Floating Metrics (desktop only) */}
          <div className="hidden lg:grid w-full lg:w-2/5 grid-cols-2 gap-4">
            {METRICS.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 + index * 0.12, ease: 'easeOut' }}
                  className={`bg-white/8 backdrop-blur-md border border-white/12 rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/12 transition-colors${
                    index % 2 === 1 ? ' mt-8' : ''
                  }`}
                >
                  <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <p className="text-white font-semibold text-sm leading-snug">
                    {metric.label}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
