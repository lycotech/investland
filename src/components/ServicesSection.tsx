'use client';

import { motion } from 'framer-motion';
import { Briefcase, LineChart, PieChart, Landmark, Target, Building } from 'lucide-react';

const SERVICES = [
  {
    title: 'Asset Management',
    description: 'Expert management of your investments to multiply your wealth over time with minimal risk.',
    icon: Briefcase,
  },
  {
    title: 'Portfolio Management',
    description: 'Custom portfolio construction tailored to your risk tolerance, timeline, and financial goals.',
    icon: PieChart,
  },
  {
    title: 'Investment Advisory',
    description: 'Data-backed financial advice to help you navigate complex market conditions and optimize returns.',
    icon: Target,
  },
  {
    title: 'Fund Management',
    description: 'Institutional-grade fund structures designed for corporate bodies and syndicates.',
    icon: LineChart,
  },
  {
    title: 'Wealth Planning',
    description: 'Holistic financial planning including retirement strategies, estate planning, and tax efficiency.',
    icon: Landmark,
  },
  {
    title: 'Real Estate Investment',
    description: 'Access to premium, high-yield real estate portfolios for robust capital appreciation.',
    icon: Building,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Wealth Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide a diverse range of financial services designed to preserve your capital and sustain growth across generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon || Briefcase;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-background rounded-xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon size={28} className="text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
