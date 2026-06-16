// import { Link } from 'react-router-dom'
// import { useEffect } from 'react'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'

// const ACCENT = '#9F5FFE'
// const INK = '#0a0c0d'
// const SLATE = '#4a5565'
// const SLATE_LIGHT = '#6b7280'
// const BORDER = '#EDE9FE'
// const SERIF = '"Instrument Serif", Georgia, serif'
// // const INTER = '"Inter", Georgia, serif'

// function SectionLabel({ number, children }) {
//   return (
//     <p className="text-sm font-medium mb-8 mt-3 my-auto" style={{ color: ACCENT }}>
//       {number && <span>[{number}]</span>} {children}
//     </p>
//   )
// }

// function InfoCard({ title, label, children }) {
//   return (
//     <div className="rounded-[2rem] border border-[#EDE9FE] bg-white p-8 shadow-sm transition-colors hover:border-[#9F5FFE]">
//       <p className="text-xs uppercase tracking-[0.18em] mb-3" style={{ color: SLATE_LIGHT }}>{label}</p>
//       <h3 className="text-2xl font-semibold mb-3" style={{ color: INK }}>{title}</h3>
//       <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{children}</p>
//     </div>
//   )
// }

// function PreviewCard({ title, image }) {
//   return (
//     <div className="rounded-[2rem] border border-[#EDE9FE] bg-white overflow-hidden shadow-sm transition-colors hover:border-[#9F5FFE]">
//       <div className="h-[220px] overflow-hidden bg-[#F9F5FF]">
//         <img
//           src={image}
//           alt={title}
//           className="h-full w-full object-cover"
//           onError={e => { e.currentTarget.style.display = 'none' }}
//         />
//       </div>
//       <div className="p-5">
//         <p className="text-sm uppercase tracking-[0.22em] text-[#9F5FFE] mb-2">Page</p>
//         <h3 className="text-lg font-semibold" style={{ color: INK }}>{title}</h3>
//       </div>
//     </div>
//   )
// }

// function StatCard({ value, label }) {
//   return (
//     <div className="rounded-[2rem] border border-[#EDE9FE] bg-white p-8 text-center shadow-sm transition-colors hover:border-[#9F5FFE]">
//       <p className="text-[clamp(42px,5vw,56px)] font-semibold" style={{ color: INK }}>{value}</p>
//       <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#6B7280]">{label}</p>
//     </div>
//   )
// }

// function HighlightCard({ title, number, children }) {
//   return (
//     <div className="border border-[#EDE9FE] bg-white p-8 flex flex-col gap-y-4">
//       {number && <h2 className='text-[#013A25]' style={{ fontFamily: SERIF }}>{number}</h2>}
//       <h3 className="text-2xl" style={{ color:  INK, fontFamily: SERIF }}>{title}</h3>
//       <p className="leading-relaxed text-sm" style={{ color: SLATE }}>{children}</p>
//     </div>
//   )
// }

// function GalleryItem({ src, alt }) {
//   return (
//     <div className="overflow-hidden rounded-[2rem] border border-[#EDE9FE] bg-white shadow-sm">
//       <img
//         src={src}
//         alt={alt}
//         className="h-full w-full object-cover"
//         style={{ aspectRatio: '4 / 3' }}
//         onError={e => { e.currentTarget.style.display = 'none' }}
//       />
//     </div>
//   )
// }

// function FAQItem({ question, answer }) {
//   return (
//     <div className="rounded-[2rem] border border-[#EDE9FE] bg-white p-8 shadow-sm transition-colors hover:border-[#9F5FFE]">
//       <h3 className="text-lg font-semibold mb-3" style={{ color: INK }}>{question}</h3>
//       <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{answer}</p>
//     </div>
//   )
// }

// export default function LighterOfLivesPage() {
//   useEffect(() => { window.scrollTo(0, 0) }, [])

//   return (
//     <div className="min-h-screen bg-white" style={{ color: INK }}>
//       <style>
//         {`
//           .hide-scrollbar::-webkit-scrollbar {
//             display: none;
//           }
//           .hide-scrollbar {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }
//           .browser-mockup-scroll::-webkit-scrollbar {
//             width: 8px;
//           }
//           .browser-mockup-scroll::-webkit-scrollbar-track {
//             background: #f1f1f1; 
//             border-radius: 4px;
//           }
//           .browser-mockup-scroll::-webkit-scrollbar-thumb {
//             background: #d1d5db; 
//             border-radius: 4px;
//           }
//           .browser-mockup-scroll::-webkit-scrollbar-thumb:hover {
//             background: #9ca3af; 
//           }
//         `}
//       </style>

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

