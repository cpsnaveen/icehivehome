const reasons = [
  { title: "Designed for your space", desc: "Every system begins with the property, layouts, routines and desired experience." },
  { title: "Integrated technology", desc: "Multiple systems operate through one coordinated app and set of controls." },
  { title: "Professional engineering", desc: "Planning, installation, configuration and testing stay accountable to one team." },
  { title: "Scalable architecture", desc: "The platform adapts as rooms, requirements and technology evolve." },
  { title: "Structured support", desc: "Training, documentation, remote assistance and onsite service protect performance." },
]

const protocols = ["Zigbee", "Matter", "Wi-Fi", "Ice Hive App", "Voice Control", "Secure Connectivity"]

export default function About() {
  return (
    <section id="about" className="bg-paper font-body text-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="ih-eyebrow text-navy">Why Ice Hive</span>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
              A world where every home is <span className="text-navy">intelligent.</span>
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-ink/65">
              We believe the future of living is smart, reliable, sustainable and worry-free. Ice Hive treats home
              technology as an engineering discipline — not a catalogue of disconnected gadgets — so it delivers real
              peace of mind.
            </p>
          </div>

          <ul className="border-t border-ink/12">
            {reasons.map((r) => (
              <li key={r.title} className="grid gap-2 border-b border-ink/12 py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
                <h3 className="font-display text-lg font-semibold">{r.title}</h3>
                <p className="text-sm leading-relaxed text-ink/65">{r.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 rounded-sm bg-navy p-8 text-paper md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
            <div>
              <span className="ih-eyebrow text-paper/70">Open Platform</span>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
                Connected by open, dependable intelligence.
              </h3>
            </div>
            <ul className="flex flex-wrap gap-3" aria-label="Supported technologies">
              {protocols.map((p) => (
                <li
                  key={p}
                  className="rounded-sm border border-paper/20 px-5 py-3 text-sm font-semibold tracking-wide text-paper/90"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
