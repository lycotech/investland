'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ChevronRight, ShieldCheck, BarChart3, Landmark, Users, ArrowRight } from 'lucide-react';

const HeroBackground = dynamic(() => import('./HeroBackground'), { ssr: false });

const STATS = [
  {
    icon: ShieldCheck,
    label: 'SEC Licensed',
    sub: 'Verify Registration',
    href: 'https://sec.gov.ng/for-investors/find-a-registered-operator/?query=Invest-trust',
  },
  { icon: BarChart3, label: 'Institutional Grade', sub: 'Research' },
  { icon: Landmark, label: 'Private Market', sub: 'Access' },
  { icon: Users, label: 'Retirement', sub: 'Solutions' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Base: royal blue gradient — covers everything on mobile, left half on desktop */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E8A] via-[#1852CC] to-[#2D6AE8]" />

      {/* Right-half image blend — desktop only */}
      <div className="absolute inset-y-0 right-0 w-[48%] hidden lg:block overflow-hidden">
        {/* The photo — cropped to upper body (avoids desk/cash at bottom) */}
        <img
          src="/pexels-tima-miroshnichenko-6693658.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-[center_15%]"
        />
        {/* Royal blue colour tint — ties image into the brand */}
        <div className="absolute inset-0 bg-[#1852CC]/55" />
        {/* Horizontal blend: left edge fades from solid blue into the tinted image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E8A] via-[#0A2E8A]/65 to-transparent" />
        {/* Bottom vignette — hides desk/cash if they peek in */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0A2E8A]/80 to-transparent" />
      </div>

      {/* Geometric circle accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[50rem] h-[50rem] rounded-full border border-white/6" />
        <div className="absolute top-1/3 -left-32 w-[30rem] h-[30rem] rounded-full border border-white/5" />
        {/* Left-side glow (mobile + desktop left) */}
        <motion.div
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          className="absolute bottom-32 -left-10 w-[22rem] h-[22rem] bg-white/8 rounded-full blur-[100px]"
        />
      </div>

      {/* Three.js ambient globe — renders over the blend, reads as floating in right half */}
      <HeroBackground />

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center pt-24 pb-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

            {/* Left — headline + copy + CTAs */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <a
                  href="https://sec.gov.ng/for-investors/find-a-registered-operator/?query=Invest-trust"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/12 border border-white/20 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8 hover:bg-white/20 transition-colors"
                >
                  SEC Licensed Asset Manager · Nigeria
                </a>

                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                  Building Africa&apos;s <br className="hidden md:block" />
                  <span className="text-blue-200">Wealth</span>{' '}
                  Infrastructure
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18, ease: 'easeOut' }}
                className="text-lg md:text-xl text-white/75 mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0"
              >
                Helping individuals, families, businesses and institutions
                preserve wealth, generate sustainable income and build lasting legacies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.34, ease: 'easeOut' }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-xl flex items-center justify-center gap-2 group"
                >
                  Start Your Wealth Journey
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  Speak With An Advisor
                </a>
              </motion.div>
            </div>

            {/* Right — floating trust cards (desktop only) */}
            <div className="hidden lg:flex w-full lg:w-2/5 flex-col gap-4">
              {/* Large card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">SEC Licensed</p>
                    <a
                      href="https://sec.gov.ng/for-investors/find-a-registered-operator/?query=Invest-trust"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-200/70 text-xs hover:text-blue-200 transition-colors"
                    >
                      Verify on SEC.gov.ng →
                    </a>
                  </div>
                </div>
                <div className="h-px bg-white/10 mb-5" />
                <p className="text-white/70 text-sm leading-relaxed">
                  Regulated, transparent, and built to endure. Every client mandate is managed around preserving capital, generating income, and creating generational wealth.
                </p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-blue-200 text-sm font-semibold hover:text-white transition-colors group">
                  Begin your journey
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Two small cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BarChart3, label: 'Institutional Grade Research' },
                  { icon: Landmark, label: 'Private Market Access' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.45 + i * 0.1, ease: 'easeOut' }}
                      className="bg-white/8 backdrop-blur-md border border-white/12 rounded-2xl p-5 flex flex-col gap-3 hover:bg-white/14 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                        <Icon size={18} className="text-white" />
                      </div>
                      <p className="text-white/85 font-semibold text-xs leading-snug">{item.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom stats strip ─────────────────────────────────── */}
      <div className="relative z-10 border-t border-white/10 bg-black/15 backdrop-blur-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              const inner = (
                <>
                  <Icon size={18} className="text-blue-200 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm leading-none">{stat.label}</p>
                    <p className="text-white/50 text-xs mt-0.5">{stat.sub}</p>
                  </div>
                </>
              );
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
                  className="flex items-center gap-3 py-5 px-4 first:pl-0 border-r border-white/8 last:border-0"
                >
                  {stat.href ? (
                    <a
                      href={stat.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                      {inner}
                    </a>
                  ) : inner}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fade into next section */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
