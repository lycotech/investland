'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { ShieldCheck, BarChart3, Landmark, ArrowRight } from 'lucide-react';
import { gsap } from '@/lib/gsap';

const HeroBackground = dynamic(() => import('./HeroBackground'), { ssr: false });

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Entrance timeline ── */
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from('.hero-word', {
          opacity: 0,
          y: 52,
          stagger: 0.07,
          duration: 0.75,
          ease: 'back.out(1.5)',
        }, '-=0.25')
        .from('.hero-sub', { opacity: 0, y: 22, duration: 0.65 }, '-=0.35')
        .from('.hero-cta', { opacity: 0, y: 18, duration: 0.55 }, '-=0.25')
        .from('.hero-trust-card', {
          opacity: 0,
          x: 55,
          duration: 0.85,
          ease: 'power3.out',
        }, '-=0.6')
        .from('.hero-mini-card', {
          opacity: 0,
          y: 32,
          stagger: 0.1,
          duration: 0.6,
          ease: 'back.out(1.3)',
        }, '-=0.45');

      /* ── Continuous float ── */
      gsap.to('.hero-trust-card', {
        y: -7,
        duration: 2.9,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
      gsap.to('.hero-mini-card:first-child', {
        y: -5,
        duration: 2.3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.6,
      });
      gsap.to('.hero-mini-card:last-child', {
        y: -5,
        duration: 3.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1.1,
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Base: royal blue gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E8A] via-[#1852CC] to-[#2D6AE8]" />

      {/* Right-half image blend — desktop only */}
      <div className="absolute inset-y-0 right-0 w-[48%] hidden lg:block overflow-hidden">
        <img
          src="/pexels-tima-miroshnichenko-6693658.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-[center_15%]"
        />
        <div className="absolute inset-0 bg-[#1852CC]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E8A] via-[#0A2E8A]/65 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0A2E8A]/80 to-transparent" />
      </div>

      {/* Geometric accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[50rem] h-[50rem] rounded-full border border-white/6" />
        <div className="absolute top-1/3 -left-32 w-[30rem] h-[30rem] rounded-full border border-white/5" />
        <div className="absolute bottom-32 -left-10 w-[22rem] h-[22rem] bg-white/8 rounded-full blur-[100px]" />
      </div>

      <HeroBackground />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center pt-24 pb-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

            {/* Left — headline + copy + CTAs */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">

              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6 overflow-hidden">
                <span className="block">
                  <span className="hero-word inline-block mr-[0.28em]">Building</span>
                  <span className="hero-word inline-block">Africa&apos;s</span>
                </span>
                <span className="block">
                  <span className="hero-word inline-block text-blue-200 mr-[0.28em]">Wealth</span>
                  <span className="hero-word inline-block">Infrastructure</span>
                </span>
              </h1>

              <p className="hero-sub text-lg md:text-xl text-white/75 mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0">
                Helping individuals, families, businesses and institutions
                preserve wealth, generate sustainable income and build lasting legacies.
              </p>

            </div>

            {/* Right — floating trust cards (desktop only) */}
            <div className="hidden lg:flex w-full lg:w-2/5 flex-col gap-4">
              <div className="hero-trust-card bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-8">
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
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BarChart3, label: 'Institutional Grade Research' },
                  { icon: Landmark, label: 'Private Market Access' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="hero-mini-card bg-white/8 backdrop-blur-md border border-white/12 rounded-2xl p-5 flex flex-col gap-3 hover:bg-white/14 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                        <Icon size={18} className="text-white" />
                      </div>
                      <p className="text-white/85 font-semibold text-xs leading-snug">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Fade into next section */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
