import { Lightbulb, Lock, Thermometer, Camera, Speaker, Wifi } from "lucide-react"

const services = [
  { icon: Lightbulb, title: "Smart Lighting", desc: "Adaptive lighting scenes that follow your daily rhythm." },
  { icon: Lock, title: "Access & Security", desc: "Smart locks, alarms, and 24/7 monitored protection." },
  { icon: Thermometer, title: "Climate Control", desc: "Efficient heating and cooling tuned to save energy." },
  { icon: Camera, title: "Video Surveillance", desc: "HD cameras with intelligent alerts, anywhere access." },
  { icon: Speaker, title: "Whole-Home Audio", desc: "Immersive sound that moves with you room to room." },
  { icon: Wifi, title: "Connected Network", desc: "Robust, secure connectivity as the backbone of it all." },
]

export default function Services() {
  return (
    <section id="services" className="hive-honeycomb border-y border-[oklch(0.76_0.15_175_/_0.12)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Services</h2>
          <p className="mt-4 text-white/70">A complete, integrated fitout for the intelligent home.</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="hive-panel group rounded-2xl p-6 transition-colors hover:border-[oklch(0.76_0.15_175_/_0.4)]"
            >
              <s.icon className="size-8 text-hive transition-transform group-hover:scale-110" />
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/65">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
