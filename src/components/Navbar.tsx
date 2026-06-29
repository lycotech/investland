'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const PRODUCTS_DROPDOWN = [
  { label: 'Portfolio Management', desc: 'Discretionary and managed portfolios aligned to income, growth, liquidity and risk objectives.', href: '/portfolio-management' },
  { label: 'Fixed Income Strategies', desc: 'Treasury bills, FGN/corporate bonds, commercial papers and bank placements for defined income.', href: '/fixed-income' },
  { label: 'Retirement Income Solutions', desc: 'Accumulation, growth, income and legacy framework for long-term retirement cashflow.', href: '/retirement' },
  { label: 'Private Credit Investments', desc: 'Invoice financing, revenue-based financing, asset-backed lending, structured credit and SME growth capital.', href: '/private-credit' },
  { label: 'Real Asset Opportunities', desc: 'Commercial real estate, logistics, hospitality, infrastructure, energy and student housing opportunities.', href: '/real-assets' },
  { label: 'Corporate Treasury Management', desc: 'Structured deployment of surplus corporate liquidity with governance, reporting and risk oversight.', href: '/corporate-treasury' },
  { label: 'Diaspora Wealth Solutions', desc: 'Secure access to Nigerian investment opportunities with transparent reporting and advisory support.', href: '/diaspora-wealth' },
  { label: 'Family Office Services', desc: 'Portfolio construction, estate-planning coordination, succession structuring and family governance advisory.', href: '/family-office' },
];

const NAV_LINKS_BEFORE = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
];

const NAV_LINKS_AFTER = [
  { label: 'Blueprint', href: '/wealth-blueprint' },
  { label: 'Insights', href: '/#insights' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = `text-sm font-medium transition-colors ${
    isScrolled
      ? 'text-foreground/80 hover:text-primary'
      : 'text-white/85 hover:text-white'
  }`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Invest Trust Asset Management Ltd"
            className={`h-12 w-auto object-contain transition-all duration-300 ${
              isScrolled ? '' : 'brightness-0 invert'
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">

          {NAV_LINKS_BEFORE.map((link) => (
            <Link key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}

          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              className={`${linkClass} flex items-center gap-1`}
            >
              Our Solutions
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-[560px] bg-background rounded-xl shadow-2xl border border-border/50 py-3 overflow-hidden grid grid-cols-2"
                >
                  {PRODUCTS_DROPDOWN.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="px-5 py-3 hover:bg-muted/60 transition-colors group"
                    >
                      <p className="text-sm font-semibold text-foreground/85 group-hover:text-primary transition-colors leading-snug">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{item.desc}</p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS_AFTER.map((link) => (
            <Link key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}

          <ThemeToggle className={isScrolled ? 'text-foreground/80' : 'text-white/85'} />

          <Link
            href="/#contact"
            className={`px-5 py-2.5 text-sm font-semibold rounded-md transition-colors shadow-sm ${
              isScrolled
                ? 'bg-primary text-white hover:bg-primary-dark'
                : 'bg-white text-primary hover:bg-blue-50'
            }`}
          >
            Start Investing
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className={isScrolled ? 'text-foreground' : 'text-white'} />
          <button
            type="button"
            className={`transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-t border-border shadow-lg py-4 px-6 md:hidden flex flex-col gap-1"
          >
            {NAV_LINKS_BEFORE.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground/80 font-medium py-3 border-b border-border/50 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Products accordion */}
            <button
              type="button"
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex items-center justify-between text-foreground/80 font-medium py-3 border-b border-border/50 hover:text-primary transition-colors w-full text-left"
            >
              Our Solutions
              <ChevronDown
                size={16}
                className={`transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {mobileProductsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden pl-4"
                >
                  {PRODUCTS_DROPDOWN.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 hover:text-primary transition-colors"
                    >
                      <p className="text-sm font-semibold text-foreground/80">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{item.desc}</p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {NAV_LINKS_AFTER.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground/80 font-medium py-3 border-b border-border/50 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 text-center w-full px-5 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-colors"
            >
              Start Investing
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
