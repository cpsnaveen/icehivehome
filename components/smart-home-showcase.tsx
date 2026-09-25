"use client"

import { useEffect, useState } from "react"
import {
  DoorClosed,
  Lightbulb,
  Plug,
  Camera,
  Lock,
  Blinds,
  PlugZap,
  Droplets,
  Sprout,
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
}

const devices: Device[] = [
  { id: "doorSensors", label: "Door Sensors", icon: DoorClosed, desc: "Instant alerts the moment a door opens or closes." },
  { id: "light", label: "Smart Light", icon: Lightbulb, desc: "Set the mood — dim, brighten or schedule every room." },
  { id: "plugs", label: "Smart Plugs", icon: Plug, desc: "Turn any appliance on or off from your phone." },
  { id: "camera", label: "Door Camera", icon: Camera, desc: "See and speak to whoever is at your door, live." },
  { id: "locks", label: "Door Locks", icon: Lock, desc: "Keyless entry — lock and unlock from anywhere." },
  { id: "curtains", label: "IR Curtains", icon: Blinds, desc: "IR-operated curtains open and close on command." },
  { id: "powerStrips", label: "Smart Power Strips", icon: PlugZap, desc: "Control and meter a whole cluster of devices at once." },
  { id: "irrigation", label: "Smart Irrigation", icon: Droplets, desc: "Automated garden watering, tuned to the weather." },
]

