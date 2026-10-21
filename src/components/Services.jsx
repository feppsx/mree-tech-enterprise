import React from 'react'
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
    <section id="services" className="relative py-20 sm:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            What we do
          </span>
          <h2 className="mt-3 font-display font-black text-navy-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Services that cover every corner of your space
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            One trusted team for seven essential services — no juggling
            contractors, no finger-pointing. Just one call, and it's done.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} featured={i === 6} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, featured }) {
  const Icon = service.icon
  return (
    <article
      className={`group relative rounded-2xl p-6 lg:p-7 ring-1 transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? 'bg-gradient-to-br from-navy-900 to-navy-800 ring-navy-700 text-white shadow-xl lg:col-span-1'
          : 'bg-white ring-slate-200 hover:ring-brand-400 hover:shadow-xl hover:shadow-navy-900/5'
      }`}
    >
      <div
        className={`inline-grid place-items-center h-14 w-14 rounded-xl mb-5 transition-transform group-hover:scale-110 ${
          featured
            ? 'bg-brand-500 text-navy-950'
            : 'bg-navy-900 text-brand-400 group-hover:bg-brand-500 group-hover:text-navy-950'
        }`}
      >
        <Icon className="h-7 w-7" strokeWidth={2.25} />
      </div>

      <h3
        className={`font-display font-black text-xl uppercase tracking-wide ${
          featured ? 'text-white' : 'text-navy-900'
        }`}
      >
        {service.title}
      </h3>

      <p
        className={`mt-1 font-semibold text-sm ${
          featured ? 'text-brand-400' : 'text-brand-600'
        }`}
      >
        {service.tagline}
      </p>

      <p
        className={`mt-3 text-sm leading-relaxed ${
          featured ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        {service.desc}
      </p>

      <a
        href="#contact"
        className={`mt-5 inline-flex items-center gap-1.5 text-sm font-bold ${
          featured
            ? 'text-brand-400 hover:text-brand-300'
            : 'text-navy-900 hover:text-brand-600'
        }`}
      >
        Get a quote
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </article>
  )
}
