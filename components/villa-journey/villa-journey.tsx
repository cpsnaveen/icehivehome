"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, ChevronDown, Clapperboard, Moon, PartyPopper, Sun } from "lucide-react"
import SceneFrame from "./scene-frame"
import ProductHotspot from "./product-hotspot"
import SceneLighting from "./scene-lighting"
import { exterior, finale, rooms, totalProducts, type Scene } from "./data"

const STAGES = rooms.length + 2
const TRANSITION = 0.4
const SCENE_ROOM_HOLD = 0.58
const SCENE_START = 0.36

const stageWeights = [1, ...rooms.map((r) => r.weight ?? 1), 1]
const stageStarts = stageWeights.reduce<number[]>((acc, _w, i) => [...acc, i === 0 ? 0 : acc[i - 1] + stageWeights[i - 1]], [])
const STAGE_SPAN = stageStarts[STAGES - 1] + 1 - TRANSITION

const sceneIcons: Record<Scene["id"], typeof Sun> = {
  welcome: Sun,
  movie: Clapperboard,
  party: PartyPopper,
  goodnight: Moon,
}

const weightedToStage = (w: number) => {
  let i = STAGES - 1
  while (i > 0 && w < stageStarts[i]) i--
  return i + (w - stageStarts[i]) / stageWeights[i]
}
const stageToWeighted = (f: number) => {
  const i = Math.min(STAGES - 1, Math.floor(f))
  return stageStarts[i] + (f - i) * stageWeights[i]
}

const sceneBlend = (sceneT: number, count: number) => {
  const s = Math.min(count - 1, Math.max(0, sceneT * count - 0.5))
  const lower = Math.floor(s)
  const t = easeInOut(clamp01((s - lower - 0.3) / 0.4))
  return Array.from({ length: count }, (_, j) => (j === lower ? 1 - t : j === lower + 1 ? t : 0))
}
const SCROLL_PER_STAGE_VH = 110
const FINAL_HOLD_VH = 80

const clamp01 = (v: number) => Math.min(1, Math.max(0, v))
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

const stageLabels = ["Villa", ...rooms.map((r) => r.label), "Connected"]

