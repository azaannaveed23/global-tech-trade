import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const BRANDS = [
  { name: 'DELL', className: 'flex size-9 items-center justify-center rounded-full border-2 border-ink text-[10px] font-black' },
  { name: 'hp', className: 'flex size-9 items-center justify-center rounded-full bg-ink text-sm font-bold italic text-white' },
  { name: 'Apple', className: 'text-sm font-semibold' },
  { name: 'Lenovo', className: 'text-lg font-medium tracking-tight' },
  { name: 'ASUS', className: 'text-lg font-black italic tracking-tighter' },
  { name: 'acer', className: 'text-xl font-bold italic' },
  { name: 'TOSHIBA', className: 'text-sm font-black tracking-wide' },
  { name: 'SAMSUNG', className: 'text-sm font-bold tracking-widest' },
  { name: 'Microsoft', className: 'text-base font-medium' },
]

const PRODUCTS = [
  { title: 'Business Laptops', sub: '(HP, Dell, Lenovo)', image: '/images/product-business.png' },
  { title: 'Premium Laptops', sub: '(Apple MacBook)', image: '/images/product-premium.png' },
  { title: 'Gaming Laptops', sub: '(High Performance)', image: '/images/product-gaming.png' },
  { title: '2-in-1 / Convertible', sub: '(Flexible & Portable)', image: '/images/product-convertible.png' },
  { title: 'Workstations', sub: '(Professional Use)', image: '/images/product-workstation.png' },
]

export function BrandsProducts() {
  return (
    <section id="products" className="bg-paper text-ink">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
        <div className="px-5 py-8 lg:border-r lg:border-ink/10 lg:pr-6">
          <h2 className="text-2xl font-semibold">Leading Brands We Trade</h2>
          <p className="mt-1 text-sm text-ink/70">Top global brands. Genuine products. Competitive rates.</p>
          <ul className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-5 xl:flex-nowrap xl:justify-between xl:gap-x-3" aria-label="Brands">
            {BRANDS.map((b) => (
              <li key={b.name} className={b.className}>
                {b.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="px-5 py-8 lg:pl-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold">Our Product Range</h2>
            <a href="#contact" className="inline-flex items-center gap-1.5 text-[11px] text-ink/70 hover:text-ink">
              View All Products <ArrowRight className="size-3" aria-hidden="true" />
            </a>
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {PRODUCTS.map((p) => (
              <li key={p.title} className="text-center">
                <div className="relative aspect-[6/5] overflow-hidden rounded-sm border border-ink/10 bg-white">
                  <Image src={p.image} alt={p.title} fill sizes="(min-width: 768px) 10vw, 45vw" className="object-contain p-2" />
                </div>
                <p className="mt-3 text-[11px] font-semibold">{p.title}</p>
                <p className="text-[10px] text-ink/60">{p.sub}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