export default function SmartHomeShowcase() {
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

  // Derived scene state
  const lightOn = active === "light"
  const curtainsOpen = active === "curtains"
  const cameraOn = active === "camera"
  const locked = active === "locks"
  const doorSensorOn = active === "doorSensors"
  const plugsOn = active === "plugs"
  const stripsOn = active === "powerStrips"
  const irrigationOn = active === "irrigation"

  return (
    <section id="showcase" className="relative border-t border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest hive-accent">Live Demo</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Watch your home come alive
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Tap any device on the right and see the house respond in real time — the same way it
            reacts to a tap in the IceHive app.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* House scene */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-4 sm:p-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sh-sky">
              {/* Sun/moon orb */}
              <div className="pointer-events-none absolute right-8 top-6 h-12 w-12 rounded-full bg-primary/70 blur-[2px]" />

              {/* House body */}
              <div className="absolute inset-x-6 bottom-16 top-14 rounded-t-md border border-white/10 bg-[oklch(0.22_0.04_258)]">
                {/* Roof */}
                <div className="absolute -top-8 -left-2 -right-2 h-8">
                  <div
                    className="mx-auto h-0 w-0"
                    style={{
                      borderLeft: "24px solid transparent",
                      borderRight: "24px solid transparent",
                      borderBottom: "32px solid oklch(0.26 0.05 258)",
                      width: "0",
                    }}
                  />
                  <div className="absolute inset-x-6 top-6 h-3 rounded-t-sm bg-[oklch(0.26_0.05_258)]" />
                </div>

                {/* Ceiling light */}
                <div className="absolute left-1/2 top-3 -translate-x-1/2 flex flex-col items-center">
                  <div className="h-4 w-px bg-white/20" />
                  <div
                    className={`h-4 w-4 rounded-full transition-all duration-500 ${
                      lightOn
                        ? "bg-primary shadow-[0_0_28px_10px_oklch(0.85_0.15_178_/_0.55)]"
                        : "bg-white/25"
                    }`}
                  />
                  {lightOn && (
                    <div
                      className="pointer-events-none absolute top-6 h-24 w-32 sh-glow"
                      style={{
                        background:
                          "linear-gradient(180deg, oklch(0.85 0.15 178 / 0.35), transparent 80%)",
                        clipPath: "polygon(35% 0, 65% 0, 100% 100%, 0 100%)",
                      }}
                    />
                  )}
                </div>

                {/* Windows with IR curtains */}
                {[0, 1].map((w) => (
                  <div
                    key={w}
                    className="absolute top-10 h-20 w-16 overflow-hidden rounded-sm border border-white/15 bg-[oklch(0.3_0.07_240)]"
                    style={{ left: w === 0 ? "10%" : "auto", right: w === 1 ? "10%" : "auto" }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,oklch(0.78_0.15_178_/_0.4),transparent_60%)]" />
                    {/* curtain panels */}
                    <div
                      className="sh-panel absolute inset-y-0 left-0 w-1/2"
                      style={{ transform: curtainsOpen ? "translateX(-96%)" : "translateX(0)" }}
                    />
                    <div
                      className="sh-panel absolute inset-y-0 right-0 w-1/2"
                      style={{ transform: curtainsOpen ? "translateX(96%)" : "translateX(0)" }}
                    />
                  </div>
                ))}

                {/* Power strip / plugs on the wall */}
                <div className="absolute bottom-14 left-6 flex items-center gap-1.5">
                  <div
                    className={`h-3 w-3 rounded-sm border transition-all duration-300 ${
                      plugsOn
                        ? "border-primary bg-primary/70 shadow-[0_0_14px_oklch(0.85_0.15_178_/_0.6)]"
                        : "border-white/20 bg-white/10"
                    }`}
                  />
                  <div className="flex gap-1 rounded-sm border border-white/15 bg-[oklch(0.24_0.05_255)] p-1">
                    {[0, 1, 2, 3].map((s) => (
                      <span
                        key={s}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          stripsOn
                            ? "bg-primary shadow-[0_0_10px_oklch(0.85_0.15_178_/_0.7)]"
                            : "bg-white/25"
                        }`}
                        style={{ transitionDelay: stripsOn ? `${s * 90}ms` : "0ms" }}
                      />
                    ))}
                  </div>
                </div>

                {/* Front door */}
                <div className="absolute bottom-0 left-1/2 h-24 w-16 -translate-x-1/2 rounded-t-md border border-white/15 bg-[oklch(0.26_0.05_258)]">
                  {/* Door camera */}
                  <div className="absolute -top-1 left-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center">
                    <div
                      className={`relative h-3 w-5 overflow-hidden rounded-sm border transition-colors ${
                        cameraOn ? "border-primary bg-[oklch(0.2_0.05_258)]" : "border-white/20 bg-white/10"
                      }`}
                    >
                      <span
                        className={`absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                          cameraOn ? "bg-primary" : "bg-white/40"
                        }`}
                      />
                      {cameraOn && (
                        <span className="sh-scan absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(180deg,oklch(0.85_0.15_178_/_0.7),transparent)]" />
                      )}
                    </div>
                  </div>

                  {/* Door sensor */}
                  <div className="absolute right-1 top-2 flex items-center justify-center">
                    <span
                      className={`relative h-2 w-2 rounded-full ${
                        doorSensorOn ? "bg-primary" : "bg-white/25"
                      }`}
                    >
                      {doorSensorOn && (
                        <span className="sh-ping absolute inset-0 rounded-full bg-primary/60" />
                      )}
                    </span>
                  </div>

                  {/* Lock handle */}
                  <div className="absolute left-2 top-1/2 -translate-y-1/2">
                    <Lock
                      className={`h-3.5 w-3.5 transition-colors ${
                        locked ? "text-primary" : "text-white/40"
                      }`}
                      strokeWidth={2.5}
                    />
                    {locked && (
                      <span className="absolute -inset-1 rounded-full bg-primary/20 sh-glow" />
                    )}
                  </div>
                </div>
              </div>

              {/* Garden + smart irrigation */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,oklch(0.32_0.08_150),oklch(0.24_0.06_150))]">
                {/* plants */}
                <div className="absolute bottom-3 left-6 flex items-end gap-2">
                  {[0, 1, 2].map((p) => (
                    <Sprout
                      key={p}
                      className={`h-5 w-5 transition-colors duration-500 ${
                        irrigationOn ? "text-[oklch(0.82_0.17_150)]" : "text-[oklch(0.6_0.1_150)]"
                      }`}
                    />
                  ))}
                </div>
                {/* sprinkler + droplets */}
                <div className="absolute bottom-6 right-8 flex flex-col items-center">
                  <div
                    className={`h-2 w-6 rounded-sm border transition-colors ${
                      irrigationOn ? "border-primary bg-primary/60" : "border-white/20 bg-white/10"
                    }`}
                  />
                  {irrigationOn && (
                    <div className="pointer-events-none absolute -top-1 flex gap-1">
                      {[0, 1, 2, 3, 4].map((d) => (
                        <span
                          key={d}
                          className="sh-drip block h-1.5 w-1.5 rounded-full bg-[oklch(0.8_0.14_210)]"
                          style={{ ["--i" as string]: d }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Active label */}
              <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
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
