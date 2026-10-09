const steps = [
  { title: "Understand", desc: "Your lifestyle, routines, rooms, priorities and project requirements." },
  { title: "Design", desc: "Automation, lighting, network and security architecture for your space." },
  { title: "Engineer", desc: "Device selection, compatibility checks, drawings and integration logic." },
  { title: "Install", desc: "Professional, tidy execution coordinated with your site and contractors." },
  { title: "Configure", desc: "Scenes, controls, permissions and personalised routines set up for you." },
  { title: "Commission", desc: "Testing, training, documentation and a confident final handover." },
]

export default function Process() {
  return (
    <section id="process" className="bg-navy-deep font-body text-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="ih-eyebrow text-paper/70">How We Work</span>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
              Designed before it is <span className="text-hive">automated.</span>
            </h2>
          </div>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-paper/65">
            Every Ice Hive project begins with the architecture, layouts and the people who will live in the space. We
            then coordinate every system into one scalable plan.
          </p>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-sm bg-paper/12 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col bg-navy-deep p-8">
              <span className="font-display text-sm font-semibold tabular-nums text-hive">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-10 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
