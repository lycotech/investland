'use client';

import { useEffect, useRef } from 'react';
import { FileText, Landmark, LogOut, ReceiptText } from 'lucide-react';
import { gsap } from '@/lib/gsap';

const ITEMS = [
  {
    icon: FileText,
    label: 'Reporting Frequency',
    value: 'Monthly + Quarterly',
    detail:
      'Monthly performance summaries are sent to all clients. Full quarterly reports include position-level commentary, market context and an outlook on each active allocation.',
  },
  {
    icon: Landmark,
    label: 'How Funds Are Held',
    value: 'Independent Custodian',
    detail:
      'Client assets are held in trust by a regulated, independent custodian — not on ITAML\'s balance sheet. Your capital is fully ring-fenced and never commingled with ours.',
  },
  {
    icon: LogOut,
    label: 'Exit Process',
    value: '30 Days Notice (Liquid)',
    detail:
      'Liquid mandates allow redemption with 30 days\' written notice. Private credit and real asset mandates are subject to the agreed investment horizon, typically 12 to 36 months.',
  },
  {
    icon: ReceiptText,
    label: 'Fee Structure',
    value: 'Management + Performance',
    detail:
      'Fees are charged as a management fee on assets under advice, plus a performance fee above an agreed benchmark hurdle rate. The full fee schedule is disclosed in writing before the mandate is signed.',
  },
];

export default function OnboardingExpectations() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.onboard-header', {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      gsap.from('.onboard-card', {
        autoAlpha: 0,
        y: 40,
        scale: 0.93,
        stagger: { each: 0.1, from: 'start' },
        duration: 0.65,
        ease: 'back.out(1.4)',
        clearProps: 'all',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-muted/40">
      <div ref={sectionRef} className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="onboard-header text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            Getting Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What to Expect When You Work With Us
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We believe clients should know the terms before the first conversation. Here is what a typical mandate looks like.
          </p>
        </div>

        {/* 4 cards in a single row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="onboard-card bg-background rounded-2xl p-7 border border-border/50 shadow-sm flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-xl font-bold text-primary">{item.value}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
