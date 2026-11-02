"use client"

import { useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

export default function BrandFilm() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  function toggleSound() {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
    if (!video.muted) void video.play()
  }

  return (
    <section id="what-is-ice-hive" className="bg-paper font-body text-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="ih-eyebrow text-navy">What is Ice Hive</span>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
              See the connected home <span className="text-navy">in motion.</span>
            </h2>
          </div>
          <p className="max-w-md text-pretty leading-relaxed text-ink/65">
            A short film on how Ice Hive Home brings lighting, climate, curtains and security together into one
            effortless experience.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-sm border border-ink/12 bg-navy shadow-2xl">
          <video
            ref={videoRef}
            className="aspect-video w-full object-cover"
            src="/videos/icehive-ad.mp4"
            poster="/smart-home-hero.png"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            aria-label="Ice Hive Home advertisement film"
          />
          <button
            type="button"
            onClick={toggleSound}
            aria-pressed={!muted}
            className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-sm bg-paper px-4 py-2.5 text-xs font-semibold text-navy transition-colors hover:bg-hive"
          >
            {muted ? <VolumeX className="size-4" aria-hidden="true" /> : <Volume2 className="size-4" aria-hidden="true" />}
            {muted ? "Tap for sound" : "Sound on"}
          </button>
        </div>
      </div>
    </section>
  )
}
