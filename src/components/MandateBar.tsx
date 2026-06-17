'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export default function MandateBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Bar slide-in ── */
      gsap.from(barRef.current, {
        opacity: 0,
        y: -8,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: barRef.current,
          start: 'top 95%',
        },
      });

      /* ── Count-up: 0 → 10,000,000 ── */
      const counter = { val: 0 };
      ScrollTrigger.create({
        trigger: barRef.current,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            val: 10000000,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              if (countRef.current) {
                countRef.current.textContent =
                  '₦' + Math.floor(counter.val).toLocaleString('en-NG');
              }
            },
          });
        },
      });
    }, barRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={barRef} className="bg-foreground text-white py-4">
      <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 text-center">
        <span className="text-white/55 text-xs font-semibold tracking-widest uppercase">
          Minimum Portfolio Mandate
        </span>
        <span className="hidden sm:block text-white/20 text-sm">|</span>
        <span ref={countRef} className="text-white font-bold text-xl tracking-tight">
          ₦10,000,000
        </span>
        <span className="hidden sm:block text-white/20 text-sm">|</span>
        <span className="text-white/50 text-xs tracking-wide">
          Individuals &nbsp;·&nbsp; Families &nbsp;·&nbsp; Institutions
        </span>
      </div>
    </div>
  );
}
