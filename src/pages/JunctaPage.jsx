// import { Link } from 'react-router-dom'
// import { useEffect } from 'react'
// import Footer from '../components/Footer'
// import Separator from '../components/Separator'

// /* ─────────────────────────────────────────────────────────────
//    DESIGN TOKENS — exact values from Juncta.png reference
// ───────────────────────────────────────────────────────────── */
// const TEAL = '#17CFAA'   // accent (matches hover colour per spec)
// const INK = '#0a0c0d'   // near-black display text
// const SLATE = '#4a5565'   // gray body / secondary
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
//           <span className="h-2 w-2 rounded-full bg-green-500" />
//           Case Study 01
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
// function SectionLabel({ number, children }) {
//   return (
//     <p className="text-sm font-medium mb-8 mt-3" style={{ color: TEAL }}>
//       {number && <span>[{number}]</span>}{' '}{children}
//     </p>
//   )
// }

// /* ─────────────────────────────────────────────────────────────
//    PROBLEM CARD — #EEEEEE border by default, #17CFAA on hover
// ───────────────────────────────────────────────────────────── */
// function ProblemCard({ n, title, body }) {
//   return (
//     <div className="problem-card rounded-2xl p-8 flex flex-col gap-4 transition-colors duration-200">
//       <span className="text-sm font-medium" style={{ color: TEAL }}>{n}</span>
//       <h3 className="text-xl font-medium leading-snug" style={{ color: INK }}>{title}</h3>
//       <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{body}</p>
//     </div>
//   )
// }

// /* ─────────────────────────────────────────────────────────────
//    APP SCREENSHOT — shows different parts of Juncta.png
//    objectPos: CSS background-position-y value (percentage)
// ───────────────────────────────────────────────────────────── */
// function AppShot({ label, objectPos = 'top', aspect = '16/8', rounded = false }) {
//   return (
//     <div
//       className={rounded ? 'w-full overflow-hidden rounded-2xl' : 'w-full overflow-hidden'}
//       style={{ backgroundColor: '#0a0c0d', aspectRatio: aspect }}
//     >
//       <img
//         src="/Juncta.png"
//         alt={label}
//         style={{
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           objectPosition: `center ${objectPos}`,
//         }}
//         onError={e => { e.currentTarget.style.display = 'none' }}
//       />
//     </div>
//   )
// }

// /* ─────────────────────────────────────────────────────────────
//    MAIN PAGE
// ───────────────────────────────────────────────────────────── */
// export default function JunctaPage() {
//   useEffect(() => { window.scrollTo(0, 0) }, [])

//   return (
//     <>
//       {/* Problem-card hover border styles */}
//       <style>{`
//         .problem-card {
//           border: 1.5px solid #EEEEEE;
//         }
//         .problem-card:hover {
//           border-color: #17CFAA;
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
//             PROJECT&nbsp;<span className="font-semibold" style={{ color: INK }}>/ JUNCTA</span>
//           </span>
//           <span className="text-xs tracking-[0.1em] uppercase" style={{ color: SLATE }}>
//             SCOPE&nbsp;<span className="font-semibold" style={{ color: INK }}>/ UX RESEARCH, PRODUCT DESIGN</span>
//           </span>
//         </div>

//         {/* ── HERO ─────────────────────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 pt-20 pb-16">
//           <Link to="/#projects" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-8">
//             <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
//             Back
//           </Link>
//           <p className="text-sm tracking-[0.12em] mb-8" style={{ color: TEAL }}>
//             — DEFI · MULTICHAIN PROTOCOL
//           </p>

//           <div className="mb-10 text-[64px]">
//             <h1
//               className="leading-[1] tracking-[-0.03em] block"
//               style={{ fontFamily: SERIF, color: INK }}
//             >
//               Juncta.
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
//               Where liquidity
//             </p>
//             <p
//               className="leading-[1] tracking-[-0.03em] block"
//               style={{ fontFamily: SERIF, color: INK }}
//             >
//               never sleeps.
//             </p>
//           </div>

//           <div className="flex items-start justify-between gap-12">
//             <p className="max-w-2xl text-lg leading-relaxed" style={{ color: SLATE }}>
//               A dynamic liquidity market maker with a fully integrated lending protocol,
//               designed and built from scratch on Move. Every idle dollar works — either
//               earning fees on the DEX or earning yield in the lending market, with the
//               protocol routing capital between the two automatically.
//             </p>
//             <a
//               href="https://juncta.xyz"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="shrink-0 flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
//               style={{ color: TEAL }}
//             >
//               Live link to Juncta
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M7 17L17 7M17 7H7M17 7v10" />
//               </svg>
//             </a>
//           </div>
//         </section>

//         {/* ── HERO APP SCREENSHOT — Dashboard ──────────────────── */}
//         <div className="w-full bg-white" style={{ padding: '0 70px' }}>
//           <img
//             src="/Dashboard.png"
//             alt="Juncta dashboard"
//             style={{ width: '100%', height: 'auto', display: 'block' }}
//             onError={e => { e.currentTarget.style.display = 'none' }}
//           />
//         </div>

