import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <Image
        src="/images/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/10"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />

      <div className="mx-auto flex min-h-[460px] max-w-6xl items-center px-5 py-14 md:min-h-[520px]">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold">
            {'INTERNATIONAL LAPTOP IMPORT & EXPORT'}
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]">
            Connecting Global Markets with Premium Laptops
          </h1>
          <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-white/85 md:text-base">
            We source the best laptops from USA, Canada, Australia, Dubai and other global markets
            and deliver trusted solutions to businesses, distributors and resellers worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-3 rounded-sm bg-gold px-5 py-3 text-xs font-semibold text-ink transition-colors hover:bg-gold-soft"
            >
              Explore Our Products <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-sm border border-white/80 px-5 py-3 text-xs font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              Get a Quote <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <ul
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-2 border-l border-white/40 pl-4 text-[11px] font-medium tracking-[0.3em] text-white/85 xl:flex"
        aria-label="Our values"
      >
        <li>GLOBAL<br />SOURCING</li>
        <li aria-hidden="true">|</li>
        <li>TRUSTED<br />SUPPLY</li>
        <li aria-hidden="true">|</li>
        <li>LONG TERM<br />PARTNERSHIP</li>
      </ul>
    </section>
  )
}
