export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white pt-20 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <img
                src="/logo.png"
                alt="Invest Trust Asset Management Ltd"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="text-white/60 leading-relaxed text-sm">
              We provide professional asset management and portfolio advisory tailored for high-net-worth individuals and corporate institutions.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white/90">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Asset Management</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Portfolio Management</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Investment Advisory</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Real Estate</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Corporate Finance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white/90">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-sm text-white/60 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Our Team</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Careers</a></li>
              <li><a href="#insights" className="text-sm text-white/60 hover:text-gold transition-colors">Insights & News</a></li>
              <li><a href="#contact" className="text-sm text-white/60 hover:text-gold transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white/90">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Anti-Money Laundering Framework</a></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col items-center text-center">
          <p className="text-xs text-white/40 max-w-4xl mb-6 leading-relaxed">
            <strong>Disclaimer:</strong> Investments are subject to market risks. Read all scheme-related documents carefully before investing. Past performance is not indicative of future returns. Invest Trust Asset Management Limited is licensed and regulated by the Securities and Exchange Commission (SEC). The information on this website is intended for informational purposes only and does not constitute financial, legal, or tax advice.
          </p>
          <p className="text-sm text-white/50">
            &copy; {currentYear} Invest Trust Asset Management Limited. All rights reserved. &nbsp;|&nbsp; <a href="https://investtrustasset.com" className="hover:text-gold transition-colors">investtrustasset.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
