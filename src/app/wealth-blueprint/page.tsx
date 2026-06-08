'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronRight, Target, Shield, TrendingUp, Wallet, Gift, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { INSIGHTS } from '@/lib/insights-data';

const STAGES = [
  {
    number: '01',
    icon: Target,
    title: 'Build Wealth',
    colour: 'bg-primary/8 border-primary/20',
    activeColour: 'bg-primary border-primary',
    tagline: 'Lay the foundation.',
    detail:
      'Building wealth begins with clarity — identifying your income streams, setting investment mandates and beginning systematic capital accumulation. Without a structure for building, wealth accumulates by accident and disappears the same way.',
    actions: [
      'Establish your first investment mandate',
      'Set clear accumulation targets',
      'Diversify income streams',
      'Define your investment timeline',
    ],
  },
  {
    number: '02',
    icon: Shield,
    title: 'Protect Wealth',
    colour: 'bg-gold/5 border-gold/20',
    activeColour: 'bg-gold border-gold',
    tagline: 'Secure what you have built.',
    detail:
      'Protection is not passive. It requires deliberate allocation across asset classes, hedging against inflation, and ensuring that your portfolio can withstand economic shocks. Most wealth is lost not in the building but in the failure to protect.',
    actions: [
      'Diversify across uncorrelated assets',
      'Hedge against naira inflation',
      'Establish emergency liquidity buffers',
      'Review insurance and risk coverage',
    ],
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Grow Wealth',
    colour: 'bg-primary/8 border-primary/20',
    activeColour: 'bg-primary border-primary',
    tagline: 'Compound with discipline.',
    detail:
      'Growth is achieved through patient, disciplined deployment into carefully underwritten opportunities — private credit, real assets and equity. The compounding effect of consistent, above-inflation returns is the single most powerful force in wealth creation.',
    actions: [
      'Deploy into private credit',
      'Add real asset exposure',
      'Reinvest income consistently',
      'Review and rebalance quarterly',
    ],
  },
  {
    number: '04',
    icon: Wallet,
    title: 'Generate Income',
    colour: 'bg-gold/5 border-gold/20',
    activeColour: 'bg-gold border-gold',
    tagline: 'Make wealth work for you.',
    detail:
      'The transition from accumulation to income is the most critical phase for most investors. A cashflow architecture designed to replace employment income — without eroding the capital base — is the difference between financial freedom and financial dependency.',
    actions: [
      'Design a sustainable withdrawal strategy',
      'Structure income across multiple sources',
      'Align income to lifestyle requirements',
      'Plan for income tax efficiency',
    ],
  },
  {
    number: '05',
    icon: Gift,
    title: 'Transfer Wealth',
    colour: 'bg-primary/8 border-primary/20',
    activeColour: 'bg-primary border-primary',
    tagline: 'Build what outlasts you.',
    detail:
      'Without intentional transfer structures, even significant wealth can erode across one generation. Estate planning, family governance, succession frameworks and trust structures ensure that wealth transfers with intention — not by default.',
    actions: [
      'Establish a succession framework',
      'Create or review your will and estate plan',
      'Set up family investment governance',
      'Define charitable and philanthropic intentions',
    ],
  },
];

export default function WealthBlueprintPage() {
  const [activeStage, setActiveStage] = useState(0);
  const active = STAGES[activeStage];
  const ActiveIcon = active.icon;

  const featuredInsights = INSIGHTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-sm mb-10">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <span className="text-gold font-semibold tracking-widest uppercase text-xs mb-4 block">
              The ITAML Framework
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              The Five Stages <span className="text-gold">of Wealth</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              A structured framework for every stage of your wealth journey — from first investment to generational legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Stage Wheel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">

          {/* Stage Selector */}
          <div className="flex overflow-x-auto gap-3 pb-4 mb-12 scrollbar-hide">
            {STAGES.map((stage, index) => {
              const Icon = stage.icon;
              const isActive = activeStage === index;
              return (
                <button
                  key={stage.title}
                  type="button"
                  onClick={() => setActiveStage(index)}
                  className={`flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl border-2 font-semibold text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-primary border-primary text-white shadow-lg'
                      : 'bg-background border-border/50 text-foreground/70 hover:border-gold/40 hover:text-gold'
                  }`}
                >
                  <span className={`text-xs ${isActive ? 'text-gold/80' : 'text-muted-foreground'}`}>
                    {stage.number}
                  </span>
                  <Icon size={16} />
                  {stage.title}
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              {/* Left */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center">
                    <ActiveIcon size={28} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gold">{active.number}</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{active.title}</h2>
                  </div>
                </div>
                <p className="text-lg text-gold font-medium italic mb-6">{active.tagline}</p>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">{active.detail}</p>

                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
                    disabled={activeStage === 0}
                    className="px-4 py-2 rounded-lg border border-border text-foreground/60 hover:text-foreground hover:border-foreground/30 transition-colors disabled:opacity-30 text-sm font-medium"
                  >
                    ← Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveStage(Math.min(STAGES.length - 1, activeStage + 1))}
                    disabled={activeStage === STAGES.length - 1}
                    className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors disabled:opacity-30 text-sm font-medium"
                  >
                    Next Stage →
                  </button>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="bg-muted/30 rounded-2xl p-8 border border-border/50">
                <h3 className="text-sm font-bold text-gold uppercase tracking-wider mb-6">
                  Key Actions at This Stage
                </h3>
                <div className="space-y-4">
                  {active.actions.map((action, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-primary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">{i + 1}</span>
                      </div>
                      <p className="text-base text-foreground/80 font-medium">{action}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors"
                  >
                    Speak with an advisor about this stage
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress bar */}
          <div className="mt-12 flex gap-2">
            {STAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveStage(i)}
                className={`h-1 rounded-full flex-1 transition-all duration-300 ${
                  i === activeStage ? 'bg-gold' : i < activeStage ? 'bg-primary/40' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
                Wealth Intelligence
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Perspectives &amp; Market Intelligence
              </h2>
            </div>
            <Link
              href="/#insights"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors flex-shrink-0"
            >
              View All Articles <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredInsights.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group bg-background rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-gold">{post.category}</span>
                  <h3 className="text-base font-bold text-foreground mt-2 mb-1 group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground italic">{post.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Where Are You on Your Wealth Journey?
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Our advisors will help you identify your current stage and build a structured plan for what comes next.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg group"
          >
            Start Your Wealth Blueprint
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
