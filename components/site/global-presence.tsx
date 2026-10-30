import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'

const MARKERS = [
  { name: 'Canada', code: 'CANADA', pos: 'left-[8%] top-[18%]' },
  { name: 'USA', code: 'USA', pos: 'left-[10%] top-[38%]' },
  { name: 'Dubai', code: 'UAE', pos: 'left-[58%] top-[50%]' },
  { name: 'Pakistan', code: 'PAKISTAN', pos: 'left-[74%] top-[34%]' },
  { name: 'Australia', code: 'AUSTRALIA', pos: 'left-[68%] top-[78%]' },
]

const OFFICES = [
  {
    title: 'DUBAI OFFICE',
    place: 'UAE',
    image: '/images/dubai.png',
    alt: 'Dubai skyline with Burj Khalifa at sunset',
    map: 'https://www.google.com/maps/search/?api=1&query=Dubai%2C%20UAE',
  },
  {
    title: 'PAKISTAN OFFICE',
    place: 'Islamabad',
    image: '/images/islamabad.png',
    alt: 'Faisal Mosque in Islamabad',
    map: 'https://www.google.com/maps/search/?api=1&query=Islamabad%2C%20Pakistan',
  },
]

export function GlobalPresence() {
  return (
    <section id="sourcing" className="bg-ink py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.5fr_1.3fr] lg:items-center lg:gap-6">
        <div>
          <h2 className="text-2xl font-bold xl:text-[1.7rem]">Our Global Presence</h2>
          <p className="mt-2 text-xs font-semibold tracking-[0.12em] text-gold">
            SOURCING FROM THE WORLD, SERVING GLOBALLY
          </p>
          <p className="mt-5 text-sm leading-relaxed text-white/80">
            We import laptops from leading markets including USA, Canada, Australia and Dubai. Our
            company also has operations in Dubai and Pakistan, ensuring faster deals, better support
            and stronger relationships with our clients.
          </p>
          <a
            href="#about"
            className="mt-7 inline-flex items-center gap-3 rounded-sm border border-white/80 px-4 py-2.5 text-xs font-semibold transition-colors hover:border-gold hover:text-gold"
          >
            Learn More About Us <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="relative aspect-[16/10] w-full">
          <Image
            src="/images/world-map.png"
            alt="World map showing trade routes from USA, Canada and Australia to Dubai and Pakistan"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-contain"
          />
          {MARKERS.map((m) => (
            <div key={m.name} className={`absolute flex items-center gap-1.5 ${m.pos}`}>
              <span className="relative flex size-3 items-center justify-center" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold/60" />
                <span className="relative size-2.5 rounded-full border-2 border-white bg-gold" />
              </span>
              <span className="leading-none">
                <span className="block text-xs font-semibold">{m.name}</span>
                <span className="block text-[8px] tracking-wider text-white/60">{m.code}</span>
              </span>
            </div>
          ))}
        </div>

        <ul id="network" className="flex flex-col gap-4">
          {OFFICES.map((o) => (
            <li key={o.title} className="grid grid-cols-[1.25fr_1fr] overflow-hidden bg-panel">
              <div className="relative aspect-[16/10]">
                <Image src={o.image} alt={o.alt} fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover" />
              </div>
              <div className="flex flex-col justify-center p-4">
                <h3 className="text-sm font-bold tracking-wide text-gold">{o.title}</h3>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-white/85">
                  <MapPin className="size-3.5 text-gold" aria-hidden="true" /> {o.place}
                </p>
                <a
                  href={o.map}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-2 rounded-sm border border-white/80 px-3 py-2 text-[11px] font-semibold transition-colors hover:border-gold hover:text-gold"
                >
                  View Location <ArrowRight className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
