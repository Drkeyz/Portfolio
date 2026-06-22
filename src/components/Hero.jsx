// const profileImg = '/WhatsApp Image 2026-04-13 at 15.16.18 1.png'

// const COVERS = [
//   { id: 'juncta',        src: '/covers/Frame 1618868784.png',   bg: '#0a0c0d' },
//   { id: 'cargolandfood', src: '/covers/Frame 1618868785.png',   bg: '#f4ede4' },
//   { id: 'orgsphere',     src: '/covers/Frame 1618868784-1.png', bg: '#e8f5ee' },
//   { id: 'helpnest',      src: '/covers/Frame 1618868789.png',   bg: '#e8f0fb' },
// ]

// // Floating positions matching Home.png reference — right column
// // t values in vh; pushed below the descriptor text (~12vh) with clear gap
// // Adjusted: moved covers further right and up to align with descriptor and stay within hero
// // Lowered covers by increasing 't' (top) values
// const FLOAT = [
//   { l: 60, t: 16, w: 28, r: -2,  z: 4 },
//   { l: 70, t: 28, w: 23, r: 1.5, z: 3 },
//   { l: 62, t: 42, w: 20, r: -1,  z: 2 },
//   { l: 76, t: 50, w: 18, r: 2,   z: 1 },
// ]

// function FloatingStar({ x, size, delay, duration }) {
//   return (
//     <svg
//       width={size} height={size} viewBox="0 0 6 6" fill="white"
//       style={{
//         position: 'absolute', bottom: '4px', left: x,
//         pointerEvents: 'none',
//         animation: `starFloat ${duration}s ease-out ${delay}s infinite`,
//       }}
//     >
//       <path d="M3 0 L3.4 2.6 L6 3 L3.4 3.4 L3 6 L2.6 3.4 L0 3 L2.6 2.6 Z" />
//     </svg>
//   )
// }

// const STARS = [
//   { x: '8%',  size: 5, delay: 0,   duration: 2.0 },
//   { x: '18%', size: 3, delay: 0.4, duration: 2.4 },
//   { x: '28%', size: 4, delay: 0.8, duration: 1.8 },
//   { x: '38%', size: 3, delay: 0.2, duration: 2.2 },
//   { x: '48%', size: 5, delay: 1.0, duration: 2.0 },
//   { x: '58%', size: 3, delay: 0.6, duration: 2.6 },
//   { x: '68%', size: 4, delay: 0.3, duration: 1.9 },
//   { x: '78%', size: 3, delay: 0.9, duration: 2.3 },
//   { x: '88%', size: 5, delay: 0.5, duration: 2.1 },
// ]

// function CTAButton() {
//   return (
//     <>
//       <style>{`
//         @keyframes starFloat {
//           0%   { transform: translateY(0)    scale(0.6); opacity: 0;   }
//           15%  { opacity: 0.9; }
//           70%  { opacity: 0.6; }
//           100% { transform: translateY(-48px) scale(1.1); opacity: 0; }
//         }
//       `}</style>
//       <a
//         href="#contact"
//         className="relative inline-flex items-center gap-2 self-start rounded-full px-6 py-3 text-base font-medium text-white"
//         style={{
//           background: 'linear-gradient(180deg, #0a0c0d 0%, #0a0c0d 80%, rgba(255,255,255,0.15) 110%)',
//           overflow: 'visible',
//         }}
//       >
//         {STARS.map((s, i) => <FloatingStar key={i} {...s} />)}
//         <span className="relative z-10">Get in touch</span>
//         <svg className="relative z-10" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//         </svg>
//       </a>
//     </>
//   )
// }

// const FigmaIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 38 57" fill="none">
//     <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE" />
//     <path d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5A9.5 9.5 0 0 0 9.5 57z" fill="#0ACF83" />
//     <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
//     <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
//     <path d="M19 0V19H28.5A9.5 9.5 0 0 0 19 0z" fill="#FF7262" />
//   </svg>
// )
// const WebIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//     <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
//   </svg>
// )
// const CodeIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//     <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
//   </svg>
// )

// const BADGES = [
//   { label: 'Figma',      icon: <FigmaIcon /> },
//   { label: 'Web Design', icon: <WebIcon /> },
//   { label: 'Front End',  icon: <CodeIcon /> },
// ]