//         <Separator/>

//         {/* ── PROJECT INFO & MOCKUP (inserted as per user PNG) */}
//         <section className="mx-auto max-w-[1440px] px-8">
//           <div className="flex justify-between mb-12">
//             <div>
//               <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: SLATE }}>ROLE</p>
//               <p className="text-sm font-medium" style={{ color: INK }}>Lead product designer<br />UX research lead</p>
//             </div>
//             <div>
//               <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: SLATE }}>TIMELINE</p>
//               <p className="text-sm font-medium" style={{ color: INK }}>August — October 2025<br />12 weeks</p>
//             </div>
//             <div>
//               <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: SLATE }}>SIDES</p>
//               <p className="text-sm font-medium" style={{ color: INK }}>3 user types<br />100+ mobile screens</p>
//             </div>
//             <div>
//               <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: SLATE }}>MARKET</p>
//               <p className="text-sm font-medium" style={{ color: INK }}>Lagos · Abuja<br />5 cities planned</p>
//             </div>
//           </div>
//           <div className="flex justify-center">
//             <img
//               src="/Cargolandfood-mockup.png"
//               alt="Cargolandfood mobile mockup"
//               style={{ maxWidth: '900px', width: '100%', height: 'auto', borderRadius: '24px', boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}
//               onError={e => { e.currentTarget.style.display = 'none' }}
//             />
         
              
        
//           </div>
//         </section>
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
//                 A protocol where{' '}
//                 <span style={{ fontStyle: 'italic', color: TEAL }}>capital</span>{' '}
//                 never sits still.
//               </h2>
//               <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 <p>
//                   Every Move-based DEX launching today is a <span style={{ fontStyle: 'bold', color: '#0A0C0D' }}>concentrated liquidity market maker</span> — a port of
//                   the Uniswap V3 playbook. Cetus, Turbos, and whatever ships first on Cedra will look the
//                   same. LPs set static price ranges, wait, and watch capital sit idle the moment price
//                   drifts outside their range. The architecture has no native awareness of which bins are
//                   working and which are not.
//                 </p>
//                 <p>
//                   Juncta makes a deliberate choice to go {' '}
//                   <span style={{ fontStyle: 'Bold', color: '#0A0C0D' }}>DLMM</span>{' '}
//                   instead, for reasons that are architectural rather than cosmetic. Liquidity lives in
//                   discrete price bins. The protocol tracks exactly which bin is active at every moment.
//                   This bin-level awareness is what makes the core mechanic — automatically routing
//                   inactive bin liquidity into the lending market — architecturally clean to implement.
//                 </p>
//                 <p>
//                   The design challenge: make a protocol with {' '}
//                   <span style={{ fontStyle: 'italic', color: '#17CFAA' }}> six simultaneous yield states per position</span>{' '}

//                   feel as simple as a savings account. Every screen had to translate a deeply technical
//                   engine into something a first-time LP could use without losing money.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── [02] PROBLEMS — Five structural issues ───────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 pb-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start mb-16 mt-4">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="02">Problem solved</SectionLabel>
//               <p className="text-sm" style={{ color: SLATE }}>

//               </p>
//             </div>
//             <h2
//               className="font-normal leading-[1] tracking-[-0.03em]"
//               style={{ fontFamily: SERIF, fontSize: 'clamp(36px,4vw,56px)' }}
//             >
//               <span style={{ color: '#0A0C0D', fontStyle: 'regular' }}>Five structural issues </span>
//               <span style={{ color: '#4A5565', fontStyle: 'regular' }}>no existing protocol has solved.</span>
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             <ProblemCard
//               n="01"
//               title="Passive LPs consistently lose."
//               body="The average retail LP underperforms simple token holding once impermanent loss and missed rebalancing are priced in. Concentrated liquidity has become an institutional product wearing retail clothing."
//             />
//             <ProblemCard
//               n="02"
//               title="DEX liquidity and lending are disconnected."
//               body="LP capital and lending deposits live in separate pools with 
//               no relationship to each other. LP capital sits idle when inactive. 
//               Nobody has brought unified liquidity to a Move chain."
//             />
//             <ProblemCard
//               n="03"
//               title="Impermanent loss is treated as inevitable."
//               body="Every AMM design treats IL as the cost of providing liquidity. 
//               No protocol has built IL mitigation into its core fee economics rather than 
//               leaving it as the LP's problem to solve."
//             />
//             <ProblemCard
//               n="04"
//               title="Lending parameters are too slow."
//               body="Aave and Compound use static utilisation curves that update only through
//               slow governance. No lending market adapts its parameters continuously to live 
//               on-chain conditions."
//             />
//             <ProblemCard
//               n="05"
//               title="Collateral sits idle."
//               body="When a trader or borrower deposits margin, that capital earns nothing
//               while it waits. This is pure capital inefficiency that no existing protocol
//               has resolved at the protocol level."
//             />
//             <ProblemCard
//               n="06"
//               title="Juncta addresses all five."
//               body="One unified protocol built from scratch in Move. The DLMM and the
//               lending market share a single liquidity layer. Capital flows between them
//               automatically, directed by market conditions, without the LP doing anything."
//             />
//           </div>
//         </section>