//       <section className="mx-auto max-w-[1440px] px-8 pb-20 pt-12">
//         <div className="">
//           <div>
//           <Link to="/projects/more" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-8">
//             <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
//             All projects
//           </Link>

//             <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.18em]" style={{ color: SLATE_LIGHT }}>
//               <span>PROJECT / LANDING PAGE REDESIGN</span>
//               <span>SCOPE / WEB DESIGN</span>
//             </div>

//             <div className="mt-[70px] flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.18em]">
//               <span className="text-[#013A25]">— REDESIGN</span>
//               {/* <Link to="/projects/more" className="font-medium text-[#0a0c0d] hover:text-[#9F5FFE] transition-colors">
//                 ← Back to more projects
//               </Link> */}
//             </div>

//             <h1 className="mt-8 text-[64px] leading-[0.95] font-normal w-[300px]" style={{ fontFamily: SERIF, color: INK }}>
//               CartAgro <span style={{ color: SLATE_LIGHT }}>Landing Page</span> Redesign
//             </h1>
//             <div className='flex justify-between'>
//               <p className="mt-6 max-w-3xl text-lg leading-relaxed" style={{ color: SLATE }}>
//                 A full landing page redesign for Africa's agri-tech marketplace — connecting farmers and buyers across Nigeria with a cleaner, 
//                 more trustworthy digital face.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className='max-w-[1440px] px-8 pt-10 pb-20'>
//         <img src='/before_after.svg' className='w-[1314px] mx-auto'/>
//       </section>

//       <section className="mx-auto max-w-[1440px] px-8 pb-24 flex flex-col gap-y-8">

//         <div className='flex w-[88.3%] mx-auto'>
//           <div className="flex items-center gap-6 text-sm text-[#013A25] my-auto">
//             <span className='text-sm'>[01] Design Decisions</span>
//           </div>
//           <h2 className="text-5xl font-normal tracking-[-0.03em] text-center flex-1" style={{ fontFamily: SERIF, color: INK }}>
//             <span className="italic" style={{ color: SLATE }}>Why I made those</span> calls
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-1 xl:grid-cols-2">
//           <HighlightCard title="Human over product" number="01">
//             <div className='text-sm flex flex-col gap-y-8'>
//               <p>
//                 The original hero showed app screenshots and generic copy. 
//                 The redesign replaces that with a Nigerian farmer — a real person who represents the platform's mission. 
//                 For a marketplace built to serve farmers, putting one front-and-centre is both emotionally resonant and on-brand.
//               </p>
//               <p>Before: app mockups + text wall → After: farmer portrait + bold headline</p>
//             </div>
//           </HighlightCard>
//           <HighlightCard title="SDG section: compressed, not cut" number="02">
//             <div className='text-sm flex flex-col gap-y-8'>
//               <p>
//                 The original SDG icon grid took up a huge chunk of the page with 17 large colourful icons that created visual noise. 
//                 The redesign retains the sustainability message — it's genuinely important to the brand — but presents it as six focused, 
//                 text-led cards that are scannable without screaming.
//               </p>
//               <p>Before: 17-icon dominating grid → After: 6 focused commitment cards</p>
//             </div>
//           </HighlightCard>
//           <HighlightCard title="Stats strip: trust above the fold" number="03">
//             <div className='text-sm flex flex-col gap-y-8'>
//               <p>
//                 100K+ customers, 97% closing rate, and 5.0 Google rating were buried in the original. 
//                 The redesign surfaces them in a high-contrast dark strip immediately after the products section — 
//                 converting a buried footnote into a powerful trust signal at a high-intent moment in the scroll.
//               </p>
//               <p>Before: buried in body text → After: full-width dark strip</p>
//             </div>
//           </HighlightCard>
//           <HighlightCard title="Typography: expressive but disciplined" number="04">
//             <div className='text-sm flex flex-col gap-y-8'>
//               <p>
//                 The redesign uses a larger, more confident type scale — particularly for section headers. 
//                 Italic weight on "Africa's Top" in the hero adds expressiveness without sacrificing legibility. 
//                 A clear three-level hierarchy (display → subheading → body) was applied consistently across every section.
//               </p>
//               <p>Result: every section scannable in under 3 seconds</p>
//             </div>
//           </HighlightCard>
//           <HighlightCard title="Discipline over decoration" number="05">
//             <div className='text-sm flex flex-col gap-y-8'>
//               <p>
//                 The original used green inconsistently — as background, button, text, and icon colour without clear rules. 
//                 The redesign treats dark forest green as a structural background tone, 
//                 bright green as the primary action/emphasis colour, and white as the reading surface. 
//                 Three roles, three values, applied consistently.
//               </p>
//               <p>Before: green used everywhere → After: green used with intent</p>
//             </div>
//           </HighlightCard>
//           <HighlightCard 
//             title="CTA: scarcity meets simplicity"
//             number="06"
//           >
//             <div className='text-sm flex flex-col gap-y-8'>
//               <p>
//                 The final download CTA in the original was flat and uninspired. 
//                 The redesign pairs a first-time-user 30% discount with fresh produce imagery inside a high-contrast dark panel 
//                 — creating urgency, reward, and visual drama all at once. One action, clearly presented.
//               </p>
//               <p>Before: generic download banner → After: 30% offer + produce visual</p>
//             </div>
//           </HighlightCard>
//         </div>
//       </section>

