import { Quote } from "lucide-react"

const chapters = [
  {
    title: "A dream born from wonder",
    body: [
      "Since childhood, I\u2019ve been captivated by the transformative power of technology. When the internet began its revolution, I envisioned a future where intelligence flows through our homes \u2014 where connectivity empowers us to manage our lives from anywhere in the world with just a touch.",
      "Today, that childhood dream has crystallised into a singular mission: to make intelligent home automation a reality for everyone, everywhere.",
    ],
  },
  {
    title: "Our vision",
    body: [
      "We imagine a world where every home, in every corner, enjoys the intelligent technology and dedicated service that Ice Hive provides \u2014 where homeowners sleep peacefully knowing their homes are protected, efficient and in perfect harmony with their lives.",
    ],
  },
  {
    title: "The evolution is here",
    body: [
      "The internet continues to evolve at breathtaking speed. Our commitment is simple: harness this evolution to create positive change. When the world thinks of IoT and home automation, we want Ice Hive to be the name that comes to mind \u2014 synonymous with trust, innovation and excellence.",
    ],
  },
]

export default function FoundersMessage() {
  return (
    <section id="founder" className="ih-grid-lines bg-navy font-body text-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <span className="ih-eyebrow text-paper/70">Founder&apos;s Message</span>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-6xl">
          A vision for the <span className="text-hive">connected home.</span>
        </h2>

        <div className="mt-16 grid gap-14 lg:grid-cols-[22rem_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-paper/15">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/founder.png"
                alt="Portrait of Naveen Srinivasan, Founder of Ice Hive Home"
                className="h-full w-full object-cover object-[50%_22%]"
              />
            </div>
            <div className="mt-5 border-l-2 border-hive pl-4">
              <div className="font-display text-xl font-semibold">Naveen Srinivasan</div>
              <div className="mt-1 text-sm text-paper/60">Founder &amp; Visionary, Ice Hive Home</div>
            </div>
          </aside>

          <div className="flex flex-col gap-12">
            {chapters.map((c) => (
              <div key={c.title} className="border-t border-paper/12 pt-8">
                <h3 className="font-display text-2xl font-semibold">{c.title}</h3>
                <div className="mt-4 flex flex-col gap-4 leading-relaxed text-paper/70">
                  {c.body.map((p) => (
                    <p key={p.slice(0, 24)} className="text-pretty">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <blockquote className="relative rounded-sm bg-paper p-8 text-ink md:p-10">
              <Quote className="size-8 text-navy" aria-hidden="true" />
              <p className="mt-4 font-display text-xl font-medium leading-relaxed text-pretty md:text-2xl">
                Looking forward to a future where every home enjoys the smart fitout and service that Ice Hive Home
                provides — better, safer, more reliable, sustainable and affordable for all. Welcome to the Ice Hive
                revolution.
              </p>
              <footer className="mt-6">
                <div className="font-semibold text-navy">Naveen Srinivasan</div>
                <div className="text-sm text-ink/60">Founder, Ice Hive Home</div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
