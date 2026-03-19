'use client';

import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const BOARD_MEMBERS = [
  {
    name: 'Full Name',
    role: 'Chairman, Board of Directors',
    bio: 'Details coming soon.',
    initials: 'CN',
  },
  {
    name: 'Full Name',
    role: 'Managing Director / CEO',
    bio: 'Details coming soon.',
    initials: 'CN',
  },
  {
    name: 'Full Name',
    role: 'Executive Director, Investments',
    bio: 'Details coming soon.',
    initials: 'CN',
  },
  {
    name: 'Full Name',
    role: 'Non-Executive Director',
    bio: 'Details coming soon.',
    initials: 'CN',
  },
];

const LEADERSHIP_TEAM = [
  {
    name: 'Full Name',
    role: 'Head, Portfolio Management',
    initials: 'CN',
  },
  {
    name: 'Full Name',
    role: 'Head, Risk & Compliance',
    initials: 'CN',
  },
  {
    name: 'Full Name',
    role: 'Head, Client Advisory',
    initials: 'CN',
  },
  {
    name: 'Full Name',
    role: 'Chief Finance Officer',
    initials: 'CN',
  },
];

export default function BoardSection() {
  return (
    <section id="board" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            Governance & Leadership
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            Board &amp; Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Invest-Trust is governed by experienced professionals with deep expertise across capital markets, corporate finance, and institutional investment management.
          </p>
        </div>

        {/* Board of Directors */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-xl font-bold text-foreground whitespace-nowrap">Board of Directors</h3>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOARD_MEMBERS.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-full bg-primary/8 border-2 border-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors">
                  <span className="text-2xl font-bold text-primary/40">?</span>
                </div>
                <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
                <h4 className="text-base font-semibold text-foreground mb-1">{member.name}</h4>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground italic">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-xl font-bold text-foreground whitespace-nowrap">Leadership Team</h3>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-center gap-4 bg-white rounded-xl px-6 py-5 border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                  <span className="text-lg font-bold text-primary/40">?</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{member.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-xs text-muted-foreground mt-14 italic">
          Full board and management profiles will be published shortly.
        </p>

      </div>
    </section>
  );
}