//         {/* ── PULL QUOTE ───────────────────────────────────────── */}
//         <section className="border-t border-b border-[#EEEEEE] py-20">
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
//               "The DEX already knows precisely{' '}
//               <span style={{ fontStyle: 'italic', color: TEAL }}>which capital is not <p>earning fees . Juncta puts it to work."</p> </span>

//             </p>
//             <p className="text-center text-xs tracking-[0.15em] uppercase mt-6" style={{ color: SLATE }}>
//               Core design principle · Unified Liquidity Layer
//             </p>
//           </div>
//         </section>

//         {/* ── [03] DESIGN APPROACH ─────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="03">Design approach</SectionLabel>
//               <p className="text-sm mt-14" style={{ color: SLATE }}>Thinking</p>
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
//                 Making a{' '}
//                 <span style={{ fontStyle: 'italic', color: '#4A5565' }}>three-layered protocol</span>{' '}
//                 feel like <p>one product.</p>
//               </h2>
//               <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 <p>
//                   Juncta's engine is doing six things simultaneously: tracking bins,
//                   routing capital, charging volatility-adaptive fees, managing collateral,
//                   monitoring health factors, and scheduling soft liquidations. Surfacing any
//                   of that directly would overwhelm the LP. Hiding all of it would make the
//                   protocol feel like a black box.
//                 </p>
//                 <p>
//                   The design resolves this by treating every screen as one of three progressive
//                   disclosure layers. The outer layer is action-oriented — one clear primary verb
//                   per page (Add LP, Borrow, Deposit Collateral). The middle layer is state-aware
//                   — live panels showing what's happening to the user's capital right now. The
//                   inner layer is configuration — strategy selection, adaptive thresholds, and
//                   distribution shapes, tucked behind deliberate clicks.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── APP SCREENSHOTS — Provide Liquidity + Deposit Collateral (side by side), Borrow below ── */}
//         <div className="w-full bg-white">
//           <div className="mx-auto max-w-[1440px] px-8 py-88 flex flex-col" style={{ gap: '32px' }}>
//             {/* Top row: Provide Liquidity & Deposit Collateral side by side, 32px gap, equal height */}
//             <div className="grid grid-cols-2" style={{ gap: '32px', alignItems: 'stretch' }}>
//               <img
//                 src="/Provide Liquidity.svg"
//                 alt="Provide Liquidity screen"
//                 style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
//                 onError={e => { e.currentTarget.style.display = 'none' }}
//               />
//               <div style={{ borderRadius: '12px', overflow: 'hidden', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', background: '#ffffff' }}>
//                 <img
//                   src="/Deposit collateral.svg"
//                   alt="Deposit Collateral screen"
//                   style={{ width: '100%', height: 'auto', display: 'block' }}
//                   onError={e => { e.currentTarget.parentElement.style.display = 'none' }}
//                 />
//               </div>
//             </div>
//             {/* Bottom row: Borrow full-width, 32px below */}
//             <img
//               src="/Borrow.svg"
//               alt="Borrow screen"
//               style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
//               onError={e => { e.currentTarget.style.display = 'none' }}
//             />
//           </div>
//         </div>

//         {/* ── [04] NEW POOL ───────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="04">New Pool</SectionLabel>
//               <p className="text-sm" style={{ color: SLATE }}></p>
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
//                 Pool creation that{' '}
//                 <span style={{ fontStyle: 'italic', color: TEAL }}>teaches while it configures.</span>
//               </h2>
//               <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 <p>
//                   Three pool types (Stable, Standard, Volatile) map to bin step presets and base
//                   fee floors. Distribution strategy — Spot, Curve, Bid-Ask, Wide — previews the bin
//                   shape live as the LP selects it, with IL exposure labeled directly on each tile.
//                   Adaptive Mode is off by default; when enabled, the Sustain Window and Bin Distance
//                   Threshold controls make the rebalancing logic visible instead of hidden.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── NEW POOL IMAGE ────────────────────────────────────── */}
//         <div className="mx-auto max-w-[1440px] px-8 pb-6">
//           <img
//             src="/New Pool.png"
//             alt="New Pool screen"
//             style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
//             onError={e => { e.currentTarget.style.display = 'none' }}
//           />
//         </div>

//         {/* ── [05] PROVIDE LIQUIDITY ───────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="05">Provide Liquidity</SectionLabel>
//               <p className="text-sm" style={{ color: SLATE }}></p>
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
//                 Live bin state as{' '}
//                 <span style={{ fontStyle: 'italic', color: TEAL }}>the source of truth.</span>
//               </h2>
//               <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 <p>
//                   The right rail is the focal point — a real-time bin chart that highlights the
//                   active bin, lending bins, and idle bins in distinct states, updating every 3
//                   seconds. Pool APY is broken into its three underlying sources (trading fees,
//                   lending yield, combined APY) so LPs can see exactly where their yield is coming
//                   from. Position preview on the lower half models Total Deposit Value, Projected
//                   APY, and Borrow Power before the transaction is ever signed.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── PROVIDE LIQUIDITY IMAGE ───────────────────────────── */}
//         <div className="mx-auto max-w-[1440px] px-8 pb-16">
//           <img
//             src="/Provide Liquidity.png"
//             alt="Provide Liquidity screen"
//             style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
//             onError={e => { e.currentTarget.style.display = 'none' }}
//           />
//         </div>

