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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Investment Journey Today
          </h2>
          <p className="text-lg text-white/80">
            Our advisors are available to discuss your goals and formulate your bespoke wealth strategy. Fill out the form or reach out directly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto bg-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10 shadow-2xl">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gold">Get in Touch</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Whether you're looking to open an account or simply exploring options, we are ready to assist you.
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
                  <p className="text-white/70">0800-INVEST-TRUST</p>
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
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-medium text-foreground/80">Area of Interest</label>
                <select
                  id="interest"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground font-sans appearance-none"
                >
                  <option value="">Select a service</option>
                  <option value="portfolio">Portfolio Management</option>
                  <option value="funds">Mutual Funds / Fund Management</option>
                  <option value="planning">Wealth Planning</option>
                  <option value="real-estate">Real Estate Investment</option>
                  <option value="other">Other Inquiries</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans resize-none"
                  placeholder="How can we help you achieve your financial goals?"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
