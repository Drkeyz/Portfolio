// import { Link } from 'react-router-dom'
// import { useEffect } from 'react'
// import Footer from '../components/Footer'

// /* ─────────────────────────────────────────────────────────────
//    DESIGN TOKENS
// ───────────────────────────────────────────────────────────── */
// const TEAL = '#2F6D9B'
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
//           <span className="h-2 w-2 rounded-full" style={{ background: TEAL }} />
//           Case Study 04
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

// function SectionLabel({ number, children }) {
//   return (
//     <p className="text-sm font-medium mb-8 mt-3" style={{ color: TEAL }}>
//       {number && <span>[{number}]</span>}{' '}{children}
//     </p>
//   )
// }

// function ProblemCard({ n, title, body }) {
//   return (
//     <div className="helpnest-card rounded-2xl p-8 flex flex-col gap-4 last:bg-[#2F6D9B1A]">
//       <span className="text-sm font-medium" style={{ color: TEAL }}>{n}</span>
//       <h3 className="text-lg font-semibold leading-snug" style={{ color: INK }}>{title}</h3>
//       <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{body}</p>
//     </div>
//   )
// }

// export default function HelpnestPage() {
//   useEffect(() => { window.scrollTo(0, 0) }, [])

//   return (
//     <>
//       <style>{`
//         .helpnest-card {
//           border: 1.5px solid #EEEEEE;
//           transition: border-color 0.2s;
//         }
//         .helpnest-card:hover {
//           border-color: ${TEAL};
//         }
//       `}</style>

//       <div className="min-h-screen bg-white" style={{ color: INK }}>
//         <Navbar />

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

//         <main className="mx-auto max-w-[1440px] px-8 pt-20 pb-16">
//           <Link to="/#projects" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-8">
//             <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
//             Back
//           </Link>
//           <p className="text-sm tracking-[0.12em] uppercase text-[#2F6D9B] mb-8">
//             04 — CUSTOMER SUPPORT · SAAS PLATFORM
//           </p>

//           <div className="mb-10 text-[64px]">
//             <h1
//               className="leading-[1] tracking-[-0.03em]"
//               style={{ fontFamily: SERIF, color: INK }}
//             >
//               Helpnest.
//             </h1>
//             <p
//               className="leading-[1.1] mt-2"
//               style={{
//                 fontFamily: SERIF,
//                 // fontSize: 'clamp(56px,8vw,108px)',
//                 fontStyle: 'italic',
//                 color: SLATE,
//                 letterSpacing: '-0.02em',
//               }}
//             >
//               Closing the gap
//             </p>
//             <p
//               className="leading-[1] mt-2"
//               style={{ fontFamily: SERIF, color: INK }}
//             >
//               between bot and human.
//             </p>
//           </div>

//           <p className="text-lg leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//             An AI-native support platform that blends intelligent triage, seamless human escalation,
//             and cross-product analytics into one workspace. Built for B2B SaaS teams who can't afford
//             to choose between speed and context.
//           </p>
//         </main>

//         <div className="border-t border-[#EEEEEE] pt-8 mt-8">
//           <div className='mx-auto px-8 max-w-[1440px] flex flex-col gap-y-8'>
//             <div className='flex justify-between gap-8'>
//               <div className="flex flex-col gap-1">
//                 <p className="text-[11px] tracking-[0.1em] mb-2" style={{ color: SLATE }}>ROLE</p>
//                 <p className="text-[15px] leading-snug" style={{ color: INK }}>Product designer</p>
//               </div>
//               <div className="flex flex-col gap-1">
//                 <p className="text-[11px] tracking-[0.1em] mb-2" style={{ color: SLATE }}>TIMELINE</p>
//                 <p className="text-[15px] leading-snug" style={{ color: INK }}>30+ Dashboard screens</p>
//               </div>
//               <div className="flex flex-col gap-1">
//                 <p className="text-[11px] tracking-[0.1em] mb-2" style={{ color: SLATE }}>SIDES</p>
//                 <p className="text-[15px] leading-snug" style={{ color: INK }}>Admin view</p>
//                 <p className="text-[15px] leading-snug" style={{ color: INK }}>Super-admin view</p>
//               </div>
//               <div className="flex flex-col gap-1 pr-16">
//                 <p className="text-[11px] tracking-[0.1em] mb-2" style={{ color: SLATE }}>MARKET</p>
//                 <p className="text-[15px] leading-snug" style={{ color: INK }}>Web · Support teams</p>
//               </div>
//             </div>

//             <div className='bg-[#2F6D9B]/10 h-[51.6875rem] flex flex-col justify-center items-center'>
//               <img 
//                 src='/helpnest-dashboard.svg'
//                 alt="Helpnest dashboard screen mockup"
//                 style={{ width: '1000px', height: 'auto', display: 'block' }}
//                 onError={e => { e.currentTarget.style.display = 'none' }}
//               />
//             </div>
//           </div>
//         </div>

