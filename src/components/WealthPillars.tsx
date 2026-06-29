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

      gsap.from('.pillars-images', {
        opacity: 0,
        x: -40,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
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
    <section ref={sectionRef} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Image — left column */}
          <div className="pillars-images w-full lg:w-2/5 flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
              <img
                src="/coin.jpeg"
                alt="Investment growth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content — right column */}
          <div className="w-full lg:w-3/5">
            <div className="pillars-header mb-10">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
                The Wealth Mandate
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Wealth Is More Than Investment Returns
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="pillar-card group p-6 rounded-2xl border border-border/60 bg-background hover:bg-muted/40 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                      <Icon size={22} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
