import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../components/Footer'

const SERIF = '"Instrument Serif", Georgia, serif'
const SANS = '"Inter", sans-serif'
const INK = '#111827' // gray-900

export default function SneakerStorePage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans selection:bg-[#0d9488] selection:text-white">
      {/* Navbar matching the Sneakershop design */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            Oladimeji.
          </Link>
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600">
            <span className="h-2 w-2 rounded-full bg-[#10b981]"></span>
            Project 03
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-black transition-colors">Back to work</Link>
          <Link to="/#services" className="hover:text-black transition-colors">Services</Link>
          <Link to="/#contact" className="hover:text-black transition-colors">Contact</Link>
        </div>
      </nav>

      <main className="mx-auto max-w-[1440px] px-8 pt-12">
        <Link to="/projects/more" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-24">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          All projects
        </Link>

        {/* Meta Bar */}
        <div className="flex justify-between items-center text-xs font-bold tracking-[0.2em] text-gray-500 mb-20 uppercase">
          <div>SCOPE / MOBILE DESIGN</div>
          <div>2024</div>
        </div>

        {/* Hero Content */}
        <div className="mb-32">
          <div className="text-sm font-bold tracking-[0.15em] text-[#0f766e] mb-6 uppercase">
            — DESIGN SHOWCASE
          </div>
          <h1 className="text-[clamp(80px,10vw,140px)] leading-[0.85] tracking-tight mb-2" style={{ fontFamily: SERIF, color: INK }}>
            SneakerShop
          </h1>
          <h2 className="text-[clamp(80px,10vw,140px)] leading-[0.85] tracking-tight italic text-gray-500 mb-12" style={{ fontFamily: SERIF }}>
            Mobile
          </h2>
          <p className="max-w-2xl text-xl leading-relaxed text-gray-600">
            A clean, immersive mobile shopping experience for sneaker culture — designed for discovery, product obsession, and frictionless checkout.
          </p>
        </div>

        {/* Five Screens Section */}
        <div className="grid xl:grid-cols-[1fr_2fr] gap-12 items-start mb-24">
          <div className="sticky top-24 pt-8">
            <div className="text-sm font-medium text-[#0f766e] mb-20">
              [01] All Screens
            </div>
            <h3 className="text-6xl font-normal tracking-tight mb-6" style={{ fontFamily: SERIF }}>
              Five screens
            </h3>
            <p className="text-lg leading-relaxed text-gray-600 max-w-md">
              Every screen follows a consistent design language — clean white cards, bold product photography, a teal CTA, and a minimal bottom nav that stays out of the way.
            </p>
          </div>

          {/* The CSS Sprite Implementation for the Phone Mockups */}
          <div className="relative w-full rounded-3xl overflow-hidden bg-white min-h-[800px] shadow-2xl border border-gray-100 flex items-center justify-center pt-10">
            <img 
              src="/Sneakershop.png" 
              alt="Phone Mockups"
              className="w-full h-auto object-cover object-top"
              style={{ objectPosition: '0% 28%' }} 
            />
          </div>
        </div>
      </main>

      {/* Raw Screens Section */}
      <section className="bg-[#f9fafb] py-32 border-y border-gray-200">
        <div className="mx-auto max-w-[1440px] px-8">
           <div className="w-full rounded-2xl overflow-hidden min-h-[400px]">
            <img 
                src="/Sneakershop.png" 
                alt="Raw Screens"
                className="w-full h-auto object-cover object-bottom"
                style={{ objectPosition: '0% 88%', transform: 'scale(1.05)' }} 
              />
           </div>
        </div>
      </section>

      {/* Next Project Footer Area */}
      <section className="py-32 flex justify-center bg-white">
        <Link 
          to="/projects/more" 
          className="inline-flex items-center rounded-full bg-black px-8 py-4 text-lg font-medium text-white hover:bg-gray-800 transition-transform hover:scale-105"
        >
          View other projects <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </Link>
      </section>

      <Footer />
    </div>
  )
}
