import Image from 'next/image'
import { ArrowRight, Award, Earth, Timer, Users } from 'lucide-react'

const STATS = [
  { icon: Timer, value: '10+', label: 'Years of Experience', sub: 'in Global Trade' },
  { icon: Earth, value: '50+', label: 'Countries Served', sub: 'Worldwide' },
  { icon: Users, value: '1000+', label: 'Satisfied Clients', sub: '& Partners' },
  { icon: Award, value: '100%', label: 'Original Products', sub: '& Warranty Support' },
]

export function WhyChoose() {
  return (
    <section id="about" className="relative isolate overflow-hidden py-12">
      <Image src="/images/why-bg.png" alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/50" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <p className="mt-2 text-[11px] font-semibold tracking-[0.14em] text-white/80">
            YOUR TRUSTED GLOBAL LAPTOP TRADING PARTNER
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
            {'With years of experience, strong international connections and a commitment to quality, we deliver more than just products — we deliver trust, value and long-term business relationships.'}
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-3 rounded-sm bg-gold px-5 py-3 text-xs font-semibold text-ink transition-colors hover:bg-gold-soft"
          >
            Partner With Us <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <ul className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label, sub }, i) => (
            <li key={value} className={`px-5 ${i > 0 ? 'md:border-l md:border-white/15' : ''}`}>
              <span className="flex size-12 items-center justify-center rounded-full border-2 border-gold">
                <Icon className="size-6 text-gold" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <p className="mt-5 text-3xl font-bold">{value}</p>
              <p className="mt-2 text-[11px] leading-snug text-white/80">
                {label}
                <br />
                {sub}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
