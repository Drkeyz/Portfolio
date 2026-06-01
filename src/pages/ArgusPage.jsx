import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PURPLE = '#6B21A8'
const INK = '#0a0c0d'
const SLATE = '#4a5565'
const SERIF = '"Instrument Serif", Georgia, serif'

export default function ArgusPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white" style={{ color: INK }}>
      <Navbar />

      {/* META BAR */}
      <div
        className="mx-auto max-w-[1440px] px-8 flex items-center justify-between border-b border-[#EEEEEE]"
        style={{ paddingTop: '64px', paddingBottom: '16px' }}
      >
        <span className="text-xs tracking-[0.1em] uppercase" style={{ color: SLATE }}>
          PROJECT&nbsp;<span className="font-semibold" style={{ color: INK }}>/ ARGUS</span>
        </span>
        <span className="text-xs tracking-[0.1em] uppercase" style={{ color: SLATE }}>
          SCOPE&nbsp;<span className="font-semibold" style={{ color: INK }}>/ UI DESIGN, LANDING PAGE</span>
        </span>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-[1440px] px-8 pt-20 pb-16">
        <p className="text-sm tracking-[0.12em] mb-8" style={{ color: PURPLE }}>
          — AI · BLOCKCHAIN ANALYTICS
        </p>

        <div className="mb-10">
          <h1
            className="leading-[1] tracking-[-0.03em] block"
            style={{ fontFamily: SERIF, fontSize: 'clamp(64px,8vw,112px)', color: INK }}
          >
            Argus.
          </h1>
          <p
            className="leading-[1.1] block mt-2"
            style={{ fontFamily: SERIF, fontSize: 'clamp(28px,4.5vw,36px)', fontStyle: 'italic', color: SLATE }}
          >
            AI-powered blockchain analytics
          </p>
        </div>

        <div className="flex items-start justify-between gap-12">
          <p className="max-w-2xl text-lg leading-relaxed" style={{ color: SLATE }}>
            A landing page concept for Argus — a product that surfaces on-chain signals using
            machine learning. The design focuses on clear hierarchy, a bold typographic voice,
            and a visual system that communicates trust and depth.
          </p>

          <a
            href="#"
            className="shrink-0 flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: PURPLE }}
          >
            View mockup
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </section>

      {/* HERO IMAGE */}
      <div className="w-full bg-white" style={{ padding: '0 70px' }}>
        <img
          src="/Argus.png"
          alt="Argus landing"
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', objectPosition: 'center center' }}
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
      </div>

      {/* OPTIONAL CONTENT SECTION */}
      <section className="mx-auto max-w-[1440px] px-8 py-16">
        <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
          <div className="flex flex-col gap-2 pt-1">
            <p className="text-sm font-medium mb-8 mt-3" style={{ color: PURPLE }}>[01] Overview</p>
            <p className="text-sm mt-4" style={{ color: SLATE }}>The brief</p>
          </div>
          <div>
            <h2
              className="font-normal leading-[1.1] mb-8"
              style={{ fontFamily: SERIF, fontSize: 'clamp(30px,3.6vw,44px)', color: INK }}
            >
              Designing a confident, research-led landing presence for a complex product.
            </h2>
            <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              <p>
                The page emphasises visual storytelling: hero gradient, concise value props,
                and a clear call-to-action to help convert curious product and engineering teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
