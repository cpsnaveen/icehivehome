import { Brain, ShieldCheck, Leaf, Users, Quote } from "lucide-react"

const pillars = [
  { icon: Brain, title: "Smart", desc: "Intelligent automation that learns and adapts to your lifestyle" },
  { icon: ShieldCheck, title: "Reliable", desc: "Systems you can trust, 24/7, whenever you need them" },
  { icon: Leaf, title: "Sustainable", desc: "Technology that cares for our planet's future" },
  { icon: Users, title: "Accessible", desc: "Premium automation available to all, not just the privileged" },
]

export default function FoundersMessage() {
  return (
    <section id="founder" className="hive-honeycomb border-y border-[oklch(0.76_0.15_175_/_0.12)]">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-hive">Founder&apos;s Message</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">A Vision for the Connected Home</h2>
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
          <div className="size-28 shrink-0 overflow-hidden rounded-2xl border border-[oklch(0.76_0.15_175_/_0.3)] shadow-xl sm:size-32">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/founder-naveen.jpg"
              alt="Portrait of Naveen Srinivasan, Founder of Ice Hive Home"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <div className="text-xl font-semibold">Naveen Srinivasan</div>
            <div className="mt-1 text-hive">Founder &amp; Visionary, Ice Hive Home</div>
          </div>
        </div>

        <div className="mt-12 space-y-10 text-white/75">
          <div>
            <h3 className="text-xl font-semibold text-white">A Dream Born from Wonder</h3>
            <p className="mt-3 leading-relaxed">
              Since childhood, I&apos;ve been captivated by the transformative power of technology. When the internet
              began its revolution, I envisioned a future where intelligence flows through our homes — where the magic
              of connectivity empowers us to manage our lives from anywhere in the world with just a touch.
            </p>
            <p className="mt-4 leading-relaxed">
              Today, that childhood dream has crystallized into a singular mission: to make intelligent home automation
              a reality for everyone, everywhere.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Our Vision</h3>
            <p className="mt-3 leading-relaxed">
              We believe the future of living is smart, reliable, sustainable, and worry-free. Ice Hive Home is
              committed to delivering home automation solutions that transcend mere convenience — they deliver peace of
              mind.
            </p>
            <p className="mt-4 leading-relaxed">
              Our vision extends across the globe. We imagine a world where every home, in every corner, enjoys the
              intelligent technology and dedicated service that Ice Hive provides. Where homeowners sleep peacefully
              knowing their homes are protected, efficient, and in perfect harmony with their lives.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.title} className="hive-panel flex gap-4 rounded-2xl p-5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[oklch(0.76_0.15_175_/_0.12)] text-hive">
                    <p.icon className="size-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{p.title}</div>
                    <p className="mt-1 text-sm text-white/60">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">The Evolution Is Here</h3>
            <p className="mt-3 leading-relaxed">
              The internet continues to evolve at breathtaking speed. Life, willingly or not, revolves around it. Our
              commitment is simple: harness this evolution to create positive change, making cutting-edge home
              automation accessible to everyone, everywhere.
            </p>
            <p className="mt-4 leading-relaxed">
              When the world thinks of IoT and home automation, we want Ice Hive to be the name that comes to mind —
              synonymous with trust, innovation, and excellence.
            </p>
          </div>

          <blockquote className="hive-panel relative rounded-3xl p-8 md:p-10">
            <Quote className="absolute -top-4 left-8 size-8 text-hive" aria-hidden="true" />
            <p className="text-pretty text-lg italic leading-relaxed text-white/90">
              Looking forward to a future where every home enjoys the smart fitout and service that Ice Hive Home
              provides — a future that is better, safer, more reliable, sustainable, and affordable for all. Welcome to
              the Ice Hive revolution.
            </p>
            <footer className="mt-6 not-italic">
              <div className="font-semibold text-hive">Naveen Srinivasan</div>
              <div className="text-sm text-white/60">Founder, Ice Hive Home</div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
