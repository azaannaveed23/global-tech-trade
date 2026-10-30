import { Earth } from 'lucide-react'

export function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Global Tech Trade home">
      <span className="flex size-10 items-center justify-center rounded-full border-2 border-gold/80 bg-gold/10">
        <Earth className="size-6 text-gold" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-[0.12em] text-white">GLOBAL TECH TRADE</span>
        <span className="mt-1 text-[9px] tracking-[0.35em] text-white/70">
          {'LAPTOPS · IMPORT · EXPORT'}
        </span>
      </span>
    </a>
  )
}
