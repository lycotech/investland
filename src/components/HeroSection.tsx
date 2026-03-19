'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* White gradient overlay — keeps text readable while showing the image on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />
      {/* Subtle animated accent blobs on top of the image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          className="absolute -top-32 right-10 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[22rem] h-[22rem] bg-cyan-400/10 rounded-full blur-[90px]"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight mb-6">
              Building Wealth. <br className="hidden md:block" />
              <span className="text-primary">Securing Futures.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            Trusted asset management solutions for individuals, businesses, and institutions. Discover tailored strategies designed for long-term growth and capital preservation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center md:justify-start"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors shadow-lg flex items-center justify-center gap-2 group"
            >
              Start Investing
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-white border border-border text-foreground font-medium rounded-md hover:bg-muted transition-colors shadow-sm flex items-center justify-center"
            >
              Talk to an Advisor
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
