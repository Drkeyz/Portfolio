import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const ACCENT = '#9F5FFE'
const INK = '#0a0c0d'
const SLATE = '#4a5565'
const SLATE_LIGHT = '#6b7280'
const BORDER = '#EDE9FE'
const SERIF = '"Instrument Serif", Georgia, serif'
// const INTER = '"Inter", Georgia, serif'

function SectionLabel({ number, children }) {
  return (
    <p className="text-sm font-medium mb-8 mt-3 my-auto" style={{ color: ACCENT }}>
      {number && <span>[{number}]</span>} {children}
    </p>
  )
}

function InfoCard({ title, label, children }) {
  return (
    <div className="rounded-[2rem] border border-[#EDE9FE] bg-white p-8 shadow-sm transition-colors hover:border-[#9F5FFE]">
      <p className="text-xs uppercase tracking-[0.18em] mb-3" style={{ color: SLATE_LIGHT }}>{label}</p>
      <h3 className="text-2xl font-semibold mb-3" style={{ color: INK }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{children}</p>
    </div>
  )
}

function PreviewCard({ title, image }) {
  return (
    <div className="rounded-[2rem] border border-[#EDE9FE] bg-white overflow-hidden shadow-sm transition-colors hover:border-[#9F5FFE]">
      <div className="h-[220px] overflow-hidden bg-[#F9F5FF]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
      </div>
      <div className="p-5">
        <p className="text-sm uppercase tracking-[0.22em] text-[#9F5FFE] mb-2">Page</p>
        <h3 className="text-lg font-semibold" style={{ color: INK }}>{title}</h3>
      </div>
    </div>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-[2rem] border border-[#EDE9FE] bg-white p-8 text-center shadow-sm transition-colors hover:border-[#9F5FFE]">
      <p className="text-[clamp(42px,5vw,56px)] font-semibold" style={{ color: INK }}>{value}</p>
      <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#6B7280]">{label}</p>
    </div>
  )
}

function HighlightCard({ title, number, children }) {
  return (
    <div className="border border-[#EDE9FE] bg-white p-8 flex flex-col gap-y-4 hover:bg-[#9F5FFE]/5">
      {number && <h2 className='text-[#9F5FFE]'>{number}</h2>}
      <h3 className="text-2xl" style={{ color:  INK, fontFamily: SERIF }}>{title}</h3>
      <p className="leading-relaxed text-sm" style={{ color: SLATE }}>{children}</p>
    </div>
  )
}

function GalleryItem({ src, alt }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#EDE9FE] bg-white shadow-sm">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        style={{ aspectRatio: '4 / 3' }}
        onError={e => { e.currentTarget.style.display = 'none' }}
      />
    </div>
  )
}

function FAQItem({ question, answer }) {
  return (
    <div className="rounded-[2rem] border border-[#EDE9FE] bg-white p-8 shadow-sm transition-colors hover:border-[#9F5FFE]">
      <h3 className="text-lg font-semibold mb-3" style={{ color: INK }}>{question}</h3>
      <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{answer}</p>
    </div>
  )
}

export default function LighterOfLivesPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white" style={{ color: INK }}>
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .browser-mockup-scroll::-webkit-scrollbar {
            width: 8px;
          }
          .browser-mockup-scroll::-webkit-scrollbar-track {
            background: #f1f1f1; 
            border-radius: 4px;
          }
          .browser-mockup-scroll::-webkit-scrollbar-thumb {
            background: #d1d5db; 
            border-radius: 4px;
          }
          .browser-mockup-scroll::-webkit-scrollbar-thumb:hover {
            background: #9ca3af; 
          }
        `}
      </style>

      <nav className="flex items-center justify-between px-8 py-6 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            Oladimeji.
          </Link>
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600">
            <span className="h-2 w-2 rounded-full bg-[#10b981]"></span>
            Project 03
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-black transition-colors">Back to work</Link>
          <Link to="/#services" className="hover:text-black transition-colors">Services</Link>
          <Link to="/#contact" className="hover:text-black transition-colors">Contact</Link>
        </div>
      </nav>

      <section className="mx-auto max-w-[1440px] px-8 pb-20 pt-12">
        <div className="">
          <div>
            <Link to="/projects/more" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-8">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              All projects
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.18em]" style={{ color: SLATE_LIGHT }}>
              <span>PROJECT / LIGHTER OF LIVES</span>
              <span>SCOPE / FOUNDATION SITE</span>
            </div>

            <div className="mt-[70px] flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.18em]">
              <span className="text-[#9F5FFE]">01 — landing page · charity</span>
              {/* <Link to="/projects/more" className="font-medium text-[#0a0c0d] hover:text-[#9F5FFE] transition-colors">
                ← Back to more projects
              </Link> */}
            </div>

            <h1 className="mt-8 text-[64px] leading-[0.95] font-normal w-[300px]" style={{ fontFamily: SERIF, color: INK }}>
              Lighter of <span style={{ color: SLATE_LIGHT }}>Lives</span> Foundation
            </h1>
            <div className='flex justify-between'>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed" style={{ color: SLATE }}>
                A pro bono, full website design for a Nigerian charity working to put out-of-school children back in the classroom. Every pixel in service of a bigger mission.
              </p>
              <a href='' className="mt-6 text-sm uppercase tracking-[0.22em] text-[#9F5FFE] underline my-auto">Link to Lighter of Lives Foundation</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#EEEEEE] pt-8 mt-8 px-8">
        <div className='mx-auto px-8 max-w-[1440px] flex flex-col gap-y-8'>
          <div className='flex justify-between gap-8'>
            <div className="flex flex-col gap-1">
              <p className="text-[11px] tracking-[0.1em] mb-2" style={{ color: SLATE }}>ROLE</p>
              <p className="text-[15px] leading-snug" style={{ color: INK }}>UI/UX Designer</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[11px] tracking-[0.1em] mb-2" style={{ color: SLATE }}>PAGES</p>
              <p className="text-[15px] leading-snug" style={{ color: INK }}>5 Pages</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[11px] tracking-[0.1em] mb-2" style={{ color: SLATE }}>TOOLS</p>
              <p className="text-[15px] leading-snug" style={{ color: INK }}>Figma</p>
            </div>
            <div className="flex flex-col gap-1 pr-16">
              <p className="text-[11px] tracking-[0.1em] mb-2" style={{ color: SLATE }}>PLATFORM</p>
              <p className="text-[15px] leading-snug" style={{ color: INK }}>Web</p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-1 xl:grid-cols-2 mt-8">
          <HighlightCard title="The Organization">
            Lighter of Lives Foundation — a Nigerian charity focused on getting out-of-school children back into education
          </HighlightCard>
          <HighlightCard title="The Brief">
            Design a full website that builds trust, communicates mission, and drives donations & volunteer sign-ups
          </HighlightCard>
          <HighlightCard title="The Challenge">
            500,000+ out-of-school children in Lagos State — the organisation needed a digital presence worthy of the urgency
          </HighlightCard>
          <HighlightCard title="My Contributions">
            End-to-end solo design: visual identity, layout system, all 5 pages — designed and delivered for free
          </HighlightCard>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20 pt-10 flex flex-col gap-y-8">

        <div className='flex w-[88.3%] mx-auto'>
          <div className="flex items-center gap-6 text-sm text-[#6D28D9]  my-auto">
            <span className='text-sm'>[01] The UI</span>
          </div>
          <h2 className="text-5xl font-normal tracking-[-0.03em] text-center flex-1" style={{ fontFamily: SERIF, color: INK }}>
            <span className="italic" style={{ color: SLATE }}>Five pages.</span> One coherent story.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          <img src='/home_lol.png'/>
          <img src='/about_us_lol.png'/>
          <img src='/our_works_lol.png'/>
          <img src='/get_involved_lol.png'/>
          <img src='/contact_us.png'/>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20 pt-10 flex flex-col gap-y-8">

        <div className='flex w-[88.3%] mx-auto justify-between'>
          <div className="flex items-center gap-6 text-sm text-[#6D28D9] h-fit mt-3">
            <span className='text-sm'>[02] Home</span>
          </div>

          <div className='w-[721px]'>
            <h2 className="text-5xl font-normal tracking-[-0.03em]" style={{ fontFamily: SERIF, color: INK }}>
              <span className="italic" style={{ color: SLATE }}>First impression.</span> earns trust.
            </h2>
            <p className='mt-3 text-lg'>
              The homepage had one job: make a visitor who knows nothing about the foundation feel the weight of the problem, 
              then make it easy to do something about it. 
              Emotional photography, clear statistics, and a single primary CTA worked together to achieve that.</p>
          </div>
        </div>
        
        <div className="rounded-[2rem] border border-[#EDE9FE] bg-white shadow-xl overflow-hidden mx-auto">
          <div className="flex items-center border-b border-[#EDE9FE] bg-[#F9F5FF] px-6 py-4">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ef4444]"></div>
              <div className="h-3 w-3 rounded-full bg-[#eab308]"></div>
              <div className="h-3 w-3 rounded-full bg-[#22c55e]"></div>
            </div>
            <div className="mx-auto flex h-8 w-full max-w-md items-center justify-center rounded-full bg-white px-4 text-xs text-[#6b7280] shadow-sm border border-[#EDE9FE]">
              <svg className="mr-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
              https://lighteroflives.org
            </div>
            <div className="w-[44px]"></div>
          </div>
          <div className="h-[900px] w-full overflow-y-auto browser-mockup-scroll bg-gray-50">
            <img 
              src="/lol_foundation.svg" 
              alt="Full landing page mockup" 
              className="w-full h-auto block"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-24 flex flex-col gap-y-8">

        <div className='flex w-[88.3%] mx-auto'>
          <div className="flex items-center gap-6 text-sm text-[#6D28D9]  my-auto">
            <span className='text-sm'>[03] Design Decisions</span>
          </div>
          <h2 className="text-5xl font-normal tracking-[-0.03em] text-center flex-1" style={{ fontFamily: SERIF, color: INK }}>
            <span className="italic" style={{ color: SLATE }}>The</span> choices {" "}
            <span className="italic" style={{ color: SLATE }}>that</span> shaped {" "}
            <span className="italic" style={{ color: SLATE }}>the site.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-1 xl:grid-cols-2">
          <HighlightCard title="Purple as the emotional anchor" number="01">
            Purple was chosen as the primary brand colour — it carries associations of dignity, 
            wisdom, and compassion, all qualities central to the foundation's identity. 
            The lavender tints and pale purple backgrounds keep the tone warm and approachable rather than corporate.
          </HighlightCard>
          <HighlightCard title="Authentic photography over illustration" number="02">
            Every image in the design uses real photographs of the children, volunteers, and team behind the foundation. 
            Stock imagery would have distanced the visitor from the reality of the work. 
            Authentic photography closes that distance and makes the mission tangible.
          </HighlightCard>
          <HighlightCard title="Consistent hero pattern across all pages" number="03">
            Every page opens with the same lavender hero section and large heading. 
            This wasn't laziness, it was a deliberate system choice. 
            It gives users an immediate sense of navigation, keeps the brand consistent, 
            and makes every page feel part of the same family.
          </HighlightCard>
          <HighlightCard title="Donation transparency on the Works page" number="04">
            Showing the fundraising progress bar (₦45,254 raised of ₦100,000) was a trust-building decision. 
            Charity donors want to know their money is going somewhere real and that the organization is honest about where it stands. 
            Transparency earns more than polish.
          </HighlightCard>
          <HighlightCard title="Three engagement levels on Get Involved" number="05">
            Not every visitor is ready to donate. Designing three clearly distinct entry points-  
            Donate, Volunteer, Advocate — ensures no visitor leaves without a way to participate. 
            Lower-commitment options (sharing, advocating) often become gateways to deeper involvement.
          </HighlightCard>
          <HighlightCard 
            title="FAQ on both Contact and Home pages"
            number="06"
          >
            Placing FAQ sections on multiple pages was a strategic UX decision, not repetition. 
            On the Home page it catches early-stage visitors; on the Contact page it reduces inbound messages. 
            The same answer in two places catches more people at different stages of the journey.
          </HighlightCard>
        </div>
      </section>

      <section className='py-[52px] text-center bg-[#8B5CF6]/10'>
        <div>
          <h1 className='text-5xl max-w-[880px] mx-auto' style={{fontFamily: SERIF}}>
            "Designing for free for a cause you believe in is one of the purest design exercises there is — the brief is the mission, and every decision has to earn its place."
          </h1>
          <p className='mt-[22px] text-sm'>· REFLECTION ON THE PROJECT</p>
        </div>
      </section>

      <div className="py-[92px] flex justify-center">
        <Link
          to="/projects/more"
          className="inline-flex items-center justify-center rounded-full bg-[#0a0c0d] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#111827]"
        >
          View other projects
        </Link>
      </div>

      <Footer />
    </div>
  )
}
