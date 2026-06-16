// import { Link } from 'react-router-dom'
// import { useEffect } from 'react'
// import { ArrowUpRight } from 'lucide-react'
// import Footer from '../components/Footer'

// const SERIF = '"Instrument Serif", Georgia, serif'
// const SANS = '"Inter", sans-serif'
// const INK = '#111827' // gray-900
// const SLATE = '#4a5565'

// export default function SneakerStorePage() {
//   useEffect(() => { window.scrollTo(0, 0) }, [])

//   return (
//     <div className="min-h-screen bg-white text-[#111827] font-sans selection:bg-[#0d9488] selection:text-white">
//       {/* Navbar matching the Sneakershop design */}
//       <nav className="flex items-center justify-between px-8 py-6 max-w-[1440px] mx-auto">
//         <div className="flex items-center gap-4">
//           <Link 
//             to="/" 
//             className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
//           >
//             Oladimeji.
//           </Link>
//           <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600">
//             <span className="h-2 w-2 rounded-full bg-[#10b981]"></span>
//             Project 03
//           </div>
//         </div>
        
//         <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
//           <Link to="/" className="hover:text-black transition-colors">Back to work</Link>
//           <Link to="/#services" className="hover:text-black transition-colors">Services</Link>
//           <Link to="/#contact" className="hover:text-black transition-colors">Contact</Link>
//         </div>
//       </nav>

//       <section className="mx-auto max-w-[1440px] px-8 pt-12">
//         <Link to="/projects/more" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-8">
//           <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
//           All projects
//         </Link>

//         {/* Meta Bar */}
//         <div className="flex justify-between items-center text-xs font-bold tracking-[0.2em] text-gray-500 mb-[70px] uppercase">
//           <div>SCOPE / MOBILE DESIGN</div>
//           <div>2024</div>
//         </div>

//         {/* Hero Content */}
//         <div className="mb-32">
//           <div className="text-sm font-bold tracking-[0.15em] text-[#0f766e] mb-6 uppercase">
//             — DESIGN SHOWCASE
//           </div>
//           <h1 className="text-[64px] leading-[0.85] tracking-tight mb-2" style={{ fontFamily: SERIF, color: INK }}>
//             SneakerShop
//           </h1>
//           <h2 className="text-[64px] leading-[0.85] tracking-tight italic text-gray-500 mb-12" style={{ fontFamily: SERIF }}>
//             Mobile
//           </h2>
//           <p className="max-w-2xl text-xl leading-relaxed text-gray-600">
//             A clean, immersive mobile shopping experience for sneaker culture — designed for discovery, product obsession, and frictionless checkout.
//           </p>
//         </div>

//         {/* Five Screens Section */}
//         <div className="mx-auto max-w-[1440px] px-8 pb-20">

//           <div className='flex'>
//             <div className="flex items-center gap-6 text-sm text-[#0f766e] uppercase tracking-[0.18em] my-auto">
//               <span>[01] Overview</span>
//             </div>
//             <h2 className="text-5xl font-normal tracking-[-0.03em] text-center flex-1" style={{ fontFamily: SERIF, color: INK }}>
//               One dashboard. <span className="italic" style={{ color: SLATE }}>Total access.</span>
//             </h2>
//           </div>

//           <div className='py-20 space-y-[18px]'>
//             <img src='/three_iphones.svg' className='w-full'/>
//             <img src='/two_iphones.svg' className='mx-auto'/>
//           </div>
//         </div>
//       </section>

//       {/* Raw Screens Section */}
//       <section className="bg-[#f9fafb] py-[53px] px-[70px] border-y border-gray-200 flex justify-between">
//         <img src='/14_pro_max_1.svg'/>
//         <img src='/14_pro_max_2.svg'/>
//         <img src='/14_pro_max_3.svg'/>
//         <img src='/14_pro_max_4.svg'/>
//         <img src='/14_pro_max_5.svg'/>
//       </section>

//       {/* Next Project Footer Area */}
//       <section className="py-[92px] flex gap-x-2.5 justify-center bg-white">
//         <Link 
//           to="/projects/more" 
//           className="inline-flex items-center rounded-full bg-black px-8 py-4 text-lg font-medium text-white hover:bg-gray-800 transition-transform hover:scale-105"
//         >
//           View other projects 
//           <ArrowUpRight size={14} className='my-auto'/>
//         </Link>
//       </section>

//       <Footer />
//     </div>
//   )
// }


