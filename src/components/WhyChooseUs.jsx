import React from 'react'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Users,
  BadgeCheck,
  Clock,
  ThumbsUp,
  Wallet,
} from 'lucide-react'

const points = [
  {
    icon: Users,
    title: 'Professional Team',
    desc: 'Skilled tradespeople with real on-the-job experience across every service we offer.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Work',
    desc: 'We take pride in our finish. Jobs are not done until they look and work right.',
  },
  {
    icon: Clock,
    title: 'On Time, Every Time',
    desc: 'We show up when we say we will — and keep you updated if anything changes.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable & Trusted',
    desc: 'A straightforward team you can call again and again — recommended by our customers.',
  },
  {
    icon: Wallet,
    title: 'Fair, Clear Pricing',
    desc: 'Honest quotes with no surprise charges. You know what you pay before we start.',
  },
  {
    icon: ThumbsUp,
    title: 'Your Satisfaction First',
    desc: "Not happy with something? Tell us. We make it right before we call the job done.",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative py-20 sm:py-28 text-white overflow-hidden
                 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900
                 dark:from-midnight-950 dark:via-midnight-900 dark:to-midnight-950"
    >
      {/* Background accents */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(135deg, #fbbf24 1px, transparent 1px), linear-gradient(45deg, #fbbf24 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-gold-500/15 dark:bg-gold-500/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
            Why choose us
          </span>
          <h2 className="mt-3 font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Reliable. Quality. Trusted service.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            You deserve a contractor who answers the phone, respects your home,
            and finishes what they start. That's us.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {points.map((p) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                variants={item}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl bg-white/5 dark:bg-white/[0.03] ring-1 ring-white/10 hover:ring-gold-400/60 hover:bg-white/[0.08] dark:hover:bg-white/[0.06] p-6 lg:p-7 transition-all backdrop-blur-sm"
              >
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 15 }}
                  className="inline-grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-midnight-950 mb-5 shadow-lg shadow-gold-500/30"
                >
                  <Icon className="h-6 w-6" strokeWidth={2.25} />
                </motion.div>
                <h3 className="font-display font-bold text-xl text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Big quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16 rounded-3xl bg-gradient-to-br from-gold-300 via-gold-400 to-gold-500 text-midnight-950 p-8 sm:p-12 text-center shadow-2xl shadow-gold-500/30"
        >
          <p className="font-display font-black text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight">
            "YOUR SATISFACTION IS OUR PRIORITY."
          </p>
          <p className="mt-3 font-semibold text-navy-900/80 uppercase tracking-widest text-xs sm:text-sm">
            — M.REE TECH Enterprise
          </p>
        </motion.div>
      </div>
    </section>
  )
}