// export default function Hero() {
//   return (
//     // paddingTop: 64px offsets the fixed navbar so content isn't hidden behind it
//     <section
//       id="hero"
//       className="relative bg-white"
//       style={{ height: '100vh', paddingTop: '100px' }}
//     >
//       <div className="h-full mx-auto max-w-[1440px] px-8">
//         <div className="relative h-full">

//           {/* ── Left column: heading + badges + CTA ── */}
//           {/* z-index: 10 keeps this above the covers; no overflow clip so button is never hidden */}
//           <div
//             className="absolute flex flex-col gap-8"
//             style={{ left: 0, top: 0, bottom: 0, width: '52%', justifyContent: 'center', zIndex: 10 }}
//           >
//             <div className="flex flex-col gap-1">
//               <div className="flex items-center gap-4 flex-wrap">
//                 <h1 className="text-[clamp(44px,5.8vw,72px)] font-medium leading-[1.1] tracking-[-0.034em] text-[#4a5565]">
//                   Hey.
//                 </h1>
//                 <h1 className="text-[clamp(44px,5.8vw,72px)] font-medium leading-[1.1] tracking-[-0.034em] text-[#0a0c0d]">
//                   I'm Ola
//                 </h1>
//                 <div className="w-[56px] h-[62px] overflow-hidden rounded-xl border-2 border-white shadow-lg shrink-0">
//                   <img src={profileImg} alt="Oladimeji" className="w-full h-full object-cover object-top" />
//                 </div>
//               </div>
//               <h1 className="text-[clamp(44px,5.8vw,72px)] font-medium leading-[1.1] tracking-[-0.034em]">
//                 <span className="text-[#0a0c0d]">Great design </span>
//                 <span className="text-[#4a5565]">isn't just how it </span>
//                 <span className="text-[#0a0c0d]">looks </span>
//                 <span className="text-[#4a5565]">— it's how it </span>
//                 <span className="text-[#0a0c0d]">works. I nail both.</span>
//               </h1>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               {BADGES.map(({ label, icon }) => (
//                 <div
//                   key={label}
//                   className="flex items-center gap-2.5 rounded-full border border-[#e5e7eb] bg-white px-5 py-2.5 text-sm font-medium text-[#0a0c0d] shadow-sm"
//                 >
//                   {icon}
//                   <span>{label}</span>
//                 </div>
//               ))}
//             </div>

//             <CTAButton />
//           </div>

//           {/* ── Right column: descriptor paragraph ── */}
//           <div
//             className="absolute"
//             style={{ left: '57%', top: '-5vh', width: '37%' }}
//           >
//             <p className="text-sm leading-relaxed text-[#4a5565]">
//               I help startups and established teams stop guessing and start
//               growing through design that's researched, tested, and
//               relentlessly user-validated.
//             </p>
//           </div>

//           {/* ── Right column: floating cover images — clipped to hero bounds ── */}
//           <div
//             style={{
//               position: 'absolute', inset: 0,
//               overflow: 'hidden',
//               pointerEvents: 'none',
//             }}
//           >
//             {COVERS.map((p, i) => (
//               <div
//                 key={p.id}
//                 style={{
//                   position: 'absolute',
//                   left: `${FLOAT[i].l}%`,
//                   top: `${FLOAT[i].t}vh`,
//                   width: `${FLOAT[i].w}%`,
//                   aspectRatio: '677/420',
//                   backgroundColor: p.bg,
//                   borderRadius: '12px',
//                   overflow: 'hidden',
//                   transform: `rotate(${FLOAT[i].r}deg)`,
//                   zIndex: FLOAT[i].z,
//                   boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
//                   pointerEvents: 'auto',
//                 }}
//               >
//                 <img
//                   src={p.src}
//                   alt=""
//                   style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                   onError={e => { e.currentTarget.style.display = 'none' }}
//                 />
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }


const profileImg = '/WhatsApp Image 2026-04-13 at 15.16.18 1.png'

const COVERS = [
  { id: 'juncta',        src: '/covers/Frame 1618868784.png',   bg: '#0a0c0d' },
  { id: 'cargolandfood', src: '/covers/Frame 1618868785.png',   bg: '#f4ede4' },
  { id: 'orgsphere',     src: '/covers/Frame 1618868784-1.png', bg: '#e8f5ee' },
  { id: 'helpnest',      src: '/covers/Frame 1618868789.png',   bg: '#e8f0fb' },
]