//         <section className="mx-auto max-w-[1440px] px-8 py-20">
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
//                   fontSize: 'clamp(36px,4vw,56px)',
//                   letterSpacing: '-0.02em',
//                   color: INK,
//                 }}
//               >
//                 Helpnest bridges support automation with human escalation.
//               </h2>
//               <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                 <p>
//                   Support teams need a single workspace where bots resolve common issues, agents
//                   regain context instantly, and customer intent never gets lost in handoff.
//                   Helpnest is designed for that handoff moment — the place where AI and humans
//                   must work together without friction.
//                 </p>
//                 <p>
//                   The platform combines triage, conversation history, and product-aware escalation
//                   so managers can see what matters, agents can act with confidence, and customers
//                   feel the full service flow instead of the break in it.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="mx-auto max-w-[1440px] px-8 py-16 border-t border-[#EEEEEE]">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start mb-16">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="02">Problem solved</SectionLabel>
//               <p className="text-sm" style={{ color: SLATE }}>The challenge</p>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-[1] tracking-[-0.03em]"
//                 style={{ fontFamily: SERIF, fontSize: 'clamp(36px,4vw,56px)', color: INK }}
//               >
//                 Five structural failures <span style={{ fontStyle: 'italic', color: SLATE }}>every support team inherits.</span>
//               </h2>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               {
//                 n: '01',
//                 title: 'Context death at escalation',
//                 body: 'When the bot hands off to a human agent, the conversation thread resets and the agent loses the customer context the bot already collected.',
//               },
//               {
//                 n: '02',
//                 title: 'Invisible queue priority',
//                 body: 'Without a structured triage layer, agents can’t distinguish urgent product issues from routine tickets until it’s too late.',
//               },
//               {
//                 n: '03',
//                 title: 'Fragmented performance visibility',
//                 body: 'Support managers lack a unified view of which product friction points are driving volume and which actions actually resolve cases.',
//               },
//               {
//                 n: '04',
//                 title: 'Knowledge base outside the flow',
//                 body: 'Agents switch tabs to consult documentation while customers wait, breaking the support flow and increasing resolution time.',
//               },
//               {
//                 n: '05',
//                 title: 'Reactive escalation rules',
//                 body: 'Escalation logic often triggers too late, after customers have already expressed frustration and the handoff becomes more expensive.',
//               },
//               {
//                 n: '06',
//                 title: 'The throughline',
//                 body: 'Helpnest treats the bot-to-human transition as a first-class design problem instead of a broken afterthought.',
//               },
//             ].map((item) => (
//               <ProblemCard key={item.n} {...item} />
//             ))}
//           </div>
//         </section>

//         <section className="mx-auto max-w-[1440px] px-8 py-16 border-t border-[#EEEEEE]">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start mb-12">
//             <div className="flex flex-col gap-2 pt-1">
//               <SectionLabel number="03">Who uses it</SectionLabel>
//             </div>
//             <div>
//               <h2
//                 className="font-normal leading-[1.1] mb-4"
//                 style={{ fontFamily: SERIF, fontSize: 'clamp(36px,4vw,56px)', color: INK }}
//               >
//                 Three roles, <span style={{ fontStyle: 'italic', color: SLATE }}>one shared surface.</span>
//               </h2>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               {
//                 role: 'Support agent',
//                 desc: 'Handles live conversations across multiple products with the bot context and response tools in a single workspace.',
//               },
//               {
//                 role: 'Support manager',
//                 desc: 'Monitors performance, configures escalation rules, and uses analytics to reduce repeat tickets.',
//               },
//               {
//                 role: 'End customer',
//                 desc: 'Gets faster, more consistent responses as the system keeps the full conversation context visible through every transition.',
//               },
//             ].map(({ role, desc }) => (
//               <div key={role} className="helpnest-card rounded-2xl p-8 flex flex-col gap-4">
//                 <h3 className="text-lg font-semibold" style={{ color: INK }}>{role}</h3>
//                 <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="w-full bg-[#F8FAFC] py-24">
//           <div className="mx-auto max-w-2xl text-center px-8">
//             <h2
//               className="font-normal leading-[1.1] tracking-[-0.02em] mb-6 text-5xl"
//               style={{ fontFamily: SERIF, color: INK }}
//             >
//               "The best escalation is the one the customer never notices has happened."
//             </h2>
//             <p className="text-sm font-mono tracking-[0.15em] uppercase" style={{ color: SLATE }}>
//               DESIGN PRINCIPLE · HELPNEST
//             </p>
//           </div>
//         </section>

//         <section className="mx-auto max-w-[1440px] px-8 py-12">
//             <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//               <div className='my-auto flex flex-col justify-center'>
//                 <SectionLabel number="04">Design approach</SectionLabel>
//               </div>
//               <h2
//                 className="font-normal leading-[1.1] mb-8"
//                 style={{
//                   fontFamily: SERIF,
//                   fontSize: 'clamp(36px,4vw,58px)',
//                   letterSpacing: '-0.02em',
//                   color: INK,
//                 }}
//               >
//                 Designing for {" "}
//                 <span style={{ fontStyle: 'italic', color: "#4A5565" }}>the second between bot and human.?</span>
//               </h2>
//             </div>

//             <div className='flex flex-col gap-y-[50px]'>
//               <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//                 <div className="text-sm" style={{ color: SLATE }}>Philosophy</div>
//                 <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                   <p>
//                     The analytics layer was designed around a manager's actual decision loop. 
//                     AI-powered insights surface at the top of the report view, highlighting anomalies 
//                     (access control usage up 23%, payment processing time reduced by 1.2 seconds) 
//                     before the manager scrolls to the raw charts. 
//                     Reports export in PDF, Excel, or CSV with customizable metric selection.
//                   </p>
//                   <p>
//                     The result is that 87% of conversations resolve at the bot layer entirely, 
//                     and those that escalate arrive at the agent with a full context summary.
//                   </p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//                 <div className="text-sm" style={{ color: SLATE }}>Education</div>
//                 <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                   <p>
//                     The design work began with a single constraint: the handoff moment must carry context forward, not drop it. 
//                     Every subsequent decision flowed from this. 
//                     The agent's console was structured so that the current issue, full conversation history, 
//                     and activity timeline are visible before they type a single word.
//                   </p>
//                   <p>
//                     Queue management was redesigned around priority. 
//                     This alone reduces first-response lag because agents can 
//                     triage from the list view without opening each conversation.
//                   </p>
//                 </div>          
//               </div>

