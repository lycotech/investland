import { notFound } from 'next/navigation';
import Link from 'next/link';
import { INSIGHTS } from '@/lib/insights-data';
import type { Metadata } from 'next';
import { ArrowLeft, CalendarDays, Tag } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return INSIGHTS.map((insight) => ({ slug: insight.slug }));
}

const SITE_URL = 'https://www.investtrustam.com';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = INSIGHTS.find((a) => a.slug === slug);
  if (!insight) return {};

  const pageUrl = `${SITE_URL}/insights/${insight.slug}`;

  return {
    title: insight.title,
    description: insight.snippet,
    keywords: [
      insight.category,
      'asset management Nigeria',
      'wealth management Nigeria',
      'investment insights Nigeria',
      'Invest-Trust Asset Management',
    ],
    alternates: { canonical: pageUrl },
    openGraph: {
      type: 'article',
      url: pageUrl,
      title: insight.title,
      description: insight.snippet,
      siteName: 'Invest-Trust Asset Management',
      images: [
        {
          url: insight.image,
          width: 1200,
          height: 630,
          alt: insight.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: insight.title,
      description: insight.snippet,
      images: [insight.image],
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = INSIGHTS.find((a) => a.slug === slug);

  if (!insight) notFound();

  const related = INSIGHTS.filter((a) => a.slug !== slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.snippet,
    image: insight.image,
    datePublished: insight.date,
    dateModified: insight.date,
    author: {
      '@type': 'Organization',
      name: 'Invest-Trust Asset Management Limited',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Invest-Trust Asset Management Limited',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/insights/${insight.slug}`,
    },
    articleSection: insight.category,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
    <div className="min-h-screen bg-white text-foreground">
      {/* Top Nav Bar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="Invest Trust Logo" className="h-10 w-auto object-contain" />
          </Link>
          <Link
            href="/#insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Insights
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-28 pb-0">
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src={insight.image}
            alt={insight.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 container mx-auto px-6 md:px-12">
            <div className="inline-flex items-center gap-2 bg-primary/90 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              <Tag size={12} />
              {insight.category}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          {/* Meta */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <CalendarDays size={14} />
            {insight.date}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {insight.title}
          </h1>
          <p className="text-xl text-primary font-medium italic mb-10 border-l-4 border-primary pl-4">
            {insight.subtitle}
          </p>

          {/* Body */}
          <div className="space-y-6">
            {insight.content.map((para, i) => (
              <p key={i} className="text-lg text-foreground/80 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Divider */}
          <div className="my-14 border-t border-border" />

          {/* CTA */}
          <div className="bg-primary rounded-2xl p-10 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Structure Your Capital?</h3>
            <p className="text-white/80 mb-6">
              Our advisors are available for a confidential conversation about your investment objectives. Typical mandates start from ₦10,000,000.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Request a Private Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-bold text-foreground mb-10">More Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((post) => (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1">
                    <span className="text-xs font-semibold text-primary">{post.category}</span>
                    <h3 className="text-base font-semibold text-foreground mt-2 mb-1 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted-foreground italic">{post.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer strip */}
      <footer className="bg-primary text-white py-6 text-center text-sm text-white/60">
        &copy; {new Date().getFullYear()} Invest-Trust Asset Management Limited. All rights reserved.
      </footer>
    </div>
    </>
  );
}

