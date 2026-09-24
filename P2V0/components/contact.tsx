import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="hive-panel overflow-hidden rounded-3xl">
        <div className="grid gap-10 p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Let&apos;s automate your home</h2>
            <p className="mt-4 text-white/70">
              Tell us about your space and our team will design a smart fitout tailored to your life. Peace of mind is
              just one conversation away.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3 text-white/80">
                <Mail className="size-5 text-hive" /> hello@icehivehome.com
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Phone className="size-5 text-hive" /> +971 52 548 1150
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <MapPin className="size-5 text-hive" /> Serving homes worldwide
              </li>
            </ul>
          </div>

          <form className="space-y-4" action="#" method="post">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-white/70">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/15 bg-[oklch(0.16_0.01_70_/_0.6)] px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-hive"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-white/70">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/15 bg-[oklch(0.16_0.01_70_/_0.6)] px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-hive"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-white/70">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full resize-none rounded-xl border border-white/15 bg-[oklch(0.16_0.01_70_/_0.6)] px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-hive"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-hive px-6 py-3 text-sm font-medium text-hive-foreground transition-opacity hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
