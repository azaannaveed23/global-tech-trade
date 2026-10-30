import { Globe, Handshake, ShieldCheck, Truck, type LucideIcon } from 'lucide-react'

const FEATURES: { icon: LucideIcon; title: string; text: string; id?: string }[] = [
  { icon: Globe, title: 'Global Sourcing', text: 'USA | Canada | Australia | Dubai' },
  { icon: ShieldCheck, title: 'Verified & Authentic Products', text: '100% Original & Branded' },
  { icon: Truck, title: 'Worldwide Shipping', text: 'Safe & On-Time Delivery' },
  { icon: Handshake, title: 'B2B Partnerships', text: 'Distributors & Resellers', id: 'wholesale' },
]

export function FeatureStrip() {
  return (
    <section aria-label="Highlights" className="border-y border-white/10 bg-ink-soft">
      <ul className="mx-auto grid max-w-6xl grid-cols-1 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, text, id }, i) => (
          <li
            key={title}
            id={id}
            className={`flex items-center gap-4 py-5 lg:justify-center ${
              i > 0 ? 'lg:border-l lg:border-white/15' : ''
            }`}
          >
            <Icon className="size-9 shrink-0 text-gold" strokeWidth={1.25} aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold">{title}</p>
              <p className="mt-1 text-[11px] text-white/65">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
