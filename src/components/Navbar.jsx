import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'

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
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 dark:bg-midnight-900/90 backdrop-blur-md shadow-lg shadow-navy-900/20 dark:shadow-black/40 ring-1 ring-white/5'
          : 'bg-navy-900/80 dark:bg-midnight-900/60 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 group">
            <motion.span
              whileHover={{ rotate: -8, scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="grid place-items-center h-10 w-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 text-midnight-950 font-display font-black text-lg shadow-lg shadow-gold-500/30"
            >
              M.R
            </motion.span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display font-black text-white text-sm tracking-wide">
                M.REE TECH
              </span>
              <span className="text-gold-300 text-[10px] font-semibold uppercase tracking-widest">
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
                className="text-sm font-semibold text-slate-200 hover:text-gold-300 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gold-400 after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <motion.a
              href={`tel:${PHONE}`}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-midnight-950 font-bold text-sm px-5 py-2.5 shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 transition-shadow"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </motion.a>
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
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="flex flex-col gap-1 pb-4 pt-2">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                    className="px-3 py-3 rounded-lg text-slate-200 hover:bg-white/5 hover:text-gold-300 font-semibold"
                  >
                    {l.label}
                  </motion.a>
                ))}
                <a
                  href={`tel:${PHONE}`}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 text-midnight-950 font-bold px-5 py-3"
                >
                  <Phone className="h-4 w-4" />
                  Call {PHONE}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