//         {/* ── [06] BORROW · TWO STATES ─────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 pt-6 pb-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="06">Borrow · Two states</SectionLabel>

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
//                 Borrow that grows with{' '}
//                 <span style={{ fontStyle: 'italic', color: TEAL }}>the user's position.</span>
//               </h2>
//               <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 <p>
//                   Two dashboard states for the same surface. The left is the entry point for a
//                   first-time borrower — a clean lending market table with utilisation bars,
//                   adaptive-rate badges, and no collateral required to look. The right is the
//                   active-position view — Health Factor, collateral deposit, liquidation stages
//                   (Healthy, Soft, Accelerate, Full), all visible in one scroll. The soft
//                   liquidation stages were hand-designed with explicit thresholds (&gt;1.2,
//                   1.1–1.2, 1.0–1.1, &lt;1.0) so users understand what triggers each action.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── [06] BORROW IMAGES — Deposit Collateral + Active Position side by side ── */}
//         <div className="mx-auto max-w-[1440px] px-8 pb-12">
//           <div className="grid grid-cols-2" style={{ gap: '32px', alignItems: 'stretch' }}>
//             <img
//               src="/Deposit collateral.png"
//               alt="Deposit Collateral — entry state"
//               style={{ width: '100%', height: '100%', display: 'block', borderRadius: '12px', objectFit: 'cover' }}
//               onError={e => { e.currentTarget.style.display = 'none' }}
//             />
//             <img
//               src="/Borrow - Active position.png"
//               alt="Borrow — active position state"
//               style={{ width: '100%', height: '100%', display: 'block', borderRadius: '12px', objectFit: 'cover' }}
//               onError={e => { e.currentTarget.style.display = 'none' }}
//             />
//           </div>
//         </div>

//         {/* ── [07] PORTFOLIO ────────────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-8">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="07">Portfolio</SectionLabel>

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
//                 One page for{' '}
//                 <span style={{ fontStyle: 'italic', color: TEAL }}>every yield source.</span>
//               </h2>
//               <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 <p>
//                   The Portfolio surface is where the three-layer architecture reveals itself
//                   end-to-end. Total Net Worth, Wallet Tokens, LP Positions, Borrowed, and Yield
//                   Earned sit across the top in parallel. Below, the allocation donut shows capital
//                   distribution by value, P&amp;L Summary splits realised from unrealised, and each
//                   LP position shows bin range, fees, and whether it's currently active or routed
//                   to the lending market. The Borrow Position card surfaces the Health Factor and
//                   the Soft liquidation / Hard liquidation boundaries as visual thresholds on the
//                   same bar.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── [08] DESIGN SYSTEM ───────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="08">Design system</SectionLabel>

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
//                 A system built for{' '}
//                 <span style={{ fontStyle: 'italic', color: TEAL }}>dense data</span>
//                 {', dark rooms,'}
//                 <br />
//                 {'and long sessions.'}
//               </h2>
//             </div>
//           </div>
//         </section>

//         {/* ── [08] DESIGN SYSTEM IMAGE ─────────────────────────── */}
//         <div className="mx-auto max-w-[1440px] px-8 pt-16">
//           <img
//             src="/Design system.png"
//             alt="Juncta design system — palette, typography, components"
//             style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }}
//             onError={e => { e.currentTarget.style.display = 'none' }}
//           />
//         </div>

//         <Separator/>

//         {/* ── [09] OUTCOME ─────────────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 pb-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="09">Outcome</SectionLabel>

//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-none tracking-[-0.03em] mb-16"
//                 style={{ fontFamily: SERIF, fontSize: 'clamp(40px,5vw,72px)', color: INK }}
//               >
//                 What{' '}
//                 <span style={{ fontStyle: 'italic', color: TEAL }}>shipped.</span>
//               </h2>

//               {/* Three stat columns */}
//             </div>
//           </div>
//           <div className="grid grid-cols-3 gap-12 px-16">
//                 {/* 35/35 */}
//                 <div className="flex flex-col gap-4 border-[#eeeeee] border-[0.65px] border-solid px-7 py-8 rounded-2xl">
//                   <p
//                     className="font-normal leading-none tracking-tight"
//                     style={{ fontFamily: SERIF, fontSize: 'clamp(48px,5vw,72px)', color: INK }}
//                   >
//                     35<span style={{ color: TEAL }}>/35</span>
//                   </p>
//                   <p className="text-sm font-medium" style={{ color: INK }}>Screens delivered</p>
//                   <p className="text-sm leading-relaxed" style={{ color: SLATE }}>
//                     Pools, New Pool, Swap, Provide Liquidity, Borrow, Monitor, Portfolio.
//                     Shipped as production-ready.
//                   </p>
//                 </div>

