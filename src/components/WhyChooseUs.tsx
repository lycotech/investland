'use client';

import { useEffect, useRef } from 'react';
import { Layers, ShieldCheck, Lock, BarChart2, FileSearch, ExternalLink } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

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
    verifyHref: 'https://sec.gov.ng/for-investors/find-a-registered-operator/?query=Invest-trust',
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
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Header ── */
      gsap.from('.why-header', {
        opacity: 0,
        y: 28,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      /* ── Items: alternate slide from left / right per column ── */
      gsap.from('.why-item-left', {
        opacity: 0,
        x: -45,
        stagger: { each: 0.13, from: 'start' },
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 68%',
          once: true,
        },
      });

      gsap.from('.why-item-right', {
        opacity: 0,
        x: 45,
        stagger: { each: 0.13, from: 'start' },
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 68%',
          once: true,
        },
      });

      /* ── Icon containers: scale pop ── */
      gsap.from('.why-icon', {
        scale: 0,
        rotation: -15,
        duration: 0.45,
        stagger: { each: 0.1, from: 'start' },
        ease: 'back.out(1.8)',
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 68%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="why-header max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Why Investors Trust Us
          </h2>
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {DIFFERENTIATORS.map((item, index) => {
            const Icon = item.icon;
            const isRight = index % 2 === 1;
            return (
              <div
                key={item.number}
                className={`${isRight ? 'why-item-right' : 'why-item-left'} flex gap-6 py-8 border-b border-white/10 last:border-0`}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="why-icon w-12 h-12 rounded-xl bg-white/12 flex items-center justify-center">
                    <Icon size={22} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="why-number text-xs font-bold text-white/40 tracking-widest">{item.number}</span>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                  {'verifyHref' in item && item.verifyHref && (
                    <a
                      href={item.verifyHref as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs text-white/80 font-semibold hover:underline"
                    >
                      Verify on SEC.gov.ng
                      <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
