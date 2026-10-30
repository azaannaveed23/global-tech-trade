import { Mail } from 'lucide-react'

const TEAM = [
  {
    name: 'Ahmed Raza',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop&crop=faces&q=80',
    email: 'ahmed@globaltechtrade.com',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Head of Global Sourcing',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=faces&q=80',
    email: 'sarah@globaltechtrade.com',
  },
  {
    name: 'Omar Al Mansoori',
    role: 'Dubai Operations Lead',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop&crop=faces&q=80',
    email: 'omar@globaltechtrade.com',
  },
  {
    name: 'Emily Carter',
    role: 'Logistics & Supply Chain Manager',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=faces&q=80',
    email: 'emily@globaltechtrade.com',
  },
]

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V21h-4z" />
    </svg>
  )
}

export function TeamSection() {
  return (
    <section id="team" aria-labelledby="team-heading" className="bg-[#0b0f19] py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 id="team-heading" className="text-3xl font-bold text-white">
          Our Expert Team
        </h2>
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d97706]">
          Meet the professionals driving global laptop trade and logistics
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <li
              key={member.name}
              className="rounded-xl border border-gray-800 bg-gray-900/70 p-5 text-center backdrop-blur-md transition-colors hover:border-[#d97706]/60"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.image}
                alt={`Portrait of ${member.name}, ${member.role}`}
                width={600}
                height={600}
                loading="lazy"
                className="aspect-square w-full rounded-lg object-cover"
              />
              <h3 className="mt-5 text-base font-semibold text-white">{member.name}</h3>
              <p className="mt-1 text-xs font-medium text-[#d97706]">{member.role}</p>
              <div className="mt-4 flex justify-center gap-2">
                <a
                  href="https://www.linkedin.com/"
                  aria-label={`${member.name} on LinkedIn`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-8 items-center justify-center rounded-md border border-gray-700 text-white/80 transition-colors hover:border-[#d97706] hover:text-[#d97706]"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                  className="flex size-8 items-center justify-center rounded-md border border-gray-700 text-white/80 transition-colors hover:border-[#d97706] hover:text-[#d97706]"
                >
                  <Mail className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
