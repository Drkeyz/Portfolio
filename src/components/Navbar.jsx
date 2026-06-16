// import { useEffect, useState } from 'react'

// function AvailabilityTicker() {
//   return (
//     <div className="flex items-center gap-2 overflow-hidden rounded-full border border-[#e5e7eb] px-3 py-1 text-sm text-[#4a5565]">
//       <span className="relative flex h-2 w-2">
//         <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
//         <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
//       </span>
//       <span className="whitespace-nowrap">Open to work</span>
//       <span className="text-[#d1d5db]">/</span>
//       <span className="whitespace-nowrap">Available for hire</span>
//     </div>
//   )
// }

// function Clock() {
//   const [time, setTime] = useState('')

//   useEffect(() => {
//     const update = () => {
//       setTime(
//         new Date().toLocaleTimeString('en-US', {
//           hour: '2-digit',
//           minute: '2-digit',
//           hour12: true,
//         })
//       )
//     }
//     update()
//     const id = setInterval(update, 1000)
//     return () => clearInterval(id)
//   }, [])

//   return (
//     <div className="flex items-center gap-1.5 text-sm text-[#4a5565]">
//       <span className="h-2 w-2 rounded-full bg-[#0a0c0d]" />
//       <span>{time}</span>
//     </div>
//   )
// }

// export default function Navbar() {
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#f3f4f6]">
//       <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-3">
//         {/* Logo */}
//         <a
//           href="/"
//           className="rounded-full bg-[#0a0c0d] px-4 py-1.5 text-sm font-medium text-white hover:bg-[#4a5565] transition-colors"
//         >
//           Oladimeji
//         </a>

//         {/* Availability badge + clock */}
//         <div className="hidden md:flex items-center gap-4">
//           <AvailabilityTicker />
//           <Clock />
//         </div>

//         {/* Nav links */}
//         <nav className="flex items-center gap-8 text-sm text-[#0a0c0d]">
//           <a href="#about" className="hover:text-[#4a5565] transition-colors">About</a>
//           <a href="#services" className="hover:text-[#4a5565] transition-colors">Services</a>
//           <a href="mailto:dimeji.adebiyi1@gmail.com" className="hover:text-[#4a5565] transition-colors">Contact</a>
//           <a href="#projects" className="hover:text-[#4a5565] transition-colors">Project</a>
//         </nav>
//       </div>
//     </header>
//   )
// }


import { useEffect, useState } from 'react'

function AvailabilityTicker() {
  return (
    <div className="flex items-center gap-2 overflow-hidden rounded-full border border-[#e5e7eb] px-3 py-1 text-sm text-[#4a5565]">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      <span className="whitespace-nowrap">Open to work</span>
      <span className="text-[#d1d5db]">/</span>
      <span className="whitespace-nowrap">Available for hire</span>
    </div>
  )
}

function Clock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex items-center gap-1.5 text-sm text-[#4a5565]">
      <span className="h-2 w-2 rounded-full bg-[#0a0c0d]" />
      <span>{time}</span>
    </div>
  )
}

function MenuIcon({ open }) {
  return (
    <svg
      width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
    >
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6"  x2="21" y2="6"  />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  )
}

const NAV_LINKS = [
  { label: 'About',   href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: 'mailto:dimeji.adebiyi1@gmail.com' },
  { label: 'Project', href: '#projects' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll while menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#f3f4f6]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-8 py-3">

          {/* Logo */}
          <a
            href="/"
            className="rounded-full bg-[#0a0c0d] px-4 py-1.5 text-sm font-medium text-white hover:bg-[#4a5565] transition-colors"
          >
            Oladimeji
          </a>

          {/* Center: availability + clock — desktop only */}
          <div className="hidden md:flex items-center gap-4">
            <AvailabilityTicker />
            <Clock />
          </div>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#0a0c0d]">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="hover:text-[#4a5565] transition-colors">
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile right: compact availability + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            {/* Compact availability dot */}
            <div className="flex items-center gap-1.5 text-xs text-[#4a5565]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span>Available</span>
            </div>

            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-[#e5e7eb] text-[#0a0c0d] hover:bg-[#f3f4f6] transition-colors"
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile drawer ── */}

      {/* Backdrop */}
      <div
        onClick={close}
        aria-hidden="true"
        className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-200"
        style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }}
      />

      {/* Slide-down panel */}
      <div
        className="md:hidden fixed left-0 right-0 z-40 bg-white border-b border-[#f3f4f6] shadow-sm"
        style={{
          top: '53px',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'transform 0.22s ease, opacity 0.22s ease',
        }}
      >
        <div className="mx-auto max-w-[1440px] px-5 pt-4 pb-6 flex flex-col gap-1">

          {/* Nav links */}
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={close}
              className="flex items-center justify-between py-3.5 text-base font-medium text-[#0a0c0d] border-b border-[#f3f4f6] last:border-0 hover:text-[#4a5565] transition-colors"
            >
              {label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}

          {/* Full availability ticker + clock inside drawer */}
          <div className="mt-4 flex items-center justify-between">
            <AvailabilityTicker />
            <Clock />
          </div>

        </div>
      </div>
    </>
  )
}