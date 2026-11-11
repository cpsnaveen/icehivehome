import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Services from "@/components/services"
import About from "@/components/about"
import FoundersMessage from "@/components/founders-message"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <div className="hive-bg min-h-screen font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <About />
        <FoundersMessage />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
