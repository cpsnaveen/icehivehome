"use client"

import { useState } from "react"
import { categories, products, type CategoryId } from "@/lib/products"
import ProductCard from "./product-card"

type Filter = CategoryId | "all"

export default function ProductCatalogue() {
  const [filter, setFilter] = useState<Filter>("all")
  const visible = filter === "all" ? categories : categories.filter((c) => c.id === filter)

  const tabs: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All Products", count: products.length },
    ...categories.map((c) => ({
      id: c.id,
      label: c.name,
      count: products.filter((p) => p.category === c.id).length,
    })),
  ]

  return (
    <section className="font-body text-paper">
      <div className="sticky top-[73px] z-40 border-b border-paper/10 bg-navy-deep/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6">
          <div role="tablist" aria-label="Product categories" className="flex gap-2 overflow-x-auto py-4">
            {tabs.map((t) => {
              const active = filter === t.id
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(t.id)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-sm border px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "border-hive bg-hive text-hive-foreground"
                      : "border-paper/15 text-paper/75 hover:border-paper/40 hover:text-paper"
                  }`}
                >
                  {t.label}
                  <span className={`text-xs tabular-nums ${active ? "text-hive-foreground/70" : "text-paper/45"}`}>
                    {t.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 py-20">
        {visible.map((c) => {
          const items = products.filter((p) => p.category === c.id)
          return (
            <section key={c.id} id={c.id} aria-labelledby={`${c.id}-title`} className="scroll-mt-40">
              <div className="flex flex-col gap-4 border-b border-paper/12 pb-8 md:flex-row md:items-end md:justify-between">
                <div className="flex flex-col gap-3">
                  <span className="ih-eyebrow text-hive">{items.length} {items.length === 1 ? "product" : "products"}</span>
                  <h2 id={`${c.id}-title`} className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                    {c.name}
                  </h2>
                </div>
                <p className="max-w-md text-pretty leading-relaxed text-paper/65">{c.blurb}</p>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </section>
  )
}
