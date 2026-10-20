import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import SmartHomeShowcase from "@/components/smart-home-showcase"
import Services from "@/components/services"
import Scenes from "@/components/scenes"
import Process from "@/components/process"
import About from "@/components/about"
import FoundersMessage from "@/components/founders-message"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import Reveal from "@/components/reveal"

export default function Page() {
  return (
    <div className="hive-bg min-h-screen font-sans antialiased">
      <div className="ih-progress" aria-hidden="true" />
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <Reveal variant="rise">
          <Features />
        </Reveal>
        <Reveal variant="wipe">
          <SmartHomeShowcase />
        </Reveal>
        <Reveal variant="zoom">
          <Services />
        </Reveal>
        <Reveal variant="drift">
          <Scenes />
        </Reveal>
        <Reveal variant="wipe">
          <Process />
        </Reveal>
        <Reveal variant="rise">
          <About />
        </Reveal>
        <Reveal variant="zoom">
          <FoundersMessage />
        </Reveal>
        <Reveal variant="rise">
          <Contact />
        </Reveal>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