//               <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//                 <div className="text-sm" style={{ color: SLATE }}>Analytics</div>
//                 <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                   <p>
//                     The analytics layer was designed around a manager's actual decision loop. 
//                     AI-powered insights surface at the top of the report view, highlighting anomalies 
//                     (access control usage up 23%, payment processing time reduced by 1.2 seconds) before the manager scrolls to the raw charts. 
//                     Reports export in PDF, Excel, or CSV with customizable metric selection.
//                   </p>
//                 </div>          
//               </div>
//             </div>          
//         </section>

//         <section className="mx-auto max-w-[1440px] px-8 py-20">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//               <div className='my-auto flex flex-col justify-center'>
//                 <SectionLabel number="04">Screen showcase</SectionLabel>
//               </div>
//               <h2
//                 className="font-normal leading-[1.1] mb-8"
//                 style={{
//                   fontFamily: SERIF,
//                   fontSize: 'clamp(36px,4vw,58px)',
//                   letterSpacing: '-0.02em',
//                   color: INK,
//                 }}
//               >
//                 Eight surfaces. {" "}
//                 <span style={{ fontStyle: 'italic', color: "#4A5565" }}>One coherent space.</span>
//               </h2>
//           </div>
          
//           <div className='flex flex-col gap-y-[50px]'>
//             <div>
//               <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//                 <div className="text-sm mt-4" style={{ color: TEAL }}>Main dashboard</div>
//                 <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                   <div style={{color: INK}} className='text-[32px]'>
//                     <span className='text-[#4A5565]'>Command center for</span> live operations
//                   </div>
//                   <p>
//                     Six KPI cards surface the metrics that matter most in real time: 
//                     total conversations, bot-resolved rate, satisfaction score, escalation count, response time, and active chats. 
//                     A 7-day volume chart separates bot-handled from agent-handled 
//                     conversations so managers can see the AI's contribution at a glance.
//                   </p>
//                 </div>          
//               </div>
//               <div className='bg-[#2F6D9B]/10 h-[45.625rem] flex flex-col justify-center items-center mt-8'>
//                 <img 
//                   src='/helpnest-dashboard.svg'
//                   alt="Helpnest dashboard screen mockup"
//                   style={{ width: '884px', height: 'auto', display: 'block' }}
//                   onError={e => { e.currentTarget.style.display = 'none' }}
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//                 <div className="text-sm mt-4" style={{ color: TEAL }}>Live agent console</div>
//                 <div className="flex flex-col gap-5 text-base leading-relaxed max-w-3xl" style={{ color: SLATE }}>
//                   <div style={{color: INK}} className='text-[32px]'>
//                     <span className='text-[#4A5565]'>Queue, context and chat</span> in one uninterrupted view
//                   </div>
//                   <p>
//                     The agent console puts the conversation queue on the left, the active chat thread in the center, 
//                     and quick-action tools on the right. Each queued item shows customer name, product context, wait time, 
//                     and priority level so agents can triage before opening. 
//                     Canned responses, knowledge base access, 
//                     and file sharing are all surfaced within the input area.
//                   </p>
//                 </div>          
//               </div>
//               <div className='bg-[#2F6D9B]/10 h-[34.5rem] flex flex-col justify-center items-center mt-8'>
//                 <img 
//                   src='/live_agent_console.svg'
//                   alt="Helpnest live agent console screen"
//                   style={{ width: '884px', height: 'auto', display: 'block' }}
//                   onError={e => { e.currentTarget.style.display = 'none' }}
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//                 <div className="text-sm mt-4" style={{ color: TEAL }}>Conversation history</div>
//                 <div className="flex flex-col gap-5 text-base leading-relaxed max-w-3xl" style={{ color: SLATE }}>
//                   <div style={{color: INK}} className='text-[32px]'>
//                     <span className='text-[#4A5565]'>A customer's full record,</span> before you say hello.
//                   </div>
//                   <p>
//                     The conversation history view presents a customer's complete ticket timeline as a grid of cards, 
//                     each with status, summary, and date. 
//                     An activity timeline runs below for a chronological read. 
//                     When an agent opens a ticket detail, they see resolution time, 
//                     messages exchanged, assigned agent, and the full chat thread with tags.
//                   </p>
//                 </div>          
//               </div>
//               <div className='bg-[#2F6D9B]/10 h-[34.5rem] flex items-center justify-center gap-x-6 mt-8'>
//                 <div>
//                   <img 
//                     src='/Conversation_History_1.svg'
//                     alt="Helpnest dashboard screen mockup"
//                     style={{ width: 'auto', height: 'auto', display: 'block' }}
//                     onError={e => { e.currentTarget.style.display = 'none' }}
//                   />
//                 </div>
//                 <div>
//                   <img 
//                     src='/Conversation_History_2.svg'
//                     alt="Helpnest dashboard screen mockup"
//                     style={{ width: 'auto', height: 'auto', display: 'block' }}
//                     onError={e => { e.currentTarget.style.display = 'none' }}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//                 <div className="text-sm mt-4" style={{ color: TEAL }}>Conversation inbox</div>
//                 <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                   <div style={{color: INK}} className='text-[32px]'>
//                     <span className='text-[#4A5565]'>The full inbox with</span> status at a glance
//                   </div>
//                   <p>
//                     247 conversations per day, filtered across four tabs: All, Active, Resolved, and Escalated. 
//                     Each row shows customer name, issue preview, status badge, and time elapsed. 
//                     The stat row above the list gives managers an instant operational 
//                     read before they drill into any individual thread.
//                   </p>
//                 </div>          
//               </div>
//               <div className='bg-[#2F6D9B]/10 h-[51.6875rem] flex flex-col justify-center items-center mt-8'>
//                 <img 
//                   src='/Conversations.svg'
//                   alt="Helpnest dashboard screen mockup"
//                   style={{ width: '884px', height: 'auto', display: 'block' }}
//                   onError={e => { e.currentTarget.style.display = 'none' }}
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//                 <div className="text-sm mt-4" style={{ color: TEAL }}>Analytics and reports</div>
//                 <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
//                   <div style={{color: INK}} className='text-[32px]'>
//                     <span className='text-[#4A5565]'>Insight that lead.</span> Data that follows
//                   </div>
//                   <p>
//                     The analytics surface leads with AI-powered narrative insights, then surfaces the four headline metrics: 
//                     resolution rate, first contact resolution, average handling time, and CSAT. 
//                     Charts break down response time trends, ticket volume by day, query distribution by category, 
//                     and satisfaction trend over six months.
//                   </p>
//                 </div>          
//               </div>
//               <div className='bg-[#2F6D9B]/10 h-[63.3125rem] flex flex-col justify-center items-center mt-8'>
//                 <img 
//                   src='/Analytics.svg'
//                   alt="Helpnest dashboard screen mockup"
//                   style={{ width: '884px', height: 'auto', display: 'block' }}
//                   onError={e => { e.currentTarget.style.display = 'none' }}
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//                 <div className="text-sm mt-4" style={{ color: TEAL }}>Knowledge base</div>
//                 <div className="flex flex-col gap-5 text-base leading-relaxed max-w-3xl" style={{ color: SLATE }}>
//                   <div style={{color: INK}} className='text-[32px]'>
//                     <span className='text-[#4A5565]'>Documentation that</span> trains the bot, arms the agent.
//                   </div>
//                   <p>
//                     The knowledge base stores the documents the AI draws from when resolving queries: 
//                     product documentation, API references, onboarding manuals, and troubleshooting guides. 
//                     Managers upload, categorize, and version control directly from this surface. 
//                     Ten documents, 19.9MB, structured by category and searchable by name.
//                   </p>
//                 </div>          
//               </div>
//               <div className='bg-[#2F6D9B]/10 h-[54.5625rem] flex flex-col justify-center items-center mt-8'>
//                 <img 
//                   src='/Knowledge_Base.svg'
//                   alt="Helpnest dashboard screen mockup"
//                   style={{ width: '884px', height: 'auto', display: 'block' }}
//                   onError={e => { e.currentTarget.style.display = 'none' }}
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//                 <div className="text-sm mt-4" style={{ color: TEAL }}>Staff performance</div>
//                 <div className="flex flex-col gap-5 text-base leading-relaxed max-w-3xl" style={{ color: SLATE }}>
//                   <div style={{color: INK}} className='text-[32px]'>
//                     <span className='text-[#4A5565]'>Individual performance</span> made visible, not punitive.
//                   </div>
//                   <p>
//                     The staff management surface combines a team roster with a performance leaderboard. 
//                     Each agent profile surfaces resolution rate, average response time, 
//                     and CSAT score alongside a monthly statistics breakdown. 
//                     The design treats performance data as a tool for agents to improve, not a mechanism to surveil.
//                   </p>
//                 </div>          
//               </div>
//               <div className='bg-[#2F6D9B]/10 h-[53.875rem] flex flex-col justify-center items-center mt-8'>
//                 <img 
//                   src='/Staff.svg'
//                   alt="Helpnest dashboard screen mockup"
//                   style={{ width: '884px', height: 'auto', display: 'block' }}
//                   onError={e => { e.currentTarget.style.display = 'none' }}
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//                 <div className="text-sm mt-4" style={{ color: TEAL }}>Settings</div>
//                 <div className="flex flex-col gap-5 text-base leading-relaxed max-w-3xl" style={{ color: SLATE }}>
//                   <div className='text-[32px] text-[#4A5565]'>
//                     Configure the bot. Define the rules it plays by
//                   </div>
//                   <p>
//                     The staff management surface combines a team roster with a performance leaderboard. 
//                     Each agent profile surfaces resolution rate, average response time, 
//                     and CSAT score alongside a monthly statistics breakdown. 
//                     The design treats performance data as a tool for agents to improve, 
//                     not a mechanism to surveil.
//                   </p>
//                 </div>          
//               </div>
//               <div className='bg-[#2F6D9B]/10 h-[53.875rem] flex justify-center gap-x-6 mt-8'>
//                 <div className='mt-[8.4375rem]'>
//                   <img 
//                     src='/Settings_1.svg'
//                     alt="Helpnest dashboard screen mockup"
//                     style={{ width: 'auto', height: 'auto', display: 'block' }}
//                     onError={e => { e.currentTarget.style.display = 'none' }}
//                   />
//                 </div>
//                 <div>
//                   <img 
//                     src='/Settings_2.svg'
//                     alt="Helpnest dashboard screen mockup"
//                     style={{ width: 'auto', height: 'auto', display: 'block' }}
//                     onError={e => { e.currentTarget.style.display = 'none' }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className='flex flex-col justify-center items-center'>
//           <img 
//             src='/Container.svg'
//             alt="Helpnest dashboard screen mockup"
//             style={{ width: '1300px', height: 'auto', display: 'block' }}
//             onError={e => { e.currentTarget.style.display = 'none' }}
//           />
//         </section>

