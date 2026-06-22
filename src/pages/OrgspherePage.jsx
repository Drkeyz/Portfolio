// import { Link } from 'react-router-dom'
// import { useEffect } from 'react'
// import Footer from '../components/Footer'

// /* ─────────────────────────────────────────────────────────────
//    DESIGN TOKENS
// ───────────────────────────────────────────────────────────── */
// const GREEN = '#16a34a'
// const GREEN_LIGHT = '#ecfdf5'
// const GREEN_BORDER = '#bbf7d0'
// const RED = '#dc2626'
// const RED_LIGHT = '#fef2f2'
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
//           <span className="h-2 w-2 rounded-full" style={{ background: GREEN }} />
//           Case Study 03
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
//     <p className="text-sm font-medium mb-8 mt-3" style={{ color: GREEN }}>
//       {number && <span>[{number}]</span>}{' '}{children}
//     </p>
//   )
// }

// /* ─────────────────────────────────────────────────────────────
//    MAIN PAGE
// ───────────────────────────────────────────────────────────── */
// export default function OrgspherePage() {
//   useEffect(() => { window.scrollTo(0, 0) }, [])

//   return (
//     <>
//       <style>{`
//         .org-card {
//           border: 1.5px solid #EEEEEE;
//         }
//         .org-card:hover {
//           border-color: #16a34a;
//         }
//         .process-card {
//           border: 1.5px solid #EEEEEE;
//           transition: border-color 0.2s;
//         }
//         .process-card:hover {
//           border-color: #08783D;
//         }
//       `}</style>

//       <div className="min-h-screen bg-white" style={{ color: INK }}>
//         <Navbar />

//         {/* ── META BAR ──────────────────────────────────────── */}
//         <div
//           className="mx-auto max-w-[1440px] px-8 flex items-center justify-between border-b border-[#EEEEEE]"
//           style={{ paddingTop: '64px', paddingBottom: '16px' }}
//         >
//           <span className="text-xs tracking-[0.1em] uppercase" style={{ color: SLATE }}>
//             PROJECT&nbsp;<span className="font-semibold" style={{ color: INK }}>/ ORGSPHERE</span>
//           </span>
//           <span className="text-xs tracking-[0.1em] uppercase" style={{ color: SLATE }}>
//             SCOPE&nbsp;<span className="font-semibold" style={{ color: INK }}>/ PRODUCT DESIGN, MOBILE HR PLATFORM</span>
//           </span>
//           <span className="text-xs tracking-[0.1em] uppercase" style={{ color: SLATE }}>2025</span>
//         </div>

//         {/* ── HERO ──────────────────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 pt-16 pb-8">
//           <Link to="/#projects" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-8">
//             <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
//             Back
//           </Link>
//           <p className="text-sm tracking-[0.12em] mb-8" style={{ color: GREEN }}>
//             03 — MOBILE · ENTERPRISE HR PLATFORM
//           </p>

//           <div className="mb-10 text-[64px]">
//             <h1
//               className="leading-[1] tracking-[-0.03em] block"
//               style={{ fontFamily: SERIF, color: INK }}
//             >
//               Orgsphere
//             </h1>
//             <p
//               className="leading-[1.1] block"
//               style={{
//                 fontFamily: SERIF,
//                 // fontSize: 'clamp(48px,6.5vw,96px)',
//                 fontStyle: 'italic',
//                 color: SLATE,
//                 letterSpacing: '-0.02em',
//               }}
//             >
//               Designed with intention,
//             </p>
//             <p
//               className="leading-[1] tracking-[-0.03em] block"
//               style={{ fontFamily: SERIF, color: INK }}
//             >
//               built for people.
//             </p>
//           </div>

//           <div className="max-w-xl">
//             <p className="text-lg leading-relaxed" style={{ color: SLATE }}>
//               A mobile HR management platform designed to empower employees with self-service
//               tools for leave requests, expense tracking, performance appraisals, and company
//               activities — all from a single, intuitive application.
//             </p>
//           </div>
//         </section>

//         {/* ── ROLE / MODULES / AUDIENCE ROW ─────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 pb-16">
//           <div style={{ borderTop: '1px solid #EEEEEE', paddingTop: '32px' }}>
//             <div className="flex justify-between gap-12">
//               <div>
//                 <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: SLATE }}>ROLE</p>
//                 <p className="text-sm font-medium leading-relaxed" style={{ color: INK }}>
//                   Product designer<br />Visual systems
//                 </p>
//               </div>
//               <div>
//                 <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: SLATE }}>MODULES</p>
//                 <p className="text-sm font-medium leading-relaxed" style={{ color: INK }}>
//                   5 core modules<br />40+ screens
//                 </p>
//               </div>
//               <div>
//                 <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: SLATE }}>AUDIENCE</p>
//                 <p className="text-sm font-medium leading-relaxed" style={{ color: INK }}>
//                   3 user roles<br />Single application
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── [01] OVERVIEW ─────────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-[52px]">
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
//                 From paper-heavy HR{' '}
//                 <span style={{ fontStyle: 'italic', color: SLATE }}>to a single app.</span>
//               </h2>
//               <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 <p>
//                   We wanted to replace fragmented, paper-heavy HR processes with a modern digital
//                   workspace — one that <strong style={{ color: INK }}>reduces administrative friction</strong> and
//                   puts employees in control of their professional lives. Leave requests lived in emails.
//                   Expense claims travelled on paper. Performance reviews surfaced once a year, opaque
//                   and disconnected from the day-to-day work. Company events lacked a centralised hub,
//                   and turnout suffered for it.
//                 </p>
//                 <p>
//                   The opportunity was to design a{' '}
//                   <em style={{ color: GREEN }}>single mobile application</em>{' '}
//                   that consolidates these workflows under one roof — and to do it in a way that feels
//                   light, transparent, and human. Not enterprise software wearing a friendly face, but
//                   a workspace built around the employee first, with managers and HR administrators
//                   served by the same shared logic.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── [02] PROBLEM & SOLUTION ───────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start mb-12">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="02">Problem &amp; solution</SectionLabel>
//             </div>
//             <h2
//               className="font-normal leading-[1] tracking-[-0.03em]"
//               style={{ fontFamily: SERIF, fontSize: 'clamp(36px,4vw,56px)' }}
//             >
//               <span style={{ color: INK }}>Four broken patterns. </span>
//               <span style={{ fontStyle: 'italic', color: SLATE }}>Four direct fixes.</span>
//             </h2>
//           </div>

