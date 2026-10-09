"use client"

import { useState } from "react"
import { ArrowUpRight, Hexagon, Menu, X } from "lucide-react"

const links = [
  { label: "Solutions", href: "#services" },
  { label: "Live Demo", href: "#showcase" },
  { label: "Scenes", href: "#scenes" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 font-body text-ink backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5" aria-label="Ice Hive Home, back to top">
          <Hexagon className="size-7 fill-hive/25 text-navy" strokeWidth={2.2} />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold uppercase tracking-tight text-navy">Ice Hive</span>
            <span className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-ink/60">Home</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-ink/70 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-navy">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-navy-deep lg:inline-flex"
        >
          Start a Project <ArrowUpRight className="size-4 text-hive" />
        </a>

        <button
          type="button"
          className="text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/10 px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1 text-sm text-ink/80">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="block py-2 hover:text-navy" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-sm bg-navy px-5 py-3 font-semibold text-paper"
              >
                Start a Project <ArrowUpRight className="size-4 text-hive" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