const FLOAT = [
  { l: 60, t: 16, w: 28, r: -2,  z: 4 },
  { l: 70, t: 28, w: 23, r: 1.5, z: 3 },
  { l: 62, t: 42, w: 20, r: -1,  z: 2 },
  { l: 76, t: 50, w: 18, r: 2,   z: 1 },
]

function FloatingStar({ x, size, delay, duration }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 6 6" fill="white"
      style={{
        position: 'absolute', bottom: '4px', left: x,
        pointerEvents: 'none',
        animation: `starFloat ${duration}s ease-out ${delay}s infinite`,
      }}
    >
      <path d="M3 0 L3.4 2.6 L6 3 L3.4 3.4 L3 6 L2.6 3.4 L0 3 L2.6 2.6 Z" />
    </svg>
  )
}

const STARS = [
  { x: '8%',  size: 5, delay: 0,   duration: 2.0 },
  { x: '18%', size: 3, delay: 0.4, duration: 2.4 },
  { x: '28%', size: 4, delay: 0.8, duration: 1.8 },
  { x: '38%', size: 3, delay: 0.2, duration: 2.2 },
  { x: '48%', size: 5, delay: 1.0, duration: 2.0 },
  { x: '58%', size: 3, delay: 0.6, duration: 2.6 },
  { x: '68%', size: 4, delay: 0.3, duration: 1.9 },
  { x: '78%', size: 3, delay: 0.9, duration: 2.3 },
  { x: '88%', size: 5, delay: 0.5, duration: 2.1 },
]

function CTAButton() {
  return (
    <>
      <style>{`
        @keyframes starFloat {
          0%   { transform: translateY(0)    scale(0.6); opacity: 0;   }
          15%  { opacity: 0.9; }
          70%  { opacity: 0.6; }
          100% { transform: translateY(-48px) scale(1.1); opacity: 0; }
        }
      `}</style>
      <a
        href="#contact"
        className="relative inline-flex items-center gap-2 self-start rounded-full px-6 py-3 text-base font-medium text-white"
        style={{
          background: 'linear-gradient(180deg, #0a0c0d 0%, #0a0c0d 80%, rgba(255,255,255,0.15) 110%)',
          overflow: 'visible',
        }}
      >
        {STARS.map((s, i) => <FloatingStar key={i} {...s} />)}
        <span className="relative z-10">Get in touch</span>
        <svg className="relative z-10" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </a>
    </>
  )
}

const FigmaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 38 57" fill="none">
    <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE" />
    <path d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5A9.5 9.5 0 0 0 9.5 57z" fill="#0ACF83" />
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
    <path d="M19 0V19H28.5A9.5 9.5 0 0 0 19 0z" fill="#FF7262" />
  </svg>
)
const WebIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
  </svg>
)
const CodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
)

const BADGES = [
  { label: 'Figma',      icon: <FigmaIcon /> },
  { label: 'Web Design', icon: <WebIcon /> },
  { label: 'Front End',  icon: <CodeIcon /> },
]