//         <section className="mx-auto max-w-[1440px] px-8 py-12">
//           <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
//             <div className='my-auto flex flex-col justify-center'>
//               <SectionLabel number="04">Screen showcase</SectionLabel>
//             </div>
//             <h2
//               className="font-normal leading-[1.1] mb-8"
//               style={{
//                 fontFamily: SERIF,
//                 fontSize: 'clamp(36px,4vw,58px)',
//                 letterSpacing: '-0.02em',
//                 color: INK,
//               }}
//             >
//               Numbers that tell {" "}
//               <span style={{ fontStyle: 'italic', color: "#4A5565" }}>a revolusion story.</span>
//             </h2>
//           </div>

//           <div className='flex justify-between gap-x-6'>
//             {[
//               {
//                 n: '87',
//                 span: "%",
//                 title: 'Bot resolution rate',
//                 body: '892 of every 1,247 conversations resolved entirely by the AI layer, without human intervention.',
//               },
//               {
//                 n: '4.5',
//                 span: "/5",
//                 title: 'Customer satisfaction',
//                 body: 'CSAT score across all products and channels, 30% above the industry benchmark for AI-assisted support.',
//               },
//               {
//                 n: '4.2',
//                 span: "m",
//                 title: 'Avg. handling time',
//                 body: 'Average resolution time per conversation, including escalated tickets that reach a human agent.',
//               }
//             ].map((item) => (
//               <div className="helpnest-card rounded-2xl p-8 flex flex-col gap-4">
//                 <div 
//                   className="text-[56px] text-[#0A0C0D]" 
//                 >
//                   {item.n}<span className='text-[#2F6D9B]'>{item.span}</span>
//                 </div>
//                 <h3 className="text-lg font-semibold leading-snug" style={{ color: INK }}>{item.title}</h3>
//                 <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{item.body}</p>
//               </div>
//             ))}
//           </div>          
//         </section>

