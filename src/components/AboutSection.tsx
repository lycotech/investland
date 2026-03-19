'use client';

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          
          {/* Left: Imagery / Stat Boxes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 flex flex-col justify-center min-h-[200px]">
                  <h4 className="text-4xl font-bold text-primary mb-2">15+</h4>
                  <p className="text-muted-foreground font-medium">Years of Excellence</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-border/50 flex flex-col justify-center min-h-[200px]">
                  <h4 className="text-4xl font-bold text-foreground mb-2">₦50B+</h4>
                  <p className="text-muted-foreground font-medium">Assets Under Management</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gold text-white p-8 rounded-2xl shadow-lg flex flex-col justify-center min-h-[200px]">
                  <h4 className="text-4xl font-bold mb-2">10k+</h4>
                  <p className="text-white/90 font-medium">Active Investors</p>
                </div>
                <div className="bg-primary p-8 rounded-2xl shadow-xl flex flex-col justify-center min-h-[200px]">
                  <Building2 size={40} className="text-gold mb-4" />
                  <p className="text-white/90 font-medium leading-snug">Globally recognized financial institution.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
              About Invest Trust
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Legacy of Trust, Innovation & Growth.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We are a SEC-licensed asset management firm dedicated to preserving and multiplying wealth for high-net-worth individuals, corporations, and institutional investors.
              </p>
              <p>
                Founded on the principles of transparency and rigorous market analysis, Invest Trust transcends traditional asset management. We view every portfolio as a unique architectural project—requiring a strong foundation, strategic vision, and meticulous daily management.
              </p>
            </div>
            
            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <div className="w-8 h-px bg-gold" /> Our Mission
                </h4>
                <p className="text-muted-foreground">To empower our clients with resilient financial strategies that secure their legacy and financial freedom.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <div className="w-8 h-px bg-gold" /> Our Vision
                </h4>
                <p className="text-muted-foreground">To be the premier partner for wealth creation in Africa, distinguished by exceptional returns and uncompromising integrity.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
