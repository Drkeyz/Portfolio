import { useRef, useEffect } from 'react'

const profileImg = '/WhatsApp Image 2026-04-13 at 15.16.18 1.png'

const PROJECTS = [
  { id: 'juncta',        title: 'Juncta',        year: '2026', type: 'UI Design', src: '/covers/Frame 1618868784.svg',   bg: '#0a0c0d' },
  { id: 'cargolandfood', title: 'Cargolandfood',  year: '2025', type: 'UI Design', src: '/covers/Frame 1618868785.svg',   bg: '#f4ede4' },
  { id: 'orgsphere',     title: 'Orgsphere',      year: '2025', type: 'UI Design', src: '/covers/Frame 1618868794.svg', bg: '#e8f5ee' },
  { id: 'celerfi',       title: 'CelerFi',        year: '2025', type: 'UI Design', src: '/covers/Frame 1618868789.svg',   bg: '#e8f0fb' },
]

// Hero floating positions — left/width as % of inner content div, top as vh, rotation in deg
const HERO = [
  { l: 53, t: 14, w: 30, r: -2,  z: 4 },
  { l: 63, t: 30, w: 25, r: 1.5, z: 3 },
  { l: 55, t: 45, w: 22, r: -1,  z: 2 },
  { l: 70, t: 53, w: 21, r: 2,   z: 1 },
]

// Grid end-positions: 2×2, gap ≈ 2% between columns
// Row-2 starts at 12 + cardH + 2vh gap; cardH ≈ 46.4vh at 1440×900
const GRID = [
  { l: 0,  t: 12, w: 49, r: 0 },
  { l: 51, t: 12, w: 49, r: 0 },
  { l: 0,  t: 61, w: 49, r: 0 },
  { l: 51, t: 61, w: 49, r: 0 },
]

const lerp  = (a, b, t) => a + (b - a) * t
const eio   = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
const clamp = (x) => Math.max(0, Math.min(1, x))

// ── Floating star animation ──────────────────────────────────────
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

// ── Skill badge icons ────────────────────────────────────────────
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

