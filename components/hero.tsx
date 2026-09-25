import { ArrowRight, ShieldCheck } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden hive-honeycomb">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.76_0.15_175_/_0.25)] bg-[oklch(0.76_0.15_175_/_0.08)] px-4 py-1.5 text-xs font-medium text-hive">
            <ShieldCheck className="size-4" />
            Intelligent living, worry-free
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            The Connected Home, <span className="text-hive">Reimagined</span>
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg text-white/70">
            Ice Hive Home delivers intelligent automation that learns your lifestyle, protects your family, and cares
            for the planet — accessible to everyone, everywhere.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-hive px-6 py-3 text-sm font-medium text-hive-foreground transition-opacity hover:opacity-90"
            >
              Automate Your Home <ArrowRight className="size-4" />
            </a>
            <a
              href="#founder"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/90 transition-colors hover:border-hive hover:text-hive"
            >
              Read Our Story
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-[oklch(0.76_0.15_175_/_0.2)] shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/smart-home-hero.png"
              alt="Modern smart home interior with warm ambient lighting"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