//           {/* Two-column problem / solution box */}
//           <div
//             style={{
//               // border: '1.5px solid #eeeeee',
//               // borderRadius: '12px',
//               overflow: 'hidden',
//               display: 'grid',
//               gap: "24px",
//               gridTemplateColumns: '1fr 1fr',
//             }}
//           >
//             {/* The problem */}
//             <div 
//               className='rounded-3xl border border-solid border-[#EC003F33]/20' 
//               style={{ background: RED_LIGHT, padding: '36px' }}>
//               <h3
//                 className="text-2xl font-semibold mb-8"
//                 style={{ color: RED, fontFamily: SERIF }}
//               >
//                 The problem
//               </h3>
//               <div className="flex flex-col gap-6">
//                 {[
//                   { n: '01', text: 'Employees relied on emails and paper forms to apply for leave, submit expenses, and complete appraisals.' },
//                   { n: '02', text: 'No visibility into request statuses — employees had to physically follow up with HR or managers.' },
//                   { n: '03', text: 'Performance reviews were opaque, with no self-tracking of KPIs or manager feedback in real time.' },
//                   { n: '04', text: 'Company events and training activities had no centralised hub, leading to low attendance.' },
//                 ].map(({ n, text }) => (
//                   <div key={n} className="flex gap-4 items-start">
//                     <span className="text-sm font-bold shrink-0 mt-0.5" style={{ color: RED }}>{n}</span>
//                     <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{text}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* The solution */}
//             <div 
//               className='rounded-3xl border border-solid border-[#08783D33]/20' 
//               style={{ background: GREEN_LIGHT, padding: '36px' }}>
//               <h3
//                 className="text-2xl font-semibold mb-8"
//                 style={{ color: GREEN, fontFamily: SERIF }}
//               >
//                 The solution
//               </h3>
//               <div className="flex flex-col gap-6">
//                 {[
//                   { n: '01', text: 'A unified mobile app where employees apply for leave, track balances, and view approval chains instantly.' },
//                   { n: '02', text: 'Real-time status tracking with push notifications for every request update and approval milestone.' },
//                   { n: '03', text: 'A transparent KPI module with quarterly goals, self ratings, manager scores, and comment threads.' },
//                   { n: '04', text: 'An activities hub listing company events with details, venues, and notes — driving engagement.' },
//                 ].map(({ n, text }) => (
//                   <div key={n} className="flex gap-4 items-start">
//                     <span className="text-sm font-bold shrink-0 mt-0.5" style={{ color: GREEN }}>{n}</span>
//                     <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{text}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── [03] TARGET AUDIENCE ──────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start mb-12">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="03">Target audience</SectionLabel>
//               <p className="text-sm mt-4" style={{ color: SLATE }}>Who it's for</p>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-[1.1] mb-6"
//                 style={{
//                   fontFamily: SERIF,
//                   fontSize: 'clamp(36px,4vw,58px)',
//                   letterSpacing: '-0.02em',
//                   color: INK,
//                 }}
//               >
//                 One app,{' '}
//                 <span style={{ fontStyle: 'italic', color: SLATE }}>three distinct lenses</span>
//               </h2>
//               <p className="text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 The app serves three distinct user groups within an organisation, each with unique pain
//                 points and goals. Designing for all three on a single codebase meant finding shared
//                 component patterns — but tuning the information density, primary actions, and approval
//                 flows differently for each role.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
//             {[
//               {
//                 iconBg: '#d1fae5',
//                 iconColor: '#059669',
//                 icon: (
//                   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
//                     <circle cx="12" cy="7" r="4" />
//                   </svg>
//                 ),
//                 name: 'Regular employees',
//                 badge: 'PRIMARY USER · 78% OF TRAFFIC',
//                 desc: 'Apply for leave, submit expenses, track KPIs, and stay informed about company events. They want self-service and transparency — to know exactly where every request stands without asking.',
//               },
//               {
//                 iconBg: '#dbeafe',
//                 iconColor: '#2563eb',
//                 icon: (
//                   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//                     <circle cx="9" cy="7" r="4" />
//                     <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//                     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//                   </svg>
//                 ),
//                 name: 'Line Managers',
//                 badge: 'APPROVERS · TIER 1',
//                 desc: 'Review and approve leave and expense requests, score direct reports on KPIs, and provide performance feedback. They need at-a-glance pending queues and one-tap approval.',
//               },
//               {
//                 iconBg: '#fce7f3',
//                 iconColor: '#db2777',
//                 icon: (
//                   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//                     <line x1="16" y1="2" x2="16" y2="6" />
//                     <line x1="8" y1="2" x2="8" y2="6" />
//                     <line x1="3" y1="10" x2="21" y2="10" />
//                   </svg>
//                 ),
//                 name: 'HR administrators',
//                 badge: 'APPROVERS · TIER 2',
//                 desc: 'Final-tier approvals on leave and expense requests, oversee performance review cycles, and maintain employee records. They see the full organisation, not just one team.',
//               },
//             ].map(({ iconBg, iconColor, icon, name, badge, desc }) => (
//               <div
//                 key={name}
//                 className="org-card rounded-2xl p-8 flex flex-col gap-5 transition-colors duration-200"
//               >
//                 <div
//                   className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
//                   style={{ backgroundColor: iconBg, color: iconColor }}
//                 >
//                   {icon}
//                 </div>
//                 <div className="flex flex-col gap-1">
//                   <h3 className="text-lg font-semibold" style={{ color: INK }}>{name}</h3>
//                   <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: SLATE }}>{badge}</span>
//                 </div>
//                 <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ── [04] PROCESS ──────────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start mb-12">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="04">Process</SectionLabel>
//               <p className="text-sm mt-4" style={{ color: SLATE }}>How I worked</p>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-[1.1] mb-6"
//                 style={{
//                   fontFamily: SERIF,
//                   fontSize: 'clamp(36px,4vw,58px)',
//                   letterSpacing: '-0.02em',
//                   color: INK,
//                 }}
//               >
//                 Five stages,{' '}
//                 <span style={{ fontStyle: 'italic', color: SLATE }}>one continuous loop</span>
//               </h2>
//               <p className="text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 Research started with stakeholder interviews with HR leads at Chams Access, employee
//                 surveys, and a competitive audit of existing HR apps like BambooHR and Keka. From
//                 there, the work moved through a deliberate five-stage cadence — each one validating
//                 the last before the next began.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-5 gap-4">
//             {[
//               {
//                 n: '01',
//                 title: 'Research',
//                 body: 'Stakeholder interviews, employee surveys, and a competitive audit of BambooHR and Keka.',
//                 active: false,
//               },
//               {
//                 n: '02',
//                 title: 'Architecture',
//                 body: 'Mapped core user flows for leave, expense, KPI, and activity modules. Defined navigation hierarchy.',
//                 active: false,
//               },
//               {
//                 n: '03',
//                 title: 'Wireframing',
//                 body: 'Low-fidelity wireframes for all key screens, tested internally to validate layout assumptions.',
//                 active: false,
//               },
//               {
//                 n: '04',
//                 title: 'Visual Design',
//                 body: 'High-fidelity Figma mockups with the green palette, card-based UI, and a consistent component library.',
//                 active: false,
//               },
//               {
//                 n: '05',
//                 title: 'Handoff',
//                 body: 'Interactive Figma prototypes for stakeholder review. Developer handoff with annotated specs and a shared design system.',
//                 active: false,
//               },
//             ].map(({ n, title, body, active }) => (
//               <div
//                 key={n}
//                 className="process-card"
//                 style={{
//                   borderRadius: '16px',
//                   padding: '24px',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: '12px',
//                 }}
//               >
//                 <span className="text-sm font-medium" style={{ color: active ? GREEN : SLATE }}>{n}</span>
//                 <h3 className="text-base font-semibold" style={{ color: INK }}>{title}</h3>
//                 <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{body}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ── PULL QUOTE ────────────────────────────────────── */}
//         <section
//           style={{
//             background: GREEN_LIGHT,
//             borderTop: `1px solid ${GREEN_BORDER}`,
//             borderBottom: `1px solid ${GREEN_BORDER}`,
//           }}
//           className="py-24"
//         >
//           <div className="mx-auto max-w-[1440px] px-8">
//             <p
//               className="font-normal leading-[1.2] text-center"
//               style={{
//                 fontFamily: SERIF,
//                 fontSize: 'clamp(28px,3.5vw,46px)',
//                 letterSpacing: '-0.02em',
//                 color: INK,
//                 maxWidth: '820px',
//                 margin: '0 auto',
//               }}
//             >
//               "Once you learn how leave works,{' '}
//               <span style={{ color: GREEN }}>you already know</span>{' '}
//               how expenses work. The same pattern carries you through every module."
//             </p>
//             <p className="text-center text-xs tracking-[0.15em] uppercase mt-8" style={{ color: SLATE }}>
//               Core design principle · Consistency first
//             </p>
//           </div>
//         </section>

