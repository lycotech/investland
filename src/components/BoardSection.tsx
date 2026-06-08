'use client';

import { motion } from 'framer-motion';

const BOARD_MEMBERS = [
  {
    role: 'Chairman',
    title: 'Board of Directors',
    descriptor: 'Providing strategic oversight and governance to ensure the highest standards of fiduciary responsibility.',
    initials: 'CH',
  },
  {
    role: 'Managing Director',
    title: 'Chief Executive',
    descriptor: 'Leading the firm\'s investment strategy, client relationships and institutional development across Africa.',
    initials: 'MD',
  },
  {
    role: 'Investment Committee',
    title: 'Capital Allocation',
    descriptor: 'Reviewing every mandate and investment decision. Institutional discipline applied to every deployment of capital.',
    initials: 'IC',
  },
  {
    role: 'Independent Directors',
    title: 'Governance & Oversight',
    descriptor: 'Bringing independent judgment and external perspective to protect the interests of every client.',
    initials: 'ID',
  },
];

export default function BoardSection() {
  return (
    <section id="leadership" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-2/5"
          >
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
              Governance & Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              The Team Behind Your Capital
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Invest-Trust is governed by experienced professionals with deep expertise across capital markets, corporate finance and institutional wealth management.
            </p>
          </motion.div>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOARD_MEMBERS.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="relative h-56 bg-primary/5 flex items-end overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/15 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary/30">{member.initials}</span>
                  </div>
                </div>
                {/* Gold bar at top */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/60 to-gold/20" />
              </div>

              <div className="p-7">
                <div className="w-8 h-0.5 bg-gold mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-gold transition-colors">
                  {member.role}
                </h3>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                  {member.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.descriptor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-muted-foreground mt-14 italic"
        >
          Full board and management profiles will be published shortly.
        </motion.p>

      </div>
    </section>
  );
}
