import { Brain, ShieldCheck, Leaf, Users } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Smart",
    desc: "Intelligent automation that learns and adapts to your lifestyle, so the home works for you.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    desc: "Systems engineered, tested and commissioned to be trusted 24/7, whenever you need them.",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    desc: "Scheduling and energy modes that reduce waste and care for our planet's future.",
  },
  {
    icon: Users,
    title: "Accessible",
    desc: "Premium automation made simple and attainable for everyone, not just the privileged.",
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-paper font-body text-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="ih-eyebrow text-navy">Our Promise</span>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
              Invisible intelligence. Effortless living.
            </h2>
          </div>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-ink/65">
            Ice Hive integrates technology so completely that the experience feels natural, calm and dependable. Smart
            living should serve your architecture and daily routine — never compete with them.
          </p>
        </div>

        <div className="mt-16 grid border-l border-t border-ink/12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group border-b border-r border-ink/12 bg-paper p-8 transition-colors hover:bg-navy hover:text-paper"
            >
              <f.icon className="size-7 text-navy transition-colors group-hover:text-hive" strokeWidth={1.6} />
              <h3 className="mt-14 font-display text-2xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65 transition-colors group-hover:text-paper/70">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
