import React from 'react'
import { ArrowRight, Phone, ShieldCheck, Star, Clock } from 'lucide-react'

const PHONE = '01111508384'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-900 text-white pt-24 sm:pt-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #ffbe2e 1px, transparent 1px), radial-gradient(circle at 80% 60%, #ffbe2e 1px, transparent 1px)',
          backgroundSize: '48px 48px, 72px 72px',
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-navy-600/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-300 mb-6">
              <ShieldCheck className="h-4 w-4" />
              Reliable · Quality · Trusted Service
            </div>

            <h1 className="font-display font-black tracking-tight text-4xl sm:text-5xl lg:text-7xl leading-[1.05]">
              <span className="block">ONE CALL,</span>
              <span className="block text-brand-400">WE DO IT ALL!</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl">
              Your one-stop solution for all your home and business needs.
              Plumbing, CCTV, painting, partitions, aircond, wiring, and full
              renovations — delivered by a professional team you can trust.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 hover:bg-brand-400 text-navy-950 font-bold text-base px-7 py-4 shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 transition-all hover:-translate-y-0.5"
              >
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 hover:border-brand-400 hover:bg-white/5 text-white font-bold text-base px-7 py-4 transition-all"
              >
                <Phone className="h-5 w-5" />
                {PHONE}
              </a>
            </div>

            {/* Mini trust row */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              <TrustStat icon={Star} label="Quality Work" />
              <TrustStat icon={Clock} label="On Time, Every Time" />
              <TrustStat icon={ShieldCheck} label="Satisfaction First" />
            </div>
          </div>

          {/* Visual card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-500/30 via-brand-400/10 to-transparent blur-2xl" />
              <div className="relative rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 ring-1 ring-white/10 shadow-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-400">
                    Serving you since day one
                  </span>
                  <span className="grid place-items-center h-10 w-10 rounded-full bg-brand-500 text-navy-950 font-black">
                    ★
                  </span>
                </div>
                <p className="font-display text-2xl font-extrabold leading-tight">
                  "Your satisfaction is our priority."
                </p>
                <p className="mt-3 text-slate-300 text-sm">
                  From a dripping tap to a full home refresh — we show up,
                  do the job right, and clean up after ourselves.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <Badge>Licensed Team</Badge>
                  <Badge>Fair Pricing</Badge>
                  <Badge>Fast Response</Badge>
                  <Badge>Clean Finish</Badge>
                </div>

                <a
                  href="#services"
                  className="mt-6 inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-semibold text-sm"
                >
                  Explore our services
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent strip */}
      <div className="relative bg-brand-500 text-navy-950">
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
    <div className="flex flex-col items-start gap-2">
      <span className="grid place-items-center h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10">
        <Icon className="h-4 w-4 text-brand-400" />
      </span>
      <span className="text-xs sm:text-sm font-semibold text-slate-300 leading-tight">
        {label}
      </span>
    </div>
  )
}

function Badge({ children }) {
  return (
    <div className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-slate-200 text-center">
      {children}
    </div>
  )
}
