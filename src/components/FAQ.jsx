import { useState } from 'react'

const faqs = [
  {
    num: '01',
    question: 'How long does a typical project take to complete?',
    answer:
      'A typical project timeline varies based on scope and complexity. Simple landing pages take 1–2 weeks, while full product designs or multi-screen apps range from 4–12 weeks. I provide a detailed timeline estimate during our discovery call.',
  },
  {
    num: '02',
    question: 'Can you work with my existing brand and designs?',
    answer:
      'Absolutely. I regularly work within existing brand guidelines and can extend or refine them as needed while maintaining consistency.',
  },
  {
    num: '03',
    question: 'What makes your design process unique?',
    answer:
      'I blend research-driven UX thinking with high-craft visual design. Every decision is grounded in user needs and business goals — not just aesthetic preference.',
  },
  {
    num: '04',
    question: 'Do you offer ongoing support after the project is complete?',
    answer:
      'Yes. I offer retainer-based support packages for ongoing design needs, from iterating on live products to designing new features as your product grows.',
  },
]

function FAQItem({ num, question, answer }) {
  const [open, setOpen] = useState(num === '01')

  return (
    <div className="border-b border-[#e5e7eb] py-6">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <div className="flex items-center gap-5">
          <span className="text-sm text-[#4a5565] shrink-0">{num}</span>
          <span className="text-base font-medium text-[#0a0c0d]">{question}</span>
        </div>
        <svg
          width="20" height="20" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="1.5"
          className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      {open && (
        <div className="mt-4 pl-10 pr-8">
          <p className="text-sm text-[#4a5565] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

const profileImg = '/WhatsApp Image 2026-04-13 at 15.16.18 1.png'

export default function FAQ() {
  return (
    <section className="px-8 py-20 mx-auto max-w-[1440px]">
      <div className="flex flex-col lg:flex-row gap-16">

        {/* Left — FAQs */}
        <div className="lg:w-[55%]">
          <h2 className="text-[clamp(32px,3.5vw,48px)] font-medium tracking-[-0.025em] text-[#0a0c0d] mb-10 leading-tight">
            Your questions<br />answered.
          </h2>
          <div>
            {faqs.map((f) => (
              <FAQItem key={f.num} {...f} />
            ))}
          </div>
        </div>

        {/* Right — booking CTA card */}
        <div className="lg:w-[45%] lg:pl-12 flex items-start lg:items-center">
          <div className="w-full border border-[#e5e7eb] rounded-3xl p-10 flex flex-col gap-7">
            {/* Profile photo */}
            <img
              src={profileImg}
              alt="Oladimeji"
              className="w-16 h-16 rounded-2xl object-cover object-top"
            />

            <div className="flex flex-col gap-3">
              <p className="text-sm text-[#4a5565]">Still not sure?</p>
              <h3 className="text-2xl font-medium text-[#0a0c0d]">Book a free discovery call.</h3>
              <p className="text-sm text-[#4a5565] leading-relaxed">
                Learn more about how I work and how I can help you build products your users will love.
              </p>
            </div>

            <a
              href="mailto:dimeji.adebiyi1@gmail.com"
              className="inline-flex items-center gap-2 self-start rounded-full bg-[#0a0c0d] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#4a5565] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M3 9l9 6 9-6" />
              </svg>
              Schedule Now
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
