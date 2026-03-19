'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">

          {/* Left: Stat Boxes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 flex flex-col justify-center min-h-[190px]">
                  <h4 className="text-4xl font-bold text-primary mb-2">₦10M+</h4>
                  <p className="text-muted-foreground font-medium">Minimum Mandate Threshold</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-border/50 flex flex-col justify-center min-h-[190px]">
                  <h4 className="text-4xl font-bold text-foreground mb-2">100%</h4>
                  <p className="text-muted-foreground font-medium">Structured Mandates</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gold text-white p-8 rounded-2xl shadow-lg flex flex-col justify-center min-h-[190px]">
                  <h4 className="text-4xl font-bold mb-2">SEC</h4>
                  <p className="text-white/90 font-medium">Licensed & Regulated Asset Manager</p>
                </div>
                <div className="bg-primary p-8 rounded-2xl shadow-xl flex flex-col justify-center min-h-[190px]">
                  <p className="text-white/90 font-medium leading-snug text-lg">Every portfolio is treated as a structured mandate — not a transaction.</p>
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
              About Invest-Trust
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Legacy of Discipline, Trust and Performance.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Invest-Trust Asset Management Limited is a SEC-licensed firm dedicated to structuring and managing capital for individuals, corporates, and institutional investors.
              </p>
              <p>
                We operate with a strong commitment to transparency, disciplined execution, and long-term value creation.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <div className="w-8 h-px bg-gold" /> Our Mission
                </h4>
                <p className="text-muted-foreground">To structure and manage capital with discipline, transparency, and a singular focus on long-term value creation for every client.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <div className="w-8 h-px bg-gold" /> Our Vision
                </h4>
                <p className="text-muted-foreground">To be the most trusted institutional asset manager for private and corporate capital in Nigeria and across the African continent.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