//         <section className="mx-auto max-w-[1440px] px-8 pb-24">
//           <div className="border-t border-[#EEEEEE] pt-16 flex flex-col items-center text-center gap-8">
//             <Link
//               to="/projects/more"
//               className="flex items-center gap-2 rounded-full bg-[#0a0c0d] px-6 py-3 text-sm font-medium text-white hover:bg-[#4a5565] transition-colors"
//             >
//               View more project
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
const TEAL  = '#2F6D9B'
const INK   = '#0a0c0d'
const SLATE = '#4a5565'
const SERIF = '"Instrument Serif", Georgia, serif'

/* ─── Navbar ────────────────────────────────────────────────── */
function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#f3f4f6]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-8 py-3">
        <Link to="/" className="rounded-full bg-[#0a0c0d] px-4 py-1.5 text-sm font-medium text-white hover:bg-[#4a5565] transition-colors">
          Oladimeji
        </Link>

        <div className="hidden md:flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-sm text-[#4a5565]">
          <span className="h-2 w-2 rounded-full" style={{ background: TEAL }} />
          Case Study 04
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
    <p className="text-sm font-medium mb-8 mt-3" style={{ color: TEAL }}>
      {number && <span>[{number}]</span>}{' '}{children}
    </p>
  )
}

/* ─── Reusable section block ────────────────────────────────── */
function SectionBlock({ number, label, sideLabel, sideColor, children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-16 items-start">
      <div className="flex flex-col gap-2 pt-1">
        {number
          ? <SectionLabel number={number}>{label}</SectionLabel>
          : <p className="text-sm mt-4" style={{ color: sideColor || SLATE }}>{sideLabel || label}</p>
        }
      </div>
      <div>{children}</div>
    </div>
  )
}

/* ─── Problem card ──────────────────────────────────────────── */
function ProblemCard({ n, title, body }) {
  return (
    <div className="helpnest-card rounded-2xl p-6 md:p-8 flex flex-col gap-4 last:bg-[#2F6D9B1A]">
      <span className="text-sm font-medium" style={{ color: TEAL }}>{n}</span>
      <h3 className="text-lg font-semibold leading-snug" style={{ color: INK }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{body}</p>
    </div>
  )
}

/* ─── Screen showcase block ─────────────────────────────────── */
function ShowcaseItem({ label, headingGray, headingDark, body, bgHeight, children }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 md:gap-16 items-start">
        <p className="text-sm md:mt-4" style={{ color: TEAL }}>{label}</p>
        <div className="flex flex-col gap-4 max-w-3xl" style={{ color: SLATE }}>
          <p className="leading-[1.15]" style={{ color: INK, fontSize: 'clamp(22px,3vw,32px)' }}>
            <span style={{ color: SLATE }}>{headingGray} </span>
            {headingDark}
          </p>
          <p className="text-base leading-relaxed">{body}</p>
        </div>
      </div>

      <div
        className="flex items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8 px-4 md:px-0 py-10 md:py-0"
        style={{
          background: '#2F6D9B1A',
          minHeight: '200px',
          height: bgHeight ? `clamp(240px, ${bgHeight}, ${bgHeight})` : 'auto',
        }}
      >
        {children}
      </div>
    </div>
  )
}

function ShowcaseImg({ src, alt, wide }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: wide ? '100%' : 'auto', maxWidth: wide ? '884px' : '100%', height: 'auto', display: 'block' }}
      onError={e => { e.currentTarget.style.display = 'none' }}
    />
  )
}