// ── Main component ───────────────────────────────────────────────
export default function HeroProjects() {
  const containerRef  = useRef(null)
  const innerRef      = useRef(null)   // content div (no padding) — positioned ancestor
  const heroRef       = useRef(null)
  const projHeaderRef = useRef(null)
  const coverRefs     = useRef([])
  const label1Ref     = useRef(null)
  const label2Ref     = useRef(null)
  const viewMoreRef   = useRef(null)

  useEffect(() => {
    let raf = null

    const tick = () => {
      const el = containerRef.current
      if (!el) return

      const { top, height } = el.getBoundingClientRect()
      const prog = clamp(-top / (height - window.innerHeight))
      const t    = eio(prog)

      // Hero text: fade out in first 35% of scroll
      if (heroRef.current)
        heroRef.current.style.opacity = String(clamp(1 - prog / 0.35))

      // Projects header: fade in between 40–60%
      if (projHeaderRef.current)
        projHeaderRef.current.style.opacity = String(clamp((prog - 0.4) / 0.2))

      // Row-1 labels: fade in between 72–90%
      const labOp = String(clamp((prog - 0.72) / 0.18))
      if (label1Ref.current) label1Ref.current.style.opacity = labOp
      if (label2Ref.current) label2Ref.current.style.opacity = labOp

      // View-more: fade in between 88–100%
      if (viewMoreRef.current)
        viewMoreRef.current.style.opacity = String(clamp((prog - 0.88) / 0.12))

      // Covers track the full scroll range
      coverRefs.current.forEach((cover, i) => {
        if (!cover) return
        const h = HERO[i], g = GRID[i]
        cover.style.left      = `${lerp(h.l, g.l, t)}%`
        cover.style.top       = `${lerp(h.t, g.t, t)}vh`
        cover.style.width     = `${lerp(h.w, g.w, t)}%`
        cover.style.transform = `rotate(${lerp(h.r, g.r, t)}deg)`
        cover.style.borderRadius = `${lerp(12, 16, t)}px`
      })
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => { raf = null; tick() })
    }

    tick()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf) }
  }, [])

  return (
    /* Scroll container — 280 vh gives 180 vh of travel at any viewport */
    <div ref={containerRef} id="projects" style={{ height: '280vh' }}>

      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden bg-white">

        {/* Outer: centres + adds page padding */}
        <div className="h-full mx-auto px-8">

          {/* Inner: NO padding — absolute children use this as their reference frame */}
          <div ref={innerRef} className="relative h-full">

            {/* ── Hero text (left column) ── */}
            <div
              ref={heroRef}
              className="absolute flex flex-col gap-8"
              style={{
                left: 0,
                top: 0,
                bottom: 0,
                width: '52%',
                justifyContent: 'center',
                willChange: 'opacity',
              }}
            >
              {/* Heading */}
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

              {/* Skill badges */}
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

            {/* ── "Selected projects" header (fades in) ── */}
            <div
              ref={projHeaderRef}
              className="absolute flex items-center justify-between"
              style={{
                left: 0,
                right: 0,
                top: '8vh',
                opacity: 0,
                willChange: 'opacity',
              }}
            >
              <h2 className="text-xl font-medium text-[#0a0c0d]">Selected projects</h2>
              <span className="text-sm text-[#4a5565]">'23 – Present</span>
            </div>

            {/* ── Animated cover images ── */}
            {PROJECTS.map((p, i) => (
              <div
                key={p.id}
                ref={el => { coverRefs.current[i] = el }}
                style={{
                  position: 'absolute',
                  left: `${HERO[i].l}%`,
                  top: `${HERO[i].t}vh`,
                  width: `${HERO[i].w}%`,
                  aspectRatio: '677/420',
                  backgroundColor: p.bg,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transform: `rotate(${HERO[i].r}deg)`,
                  zIndex: HERO[i].z,
                  willChange: 'left, top, width, transform',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                }}
              >
                <img
                  src={p.src}
                  alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
              </div>
            ))}

            {/* ── Row-1 labels (fade in when covers arrive) ── */}
            {/* Label for cover 0 (Juncta, left cell) */}
            <div
              ref={label1Ref}
              className="absolute flex items-start justify-between"
              style={{ left: '0%', top: '59.5vh', width: '49%', opacity: 0, willChange: 'opacity' }}
            >
              <h3 className="text-lg font-medium text-[#0a0c0d]">{PROJECTS[0].title}</h3>
              <div className="text-right text-sm text-[#4a5565] leading-relaxed">
                <div>{PROJECTS[0].year}</div>
                <div>{PROJECTS[0].type}</div>
              </div>
            </div>

            {/* Label for cover 1 (Cargolandfood, right cell) */}
            <div
              ref={label2Ref}
              className="absolute flex items-start justify-between"
              style={{ left: '51%', top: '59.5vh', width: '49%', opacity: 0, willChange: 'opacity' }}
            >
              <h3 className="text-lg font-medium text-[#0a0c0d]">{PROJECTS[1].title}</h3>
              <div className="text-right text-sm text-[#4a5565] leading-relaxed">
                <div>{PROJECTS[1].year}</div>
                <div>{PROJECTS[1].type}</div>
              </div>
            </div>

            {/* ── View more (fades in at end) ── */}
            <a
              ref={viewMoreRef}
              href="#"
              className="absolute flex items-center gap-2 text-sm font-medium text-[#0a0c0d] hover:text-[#4a5565] transition-colors"
              style={{
                bottom: '4vh',
                left: '50%',
                transform: 'translateX(-50%)',
                opacity: 0,
                whiteSpace: 'nowrap',
                willChange: 'opacity',
              }}
            >
              View more projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>

          </div>{/* /inner */}
        </div>{/* /outer */}
      </div>{/* /sticky */}
    </div>
  )
}
