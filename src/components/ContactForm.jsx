import React, { useState } from 'react'
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
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
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

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: contact info */}
          <aside className="lg:col-span-2">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              Get in touch
            </span>
            <h2 className="mt-3 font-display font-black text-navy-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Request your free quote today
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
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

            <div className="mt-10 rounded-2xl bg-navy-900 text-white p-6 ring-1 ring-navy-700">
              <p className="font-display font-black text-xl leading-tight">
                Need urgent help?
              </p>
              <p className="mt-1 text-slate-300 text-sm">
                Call us directly for same-day response on urgent plumbing,
                electrical and aircond issues.
              </p>
              <a
                href={`tel:${PHONE}`}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-500 hover:bg-brand-400 text-navy-950 font-bold text-sm px-5 py-3 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call {PHONE}
              </a>
            </div>
          </aside>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white ring-1 ring-slate-200 shadow-xl shadow-navy-900/5 p-6 sm:p-8 lg:p-10"
              noValidate
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

                <Field label="Service needed" required className="sm:col-span-2">
                  <select
                    required
                    value={form.service}
                    onChange={update('service')}
                    className={`${inputCls} appearance-none bg-no-repeat bg-right pr-10`}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%2364748b'><path fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z' clip-rule='evenodd'/></svg>\")",
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

              {status === 'success' && (
                <Banner
                  tone="success"
                  icon={CheckCircle2}
                  title="Request received!"
                  body="Thanks for reaching out. We'll call or email you back shortly."
                />
              )}
              {status === 'error' && (
                <Banner
                  tone="error"
                  icon={AlertCircle}
                  title="Something went wrong"
                  body={errorMsg}
                />
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 hover:bg-navy-800 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-bold text-base px-7 py-4 shadow-lg shadow-navy-900/20 transition-all hover:-translate-y-0.5"
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
              </button>

              <p className="mt-4 text-xs text-slate-500 text-center">
                By submitting, you agree to be contacted about your enquiry.
                We don't share your details.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const inputCls =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 focus:outline-none transition'

function Field({ label, required, className = '', children }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-semibold text-navy-900 mb-1.5">
        {label}
        {required && <span className="text-brand-600 ml-0.5">*</span>}
      </span>
      {children}
    </label>
  )
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <span className="grid place-items-center h-11 w-11 rounded-xl bg-navy-900 text-brand-400 shrink-0">
        <Icon className="h-5 w-5" />
      </span>
      <span className="flex flex-col">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
          {label}
        </span>
        <span className="text-navy-900 font-semibold">{value}</span>
      </span>
    </>
  )
  return (
    <li>
      {href ? (
        <a
          href={href}
          className="flex items-center gap-4 group hover:-translate-y-0.5 transition-transform"
        >
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-4">{content}</div>
      )}
    </li>
  )
}

function Banner({ tone, icon: Icon, title, body }) {
  const toneCls =
    tone === 'success'
      ? 'bg-emerald-50 ring-emerald-200 text-emerald-900'
      : 'bg-rose-50 ring-rose-200 text-rose-900'
  const iconCls = tone === 'success' ? 'text-emerald-600' : 'text-rose-600'
  return (
    <div
      role="alert"
      className={`mt-6 rounded-xl ring-1 ${toneCls} p-4 flex gap-3`}
    >
      <Icon className={`h-5 w-5 shrink-0 mt-0.5 ${iconCls}`} />
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm mt-0.5">{body}</p>
      </div>
    </div>
  )
}
