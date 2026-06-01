const benefits = [
  {
    title: 'Skilled Professional',
    desc: 'With decades in tech and 7+ years of experience, I bring a depth of knowledge that ensures every design decision is informed, intentional, and impactful.',
    contrast: 'Lack of experience may result in design inconsistencies and costly revisions.',
  },
  {
    title: 'Future-Ready Designs',
    desc: 'Crafting modern, scalable designs that grow with your business — built for today and ready for tomorrow.',
    contrast: 'Lack of experience may result in design inconsistencies and costly revisions.',
  },
  {
    title: 'Client-Centric Collaboration',
    desc: 'Your goals drive every decision. I work as an extension of your team, not just a vendor.',
    contrast: 'Lack of experience may result in design inconsistencies and costly revisions.',
  },
  {
    title: 'Timely Project Tracking',
    desc: 'Transparent communication and on-time delivery. You always know where your project stands.',
    contrast: 'Lack of experience may result in design inconsistencies and costly revisions.',
  },
]

function BenefitCard({ title, desc, contrast }) {
  return (
    <div className="flex items-start gap-6 py-8 border-b border-[#e5e7eb]">
      {/* Check icon */}
      <div className="mt-1 shrink-0">
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
          <path d="M1 10l4 4 6-8" stroke="#0a0c0d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Me */}
      <div className="flex-1 flex flex-col gap-2">
        <h3 className="text-xl font-medium text-[#0a0c0d]">{title}</h3>
        <p className="text-sm text-[#4a5565] leading-relaxed">{desc}</p>
      </div>

      {/* Others */}
      <div className="hidden lg:flex flex-col gap-2 w-[340px] shrink-0 pl-6 border-l border-[#e5e7eb]">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border border-[#d1d5db] flex items-center justify-center">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M1 1l6 6M7 1L1 7" stroke="#9ca3af" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
        <p className="text-sm text-[#9ca3af] leading-relaxed">{contrast}</p>
      </div>
    </div>
  )
}

export default function WhyMe() {
  return (
    <section className="px-8 py-16 mx-auto max-w-[1440px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-12">
        <span className="rounded-full border border-[#e5e7eb] px-4 py-1.5 text-sm text-[#4a5565]">
          Why choose me
        </span>
        <h2 className="text-[clamp(28px,3vw,42px)] font-medium text-[#0a0c0d] tracking-[-0.025em] text-center">
          Why me as Design Partner
        </h2>
      </div>

      {/* Cards */}
      <div>
        {benefits.map((b) => (
          <BenefitCard key={b.title} {...b} />
        ))}
      </div>
    </section>
  )
}
