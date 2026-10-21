import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import {
  Wrench,
  Video,
  Paintbrush,
  LayoutGrid,
  Snowflake,
  Zap,
  Hammer,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Plumbing',
    tagline: 'Expert solutions, lasting results.',
    desc: 'Leaks, blockages, installations and bathroom fit-outs — fixed properly the first time.',
  },
  {
    icon: Video,
    title: 'CCTV Installing',
    tagline: 'Better security, better peace of mind.',
    desc: 'Modern IP camera setups with remote viewing, for homes and businesses.',
  },
  {
    icon: Paintbrush,
    title: 'Painting',
    tagline: 'Color your world with perfection.',
    desc: 'Interior and exterior painting with clean lines and durable finishes.',
  },
  {
    icon: LayoutGrid,
    title: 'Partition Works',
    tagline: 'Smart spaces, better productivity.',
    desc: 'Gypsum and glass partitions for offices, shops and homes.',
  },
  {
    icon: Snowflake,
    title: 'Aircond Service',
    tagline: 'Cool comfort, always.',
    desc: 'Installation, cleaning, gas top-up and repair for all brands.',
  },
  {
    icon: Zap,
    title: 'Wiring',
    tagline: 'Safe wiring, safe living.',
    desc: 'Full electrical wiring, rewiring, DB upgrades and new power points.',
  },
  {
    icon: Hammer,
    title: 'Renovation',
    tagline: 'Renovate today, reimagine tomorrow.',
    desc: 'End-to-end renovation — kitchens, bathrooms, extensions and refurbishments.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 bg-cream-100 dark:bg-midnight-900/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400">
            What we do
          </span>
          <h2 className="mt-3 font-display font-black text-navy-900 dark:text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Services that cover every corner of your space
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            One trusted team for seven essential services — no juggling
            contractors, no finger-pointing. Just one call, and it's done.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} i={i} featured={i === 6} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, i, featured }) {
  const Icon = service.icon
  const ref = useRef(null)

  // Mouse-position-driven 3D tilt
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  })

  function handleMove(e) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  function handleLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: i * 0.07, ease: 'easeOut' }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 1200,
      }}
      className={`group relative rounded-2xl p-6 lg:p-7 ring-1 transition-shadow duration-300 cursor-default
        ${
          featured
            ? 'bg-gradient-to-br from-navy-900 to-navy-950 dark:from-midnight-800 dark:to-midnight-950 ring-navy-700 dark:ring-midnight-700 text-white shadow-xl'
            : 'bg-white dark:bg-midnight-900/60 ring-slate-200 dark:ring-white/10 hover:ring-gold-400 dark:hover:ring-gold-400/60 hover:shadow-2xl hover:shadow-navy-900/10 dark:hover:shadow-gold-500/5'
        }`}
    >
      {/* Hover glow */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-gold-400/0 via-gold-400/10 to-gold-400/0"
      />

      {/* Everything lifted on Z so the 3D feels real */}
      <div style={{ transform: 'translateZ(40px)' }} className="relative">
        <motion.div
          whileHover={{ scale: 1.12, rotate: -6 }}
          transition={{ type: 'spring', stiffness: 260, damping: 15 }}
          className={`inline-grid place-items-center h-14 w-14 rounded-xl mb-5 shadow-lg
            ${
              featured
                ? 'bg-gradient-to-br from-gold-400 to-gold-600 text-midnight-950 shadow-gold-500/30'
                : 'bg-gradient-to-br from-navy-900 to-navy-700 dark:from-midnight-700 dark:to-midnight-800 text-gold-300 group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-midnight-950 group-hover:shadow-gold-500/40'
            }`}
        >
          <Icon className="h-7 w-7" strokeWidth={2.25} />
        </motion.div>

        <h3
          className={`font-display font-black text-xl uppercase tracking-wide ${
            featured ? 'text-white' : 'text-navy-900 dark:text-white'
          }`}
        >
          {service.title}
        </h3>

        <p
          className={`mt-1 font-semibold text-sm ${
            featured ? 'text-gold-300' : 'text-gold-600 dark:text-gold-400'
          }`}
        >
          {service.tagline}
        </p>

        <p
          className={`mt-3 text-sm leading-relaxed ${
            featured ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          {service.desc}
        </p>

        <a
          href="#contact"
          className={`mt-5 inline-flex items-center gap-1.5 text-sm font-bold group/link ${
            featured
              ? 'text-gold-300 hover:text-gold-200'
              : 'text-navy-900 dark:text-white hover:text-gold-600 dark:hover:text-gold-400'
          }`}
        >
          Get a quote
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </motion.article>
  )
}
