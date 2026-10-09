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

export default function Page() {
  return (
    <div className="hive-bg min-h-screen font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SmartHomeShowcase />
        <Services />
        <Scenes />
        <Process />
        <About />
        <FoundersMessage />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