//         {/* ── [05] ONBOARDING ─────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="05">Onboarding</SectionLabel>
//               <p className="text-sm mt-4" style={{ color: SLATE }}></p>
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
//                 Three steps.{' '}
//                 <span style={{ fontStyle: 'italic', color: SLATE }}>No friction.</span>
//               </h2>
//               <p className="text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 A three-step walkthrough introduces core features before sign-in, building user
//                 confidence and reducing first-session drop-off. Each slide pairs a single value
//                 proposition with an in-product preview, so the user sees what the app actually looks
//                 like before they're asked to log in.
//               </p>
//               {/* <div className="mt-10 w-full flex justify-center bg-red-500">
//                 <img
//                   src="/Phones.png"
//                   alt="Juncta onboarding — value props, sign up, and address selection"
//                   style={{ maxWidth: '800px', width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
//                   onError={e => { e.currentTarget.style.display = 'none' }}
//                 />
//               </div> */}
//             </div>
//           </div>
//           <div className="mt-10 w-full flex justify-center">
//             <img
//               src="/Phones.png"
//               alt="Juncta onboarding — value props, sign up, and address selection"
//               style={{ maxWidth: '800px', width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
//               onError={e => { e.currentTarget.style.display = 'none' }}
//             />
//           </div>
//         </section>

//         {/* ── [06] HOME DASHBOARD ──────────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-8">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="06">Home Dashboard</SectionLabel>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-none tracking-[-0.03em] mb-8"
//                 style={{ fontFamily: SERIF, fontSize: 'clamp(40px,5vw,72px)', color: INK }}
//               >
//                 An instant snapshot{' '}
//                 <span style={{ fontStyle: 'italic', color: '#4A5565' }}>of the workday.</span>
//               </h2>
//               <p className="text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 The central hub gives employees an instant snapshot of their workday —
//                 leave balances, pending requests, upcoming activities, and key metrics at a
//                 glance. A green header card surfaces the four most important numbers
//                 (Leave Balance, Expense Requests, Total Training, Appraisal Form progress).
//                 Recent leave requests show inline with status badges. The Activities feed
//                 lists upcoming and completed company events with avatars and timestamps.
//                 A personalised greeting builds familiarity and makes the experience feel human.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Full-bleed/full-width image section for [06] Home Dashboard */}
//         <div className="w-full bg-[#E8F8F2] py-12 flex justify-center overflow-hidden mb-16">
//           <img
//             src="/Section.png"
//             alt="Home Dashboard Screens"
//             style={{ width: '100%', height: 'auto', display: 'block' }}
//             onError={e => { e.currentTarget.style.display = 'none' }}
//           />
//         </div>

//         {/* ── [07] LEAVE MANAGEMENT ─────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-8">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="07">Leave Management</SectionLabel>
//               <p className="text-sm mt-4" style={{ color: SLATE }}></p>
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
//                 Multi-level approvals,{' '}
//                 <span style={{ fontStyle: 'italic', color: SLATE }}>all in real time.</span>
//               </h2>
//               <p className="text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 Employees view balances, apply for leave, and track multi-level approval status
//                 — replacing back-and-forth emails with a transparent, real-time system.
//                 Four colour-coded summary cards at the top give a quick balance scan.
//                 Filter tabs (All, Pending, Approved, Cancelled) reduce cognitive load.
//                 The detail view shows the full approval chain — Line Manager and HR levels,
//                 with individual statuses for each. Status badges use semantic colours: green
//                 for approved, grey for pending, red for cancelled.
//               </p>
//             </div>
//           </div>
//           <div className="w-full flex justify-center mt-10">
//             <img
//               src="/Leave.png"
//               alt="Leave management — all leaves, leave request and leave request details"
//               style={{ maxWidth: '800px', width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
//               onError={e => { e.currentTarget.style.display = 'none' }}
//             />
//           </div>
//         </section>

