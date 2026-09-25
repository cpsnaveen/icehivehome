import type { CSSProperties } from "react"
import {
  DoorOpen,
  Lightbulb,
  Plug,
  Cctv,
  Lock,
  Blinds,
  Cable,
  ScanLine,
  PlayCircle,
} from "lucide-react"

const devices = [
  { icon: DoorOpen, title: "Door Sensors", desc: "Know the instant a door opens or closes." },
  { icon: Lightbulb, title: "Smart Light", desc: "Scenes that follow your daily rhythm." },
  { icon: Plug, title: "Smart Plugs", desc: "Switch any appliance on from anywhere." },
  { icon: Cctv, title: "Door Camera", desc: "See and speak to whoever is at your door." },
  { icon: Lock, title: "Door Locks", desc: "Keyless entry and remote locking." },
  { icon: Blinds, title: "Curtain Sensors", desc: "Automated shades tuned to daylight." },
  { icon: Cable, title: "Smart Power Strips", desc: "Meter and control every outlet." },
]

export default function SmartHomeShowcase() {
  return (
    <section id="showcase" className="hive-honeycomb border-y border-[oklch(0.76_0.15_175_/_0.12)]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.76_0.15_175_/_0.25)] bg-[oklch(0.76_0.15_175_/_0.08)] px-4 py-1.5 text-xs font-medium text-hive">
            <PlayCircle className="size-4" />
            Automation in motion
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
            Watch a smart home <span className="text-hive">come alive</span>
          </h2>
          <p className="mt-4 text-white/70">
            A single tap and the whole home responds — curtains glide open on IR command, lights warm up, locks engage,
            and every device reports back in real time.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-5">
          {/* Animated "clip": a room scene with IR-operated curtains */}
          <div className="lg:col-span-3">
            <div className="hive-panel relative overflow-hidden rounded-3xl p-4 sm:p-6">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-[oklch(0.76_0.15_175_/_0.2)]">
                {/* Sky / outdoors seen through the window */}
                <div className="sh-sky absolute inset-0">
                  <div className="sh-orb absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.85_0.15_178)_0%,oklch(0.78_0.15_178_/_0.35)_45%,transparent_70%)] blur-[2px]" />
                </div>

                {/* Ceiling smart-light beam */}
                <div className="sh-beam pointer-events-none absolute -top-2 left-1/2 h-2/3 w-3/4 -translate-x-1/2 bg-[linear-gradient(180deg,oklch(0.85_0.15_178_/_0.5),transparent_75%)]" />

                {/* Door-camera scan overlay */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="sh-scan absolute inset-x-0 h-16 bg-[linear-gradient(180deg,transparent,oklch(0.85_0.15_178_/_0.18),transparent)]" />
                </div>

                {/* IR-operated curtains */}
                <div className="sh-curtain sh-curtain-left absolute inset-y-0 left-0 w-[52%] rounded-r-xl border-r border-[oklch(0.85_0.15_178_/_0.25)]" />
                <div className="sh-curtain sh-curtain-right absolute inset-y-0 right-0 w-[52%] rounded-l-xl border-l border-[oklch(0.85_0.15_178_/_0.25)]" />

                {/* Curtain rail */}
                <div className="absolute inset-x-0 top-0 h-2 bg-[oklch(0.3_0.05_258)]" />

                {/* IR command badge */}
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-[oklch(0.85_0.15_178_/_0.3)] bg-[oklch(0.17_0.045_255_/_0.7)] px-3 py-1.5 text-xs font-medium text-hive backdrop-blur-sm">
                  <ScanLine className="size-3.5" />
                  IR curtain control
                </div>
              </div>

              <p className="mt-4 text-center text-sm text-white/55">
                Live demo loop — curtains open and close on infrared command while the home stays in sync.
              </p>
            </div>
          </div>

          {/* Sequenced device list */}
          <div className="lg:col-span-2">
            <div className="grid h-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {devices.map((d, i) => (
                <div
                  key={d.title}
                  className="sh-device flex items-center gap-4 rounded-2xl border p-4"
                  style={{ "--i": i } as CSSProperties}
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-current/20">
                    <d.icon className="size-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{d.title}</div>
                    <p className="mt-0.5 text-sm text-white/55">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
