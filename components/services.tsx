import {
  Cpu,
  Lightbulb,
  Thermometer,
  Blinds,
  Camera,
  Lock,
  Wifi,
  Speaker,
  Droplets,
  ArrowUpRight,
} from "lucide-react"

const services = [
  { icon: Cpu, title: "Smart Home Automation", desc: "Lighting, climate, curtains, scenes, voice and app control coordinated around daily life." },
  { icon: Lightbulb, title: "Smart Lighting", desc: "Elegant switching, scene control and dimming designed to complement the architecture." },
  { icon: Thermometer, title: "Climate Control", desc: "Integrated AC control for consistent comfort, scheduling and energy-saving modes." },
  { icon: Blinds, title: "Curtain Automation", desc: "Motorised and IR curtains that respond to scenes, schedules and natural light." },
  { icon: Camera, title: "Security & CCTV", desc: "Camera planning, live monitoring and intelligent alerts for discreet protection." },
  { icon: Lock, title: "Smart Door Access", desc: "Smart locks, video door cameras and keyless entry integrated into the home." },
  { icon: Wifi, title: "Wi-Fi & Networking", desc: "Structured network design and full-coverage Wi-Fi — the backbone of it all." },
  { icon: Speaker, title: "Audio Visual", desc: "Multi-room audio and home cinema controls integrated with the wider system." },
  { icon: Droplets, title: "Smart Irrigation", desc: "Automated garden watering, scheduled and tuned to the weather." },
]

export default function Services() {
  return (
    <section id="services" className="ih-grid-lines bg-navy font-body text-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="ih-eyebrow text-paper/70">Connected Ecosystem</span>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-6xl">
              Every system. <span className="text-hive">One intelligent home.</span>
            </h2>
          </div>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-paper/65">
            From a single apartment to a complete villa, Ice Hive coordinates the technology, installation,
            configuration and handover as one accountable scope.
          </p>
        </div>

        <div className="mt-16 grid border-l border-t border-paper/12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.title}
              href="#contact"
              className="group relative flex flex-col border-b border-r border-paper/12 p-8 transition-colors hover:bg-navy-deep"
            >
              <div className="flex items-start justify-between">
                <s.icon className="size-7 text-hive" strokeWidth={1.6} />
                <ArrowUpRight className="size-5 text-paper/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-hive" />
              </div>
              <h3 className="mt-12 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">{s.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