//         {/* ── [08] EXPENSE MANAGEMENT ──────────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start mb-10">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="08">Expense Management</SectionLabel>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-none tracking-[-0.03em] mb-8"
//                 style={{ fontFamily: SERIF, fontSize: 'clamp(40px,5vw,72px)', color: INK }}
//               >
//                 The same pattern{' '}
//                 <span style={{ fontStyle: 'italic', color: '#4A5565' }}>in a different module.</span>
//               </h2>
//               <p className="text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 Submitting and tracking expense claims follows the exact same intuitive
//                 pattern as leave — maintaining UI consistency and reducing the learning
//                 curve across modules. Summary cards show total expenses, approved count,
//                 pending, and cancelled at a glance. Each request shows date range, expense
//                 type, and amount requested without tapping in. The detail view mirrors the
//                 leave structure: description, approval levels, and manager comments. Once
//                 you learn one module, you already know the next.
//               </p>
//             </div>
//           </div>
//           <div className="w-full flex justify-center mt-10">
//             <img
//               src="/Expense.png"
//               alt="Expense management mockup screens"
//               style={{ maxWidth: '800px', width: '100%', height: 'auto', display: 'block', borderRadius: '12px', margin: '0 auto' }}
//               onError={e => { e.currentTarget.style.display = 'none' }}
//             />
//           </div>
//         </section>

//         {/* ── [09] PERFORMANCE MANAGEMENT ───────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start mb-8">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="09">Performance Management</SectionLabel>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-none tracking-[-0.03em] mb-8"
//                 style={{ fontFamily: SERIF, fontSize: 'clamp(40px,5vw,72px)', color: INK }}
//               >
//                 Quarterly KPIs,{' '}
//                 <span style={{ fontStyle: 'italic', color: '#4A5565' }}>made transparent.</span>
//               </h2>
//               <p className="text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 A quarterly KPI tracking system that brings transparency to performance reviews —
//                 employees can self-assess, view manager scores, and track progress across multiple
//                 sections. The flow walks through all four states: <strong style={{ color: INK }}>All KPIs</strong> (quarterly overview with progress per
//                 quarter), <strong style={{ color: INK }}>KPI Details</strong> (Section A objectives, Section B skills & attitude, weighted 80/20),
//                 <strong style={{ color: INK }}>Skills Rating</strong> (1–5 star scale across knowledge of work and personal development),
//                 and <strong style={{ color: INK }}>Completed Review</strong> (manager's score alongside the employee's, with comment threads
//                 from both sides).
//               </p>
//             </div>
//           </div>
//           <div className="w-full flex justify-center">
//             <img
//               src="/Performance.png"
//               alt="Performance management mockup screens"
//               style={{ maxWidth: '1000px', width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
//               onError={e => { e.currentTarget.style.display = 'none' }}
//             />
//           </div>
//         </section>

//         {/* ── [10] DESIGN SYSTEM ────────────────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start mb-12">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="10">Design system</SectionLabel>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-none tracking-[-0.03em] mb-4"
//                 style={{ fontFamily: SERIF, fontSize: 'clamp(40px,5vw,72px)', color: INK }}
//               >
//                 A system that{' '}
//                 <span style={{ fontStyle: 'italic', color: '#4A5565' }}>reads at a glance.</span>
//               </h2>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8 pt-8 border-t border-[#EEEEEE]">
//             {/* Color Palette Column */}
//             <div>
//               <p className="text-xs font-bold tracking-[0.15em] text-[#4a5565] mb-8">// COLOR PALETTE</p>
//               <div className="flex flex-col gap-6">
//                 {[
//                   { name: 'Primary', value: '#08783D · primary', color: '#08783D' },
//                   { name: 'Accent', value: '#E5F8EE', color: '#E5F8EE' },
//                   { name: 'Warning', value: '#B54708 · attention', color: '#B54708' },
//                   { name: 'Destructive', value: '#F04438', color: '#F04438' },
//                 ].map(({ name, value, color }) => (
//                   <div key={name} className="flex items-center gap-4">
//                     <div className="w-10 h-10 rounded-lg shrink-0 shadow-sm border border-[#E5E7EB]" style={{ backgroundColor: color }} />
//                     <div className="flex flex-col">
//                       <span className="text-sm font-semibold" style={{ color: INK }}>{name}</span>
//                       <span className="text-xs font-mono" style={{ color: SLATE }}>{value}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Typography & Spacing Column */}
//             <div>
//               <p className="text-xs font-bold tracking-[0.15em] text-[#4a5565] mb-8">// TYPOGRAPHY & SPACING</p>
//               <div className="flex flex-col gap-8">
//                 <div>
//                   <h4 className="text-lg font-semibold mb-1" style={{ color: INK }}>Satoshi Display</h4>
//                   <p className="text-[10px] font-mono tracking-wider" style={{ color: SLATE }}>CLEAN · LEGIBLE · MOBILE FIRST</p>
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold mb-1" style={{ color: GREEN }}>8pt · 16pt · 24pt</h4>
//                   <p className="text-[10px] font-mono tracking-wider" style={{ color: SLATE }}>8PT GRID · CONSISTENT VERTICAL RHYTHM</p>
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold mb-1" style={{ color: GREEN }}>Card-based UI</h4>
//                   <p className="text-[10px] font-mono tracking-wider" style={{ color: SLATE }}>SUBTLE SHADOWS · PILL BADGES · ROUNDED CTAS</p>
//                 </div>
//               </div>
//             </div>

//             {/* Design Principles Column */}
//             <div>
//               <p className="text-xs font-bold tracking-[0.15em] text-[#4a5565] mb-8">// DESIGN PRINCIPLES</p>
//               <div className="flex flex-col gap-6">
//                 {[
//                   { title: 'Consistency first', desc: 'Shared patterns across Leave, Expense, and KPI modules.' },
//                   { title: 'Progressive disclosure', desc: 'Summary cards on listing pages, full details on tap.' },
//                   { title: 'Status clarity', desc: 'Semantic colour badges make statuses scannable at a glance.' },
//                   { title: 'Minimal friction', desc: 'Bare-minimum fields, employer-provisioned credentials, single-tap actions.' },
//                 ].map(({ title, desc }) => (
//                   <div key={title} className="flex flex-col gap-1">
//                     <h4 className="text-sm font-semibold" style={{ color: INK }}>{title}</h4>
//                     <p className="text-xs leading-relaxed" style={{ color: SLATE }}>{desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── [11] MORE SCREENS ─────────────────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start mb-10">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="11">More screens</SectionLabel>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-none tracking-[-0.03em] mb-8"
//                 style={{ fontFamily: SERIF, fontSize: 'clamp(40px,5vw,72px)', color: INK }}
//               >
//                 40+ screens.{' '}
//                 <span style={{ fontStyle: 'italic', color: '#4A5565' }}>One coherent system</span>
//               </h2>
//               <p className="text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 Forgotten password recovery, verification codes, expense detail, profile management,
//                 performance review, KPI breakdown, account settings — every secondary surface ships
//                 from the same component library. Cards stay consistent, status badges read the same
//                 across modules, and the green primary action sits in the same place on every screen that
//                 needs it.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Full-width image for More Screens */}
//         <div className="w-full flex justify-center overflow-hidden mb-16">
//           <img
//             src="/More screens.png"
//             alt="More Screens Showcase"
//             style={{ width: '100%', height: 'auto', display: 'block' }}
//             onError={e => { e.currentTarget.style.display = 'none' }}
//           />
//         </div>

