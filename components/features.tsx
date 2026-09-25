import { Brain, ShieldCheck, Leaf, Users } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Smart",
    desc: "Intelligent automation that learns and adapts to your lifestyle.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    desc: "Systems you can trust, 24/7, whenever you need them.",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    desc: "Technology that cares for our planet's future.",
  },
  {
    icon: Users,
    title: "Accessible",
    desc: "Premium automation available to all, not just the privileged.",
  },
]

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Built on four promises</h2>
        <p className="mt-4 text-white/70">Every Ice Hive system is designed around the values that matter most.</p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="hive-panel rounded-2xl p-6">
            <div className="flex size-12 items-center justify-center rounded-xl bg-[oklch(0.76_0.15_175_/_0.12)] text-hive">
              <f.icon className="size-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-white/65">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
