import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react'
import { submitLead } from '../lib/supabaseClient.js'

const PHONE = '01111508384'
const EMAIL = 'nagenkaran2@gmail.com'

const SERVICES = [
  'Plumbing',
  'CCTV Installing',
  'Painting',
  'Partition Works',
  'Aircond Service',
  'Wiring',
  'Renovation',
  'Other',
]

const EMPTY = { name: '', phone: '', email: '', service: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    setErrorMsg('')

    if (!form.name.trim() || !form.phone.trim() || !form.service) {
      setStatus('error')
      setErrorMsg('Please fill in your name, phone, and the service you need.')
      return
    }

    setStatus('submitting')
    try {
      await submitLead(form)
      setStatus('success')
      setForm(EMPTY)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setErrorMsg(
        err?.message ||
          "We couldn't send your request. Please try again or call us directly."
      )
    }
  }

  function reset() {
    setStatus('idle')
    setErrorMsg('')
  }

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 bg-cream-50 dark:bg-midnight-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: contact info */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400">
              Get in touch
            </span>
            <h2 className="mt-3 font-display font-black text-navy-900 dark:text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Request your free quote today
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Tell us what you need. We'll get back to you quickly with a
              fair, no-obligation quote.
            </p>

            <ul className="mt-10 space-y-5">
              <ContactRow
                icon={Phone}
                label="Call us"
                value={PHONE}
                href={`tel:${PHONE}`}
              />
              <ContactRow
                icon={Mail}
                label="Email us"
                value={EMAIL}
                href={`mailto:${EMAIL}`}
              />
              <ContactRow
                icon={MapPin}
                label="Service area"
                value="Available for home & commercial jobs"
              />
            </ul>

            <div className="mt-10 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 dark:from-midnight-800 dark:to-midnight-950 text-white p-6 ring-1 ring-navy-700 dark:ring-midnight-700">
              <p className="font-display font-black text-xl leading-tight">
                Need urgent help?
              </p>
              <p className="mt-1 text-slate-300 text-sm">
                Call us directly for same-day response on urgent plumbing,
                electrical and aircond issues.
              </p>
              <motion.a
                href={`tel:${PHONE}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-midnight-950 font-bold text-sm px-5 py-3"
              >
                <Phone className="h-4 w-4" />
                Call {PHONE}
              </motion.a>
            </div>
          </motion.aside>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="relative">
              {/* Soft glow */}
              <div
                aria-hidden
                className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-gold-400/20 via-transparent to-navy-700/20 dark:to-midnight-600/30 blur-xl"
              />

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="relative rounded-3xl bg-white dark:bg-midnight-900 ring-1 ring-slate-200 dark:ring-white/10 shadow-xl p-10 sm:p-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 180,
                        damping: 14,
                        delay: 0.1,
                      }}
                      className="mx-auto grid place-items-center h-20 w-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-xl shadow-emerald-500/30"
                    >
                      <CheckCircle2 className="h-10 w-10" strokeWidth={2.5} />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 font-display font-black text-2xl sm:text-3xl text-navy-900 dark:text-white"
                    >
                      Request received!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-3 text-slate-600 dark:text-slate-400 max-w-md mx-auto"
                    >
                      Thanks for reaching out. We'll call or email you back
                      shortly with your quote.
                    </motion.p>
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.55 }}
                      onClick={reset}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold-600 dark:text-gold-400 hover:underline"
                    >
                      Send another request
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="relative rounded-3xl bg-white dark:bg-midnight-900 ring-1 ring-slate-200 dark:ring-white/10 shadow-xl shadow-navy-900/5 dark:shadow-black/40 p-6 sm:p-8 lg:p-10"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Full name" required>
                        <input
                          type="text"
                          required
                          autoComplete="name"
                          value={form.name}
                          onChange={update('name')}
                          placeholder="e.g. Ahmad bin Ali"
                          className={inputCls}
                        />
                      </Field>

                      <Field label="Phone number" required>
                        <input
                          type="tel"
                          required
                          autoComplete="tel"
                          value={form.phone}
                          onChange={update('phone')}
                          placeholder="e.g. 0123456789"
                          className={inputCls}
                        />
                      </Field>

                      <Field label="Email (optional)" className="sm:col-span-2">
                        <input
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={update('email')}
                          placeholder="you@example.com"
                          className={inputCls}
                        />
                      </Field>

                      <Field
                        label="Service needed"
                        required
                        className="sm:col-span-2"
                      >
                        <select
                          required
                          value={form.service}
                          onChange={update('service')}
                          className={`${inputCls} appearance-none bg-no-repeat pr-10`}
                          style={{
                            backgroundImage:
                              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%2394a3b8'><path fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z' clip-rule='evenodd'/></svg>\")",
                            backgroundPosition: 'right .75rem center',
                            backgroundSize: '1.25rem',
                          }}
                        >
                          <option value="" disabled>
                            Select a service…
                          </option>
                          {SERVICES.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </Field>

                      <Field label="Tell us more" className="sm:col-span-2">
                        <textarea
                          rows={5}
                          value={form.message}
                          onChange={update('message')}
                          placeholder="Describe what you need, when, and any photos you can share by WhatsApp later."
                          className={`${inputCls} resize-y`}
                        />
                      </Field>
                    </div>

                    <AnimatePresence>
                      {status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          role="alert"
                          className="mt-6 rounded-xl ring-1 bg-rose-50 ring-rose-200 text-rose-900 dark:bg-rose-500/10 dark:ring-rose-500/30 dark:text-rose-200 p-4 flex gap-3"
                        >
                          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
                          <div>
                            <p className="font-bold">Something went wrong</p>
                            <p className="text-sm mt-0.5">{errorMsg}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.button
                      type="submit"
                      disabled={status === 'submitting'}
                      whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                      whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
                      className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full
                                 bg-gradient-to-br from-navy-900 to-navy-800
                                 dark:from-gold-400 dark:to-gold-600
                                 hover:from-navy-800 hover:to-navy-700
                                 dark:hover:from-gold-300 dark:hover:to-gold-500
                                 disabled:from-slate-400 disabled:to-slate-500 disabled:cursor-not-allowed
                                 text-white dark:text-midnight-950 font-bold text-base px-7 py-4
                                 shadow-lg shadow-navy-900/20 dark:shadow-gold-500/30 transition-all"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Request
                        </>
                      )}
                    </motion.button>

                    <p className="mt-4 text-xs text-slate-500 dark:text-slate-500 text-center">
                      By submitting, you agree to be contacted about your
                      enquiry. We don't share your details.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const inputCls =
  'w-full rounded-xl border bg-white dark:bg-midnight-800 ' +
  'border-slate-300 dark:border-white/10 ' +
  'px-4 py-3 ' +
  'text-navy-900 dark:text-white ' +
  'placeholder:text-slate-400 dark:placeholder:text-slate-500 ' +
  'shadow-sm ' +
  'focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30 focus:outline-none ' +
  'transition'

function Field({ label, required, className = '', children }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-semibold text-navy-900 dark:text-slate-200 mb-1.5">
        {label}
        {required && <span className="text-gold-600 dark:text-gold-400 ml-0.5">*</span>}
      </span>
      {children}
    </label>
  )
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <motion.span
        whileHover={{ rotate: -8, scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 260, damping: 15 }}
        className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-navy-900 to-navy-700 dark:from-midnight-700 dark:to-midnight-800 text-gold-300 shrink-0 shadow-md"
      >
        <Icon className="h-5 w-5" />
      </motion.span>
      <span className="flex flex-col">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          {label}
        </span>
        <span className="text-navy-900 dark:text-white font-semibold">
          {value}
        </span>
      </span>
    </>
  )
  return (
    <li>
      {href ? (
        <motion.a
          href={href}
          whileHover={{ x: 4 }}
          className="flex items-center gap-4"
        >
          {content}
        </motion.a>
      ) : (
        <div className="flex items-center gap-4">{content}</div>
      )}
    </li>
  )
}
