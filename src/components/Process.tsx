'use client';

import { motion } from 'framer-motion';
import { UserPlus, Wallet, BarChart3, TrendingUp } from 'lucide-react';

const STEPS = [
  {
    icon: UserPlus,
    title: '1. Open Your Account',
    description: 'Complete our secure, streamlined onboarding process in minutes. Provide basic KYC to get started.',
  },
  {
    icon: Wallet,
    title: '2. Fund Your Investment',
    description: 'Choose from multiple convenient funding options. Your capital is held securely with top-tier custodians.',
  },
  {
    icon: BarChart3,
    title: '3. Portfolio Strategy',
    description: 'Our advisors construct and allocate your portfolio based on rigorous market research and your risk profile.',
  },
  {
    icon: TrendingUp,
    title: '4. Track & Grow',
    description: 'Monitor your yields in real-time through our client portal, while our team continuously optimizes your assets.',
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            A Seamless Journey to Wealth.
          </h2>
          <p className="text-lg text-muted-foreground">
            We are redefining convenience in asset management. Getting access to premium investment opportunities has never been easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Connecting Line (desktop only) */}
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-border group-hover:bg-primary transition-colors duration-500 z-0" />
                )}
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white border-2 border-primary/20 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-primary group-hover:scale-110 group-hover:text-white group-hover:bg-primary transition-all duration-300">
                    <Icon size={32} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
