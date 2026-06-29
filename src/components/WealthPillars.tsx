'use client';

import { useEffect, useRef } from 'react';
import { TrendingUp, ShieldCheck, BarChart3, Users } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

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
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pillars-header', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 72%',
          once: true,
        },
      });

      gsap.from('.pillar-card', {
        autoAlpha: 0,
        y: 55,
        scale: 0.9,
        stagger: { each: 0.12, from: 'start' },
        duration: 0.75,
        ease: 'back.out(1.6)',
        clearProps: 'all',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/coin.jpeg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Primary color overlay — matches hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">

        <div className="pillars-header mb-12 max-w-2xl">
          <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
            The Wealth Mandate
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Wealth Is More Than Investment Returns
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="pillar-card group p-6 rounded-2xl border border-white/15 bg-white/8 hover:bg-white/15 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                  <Icon size={22} className="text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
