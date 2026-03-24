'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { INSIGHTS } from '@/lib/insights-data';

const INITIAL_VISIBLE = 6;

export default function InsightsSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? INSIGHTS : INSIGHTS.slice(0, INITIAL_VISIBLE);

  return (
    <section id="insights" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
              Market Insights
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Perspectives &amp; Market Intelligence.
            </h2>
          </div>
          <span className="text-muted-foreground text-sm">{INSIGHTS.length} articles</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence initial={false}>
            {visible.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: (index % INITIAL_VISIBLE) * 0.1 }}
              >
                <Link
                  href={`/insights/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full block"
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <span className="text-sm text-muted-foreground mb-3">{post.date}</span>
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-primary/70 font-medium mb-3 italic">
                      {post.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-6 line-clamp-3 flex-1 text-sm leading-relaxed">
                      {post.snippet}
                    </p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-3 gap-2 transition-all">
                        Read Full Article
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show more / less toggle */}
        {INSIGHTS.length > INITIAL_VISIBLE && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              {showAll ? 'Show Less' : `View All ${INSIGHTS.length} Articles`}
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${showAll ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
