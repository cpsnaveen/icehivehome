"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type RevealVariant = "rise" | "zoom" | "wipe" | "drift"

export default function Reveal({
  children,
  variant = "rise",
}: {
  children: ReactNode
  variant?: RevealVariant
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="ih-reveal" data-variant={variant} data-revealed={revealed}>
      {children}
    </div>
  )
}