//         {/* ── [12] OUTCOME ─────────────────────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 py-16 border-t border-[#EEEEEE]">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start mb-12">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="12">Outcome</SectionLabel>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-none tracking-[-0.03em] mb-4"
//                 style={{ fontFamily: SERIF, fontSize: 'clamp(40px,5vw,72px)', color: INK }}
//               >
//                 What{' '}
//                 <span style={{ fontStyle: 'italic', color: '#4A5565' }}>shipped.</span>
//               </h2>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//             {[
//               {
//                 metric: '5×',
//                 title: 'Modules unified',
//                 desc: 'Onboarding, Leave, Expense, Performance, and Activities — all in one app, all built from a single component library and design system.',
//               },
//               {
//                 metric: '3/3',
//                 title: 'User roles served',
//                 desc: 'Regular employees, line managers, and HR administrators — each gets the same shared base patterns with role-tuned approval flows and information density.',
//               },
//               {
//                 metric: '40+',
//                 title: 'Production screens',
//                 desc: 'Including primary flows, edge states (forgotten password, verification, empty states), and the complete settings & profile management surface.',
//               },
//             ].map(({ metric, title, desc }) => (
//               <div
//                 key={title}
//                 className="org-card rounded-2xl p-8 flex flex-col gap-4 transition-colors duration-200"
//               >
//                 <span className="text-5xl font-normal leading-none" style={{ fontFamily: SERIF, color: GREEN }}>
//                   {metric}
//                 </span>
//                 <h3 className="text-lg font-bold" style={{ color: INK }}>
//                   {title}
//                 </h3>
//                 <p className="text-sm leading-relaxed" style={{ color: SLATE }}>
//                   {desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ── NEXT PROJECT ──────────────────────────────────── */}
//         <section className="mx-auto max-w-[1440px] px-8 pb-24 border-t border-[#EEEEEE] pt-16">
//           <div className="flex flex-col items-center text-center gap-8">
//             <p className="text-xs font-mono tracking-[0.15em] uppercase text-[#4a5565]">
//               NEXT CASE STUDY
//             </p>
//             <div>
//               <Link
//                 to="/projects/helpnest"
//                 className="font-normal leading-[0.95] tracking-[-0.03em] whitespace-nowrap hover:opacity-80 transition-opacity underline"
//                 style={{
//                   fontFamily: SERIF,
//                   fontSize: 'clamp(52px,9vw,120px)',
//                   background: 'linear-gradient(to right, #3b82f6, #10b981)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                 }}
//               >
//                 Helpnest.
//               </Link>
//             </div>
//             <Link
//               to="/projects/helpnest"
//               className="flex items-center gap-2 rounded-full bg-[#0a0c0d] px-6 py-3 text-sm font-medium text-white hover:bg-[#4a5565] transition-colors"
//             >
//               View all projects
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M7 17L17 7M17 7H7M17 7v10" />
//               </svg>
//             </Link>
//           </div>
//         </section>

//         <Footer />
//       </div>
//     </>
//   )
// }


import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../components/Footer'

/* ─── Design tokens ─────────────────────────────────────────── */
const GREEN        = '#16a34a'
const GREEN_LIGHT  = '#ecfdf5'
const GREEN_BORDER = '#bbf7d0'
const RED          = '#dc2626'
const RED_LIGHT    = '#fef2f2'
const INK          = '#0a0c0d'
const SLATE        = '#4a5565'
const SERIF        = '"Instrument Serif", Georgia, serif'

/* ─── Navbar ────────────────────────────────────────────────── */
function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#f3f4f6]">
      <div className="mx-auto flex items-center justify-between px-5 md:px-8 py-3">
        <Link to="/" className="rounded-full bg-[#0a0c0d] px-4 py-1.5 text-sm font-medium text-white hover:bg-[#4a5565] transition-colors">
          Oladimeji
        </Link>
        <div className="hidden md:flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-sm text-[#4a5565]">
          <span className="h-2 w-2 rounded-full" style={{ background: GREEN }} />
          Case Study 03
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

