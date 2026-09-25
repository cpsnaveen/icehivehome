const stats = [
  { value: "Global", label: "Vision & reach" },
  { value: "24/7", label: "Reliable service" },
  { value: "100%", label: "Peace of mind" },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            A world where every home is <span className="text-hive">intelligent</span>
          </h2>
          <p className="mt-6 text-white/70">
            We believe the future of living is smart, reliable, sustainable, and worry-free. Ice Hive Home is committed
            to delivering home automation solutions that transcend mere convenience — they deliver peace of mind.
          </p>
          <p className="mt-4 text-white/70">
            Our vision extends across the globe. We imagine a world where every home, in every corner, enjoys the
            intelligent technology and dedicated service that Ice Hive provides.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="hive-panel rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-hive">{s.value}</div>
              <div className="mt-2 text-sm text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
