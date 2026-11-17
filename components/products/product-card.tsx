import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Product } from "@/lib/products"

const WHATSAPP = "971525481550"

export default function ProductCard({ product }: { product: Product }) {
  const enquiry = encodeURIComponent(
    `Hi Ice Hive, I'd like to know more about the ${product.name}${product.finish ? ` (${product.finish})` : ""}.`,
  )

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-ink/10 bg-paper text-ink transition-shadow hover:shadow-xl hover:shadow-navy-deep/30">
      <div className="relative aspect-square overflow-hidden bg-paper">
        <Image
          src={product.image}
          alt={`${product.name}${product.finish ? ` in ${product.finish}` : ""}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition-all duration-500 group-hover:scale-[1.03] ${product.altImage ? "group-hover:opacity-0" : ""}`}
        />
        {product.altImage && (
          <Image
            src={product.altImage}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 border-t border-ink/10 p-5">
        <div className="flex flex-col gap-1">
          <h3 className="font-display text-lg font-semibold leading-snug text-balance">{product.name}</h3>
          {product.finish && (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/70">{product.finish}</p>
          )}
        </div>
        <p className="text-sm leading-relaxed text-ink/70 text-pretty">{product.description}</p>
        <ul className="flex flex-wrap gap-1.5" aria-label="Key features">
          {product.specs.map((s) => (
            <li key={s} className="rounded-sm bg-navy/6 px-2 py-1 text-xs font-medium text-navy">
              {s}
            </li>
          ))}
        </ul>
        <a
          href={`https://wa.me/${WHATSAPP}?text=${enquiry}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-between gap-2 border-t border-ink/10 pt-4 text-sm font-semibold text-navy transition-colors hover:text-navy-deep"
        >
          Enquire about this product
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  )
}
