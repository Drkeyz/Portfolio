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

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#f3f4f6]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-3">
        {/* Logo */}
        <a
          href="/"
          className="rounded-full bg-[#0a0c0d] px-4 py-1.5 text-sm font-medium text-white hover:bg-[#4a5565] transition-colors"
        >
          Oladimeji
        </a>

        {/* Availability badge + clock */}
        <div className="hidden md:flex items-center gap-4">
          <AvailabilityTicker />
          <Clock />
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-8 text-sm text-[#0a0c0d]">
          <a href="#about" className="hover:text-[#4a5565] transition-colors">About</a>
          <a href="#services" className="hover:text-[#4a5565] transition-colors">Services</a>
          <a href="mailto:dimeji.adebiyi1@gmail.com" className="hover:text-[#4a5565] transition-colors">Contact</a>
          <a href="/projects/more" className="hover:text-[#4a5565] transition-colors">Project</a>
        </nav>
      </div>
    </header>
  )
}