export default function Hero() {
  return (
    <section id="hero" className="relative bg-white">
      <style>{`
        /* ── Mobile ─────────────────────────────────────── */
        .hero-mobile {
          display: flex;
          flex-direction: column;
          padding-top: 80px;
          padding-bottom: 40px;
          min-height: 100svh;
        }
        .hero-covers-strip {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          padding: 0 20px 4px;
        }
        .hero-covers-strip::-webkit-scrollbar { display: none; }
        .hero-cover-card {
          flex: 0 0 72vw;
          max-width: 280px;
          aspect-ratio: 677 / 420;
          border-radius: 12px;
          overflow: hidden;
          scroll-snap-align: start;
          box-shadow: 0 6px 24px rgba(0,0,0,0.10);
        }
        .hero-cover-card img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }

        /* ── Desktop ─────────────────────────────────────── */
        .hero-desktop { display: none; }

        @media (min-width: 768px) {
          .hero-mobile  { display: none; }
          .hero-desktop {
            display: block;
            height: 100vh;
            padding-top: 100px;
          }
        }
      `}</style>

      {/* ════════ MOBILE ════════ */}
      <div className="hero-mobile">
        <div className="flex flex-col gap-6 px-5">

          {/* Heading */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-[clamp(36px,10vw,52px)] font-medium leading-[1.1] tracking-[-0.034em] text-[#4a5565]">
                Hey.
              </h1>
              <h1 className="text-[clamp(36px,10vw,52px)] font-medium leading-[1.1] tracking-[-0.034em] text-[#0a0c0d]">
                I'm Ola
              </h1>
              <div className="w-[46px] h-[52px] overflow-hidden rounded-xl border-2 border-white shadow-lg shrink-0">
                <img src={profileImg} alt="Oladimeji" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <h1 className="text-[clamp(36px,10vw,52px)] font-medium leading-[1.1] tracking-[-0.034em]">
              <span className="text-[#0a0c0d]">Great design </span>
              <span className="text-[#4a5565]">isn't just how it </span>
              <span className="text-[#0a0c0d]">looks </span>
              <span className="text-[#4a5565]">— it's how it </span>
              <span className="text-[#0a0c0d]">works. I nail both.</span>
            </h1>
          </div>

          {/* Descriptor */}
          <p className="text-sm leading-relaxed text-[#4a5565]">
            I help startups and established teams stop guessing and start
            growing through design that's researched, tested, and
            relentlessly user-validated.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            {BADGES.map(({ label, icon }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-full border border-[#e5e7eb] bg-white px-5 py-2.5 text-sm font-medium text-[#0a0c0d] shadow-sm"
              >
                {icon}
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <CTAButton />
        </div>
      </div>

      {/* ════════ DESKTOP (original, unchanged) ════════ */}
      <div className="hero-desktop mx-auto max-w-[1440px] px-8">
        <div className="relative h-full">

          {/* Left column */}
          <div
            className="absolute flex flex-col gap-8"
            style={{ left: 0, top: 0, bottom: 0, width: '52%', justifyContent: 'center', zIndex: 10 }}
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-4 flex-wrap">
                <h1 className="text-[clamp(44px,5.8vw,72px)] font-medium leading-[1.1] tracking-[-0.034em] text-[#4a5565]">
                  Hey.
                </h1>
                <h1 className="text-[clamp(44px,5.8vw,72px)] font-medium leading-[1.1] tracking-[-0.034em] text-[#0a0c0d]">
                  I'm Ola
                </h1>
                <div className="w-[56px] h-[62px] overflow-hidden rounded-xl border-2 border-white shadow-lg shrink-0">
                  <img src={profileImg} alt="Oladimeji" className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <h1 className="text-[clamp(44px,5.8vw,72px)] font-medium leading-[1.1] tracking-[-0.034em]">
                <span className="text-[#0a0c0d]">Great design </span>
                <span className="text-[#4a5565]">isn't just how it </span>
                <span className="text-[#0a0c0d]">looks </span>
                <span className="text-[#4a5565]">— it's how it </span>
                <span className="text-[#0a0c0d]">works. I nail both.</span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-3">
              {BADGES.map(({ label, icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-full border border-[#e5e7eb] bg-white px-5 py-2.5 text-sm font-medium text-[#0a0c0d] shadow-sm"
                >
                  {icon}
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <CTAButton />
          </div>

          {/* Right: descriptor */}
          <div
            className="absolute"
            style={{ left: '57%', top: '-5vh', width: '37%' }}
          >
            <p className="text-sm leading-relaxed text-[#4a5565]">
              I help startups and established teams stop guessing and start
              growing through design that's researched, tested, and
              relentlessly user-validated.
            </p>
          </div>

          {/* Right: floating covers */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            {COVERS.map((p, i) => (
              <div
                key={p.id}
                data-hero-cover={i}
                style={{
                  position: 'absolute',
                  left: `${FLOAT[i].l}%`,
                  top: `${FLOAT[i].t}vh`,
                  width: `${FLOAT[i].w}%`,
                  aspectRatio: '677/420',
                  backgroundColor: p.bg,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transform: `rotate(${FLOAT[i].r}deg)`,
                  zIndex: FLOAT[i].z,
                  boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                  pointerEvents: 'auto',
                }}
              >
                <img
                  src={p.src}
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}