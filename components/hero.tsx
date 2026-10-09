import { ArrowUpRight } from "lucide-react"

const systems = ["Lighting", "Climate", "Curtains", "Security", "Network"]

const proof = [
  { title: "One Technical Owner", desc: "A single accountable team from design to handover." },
  { title: "Design-Led Engineering", desc: "Systems planned around your architecture and routine." },
  { title: "Open Protocols", desc: "Zigbee, Matter and Wi-Fi — no closed ecosystems." },
  { title: "Lifecycle Aftercare", desc: "Training, remote assistance and onsite service." },
]

export default function Hero() {
  return (
    <section className="ih-grid-lines relative overflow-hidden bg-navy font-body text-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-16 pt-16 md:pt-24 lg:grid-cols-[1fr_1.1fr] lg:pb-24">
        <div>
          <span className="ih-eyebrow ih-rise text-paper/70">UAE / Integrated Smart Living</span>
          <h1 className="mt-7 font-display text-5xl font-bold leading-[0.98] tracking-tight text-balance md:text-7xl">
            <span className="ih-rise block" style={{ ["--d" as string]: 1 }}>
              The Connected Home.
            </span>
            <span className="ih-rise block text-hive" style={{ ["--d" as string]: 2 }}>
              Designed Around You.
            </span>
          </h1>
          <p
            className="ih-rise mt-8 max-w-xl text-pretty text-lg leading-relaxed text-paper/70"
            style={{ ["--d" as string]: 3 }}
          >
            Ice Hive Home designs and delivers intelligent home automation — integrating lighting, climate, curtains,
            security, access, entertainment and connectivity into one calm, seamless experience.
          </p>
          <div className="ih-rise mt-10 flex flex-wrap gap-4" style={{ ["--d" as string]: 4 }}>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-sm bg-paper px-6 py-4 text-sm font-semibold text-navy transition-colors hover:bg-hive"
            >
              Book a Smart Home Consultation <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center gap-3 rounded-sm border border-paper/25 px-6 py-4 text-sm font-semibold text-paper transition-colors hover:border-hive hover:text-hive"
            >
              Try the Live Demo
            </a>
          </div>
        </div>

        <div className="ih-rise relative" style={{ ["--d" as string]: 3 }}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-paper/10 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/smart-home-hero.png"
              alt="Modern smart home interior with warm architectural lighting"
              className="h-full w-full object-cover"
            />
            <ul className="absolute right-4 top-4 flex flex-col gap-2" aria-label="Integrated systems">
              {systems.map((s) => (
                <li
                  key={s}
                  className="rounded-sm border border-paper/20 bg-navy-deep/70 px-4 py-2 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-paper/90 backdrop-blur-sm"
                >
                  {s}
                </li>
              ))}
            </ul>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-sm bg-paper px-4 py-2.5 text-xs font-semibold text-navy">
              <span className="size-2 rounded-full bg-hive" aria-hidden="true" />
              All systems responding
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <ul className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((p) => (
            <li key={p.title} className="border-b border-paper/10 px-6 py-7 sm:border-r lg:border-b-0 lg:last:border-r-0">
              <div className="font-display text-base font-semibold text-paper">{p.title}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-paper/60">{p.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