export default function VillaJourney() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)
  const [viewport, setViewport] = useState({ w: 1600, h: 900 })

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      const journeyScroll = scrollable - (FINAL_HOLD_VH / 100) * window.innerHeight
      setProgress(journeyScroll > 0 ? clamp01(-rect.top / journeyScroll) : 0)
      setViewport((v) => (v.w === window.innerWidth && v.h === window.innerHeight ? v : { w: window.innerWidth, h: window.innerHeight }))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const jumpToF = useCallback((targetF: number) => {
    const el = sectionRef.current
    if (!el) return
    const scrollable = el.offsetHeight - window.innerHeight - (FINAL_HOLD_VH / 100) * window.innerHeight
    const w = Math.min(stageToWeighted(targetF), STAGE_SPAN)
    const top = el.getBoundingClientRect().top + window.scrollY + (w / STAGE_SPAN) * scrollable
    window.scrollTo({ top, behavior: "smooth" })
  }, [])

  const jumpTo = useCallback((stage: number) => jumpToF(stage === 0 ? 0 : stage + 0.3), [jumpToF])

  const jumpToScene = useCallback(
    (stage: number, sceneIndex: number, count: number) => {
      const sceneT = (sceneIndex + 0.5) / count
      const h = SCENE_START + sceneT * (1 - SCENE_START)
      jumpToF(stage + h * SCENE_ROOM_HOLD)
    },
    [jumpToF],
  )

  const f = weightedToStage(progress * STAGE_SPAN)
  const enter = (i: number) => (i <= 0 ? 1 : easeInOut(clamp01((f - (i - TRANSITION)) / TRANSITION)))
  const hold = (i: number) => clamp01((f - i) / 0.55)
  const currentStage = Math.min(STAGES - 1, Math.max(0, Math.round(f - 0.2)))

  const diagonal = Math.hypot(viewport.w, viewport.h)
  const radiusRef = diagonal / Math.SQRT2

  const exteriorPush = enter(1)
  const exteriorCopy = 1 - clamp01((f - 0.2) / 0.35)

  const finaleIndex = STAGES - 1
  const finaleEnter = enter(finaleIndex)
  const finaleHold = clamp01((f - finaleIndex) / 0.5)

  const activeBurst = (() => {
    for (let i = 1; i < STAGES; i++) {
      const e = enter(i)
      if (e > 0 && e < 1) {
        const origin = i < finaleIndex ? rooms[i - 1].burstFrom : finale.hub
        return { e, origin }
      }
    }
    return null
  })()

  return (
    <section
      ref={sectionRef}
      aria-label="Step inside a smart Dubai villa"
      className="relative bg-navy-deep font-body text-paper"
      style={{ height: `calc(${STAGE_SPAN * SCROLL_PER_STAGE_VH + FINAL_HOLD_VH}vh + 100svh)` }}
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        {/* Exterior */}
        <div className="absolute inset-0" aria-hidden={exteriorPush >= 1}>
          <SceneFrame
            src={exterior.image}
            alt={exterior.alt}
            priority
            focusX={0.55}
            origin={exterior.zoomOrigin}
            scale={1.04 + hold(0) * 0.06 + exteriorPush * 2.2}
            filter={exteriorPush > 0 ? `blur(${exteriorPush * 6}px) brightness(${1 + exteriorPush * 0.6})` : undefined}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/40 to-transparent" style={{ opacity: exteriorCopy }} />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-deep/80 to-transparent" />
        </div>

        {/* Rooms */}
        {rooms.map((room, idx) => {
          const stage = idx + 1
          const e = enter(stage)
          if (e <= 0) return null
          const next = enter(stage + 1)
          if (next >= 1) return null
          const rig = room.rig
          const h = rig ? clamp01((f - stage) / SCENE_ROOM_HOLD) : hold(stage)
          const spotH = rig ? clamp01(h / SCENE_START) : h
          const sceneT = rig ? clamp01((h - SCENE_START) / (1 - SCENE_START)) : 0
          const sceneWeights = rig ? sceneBlend(sceneT, rig.scenes.length) : []
          const activeScene = rig ? sceneWeights.indexOf(Math.max(...sceneWeights)) : -1
          const scenesOn = rig ? h > SCENE_START : false
          const visibleCopy = clamp01((f - stage + 0.08) / 0.2) * (1 - clamp01(next * 4))
          const activeIndex =
            spotH > 0 && !scenesOn ? Math.min(room.hotspots.length - 1, Math.floor(spotH * room.hotspots.length * 0.999)) : -1

          return (
            <div
              key={room.id}
              className="absolute inset-0"
              style={{ clipPath: e < 1 ? `circle(${e * 150}% at ${room.burstFrom.x}% ${room.burstFrom.y}%)` : undefined }}
            >
              <SceneFrame
                src={room.image}
                alt={room.alt}
                focusX={room.focusX}
                origin={room.burstFrom}
                scale={1.28 - e * 0.24 + h * 0.03 + next * 0.6}
                filter={next > 0 ? `brightness(${1 + next * 0.5})` : undefined}
              >
                {rig && <SceneLighting rig={rig} weights={sceneWeights} />}
                {room.hotspots.map((spot, k) => (
                  <ProductHotspot
                    key={spot.name + k}
                    hotspot={spot}
                    active={k === activeIndex && visibleCopy > 0.5}
                    visible={
                      clamp01((spotH - k * 0.12) / 0.15) * (1 - clamp01(next * 5)) * (scenesOn ? 0.55 : 1)
                    }
                  />
                ))}
              </SceneFrame>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent" style={{ opacity: visibleCopy }} />

              <div
                className="absolute inset-x-0 bottom-0 px-6 pb-10 md:pb-14"
                style={{
                  opacity: visibleCopy,
                  transform: `translateY(${(1 - visibleCopy) * 24}px)`,
                  pointerEvents: visibleCopy > 0.5 ? "auto" : "none",
                }}
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-4">
                  <span className="ih-eyebrow text-hive">
                    Room {stage} of {rooms.length} / {room.label}
                  </span>
                  <h2 className="max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
                    {room.title}
                  </h2>
                  <p className="max-w-lg text-pretty text-sm leading-relaxed text-paper/75 md:text-base" aria-live="polite">
                    {scenesOn && rig ? (
                      <>
                        <span className="font-semibold text-paper">{rig.scenes[activeScene].name}: </span>
                        {rig.scenes[activeScene].description}
                      </>
                    ) : (
                      room.description
                    )}
                  </p>
                  {rig && (
                    <div className="flex flex-col gap-2">
                      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-paper/60">
                        {scenesOn ? "Scene active" : "Scroll to run scenes"}
                      </span>
                      <div role="group" aria-label="Lighting and audio scenes" className="flex flex-wrap gap-2">
                        {rig.scenes.map((scene, j) => {
                          const Icon = sceneIcons[scene.id]
                          const on = scenesOn && j === activeScene
                          return (
                            <button
                              key={scene.id}
                              type="button"
                              aria-pressed={on}
                              onClick={() => jumpToScene(stage, j, rig.scenes.length)}
                              className={`flex items-center gap-2 rounded-sm border px-3.5 py-2 text-xs font-semibold transition-colors duration-300 ${
                                on
                                  ? "border-hive bg-hive text-hive-foreground"
                                  : "border-paper/25 bg-navy-deep/60 text-paper/85 backdrop-blur-sm hover:border-hive hover:text-hive"
                              }`}
                            >
                              <Icon className="size-4" aria-hidden="true" />
                              {scene.name}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}
                  <ul className="flex max-w-2xl flex-wrap gap-2" aria-label={`${room.label} products`}>
                    {room.hotspots.map((spot, k) => (
                      <li
                        key={spot.name + k}
                        className={`flex items-center gap-2 rounded-sm border px-3 py-1.5 text-xs font-medium transition-colors duration-300 ${
                          k === activeIndex
                            ? "border-hive bg-hive text-hive-foreground"
                            : "border-paper/20 bg-navy-deep/50 text-paper/80 backdrop-blur-sm"
                        }`}
                      >
                        <span className="relative size-5 shrink-0 overflow-hidden rounded-[2px] bg-paper">
                          <Image src={spot.image || "/placeholder.svg"} alt="" fill sizes="20px" className="object-cover" />
                        </span>
                        {spot.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}

        {/* Finale */}
        {finaleEnter > 0 && (
          <div
            className="absolute inset-0"
            style={{ clipPath: finaleEnter < 1 ? `circle(${finaleEnter * 150}% at ${finale.hub.x}% ${finale.hub.y}%)` : undefined }}
          >
            <SceneFrame
              src={finale.image}
              alt={finale.alt}
              focusX={0.5}
              origin={finale.hub}
              scale={1.5 - finaleEnter * 0.42 - finaleHold * 0.04}
            >
              <svg className="absolute inset-0 size-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                {finale.nodes.map((node, k) => {
                  const draw = clamp01((finaleHold - k * 0.08) / 0.3)
                  return (
                    <line
                      key={node.label}
                      x1={finale.hub.x}
                      y1={finale.hub.y}
                      x2={finale.hub.x + (node.x - finale.hub.x) * draw}
                      y2={finale.hub.y + (node.y - finale.hub.y) * draw}
                      stroke="var(--hive)"
                      strokeWidth={1.5}
                      vectorEffect="non-scaling-stroke"
                      opacity={0.85}
                    />
                  )
                })}
              </svg>
              {finale.nodes.map((node, k) => {
                const lit = clamp01((finaleHold - k * 0.08 - 0.22) / 0.15)
                return (
                  <div
                    key={node.label}
                    aria-hidden="true"
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                    style={{ left: `${node.x}%`, top: `${node.y}%`, opacity: lit, transform: `translate(-50%, -50%) scale(${0.5 + lit * 0.5})` }}
                  >
                    <span className="relative flex size-4 items-center justify-center">
                      <span className="absolute inset-0 rounded-full bg-hive/50 motion-safe:animate-ping" />
                      <span className="relative size-2.5 rounded-full bg-hive shadow-[0_0_16px_var(--hive)]" />
                    </span>
                    <span className="hidden rounded-sm bg-navy-deep/75 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-paper backdrop-blur-sm md:block">
                      {node.label}
                    </span>
                  </div>
                )
              })}
              <div
                aria-hidden="true"
                className="absolute flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-hive bg-navy-deep/80 shadow-[0_0_40px_var(--hive)] backdrop-blur-sm"
                style={{ left: `${finale.hub.x}%`, top: `${finale.hub.y}%`, opacity: clamp01(finaleHold * 4) }}
              >
                <Image src="/ice-hive-mark.png" alt="" width={24} height={24} className="h-6 w-auto" />
                <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-hive px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-hive-foreground">
                  Zigbee Gateway
                </span>
              </div>
            </SceneFrame>

            <div className="pointer-events-none absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-navy-deep/95 via-navy-deep/60 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy-deep/95 via-navy-deep/60 to-transparent" />

            <div
              className="absolute inset-x-0 top-0 flex flex-col items-center gap-4 px-6 pt-24 text-center md:pt-28"
              style={{ opacity: clamp01((finaleHold - 0.05) / 0.3), transform: `translateY(${(1 - clamp01(finaleHold / 0.35)) * 30}px)` }}
            >
              <span className="ih-eyebrow text-hive">
                {rooms.length} zones / {totalProducts} devices / 1 app
              </span>
              <h2 className="max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-tight text-balance md:text-6xl">
                Every room. <span className="text-hive">One intelligence.</span>
              </h2>
            </div>

            <div
              className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-5 px-6 pb-10 text-center md:pb-12"
              style={{ opacity: clamp01((finaleHold - 0.35) / 0.3), transform: `translateY(${(1 - clamp01((finaleHold - 0.3) / 0.35)) * 30}px)` }}
            >
              <p className="max-w-xl text-pretty text-sm leading-relaxed text-paper/75 md:text-lg">
                From the front door to the poolside, Ice Hive Home connects every light, lock, curtain and camera into a
                single, calm system — designed, installed and supported in the UAE.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-sm bg-hive px-6 py-4 text-sm font-semibold text-hive-foreground transition-colors hover:bg-paper"
                >
                  Book a Smart Home Consultation <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href="/products"
                  className="inline-flex items-center gap-3 rounded-sm border border-paper/30 bg-navy-deep/40 px-6 py-4 text-sm font-semibold text-paper backdrop-blur-sm transition-colors hover:border-hive hover:text-hive"
                >
                  Explore the Products
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Burst: a light ring that rides the edge of the opening portal */}
        {activeBurst && (
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute rounded-full border-2 border-hive"
              style={{
                left: `${activeBurst.origin.x}%`,
                top: `${activeBurst.origin.y}%`,
                width: activeBurst.e * 1.5 * radiusRef * 2,
                height: activeBurst.e * 1.5 * radiusRef * 2,
                transform: "translate(-50%, -50%)",
                opacity: Math.sin(Math.PI * activeBurst.e),
                boxShadow: "0 0 60px 8px var(--hive), inset 0 0 60px 4px var(--hive)",
              }}
            />
            <div
              className="absolute size-[160vmax] rounded-full mix-blend-screen"
              style={{
                left: `${activeBurst.origin.x}%`,
                top: `${activeBurst.origin.y}%`,
                transform: `translate(-50%, -50%) scale(${0.3 + activeBurst.e * 1.2}) rotate(${activeBurst.e * 40}deg)`,
                opacity: Math.sin(Math.PI * activeBurst.e) * 0.55,
                background:
                  "repeating-conic-gradient(from 0deg, oklch(0.95 0.06 178 / 0.5) 0deg 1.5deg, transparent 1.5deg 12deg)",
                maskImage: "radial-gradient(circle, black 0%, transparent 60%)",
                WebkitMaskImage: "radial-gradient(circle, black 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${activeBurst.origin.x}% ${activeBurst.origin.y}%, oklch(0.98 0.02 178 / 0.55), transparent 45%)`,
                opacity: Math.pow(Math.sin(Math.PI * activeBurst.e), 2),
              }}
            />
          </div>
        )}

        {/* Exterior hero copy */}
        <div
          className="absolute inset-0 flex items-center"
          style={{ opacity: exteriorCopy, transform: `translateY(${(1 - exteriorCopy) * -40}px)`, pointerEvents: exteriorCopy > 0.5 ? "auto" : "none" }}
          aria-hidden={exteriorCopy < 0.1}
        >
          <div className="mx-auto w-full max-w-7xl px-6 pt-16">
            <div className="flex max-w-2xl flex-col gap-7">
              <span className="ih-eyebrow ih-rise text-paper/80">Dubai / Integrated Smart Living</span>
              <h1 className="font-display text-5xl font-bold leading-[0.98] tracking-tight text-balance md:text-7xl">
                <span className="ih-rise block" style={{ ["--d" as string]: 1 }}>
                  The Connected Home.
                </span>
                <span className="ih-rise block text-hive" style={{ ["--d" as string]: 2 }}>
                  Designed Around You.
                </span>
              </h1>
              <p className="ih-rise max-w-xl text-pretty text-lg leading-relaxed text-paper/80" style={{ ["--d" as string]: 3 }}>
                Step inside a Dubai villa where lighting, climate, curtains, security and access all answer to one
                quiet intelligence. Scroll to walk through every room.
              </p>
              <div className="ih-rise flex flex-wrap gap-4" style={{ ["--d" as string]: 4 }}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-sm bg-paper px-6 py-4 text-sm font-semibold text-navy transition-colors hover:bg-hive"
                >
                  Book a Smart Home Consultation <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={() => jumpTo(1)}
                  className="inline-flex items-center gap-3 rounded-sm border border-paper/30 bg-navy-deep/30 px-6 py-4 text-sm font-semibold text-paper backdrop-blur-sm transition-colors hover:border-hive hover:text-hive"
                >
                  Step Inside the Villa
                </button>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-paper/70">
            Scroll to enter
            <ChevronDown className="size-5 motion-safe:animate-bounce" aria-hidden="true" />
          </div>
        </div>

        {/* Tour navigation */}
        <nav aria-label="Villa tour" className="absolute right-3 top-1/2 hidden -translate-y-1/2 lg:block">
          <ol className="flex flex-col items-end gap-3">
            {stageLabels.map((label, i) => {
              const isCurrent = i === currentStage
              return (
                <li key={label}>
                  <button
                    type="button"
                    onClick={() => jumpTo(i)}
                    aria-current={isCurrent ? "step" : undefined}
                    className="group flex items-center gap-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em]"
                  >
                    <span
                      className={`transition-all duration-300 ${
                        isCurrent ? "text-paper" : "text-paper/70"
                      } rounded-sm bg-navy-deep/70 px-2 py-0.5 opacity-0 backdrop-blur-sm group-hover:opacity-100 group-focus-visible:opacity-100`}
                    >
                      {label}
                    </span>
                    <span
                      className={`block h-0.5 rounded-full transition-all duration-300 ${
                        isCurrent ? "w-8 bg-hive" : "w-3 bg-paper/50 group-hover:bg-paper"
                      }`}
                    />
                  </button>
                </li>
              )
            })}
          </ol>
        </nav>

        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-paper/10 lg:hidden" aria-hidden="true">
          <div className="h-full origin-left bg-hive" style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>
    </section>
  )
}
