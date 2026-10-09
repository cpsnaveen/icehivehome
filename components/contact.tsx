import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"

const fieldClass =
  "w-full rounded-sm border border-ink/15 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-navy focus:ring-2 focus:ring-hive/40"

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
                <a href="mailto:hello@icehivehome.com" className="font-medium transition-colors hover:text-navy">
                  hello@icehivehome.com
                </a>
              </li>
              <li className="flex items-center gap-4 border-b border-ink/12 py-5">
                <MapPin className="size-5 text-navy" />
                <span className="font-medium">UAE &middot; Serving homes worldwide</span>
              </li>
            </ul>
          </div>

          <form className="flex flex-col gap-5 rounded-sm bg-navy p-8 md:p-10" action="#" method="post">
            <h3 className="font-display text-2xl font-semibold text-paper">Request a consultation</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-paper/70">
                  Name
                </label>
                <input id="name" name="name" type="text" autoComplete="name" required className={fieldClass} />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-paper/70">
                  Phone
                </label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-paper/70">
                Email
              </label>
              <input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="property" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-paper/70">
                Property type
              </label>
              <select id="property" name="property" defaultValue="Villa" className={fieldClass}>
                <option>Villa</option>
                <option>Apartment</option>
                <option>Townhouse</option>
                <option>Office</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-paper/70">
                Tell us about your project
              </label>
              <textarea id="message" name="message" rows={4} required className={`${fieldClass} resize-none`} />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-3 rounded-sm bg-hive px-6 py-4 text-sm font-semibold text-hive-foreground transition-opacity hover:opacity-90"
            >
              Send Enquiry <ArrowUpRight className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
