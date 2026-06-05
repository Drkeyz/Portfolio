import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PROJECTS = [
  { id: 'argus', title: 'Argus', year: '2024', type: 'UI Design', src: '/Argus.png', route: '/projects/argus' },
  { id: 'lighter-of-lives', title: 'Lighter of Lives Foundation', year: '2025', type: 'UI Design', src: '/Lighter of Lives.png', route: '/projects/lighter-of-lives' },
  { id: 'cartagro', title: 'CartAgro', year: '2024', type: 'UI Design', src: '/CartAgro.png', route: '/projects/cartagro' },
  { id: 'sneaker-store', title: 'Sneaker Store', year: '2025', type: 'UI Design', src: '/Sneaker Store.png', route: '/projects/sneaker-store' },
]

function ProjectCard({ p }) {
  return (
    <Link to={p.route} className="group flex flex-col gap-3 cursor-pointer">
      <div
        className="relative w-full overflow-hidden rounded-2xl group-hover:shadow-xl transition-shadow"
        style={{ backgroundColor: '#f7f7f8', aspectRatio: '677/420' }}
      >
        <img
          src={p.src}
          alt={p.title}
          className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
      </div>

      <div className="flex items-start justify-between">
        <h3 className="text-base font-medium text-[#0a0c0d]">{p.title}</h3>
        <div className="text-right text-sm text-[#4a5565] leading-relaxed">
          <div>{p.year}</div>
          <div>{p.type}</div>
        </div>
      </div>
    </Link>
  )
}

export default function MoreProjectsPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white" style={{ color: '#0a0c0d' }}>
      <Navbar />

      <main className="mx-auto max-w-[1440px] px-8 pt-24 pb-16">
        <div className="gap-y-8">
          <div className="flex-1">
            <Link to="/" className="text-sm text-[#4a5565] mb-4 inline-block">&lt; All projects</Link>
          </div>
          <div className='flex justify-between'>
            <h1 className="mt-2 text-[clamp(32px,4.4vw,48px)] font-medium" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>More projects</h1>
            <p className="w-1/3 text-sm text-[#4a5565] my-auto">
              Some of these projects aren’t part of the main portfolio; some are projects I played around with and decided to include.
            </p>
          </div>
        </div>

        <section className="mt-8">
          <div className="grid grid-cols-2 gap-8">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
