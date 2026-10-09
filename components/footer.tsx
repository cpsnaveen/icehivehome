import { Hexagon } from "lucide-react"

const columns = [
  {
    title: "Solutions",
    links: [
      { label: "Home Automation", href: "#services" },
      { label: "Smart Lighting", href: "#services" },
      { label: "Security & CCTV", href: "#services" },
      { label: "Networking", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Live Demo", href: "#showcase" },
      { label: "Our Process", href: "#process" },
      { label: "About", href: "#about" },
      { label: "Founder", href: "#founder" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "+971 52 548 1550", href: "tel:+971525481550" },
      { label: "hello@icehivehome.com", href: "mailto:hello@icehivehome.com" },
      { label: "WhatsApp", href: "https://wa.me/971525481550" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy-deep font-body text-paper">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <Hexagon className="size-7 fill-hive/20 text-hive" strokeWidth={2.2} />
              <span className="font-display text-lg font-extrabold uppercase tracking-tight">
                Ice Hive <span className="text-hive">Home</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
              Smart home technology, designed around you. Better, safer, sustainable — for all.
            </p>
          </div>
          {columns.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/50">{c.title}</h2>
              <ul className="mt-5 flex flex-col gap-3 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-paper/80 transition-colors hover:text-hive">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-paper/10 pt-8 text-xs text-paper/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Ice Hive Home. All rights reserved.</p>
          <p>Intelligent living, worry-free.</p>
        </div>
      </div>
    </footer>
  )
}
