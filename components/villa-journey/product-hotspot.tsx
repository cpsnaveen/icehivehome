import Image from "next/image"
import type { Hotspot } from "./data"

type ProductHotspotProps = {
  hotspot: Hotspot
  visible: number
  active: boolean
}

export default function ProductHotspot({ hotspot, visible, active }: ProductHotspotProps) {
  const cardOnLeft = hotspot.x > 58

  return (
    <div
      aria-hidden="true"
      className="absolute"
      style={{
        left: `${hotspot.x}%`,
        top: `${hotspot.y}%`,
        opacity: visible,
        transform: `translate(-50%, -50%) scale(${0.6 + visible * 0.4})`,
        transition: "opacity 300ms ease-out",
      }}
    >
      <span className="relative flex size-5 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-hive/40 motion-safe:animate-ping" />
        <span
          className={`relative size-3 rounded-full border-2 border-paper bg-hive shadow-[0_0_18px_var(--hive)] transition-transform duration-300 ${
            active ? "scale-125" : ""
          }`}
        />
      </span>

      <span
        className={`absolute hidden md:flex ${
          hotspot.y < 30 ? "top-1/2 items-start" : "top-1/2 -translate-y-1/2 items-center"
        } ${
          cardOnLeft ? "right-full flex-row-reverse pr-1" : "left-full pl-1"
        }`}
      >
        <span
          className="block h-px bg-hive transition-all duration-500"
          style={{ width: active ? 40 : 18 }}
        />
        {active ? (
          <span className="flex w-64 items-center gap-3 rounded-sm border border-hive/40 bg-navy-deep/85 p-2.5 pr-4 shadow-2xl backdrop-blur-md motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95">
            <span className="relative size-14 shrink-0 overflow-hidden rounded-sm bg-paper">
              <Image src={hotspot.image || "/placeholder.svg"} alt="" fill sizes="56px" className="object-cover" />
            </span>
            <span className="flex flex-col gap-1">
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-hive">{hotspot.role}</span>
              <span className="font-display text-sm font-semibold leading-snug text-paper">{hotspot.name}</span>
            </span>
          </span>
        ) : (
          <span className="whitespace-nowrap rounded-sm bg-navy-deep/70 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-paper/90 backdrop-blur-sm">
            {hotspot.role}
          </span>
        )}
      </span>
    </div>
  )
}
