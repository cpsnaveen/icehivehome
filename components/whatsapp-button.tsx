import { MessageCircle, ArrowUpRight } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971525481550"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-sm bg-navy px-5 py-3.5 font-body text-sm font-semibold text-paper shadow-xl ring-1 ring-hive/40 transition-colors hover:bg-navy-deep"
    >
      <MessageCircle className="size-5 text-hive" />
      WhatsApp
      <ArrowUpRight className="size-4 text-paper/60" />
    </a>
  )
}
