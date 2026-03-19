'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-dark/50 skew-x-12 transform origin-bottom z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-white/60 font-semibold tracking-wider uppercase text-sm mb-3 block">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Engage with a Team That Understands Capital
          </h2>
          <p className="text-lg text-white/80">
            Whether you are allocating surplus liquidity or structuring long-term wealth, our team is available to guide you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto bg-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10 shadow-2xl">

          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gold">Contact Us</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Our advisors are ready to have a confidential conversation about your investment objectives. Typical mandates start from <strong className="text-white">₦10,000,000</strong> and above.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-white/90">Head Office</h4>
                  <p className="text-white/70 mt-1">8/10 Broad St, Marina Rd,<br />Lagos Island, Lagos 101001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-white/90">Phone</h4>
                  <p className="text-white/70 mt-1">+234 (1) 234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-white/90">Email</h4>
                  <p className="text-white/70 mt-1">Info@investtrustasset.com</p>
                  <p className="text-white/70">investtrustasset.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <form className="space-y-6 bg-white rounded-2xl p-8 text-foreground shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-medium text-foreground/80">Nature of Enquiry</label>
                <select
                  id="interest"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground font-sans appearance-none"
                >
                  <option value="">Select an option</option>
                  <option value="individual">Individual Portfolio Management</option>
                  <option value="corporate">Corporate Treasury Management</option>
                  <option value="fixed-income">Fixed Income Strategies</option>
                  <option value="real-estate">Real Estate Investment</option>
                  <option value="private-credit">Private Credit & Alternatives</option>
                  <option value="diaspora">Diaspora Investor Enquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Brief Overview</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans resize-none"
                  placeholder="Tell us about your investment objectives and the capital you are looking to deploy..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 group"
              >
                Request a Private Consultation
                <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-center text-muted-foreground">
                All enquiries are treated with the strictest confidence. Minimum mandate: ₦10,000,000.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
