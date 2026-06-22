import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import Projects from '../components/Projects'
import Tagline from '../components/Tagline'
import About from '../components/About'
import WhyMe from '../components/WhyMe'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const ANIM_COVERS = [
  { id: 'juncta',        src: '/covers/Frame 1618868784.png',   bg: '#0a0c0d' },
  { id: 'cargolandfood', src: '/covers/Frame 1618868785.png',   bg: '#f4ede4' },
  { id: 'orgsphere',     src: '/covers/Frame 1618868784-1.png', bg: '#e8f5ee' },
  { id: 'helpnest',      src: '/covers/Frame 1618868789.png',   bg: '#e8f0fb' },
]

const HERO_ROTATIONS = [-2, 1.5, -1, 2]

const STAGGER = [0, 0.04, 0.08, 0.12]

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))
const lerp   = (a, b, t)      => a + (b - a) * t
const ease   = t => t < .5 ? 4*t*t*t : 1 - (-2*t + 2) ** 3 / 2   // cubic in-out
const smooth = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1)
  return t * t * (3 - 2 * t)
}

export default function Home() {
  const projectsWrapRef = useRef(null)
  const cardsRef = useRef([])
  const rafId = useRef(null)

  useEffect(() => {
    const update = () => {
      const projectsEl = projectsWrapRef.current
      if (!projectsEl) return

      const heroCovers = document.querySelectorAll("[data-hero-cover]")
      const projectCovers = document.querySelectorAll("[data-project-cover]")

      if (window.innerWidth < 768) {
        heroCovers.forEach(el => { el.style.opacity = "" })
        projectCovers.forEach(el => { el.style.opacity = "" })
        cardsRef.current.forEach(c => { if (c) c.style.opacity = "0" })
        return
      }

      if (!heroCovers.length || !projectCovers.length) return

      const scrollY = window.scrollY
      const viewH = window.innerHeight

      const projectsTop = projectsEl.getBoundingClientRect().top + scrollY
      const animStart = 40
      const animEnd = projectsTop - viewH * 0.35
      if (animEnd <= animStart) return

      const p = clamp((scrollY - animStart) / (animEnd - animStart), 0, 1)

      heroCovers.forEach(el => {
        el.style.opacity = String(1 - smooth(0.02, 0.14, p))
      })

      projectCovers.forEach(el => {
        el.style.opacity = String(smooth(0.86, 0.98, p))
      })

      const alpha = smooth(0.01, 0.08, p) * (1 - smooth(0.86, 0.98, p))

      const fromRects = Array.from(heroCovers).map(el => el.getBoundingClientRect())
      const toRects   = Array.from(projectCovers).map(el => el.getBoundingClientRect())

      cardsRef.current.forEach((card, i) => {
        if (!card || !fromRects[i] || !toRects[i]) return

        const s  = STAGGER[i]
        const lp = clamp((p - s) / (1 - s), 0, 1)
        const t  = ease(lp)

        const fr = fromRects[i]
        const tr = toRects[i]

        card.style.left = `${lerp(fr.left,   tr.left,   t)}px`
        card.style.top = `${lerp(fr.top,    tr.top,    t)}px`
        card.style.width = `${lerp(fr.width,  tr.width,  t)}px`
        card.style.height = `${lerp(fr.height, tr.height, t)}px`
        card.style.transform = `rotate(${lerp(HERO_ROTATIONS[i], 0, t)}deg)`
        card.style.borderRadius = `${lerp(12, 16, t)}px`
        card.style.opacity = String(alpha)
        card.style.zIndex = String(48 + (4 - i)) 
      })
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(update)
    }

    window.addEventListener("scroll", onScroll, { passive: true} )
    window.addEventListener("resize", update)
    requestAnimationFrame(update)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", update)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div
        aria-hidden="true"
        style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 50 }}
      >
        {ANIM_COVERS.map((c, i) => (
          <div
            key={c.id}
            ref={el => { cardsRef.current[i] = el }}
            style={{
              position: 'absolute',
              backgroundColor: c.bg,
              overflow: 'hidden',
              opacity: 0,
              boxShadow: '0 8px 40px rgba(0,0,0,.12)',
              // willChange lets the browser promote these to their own layer
              willChange: 'left, top, width, height, transform, opacity',
            }}
          >
            <img
              src={c.src}
              alt=""
              draggable={false}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
          </div>
        ))}
      </div>
      <main>
        <Hero />
        <Logos />
        <div ref={projectsWrapRef}>
          <Projects />
        </div>
        <Tagline />
        <About />
        <WhyMe />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
