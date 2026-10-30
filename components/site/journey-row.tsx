'use client'

import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const MILESTONES = [
  { year: '2015', text: 'Company Founded (Initial Trading)' },
  { year: '2018', text: 'Dubai Office Established' },
  { year: '2020', text: 'Expanded to New Markets' },
  { year: '2023', text: 'Pakistan Office (Operation)' },
  { year: '2025', text: 'Serving 50+ Countries' },
]

const PRESENTATIONS = [
  { src: '/images/presentation-1.png', alt: 'Laptop exhibition booth at a technology trade show' },
  { src: '/images/presentation-2.png', alt: 'Business partners shaking hands in a meeting' },
  { src: '/images/presentation-3.png', alt: 'Conference presentation showing a global network' },
]

function OutlineButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-sm border border-gold px-3 py-1.5 text-[10px] font-semibold text-ink transition-colors hover:bg-gold"
    >
      {children} <ArrowRight className="size-3" aria-hidden="true" />
    </a>
  )
}

export function JourneyRow() {
  const [presentationOffset, setPresentationOffset] = useState(0)
  const visiblePresentations = [
    ...PRESENTATIONS.slice(presentationOffset),
    ...PRESENTATIONS.slice(0, presentationOffset),
  ]

  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-[1fr_1.15fr_0.85fr]">
        <div className="px-5 py-8 lg:border-r lg:border-ink/10">
          <h2 className="text-lg font-semibold">Our Journey</h2>
          <p className="mt-1 text-[10px] font-medium tracking-[0.1em] text-ink/70">{'A STORY OF GROWTH & TRUST'}</p>
          <ol className="relative mt-6 grid grid-cols-5 gap-2">
            <span className="absolute left-1 right-6 top-1 border-t border-dashed border-gold" aria-hidden="true" />
            {MILESTONES.map((m) => (
              <li key={m.year} className="relative">
                <span className="block size-2 rounded-full bg-gold" aria-hidden="true" />
                <p className="mt-3 text-[11px] font-bold">{m.year}</p>
                <p className="mt-0.5 text-[9px] leading-snug text-ink/65">{m.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <OutlineButton href="#about">Our Full History</OutlineButton>
          </div>
        </div>

        <div id="gallery" className="px-5 py-8">
          <h2 className="text-lg font-semibold">Past Presentations</h2>
          <p className="mt-1 text-[10px] font-medium tracking-[0.1em] text-ink/70">
            {'BUSINESS MEETINGS • TRADE SHOWS • GLOBAL EXHIBITIONS'}
          </p>
          <div className="relative mt-4 flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous presentations"
              className="text-ink/50 hover:text-ink"
              onClick={() =>
                setPresentationOffset((current) => (current + PRESENTATIONS.length - 1) % PRESENTATIONS.length)
              }
            >
              <ChevronLeft className="size-4" />
            </button>
            <ul className="grid flex-1 grid-cols-3 gap-2" aria-live="polite">
              {visiblePresentations.map((p) => (
                <li key={p.src} className="relative aspect-[2/1] overflow-hidden rounded-sm">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 12vw, 30vw" className="object-cover" />
                </li>
              ))}
            </ul>
            <button
              type="button"
              aria-label="Next presentations"
              className="text-ink/50 hover:text-ink"
              onClick={() => setPresentationOffset((current) => (current + 1) % PRESENTATIONS.length)}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
          <div className="mt-5">
            <OutlineButton href="#gallery">View Gallery</OutlineButton>
          </div>
        </div>

        <div className="relative isolate overflow-hidden px-8 py-8 text-white">
          <Image src="/images/cta-bg.png" alt="" fill sizes="(min-width: 1024px) 30vw, 100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/40" aria-hidden="true" />
          <h2 className="max-w-[14rem] text-xl font-bold leading-snug">{"Let's Build a Stronger Business Together"}</h2>
          <p className="mt-3 max-w-[16rem] text-xs leading-relaxed text-white/80">
            Get in touch for the latest stock, pricing and partnership opportunities.
          </p>
          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-3 rounded-sm bg-gold px-5 py-2.5 text-xs font-semibold text-ink transition-colors hover:bg-gold-soft"
          >
            Contact Us <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
