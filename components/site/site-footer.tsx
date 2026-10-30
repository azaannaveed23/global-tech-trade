import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Logo } from './logo'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Global Sourcing', href: '#sourcing' },
  { label: 'Products', href: '#products' },
  { label: 'B2B Wholesale', href: '#wholesale' },
  { label: 'Network', href: '#network' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: <span className="text-[11px] font-bold">in</span>,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: <span className="text-[12px] font-bold">f</span>,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor" />
        <path d="M10 9l5 3-5 3z" className="fill-ink" />
      </svg>
    ),
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-6 pt-8 md:grid-cols-[1.2fr_1.2fr_1.2fr_0.6fr]">
        <div className="md:border-r md:border-white/10">
          <Logo />
        </div>

        <nav aria-label="Quick links" className="md:border-r md:border-white/10">
          <h2 className="text-xs font-semibold">Quick Links</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5 text-[11px] text-white/75">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-gold">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:border-r md:border-white/10">
          <h2 className="text-xs font-semibold">Get In Touch</h2>
          <ul className="mt-3 space-y-1.5 text-[11px] text-white/75">
            <li className="flex items-center gap-2">
              <Phone className="size-3.5 text-gold" aria-hidden="true" />
              <a href="tel:+971500000000" className="hover:text-gold">+971 50 000 0000 (UAE)</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="size-3.5 text-gold" aria-hidden="true" />
              <a href="tel:+923000000000" className="hover:text-gold">+92 300 000 0000 (Pakistan)</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-3.5 text-gold" aria-hidden="true" />
              <a href="mailto:info@globaltechtrade.com" className="hover:text-gold">info@globaltechtrade.com</a>
            </li>
            <li className="flex items-center gap-2"><MapPin className="size-3.5 text-gold" aria-hidden="true" /> Dubai | Islamabad</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold">Follow Us</h2>
          <ul className="mt-3 flex gap-2">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  aria-label={s.name}
                  className="flex size-6 items-center justify-center rounded-sm border border-white/60 text-white transition-colors hover:border-gold hover:text-gold"
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-white/10 px-5 py-4 text-[10px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>{'© 2025 Global Tech Trade. All Rights Reserved.'}</p>
        <p className="flex gap-3">
          <span>Importing Opportunities</span>
          <span aria-hidden="true">|</span>
          <span>Exporting Success</span>
        </p>
      </div>
    </footer>
  )
}
