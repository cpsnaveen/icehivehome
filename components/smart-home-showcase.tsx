"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  DoorClosed,
  Lightbulb,
  Plug,
  Camera,
  Lock,
  Blinds,
  PlugZap,
  Droplets,
} from "lucide-react"

type DeviceId =
  | "doorSensors"
  | "light"
  | "plugs"
  | "camera"
  | "locks"
  | "curtains"
  | "powerStrips"
  | "irrigation"

type Device = {
  id: DeviceId
  label: string
  icon: typeof DoorClosed
  desc: string
  /** hotspot position over the villa image, in % */
  pos: { top: number; left: number }
}

const devices: Device[] = [
  { id: "doorSensors", label: "Door Sensors", icon: DoorClosed, desc: "Instant alerts the moment a door opens or closes.", pos: { top: 60, left: 41 } },
  { id: "light", label: "Smart Light", icon: Lightbulb, desc: "Set the mood — dim, brighten or schedule every room.", pos: { top: 33, left: 30 } },
  { id: "plugs", label: "Smart Plugs", icon: Plug, desc: "Turn any appliance on or off from your phone.", pos: { top: 63, left: 28 } },
  { id: "camera", label: "Door Camera", icon: Camera, desc: "See and speak to whoever is at your door, live.", pos: { top: 45, left: 50 } },
  { id: "locks", label: "Door Locks", icon: Lock, desc: "Keyless entry — lock and unlock from anywhere.", pos: { top: 62, left: 55 } },
  { id: "curtains", label: "IR Curtains", icon: Blinds, desc: "IR-operated curtains open and close on command.", pos: { top: 33, left: 70 } },
  { id: "powerStrips", label: "Smart Power Strips", icon: PlugZap, desc: "Control and meter a whole cluster of devices at once.", pos: { top: 63, left: 72 } },
  { id: "irrigation", label: "Smart Irrigation", icon: Droplets, desc: "Automated garden watering, tuned to the weather.", pos: { top: 86, left: 50 } },
]

export function SmartHomeShowcase() {
  const [active, setActive] = useState<DeviceId>("light")
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    if (!auto) return
    const t = setInterval(() => {
      setActive((cur) => {
        const i = devices.findIndex((d) => d.id === cur)
        return devices[(i + 1) % devices.length].id
      })
    }, 3200)
    return () => clearInterval(t)
  }, [auto])

  const select = (id: DeviceId) => {
    setAuto(false)
    setActive(id)
  }

  const activeDevice = devices.find((d) => d.id === active)!

  return (
    <section id="showcase" className="relative border-t border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest hive-accent">Live Demo</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Watch your home come alive
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Tap any device on the right and watch it light up across the villa in real time — the
            same way it responds to a tap in the IceHive app.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Villa scene */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-4 sm:p-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/smart-villa.png"
                alt="Modern smart villa at dusk"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />

              {/* subtle vignette so hotspots read clearly */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_40%,oklch(0.12_0.03_258_/_0.55))]" />

              {/* Moving spotlight glow at active device */}
              <div
                className="pointer-events-none absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-700 ease-out"
                style={{
                  top: `${activeDevice.pos.top}%`,
                  left: `${activeDevice.pos.left}%`,
                  background:
                    "radial-gradient(circle, oklch(0.85 0.15 178 / 0.45), oklch(0.75 0.16 160 / 0.15) 45%, transparent 70%)",
                }}
              />

              {/* Device hotspots */}
              {devices.map((d) => {
                const Icon = d.icon
                const isActive = d.id === active
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => select(d.id)}
                    aria-label={d.label}
                    aria-pressed={isActive}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ top: `${d.pos.top}%`, left: `${d.pos.left}%` }}
                  >
                    <span className="relative flex items-center justify-center">
                      {isActive && (
                        <span className="sh-ping absolute inline-flex h-full w-full rounded-full bg-primary/50" />
                      )}
                      <span
                        className={`relative flex h-8 w-8 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300 ${
                          isActive
                            ? "scale-110 border-primary bg-primary/25 text-primary shadow-[0_0_20px_oklch(0.85_0.15_178_/_0.7)]"
                            : "border-white/30 bg-black/30 text-white/70 hover:border-primary/60 hover:text-primary"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                    </span>
                  </button>
                )
              })}

              {/* Camera scan effect */}
              {active === "camera" && (
                <div
                  className="pointer-events-none absolute h-14 w-16 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md border border-primary/60"
                  style={{ top: `${activeDevice.pos.top}%`, left: `${activeDevice.pos.left}%` }}
                >
                  <span className="sh-scan absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(180deg,oklch(0.85_0.15_178_/_0.7),transparent)]" />
                </div>
              )}

              {/* Irrigation droplets */}
              {active === "irrigation" && (
                <div
                  className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: `${activeDevice.pos.top - 6}%`, left: `${activeDevice.pos.left}%` }}
                >
                  <div className="flex gap-1.5">
                    {[0, 1, 2, 3, 4].map((dp) => (
                      <span
                        key={dp}
                        className="sh-drip block h-2 w-2 rounded-full bg-[oklch(0.8_0.14_210)]"
                        style={{ ["--i" as string]: dp }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Active label */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary sh-ping" />
                {activeDevice.label}
              </div>
            </div>

            <p className="mt-4 min-h-[2.5rem] text-pretty text-sm leading-relaxed text-muted-foreground">
              {activeDevice.desc}
            </p>
          </div>

          {/* Device selector */}
          <div className="flex flex-col gap-2.5">
            {devices.map((d) => {
              const Icon = d.icon
              const isActive = d.id === active
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => select(d.id)}
                  aria-pressed={isActive}
                  className={`group flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                    isActive
                      ? "border-primary/60 bg-primary/10 shadow-[0_0_24px_oklch(0.78_0.15_178_/_0.25)]"
                      : "border-border bg-card hover:border-primary/40 hover:bg-primary/5"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 flex-none items-center justify-center rounded-lg transition-colors ${
                      isActive ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className={`text-sm font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                    {d.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartHomeShowcase
