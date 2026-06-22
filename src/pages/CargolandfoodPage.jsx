// import { Link } from 'react-router-dom'
// import { useEffect } from 'react'
// import Footer from '../components/Footer'
// import Separator from '../components/Separator'

// /* ─────────────────────────────────────────────────────────────
//    DESIGN TOKENS
// ───────────────────────────────────────────────────────────── */
// const ORANGE = '#F37324'
// const INK = '#0a0c0d'
// const SLATE = '#4a5565'
// const SERIF = '"Instrument Serif", Georgia, serif'

// /* ─────────────────────────────────────────────────────────────
//    NAVBAR
// ───────────────────────────────────────────────────────────── */
// function Navbar() {
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#f3f4f6]">
//       <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-3">
//         <Link
//           to="/"
//           className="rounded-full bg-[#0a0c0d] px-4 py-1.5 text-sm font-medium text-white hover:bg-[#4a5565] transition-colors"
//         >
//           Oladimeji
//         </Link>

//         <div className="flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-sm text-[#4a5565]">
//           <span className="h-2 w-2 rounded-full" style={{ background: ORANGE }} />
//           Case Study 02
//         </div>

//         {/* <Link
//           to="/"
//           className="flex items-center gap-1.5 text-sm text-[#4a5565] hover:text-[#0a0c0d] transition-colors"
//         >
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//             <path d="M19 12H5M5 12l7-7M5 12l7 7" />
//           </svg>
//           All projects
//         </Link> */}

//         <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
//           <Link to="/" className="hover:text-black transition-colors">Back to work</Link>
//           <Link to="/#services" className="hover:text-black transition-colors">Services</Link>
//           <Link to="/#contact" className="hover:text-black transition-colors">Contact</Link>
//         </div>
//       </div>
//     </header>
//   )
// }

// /* ─────────────────────────────────────────────────────────────
//    SECTION LABEL  "[01] Overview"
// ───────────────────────────────────────────────────────────── */
// export function SectionLabel({ number, children }) {
//   return (
//     <p className="text-sm font-medium mb-8 mt-3" style={{ color: ORANGE }}>
//       {number && <span>[{number}]</span>}{' '}{children}
//     </p>
//   )
// }

// /* ─────────────────────────────────────────────────────────────
//    COMPETITOR CARD — icon, label, weaknesses list
// ───────────────────────────────────────────────────────────── */
// function CompetitorCard({ iconBg, iconColor, iconLabel, name, subtitle, weaknesses }) {
//   return (
//     <div className="problem-card rounded-2xl p-8 flex flex-col gap-6 transition-colors duration-200">
//       <div className="flex items-start gap-4">
//         <div
//           className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold"
//           style={{ backgroundColor: iconBg, color: iconColor }}
//         >
//           {iconLabel}
//         </div>
//         <div className="flex flex-col gap-0.5">
//           <h3 className="text-lg font-bold" style={{ color: INK }}>{name}</h3>
//           <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">{subtitle}</span>
//         </div>
//       </div>
//       <div>
//         <p className="text-xs font-mono mb-4 text-slate-400">// Weaknesses</p>
//         <ul className="flex flex-col gap-2">
//           {weaknesses.map((w) => (
//             <li key={w} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: SLATE }}>
//               <span className="shrink-0" style={{ marginTop: '2px' }}>×</span>
//               {w}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// /* ─────────────────────────────────────────────────────────────
//    MAIN PAGE
// ───────────────────────────────────────────────────────────── */
// export default function CargolandfoodPage() {
//   useEffect(() => { window.scrollTo(0, 0) }, [])

//   return (
//     <>
//       {/* Problem-card hover border styles */}
//       <style>{`
//         .problem-card {
//           border: 1.5px solid #EEEEEE;
//         }
//         .problem-card:hover {
//           border-color: #F37324;
//         }
//       `}</style>

//       <div className="min-h-screen bg-white" style={{ color: INK }}>
//         <Navbar />

//         {/* ── META BAR ─────────────────────────────────────────── */}
//         <div
//           className="mx-auto max-w-[1440px] px-8 flex items-center justify-between border-b border-[#EEEEEE]"
//           style={{ paddingTop: '64px', paddingBottom: '16px' }}
//         >
//           <span className="text-xs tracking-[0.1em] uppercase" style={{ color: SLATE }}>
//             PROJECT&nbsp;<span className="font-semibold" style={{ color: INK }}>/ CARGOLANDFOOD</span>
//           </span>
//           <span className="text-xs tracking-[0.1em] uppercase" style={{ color: SLATE }}>
//             SCOPE&nbsp;<span className="font-semibold" style={{ color: INK }}>/ UX RESEARCH, PRODUCT DESIGN</span>
//           </span>
//           <span className="text-xs tracking-[0.1em] uppercase" style={{ color: SLATE }}>
//             2025&nbsp;<span className="font-semibold" style={{ color: INK }}>· 3 MONTHS</span>
//           </span>
//         </div>

//         {/* ── HERO ─────────────────────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 pt-20 pb-16">
//           <Link to="/#projects" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-8">
//             <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
//             Back
//           </Link>
//           <p className="text-sm tracking-[0.12em] mb-8" style={{ color: ORANGE }}>
//             02 — MOBILE · THREE SIDED MARKETPLACE
//           </p>

//           <div className="mb-10 text-[64px]">
//             <h1
//               className="leading-[1] tracking-[-0.03em] block"
//               style={{ fontFamily: SERIF, color: INK }}
//             >
//               Cargolandfood.
//             </h1>
//             <p
//               className="leading-[1.1] block"
//               style={{
//                 fontFamily: SERIF,
//                 // fontSize: 'clamp(56px,8vw,108px)',
//                 fontStyle: 'italic',
//                 color: SLATE,
//                 letterSpacing: '-0.02em',
//               }}
//             >
//               Everything you need,
//             </p>
//             <p
//               className="leading-[1] tracking-[-0.03em] block"
//               style={{ fontFamily: SERIF, color: INK }}
//             >
//               in one app.
//             </p>
//           </div>

//           <div className="flex items-start justify-between gap-12">
//             <p className="max-w-2xl text-lg leading-relaxed" style={{ color: SLATE }}>
//               A Nigerian-built mobile marketplace where consumers, businesses, and riders order, sell,
//               and deliver — quality services, respectively and efficiently. Designed end-to-end across
//               customer, restaurant partner, and rider experiences after research with all three.
//             </p>
//           </div>

//           <div className="flex justify-between gap-8 border-t border-[#EEEEEE] pt-8 mt-8">
//             <div className="flex flex-col gap-1">
//               <p className="text-[11px] tracking-[0.1em] mb-2" style={{ color: SLATE }}>ROLE</p>
//               <p className="text-[15px] leading-snug" style={{ color: INK }}>Lead product designer</p>
//               <p className="text-[15px] leading-snug" style={{ color: INK }}>UX research lead</p>
//             </div>
//             <div className="flex flex-col gap-1">
//               <p className="text-[11px] tracking-[0.1em] mb-2" style={{ color: SLATE }}>TIMELINE</p>
//               <p className="text-[15px] leading-snug" style={{ color: INK }}>August — October 2025</p>
//               <p className="text-[15px] leading-snug" style={{ color: INK }}>12 weeks</p>
//             </div>
//             <div className="flex flex-col gap-1">
//               <p className="text-[11px] tracking-[0.1em] mb-2" style={{ color: SLATE }}>SIDES</p>
//               <p className="text-[15px] leading-snug" style={{ color: INK }}>3 user types</p>
//               <p className="text-[15px] leading-snug" style={{ color: INK }}>100+ mobile screens</p>
//             </div>
//             <div className="flex flex-col gap-1 pr-16">
//               <p className="text-[11px] tracking-[0.1em] mb-2" style={{ color: SLATE }}>MARKET</p>
//               <p className="text-[15px] leading-snug" style={{ color: INK }}>Lagos - Abuja</p>
//               <p className="text-[15px] leading-snug" style={{ color: INK }}>5 cities planned</p>
//             </div>
//           </div>
//         </section>

//         {/* ── HERO IMAGE ───────────────────────────────────────── */}
//         <div className="w-full mt-8 mb-24 px-8 max-w-[1440px] mx-auto">
//           <img
//             src="/mockup.svg"
//             alt="Cargolandfood app screens mockup"
//             style={{ width: '100%', height: 'auto', display: 'block' }}
//             onError={e => { e.currentTarget.style.display = 'none' }}
//           />
//         </div>


//         {/* ── [01] OVERVIEW ────────────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-12">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="01">Overview</SectionLabel>
//               <p className="text-sm mt-4" style={{ color: SLATE }}>The brief</p>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-[1.1] mb-8"
//                 style={{
//                   fontFamily: SERIF,
//                   fontSize: 'clamp(36px,4vw,58px)',
//                   letterSpacing: '-0.02em',
//                   color: INK,
//                 }}
//               >
//                 Why use 5 apps{' '}
//                 <span style={{ fontStyle: 'italic', color: "#4A5565" }}>when one will do?</span>
//               </h2>
//               <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 <p>
//                   Cargolandfood entered a market already crowded with food-delivery players — Jumia Food,
//                   Chowdeck, Glovo, UberEats, Bolt Food. Most of them ported global playbooks into
//                   Nigeria with limited local adaptation, and none of them solved for the daily reality that{' '}
//                   <span style={{ fontStyle: 'italic', color: ORANGE }}>food, groceries, pharmacy runs, and drinks all happen in the same week.</span> The brief was
//                   to design not another food app, but a <span className="font-semibold" style={{ color: INK }}>complete neighbourhood marketplace</span> — food-first,
//                   but extending into everything Nigerians actually order on a weekly basis.
//                 </p>
//                 <p>
//                   That ambition meant designing for three independent user groups in parallel:{' '}
//                   <span className="font-semibold" style={{ color: INK }}>customers</span> who want speed and reliability,{' '}
//                   <span className="font-semibold" style={{ color: INK }}>restaurant partners</span> who need order management and
//                   growth, and <span className="font-semibold" style={{ color: INK }}>delivery riders</span> who need transparent earnings and efficient routing. Each
//                   group has its own pain points, mental model, and definition of success.
//                 </p>
//                 <p>
//                   My responsibilities covered user research (online and in-person interviews), concept
//                   ideation, business research, aligning stakeholders on product goals, designing user flows,
//                   visual design, prototyping, usability testing, and incorporating feedback into design
//                   iterations — through to monitoring implementation to ensure the design decisions and
//                   visuals shipped accurately.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── [02] PROCESS ─────────────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="02">Process</SectionLabel>
//               <p className="text-sm mt-4" style={{ color: SLATE }}>How I worked</p>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-[1.1] mb-8"
//                 style={{
//                   fontFamily: SERIF,
//                   fontSize: 'clamp(36px,4vw,58px)',
//                   letterSpacing: '-0.02em',
//                   color: INK,
//                 }}
//               >
//                 A double-diamond approach{' '}
//                 <span style={{ fontStyle: 'italic', color: "#4A5565" }}>across 12 weeks.</span>
//               </h2>
//               <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 <p>
//                   The 12-week timeline was structured around three movements:{' '}
//                   <span className="font-semibold" style={{ color: INK }}>Concept</span> (weeks 1–4) for research and strategy,{' '}
//                   <span className="font-semibold" style={{ color: INK }}>MVP</span> (weeks 5–8) for UX flows and visual design, and{' '}
//                   <span className="font-semibold" style={{ color: INK }}>Final Product</span> (weeks 9–12) for interaction polish and usability testing. The double-diamond — Empathize, Define, Ideate, Prototype, Test, Implement — gave the team a shared language for every checkpoint.
//                 </p>
//               </div>

//             </div>
//           </div>

//           {/* Process double-diamond Diagram */}
//           <div className="mt-12 w-full max-w-6xl mx-auto">
//             <img
//               src="/process-diagram.png"
//               alt="Double-diamond process diagram"
//               style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
//             />
//           </div>
//         </section>

//         {/* ── [03] TARGET AUDIENCE ─────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="03">Target audience</SectionLabel>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-[1.1] mb-8"
//                 style={{
//                   fontFamily: SERIF,
//                   fontSize: 'clamp(36px,4vw,58px)',
//                   letterSpacing: '-0.02em',
//                   color: INK,
//                 }}
//               >
//                 Designing for{' '}
//                 <span style={{ fontStyle: 'italic', color: "#4A5565" }}>three sides</span>{' '}
//                 of one marketplace.
//               </h2>
//             </div>
//           </div>

//           <div className="mt-10 mx-auto w-full max-w-6xl">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//                 {[
//                   {
//                     icon: (
//                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2">
//                         <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
//                         <circle cx="12" cy="7" r="4" />
//                       </svg>
//                     ),
//                     type: 'Customers',
//                     subtitle: '18-45 · Urban & suburban Nigeria',
//                     desc: 'Middle to upper-middle class with moderate-to-high smartphone usage. Time-conscious, social, and eager for convenience in their daily lives.',
//                   },
//                   {
//                     icon: (
//                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2">
//                         <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//                         <polyline points="9 22 9 12 15 12 15 22" />
//                       </svg>
//                     ),
//                     type: 'Restaurant partners',
//                     subtitle: 'Small eateries → established chains',
//                     desc: 'Growth-oriented owners with varying digital readiness. Need order management, delivery integration, and merchant tools that don\'t eat all their margin.',
//                   },
//                   {
//                     icon: (
//                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2">
//                         <circle cx="5.5" cy="17.5" r="2.5" />
//                         <circle cx="18.5" cy="17.5" r="2.5" />
//                         <path d="M15 17.5L12 9H9l-2.5 8.5M12 9l-4-4H5" />
//                         <path d="M12 9h4.5l2-2.5" />
//                       </svg>
//                     ),
//                     type: 'Delivery riders',
//                     subtitle: '18-35 · Students & gig workers',
//                     desc: 'Seek flexible income with transparent earnings, reliable tools, and efficient route optimisation. Work on a gig basis, valuing speed and fair pay.',
//                   }
//                 ].map(({ icon, type, subtitle, desc }) => (
//                   <div
//                     key={type}
//                     className="problem-card rounded-2xl p-8 flex flex-col gap-4 transition-all duration-200"
//                   >
//                     <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
//                       {icon}
//                     </div>
//                     <div className="flex flex-col gap-1">
//                       <h3 className="text-lg font-bold" style={{ color: INK }}>{type}</h3>
//                       <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">{subtitle}</span>
//                     </div>
//                     <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{desc}</p>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </section>

//         {/* ── [04] USER PERSONAS ───────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="04">User personas</SectionLabel>
//               <p className="text-sm mt-4" style={{ color: SLATE }}>Synthesized from research</p>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-[1.1] mb-8"
//                 style={{
//                   fontFamily: SERIF,
//                   fontSize: 'clamp(36px,4vw,58px)',
//                   letterSpacing: '-0.02em',
//                   color: INK,
//                 }}
//               >
//                 Real people.{' '}
//                 <span style={{ fontStyle: 'italic', color: "#4A5565" }}>Real constraints.</span>
//               </h2>
//             </div>
//           </div>

//           <div className="mt-10 mx-auto w-full max-w-6xl">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//                 {[
//                   {
//                     name: 'Busy Bola', age: 29, role: 'The consumer', number: '01',
//                     bgColor: ORANGE,
//                     quote: 'I just want to order once and not think about it — delivery, groceries, everything.',
//                     goals: ['Order food and groceries in one checkout', 'Track delivery in real time', 'Reorder favourites instantly'],
//                     pains: ['Juggling 3+ apps for daily needs', 'Unreliable ETAs and cold deliveries', 'Duplicate payment details across apps'],
//                   },
//                   {
//                     name: 'Entrepreneur Emeka', age: 32, role: 'The restaurant partner', number: '02',
//                     bgColor: '#10B981',
//                     quote: "My food is great but I'm losing orders to platforms that take 30% and still can't deliver on time.",
//                     goals: ['Simple order management dashboard', 'Reliable delivery partners', 'Direct customer relationship'],
//                     pains: ['High commission rates eating margin', 'No visibility into delivery performance', 'Complex onboarding on existing platforms'],
//                   },
//                   {
//                     name: 'Rider David', age: 24, role: 'The delivery rider', number: '03',
//                     bgColor: '#374151',
//                     quote: "I want to earn well without being penalised for things outside my control — traffic, bad addresses, all of it.",
//                     goals: ['Maximise earnings per hour', 'Clear navigation and pickup flow', 'Transparent earnings and ratings'],
//                     pains: ['Switching between multiple platforms', 'Unfair penalties for late deliveries', 'Poor in-app communication with customers'],
//                   }
//                 ].map(({ name, age, role, number, bgColor, quote, goals, pains }) => (
//                   <div
//                     key={name}
//                     className="problem-card rounded-2xl overflow-hidden flex flex-col transition-all duration-200"
//                     style={{ borderWidth: '1.5px', borderStyle: 'solid', borderColor: '#EEEEEE', padding: 0 }}
//                   >
//                     <div className="p-6 flex flex-col gap-1 text-white" style={{ backgroundColor: bgColor }}>
//                       <div className="flex justify-between items-center">
//                         <span className="text-xs font-semibold uppercase tracking-wider opacity-80">{role}</span>
//                         <span className="text-xs font-mono opacity-60">[{number}]</span>
//                       </div>
//                       <h3 className="text-xl font-bold mt-1">{name}, {age}</h3>
//                     </div>

//                     <div className="p-6 flex flex-col gap-5 flex-grow bg-white">
//                       <p className="text-sm leading-relaxed italic" style={{ color: SLATE }}>"{quote}"</p>

//                       <div className="flex flex-col gap-4">
//                         <div>
//                           <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: INK }}>Goals</p>
//                           <ul className="flex flex-col gap-1.5">
//                             {goals.map((g, i) => (
//                               <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: SLATE }}>
//                                 <span style={{ color: ORANGE, marginTop: '2px' }}>→</span>
//                                 {g}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div>
//                           <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: INK }}>Pain Points</p>
//                           <ul className="flex flex-col gap-1.5">
//                             {pains.map((p, i) => (
//                               <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: SLATE }}>
//                                 <span style={{ color: '#ef4444', marginTop: '2px' }}>×</span>
//                                 {p}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </section>

//         {/* ── [05] COMPETITIVE LANDSCAPE ───────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start mb-16 mt-4">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="05">Competitive landscape</SectionLabel>
//             </div>
//             <h2
//               className="font-normal leading-[1] tracking-[-0.03em]"
//               style={{ fontFamily: SERIF, fontSize: 'clamp(36px,4vw,56px)' }}
//             >
//               <span style={{ color: INK }}>Four competitors. </span>
//               <span style={{ fontStyle: 'italic', color: SLATE }}>Four gaps to exploit.</span>
//             </h2>
//           </div>

//           <div className="mx-auto w-full max-w-6xl">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               <CompetitorCard
//                 iconBg={ORANGE}
//                 iconColor="#ffffff"
//                 iconLabel="JF"
//                 name="Jumia Food"
//                 subtitle="Market leader"
//                 weaknesses={[
//                   'Slow delivery (45–60 min vs. our 20–30)',
//                   'High commission (20–25%)',
//                   'Fragmented food & grocery apps',
//                   'E-commerce first, food second',
//                 ]}
//               />
//               <CompetitorCard
//                 iconBg="#FACC15"
//                 iconColor="#0a0c0d"
//                 iconLabel="C"
//                 name="Chowdeck"
//                 subtitle="Strongest local"
//                 weaknesses={[
//                   'Food-only platform',
//                   'Limited tech features',
//                   'Basic restaurant tools',
//                   'No daily essentials expansion',
//                 ]}
//               />
//               <CompetitorCard
//                 iconBg="#0D9488"
//                 iconColor="#ffffff"
//                 iconLabel="G"
//                 name="Glovo"
//                 subtitle="International"
//                 weaknesses={[
//                   'High commissions (25–30%)',
//                   'Limited local-market understanding',
//                   'Not optimised for Nigerian needs',
//                   'Missing local markets & vendors',
//                 ]}
//               />
//               <CompetitorCard
//                 iconBg="#06C167"
//                 iconColor="#ffffff"
//                 iconLabel="U"
//                 name="UberEats"
//                 subtitle="Global benchmark"
//                 weaknesses={[
//                   'Food-only focus',
//                   'Limited African market investment',
//                   'High pricing structure',
//                   'No pharmacy or markets',
//                 ]}
//               />
//             </div>
//           </div>
//         </section>

//         {/* ── PULL QUOTE ───────────────────────────────────────── */}
//         <section className="border-t border-b border-[#EEEEEE] py-20 bg-[#FCEBD9]">
//           <div className="mx-auto max-w-[1440px] px-8">
//             <p
//               className="font-normal leading-[1.1] text-center"
//               style={{
//                 fontFamily: SERIF,
//                 fontSize: 'clamp(36px,5vw,48px)',
//                 letterSpacing: '-0.02em',
//                 color: INK,
//               }}
//             >
//               ""Built for foodies who need" {' '}
//               <span style={{ fontStyle: 'italic', color: ORANGE }}>everything</span>{' '}
//               not shoppers who want food."
//             </p>
//             <p className="text-center text-xs tracking-[0.15em] uppercase mt-6" style={{ color: SLATE }}>
//               Core insight · Three-Sided Marketplace
//             </p>
//           </div>
//         </section>

//         {/* ── [06] INFORMATION ARCHITECTURE ─────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="06">Information architecture</SectionLabel>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-[1.1] mb-8"
//                 style={{
//                   fontFamily: SERIF,
//                   fontSize: 'clamp(36px,4vw,58px)',
//                   letterSpacing: '-0.02em',
//                   color: INK,
//                 }}
//               >
//                 Three apps.{' '}
//                 <span style={{ fontStyle: 'italic', color: "#4A5565" }}>One design language.</span>
//               </h2>
//               <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 <p>
//                   Each user type gets a purpose-built experience — different navigation
//                   structures, different information hierarchies — but built on a shared
//                   design system so the product feels coherent regardless of who's using it.
//                 </p>
//               </div>
//               <div className="grid grid-cols-3 gap-6 mt-10">
//                 {[
//                   {
//                     track: 'Consumer app',
//                     screens: ['Home / Discovery', 'Restaurant & Menu', 'Cart & Checkout', 'Live Order Tracking', 'Profile & Wallet', 'Order History'],
//                   },
//                   {
//                     track: 'Merchant dashboard',
//                     screens: ['Store Overview', 'Order Queue', 'Menu Management', 'Analytics & Revenue', 'Delivery Settings', 'Customer Reviews'],
//                   },
//                   {
//                     track: 'Rider app',
//                     screens: ['Available Orders', 'Active Delivery', 'Navigation & Map', 'Earnings Dashboard', 'Ratings & History', 'Account & Docs'],
//                   },
//                 ].map(({ track, screens }) => (
//                   <div key={track} className="flex flex-col gap-4">
//                     <p className="text-sm font-semibold" style={{ color: ORANGE }}>{track}</p>
//                     <ul className="flex flex-col gap-2">
//                       {screens.map((s) => (
//                         <li key={s} className="flex items-center gap-2 text-sm" style={{ color: SLATE }}>
//                           <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: ORANGE, flexShrink: 0 }} />
//                           {s}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── [07] ONBOARDING ──────────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="07">Onboarding</SectionLabel>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-[1.1] mb-8"
//                 style={{
//                   fontFamily: SERIF,
//                   fontSize: 'clamp(36px,4vw,58px)',
//                   letterSpacing: '-0.02em',
//                   color: INK,
//                 }}
//               >
//                 Onboarding fast enough{' '}
//                 <span style={{ fontStyle: 'italic', color: "#4A5565"}}>to keep hungry users.</span>
//               </h2>
//               <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 <p>
//                 The onboarding is the first point of contact between the user and the product, so 
//                 it has to convey the value proposition cleanly and simply. To ensure onboarding is 
//                 fast, I take just the bare minimum: a verified phone number and an address selection. 
//                 Three illustrated value-prop screens — All your favorites, Order from chosen chef, 
//                 Free delivery offers — set expectations before the form ever appears.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-10 mx-auto w-full max-w-6xl">
//             <img
//               src="/Group screens.png"
//               alt="Cargolandfood onboarding — value props, sign up, and address selection"
//               style={{ width: '100%', height: 'auto', display: 'block' }}
//               onError={e => { e.currentTarget.style.display = 'none' }}
//             />
//           </div>
//         </section>

//         {/* ── [08] MAKE AN ORDER ────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="08">Make an order</SectionLabel>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-[1.1] mb-8"
//                 style={{
//                   fontFamily: SERIF,
//                   fontSize: 'clamp(36px,4vw,58px)',
//                   letterSpacing: '-0.02em',
//                   color: INK,
//                 }}
//               >
//                 From browse to checkout{' '}
//                 <span style={{ fontStyle: 'italic', color: ORANGE }}>in five clear steps.</span>
//               </h2>
//               <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 <p>
//                 Order placement is structured as a single linear flow — Home → Restaurant → Filter → 
//                 Checkout → Confirmation — with every step optimized for thumb reach on a 6-inch 
//                 screen. The Filter step deliberately keeps Sort, Restaurant, and Delivery Fee at 
//                 the top of the sheet because user testing showed those were the three filters people 
//                 actually used. Payment selection collapses into a single sheet; address selection 
//                 reuses the onboarding location data.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-10 mx-auto w-full max-w-6xl overflow-hidden">
//             <img
//               src="/Decks.png"
//               alt="Cargolandfood order flow — home, menu, filter, checkout, and confirmation"
//               style={{
//                 width: '100%',
//                 height: 'auto',
//                 display: 'block',
//                 boxShadow: 'none',
//                 filter: 'none',
//                 clipPath: 'inset(0 12px 14px 0)',
//               }}
//               onError={e => { e.currentTarget.style.display = 'none' }}
//             />
//           </div>
//         </section>

//         {/* ── [09] TRACK AN ORDER ──────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-4">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="09">Track an order</SectionLabel>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-[1.1] mb-8"
//                 style={{
//                   fontFamily: SERIF,
//                   fontSize: 'clamp(36px,4vw,58px)',
//                   letterSpacing: '-0.02em',
//                   color: INK,
//                 }}
//               >
//                 Live tracking{' '}
//                 <span style={{ fontStyle: 'italic', color: "#4A5565" }}>that earns trust.</span>
//               </h2>
//               <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 <p>
//                   Trust collapses when users don't know where their order is. We invested
//                   heavily in the tracking screen: a live map with rider position, a timeline
//                   of order states (placed → confirmed → prepared → picked up → on the way →
//                   delivered), and one-tap contact for the rider. Every state has a push
//                   notification so users never have to open the app to stay informed.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-10 mx-auto w-full max-w-6xl">
//             <img
//               src="/Tracking.png"
//               alt="Cargolandfood order tracking screens"
//               style={{ width: '100%', height: 'auto', display: 'block' }}
//               onError={e => { e.currentTarget.style.display = 'none' }}
//             />
//           </div>
//         </section>

//         {/* ── [10] PROFILE & WALLET ────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="10">Profile &amp; Wallet</SectionLabel>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-[1.1] mb-8"
//                 style={{
//                   fontFamily: SERIF,
//                   fontSize: 'clamp(36px,4vw,58px)',
//                   letterSpacing: '-0.02em',
//                   color: INK,
//                 }}
//               >
//                 One hub for{' '}
//                 <span style={{ fontStyle: 'italic', color: "#4A5565" }}>everything personal.</span>
//               </h2>
//               <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 <p>
//                   Profile houses the user's wallet balance, saved addresses, payment methods,
//                   order history, and preferences — all under one roof. For riders, it doubles
//                   as their earnings dashboard. For merchants, it links to their store analytics.
//                   The same screen adapts to all three user types.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-10 mx-auto w-full max-w-6xl">
//             <img
//               src="/Profile.png"
//               alt="Cargolandfood profile and wallet screens"
//               style={{ width: '100%', height: 'auto', display: 'block' }}
//               onError={e => { e.currentTarget.style.display = 'none' }}
//             />
//           </div>
//         </section>

//         {/* ── [11] More features · Light & dark mode ───────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 pt-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="11">More features · Light & dark mode</SectionLabel>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-[1.1] mb-8"
//                 style={{
//                   fontFamily: SERIF,
//                   fontSize: 'clamp(36px,4vw,58px)',
//                   letterSpacing: '-0.02em',
//                   color: INK,
//                 }}
//               >
//                 One system.{' '}
//                 <span style={{ fontStyle: 'italic', color: "#4A5565" }}>Three experiences.</span>
//               </h2>
//               <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 <p>
//                   A shared component library kept 100+ screens consistent without slowing
//                   down delivery. Color tokens, type scales, spacing increments, and interaction
//                   patterns all defined once — then applied across consumer, merchant, and rider
//                   tracks simultaneously.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-10 mx-auto w-full max-w-6xl">
//             <img
//               src="/Dark mode.png"
//               alt="Cargolandfood dark mode screens"
//               style={{ width: '100%', height: 'auto', display: 'block' }}
//               onError={e => { e.currentTarget.style.display = 'none' }}
//             />
//           </div>
//         </section>

//         <Separator/>