/* ─── Main page ─────────────────────────────────────────────── */
export default function HelpnestPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <style>{`
        .helpnest-card { border: 1.5px solid #EEEEEE; transition: border-color 0.2s; }
        .helpnest-card:hover { border-color: ${TEAL}; }
      `}</style>

      <div className="min-h-screen bg-white" style={{ color: INK }}>
        <Navbar />

        {/* ── META BAR ──────────────────────────────────────────── */}
        <div
          className="mx-auto max-w-[1440px] px-5 md:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-[#EEEEEE]"
          style={{ paddingTop: '64px', paddingBottom: '16px' }}
        >
          <span className="text-xs tracking-[0.1em] uppercase" style={{ color: SLATE }}>
            PROJECT&nbsp;<span className="font-semibold" style={{ color: INK }}>/ JUNCTA</span>
          </span>
          <span className="text-xs tracking-[0.1em] uppercase" style={{ color: SLATE }}>
            SCOPE&nbsp;<span className="font-semibold" style={{ color: INK }}>/ UX RESEARCH, PRODUCT DESIGN</span>
          </span>
        </div>

        {/* ── HERO ──────────────────────────────────────────────── */}
        <main className="mx-auto max-w-[1440px] px-5 md:px-8 pt-12 md:pt-20 pb-10 md:pb-16">
          <Link to="/#projects" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-6 md:mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </Link>

          <p className="text-sm tracking-[0.12em] uppercase mb-6 md:mb-8" style={{ color: TEAL }}>
            04 — CUSTOMER SUPPORT · SAAS PLATFORM
          </p>

          <div className="mb-8 md:mb-10" style={{ fontSize: 'clamp(40px,8vw,96px)' }}>
            <h1 className="leading-[1] tracking-[-0.03em]" style={{ fontFamily: SERIF, color: INK }}>Helpnest.</h1>
            <p className="leading-[1.1] mt-2" style={{ fontFamily: SERIF, fontStyle: 'italic', color: SLATE, letterSpacing: '-0.02em' }}>Closing the gap</p>
            <p className="leading-[1] mt-2" style={{ fontFamily: SERIF, color: INK }}>between bot and human.</p>
          </div>

          <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: SLATE }}>
            An AI-native support platform that blends intelligent triage, seamless human escalation,
            and cross-product analytics into one workspace. Built for B2B SaaS teams who can't afford
            to choose between speed and context.
          </p>
        </main>

        {/* ── STATS + HERO IMAGE ────────────────────────────────── */}
        <div className="border-t border-[#EEEEEE] pt-8 mt-2">
          <div className="mx-auto px-5 md:px-8 max-w-[1440px] flex flex-col gap-y-8">

            <div className="grid grid-cols-2 md:flex md:justify-between gap-6 md:gap-8">
              {[
                { label: 'ROLE',     lines: ['Product designer'] },
                { label: 'TIMELINE', lines: ['30+ Dashboard screens'] },
                { label: 'SIDES',    lines: ['Admin view', 'Super-admin view'] },
                { label: 'MARKET',   lines: ['Web · Support teams'] },
              ].map(({ label, lines }) => (
                <div key={label} className="flex flex-col gap-1">
                  <p className="text-[11px] tracking-[0.1em] mb-2" style={{ color: SLATE }}>{label}</p>
                  {lines.map(l => <p key={l} className="text-[15px] leading-snug" style={{ color: INK }}>{l}</p>)}
                </div>
              ))}
            </div>

            <div className="bg-[#2F6D9B]/10 flex flex-col justify-center items-center py-10 md:py-0 md:h-[51.6875rem]">
              <img
                src="/helpnest-dashboard.svg"
                alt="Helpnest dashboard screen mockup"
                style={{ width: '100%', maxWidth: '1000px', height: 'auto', display: 'block' }}
                onError={e => { e.currentTarget.style.display = 'none' }}
              />
            </div>
          </div>
        </div>

        {/* ── [01] OVERVIEW ─────────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-20">
          <SectionBlock number="01" label="Overview" sideLabel="The brief">
            <h2 className="font-normal leading-[1.1] mb-8" style={{ fontFamily: SERIF, fontSize: 'clamp(28px,4vw,56px)', letterSpacing: '-0.02em', color: INK }}>
              Helpnest bridges support automation with human escalation.
            </h2>
            <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
              <p>Support teams need a single workspace where bots resolve common issues, agents regain context instantly, and customer intent never gets lost in handoff. Helpnest is designed for that handoff moment — the place where AI and humans must work together without friction.</p>
              <p>The platform combines triage, conversation history, and product-aware escalation so managers can see what matters, agents can act with confidence, and customers feel the full service flow instead of the break in it.</p>
            </div>
          </SectionBlock>
        </section>

        {/* ── [02] PROBLEM SOLVED ───────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16 border-t border-[#EEEEEE]">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-16 items-start mb-10 md:mb-16">
            <div className="flex flex-col gap-2 pt-1">
              <SectionLabel number="02">Problem solved</SectionLabel>
              <p className="text-sm" style={{ color: SLATE }}>The challenge</p>
            </div>
            <h2 className="font-normal leading-[1] tracking-[-0.03em]" style={{ fontFamily: SERIF, fontSize: 'clamp(28px,4vw,56px)', color: INK }}>
              Five structural failures{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>every support team inherits.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { n: '01', title: 'Context death at escalation',       body: 'When the bot hands off to a human agent, the conversation thread resets and the agent loses the customer context the bot already collected.' },
              { n: '02', title: 'Invisible queue priority',          body: "Without a structured triage layer, agents can't distinguish urgent product issues from routine tickets until it's too late." },
              { n: '03', title: 'Fragmented performance visibility', body: 'Support managers lack a unified view of which product friction points are driving volume and which actions actually resolve cases.' },
              { n: '04', title: 'Knowledge base outside the flow',   body: 'Agents switch tabs to consult documentation while customers wait, breaking the support flow and increasing resolution time.' },
              { n: '05', title: 'Reactive escalation rules',         body: 'Escalation logic often triggers too late, after customers have already expressed frustration and the handoff becomes more expensive.' },
              { n: '06', title: 'The throughline',                   body: 'Helpnest treats the bot-to-human transition as a first-class design problem instead of a broken afterthought.' },
            ].map(item => <ProblemCard key={item.n} {...item} />)}
          </div>
        </section>

        {/* ── [03] WHO USES IT ──────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-16 border-t border-[#EEEEEE]">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-16 items-start mb-8 md:mb-12">
            <div className="flex flex-col gap-2 pt-1">
              <SectionLabel number="03">Who uses it</SectionLabel>
            </div>
            <h2 className="font-normal leading-[1.1]" style={{ fontFamily: SERIF, fontSize: 'clamp(28px,4vw,56px)', color: INK }}>
              Three roles,{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>one shared surface.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {[
              { role: 'Support agent',   desc: 'Handles live conversations across multiple products with the bot context and response tools in a single workspace.' },
              { role: 'Support manager', desc: 'Monitors performance, configures escalation rules, and uses analytics to reduce repeat tickets.' },
              { role: 'End customer',    desc: 'Gets faster, more consistent responses as the system keeps the full conversation context visible through every transition.' },
            ].map(({ role, desc }) => (
              <div key={role} className="helpnest-card rounded-2xl p-6 md:p-8 flex flex-col gap-4">
                <h3 className="text-lg font-semibold" style={{ color: INK }}>{role}</h3>
                <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PULL QUOTE ────────────────────────────────────────── */}
        <section className="w-full bg-[#F8FAFC] py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center px-5 md:px-8">
            <h2 className="font-normal leading-[1.1] tracking-[-0.02em] mb-6" style={{ fontFamily: SERIF, fontSize: 'clamp(24px,4vw,48px)', color: INK }}>
              "The best escalation is the one the customer never notices has happened."
            </h2>
            <p className="text-sm font-mono tracking-[0.15em] uppercase" style={{ color: SLATE }}>
              DESIGN PRINCIPLE · HELPNEST
            </p>
          </div>
        </section>

        {/* ── [04] DESIGN APPROACH ──────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12">
          <SectionBlock number="04" label="Design approach">
            <h2 className="font-normal leading-[1.1] mb-8" style={{ fontFamily: SERIF, fontSize: 'clamp(28px,4vw,58px)', letterSpacing: '-0.02em', color: INK }}>
              Designing for{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>the second between bot and human.</span>
            </h2>
          </SectionBlock>

          <div className="flex flex-col gap-10 md:gap-[50px] mt-8">
            {[
              { side: 'Philosophy', paras: [
                "The analytics layer was designed around a manager's actual decision loop. AI-powered insights surface at the top of the report view, highlighting anomalies (access control usage up 23%, payment processing time reduced by 1.2 seconds) before the manager scrolls to the raw charts. Reports export in PDF, Excel, or CSV with customizable metric selection.",
                'The result is that 87% of conversations resolve at the bot layer entirely, and those that escalate arrive at the agent with a full context summary.',
              ]},
              { side: 'Education', paras: [
                "The design work began with a single constraint: the handoff moment must carry context forward, not drop it. Every subsequent decision flowed from this. The agent's console was structured so that the current issue, full conversation history, and activity timeline are visible before they type a single word.",
                'Queue management was redesigned around priority. This alone reduces first-response lag because agents can triage from the list view without opening each conversation.',
              ]},
              { side: 'Analytics', paras: [
                "The analytics layer was designed around a manager's actual decision loop. AI-powered insights surface at the top of the report view, highlighting anomalies (access control usage up 23%, payment processing time reduced by 1.2 seconds) before the manager scrolls to the raw charts. Reports export in PDF, Excel, or CSV with customizable metric selection.",
              ]},
            ].map(({ side, paras }) => (
              <div key={side} className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 md:gap-16 items-start">
                <p className="text-sm" style={{ color: SLATE }}>{side}</p>
                <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
                  {paras.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── [05] SCREEN SHOWCASE ──────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12 md:py-20">
          <SectionBlock number="05" label="Screen showcase">
            <h2 className="font-normal leading-[1.1] mb-8" style={{ fontFamily: SERIF, fontSize: 'clamp(28px,4vw,58px)', letterSpacing: '-0.02em', color: INK }}>
              Eight surfaces.{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>One coherent space.</span>
            </h2>
          </SectionBlock>

          <div className="flex flex-col gap-10 md:gap-[50px]">
            <ShowcaseItem
              label="Main dashboard"
              headingGray="Command center for"
              headingDark="live operations"
              body="Six KPI cards surface the metrics that matter most in real time: total conversations, bot-resolved rate, satisfaction score, escalation count, response time, and active chats. A 7-day volume chart separates bot-handled from agent-handled conversations so managers can see the AI's contribution at a glance."
              bgHeight="45.625rem"
            >
              <ShowcaseImg src="/helpnest-dashboard.svg" alt="Helpnest main dashboard" wide />
            </ShowcaseItem>

            <ShowcaseItem
              label="Live agent console"
              headingGray="Queue, context and chat"
              headingDark="in one uninterrupted view"
              body="The agent console puts the conversation queue on the left, the active chat thread in the center, and quick-action tools on the right. Each queued item shows customer name, product context, wait time, and priority level so agents can triage before opening. Canned responses, knowledge base access, and file sharing are all surfaced within the input area."
              bgHeight="34.5rem"
            >
              <ShowcaseImg src="/live_agent_console.svg" alt="Helpnest live agent console" wide />
            </ShowcaseItem>

            <ShowcaseItem
              label="Conversation history"
              headingGray="A customer's full record,"
              headingDark="before you say hello."
              body="The conversation history view presents a customer's complete ticket timeline as a grid of cards, each with status, summary, and date. An activity timeline runs below for a chronological read. When an agent opens a ticket detail, they see resolution time, messages exchanged, assigned agent, and the full chat thread with tags."
              bgHeight="34.5rem"
            >
              <ShowcaseImg src="/Conversation_History_1.svg" alt="Conversation history list" />
              <ShowcaseImg src="/Conversation_History_2.svg" alt="Conversation history detail" />
            </ShowcaseItem>

            <ShowcaseItem
              label="Conversation inbox"
              headingGray="The full inbox with"
              headingDark="status at a glance"
              body="247 conversations per day, filtered across four tabs: All, Active, Resolved, and Escalated. Each row shows customer name, issue preview, status badge, and time elapsed. The stat row above the list gives managers an instant operational read before they drill into any individual thread."
              bgHeight="51.6875rem"
            >
              <ShowcaseImg src="/Conversations.svg" alt="Conversation inbox" wide />
            </ShowcaseItem>

            <ShowcaseItem
              label="Analytics and reports"
              headingGray="Insight that leads."
              headingDark="Data that follows"
              body="The analytics surface leads with AI-powered narrative insights, then surfaces the four headline metrics: resolution rate, first contact resolution, average handling time, and CSAT. Charts break down response time trends, ticket volume by day, query distribution by category, and satisfaction trend over six months."
              bgHeight="63.3125rem"
            >
              <ShowcaseImg src="/Analytics.svg" alt="Analytics and reports" wide />
            </ShowcaseItem>

            <ShowcaseItem
              label="Knowledge base"
              headingGray="Documentation that"
              headingDark="trains the bot, arms the agent."
              body="The knowledge base stores the documents the AI draws from when resolving queries: product documentation, API references, onboarding manuals, and troubleshooting guides. Managers upload, categorize, and version control directly from this surface. Ten documents, 19.9MB, structured by category and searchable by name."
              bgHeight="54.5625rem"
            >
              <ShowcaseImg src="/Knowledge_Base.svg" alt="Knowledge base" wide />
            </ShowcaseItem>

            <ShowcaseItem
              label="Staff performance"
              headingGray="Individual performance"
              headingDark="made visible, not punitive."
              body="The staff management surface combines a team roster with a performance leaderboard. Each agent profile surfaces resolution rate, average response time, and CSAT score alongside a monthly statistics breakdown. The design treats performance data as a tool for agents to improve, not a mechanism to surveil."
              bgHeight="53.875rem"
            >
              <ShowcaseImg src="/Staff.svg" alt="Staff performance" wide />
            </ShowcaseItem>

            <ShowcaseItem
              label="Settings"
              headingGray="Configure the bot."
              headingDark="Define the rules it plays by"
              body="Bot behaviour, escalation triggers, response tone, and working-hours routing are all configurable from a single settings surface. Changes take effect immediately with no deployment required — the bot's ruleset is always one screen away from the support manager who needs to adjust it."
              bgHeight="53.875rem"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-center gap-4 md:gap-6 w-full">
                <div className="md:mt-[8.4375rem]">
                  <ShowcaseImg src="/Settings_1.svg" alt="Settings general" />
                </div>
                <ShowcaseImg src="/Settings_2.svg" alt="Settings bot config" />
              </div>
            </ShowcaseItem>
          </div>
        </section>

        {/* ── CONTAINER IMAGE ───────────────────────────────────── */}
        <section className="flex flex-col justify-center items-center px-5 md:px-0 overflow-hidden">
          <img
            src="/Container.svg"
            alt="Helpnest full overview"
            style={{ width: '100%', maxWidth: '1300px', height: 'auto', display: 'block' }}
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
        </section>

        {/* ── RESULTS ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 py-12">
          <SectionBlock number="06" label="Results">
            <h2 className="font-normal leading-[1.1] mb-8" style={{ fontFamily: SERIF, fontSize: 'clamp(28px,4vw,58px)', letterSpacing: '-0.02em', color: INK }}>
              Numbers that tell{' '}
              <span style={{ fontStyle: 'italic', color: SLATE }}>a resolution story.</span>
            </h2>
          </SectionBlock>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 mt-2">
            {[
              { n: '87',  span: '%',  title: 'Bot resolution rate',  body: '892 of every 1,247 conversations resolved entirely by the AI layer, without human intervention.' },
              { n: '4.5', span: '/5', title: 'Customer satisfaction', body: 'CSAT score across all products and channels, 30% above the industry benchmark for AI-assisted support.' },
              { n: '4.2', span: 'm',  title: 'Avg. handling time',    body: 'Average resolution time per conversation, including escalated tickets that reach a human agent.' },
            ].map(item => (
              <div key={item.title} className="helpnest-card rounded-2xl p-6 md:p-8 flex flex-col gap-4">
                <div className="leading-none" style={{ fontSize: 'clamp(40px,5vw,56px)', color: INK }}>
                  {item.n}<span style={{ color: TEAL }}>{item.span}</span>
                </div>
                <h3 className="text-lg font-semibold leading-snug" style={{ color: INK }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1440px] px-5 md:px-8 pb-20 md:pb-24">
          <div className="border-t border-[#EEEEEE] pt-14 md:pt-16 flex flex-col items-center text-center gap-8">
            <Link
              to="/projects/more"
              className="flex items-center gap-2 rounded-full bg-[#0a0c0d] px-6 py-3 text-sm font-medium text-white hover:bg-[#4a5565] transition-colors"
            >
              View more projects
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