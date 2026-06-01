const services = [
  {
    title: 'Web Design',
    items: ['Websites', 'Landing Pages', 'Front End', 'Animation'],
  },
  {
    title: 'UX/UI Design',
    items: ['Dashboards', 'Mobile Apps', 'Product Strategy', 'Growth Design'],
  },
  {
    title: 'Branding',
    items: ['Packaging', 'Brand Assets', 'Typography'],
  },
  {
    title: 'Graphic Design',
    items: ['Illustrations', 'Presentations', 'Visuals', 'Icons'],
  },
]

function ServiceCard({ title, items }) {
  return (
    <div className="flex items-start gap-9 py-8 border-b border-[#e5e7eb]">
      <div className="w-5 h-5 mt-1 shrink-0 flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a0c0d" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12h8M14 9l3 3-3 3" />
        </svg>
      </div>
      <div className="flex flex-1 items-start justify-between gap-4">
        <h3 className="text-xl font-medium text-[#0a0c0d] shrink-0">{title}</h3>
        <div className="flex flex-col gap-1.5 text-sm text-[#4a5565] text-right">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function SectionLabel({ num, label }) {
  return (
    <div className="flex items-center gap-2 text-sm text-[#4a5565]">
      <span className="text-[#0a0c0d]">[{num}]</span>
      <span>{label}</span>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1440px] px-8">

      {/* ── [01] Who I am ── */}
      <div className="flex flex-col lg:flex-row gap-16 py-16">
        <div className="lg:w-[45%] pt-1">
          <SectionLabel num="01" label="Who I am" />
        </div>

        <div className="lg:w-[55%] flex flex-col gap-6">
          <p className="text-xl leading-relaxed text-[#0a0c0d]">
            Let's build something great together. I'm a designer who puts users at the center
            and makes your vision look amazing along the way.
          </p>
          {/* Dark frame — same text size as paragraph above */}
          <div className="rounded-2xl p-6" style={{ backgroundColor: '#0a0c0d' }}>
            <p className="text-xl leading-relaxed" style={{ color: '#ffffff' }}>
              Great design isn't just about looks — it's about solving real problems for real people.
              I'll help you create digital solutions that users love and your business grows from.
            </p>
          </div>
        </div>
      </div>

      {/* ── [02] Services ── */}
      <div id="services" className="flex flex-col lg:flex-row gap-16 py-16 border-t border-[#f3f4f6]">
        <div className="lg:w-[45%] pt-1">
          <SectionLabel num="02" label="Services" />
        </div>

        <div className="lg:w-[55%] flex flex-col gap-0">
          {/* Same size as [01] paragraph */}
          <p className="text-xl leading-relaxed text-[#4a5565] mb-8">
            Every service is tailored to meet your unique goals, ensuring a seamless blend
            of creativity and functionality.
          </p>
          <div>
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