//         {/* ── [12] OUTCOME ─────────────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="12">Outcome</SectionLabel>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-none tracking-[-0.03em] mb-16"
//                 style={{ fontFamily: SERIF, fontSize: 'clamp(40px,5vw,72px)', color: INK }}
//               >
//                 What{' '}
//                 <span style={{ fontStyle: 'italic', color: "#4A5565" }}>shipped.</span>
//               </h2>
//             </div>
//           </div>
//           {/* Three stat columns */}
//               <div className="grid grid-cols-3 gap-12 px-16">
//                 <div className="flex flex-col gap-4 border-[#eeeeee] border-[0.65px] border-solid px-7 py-8 rounded-2xl">
//                   <p
//                     className="font-normal leading-none tracking-tight"
//                     style={{ fontFamily: SERIF, fontSize: 'clamp(48px,5vw,72px)', color: INK }}
//                   >
//                     3<span style={{ fontStyle: 'italic', color: ORANGE }}>×</span>
//                   </p>
//                   <p className="text-sm font-medium" style={{ color: INK }}>Three-sided ecosystem</p>
//                   <p className="text-sm leading-relaxed" style={{ color: SLATE }}>
//                     Consumer, merchant, and rider products designed in parallel — three
//                     fully resolved experiences on a single platform.
//                   </p>
//                 </div>

//                 <div className="flex flex-col gap-4 border-[#eeeeee] border-[0.65px] border-solid px-7 py-8 rounded-2xl">
//                   <p
//                     className="font-normal leading-none tracking-tight"
//                     style={{ fontFamily: SERIF, fontSize: 'clamp(48px,5vw,72px)', color: INK }}
//                   >
//                     100<span style={{ color: ORANGE }}>+</span>
//                   </p>
//                   <p className="text-sm font-medium" style={{ color: INK }}>Screens in light & dark</p>
//                   <p className="text-sm leading-relaxed" style={{ color: SLATE }}>
//                     Full light and dark mode coverage across every screen, designed
//                     natively — not a colour invert.
//                   </p>
//                 </div>

//                 <div className="flex flex-col gap-4 border-[#eeeeee] border-[0.65px] border-solid px-7 py-8 rounded-2xl">
//                   <p
//                     className="font-normal leading-none tracking-tight"
//                     style={{ fontFamily: SERIF, fontSize: 'clamp(48px,5vw,72px)', color: INK }}
//                   >
//                     20<span style={{ fontStyle: 'italic', color: ORANGE }}>m</span>
//                   </p>
//                   <p className="text-sm font-medium" style={{ color: INK }}>Delivery target</p>
//                   <p className="text-sm leading-relaxed" style={{ color: SLATE }}>
//                     Sub-20-minute delivery target baked into every design decision — from
//                     rider routing to order state communication.
//                   </p>
//                 </div>
//               </div>
//         </section>

//         {/* ── [13] REFLECTION ──────────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="13">Reflection</SectionLabel>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-[1.1] mb-8"
//                 style={{
//                   fontFamily: SERIF,
//                   fontSize: 'clamp(36px,4vw,58px)',
//                   letterSpacing: '-0.02em',
//                   color: INK,
//                 }}
//               >
//                 What I{' '}
//                 <span style={{ fontStyle: 'italic', color: "#4A5565" }}>learned.</span>
//               </h2>
//               <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 <p>
//                   Designing for three audiences simultaneously forces a discipline that
//                   single-sided products don't require. Every decision I made for the consumer
//                   had to be pressure-tested against the merchant and rider experience — a
//                   routing optimisation for the rider affects the ETA the consumer sees, which
//                   affects the merchant's order management window.
//                 </p>
//                 <p>
//                   The biggest lesson: a shared design system isn't a nice-to-have when you're
//                   moving fast across multiple tracks. It's the only way to stay consistent at
//                   scale. Building it in week three, not week ten, saved the project.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── NEXT PROJECT — ORGSPHERE ────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 pb-24">
//           <div className="border-t border-[#EEEEEE] pt-16 flex flex-col items-center text-center gap-8">
//             <p className="text-xs tracking-[0.15em] uppercase" style={{ color: SLATE }}>
//               Next project
//             </p>
//             <h2
//               className="font-normal leading-[0.95] tracking-[-0.03em] whitespace-nowrap"
//               style={{ fontFamily: SERIF, fontSize: 'clamp(52px,9vw,120px)', color: '#08783D' }}
//             >
//               <p className="underline">Orgsphere.</p>
//             </h2>
//             <Link
//               to="/projects/"
//               className="flex items-center gap-2 rounded-full bg-[#0a0c0d] px-6 py-3 text-sm font-medium text-white hover:bg-[#4a5565] transition-colors"
//             >
//               View project
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M7 17L17 7M17 7H7M17 7v10" />
//               </svg>
//             </Link>
//           </div>
//         </section>

//         {/* ── FOOTER ──────────────────────────────────────────── */}
//         <Footer />
//       </div>
//     </>
//   )
// }


import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import Separator from '../components/Separator'

/* ─── Design tokens ─────────────────────────────────────────── */
const ORANGE = '#F37324'
const INK    = '#0a0c0d'
const SLATE  = '#4a5565'
const SERIF  = '"Instrument Serif", Georgia, serif'

/* ─── Navbar ────────────────────────────────────────────────── */
function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#f3f4f6]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-8 py-3">
        <Link to="/" className="rounded-full bg-[#0a0c0d] px-4 py-1.5 text-sm font-medium text-white hover:bg-[#4a5565] transition-colors">
          Oladimeji
        </Link>

        {/* Center badge — hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-sm text-[#4a5565]">
          <span className="h-2 w-2 rounded-full" style={{ background: ORANGE }} />
          Case Study 02
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-black transition-colors">Back to work</Link>
          <Link to="/#services" className="hover:text-black transition-colors">Services</Link>
          <Link to="/#contact" className="hover:text-black transition-colors">Contact</Link>
        </div>

        {/* Mobile back */}
        <Link to="/" className="flex md:hidden items-center gap-1 text-sm text-[#4a5565]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          Back
        </Link>
      </div>
    </header>
  )
}

/* ─── Section label ─────────────────────────────────────────── */
export function SectionLabel({ number, children }) {
  return (
    <p className="text-sm font-medium mb-8 mt-3" style={{ color: ORANGE }}>
      {number && <span>[{number}]</span>}{' '}{children}
    </p>
  )
}

/* ─── Reusable section block ────────────────────────────────── */
function SectionBlock({ number, label, sideNote, children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-16 items-start">
      <div className="flex flex-col gap-2 pt-1">
        <SectionLabel number={number}>{label}</SectionLabel>
        {sideNote && <p className="text-sm md:mt-4" style={{ color: SLATE }}>{sideNote}</p>}
      </div>
      <div>{children}</div>
    </div>
  )
}

/* ─── Section heading ───────────────────────────────────────── */
function SectionHeading({ large, children }) {
  return (
    <h2
      className="font-normal leading-[1.1] mb-8"
      style={{
        fontFamily: SERIF,
        fontSize: large ? 'clamp(32px,5vw,72px)' : 'clamp(28px,4vw,58px)',
        letterSpacing: large ? '-0.03em' : '-0.02em',
        color: INK,
      }}
    >
      {children}
    </h2>
  )
}

