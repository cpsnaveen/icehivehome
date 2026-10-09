"use client"

import { useState } from "react"
import { Home, Clapperboard, Moon, ShieldCheck, Check } from "lucide-react"

const scenes = [
  {
    id: "welcome",
    group: "Arrival",
    name: "Welcome Home",
    icon: Home,
    desc: "A calm return, prepared before you even reach the door.",
    actions: ["Entrance unlocks", "Lighting activates", "Climate adjusts", "Curtains open"],
  },
  {
    id: "movie",
    group: "Entertainment",
    name: "Movie Night",
    icon: Clapperboard,
    desc: "The living room shifts into a focused cinema atmosphere.",
    actions: ["Lighting dims", "Curtains close", "Audio & TV switch on", "Climate settles"],
  },
  {
    id: "night",
    group: "Rest",
    name: "Good Night",
    icon: Moon,
    desc: "A single command prepares the entire home for the night.",
    actions: ["Lights switch off", "Doors secure", "Curtains close", "Temperature lowers"],
  },
  {
    id: "away",
    group: "Security",
    name: "Away",
    icon: ShieldCheck,
    desc: "The home protects itself and cuts unnecessary energy use.",
    actions: ["Lighting shuts down", "Cameras arm", "Locks engage", "Energy mode starts"],
  },
] as const

export default function Scenes() {
  const [activeId, setActiveId] = useState<(typeof scenes)[number]["id"]>("welcome")
  const active = scenes.find((s) => s.id === activeId)!

  return (
    <section id="scenes" className="bg-paper font-body text-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="ih-eyebrow text-navy">Smart Scenes</span>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            Your home responds to the way you live.
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink/65">
            Scenes coordinate several systems through one clear command — from the app, a wall keypad or your voice.
          </p>
        </div>

        <div className="mt-14 grid gap-0 border border-ink/12 lg:grid-cols-[1fr_1.4fr]">
          <div role="tablist" aria-label="Smart scenes" className="flex flex-col border-ink/12 lg:border-r">
            {scenes.map((s) => {
              const isActive = s.id === activeId
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  id={`scene-tab-${s.id}`}
                  aria-selected={isActive}
                  aria-controls="scene-panel"
                  onClick={() => setActiveId(s.id)}
                  className={`flex items-center gap-4 border-b border-ink/12 px-6 py-6 text-left transition-colors last:border-b-0 ${
                    isActive ? "bg-navy text-paper" : "hover:bg-ink/5"
                  }`}
                >
                  <s.icon className={`size-6 shrink-0 ${isActive ? "text-hive" : "text-navy"}`} strokeWidth={1.6} />
                  <span className="flex flex-col">
                    <span
                      className={`text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${
                        isActive ? "text-paper/60" : "text-ink/50"
                      }`}
                    >
                      {s.group}
                    </span>
                    <span className="font-display text-lg font-semibold">{s.name}</span>
                  </span>
                </button>
              )
            })}
          </div>

          <div
            id="scene-panel"
            role="tabpanel"
            aria-labelledby={`scene-tab-${active.id}`}
            className="flex flex-col justify-between gap-10 border-t border-ink/12 p-8 md:p-12 lg:border-t-0"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-navy">{active.group}</span>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">{active.name}</h3>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-ink/65">{active.desc}</p>
            </div>
            <ul key={active.id} className="grid gap-3 sm:grid-cols-2">
              {active.actions.map((a, i) => (
                <li
                  key={a}
                  className="ih-rise flex items-center gap-3 rounded-sm border border-ink/12 bg-paper px-4 py-4 text-sm font-medium"
                  style={{ ["--d" as string]: i }}
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-navy text-hive">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