//       {/* <section className='py-[52px] text-center bg-[#8B5CF6]/10'>
//         <div>
//           <h1 className='text-5xl max-w-[880px] mx-auto' style={{fontFamily: SERIF}}>
//             "Designing for free for a cause you believe in is one of the purest design exercises there is — the brief is the mission, and every decision has to earn its place."
//           </h1>
//           <p className='mt-[22px] text-sm'>· REFLECTION ON THE PROJECT</p>
//         </div>
//       </section> */}

//       <section className='max-w-[1440px] px-8 pt-10 pb-20'>
//         <img src='/cart_agro_desktop.svg' className='w-[1314px] mx-auto'/>
//       </section>

//       <div className="py-[92px] flex justify-center">
//         <Link
//           to="/projects/more"
//           className="inline-flex items-center justify-center rounded-full bg-[#0a0c0d] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#111827]"
//         >
//           View other projects
//         </Link>
//       </div>

//       <Footer />
//     </div>
//   )
// }


import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

/* ─── Design tokens ─────────────────────────────────────────── */
const GREEN_DARK  = '#013A25'
const INK         = '#0a0c0d'
const SLATE       = '#4a5565'
const SLATE_LIGHT = '#6b7280'
const SERIF       = '"Instrument Serif", Georgia, serif'

/* ─── Section header ────────────────────────────────────────── */
function SectionHeader({ tag, tagColor, children }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
      <p className="text-sm uppercase tracking-[0.18em] shrink-0" style={{ color: tagColor || GREEN_DARK }}>
        {tag}
      </p>
      <h2
        className="font-normal tracking-[-0.03em] md:text-center md:flex-1"
        style={{ fontFamily: SERIF, color: INK, fontSize: 'clamp(28px,4vw,48px)' }}
      >
        {children}
      </h2>
    </div>
  )
}

/* ─── Highlight card ────────────────────────────────────────── */
function HighlightCard({ title, number, children }) {
  return (
    <div className="border border-[#EDE9FE] bg-white p-6 md:p-8 flex flex-col gap-y-4">
      {number && (
        <h2 style={{ fontFamily: SERIF, color: GREEN_DARK }}>{number}</h2>
      )}
      <h3 className="text-xl md:text-2xl" style={{ color: INK, fontFamily: SERIF }}>{title}</h3>
      <div className="text-sm leading-relaxed" style={{ color: SLATE }}>{children}</div>
    </div>
  )
}