/* ─── Competitor card ───────────────────────────────────────── */
function CompetitorCard({ iconBg, iconColor, iconLabel, name, subtitle, weaknesses }) {
  return (
    <div className="problem-card rounded-2xl p-6 md:p-8 flex flex-col gap-6 transition-colors duration-200">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold"
          style={{ backgroundColor: iconBg, color: iconColor }}>
          {iconLabel}
        </div>
        <div className="flex flex-col gap-0.5">
          <h3 className="text-lg font-bold" style={{ color: INK }}>{name}</h3>
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">{subtitle}</span>
        </div>
      </div>
      <div>
        <p className="text-xs font-mono mb-4 text-slate-400">// Weaknesses</p>
        <ul className="flex flex-col gap-2">
          {weaknesses.map((w) => (
            <li key={w} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: SLATE }}>
              <span className="shrink-0" style={{ marginTop: '2px' }}>×</span>
              {w}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ─── Main page ─────────────────────────────────────────────── */
export default function CargolandfoodPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <style>{`
        .problem-card { border: 1.5px solid #EEEEEE; }
        .problem-card:hover { border-color: #F37324; }
      `}</style>

      <div className="min-h-screen bg-white" style={{ color: INK }}>
        <Navbar />

        {/* ── META BAR ──────────────────────────────────────────── */}
        <div
          className="mx-auto max-w-[1440px] px-5 md:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-[#EEEEEE]"
          style={{ paddingTop: '64px', paddingBottom: '16px' }}
        >
          <span className="text-xs tracking-[0.1em] uppercase" style={{ color: SLATE }}>
            PROJECT&nbsp;<span className="font-semibold" style={{ color: INK }}>/ CARGOLANDFOOD</span>
          </span>
          <span className="text-xs tracking-[0.1em] uppercase" style={{ color: SLATE }}>
            SCOPE&nbsp;<span className="font-semibold" style={{ color: INK }}>/ UX RESEARCH, PRODUCT DESIGN</span>
          </span>
          <span className="text-xs tracking-[0.1em] uppercase" style={{ color: SLATE }}>
            2025&nbsp;<span className="font-semibold" style={{ color: INK }}>· 3 MONTHS</span>
          </span>
        </div>

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 pt-10 md:pt-20 pb-10 md:pb-16">
          <Link to="/#projects" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-6 md:mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </Link>

          <p className="text-sm tracking-[0.12em] mb-6 md:mb-8" style={{ color: ORANGE }}>
            02 — MOBILE · THREE SIDED MARKETPLACE
          </p>

          <div className="mb-8 md:mb-10" style={{ fontSize: 'clamp(40px,8vw,96px)' }}>
            <h1 className="leading-[1] tracking-[-0.03em] block" style={{ fontFamily: SERIF, color: INK }}>
              Cargolandfood.
            </h1>
            <p className="leading-[1.1] block" style={{ fontFamily: SERIF, fontStyle: 'italic', color: SLATE, letterSpacing: '-0.02em' }}>
              Everything you need,
            </p>
            <p className="leading-[1] tracking-[-0.03em] block" style={{ fontFamily: SERIF, color: INK }}>
              in one app.
            </p>
          </div>

          <p className="max-w-2xl text-base md:text-lg leading-relaxed mb-8 md:mb-0" style={{ color: SLATE }}>
            A Nigerian-built mobile marketplace where consumers, businesses, and riders order, sell,
            and deliver — quality services, respectively and efficiently. Designed end-to-end across
            customer, restaurant partner, and rider experiences after research with all three.
          </p>

          {/* Stats row: 2-col grid on mobile, flex row on desktop */}
          <div className="grid grid-cols-2 md:flex md:justify-between gap-6 md:gap-8 border-t border-[#EEEEEE] pt-8 mt-8">
            {[
              { label: 'ROLE',     lines: ['Lead product designer', 'UX research lead'] },
              { label: 'TIMELINE', lines: ['August — October 2025', '12 weeks'] },
              { label: 'SIDES',    lines: ['3 user types', '100+ mobile screens'] },
              { label: 'MARKET',   lines: ['Lagos - Abuja', '5 cities planned'] },
            ].map(({ label, lines }) => (
              <div key={label} className="flex flex-col gap-1">
                <p className="text-[11px] tracking-[0.1em] mb-2" style={{ color: SLATE }}>{label}</p>
                <p className="text-[15px] leading-snug" style={{ color: INK }}>{lines[0]}</p>
                <p className="text-[15px] leading-snug" style={{ color: INK }}>{lines[1]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HERO IMAGE ────────────────────────────────────────── */}
        <div className="w-full mt-4 mb-12 md:mt-8 md:mb-24 px-5 md:px-8 max-w-[1440px] mx-auto">
          <img
            src="/mockup.svg"
            alt="Cargolandfood app screens mockup"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
        </div>

        {/* ── [01] OVERVIEW ─────────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12">
          <SectionBlock number="01" label="Overview" sideNote="The brief">
            <SectionHeading>
              Why use 5 apps{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>when one will do?</span>
            </SectionHeading>
            <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              <p>
                Cargolandfood entered a market already crowded with food-delivery players — Jumia Food,
                Chowdeck, Glovo, UberEats, Bolt Food. Most of them ported global playbooks into
                Nigeria with limited local adaptation, and none of them solved for the daily reality that{' '}
                <span style={{ fontStyle: 'italic', color: ORANGE }}>food, groceries, pharmacy runs, and drinks all happen in the same week.</span> The brief was
                to design not another food app, but a <span className="font-semibold" style={{ color: INK }}>complete neighbourhood marketplace</span> — food-first,
                but extending into everything Nigerians actually order on a weekly basis.
              </p>
              <p>
                That ambition meant designing for three independent user groups in parallel:{' '}
                <span className="font-semibold" style={{ color: INK }}>customers</span> who want speed and reliability,{' '}
                <span className="font-semibold" style={{ color: INK }}>restaurant partners</span> who need order management and growth, and{' '}
                <span className="font-semibold" style={{ color: INK }}>delivery riders</span> who need transparent earnings and efficient routing.
              </p>
              <p>
                My responsibilities covered user research (online and in-person interviews), concept
                ideation, business research, aligning stakeholders on product goals, designing user flows,
                visual design, prototyping, usability testing, and incorporating feedback — through to
                monitoring implementation to ensure the design decisions and visuals shipped accurately.
              </p>
            </div>
          </SectionBlock>
        </section>

        {/* ── [02] PROCESS ──────────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <SectionBlock number="02" label="Process" sideNote="How I worked">
            <SectionHeading>
              A double-diamond approach{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>across 12 weeks.</span>
            </SectionHeading>
            <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              <p>
                The 12-week timeline was structured around three movements:{' '}
                <span className="font-semibold" style={{ color: INK }}>Concept</span> (weeks 1–4) for research and strategy,{' '}
                <span className="font-semibold" style={{ color: INK }}>MVP</span> (weeks 5–8) for UX flows and visual design, and{' '}
                <span className="font-semibold" style={{ color: INK }}>Final Product</span> (weeks 9–12) for interaction polish and usability testing.
              </p>
            </div>
          </SectionBlock>

          <div className="mt-10 md:mt-12 w-full max-w-6xl mx-auto">
            <img
              src="/process-diagram.png"
              alt="Double-diamond process diagram"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
          </div>
        </section>

        {/* ── [03] TARGET AUDIENCE ──────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <SectionBlock number="03" label="Target audience">
            <SectionHeading>
              Designing for{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>three sides</span>{' '}
              of one marketplace.
            </SectionHeading>
          </SectionBlock>

          <div className="mt-8 md:mt-10 w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
              {[
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  ),
                  type: 'Customers',
                  subtitle: '18-45 · Urban & suburban Nigeria',
                  desc: 'Middle to upper-middle class with moderate-to-high smartphone usage. Time-conscious, social, and eager for convenience in their daily lives.',
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  ),
                  type: 'Restaurant partners',
                  subtitle: 'Small eateries → established chains',
                  desc: "Growth-oriented owners with varying digital readiness. Need order management, delivery integration, and merchant tools that don't eat all their margin.",
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2">
                      <circle cx="5.5" cy="17.5" r="2.5" />
                      <circle cx="18.5" cy="17.5" r="2.5" />
                      <path d="M15 17.5L12 9H9l-2.5 8.5M12 9l-4-4H5" />
                      <path d="M12 9h4.5l2-2.5" />
                    </svg>
                  ),
                  type: 'Delivery riders',
                  subtitle: '18-35 · Students & gig workers',
                  desc: 'Seek flexible income with transparent earnings, reliable tools, and efficient route optimisation. Work on a gig basis, valuing speed and fair pay.',
                },
              ].map(({ icon, type, subtitle, desc }) => (
                <div key={type} className="problem-card rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-all duration-200">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">{icon}</div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold" style={{ color: INK }}>{type}</h3>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">{subtitle}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── [04] USER PERSONAS ────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <SectionBlock number="04" label="User personas" sideNote="Synthesized from research">
            <SectionHeading>
              Real people.{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>Real constraints.</span>
            </SectionHeading>
          </SectionBlock>

          <div className="mt-8 md:mt-10 w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
              {[
                {
                  name: 'Busy Bola', age: 29, role: 'The consumer', number: '01', bgColor: ORANGE,
                  quote: 'I just want to order once and not think about it — delivery, groceries, everything.',
                  goals: ['Order food and groceries in one checkout', 'Track delivery in real time', 'Reorder favourites instantly'],
                  pains: ['Juggling 3+ apps for daily needs', 'Unreliable ETAs and cold deliveries', 'Duplicate payment details across apps'],
                },
                {
                  name: 'Entrepreneur Emeka', age: 32, role: 'The restaurant partner', number: '02', bgColor: '#10B981',
                  quote: "My food is great but I'm losing orders to platforms that take 30% and still can't deliver on time.",
                  goals: ['Simple order management dashboard', 'Reliable delivery partners', 'Direct customer relationship'],
                  pains: ['High commission rates eating margin', 'No visibility into delivery performance', 'Complex onboarding on existing platforms'],
                },
                {
                  name: 'Rider David', age: 24, role: 'The delivery rider', number: '03', bgColor: '#374151',
                  quote: "I want to earn well without being penalised for things outside my control — traffic, bad addresses, all of it.",
                  goals: ['Maximise earnings per hour', 'Clear navigation and pickup flow', 'Transparent earnings and ratings'],
                  pains: ['Switching between multiple platforms', 'Unfair penalties for late deliveries', 'Poor in-app communication with customers'],
                },
              ].map(({ name, age, role, number, bgColor, quote, goals, pains }) => (
                <div key={name} className="problem-card rounded-2xl overflow-hidden flex flex-col transition-all duration-200"
                  style={{ borderWidth: '1.5px', borderStyle: 'solid', borderColor: '#EEEEEE', padding: 0 }}>
                  <div className="p-6 flex flex-col gap-1 text-white" style={{ backgroundColor: bgColor }}>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">{role}</span>
                      <span className="text-xs font-mono opacity-60">[{number}]</span>
                    </div>
                    <h3 className="text-xl font-bold mt-1">{name}, {age}</h3>
                  </div>
                  <div className="p-6 flex flex-col gap-5 flex-grow bg-white">
                    <p className="text-sm leading-relaxed italic" style={{ color: SLATE }}>"{quote}"</p>
                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: INK }}>Goals</p>
                        <ul className="flex flex-col gap-1.5">
                          {goals.map((g, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: SLATE }}>
                              <span style={{ color: ORANGE, marginTop: '2px' }}>→</span>{g}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: INK }}>Pain Points</p>
                        <ul className="flex flex-col gap-1.5">
                          {pains.map((p, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: SLATE }}>
                              <span style={{ color: '#ef4444', marginTop: '2px' }}>×</span>{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── [05] COMPETITIVE LANDSCAPE ────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-16 items-start mb-10 md:mb-16 mt-4">
            <div className="flex flex-col gap-2 pt-1">
              <SectionLabel number="05">Competitive landscape</SectionLabel>
            </div>
            <h2 className="font-normal leading-[1] tracking-[-0.03em]"
              style={{ fontFamily: SERIF, fontSize: 'clamp(28px,4vw,56px)' }}>
              <span style={{ color: INK }}>Four competitors. </span>
              <span style={{ fontStyle: 'italic', color: SLATE }}>Four gaps to exploit.</span>
            </h2>
          </div>

          <div className="mx-auto w-full max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <CompetitorCard iconBg={ORANGE} iconColor="#ffffff" iconLabel="JF" name="Jumia Food" subtitle="Market leader"
                weaknesses={['Slow delivery (45–60 min vs. our 20–30)', 'High commission (20–25%)', 'Fragmented food & grocery apps', 'E-commerce first, food second']} />
              <CompetitorCard iconBg="#FACC15" iconColor="#0a0c0d" iconLabel="C" name="Chowdeck" subtitle="Strongest local"
                weaknesses={['Food-only platform', 'Limited tech features', 'Basic restaurant tools', 'No daily essentials expansion']} />
              <CompetitorCard iconBg="#0D9488" iconColor="#ffffff" iconLabel="G" name="Glovo" subtitle="International"
                weaknesses={['High commissions (25–30%)', 'Limited local-market understanding', 'Not optimised for Nigerian needs', 'Missing local markets & vendors']} />
              <CompetitorCard iconBg="#06C167" iconColor="#ffffff" iconLabel="U" name="UberEats" subtitle="Global benchmark"
                weaknesses={['Food-only focus', 'Limited African market investment', 'High pricing structure', 'No pharmacy or markets']} />
            </div>
          </div>
        </section>

        {/* ── PULL QUOTE ────────────────────────────────────────── */}
        <section className="border-t border-b border-[#EEEEEE] py-14 md:py-20 bg-[#FCEBD9]">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8">
            <p className="font-normal leading-[1.1] text-center"
              style={{ fontFamily: SERIF, fontSize: 'clamp(24px,5vw,48px)', letterSpacing: '-0.02em', color: INK }}>
              "Built for foodies who need{' '}
              <span style={{ fontStyle: 'italic', color: ORANGE }}>everything</span>
              {' '}— not shoppers who want food."
            </p>
            <p className="text-center text-xs tracking-[0.15em] uppercase mt-6" style={{ color: SLATE }}>
              Core insight · Three-Sided Marketplace
            </p>
          </div>
        </section>

        {/* ── [06] INFORMATION ARCHITECTURE ────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <SectionBlock number="06" label="Information architecture">
            <SectionHeading>
              Three apps.{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>One design language.</span>
            </SectionHeading>
            <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl mb-8 md:mb-10" style={{ color: SLATE }}>
              <p>Each user type gets a purpose-built experience — different navigation structures, different information hierarchies — but built on a shared design system so the product feels coherent regardless of who's using it.</p>
            </div>
            {/* IA columns: 1-col on mobile, 3-col on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { track: 'Consumer app',       screens: ['Home / Discovery', 'Restaurant & Menu', 'Cart & Checkout', 'Live Order Tracking', 'Profile & Wallet', 'Order History'] },
                { track: 'Merchant dashboard', screens: ['Store Overview', 'Order Queue', 'Menu Management', 'Analytics & Revenue', 'Delivery Settings', 'Customer Reviews'] },
                { track: 'Rider app',          screens: ['Available Orders', 'Active Delivery', 'Navigation & Map', 'Earnings Dashboard', 'Ratings & History', 'Account & Docs'] },
              ].map(({ track, screens }) => (
                <div key={track} className="flex flex-col gap-4">
                  <p className="text-sm font-semibold" style={{ color: ORANGE }}>{track}</p>
                  <ul className="flex flex-col gap-2">
                    {screens.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm" style={{ color: SLATE }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: ORANGE, flexShrink: 0 }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionBlock>
        </section>

        {/* ── [07] ONBOARDING ───────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <SectionBlock number="07" label="Onboarding">
            <SectionHeading>
              Onboarding fast enough{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>to keep hungry users.</span>
            </SectionHeading>
            <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              <p>The onboarding is the first point of contact between the user and the product, so it has to convey the value proposition cleanly and simply. To ensure onboarding is fast, I take just the bare minimum: a verified phone number and an address selection. Three illustrated value-prop screens set expectations before the form ever appears.</p>
            </div>
          </SectionBlock>
          <div className="mt-8 md:mt-10 w-full max-w-6xl mx-auto">
            <img src="/Group screens.png" alt="Cargolandfood onboarding — value props, sign up, and address selection"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              onError={e => { e.currentTarget.style.display = 'none' }} />
          </div>
        </section>

        {/* ── [08] MAKE AN ORDER ────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <SectionBlock number="08" label="Make an order">
            <SectionHeading>
              From browse to checkout{' '}
              <span style={{ fontStyle: 'italic', color: ORANGE }}>in five clear steps.</span>
            </SectionHeading>
            <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              <p>Order placement is structured as a single linear flow — Home → Restaurant → Filter → Checkout → Confirmation — with every step optimized for thumb reach on a 6-inch screen. The Filter step deliberately keeps Sort, Restaurant, and Delivery Fee at the top of the sheet because user testing showed those were the three filters people actually used.</p>
            </div>
          </SectionBlock>
          <div className="mt-8 md:mt-10 w-full max-w-6xl mx-auto overflow-hidden">
            <img src="/Decks.png" alt="Cargolandfood order flow — home, menu, filter, checkout, and confirmation"
              style={{ width: '100%', height: 'auto', display: 'block', clipPath: 'inset(0 12px 14px 0)' }}
              onError={e => { e.currentTarget.style.display = 'none' }} />
          </div>
        </section>

        {/* ── [09] TRACK AN ORDER ───────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-8 md:py-4">
          <SectionBlock number="09" label="Track an order">
            <SectionHeading>
              Live tracking{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>that earns trust.</span>
            </SectionHeading>
            <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              <p>Trust collapses when users don't know where their order is. We invested heavily in the tracking screen: a live map with rider position, a timeline of order states (placed → confirmed → prepared → picked up → on the way → delivered), and one-tap contact for the rider.</p>
            </div>
          </SectionBlock>
          <div className="mt-8 md:mt-10 w-full max-w-6xl mx-auto">
            <img src="/Tracking.png" alt="Cargolandfood order tracking screens"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              onError={e => { e.currentTarget.style.display = 'none' }} />
          </div>
        </section>

        {/* ── [10] PROFILE & WALLET ─────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <SectionBlock number="10" label="Profile & Wallet">
            <SectionHeading>
              One hub for{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>everything personal.</span>
            </SectionHeading>
            <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              <p>Profile houses the user's wallet balance, saved addresses, payment methods, order history, and preferences — all under one roof. For riders, it doubles as their earnings dashboard. For merchants, it links to their store analytics. The same screen adapts to all three user types.</p>
            </div>
          </SectionBlock>
          <div className="mt-8 md:mt-10 w-full max-w-6xl mx-auto">
            <img src="/Profile.png" alt="Cargolandfood profile and wallet screens"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              onError={e => { e.currentTarget.style.display = 'none' }} />
          </div>
        </section>

        {/* ── [11] MORE FEATURES ────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 pt-12 md:pt-16">
          <SectionBlock number="11" label="More features · Light & dark mode">
            <SectionHeading>
              One system.{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>Three experiences.</span>
            </SectionHeading>
            <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              <p>A shared component library kept 100+ screens consistent without slowing down delivery. Color tokens, type scales, spacing increments, and interaction patterns all defined once — then applied across consumer, merchant, and rider tracks simultaneously.</p>
            </div>
          </SectionBlock>
          <div className="mt-8 md:mt-10 w-full max-w-6xl mx-auto">
            <img src="/Dark mode.png" alt="Cargolandfood dark mode screens"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              onError={e => { e.currentTarget.style.display = 'none' }} />
          </div>
        </section>

        <Separator />

        {/* ── [12] OUTCOME ──────────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 pb-12 md:pb-16">
          <SectionBlock number="12" label="Outcome">
            <SectionHeading large>
              What <span style={{ fontStyle: 'italic', color: SLATE }}>shipped.</span>
            </SectionHeading>
          </SectionBlock>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-12 md:px-16 mt-4">
            {[
              { stat: <><span>3</span><span style={{ fontStyle: 'italic', color: ORANGE }}>×</span></>, title: 'Three-sided ecosystem', body: 'Consumer, merchant, and rider products designed in parallel — three fully resolved experiences on a single platform.' },
              { stat: <><span>100</span><span style={{ color: ORANGE }}>+</span></>, title: 'Screens in light & dark', body: 'Full light and dark mode coverage across every screen, designed natively — not a colour invert.' },
              { stat: <><span>20</span><span style={{ fontStyle: 'italic', color: ORANGE }}>m</span></>, title: 'Delivery target', body: 'Sub-20-minute delivery target baked into every design decision — from rider routing to order state communication.' },
            ].map(({ stat, title, body }) => (
              <div key={title} className="flex flex-col gap-4 border-[#eeeeee] border-[0.65px] border-solid px-6 md:px-7 py-7 md:py-8 rounded-2xl">
                <p className="font-normal leading-none tracking-tight" style={{ fontFamily: SERIF, fontSize: 'clamp(44px,5vw,72px)', color: INK }}>{stat}</p>
                <p className="text-sm font-medium" style={{ color: INK }}>{title}</p>
                <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── [13] REFLECTION ───────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <SectionBlock number="13" label="Reflection">
            <SectionHeading>
              What I <span style={{ fontStyle: 'italic', color: SLATE }}>learned.</span>
            </SectionHeading>
            <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              <p>Designing for three audiences simultaneously forces a discipline that single-sided products don't require. Every decision I made for the consumer had to be pressure-tested against the merchant and rider experience — a routing optimisation for the rider affects the ETA the consumer sees, which affects the merchant's order management window.</p>
              <p>The biggest lesson: a shared design system isn't a nice-to-have when you're moving fast across multiple tracks. It's the only way to stay consistent at scale. Building it in week three, not week ten, saved the project.</p>
            </div>
          </SectionBlock>
        </section>

        {/* ── NEXT PROJECT ──────────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 pb-20 md:pb-24">
          <div className="border-t border-[#EEEEEE] pt-14 md:pt-16 flex flex-col items-center text-center gap-6 md:gap-8">
            <p className="text-xs tracking-[0.15em] uppercase" style={{ color: SLATE }}>Next project</p>
            <Link
              to="/projects/orgsphere"
              className="font-normal leading-[0.95] tracking-[-0.03em] underline underline-offset-8 decoration-2 hover:opacity-80 transition-opacity break-words"
              style={{ fontFamily: SERIF, fontSize: 'clamp(40px,9vw,120px)', color: '#08783D' }}
            >
              Orgsphere.
            </Link>
            <Link
              to="/projects/orgsphere"
              className="flex items-center gap-2 rounded-full bg-[#0a0c0d] px-6 py-3 text-sm font-medium text-white hover:bg-[#4a5565] transition-colors"
            >
              View project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}