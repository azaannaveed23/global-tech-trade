'use client'

import { FormEvent, useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

type FormStatus =
  | { kind: 'idle' | 'submitting' }
  | { kind: 'success' | 'error'; message: string }

const FIELD_CLASS =
  'w-full rounded-sm border border-white/15 bg-ink px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold'

function responseMessage(payload: unknown) {
  if (
    typeof payload === 'object' &&
    payload !== null &&
    'message' in payload &&
    typeof payload.message === 'string'
  ) {
    return payload.message
  }

  return ''
}

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>({ kind: 'idle' })

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const submission = {
      type: formData.get('type'),
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    }

    setStatus({ kind: 'submitting' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
      })

      let payload: unknown
      try {
        payload = await response.json()
      } catch {
        setStatus({
          kind: 'error',
          message: 'We could not read the server response. Please try again.',
        })
        return
      }

      const message = responseMessage(payload)
      if (!response.ok) {
        setStatus({
          kind: 'error',
          message: message || 'We could not submit your form. Please try again.',
        })
        return
      }

      setStatus({
        kind: 'success',
        message:
          message || 'Your form passed validation. This demo endpoint does not save or email submissions yet.',
      })
      form.reset()
    } catch {
      setStatus({
        kind: 'error',
        message: 'Unable to reach the server. Check your connection and try again.',
      })
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-ink-soft py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 id="contact-heading" className="text-3xl font-bold">
            Request a Quote or Contact Us
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
            Tell us what you need and our team can help with product availability, pricing and
            partnership enquiries.
          </p>
          <ul className="mt-7 space-y-4 text-sm text-white/80">
            <li>
              <a className="flex items-center gap-3 hover:text-gold" href="tel:+971500000000">
                <Phone className="size-4 text-gold" aria-hidden="true" />
                +971 50 000 0000 (UAE)
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 hover:text-gold"
                href="mailto:info@globaltechtrade.com"
              >
                <Mail className="size-4 text-gold" aria-hidden="true" />
                info@globaltechtrade.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-gold" aria-hidden="true" />
              Dubai | Islamabad
            </li>
          </ul>
          <p className="mt-7 max-w-md text-xs leading-relaxed text-white/55">
            Demo form: submissions are validated, but are not stored or emailed. Connect an email
            or CRM provider to receive enquiries.
          </p>
        </div>

        <form
          className="grid gap-4 rounded-sm border border-white/10 bg-ink p-5 sm:grid-cols-2 sm:p-7"
          onSubmit={handleSubmit}
        >
          <div className="sm:col-span-2">
            <label htmlFor="contact-type" className="mb-1.5 block text-xs font-medium text-white/80">
              Enquiry type
            </label>
            <select id="contact-type" name="type" className={FIELD_CLASS} defaultValue="quote">
              <option value="quote">Request a Quote</option>
              <option value="contact">General Contact</option>
            </select>
          </div>

          <div>
            <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-white/80">
              Full name *
            </label>
            <input
              id="contact-name"
              name="name"
              className={FIELD_CLASS}
              autoComplete="name"
              minLength={2}
              maxLength={100}
              required
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-white/80">
              Email address *
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              className={FIELD_CLASS}
              autoComplete="email"
              maxLength={254}
              required
            />
          </div>

          <div>
            <label htmlFor="contact-company" className="mb-1.5 block text-xs font-medium text-white/80">
              Company
            </label>
            <input
              id="contact-company"
              name="company"
              className={FIELD_CLASS}
              autoComplete="organization"
              maxLength={120}
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className="mb-1.5 block text-xs font-medium text-white/80">
              Phone
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              className={FIELD_CLASS}
              autoComplete="tel"
              maxLength={40}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-white/80">
              How can we help? *
            </label>
            <textarea
              id="contact-message"
              name="message"
              className={`${FIELD_CLASS} min-h-28 resize-y`}
              minLength={10}
              maxLength={2000}
              required
            />
          </div>

          {status.kind === 'success' && (
            <p className="sm:col-span-2 rounded-sm border border-green-500/30 bg-green-500/10 px-3 py-2.5 text-sm text-green-200" role="status">
              {status.message}
            </p>
          )}
          {status.kind === 'error' && (
            <p className="sm:col-span-2 rounded-sm border border-red-500/30 bg-red-500/10 px-3 py-2.5 text-sm text-red-200" role="alert">
              {status.message}
            </p>
          )}

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status.kind === 'submitting'}
              className="inline-flex min-w-36 items-center justify-center rounded-sm bg-gold px-5 py-3 text-xs font-semibold text-ink transition-colors hover:bg-gold-soft disabled:cursor-wait disabled:opacity-70"
            >
              {status.kind === 'submitting' ? 'Submitting…' : 'Send Enquiry'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
