const logos = [
  { src: '/_1460737703600.png',  alt: 'Helpnest' },
  { src: '/Logo.png',            alt: 'Brand' },
  { src: '/CTYW-logoMain 1.png', alt: 'CTYW' },
  { src: '/default 2.png',       alt: 'Brand' },
  { src: '/Frame 10169.png',     alt: 'Brand' },
  { src: '/div.nav-logo.png',    alt: 'Brand' },
]

const track = [...logos, ...logos]

export default function Logos() {
  return (
    <section className="w-full">
      {/* Top rule — 30px margin below it starts the scroll */}
      <hr style={{ borderColor: '#EEEEEE', margin: '62px 0 30px 0px', borderTopWidth: '1px' }} />

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 24s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="overflow-hidden">
        <div className="marquee-track">
          {track.map(({ src, alt }, i) => (
            <div key={i} className="flex items-center justify-center px-12 shrink-0">
              <img
                src={src}
                alt={alt}
                className="h-9 w-auto max-w-[130px] object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom rule — 30px margin above it */}
      <hr style={{ borderColor: '#EEEEEE', margin: '30px 0 0 0', borderTopWidth: '1px' }} />
    </section>
  )
}
