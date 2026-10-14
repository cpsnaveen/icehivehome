import { Mail, Phone, MapPin } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function Contact() {
  return (
    <section id="contact" className="bg-paper font-body text-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="ih-eyebrow text-navy">Start with the project, not the products</span>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-6xl">
              Planning an intelligent home?
            </h2>
            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-ink/65">
              Share your property, drawings or early requirements. Our team will help define the right smart home
              design and automation scope for you.
            </p>

            <ul className="mt-12 border-t border-ink/12">
              <li className="flex items-center gap-4 border-b border-ink/12 py-5">
                <Phone className="size-5 text-navy" />
                <a href="tel:+971525481550" className="font-medium transition-colors hover:text-navy">
                  +971 52 548 1550
                </a>
              </li>
              <li className="flex items-center gap-4 border-b border-ink/12 py-5">
                <Mail className="size-5 text-navy" />
                <a href="mailto:support@icehivehome.com" className="font-medium transition-colors hover:text-navy">
                  support@icehivehome.com
                </a>
              </li>
              <li className="flex items-center gap-4 border-b border-ink/12 py-5">
                <MapPin className="size-5 text-navy" />
                <span className="font-medium">UAE &middot; Serving homes worldwide</span>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
