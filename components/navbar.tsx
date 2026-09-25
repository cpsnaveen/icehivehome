"use client"

import { useState } from "react"
import { Hexagon, Menu, X } from "lucide-react"

const links = [
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[oklch(0.76_0.15_175_/_0.12)] bg-[oklch(0.17_0.045_255_/_0.8)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <Hexagon className="size-6 fill-[oklch(0.76_0.15_175_/_0.2)] text-hive" />
          <span>
            Ice Hive <span className="text-hive">Home</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-hive">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-hive px-5 py-2 text-sm font-medium text-hive-foreground transition-opacity hover:opacity-90 md:inline-block"
        >
          Get Started
        </a>

        <button
          type="button"
          className="text-white/80 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[oklch(0.76_0.15_175_/_0.12)] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm text-white/80">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="block py-1 hover:text-hive" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
