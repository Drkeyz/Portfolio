import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function LighterOfLivesPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-[1440px] px-8 pt-24 pb-16">
        <h1 style={{ fontFamily: '"Instrument Serif", Georgia, serif' }} className="text-[clamp(48px,8vw,96px)]">Lighter of Lives Foundation.</h1>
        <p className="mt-4 text-lg text-[#4a5565]">UI Design preview for the foundation site.</p>
      </main>

      <Footer />
    </div>
  )
}
