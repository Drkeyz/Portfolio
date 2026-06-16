import { Link } from 'react-router-dom'

const PROJECTS = [
  { id: 'juncta',        title: 'Juncta',        year: '2026', type: 'UI Design', src: '/covers/Frame 1618868789.svg',   bg: '#0a0c0d', route: '/projects/juncta' },
  { id: 'cargolandfood', title: 'Cargolandfood',  year: '2025', type: 'UI Design', src: '/covers/Frame 1618868785.svg',   bg: '#f4ede4', route: '/projects/cargolandfood' },
  { id: 'orgsphere',     title: 'Orgsphere',      year: '2025', type: 'UI Design', src: '/covers/Frame 1618868784-1.png', bg: '#e8f5ee', route: '/projects/orgsphere' },
  { id: 'helpnest',      title: 'Helpnest',        year: '2025', type: 'UI Design', src: '/covers/Frame 1618868789.png',   bg: '#e8f0fb', route: '/projects/helpnest' },
]

function ProjectCard({ p }) {
  const inner = (
    <>
      {/* Cover */}
      <div
        className="relative w-full overflow-hidden rounded-2xl group-hover:shadow-xl transition-shadow"
        style={{ backgroundColor: p.bg, aspectRatio: '677/420' }}
      >
        <img
          src={p.src}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
        {/* View project overlay — only when route exists */}
        {p.route && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
            <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#0a0c0d] shadow-lg">
              View project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </div>
        )}
      </div>

      {/* Label row */}
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-medium text-[#0a0c0d]">{p.title}</h3>
        <div className="text-right text-sm text-[#4a5565] leading-relaxed">
          <div>{p.year}</div>
        </div>
      </div>
    </>
  )

  if (p.route) {
    return (
      <Link to={p.route} className="group flex flex-col gap-3 cursor-pointer">
        {inner}
      </Link>
    )
  }

  return (
    <div className="group flex flex-col gap-3">
      {inner}
    </div>
  )
}

export default function Projects({ viewMoreRoute = '/projects/more' }) {
  return (
    <section id="projects" className="mx-auto max-w-[1440px] px-8 pb-16">

      {/* Header row */}
      <div className="flex items-center justify-between mb-6 mt-[62px]">
        <h2 className="text-xl font-medium text-[#0a0c0d]">Selected projects</h2>
        <span className="text-sm text-[#4a5565]">'23 – Present</span>
      </div>

      {/* 2×2 grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>

      {viewMoreRoute && (
        <div className="flex justify-center mt-10">
          <Link
            to={viewMoreRoute}
            className="flex items-center gap-2 text-sm font-medium text-[#0a0c0d] hover:text-[#4a5565] transition-colors"
          >
            View more projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>
      )}

    </section>
  )
}
