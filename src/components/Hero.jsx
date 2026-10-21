import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, ShieldCheck, Star, Clock } from 'lucide-react'

const PHONE = '01111508384'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}
const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 sm:pt-28 text-white
                 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900
                 dark:from-midnight-950 dark:via-midnight-900 dark:to-midnight-800"
    >
      {/* Decorative background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.1]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #fbbf24 1px, transparent 1px), radial-gradient(circle at 80% 60%, #fbbf24 1px, transparent 1px)',
          backgroundSize: '48px 48px, 72px 72px',
        }}
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold-500/20 dark:bg-gold-500/25 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-navy-600/40 dark:bg-midnight-600/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          {/* Copy */}
          <div className="lg:col-span-7">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-gold-300 mb-6 backdrop-blur-sm"
            >
              <ShieldCheck className="h-4 w-4" />
              Reliable · Quality · Trusted Service
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display font-black tracking-tight text-4xl sm:text-5xl lg:text-7xl leading-[1.05]"
            >
              <span className="block">ONE CALL,</span>
              <span className="block bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                WE DO IT ALL!
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl"
            >
              Your one-stop solution for all your home and business needs.
              Plumbing, CCTV, painting, partitions, aircond, wiring, and full
              renovations — delivered by a professional team you can trust.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="animate-gold-glow inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-midnight-950 font-bold text-base px-7 py-4"
              >
                Request a Quote
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </motion.a>
              <motion.a
                href={`tel:${PHONE}`}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 hover:border-gold-400 hover:bg-white/5 text-white font-bold text-base px-7 py-4 transition-colors"
              >
                <Phone className="h-5 w-5" />
                {PHONE}
              </motion.a>
            </motion.div>

            {/* Mini trust row */}
            <motion.div
              variants={item}
              className="mt-10 grid grid-cols-3 gap-4 max-w-lg"
            >
              <TrustStat icon={Star} label="Quality Work" />
              <TrustStat icon={Clock} label="On Time, Every Time" />
              <TrustStat icon={ShieldCheck} label="Satisfaction First" />
            </motion.div>
          </div>

          {/* Visual card — floating + perspective tilt */}
          <motion.div
            variants={item}
            className="lg:col-span-5 relative [perspective:1000px]"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ rotateX: -6, rotateY: 6, scale: 1.02 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative mx-auto max-w-md"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-gold-500/30 via-gold-400/10 to-transparent blur-2xl" />
              <div className="relative rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 dark:from-midnight-800 dark:to-midnight-950 ring-1 ring-white/10 shadow-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-300">
                    Serving you since day one
                  </span>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="grid place-items-center h-10 w-10 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-midnight-950 font-black"
                  >
                    ★
                  </motion.span>
                </div>
                <p className="font-display text-2xl font-extrabold leading-tight">
                  "Your satisfaction is our priority."
                </p>
                <p className="mt-3 text-slate-300 text-sm">
                  From a dripping tap to a full home refresh — we show up, do
                  the job right, and clean up after ourselves.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <Badge>Licensed Team</Badge>
                  <Badge>Fair Pricing</Badge>
                  <Badge>Fast Response</Badge>
                  <Badge>Clean Finish</Badge>
                </div>

                <a
                  href="#services"
                  className="mt-6 inline-flex items-center gap-2 text-gold-300 hover:text-gold-200 font-semibold text-sm group"
                >
                  Explore our services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom accent strip */}
      <div className="relative bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-midnight-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-sm font-bold uppercase tracking-wider">
          <span>Professional Team</span>
          <span className="opacity-50">•</span>
          <span>Quality Work</span>
          <span className="opacity-50">•</span>
          <span>On Time, Every Time</span>
        </div>
      </div>
    </section>
  )
}

function TrustStat({ icon: Icon, label }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="flex flex-col items-start gap-2"
    >
      <span className="grid place-items-center h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10">
        <Icon className="h-4 w-4 text-gold-300" />
      </span>
      <span className="text-xs sm:text-sm font-semibold text-slate-300 leading-tight">
        {label}
      </span>
    </motion.div>
  )
}

function Badge({ children }) {
  return (
    <div className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-slate-200 text-center">
      {children}
    </div>
  )
}
