const behanceIcon = 'https://www.figma.com/api/mcp/asset/77cc0ed4-0548-451e-8786-7463ccaccf8a'
const youtubeIcon = 'https://www.figma.com/api/mcp/asset/927eb215-398f-4c3b-9acf-faeff5959dc4'
import { FileUser, icons } from "lucide-react"

const socials = [
  {
    label: 'X / Twitter',
    href: 'https://x.com/_holadimeji_',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.738-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/dimejiadebiyi',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 4h7.5c2.2 0 4 1.3 4 3.5 0 1.3-.7 2.3-1.8 2.9 1.5.5 2.5 1.7 2.5 3.3 0 2.5-1.9 4.3-4.5 4.3H2V4zm2 5.5h4.8c1.2 0 2-.7 2-1.8 0-1.2-.8-1.7-2-1.7H4v3.5zm0 5.8h5.1c1.3 0 2.1-.8 2.1-2 0-1.3-.9-2-2.1-2H4v4zm12-9h6v1.5h-6V6.3zm.5 3.5c.5-1 1.5-1.5 2.7-1.5 2 0 3.3 1.3 3.3 3.3v.8h-4.7c.1 1 .8 1.6 1.8 1.6.7 0 1.3-.3 1.6-.8h1.9c-.5 1.5-1.8 2.4-3.5 2.4-2.2 0-3.7-1.4-3.7-3.5 0-.9.2-1.7.6-2.3zm2.6.4c-.9 0-1.5.5-1.7 1.3h3.3c-.2-.9-.7-1.3-1.6-1.3z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://drive.google.com/file/d/1lhh2OEUNUH2Z2uAZKd0g3kIpyrc8HTPH/view?usp=sharing',
    // icon: (
    //   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    //     <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    //   </svg>
    // ),
    icon: <FileUser/>
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/oladimeji-adebiyi/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0c0d] text-white overflow-hidden relative">
      {/* Large blurred watermark */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[clamp(80px,18vw,250px)] font-bold leading-none text-transparent"
          style={{
            fontFamily: '"Space Grotesk", monospace',
            backgroundImage: 'linear-gradient(98.56deg, rgba(234,242,255,0.4) 1.48%, rgba(38,42,46,0.4) 98.29%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            filter: 'blur(4px)',
            letterSpacing: '-0.02em',
          }}
        >
          OLADIMEJI
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-8 py-12 flex flex-col gap-12">
        {/* Heading */}
        <div>
          <p className="text-[clamp(40px,5vw,72px)] font-normal leading-[1.25]" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
            Lets design
          </p>
          <p
            className="text-[clamp(40px,5vw,72px)] font-normal leading-[1.25] text-[#4a5565]"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            incredible work together.
          </p>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <span className="text-xs text-[#6a7282] uppercase tracking-widest">Email</span>
            <a
              href="mailto:dimeji.adebiyi1@gmail.com"
              className="text-base text-white hover:text-[#4a5565] transition-colors"
              target="_blank"
            >
              dimeji.adebiyi1@gmail.com
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <span className="text-xs text-[#6a7282] uppercase tracking-widest">Social</span>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white text-[#0a0c0d] flex items-center justify-center hover:bg-[#e5e7eb] transition-colors shrink-0"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between border-t border-white/10 pt-6 text-xs text-[#6a7282]">
          <span>© {new Date().getFullYear()} Oladimeji Adebiyi</span>
          <span>UX/UI Designer</span>
        </div>
      </div>
    </footer>
  )
}
