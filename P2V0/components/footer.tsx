import { Hexagon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-[oklch(0.78_0.16_78_/_0.12)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-white/60 sm:flex-row">
        <a href="#" className="flex items-center gap-2 font-semibold text-white">
          <Hexagon className="size-5 fill-[oklch(0.78_0.16_78_/_0.2)] text-hive" />
          Ice Hive <span className="text-hive">Home</span>
        </a>
        <p>&copy; {new Date().getFullYear()} Ice Hive Home. Better, safer, sustainable — for all.</p>
      </div>
    </footer>
  )
}
