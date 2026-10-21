import React from 'react'
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
    desc: 'Not happy with something? Tell us. We make it right before we call the job done.',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative py-20 sm:py-28 bg-navy-900 text-white overflow-hidden"
    >
      {/* Background accents */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(135deg, #ffbe2e 1px, transparent 1px), linear-gradient(45deg, #ffbe2e 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
            Why choose us
          </span>
          <h2 className="mt-3 font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Reliable. Quality. Trusted service.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            You deserve a contractor who answers the phone, respects your home,
            and finishes what they start. That's us.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="group relative rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-brand-400/60 hover:bg-white/[0.08] p-6 lg:p-7 transition-all"
              >
                <div className="inline-grid place-items-center h-12 w-12 rounded-xl bg-brand-500 text-navy-950 mb-5 shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" strokeWidth={2.25} />
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Big quote */}
        <div className="mt-16 rounded-3xl bg-brand-500 text-navy-950 p-8 sm:p-12 text-center shadow-2xl shadow-brand-500/20">
          <p className="font-display font-black text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight">
            "YOUR SATISFACTION IS OUR PRIORITY."
          </p>
          <p className="mt-3 font-semibold text-navy-900/80 uppercase tracking-widest text-xs sm:text-sm">
            — M.REE TECH Enterprise
          </p>
        </div>
      </div>
    </section>
  )
}
