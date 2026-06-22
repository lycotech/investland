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

        {/* Brand */}
        <div className="mb-16">
          <a href="/" className="block mb-6">
            <img
              src="/logo.png"
              alt="Invest Trust Asset Management Ltd"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </a>
          <p className="text-white/50 leading-relaxed text-sm mb-8 max-w-sm">
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

        {/* Disclaimer & Copyright */}
        <div className="border-t border-white/10 pt-8 space-y-4">
          <p className="text-xs text-white/30 max-w-4xl leading-relaxed">
            <strong className="text-white/45">Disclaimer:</strong> Investments are subject to market risks. Read all scheme-related documents carefully before investing. Past performance is not indicative of future returns. Invest-Trust Asset Management Limited is licensed and regulated by the Securities and Exchange Commission (SEC) of Nigeria. The information on this website is for informational purposes only and does not constitute financial, legal or tax advice.
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