/* ─── Main page ─────────────────────────────────────────────── */
export default function CartAgroPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white" style={{ color: INK }}>
      <style>{`
        .browser-mockup-scroll::-webkit-scrollbar { width: 8px; }
        .browser-mockup-scroll::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 4px; }
        .browser-mockup-scroll::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }
        .browser-mockup-scroll::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
      `}</style>

      {/* Shared Navbar replaces inline nav */}
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-8 pb-12 md:pb-20 pt-24 md:pt-28">
        <Link
          to="/projects/more"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-6 md:mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          All projects
        </Link>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.18em] mb-10 md:mb-[70px]" style={{ color: SLATE_LIGHT }}>
          <span>PROJECT / LANDING PAGE REDESIGN</span>
          <span>SCOPE / WEB DESIGN</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.18em] mb-6 md:mb-8">
          <span style={{ color: GREEN_DARK }}>— REDESIGN</span>
        </div>

        {/* Heading */}
        <h1
          className="font-normal leading-[0.95] mb-6 md:mb-8"
          style={{ fontFamily: SERIF, color: INK, fontSize: 'clamp(44px,8vw,96px)' }}
        >
          CartAgro{' '}
          <span style={{ color: SLATE_LIGHT }}>Landing Page</span>{' '}
          Redesign
        </h1>

        <p className="max-w-3xl text-base md:text-lg leading-relaxed" style={{ color: SLATE }}>
          A full landing page redesign for Africa's agri-tech marketplace — connecting farmers and buyers across Nigeria with a cleaner,
          more trustworthy digital face.
        </p>
      </section>

      {/* ── BEFORE / AFTER IMAGE ──────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-8 pt-10 pb-12 md:pb-20">
        <img
          src="/before_after.svg"
          alt="Before and after comparison"
          className="w-full h-auto block mx-auto md:max-w-[1314px]"
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
      </section>

      {/* ── [01] DESIGN DECISIONS ─────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-8 pb-16 md:pb-24 flex flex-col gap-y-8">
        <SectionHeader tag="[01] Design Decisions">
          <span className="italic" style={{ color: SLATE }}>Why I made those</span> calls
        </SectionHeader>

        {/* 1-col on mobile, 2-col on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <HighlightCard title="Human over product" number="01">
            <div className="flex flex-col gap-y-5 md:gap-y-8">
              <p>
                The original hero showed app screenshots and generic copy.
                The redesign replaces that with a Nigerian farmer — a real person who represents the platform's mission.
                For a marketplace built to serve farmers, putting one front-and-centre is both emotionally resonant and on-brand.
              </p>
              <p>Before: app mockups + text wall → After: farmer portrait + bold headline</p>
            </div>
          </HighlightCard>

          <HighlightCard title="SDG section: compressed, not cut" number="02">
            <div className="flex flex-col gap-y-5 md:gap-y-8">
              <p>
                The original SDG icon grid took up a huge chunk of the page with 17 large colourful icons that created visual noise.
                The redesign retains the sustainability message — it's genuinely important to the brand — but presents it as six focused,
                text-led cards that are scannable without screaming.
              </p>
              <p>Before: 17-icon dominating grid → After: 6 focused commitment cards</p>
            </div>
          </HighlightCard>

          <HighlightCard title="Stats strip: trust above the fold" number="03">
            <div className="flex flex-col gap-y-5 md:gap-y-8">
              <p>
                100K+ customers, 97% closing rate, and 5.0 Google rating were buried in the original.
                The redesign surfaces them in a high-contrast dark strip immediately after the products section —
                converting a buried footnote into a powerful trust signal at a high-intent moment in the scroll.
              </p>
              <p>Before: buried in body text → After: full-width dark strip</p>
            </div>
          </HighlightCard>

          <HighlightCard title="Typography: expressive but disciplined" number="04">
            <div className="flex flex-col gap-y-5 md:gap-y-8">
              <p>
                The redesign uses a larger, more confident type scale — particularly for section headers.
                Italic weight on "Africa's Top" in the hero adds expressiveness without sacrificing legibility.
                A clear three-level hierarchy (display → subheading → body) was applied consistently across every section.
              </p>
              <p>Result: every section scannable in under 3 seconds</p>
            </div>
          </HighlightCard>

          <HighlightCard title="Discipline over decoration" number="05">
            <div className="flex flex-col gap-y-5 md:gap-y-8">
              <p>
                The original used green inconsistently — as background, button, text, and icon colour without clear rules.
                The redesign treats dark forest green as a structural background tone,
                bright green as the primary action/emphasis colour, and white as the reading surface.
                Three roles, three values, applied consistently.
              </p>
              <p>Before: green used everywhere → After: green used with intent</p>
            </div>
          </HighlightCard>

          <HighlightCard title="CTA: scarcity meets simplicity" number="06">
            <div className="flex flex-col gap-y-5 md:gap-y-8">
              <p>
                The final download CTA in the original was flat and uninspired.
                The redesign pairs a first-time-user 30% discount with fresh produce imagery inside a high-contrast dark panel
                — creating urgency, reward, and visual drama all at once. One action, clearly presented.
              </p>
              <p>Before: generic download banner → After: 30% offer + produce visual</p>
            </div>
          </HighlightCard>
        </div>
      </section>

      {/* ── FULL DESIGN IMAGE ─────────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-8 pt-10 pb-12 md:pb-20">
        <img
          src="/cart_agro_desktop.svg"
          alt="CartAgro full desktop redesign"
          className="w-full h-auto block mx-auto md:max-w-[1314px]"
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <div className="py-16 md:py-[92px] flex justify-center px-5">
        <Link
          to="/projects/more"
          className="inline-flex items-center justify-center rounded-full bg-[#0a0c0d] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#111827]"
        >
          View other projects
        </Link>
      </div>

      <Footer />
    </div>
  )
}