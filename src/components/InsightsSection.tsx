'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const INSIGHTS = [
  {
    category: 'Market Analysis',
    date: 'Oct 12, 2026',
    title: 'Navigating Market Volatility in Emerging Economies',
    snippet: 'Discover strategic approaches to safeguarding your portfolio against unexpected inflationary pressures and currency fluctuations.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Wealth Strategy',
    date: 'Sep 28, 2026',
    title: 'The Blueprint for Multi-Generational Wealth Transfer',
    snippet: 'Practical steps for establishing trusts and corporate structures that ensure your assets smoothly transition to the next generation.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Real Estate',
    date: 'Sep 15, 2026',
    title: 'High-Yield Commercial Real Estate Opportunities',
    snippet: 'An analysis of prime commercial sectors offering double-digit yields and strong long-term capital appreciation.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
              Market Insights
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Expert Perspectives & Research.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group"
          >
            View all insights
            <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSIGHTS.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-shadow group flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden bg-muted">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-sm text-muted-foreground mb-3">{post.date}</span>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3 flex-1">
                  {post.snippet}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-sm font-semibold text-gold group-hover:text-primary transition-colors">
                    Read Full Article
                    <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
