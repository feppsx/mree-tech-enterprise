import React, { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'

const PHONE = '01111508384'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-navy-900/20'
          : 'bg-navy-900/80 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 group">
            <span className="grid place-items-center h-10 w-10 rounded-lg bg-brand-500 text-navy-950 font-display font-black text-lg shadow-md group-hover:scale-105 transition-transform">
              M.R
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display font-black text-white text-sm tracking-wide">
                M.REE TECH
              </span>
              <span className="text-brand-400 text-[10px] font-semibold uppercase tracking-widest">
                Enterprise
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-slate-200 hover:text-brand-400 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-400 after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Call Now CTA */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE}`}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-500 hover:bg-brand-400 text-navy-950 font-bold text-sm px-5 py-2.5 shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-all hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid place-items-center h-10 w-10 rounded-lg text-white hover:bg-white/10"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden pb-4 pt-2 border-t border-white/10 animate-[fadeIn_.2s_ease-out]">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-slate-200 hover:bg-white/5 hover:text-brand-400 font-semibold"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`tel:${PHONE}`}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 hover:bg-brand-400 text-navy-950 font-bold px-5 py-3"
              >
                <Phone className="h-4 w-4" />
                Call {PHONE}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
