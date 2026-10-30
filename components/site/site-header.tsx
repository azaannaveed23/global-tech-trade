'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './logo'

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Global Sourcing', href: '#sourcing' },
  { label: 'Products', href: '#products' },
  { label: 'B2B Wholesale', href: '#wholesale' },
  { label: 'Network', href: '#network' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-6 px-5">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-xs font-medium">
            {NAV.map((item, i) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={i === 0 ? 'page' : undefined}
                  className={
                    i === 0
                      ? 'text-gold'
                      : 'text-white/90 transition-colors hover:text-gold'
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-sm bg-gold px-4 py-2.5 text-xs font-semibold text-ink transition-colors hover:bg-gold-soft sm:inline-block"
          >
            Request a Quote
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-sm border border-white/15 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/5 bg-ink lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {NAV.map((item, i) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`block py-2.5 text-sm ${i === 0 ? 'text-gold' : 'text-white/90'}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <a
                href="#contact"
                className="block rounded-sm bg-gold px-4 py-3 text-center text-sm font-semibold text-ink"
                onClick={() => setOpen(false)}
              >
                Request a Quote
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
