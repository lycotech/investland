'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Landmark, Building2, Briefcase, Globe, Users } from 'lucide-react';
import Link from 'next/link';

const SOLUTIONS = [
  {
    icon: CalendarDays,
    title: 'Retirement Income Solutions',
    description: 'Income strategies designed to sustain your lifestyle well beyond your working years.',
    href: '/retirement',
  },
  {
    icon: Landmark,
    title: 'Private Credit Investments',
    description: 'Carefully selected income-generating credit opportunities backed by rigorous due diligence.',
    href: '/private-credit',
  },
  {
    icon: Building2,
    title: 'Real Asset Opportunities',
    description: 'Exposure to commercial real estate, infrastructure and energy assets that generate income and appreciate over time.',
    href: '/real-assets',
  },
  {
    icon: Briefcase,
    title: 'Corporate Treasury Management',
    description: 'Efficient deployment of surplus corporate liquidity into income-generating strategies with clear governance.',
    href: '/#contact',
  },
  {
    icon: Globe,
    title: 'Diaspora Wealth Solutions',
    description: 'Secure and transparent access to premium Nigerian investment opportunities from anywhere in the world.',
    href: '/#contact',
  },
  {
    icon: Users,
    title: 'Family Office Services',
    description: 'Comprehensive wealth management for families, founders and business owners with complex financial needs.',
    href: '/family-office',
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-2/5 lg:sticky lg:top-28"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Purpose-Built for Every Stage of Your Wealth Journey
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you are accumulating, protecting or transferring wealth — we have a purpose-built solution for your stage.
            </p>
          </motion.div>

          <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {SOLUTIONS.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Link
                    href={solution.href}
                    className="group flex flex-col bg-background rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 h-full"
                  >
                    <div className="w-13 h-13 w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                      <Icon size={22} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-base font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                      {solution.description}
                    </p>
                    <span className="mt-4 text-xs font-semibold text-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More →
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
