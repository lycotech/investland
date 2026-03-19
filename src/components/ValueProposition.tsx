'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const BULLETS = [
  'Data-driven investment decisions',
  'Risk-managed portfolios',
  'Long-term wealth strategy',
  'Transparent reporting & real-time insights',
];

export default function ValueProposition() {
  return (
    <section id="value-proposition" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
              Why Invest Trust?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              An Institutional Approach to Your Personal Wealth.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We move beyond generic advice to offer bespoke financial strategies. By combining deep market intelligence with rigorous risk management, we help our clients navigate volatility and achieve consistent, long-term growth.
            </p>
            
            <a
              href="#about"
              className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group"
            >
              Learn more about our methodology
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Background design element */}
            <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3 scale-105 z-0" />
            
            <div className="bg-white rounded-3xl p-8 md:p-12 relative z-10 border border-border/50 shadow-xl">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">
                The Invest Trust Advantage
              </h3>
              
              <div className="space-y-6">
                {BULLETS.map((bullet, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.4 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={24} />
                    <p className="text-lg font-medium text-foreground/90">
                      {bullet}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-primary text-white rounded-xl">
                <p className="font-medium text-lg mb-2">Ready to secure your future?</p>
                <p className="text-white/80 text-sm">Join the thousands who trust us with their portfolios.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
