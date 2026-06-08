import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../components/Footer'

const ACCENT = '#9F5FFE'
const INK = '#0a0c0d'
const SLATE = '#4a5565'
const SLATE_LIGHT = '#6b7280'
const BORDER = '#EDE9FE'
const SERIF = '"Instrument Serif", Georgia, serif'

function SectionLabel({ number, children }) {
  return (
    <p className="text-sm font-medium mb-8 mt-3" style={{ color: ACCENT }}>
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

function HighlightCard({ title, children }) {
  return (
    <div className="rounded-[2rem] border border-[#EDE9FE] bg-white p-8 shadow-sm transition-colors hover:border-[#9F5FFE]">
      <h3 className="text-xl font-semibold mb-4" style={{ color: INK }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{children}</p>
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
        <Link to="/" className="text-xl font-medium tracking-tight" style={{ color: INK }}>
          Oladimeji.
        </Link>
        <div className="flex items-center gap-2 rounded-full border border-[#EDE9FE] bg-[#F9F5FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[#9F5FFE]"></span>
          Case Study 05
        </div>
        <Link to="/" className="text-sm font-medium hover:text-[#9F5FFE] transition-colors" style={{ color: SLATE }}>
          All projects
        </Link>
      </nav>

      <main className="mx-auto max-w-[1440px] px-8 pt-[100px] pb-20">
        <div className="grid gap-12 xl:grid-cols-[1fr_460px] xl:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.18em]" style={{ color: SLATE_LIGHT }}>
              <span>PROJECT / LIGHTER OF LIVES</span>
              <span>SCOPE / FOUNDATION SITE</span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.18em]">
              <span className="text-[#9F5FFE]">01 — landing page · charity</span>
              <Link to="/projects/more" className="font-medium text-[#0a0c0d] hover:text-[#9F5FFE] transition-colors">
                ← Back to more projects
              </Link>
            </div>

            <h1 className="mt-8 text-[clamp(56px,7vw,96px)] leading-[0.95] font-normal" style={{ fontFamily: SERIF, color: INK }}>
              Lighter of Lives Foundation.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed" style={{ color: SLATE }}>
              A compassionate website design for a foundation that supports out-of-school children in Nigeria, blending trust, warmth, and clarity across every page.
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.22em] text-[#9F5FFE]">Link to Lighter of Lives Foundation</p>
          </div>

          <div className="rounded-[2rem] border border-[#EDE9FE] bg-[#F9F5FF] shadow-sm overflow-hidden">
            <img
              src="/Lighter of Lives.png"
              alt="Lighter of Lives Foundation hero preview"
              className="w-full h-full object-cover"
              style={{ minHeight: '420px' }}
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
          </div>
        </div>

        <section className="mt-20 grid gap-6 xl:grid-cols-4">
          <InfoCard label="My role" title="Product design">
            Led the brand-driven website direction with content hierarchy, interaction rhythm, and visual trust signals.
          </InfoCard>
          <InfoCard label="Pages" title="Five pages">
            Home, About, Our works, Gallery, and Contact were designed as a single coherent experience.
          </InfoCard>
          <InfoCard label="Year" title="2025">
            Built to feel modern, hopeful, and easy to navigate for donors, partners, and families.
          </InfoCard>
          <InfoCard label="Focus" title="Accessibility & trust">
            The site balances emotional storytelling with clear donation pathways and impact transparency.
          </InfoCard>
        </section>
      </main>

      <section className="mx-auto max-w-[1440px] px-8 pb-20 pt-10">
        <div className="mb-14">
          <SectionLabel number="01.5">Interactive Prototype</SectionLabel>
          <h2 className="text-[clamp(42px,6vw,72px)] font-normal tracking-[-0.03em] mb-4" style={{ fontFamily: SERIF, color: INK }}>
            Explore the full desktop experience.
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed" style={{ color: SLATE }}>
            Scroll within the browser window below to explore the entire high-fidelity landing page mockup.
          </p>
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
          <div className="h-[75vh] w-full overflow-y-auto browser-mockup-scroll bg-gray-50">
            <img 
              src="/Lol foundation.png" 
              alt="Full landing page mockup" 
              className="w-full h-auto block"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20">
        <SectionLabel number="02">Design</SectionLabel>
        <h2 className="text-[clamp(42px,6vw,72px)] font-normal tracking-[-0.03em] text-center mb-14" style={{ fontFamily: SERIF, color: INK }}>
          Five pages. One coherent story.
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          <PreviewCard title="Home" image="/Home lol.png" />
          <PreviewCard title="About" image="/About  lol.png" />
          <PreviewCard title="Our works" image="/Our works lol.png" />
          <PreviewCard title="Gallery" image="/Gallery lol.png" />
          <PreviewCard title="Contact" image="/Hero lol.png" />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20">
        <div className="grid gap-10 xl:grid-cols-[370px_1fr] xl:items-start">
          <div>
            <SectionLabel number="03">First impression</SectionLabel>
            <h2 className="text-[clamp(42px,6vw,72px)] font-normal tracking-[-0.03em]" style={{ fontFamily: SERIF, color: INK }}>
              First impression earns trust.
            </h2>
          </div>

          <div className="space-y-8">
            <p className="max-w-3xl text-lg leading-relaxed" style={{ color: SLATE }}>
              The homepage and visual system were designed to feel instantly credible while still conveying warmth, care, and the hopeful energy of the foundation.
            </p>
            <div className="rounded-[2rem] border border-[#EDE9FE] bg-[#F9F5FF] p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.22em] mb-4" style={{ color: ACCENT }}>Brand promise</p>
              <p className="text-sm leading-relaxed" style={{ color: SLATE }}>
                A clean foundation site with soft purple accents, generous white space, and clear calls to action for supporters and families alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20">
        <div className="grid gap-10 xl:grid-cols-[1fr_420px] xl:items-center">
          <div>
            <SectionLabel number="04">Impact</SectionLabel>
            <h2 className="text-[clamp(42px,6vw,72px)] font-normal tracking-[-0.03em] mb-8" style={{ fontFamily: SERIF, color: INK }}>
              Empowering Lives, Transforming Futures.
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed" style={{ color: SLATE }}>
              The website is built to guide visitors from inspiration to action, making it easy to understand the foundation’s work and donate with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects/more"
                className="inline-flex items-center justify-center rounded-full bg-[#0a0c0d] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#3f3b70]"
              >
                View other projects
              </Link>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-full border border-[#EDE9FE] px-8 py-3 text-sm font-medium text-[#0a0c0d] transition hover:border-[#9F5FFE] hover:text-[#9F5FFE]"
              >
                View the gallery
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-[#EDE9FE] overflow-hidden shadow-sm">
              <img
                src="/Hero lol.png"
                alt="Hero section image"
                className="w-full h-full object-cover"
                style={{ minHeight: '300px' }}
                onError={e => { e.currentTarget.style.display = 'none' }}
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-[#EDE9FE] overflow-hidden shadow-sm">
                <img
                  src="/About  lol.png"
                  alt="About page preview"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '4 / 5' }}
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="rounded-[2rem] border border-[#EDE9FE] overflow-hidden shadow-sm">
                <img
                  src="/Home lol.png"
                  alt="Home page preview"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '4 / 5' }}
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20">
        <div className="grid gap-10 xl:grid-cols-[1fr_420px] xl:items-start">
          <div>
            <SectionLabel number="05">Mission</SectionLabel>
            <h2 className="text-[clamp(42px,6vw,72px)] font-normal tracking-[-0.03em] mb-6" style={{ fontFamily: SERIF, color: INK }}>
              To empower out-of-school children in Nigeria.
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed" style={{ color: SLATE }}>
              The foundation site was shaped by the need to communicate impact clearly, make support easy to access, and build trust through storytelling and community evidence.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <StatCard value="5+" label="Programs launched" />
              <StatCard value="50+" label="Community partners" />
              <StatCard value="63+" label="Children supported" />
              <StatCard value="100+" label="Volunteer hours" />
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-[#EDE9FE] overflow-hidden shadow-sm">
              <img
                src="/About  lol.png"
                alt="Foundation story image"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4 / 3' }}
                onError={e => { e.currentTarget.style.display = 'none' }}
              />
            </div>
            <div className="rounded-[2rem] border border-[#EDE9FE] overflow-hidden shadow-sm">
              <img
                src="/Gallery lol.png"
                alt="Gallery page preview"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4 / 3' }}
                onError={e => { e.currentTarget.style.display = 'none' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20">
        <SectionLabel number="06">Portfolio</SectionLabel>
        <h2 className="text-[clamp(42px,6vw,72px)] font-normal tracking-[-0.03em] text-center mb-14" style={{ fontFamily: SERIF, color: INK }}>
          A portfolio of excellence, showcasing the skill and dedication we bring to every project.
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          <HighlightCard title="Charity’s mission to put vulnerable children first">
            A concise purpose statement, donation pathway, and impact detail make it easy for supporters to engage without feeling overwhelmed.
          </HighlightCard>
          <HighlightCard title="Charity’s mission to educate children in local communities">
            Structured case studies and program pages help donors understand how each gift translates into meals, classes, and safe spaces.
          </HighlightCard>
          <HighlightCard title="A charity story designed to build trust"
          >
            Clear proof points, partner logos, and visible impact metrics were used to convert empathy into action.
          </HighlightCard>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20" id="gallery">
        <SectionLabel number="07">Gallery</SectionLabel>
        <h2 className="text-[clamp(42px,6vw,72px)] font-normal tracking-[-0.03em] text-center mb-14" style={{ fontFamily: SERIF, color: INK }}>
          Our photo gallery.
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <GalleryItem src="/Gallery lol.png" alt="Foundation gallery image" />
          <GalleryItem src="/Home lol.png" alt="Field work photo" />
          <GalleryItem src="/About  lol.png" alt="Volunteer moment" />
          <GalleryItem src="/Hero lol.png" alt="Children smiling" />
          <GalleryItem src="/Our works lol.png" alt="Event photo" />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20">
        <div className="rounded-[2rem] border border-[#EDE9FE] bg-[#F9F5FF] p-10 shadow-sm">
          <div className="grid gap-10 xl:grid-cols-[420px_1fr] xl:items-center">
            <div>
              <SectionLabel number="08">Our partners</SectionLabel>
              <h2 className="text-[clamp(42px,6vw,72px)] font-normal tracking-[-0.03em] mb-6" style={{ fontFamily: SERIF, color: INK }}>
                Partners who make the work possible.
              </h2>
              <p className="max-w-3xl text-lg leading-relaxed" style={{ color: SLATE }}>
                The design highlights trusted collaborators and reinforces the foundation’s commitment to accountability and measurable impact.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {['Chams', 'Enlight', 'KindHub'].map((label) => (
                <div key={label} className="rounded-full border border-[#EDE9FE] bg-white px-6 py-4 text-center text-sm font-semibold text-[#0a0c0d] shadow-sm">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20">
        <div className="grid gap-10 xl:grid-cols-[1fr_420px] xl:items-start">
          <div>
            <SectionLabel number="09">Connect</SectionLabel>
            <h2 className="text-[clamp(42px,6vw,72px)] font-normal tracking-[-0.03em] mb-6" style={{ fontFamily: SERIF, color: INK }}>
              Send a message to the foundation team.
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed" style={{ color: SLATE }}>
              A visually calm contact form was included to encourage inquiries, volunteer signups, and partner introductions without adding friction.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#EDE9FE] bg-white p-8 shadow-sm">
            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold" style={{ color: INK }}>Name</label>
              <input className="w-full rounded-2xl border border-[#EDE9FE] bg-[#FAF8FF] px-4 py-3 text-sm outline-none focus:border-[#9F5FFE]" placeholder="Your name" />
            </div>
            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold" style={{ color: INK }}>Email</label>
              <input className="w-full rounded-2xl border border-[#EDE9FE] bg-[#FAF8FF] px-4 py-3 text-sm outline-none focus:border-[#9F5FFE]" placeholder="you@example.com" />
            </div>
            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold" style={{ color: INK }}>Message</label>
              <textarea className="w-full rounded-[1.5rem] border border-[#EDE9FE] bg-[#FAF8FF] px-4 py-3 text-sm outline-none focus:border-[#9F5FFE]" rows="5" placeholder="Tell us what you need." />
            </div>
            <button className="w-full rounded-full bg-[#0a0c0d] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#3f3b70]">
              Send message
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-24">
        <SectionLabel number="10">FAQ</SectionLabel>
        <h2 className="text-[clamp(42px,6vw,72px)] font-normal tracking-[-0.03em] text-center mb-14" style={{ fontFamily: SERIF, color: INK }}>
          The questions that help visitors decide.
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          <FAQItem
            question="How does the site build trust?"
            answer="By using clear impact metrics, partner logos, and straightforward donation pathways that feel transparent and human." 
          />
          <FAQItem
            question="What makes this foundation site different?"
            answer="It balances emotional storytelling with practical navigation, so visitors never wonder where to donate or learn more."
          />
          <FAQItem
            question="Was accessibility considered?"
            answer="Yes. The layout uses strong contrast, readable typography, and an intuitive page flow for both donors and families." 
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-24">
        <SectionLabel number="11">Choices</SectionLabel>
        <h2 className="text-[clamp(42px,6vw,72px)] font-normal tracking-[-0.03em] text-center mb-14" style={{ fontFamily: SERIF, color: INK }}>
          The choices that shaped the site.
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <HighlightCard title="Warm visual language">
            A purple-forward palette was paired with soft gradients and generous white space to feel hopeful and modern.
          </HighlightCard>
          <HighlightCard title="Clear donation paths">
            Every page keeps the call to support visible without making the experience feel heavy or transactional.
          </HighlightCard>
          <HighlightCard title="Impact-first storytelling">
            Program metrics, beneficiary stories, and partner proof are surfaced early to build confidence.
          </HighlightCard>
          <HighlightCard title="Responsive page previews">
            The hero and gallery sections show the site’s full scope in a compact, visual way.
          </HighlightCard>
          <HighlightCard title="Consistent spacing system">
            Rounded cards, soft borders, and balanced margins help every section feel calm and navigable.
          </HighlightCard>
          <HighlightCard title="Accessible typography"
          >
            Large headings and readable body copy were chosen to keep the content approachable for all visitors.
          </HighlightCard>
        </div>
      </section>

      <Footer />
    </div>
  )
}
