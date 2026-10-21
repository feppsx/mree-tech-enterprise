import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

const PHONE = '01111508384'
const EMAIL = 'nagenkaran2@gmail.com'

const services = [
  'Plumbing',
  'CCTV Installing',
  'Painting',
  'Partition Works',
  'Aircond Service',
  'Wiring',
  'Renovation',
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-11 w-11 rounded-lg bg-brand-500 text-navy-950 font-display font-black text-lg">
                M.R
              </span>
              <div>
                <p className="font-display font-black text-white text-lg leading-none">
                  M.REE TECH ENTERPRISE
                </p>
                <p className="text-brand-400 text-xs font-semibold uppercase tracking-widest mt-1">
                  MR NAGEN
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-md">
              Your one-stop solution for home and business maintenance.
              Reliable, quality, trusted service — one call, we do it all.
            </p>
            <p className="mt-6 font-display font-black text-brand-400 text-xl">
              ONE CALL, WE DO IT ALL!
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-sm">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="hover:text-brand-400 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-sm">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-start gap-3 hover:text-brand-400 transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
                  <span>{PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 hover:text-brand-400 transition-colors break-all"
                >
                  <Mail className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
                <span>Serving homes and businesses — call for availability.</span>
              </li>
            </ul>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 hover:bg-brand-400 text-navy-950 font-bold text-sm px-5 py-3 transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} M.REE TECH ENTERPRISE. All rights
            reserved.
          </p>
          <p className="uppercase tracking-widest font-semibold">
            Reliable · Quality · Trusted
          </p>
        </div>
      </div>
    </footer>
  )
}