//                 {/* 6× */}
//                 <div className="flex flex-col gap-4 border-[#eeeeee] border-[0.65px] border-solid px-7 py-8 rounded-2xl">
//                   <p
//                     className="font-normal leading-none tracking-tight"
//                     style={{ fontFamily: SERIF, fontSize: 'clamp(48px,5vw,72px)', color: INK }}
//                   >
//                     6<span style={{ fontStyle: 'italic', color: TEAL }}>×</span>
//                   </p>
//                   <p className="text-sm font-medium" style={{ color: INK }}>Empty-state variants</p>
//                   <p className="text-sm leading-relaxed" style={{ color: SLATE }}>
//                     Every surface has a first-use empty state with shimmer skeleton UI, so new LPs
//                     never see a broken-feeling dashboard before connecting a wallet.
//                   </p>
//                 </div>

//                 {/* 1st */}
//                 <div className="flex flex-col gap-4 border-[#eeeeee] border-[0.65px] border-solid px-7 py-8 rounded-2xl">
//                   <p
//                     className="font-normal leading-none tracking-tight"
//                     style={{ fontFamily: SERIF, fontSize: 'clamp(48px,5vw,72px)', color: INK }}
//                   >
//                     1<span style={{ fontStyle: 'italic', color: TEAL }}>st</span>
//                   </p>
//                   <p className="text-sm font-medium" style={{ color: INK }}>DLMM on Move</p>
//                   <p className="text-sm leading-relaxed" style={{ color: SLATE }}>
//                     Juncta is the first dynamic liquidity market maker designed for a Move chain,
//                     and the first anywhere to integrate lending yield into inactive bin capital natively.
//                   </p>
//                 </div>
//               </div>
//         </section>

//         {/* ── NEXT PROJECT — CARGOLANDFOOD (centered) ──────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 pb-24">
//           <div className="border-t border-[#EEEEEE] pt-16 flex flex-col items-center text-center gap-8">
//             <p className="text-xs tracking-[0.15em] uppercase" style={{ color: SLATE }}>
//               Next project
//             </p>
//             <Link
//               to="/projects/cargolandfood"
//               className="font-normal leading-[0.95] tracking-[-0.03em] whitespace-nowrap underline underline-offset-8 decoration-2 hover:opacity-80 transition-opacity"
//               style={{ fontFamily: SERIF, fontSize: 'clamp(52px,9vw,120px)', color: '#F25C05' }}
//             >
//               Cargolandfood.
//             </Link>
//             <Link
//               to="/projects/cargolandfood"
//               className="flex items-center gap-2 rounded-full bg-[#0a0c0d] px-6 py-3 text-sm font-medium text-white hover:bg-[#4a5565] transition-colors"
//             >
//               View project
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M7 17L17 7M17 7H7M17 7v10" />
//               </svg>
//             </Link>
//           </div>
//         </section>

//         {/* ── FOOTER (same as home) ─────────────────────────────── */}
//         <Footer />
//       </div>
//     </>
//   )
// }



import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Separator from '../components/Separator'

const TEAL  = '#17CFAA'
const INK   = '#0a0c0d'
const SLATE = '#4a5565'
const SERIF = '"Instrument Serif", Georgia, serif'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#f3f4f6]">
      <div className="mx-auto flex items-center justify-between px-5 md:px-8 py-3">
        <Link to="/" className="rounded-full bg-[#0a0c0d] px-4 py-1.5 text-sm font-medium text-white hover:bg-[#4a5565] transition-colors">
          Oladimeji
        </Link>
        <div className="hidden md:flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-sm text-[#4a5565]">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Case Study 01
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-black transition-colors">Back to work</Link>
          <Link to="/#services" className="hover:text-black transition-colors">Services</Link>
          <Link to="/#contact" className="hover:text-black transition-colors">Contact</Link>
        </div>
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

function SectionLabel({ number, children }) {
  return (
    <p className="text-sm font-medium mb-8 mt-3" style={{ color: TEAL }}>
      {number && <span>[{number}]</span>}{' '}{children}
    </p>
  )
}