/* ─── Section label ─────────────────────────────────────────── */
function SectionLabel({ number, children }) {
  return (
    <p className="text-sm font-medium mb-8 mt-3" style={{ color: GREEN }}>
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

/* ─── Main page ─────────────────────────────────────────────── */
export default function OrgspherePage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <style>{`
        .org-card { border: 1.5px solid #EEEEEE; }
        .org-card:hover { border-color: #16a34a; }
        .process-card { border: 1.5px solid #EEEEEE; transition: border-color 0.2s; }
        .process-card:hover { border-color: #08783D; }
      `}</style>

      <div className="min-h-screen bg-white" style={{ color: INK }}>
        <Navbar />

        {/* ── META BAR ──────────────────────────────────────────── */}
        <div
          className="mx-auto px-5 md:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-[#EEEEEE]"
          style={{ paddingTop: '64px', paddingBottom: '16px' }}
        >
          <span className="text-xs tracking-[0.1em] uppercase" style={{ color: SLATE }}>
            PROJECT&nbsp;<span className="font-semibold" style={{ color: INK }}>/ ORGSPHERE</span>
          </span>
          <span className="text-xs tracking-[0.1em] uppercase" style={{ color: SLATE }}>
            SCOPE&nbsp;<span className="font-semibold" style={{ color: INK }}>/ PRODUCT DESIGN, MOBILE HR PLATFORM</span>
          </span>
        
        </div>

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 pt-10 md:pt-16 pb-6 md:pb-8">
          <Link to="/#projects" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-6 md:mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </Link>

          <p className="text-sm tracking-[0.12em] mb-6 md:mb-8" style={{ color: GREEN }}>
            03 — MOBILE · ENTERPRISE HR PLATFORM
          </p>

          <div className="mb-8 md:mb-10" style={{ fontSize: 'clamp(40px,8vw,96px)' }}>
            <h1 className="leading-[1] tracking-[-0.03em] block" style={{ fontFamily: SERIF, color: INK }}>
              Orgsphere
            </h1>
            <p className="leading-[1.1] block" style={{ fontFamily: SERIF, fontStyle: 'italic', color: SLATE, letterSpacing: '-0.02em' }}>
              Designed with intention,
            </p>
            <p className="leading-[1] tracking-[-0.03em] block" style={{ fontFamily: SERIF, color: INK }}>
              built for people.
            </p>
          </div>

          <p className="max-w-xl text-base md:text-lg leading-relaxed" style={{ color: SLATE }}>
            A mobile HR management platform designed to empower employees with self-service
            tools for leave requests, expense tracking, performance appraisals, and company
            activities — all from a single, intuitive application.
          </p>
        </section>

        {/* ── ROLE / MODULES / AUDIENCE ─────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 pb-12 md:pb-16">
          <div style={{ borderTop: '1px solid #EEEEEE', paddingTop: '32px' }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:flex md:justify-between md:gap-12">
              {[
                { label: 'ROLE',     lines: ['Product designer', 'Visual systems'] },
                { label: 'MODULES', lines: ['5 core modules', '40+ screens'] },
                { label: 'AUDIENCE', lines: ['3 user roles', 'Single application'] },
              ].map(({ label, lines }) => (
                <div key={label}>
                  <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: SLATE }}>{label}</p>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: INK }}>
                    {lines[0]}<br />{lines[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── [01] OVERVIEW ─────────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-10 md:py-[52px]">
          <SectionBlock number="01" label="Overview" sideNote="The brief">
            <SectionHeading>
              From paper-heavy HR{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>to a single app.</span>
            </SectionHeading>
            <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              <p>
                We wanted to replace fragmented, paper-heavy HR processes with a modern digital
                workspace — one that <strong style={{ color: INK }}>reduces administrative friction</strong> and
                puts employees in control of their professional lives. Leave requests lived in emails.
                Expense claims travelled on paper. Performance reviews surfaced once a year, opaque
                and disconnected from the day-to-day work.
              </p>
              <p>
                The opportunity was to design a{' '}
                <em style={{ color: GREEN }}>single mobile application</em>{' '}
                that consolidates these workflows under one roof — light, transparent, and human.
                Not enterprise software wearing a friendly face, but a workspace built around the
                employee first.
              </p>
            </div>
          </SectionBlock>
        </section>

        {/* ── [02] PROBLEM & SOLUTION ───────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-16 items-start mb-10 md:mb-12">
            <div className="flex flex-col gap-2 pt-1">
              <SectionLabel number="02">Problem &amp; solution</SectionLabel>
            </div>
            <h2 className="font-normal leading-[1] tracking-[-0.03em]"
              style={{ fontFamily: SERIF, fontSize: 'clamp(28px,4vw,56px)' }}>
              <span style={{ color: INK }}>Four broken patterns. </span>
              <span style={{ fontStyle: 'italic', color: SLATE }}>Four direct fixes.</span>
            </h2>
          </div>

          {/* Stacked on mobile, side-by-side on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            <div className="rounded-3xl border border-solid border-[#EC003F33]/20" style={{ background: RED_LIGHT, padding: '28px' }}>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8" style={{ color: RED, fontFamily: SERIF }}>The problem</h3>
              <div className="flex flex-col gap-5 md:gap-6">
                {[
                  { n: '01', text: 'Employees relied on emails and paper forms to apply for leave, submit expenses, and complete appraisals.' },
                  { n: '02', text: 'No visibility into request statuses — employees had to physically follow up with HR or managers.' },
                  { n: '03', text: 'Performance reviews were opaque, with no self-tracking of KPIs or manager feedback in real time.' },
                  { n: '04', text: 'Company events and training activities had no centralised hub, leading to low attendance.' },
                ].map(({ n, text }) => (
                  <div key={n} className="flex gap-4 items-start">
                    <span className="text-sm font-bold shrink-0 mt-0.5" style={{ color: RED }}>{n}</span>
                    <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-solid border-[#08783D33]/20" style={{ background: GREEN_LIGHT, padding: '28px' }}>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8" style={{ color: GREEN, fontFamily: SERIF }}>The solution</h3>
              <div className="flex flex-col gap-5 md:gap-6">
                {[
                  { n: '01', text: 'A unified mobile app where employees apply for leave, track balances, and view approval chains instantly.' },
                  { n: '02', text: 'Real-time status tracking with push notifications for every request update and approval milestone.' },
                  { n: '03', text: 'A transparent KPI module with quarterly goals, self ratings, manager scores, and comment threads.' },
                  { n: '04', text: 'An activities hub listing company events with details, venues, and notes — driving engagement.' },
                ].map(({ n, text }) => (
                  <div key={n} className="flex gap-4 items-start">
                    <span className="text-sm font-bold shrink-0 mt-0.5" style={{ color: GREEN }}>{n}</span>
                    <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── [03] TARGET AUDIENCE ──────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-16 items-start mb-8 md:mb-12">
            <div className="flex flex-col gap-2 pt-1">
              <SectionLabel number="03">Target audience</SectionLabel>
              <p className="text-sm md:mt-4" style={{ color: SLATE }}>Who it's for</p>
            </div>
            <div>
              <SectionHeading>
                One app,{' '}
                <span style={{ fontStyle: 'italic', color: SLATE }}>three distinct lenses</span>
              </SectionHeading>
              <p className="text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
                The app serves three distinct user groups within an organisation, each with unique pain
                points and goals. Designing for all three on a single codebase meant finding shared
                component patterns — but tuning the information density, primary actions, and approval
                flows differently for each role.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                iconBg: '#d1fae5', iconColor: '#059669',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                ),
                name: 'Regular employees', badge: 'PRIMARY USER · 78% OF TRAFFIC',
                desc: 'Apply for leave, submit expenses, track KPIs, and stay informed about company events. They want self-service and transparency.',
              },
              {
                iconBg: '#dbeafe', iconColor: '#2563eb',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                name: 'Line Managers', badge: 'APPROVERS · TIER 1',
                desc: 'Review and approve leave and expense requests, score direct reports on KPIs, and provide performance feedback.',
              },
              {
                iconBg: '#fce7f3', iconColor: '#db2777',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                ),
                name: 'HR administrators', badge: 'APPROVERS · TIER 2',
                desc: 'Final-tier approvals on leave and expense requests, oversee performance review cycles, and maintain employee records.',
              },
            ].map(({ iconBg, iconColor, icon, name, badge, desc }) => (
              <div key={name} className="org-card rounded-2xl p-6 md:p-8 flex flex-col gap-5 transition-colors duration-200">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: iconBg, color: iconColor }}>
                  {icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold" style={{ color: INK }}>{name}</h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: SLATE }}>{badge}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── [04] PROCESS ──────────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-16 items-start mb-8 md:mb-12">
            <div className="flex flex-col gap-2 pt-1">
              <SectionLabel number="04">Process</SectionLabel>
              <p className="text-sm md:mt-4" style={{ color: SLATE }}>How I worked</p>
            </div>
            <div>
              <SectionHeading>
                Five stages,{' '}
                <span style={{ fontStyle: 'italic', color: SLATE }}>one continuous loop</span>
              </SectionHeading>
              <p className="text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
                Research started with stakeholder interviews with HR leads at Chams Access, employee surveys, and a competitive audit of BambooHR and Keka. From there, the work moved through a deliberate five-stage cadence.
              </p>
            </div>
          </div>

          {/* 1-col → 2-col → 5-col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { n: '01', title: 'Research',      body: 'Stakeholder interviews, employee surveys, and a competitive audit of BambooHR and Keka.' },
              { n: '02', title: 'Architecture',  body: 'Mapped core user flows for leave, expense, KPI, and activity modules. Defined navigation hierarchy.' },
              { n: '03', title: 'Wireframing',   body: 'Low-fidelity wireframes for all key screens, tested internally to validate layout assumptions.' },
              { n: '04', title: 'Visual Design', body: 'High-fidelity Figma mockups with the green palette, card-based UI, and a consistent component library.' },
              { n: '05', title: 'Handoff',       body: 'Interactive Figma prototypes for stakeholder review. Developer handoff with annotated specs and a shared design system.' },
            ].map(({ n, title, body }) => (
              <div key={n} className="process-card" style={{ borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span className="text-sm font-medium" style={{ color: SLATE }}>{n}</span>
                <h3 className="text-base font-semibold" style={{ color: INK }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PULL QUOTE ────────────────────────────────────────── */}
        <section style={{ background: GREEN_LIGHT, borderTop: `1px solid ${GREEN_BORDER}`, borderBottom: `1px solid ${GREEN_BORDER}` }} className="py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8">
            <p className="font-normal leading-[1.2] text-center"
              style={{ fontFamily: SERIF, fontSize: 'clamp(22px,3.5vw,46px)', letterSpacing: '-0.02em', color: INK, maxWidth: '820px', margin: '0 auto' }}>
              "Once you learn how leave works,{' '}
              <span style={{ color: GREEN }}>you already know</span>{' '}
              how expenses work. The same pattern carries you through every module."
            </p>
            <p className="text-center text-xs tracking-[0.15em] uppercase mt-8" style={{ color: SLATE }}>
              Core design principle · Consistency first
            </p>
          </div>
        </section>

        {/* ── [05] ONBOARDING ───────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <SectionBlock number="05" label="Onboarding">
            <SectionHeading>
              Three steps.{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>No friction.</span>
            </SectionHeading>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              A three-step walkthrough introduces core features before sign-in, building user confidence and reducing first-session drop-off. Each slide pairs a single value proposition with an in-product preview, so the user sees what the app actually looks like before they're asked to log in.
            </p>
          </SectionBlock>
          <div className="mt-8 md:mt-10 w-full flex justify-center">
            <img src="/Phones.png" alt="Orgsphere onboarding screens"
              style={{ maxWidth: '800px', width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
              onError={e => { e.currentTarget.style.display = 'none' }} />
          </div>
        </section>

        {/* ── [06] HOME DASHBOARD ───────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-8">
          <SectionBlock number="06" label="Home Dashboard">
            <SectionHeading large>
              An instant snapshot{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>of the workday.</span>
            </SectionHeading>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              The central hub gives employees an instant snapshot of their workday — leave balances, pending requests, upcoming activities, and key metrics at a glance. A green header card surfaces the four most important numbers. Recent leave requests show inline with status badges. The Activities feed lists upcoming and completed company events with avatars and timestamps.
            </p>
          </SectionBlock>
        </section>

        <div className="w-full bg-[#E8F8F2] py-10 md:py-12 flex justify-center overflow-hidden mb-12 md:mb-16">
          <img src="/Section.png" alt="Home Dashboard Screens"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            onError={e => { e.currentTarget.style.display = 'none' }} />
        </div>

        {/* ── [07] LEAVE MANAGEMENT ─────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-8">
          <SectionBlock number="07" label="Leave Management">
            <SectionHeading>
              Multi-level approvals,{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>all in real time.</span>
            </SectionHeading>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              Employees view balances, apply for leave, and track multi-level approval status — replacing back-and-forth emails with a transparent, real-time system. Four colour-coded summary cards at the top give a quick balance scan. Filter tabs (All, Pending, Approved, Cancelled) reduce cognitive load. Status badges use semantic colours: green for approved, grey for pending, red for cancelled.
            </p>
          </SectionBlock>
          <div className="w-full flex justify-center mt-8 md:mt-10">
            <img src="/Leave.png" alt="Leave management screens"
              style={{ maxWidth: '800px', width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
              onError={e => { e.currentTarget.style.display = 'none' }} />
          </div>
        </section>

        {/* ── [08] EXPENSE MANAGEMENT ───────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <SectionBlock number="08" label="Expense Management">
            <SectionHeading large>
              The same pattern{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>in a different module.</span>
            </SectionHeading>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              Submitting and tracking expense claims follows the exact same intuitive pattern as leave — maintaining UI consistency and reducing the learning curve across modules. Summary cards show total expenses, approved count, pending, and cancelled at a glance. Once you learn one module, you already know the next.
            </p>
          </SectionBlock>
          <div className="w-full flex justify-center mt-8 md:mt-10">
            <img src="/Expense.png" alt="Expense management mockup screens"
              style={{ maxWidth: '800px', width: '100%', height: 'auto', display: 'block', borderRadius: '12px', margin: '0 auto' }}
              onError={e => { e.currentTarget.style.display = 'none' }} />
          </div>
        </section>

        {/* ── [09] PERFORMANCE MANAGEMENT ───────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <SectionBlock number="09" label="Performance Management">
            <SectionHeading large>
              Quarterly KPIs,{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>made transparent.</span>
            </SectionHeading>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              A quarterly KPI tracking system that brings transparency to performance reviews — employees can self-assess, view manager scores, and track progress. The flow walks through <strong style={{ color: INK }}>All KPIs</strong>, <strong style={{ color: INK }}>KPI Details</strong> (weighted 80/20), <strong style={{ color: INK }}>Skills Rating</strong> (1–5 stars), and <strong style={{ color: INK }}>Completed Review</strong> with comment threads from both sides.
            </p>
          </SectionBlock>
          <div className="w-full flex justify-center mt-8 md:mt-10">
            <img src="/Performance.png" alt="Performance management mockup screens"
              style={{ maxWidth: '1000px', width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
              onError={e => { e.currentTarget.style.display = 'none' }} />
          </div>
        </section>

        {/* ── [10] DESIGN SYSTEM ────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <SectionBlock number="10" label="Design system">
            <SectionHeading large>
              A system that{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>reads at a glance.</span>
            </SectionHeading>
          </SectionBlock>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-8 pt-8 border-t border-[#EEEEEE]">
            <div>
              <p className="text-xs font-bold tracking-[0.15em] text-[#4a5565] mb-6 md:mb-8">// COLOR PALETTE</p>
              <div className="flex flex-col gap-5 md:gap-6">
                {[
                  { name: 'Primary',     value: '#08783D · primary',   color: '#08783D' },
                  { name: 'Accent',      value: '#E5F8EE',             color: '#E5F8EE' },
                  { name: 'Warning',     value: '#B54708 · attention', color: '#B54708' },
                  { name: 'Destructive', value: '#F04438',             color: '#F04438' },
                ].map(({ name, value, color }) => (
                  <div key={name} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg shrink-0 shadow-sm border border-[#E5E7EB]" style={{ backgroundColor: color }} />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold" style={{ color: INK }}>{name}</span>
                      <span className="text-xs font-mono" style={{ color: SLATE }}>{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold tracking-[0.15em] text-[#4a5565] mb-6 md:mb-8">// TYPOGRAPHY & SPACING</p>
              <div className="flex flex-col gap-6 md:gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-1" style={{ color: INK }}>Satoshi Display</h4>
                  <p className="text-[10px] font-mono tracking-wider" style={{ color: SLATE }}>CLEAN · LEGIBLE · MOBILE FIRST</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1" style={{ color: GREEN }}>8pt · 16pt · 24pt</h4>
                  <p className="text-[10px] font-mono tracking-wider" style={{ color: SLATE }}>8PT GRID · CONSISTENT VERTICAL RHYTHM</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1" style={{ color: GREEN }}>Card-based UI</h4>
                  <p className="text-[10px] font-mono tracking-wider" style={{ color: SLATE }}>SUBTLE SHADOWS · PILL BADGES · ROUNDED CTAS</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold tracking-[0.15em] text-[#4a5565] mb-6 md:mb-8">// DESIGN PRINCIPLES</p>
              <div className="flex flex-col gap-5 md:gap-6">
                {[
                  { title: 'Consistency first',      desc: 'Shared patterns across Leave, Expense, and KPI modules.' },
                  { title: 'Progressive disclosure',  desc: 'Summary cards on listing pages, full details on tap.' },
                  { title: 'Status clarity',          desc: 'Semantic colour badges make statuses scannable at a glance.' },
                  { title: 'Minimal friction',        desc: 'Bare-minimum fields, employer-provisioned credentials, single-tap actions.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex flex-col gap-1">
                    <h4 className="text-sm font-semibold" style={{ color: INK }}>{title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: SLATE }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── [11] MORE SCREENS ─────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16">
          <SectionBlock number="11" label="More screens">
            <SectionHeading large>
              40+ screens.{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>One coherent system</span>
            </SectionHeading>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              Forgotten password recovery, verification codes, expense detail, profile management, performance review, KPI breakdown, account settings — every secondary surface ships from the same component library.
            </p>
          </SectionBlock>
        </section>

        <div className="w-full flex justify-center overflow-hidden mb-12 md:mb-16">
          <img src="/More screens.png" alt="More Screens Showcase"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            onError={e => { e.currentTarget.style.display = 'none' }} />
        </div>

        {/* ── [12] OUTCOME ──────────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16 border-t border-[#EEEEEE]">
          <SectionBlock number="12" label="Outcome">
            <SectionHeading large>
              What <span style={{ fontStyle: 'italic', color: SLATE }}>shipped.</span>
            </SectionHeading>
          </SectionBlock>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8 mt-6 md:mt-8">
            {[
              { metric: '5×',  title: 'Modules unified',      desc: 'Onboarding, Leave, Expense, Performance, and Activities — all in one app, all built from a single component library and design system.' },
              { metric: '3/3', title: 'User roles served',    desc: 'Regular employees, line managers, and HR administrators — each gets the same shared base patterns with role-tuned approval flows and information density.' },
              { metric: '40+', title: 'Production screens',   desc: 'Including primary flows, edge states (forgotten password, verification, empty states), and the complete settings & profile management surface.' },
            ].map(({ metric, title, desc }) => (
              <div key={title} className="org-card rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-colors duration-200">
                <span className="font-normal leading-none" style={{ fontFamily: SERIF, fontSize: 'clamp(40px,5vw,72px)', color: GREEN }}>
                  {metric}
                </span>
                <h3 className="text-lg font-bold" style={{ color: INK }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── NEXT PROJECT ──────────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 pb-20 md:pb-24 border-t border-[#EEEEEE] pt-14 md:pt-16">
          <div className="flex flex-col items-center text-center gap-6 md:gap-8">
            <p className="text-xs font-mono tracking-[0.15em] uppercase text-[#4a5565]">NEXT CASE STUDY</p>
            <Link
              to="/projects/helpnest"
              className="font-normal leading-[0.95] tracking-[-0.03em] hover:opacity-80 transition-opacity underline underline-offset-8 decoration-2 break-words"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(40px,9vw,120px)',
                background: 'linear-gradient(to right, #3b82f6, #10b981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Helpnest.
            </Link>
            <Link
              to="/projects/helpnest"
              className="flex items-center gap-2 rounded-full bg-[#0a0c0d] px-6 py-3 text-sm font-medium text-white hover:bg-[#4a5565] transition-colors"
            >
              View all projects
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