import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const SERIF = '"Instrument Serif", Georgia, serif'
const INK   = '#111827'
const SLATE = '#4a5565'
const TEAL  = '#0f766e'

/* ─── Section header ────────────────────────────────────────── */
function SectionHeader({ tag, children }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
      <p className="text-sm uppercase tracking-[0.18em] shrink-0" style={{ color: TEAL }}>{tag}</p>
      <h2
        className="font-normal tracking-[-0.03em] md:text-center md:flex-1"
        style={{ fontFamily: SERIF, color: INK, fontSize: 'clamp(28px,4vw,48px)' }}
      >
        {children}
      </h2>
    </div>
  )
}

export default function SneakerStorePage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans selection:bg-[#0d9488] selection:text-white">

      {/* Shared Navbar replaces inline nav */}
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-8 pt-24 md:pt-28">
        <Link
          to="/projects/more"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-6 md:mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          All projects
        </Link>

        {/* Meta row: stacked on mobile, row on desktop */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs font-bold tracking-[0.2em] text-gray-500 mb-10 md:mb-[70px] uppercase">
          <div>SCOPE / MOBILE DESIGN</div>
          <div>2024</div>
        </div>

        {/* Hero content */}
        <div className="mb-16 md:mb-32">
          <div className="text-sm font-bold tracking-[0.15em] mb-4 md:mb-6 uppercase" style={{ color: TEAL }}>
            — DESIGN SHOWCASE
          </div>
          <h1
            className="leading-[0.85] tracking-tight mb-2"
            style={{ fontFamily: SERIF, color: INK, fontSize: 'clamp(44px,8vw,96px)' }}
          >
            SneakerShop
          </h1>
          <h2
            className="leading-[0.85] tracking-tight italic text-gray-500 mb-8 md:mb-12"
            style={{ fontFamily: SERIF, fontSize: 'clamp(44px,8vw,96px)' }}
          >
            Mobile
          </h2>
          <p className="max-w-2xl text-base md:text-xl leading-relaxed text-gray-600">
            A clean, immersive mobile shopping experience for sneaker culture — designed for discovery, product obsession, and frictionless checkout.
          </p>
        </div>

        {/* ── [01] OVERVIEW ───────────────────────────────────── */}
        <div className="pb-12 md:pb-20">
          <SectionHeader tag="[01] Overview">
            Five screens. <span className="italic" style={{ color: SLATE }}>One experience.</span>
          </SectionHeader>

          {/* Phone mockups: scroll naturally on mobile */}
          <div className="py-10 md:py-20 flex flex-col gap-4 md:gap-[18px]">
            <img
              src="/three_iphones.svg"
              alt="SneakerShop three screen preview"
              className="w-full h-auto block"
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
            <img
              src="/two_iphones.svg"
              alt="SneakerShop two screen preview"
              className="w-full md:w-auto h-auto block mx-auto"
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
          </div>
        </div>
      </section>

      {/* ── RAW SCREENS ───────────────────────────────────────── */}
      {/*
        Desktop: five phones side by side at px-[70px].
        Mobile:  horizontal scroll strip so phones stay legible.
      */}
      <section className="bg-[#f9fafb] py-10 md:py-[53px] border-y border-gray-200">
        {/* Desktop layout */}
        <div className="hidden md:flex justify-between px-[70px]">
          {['14_pro_max_1', '14_pro_max_2', '14_pro_max_3', '14_pro_max_4', '14_pro_max_5'].map((name) => (
            <img
              key={name}
              src={`/${name}.svg`}
              alt={name.replace(/_/g, ' ')}
              className="h-auto"
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div
          className="flex md:hidden gap-4 overflow-x-auto px-5 pb-2"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          {['14_pro_max_1', '14_pro_max_2', '14_pro_max_3', '14_pro_max_4', '14_pro_max_5'].map((name) => (
            <img
              key={name}
              src={`/${name}.svg`}
              alt={name.replace(/_/g, ' ')}
              style={{ height: '400px', width: 'auto', flexShrink: 0, scrollSnapAlign: 'start' }}
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-[92px] flex justify-center bg-white px-5">
        <Link
          to="/projects/more"
          className="inline-flex items-center gap-1.5 rounded-full bg-black px-8 py-4 text-base md:text-lg font-medium text-white hover:bg-gray-800 transition-transform hover:scale-105"
        >
          View other projects
          <ArrowUpRight size={14} className="my-auto" />
        </Link>
      </section>

      <Footer />
    </div>
  )
}