function ProblemCard({ n, title, body }) {
  return (
    <div className="problem-card rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-colors duration-200">
      <span className="text-sm font-medium" style={{ color: TEAL }}>{n}</span>
      <h3 className="text-lg md:text-xl font-medium leading-snug" style={{ color: INK }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{body}</p>
    </div>
  )
}

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

export default function JunctaPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <style>{`
        .problem-card { border: 1.5px solid #EEEEEE; }
        .problem-card:hover { border-color: #17CFAA; }
      `}</style>

      <div className="min-h-screen bg-white" style={{ color: INK }}>
        <Navbar />

        {/* META BAR */}
        <div
          className="px-5 md:px-8 border-b border-[#EEEEEE]"
          style={{ paddingTop: '64px', paddingBottom: '16px' }}
        >
          <div className=" mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
<span className="text-xs tracking-[0.1em] uppercase" style={{ color: SLATE }}>
            PROJECT&nbsp;<span className="font-semibold" style={{ color: INK }}>/ JUNCTA</span>
          </span>
          <span className="text-xs tracking-[0.1em] uppercase" style={{ color: SLATE }}>
            SCOPE&nbsp;<span className="font-semibold" style={{ color: INK }}>/ UX RESEARCH, PRODUCT DESIGN</span>
          </span>
          </div>
          
        </div>

        {/* HERO */}
        <section className="mx-auto max-w-[1700px] px-5 md:px-8 pt-10 md:pt-20 pb-10 md:pb-16">
          <Link to="/#projects" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-6 md:mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </Link>

          <p className="text-sm tracking-[0.12em] mb-6 md:mb-8" style={{ color: TEAL }}>
            — DEFI · MULTICHAIN PROTOCOL
          </p>

          <div className="mb-8 md:mb-10" style={{ fontSize: 'clamp(44px,8vw,96px)' }}>
            <h1 className="leading-[1] tracking-[-0.03em] block" style={{ fontFamily: SERIF, color: INK }}>Juncta.</h1>
            <p className="leading-[1.1] block" style={{ fontFamily: SERIF, fontStyle: 'italic', color: SLATE, letterSpacing: '-0.02em' }}>Where liquidity</p>
            <p className="leading-[1] tracking-[-0.03em] block" style={{ fontFamily: SERIF, color: INK }}>never sleeps.</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 md:gap-12">
            <p className="max-w-2xl text-base md:text-lg leading-relaxed" style={{ color: SLATE }}>
              A dynamic liquidity market maker with a fully integrated lending protocol,
              designed and built from scratch on Move. Every idle dollar works — either
              earning fees on the DEX or earning yield in the lending market, with the
              protocol routing capital between the two automatically.
            </p>
            <a
              href="https://juncta.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: TEAL }}
            >
              Live link to Juncta
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </section>

        {/* HERO DASHBOARD IMAGE */}
        <div className="w-full bg-white px-5 md:px-[70px]">
          <img src="/Dashboard.png" alt="Juncta dashboard"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            onError={e => { e.currentTarget.style.display = 'none' }} />
        </div>

        <Separator />

        {/* PROJECT INFO */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-10 md:py-0">
          <div className="grid grid-cols-2 md:flex md:justify-between gap-6 mb-10 md:mb-12">
            {[
              { label: 'ROLE',     lines: ['Lead product designer', 'UX research lead'] },
              { label: 'TIMELINE', lines: ['August — October 2025', '12 weeks'] },
              { label: 'SIDES',    lines: ['3 user types', '100+ mobile screens'] },
              { label: 'MARKET',   lines: ['Lagos · Abuja', '5 cities planned'] },
            ].map(({ label, lines }) => (
              <div key={label}>
                <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: SLATE }}>{label}</p>
                <p className="text-sm font-medium" style={{ color: INK }}>{lines[0]}<br />{lines[1]}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <img src="/Cargolandfood-mockup.png" alt="Cargolandfood mobile mockup"
              style={{ maxWidth: '900px', width: '100%', height: 'auto', borderRadius: '24px', boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}
              onError={e => { e.currentTarget.style.display = 'none' }} />
          </div>
        </section>

        {/* [01] OVERVIEW */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12">
          <SectionBlock number="01" label="Overview" sideNote="The brief">
            <SectionHeading>
              A protocol where{' '}
              <span style={{ fontStyle: 'italic', color: TEAL }}>capital</span>{' '}
              never sits still.
            </SectionHeading>
            <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              <p>Every Move-based DEX launching today is a <span style={{ color: INK }}>concentrated liquidity market maker</span> — a port of the Uniswap V3 playbook. Cetus, Turbos, and whatever ships first on Cedra will look the same. LPs set static price ranges, wait, and watch capital sit idle the moment price drifts outside their range.</p>
              <p>Juncta makes a deliberate choice to go <span style={{ color: INK }}>DLMM</span> instead, for reasons that are architectural rather than cosmetic. Liquidity lives in discrete price bins. The protocol tracks exactly which bin is active at every moment.</p>
              <p>The design challenge: make a protocol with <span style={{ fontStyle: 'italic', color: TEAL }}>six simultaneous yield states per position</span> feel as simple as a savings account.</p>
            </div>
          </SectionBlock>
        </section>

        {/* [02] PROBLEMS */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 pb-12 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-16 items-start mb-10 md:mb-16 mt-4">
            <div className="flex flex-col gap-2 pt-1">
              <SectionLabel number="02">Problem solved</SectionLabel>
            </div>
            <h2 className="font-normal leading-[1] tracking-[-0.03em]" style={{ fontFamily: SERIF, fontSize: 'clamp(28px,4vw,56px)' }}>
              <span style={{ color: INK }}>Five structural issues </span>
              <span style={{ color: SLATE }}>no existing protocol has solved.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            <ProblemCard n="01" title="Passive LPs consistently lose." body="The average retail LP underperforms simple token holding once impermanent loss and missed rebalancing are priced in. Concentrated liquidity has become an institutional product wearing retail clothing." />
            <ProblemCard n="02" title="DEX liquidity and lending are disconnected." body="LP capital and lending deposits live in separate pools with no relationship to each other. LP capital sits idle when inactive. Nobody has brought unified liquidity to a Move chain." />
            <ProblemCard n="03" title="Impermanent loss is treated as inevitable." body="Every AMM design treats IL as the cost of providing liquidity. No protocol has built IL mitigation into its core fee economics rather than leaving it as the LP's problem to solve." />
            <ProblemCard n="04" title="Lending parameters are too slow." body="Aave and Compound use static utilisation curves that update only through slow governance. No lending market adapts its parameters continuously to live on-chain conditions." />
            <ProblemCard n="05" title="Collateral sits idle." body="When a trader or borrower deposits margin, that capital earns nothing while it waits. This is pure capital inefficiency that no existing protocol has resolved at the protocol level." />
            <ProblemCard n="06" title="Juncta addresses all five." body="One unified protocol built from scratch in Move. The DLMM and the lending market share a single liquidity layer. Capital flows between them automatically, directed by market conditions, without the LP doing anything." />
          </div>
        </section>

        {/* PULL QUOTE */}
        <section className="border-t border-b border-[#EEEEEE] py-14 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8">
            <p className="font-normal leading-[1.1] text-center" style={{ fontFamily: SERIF, fontSize: 'clamp(24px,5vw,48px)', letterSpacing: '-0.02em', color: INK }}>
              "The DEX already knows precisely{' '}
              <span style={{ fontStyle: 'italic', color: TEAL }}>which capital is not earning fees. Juncta puts it to work."</span>
            </p>
            <p className="text-center text-xs tracking-[0.15em] uppercase mt-6" style={{ color: SLATE }}>
              Core design principle · Unified Liquidity Layer
            </p>
          </div>
        </section>

        {/* [03] DESIGN APPROACH */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <SectionBlock number="03" label="Design approach" sideNote="Thinking">
            <SectionHeading>
              Making a{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>three-layered protocol</span>{' '}
              feel like one product.
            </SectionHeading>
            <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              <p>Juncta's engine is doing six things simultaneously: tracking bins, routing capital, charging volatility-adaptive fees, managing collateral, monitoring health factors, and scheduling soft liquidations. Surfacing any of that directly would overwhelm the LP. Hiding all of it would make the protocol feel like a black box.</p>
              <p>The design resolves this by treating every screen as one of three progressive disclosure layers. The outer layer is action-oriented — one clear primary verb per page (Add LP, Borrow, Deposit Collateral). The middle layer is state-aware. The inner layer is configuration, tucked behind deliberate clicks.</p>
            </div>
          </SectionBlock>
        </section>

        {/* APP SCREENSHOTS */}
        <div className="w-full bg-white">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 py-8 flex flex-col gap-5 md:gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
              <img src="/Provide Liquidity.svg" alt="Provide Liquidity screen"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
                onError={e => { e.currentTarget.style.display = 'none' }} />
              <img src="/Deposit collateral.svg" alt="Deposit Collateral screen"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
                onError={e => { e.currentTarget.style.display = 'none' }} />
            </div>
            <img src="/Borrow.svg" alt="Borrow screen"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
              onError={e => { e.currentTarget.style.display = 'none' }} />
          </div>
        </div>

        {/* [04] NEW POOL */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <SectionBlock number="04" label="New Pool">
            <SectionHeading>
              Pool creation that{' '}
              <span style={{ fontStyle: 'italic', color: TEAL }}>teaches while it configures.</span>
            </SectionHeading>
            <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              <p>Three pool types (Stable, Standard, Volatile) map to bin step presets and base fee floors. Distribution strategy — Spot, Curve, Bid-Ask, Wide — previews the bin shape live as the LP selects it, with IL exposure labeled directly on each tile.</p>
            </div>
          </SectionBlock>
        </section>

        <div className="mx-auto max-w-[1440px] px-5 md:px-8 pb-6">
          <img src="/New Pool.png" alt="New Pool screen"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
            onError={e => { e.currentTarget.style.display = 'none' }} />
        </div>

        {/* [05] PROVIDE LIQUIDITY */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <SectionBlock number="05" label="Provide Liquidity">
            <SectionHeading>
              Live bin state as{' '}
              <span style={{ fontStyle: 'italic', color: TEAL }}>the source of truth.</span>
            </SectionHeading>
            <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              <p>The right rail is the focal point — a real-time bin chart that highlights the active bin, lending bins, and idle bins in distinct states, updating every 3 seconds. Pool APY is broken into its three underlying sources (trading fees, lending yield, combined APY) so LPs can see exactly where their yield is coming from.</p>
            </div>
          </SectionBlock>
        </section>

        <div className="mx-auto max-w-[1440px] px-5 md:px-8 pb-12 md:pb-16">
          <img src="/Provide Liquidity.png" alt="Provide Liquidity screen"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
            onError={e => { e.currentTarget.style.display = 'none' }} />
        </div>

        {/* [06] BORROW */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 pt-6 pb-10 md:pb-16">
          <SectionBlock number="06" label="Borrow · Two states">
            <SectionHeading>
              Borrow that grows with{' '}
              <span style={{ fontStyle: 'italic', color: TEAL }}>the user's position.</span>
            </SectionHeading>
            <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              <p>Two dashboard states for the same surface. The left is the entry point for a first-time borrower — a clean lending market table with utilisation bars, adaptive-rate badges, and no collateral required to look. The right is the active-position view — Health Factor, collateral deposit, liquidation stages (Healthy, Soft, Accelerate, Full), all visible in one scroll.</p>
            </div>
          </SectionBlock>
        </section>

        <div className="mx-auto max-w-[1440px] px-5 md:px-8 pb-10 md:pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            <img src="/Deposit collateral.png" alt="Deposit Collateral — entry state"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', objectFit: 'cover' }}
              onError={e => { e.currentTarget.style.display = 'none' }} />
            <img src="/Borrow - Active position.png" alt="Borrow — active position state"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', objectFit: 'cover' }}
              onError={e => { e.currentTarget.style.display = 'none' }} />
          </div>
        </div>

        {/* [07] PORTFOLIO */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-8">
          <SectionBlock number="07" label="Portfolio">
            <SectionHeading>
              One page for{' '}
              <span style={{ fontStyle: 'italic', color: TEAL }}>every yield source.</span>
            </SectionHeading>
            <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              <p>The Portfolio surface is where the three-layer architecture reveals itself end-to-end. Total Net Worth, Wallet Tokens, LP Positions, Borrowed, and Yield Earned sit across the top in parallel. Below, the allocation donut shows capital distribution by value, and each LP position shows bin range, fees, and whether it's currently active or routed to the lending market.</p>
            </div>
          </SectionBlock>
        </section>

        {/* [08] DESIGN SYSTEM */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <SectionBlock number="08" label="Design system">
            <SectionHeading>
              A system built for{' '}
              <span style={{ fontStyle: 'italic', color: TEAL }}>dense data</span>
              {', dark rooms,'}
              <br className="hidden md:block" />
              {' and long sessions.'}
            </SectionHeading>
          </SectionBlock>
        </section>

        <div className="mx-auto max-w-[1440px] px-5 md:px-8 pt-4 md:pt-16">
          <img src="/Design system.png" alt="Juncta design system — palette, typography, components"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }}
            onError={e => { e.currentTarget.style.display = 'none' }} />
        </div>

        <Separator />

        {/* [09] OUTCOME */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 pb-12 md:pb-16">
          <SectionBlock number="09" label="Outcome">
            <SectionHeading large>
              What <span style={{ fontStyle: 'italic', color: TEAL }}>shipped.</span>
            </SectionHeading>
          </SectionBlock>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-12 md:px-16 mt-4">
            {[
              { stat: <><span>35</span><span style={{ color: TEAL }}>/35</span></>, title: 'Screens delivered', body: 'Pools, New Pool, Swap, Provide Liquidity, Borrow, Monitor, Portfolio. Shipped as production-ready.' },
              { stat: <><span>6</span><span style={{ fontStyle: 'italic', color: TEAL }}>×</span></>, title: 'Empty-state variants', body: 'Every surface has a first-use empty state with shimmer skeleton UI, so new LPs never see a broken-feeling dashboard before connecting a wallet.' },
              { stat: <><span>1</span><span style={{ fontStyle: 'italic', color: TEAL }}>st</span></>, title: 'DLMM on Move', body: 'Juncta is the first dynamic liquidity market maker designed for a Move chain, and the first anywhere to integrate lending yield into inactive bin capital natively.' },
            ].map(({ stat, title, body }) => (
              <div key={title} className="flex flex-col gap-4 border-[#eeeeee] border-[0.65px] border-solid px-6 md:px-7 py-7 md:py-8 rounded-2xl">
                <p className="font-normal leading-none tracking-tight" style={{ fontFamily: SERIF, fontSize: 'clamp(44px,5vw,72px)', color: INK }}>{stat}</p>
                <p className="text-sm font-medium" style={{ color: INK }}>{title}</p>
                <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NEXT PROJECT */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 pb-20 md:pb-24">
          <div className="border-t border-[#EEEEEE] pt-14 md:pt-16 flex flex-col items-center text-center gap-6 md:gap-8">
            <p className="text-xs tracking-[0.15em] uppercase" style={{ color: SLATE }}>Next project</p>
            <Link
              to="/projects/cargolandfood"
              className="font-normal leading-[0.95] tracking-[-0.03em] underline underline-offset-8 decoration-2 hover:opacity-80 transition-opacity break-words text-center"
              style={{ fontFamily: SERIF, fontSize: 'clamp(40px,9vw,120px)', color: '#F25C05' }}
            >
              Cargolandfood.
            </Link>
            <Link
              to="/projects/cargolandfood"
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