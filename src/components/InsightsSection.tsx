'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const INSIGHTS = [
  {
    category: 'Wealth Strategy',
    date: 'March 2026',
    title: 'The Nigerian Wealth Paradox',
    subtitle: 'Why High Income Does Not Always Translate to Financial Control',
    snippet: 'There is a quiet reality in Nigeria\'s upper-income class: many people earn well, but very few operate with true financial clarity. Income flows in. Opportunities appear. Capital moves. But rarely is it structured.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Corporate Finance',
    date: 'March 2026',
    title: 'Idle Cash Is a Silent Risk',
    subtitle: 'What Corporate Treasuries in Nigeria Are Getting Wrong',
    snippet: 'Idle cash is not neutral. It is quietly losing value — to inflation, currency shifts, and missed opportunity. Capital should not only be protected — it should be positioned with structure and intent.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Investment Philosophy',
    date: 'February 2026',
    title: 'Beyond Returns',
    subtitle: 'How Serious Investors Think About Control, Liquidity and Risk',
    snippet: 'Experienced investors focus less on "how much will I make?" and more on how it is structured, what happens under stress, and how easily they can exit. Capital must be managed for both performance and protection.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Wealth Strategy',
    date: 'February 2026',
    title: 'The Cost of Being Busy',
    subtitle: 'Why Successful Professionals Still Struggle to Build Real Wealth',
    snippet: 'Many high-performing professionals earn well and have clear ambition, yet their wealth lacks structure. The issue is not knowledge — it is bandwidth. Wealth requires not just attention, but discipline and system.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Risk Management',
    date: 'January 2026',
    title: 'When Emergencies Meet Illiquid Investments',
    subtitle: 'A Hidden Risk in Nigerian Wealth Building',
    snippet: 'Life does not wait for portfolios to mature. Many investors are heavily exposed to assets that cannot respond quickly — land that cannot be sold, projects that are delayed, structures that are unclear.',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Legacy Planning',
    date: 'January 2026',
    title: 'Family, Legacy and Money',
    subtitle: 'Why Wealth Without Structure Breaks in One Generation',
    snippet: 'Building wealth requires effort. Preserving it requires structure. Across Nigeria, we see assets without documentation, portfolios without coordination, and wealth without continuity — the result is often fragmentation.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Macro & Policy',
    date: 'December 2025',
    title: 'Political Cycles and Your Portfolio',
    subtitle: 'How Nigerian Elections Quietly Shape Wealth Outcomes',
    snippet: 'In Nigeria, markets do not operate in isolation. Policy decisions influence currency stability, sector performance and capital flow. Long-term success requires understanding not just markets, but the environment in which they operate.',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Wealth & Wellbeing',
    date: 'December 2025',
    title: 'Health Is a Financial Asset',
    subtitle: 'The Overlooked Link Between Wellness and Wealth',
    snippet: 'Wealth planning often focuses on assets, but rarely on the individual. Health events can disrupt income, investment timelines, and capital stability. At Invest-Trust, we view wealth holistically — including liquidity and contingency planning.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Real Estate',
    date: 'November 2025',
    title: 'Real Estate in Nigeria',
    subtitle: 'Asset, Illusion or Liquidity Trap?',
    snippet: 'Real estate remains one of the most trusted assets in Nigeria. But many holdings generate limited income, lack clear exit pathways, and are driven by sentiment rather than structure. Ownership is not the same as value.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Capital Access',
    date: 'November 2025',
    title: "The Dealmaker's Advantage",
    subtitle: 'Why Access, Not Capital, Determines Wealth Outcomes',
    snippet: 'In many markets, capital is the constraint. In Nigeria, access is often the differentiator. Opportunities are relationship-driven and selectively shared. Wealth is shaped not just by how much you have, but by how you are positioned.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop',
  },
];

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
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: (index % INITIAL_VISIBLE) * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full"
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
