import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import ProductCatalogue from "@/components/products/product-catalogue"

export const metadata: Metadata = {
  title: "Products — Smart Switches, Panels, Motors & Sensors | Ice Hive Home",
  description:
    "Browse Ice Hive Home smart products: glass touch switches, smart control panels, motorised curtain and blind motors, and security sensors.",
}

export default function ProductsPage() {
  return (
    <div className="hive-bg min-h-screen font-sans antialiased">
      <Navbar />
      <main className="overflow-x-clip">
        <header className="ih-grid-lines border-b border-paper/10 bg-navy font-body text-paper">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:py-28 lg:grid-cols-2 lg:items-end">
            <div className="flex flex-col gap-6">
              <span className="ih-eyebrow ih-rise text-paper/70">Product Catalogue</span>
              <h1
                className="ih-rise font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-6xl"
                style={{ "--d": 1 } as React.CSSProperties}
              >
                Hardware that makes <span className="text-hive">the home intelligent.</span>
              </h1>
            </div>
            <p
              className="ih-rise max-w-xl text-pretty text-lg leading-relaxed text-paper/65"
              style={{ "--d": 2 } as React.CSSProperties}
            >
              Every Ice Hive product is selected, configured and installed by our team — from glass touch switches to
              whole-home control panels. Pick a category or enquire directly on any product.
            </p>
          </div>
        </header>
        <ProductCatalogue />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
