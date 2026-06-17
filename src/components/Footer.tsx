import Link from 'next/link';

const SOLUTIONS_LINKS = [
  { label: 'Retirement Income Solutions', href: '/retirement' },
  { label: 'Private Credit Investments', href: '/private-credit' },
  { label: 'Real Asset Opportunities', href: '/real-assets' },
  { label: 'Corporate Treasury Management', href: '/#contact' },
  { label: 'Diaspora Wealth Solutions', href: '/#contact' },
  { label: 'Family Office Services', href: '/family-office' },
];

const COMPANY_LINKS = [
  { label: 'About ITAML', href: '/about' },
  { label: 'The Wealth Blueprint', href: '/wealth-blueprint' },
  { label: 'Our Philosophy', href: '/#philosophy' },
  { label: 'Leadership', href: '/#leadership' },
  { label: 'Market Insights', href: '/#insights' },
  { label: 'Contact', href: '/#contact' },
];

const LEGAL_LINKS = [
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'AML/KYC Policy', href: '#' },
  { label: 'Investment Risk Disclosure', href: '#' },
];

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter / X', href: '#' },
  { label: 'Instagram', href: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white pt-20 pb-8">
      <div className="container mx-auto px-6 md:px-12">

        {/* Top: Brand + Regulatory */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16 pb-16 border-b border-white/10">

          {/* Brand */}
          <div className="lg:w-1/3">
            <a href="/" className="block mb-6">
              <img
                src="/logo.png"
                alt="Invest Trust Asset Management Ltd"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="text-white/50 leading-relaxed text-sm mb-8">
              Building Africa&apos;s wealth infrastructure through rigorous capital management and purpose-built investment solutions.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs font-semibold text-white/45 hover:text-white transition-colors uppercase tracking-wider"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Regulatory badges */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'SEC Licensed', sub: 'Securities & Exchange Commission Nigeria', accent: true },
              { label: 'Trustees', sub: 'Details to be published', accent: false },
              { label: 'Auditors', sub: 'Details to be published', accent: false },
              { label: 'Legal Advisers', sub: 'Details to be published', accent: false },
            ].map((badge) => (
              <div
                key={badge.label}
                className={`rounded-xl p-5 border ${
                  badge.accent
                    ? 'bg-white/10 border-white/25'
                    : 'bg-white/4 border-white/8'
                }`}
              >
                <p className="text-sm font-bold mb-1 text-white/85">
                  {badge.label}
                </p>
                <p className="text-xs text-white/40 leading-snug">{badge.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h4 className="font-semibold text-sm mb-6 text-white/70 uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-3">
              {SOLUTIONS_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/45 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-6 text-white/70 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/45 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-6 text-white/70 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/45 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="border-t border-white/10 pt-8 space-y-4">
          <p className="text-xs text-white/30 max-w-4xl leading-relaxed">
            <strong className="text-white/45">Disclaimer:</strong> Investments are subject to market risks. Read all scheme-related documents carefully before investing. Past performance is not indicative of future returns. Invest-Trust Asset Management Limited is licensed and regulated by the Securities and Exchange Commission (SEC) of Nigeria. The information on this website is for informational purposes only and does not constitute financial, legal or tax advice.
          </p>
          <p className="text-xs text-white/30 max-w-4xl leading-relaxed">
            <strong className="text-white/45">Note:</strong> Typical mandates start from ₦10,000,000. We work with clients who are committed to building and preserving meaningful wealth.
          </p>
          <p className="text-sm text-white/35 pt-2">
            &copy; {currentYear} Invest-Trust Asset Management Limited. All rights reserved.&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="https://investtrustasset.com" className="hover:text-white transition-colors">investtrustasset.com</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
