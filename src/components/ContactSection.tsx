'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, interest, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setName('');
      setEmail('');
      setInterest('');
      setMessage('');
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-dark/40 skew-x-12 transform origin-bottom z-0" />
      <div className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] rounded-full border border-white/5 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-blue-200 font-semibold tracking-wider uppercase text-sm mb-3 block">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Engage with a Team That Understands Capital
          </h2>
          <p className="text-lg text-white/75">
            Whether you are deploying surplus capital or planning for the decades ahead, our team is ready to guide you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto bg-white/6 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10 shadow-2xl">

          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Us</h3>
              <p className="text-white/75 mb-8 leading-relaxed">
                Our advisors are ready to have a confidential conversation about your investment objectives.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/12 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-blue-200" />
                </div>
                <div>
                  <h4 className="font-semibold text-white/90">Head Office</h4>
                  <p className="text-white/65 mt-1">8/10 Broad St, Marina Rd,<br />Lagos Island, Lagos 101001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/12 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-blue-200" />
                </div>
                <div>
                  <h4 className="font-semibold text-white/90">Abuja Office</h4>
                  <p className="text-white/65 mt-1">5th Floor, Katsina House,<br />Ralph Shodeinde, Central Area<br />FCT Abuja</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/12 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-blue-200" />
                </div>
                <div>
                  <h4 className="font-semibold text-white/90">Phone</h4>
                  <p className="text-white/65 mt-1">+234 802 222 6387</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/12 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-blue-200" />
                </div>
                <div>
                  <h4 className="font-semibold text-white/90">Email</h4>
                  <p className="text-white/65 mt-1">Info@investtrustasset.com</p>
                  <p className="text-white/65">investtrustasset.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center bg-background rounded-2xl p-12 shadow-lg gap-4">
                <CheckCircle size={48} className="text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Message Sent</h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out. A member of our team will be in touch with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2 text-sm font-semibold text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-background rounded-2xl p-8 text-foreground shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="interest" className="text-sm font-medium text-foreground/80">Nature of Enquiry</label>
                  <select
                    id="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground font-sans appearance-none"
                  >
                    <option value="">Select an option</option>
                    <option value="individual">Individual Portfolio Management</option>
                    <option value="corporate">Corporate Treasury Management</option>
                    <option value="fixed-income">Fixed Income Strategies</option>
                    <option value="real-estate">Real Estate Investment</option>
                    <option value="private-credit">Private Credit &amp; Alternatives</option>
                    <option value="diaspora">Diaspora Investor Enquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">Brief Overview</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans resize-none"
                    placeholder="Tell us about your investment objectives and the capital you are looking to deploy..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm">
                    <AlertCircle size={16} className="flex-shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Request a Private Consultation
                      <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
