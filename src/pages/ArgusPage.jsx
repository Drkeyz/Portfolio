import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PURPLE = '#7C3AED'
const INK = '#0a0c0d'
const SLATE = '#4a5565'
const SLATE_LIGHT = '#6b7280'
const CARD = '#f8f7ff'
const BORDER = '#EEF2FF'
const SERIF = '"Instrument Serif", Georgia, serif'

function SectionLabel({ number, children }) {
  return (
    <p className="text-sm font-medium mb-8 mt-3" style={{ color: PURPLE }}>
      {number && <span>[{number}]</span>} {children}
    </p>
  )
}

function StatTile({ value, label }) {
  return (
    <div>
      <p className="text-2xl font-semibold text-[#8B5CF6]">{value}</p>
      <p className="text-base mt-2" style={{ color: SLATE_LIGHT }}>{label}</p>
    </div>
  )
}

function InfoCard({ title, label, children }) {
  return (
    <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm hover:border-[#8B5CF6] transition-colors">
      <p className="text-xs uppercase tracking-[0.18em] mb-3" style={{ color: SLATE_LIGHT }}>{label}</p>
      <h3 className="text-2xl font-semibold mb-3" style={{ color: INK }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{children}</p>
    </div>
  )
}

function FeatureCard({ title, children, className, icon, imageUrl, imageBackground }) {
  return (
    <div className={`border-[#eeeeee] bg-white p-8 transition-colors ${className}`}>
      {icon && (
        <div className={`mb-4 w-[38px] h-[38px] rounded-[0.625rem] flex flex-col justify-center items-center ${imageBackground}`}>
          <img src={imageUrl} className='h-4 w-4'/>
        </div>
      )}
      <h3 className="text-2xl mb-3" style={{ color: INK, fontFamily: SERIF }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{children}</p>
    </div>
  )
}

function ProcessStep({ number, title, children, active }) {
  return (
    <div className={`group border-r-[0.67px] border-r-[#eeeeee] p-[18px] ${active ? 'border-[#E9D5FF]' : 'border-[#E5E7EB]'} bg-white shadow-sm hover:border-b-[#8B5CF6] hover:border-b-[2px] transition-colors`}>
      <p className="text-4xl text-[#eeeeee] mb-4 group-hover:text-[#8B5CF6]/30">{number}</p>
      <h4 className="text-2xl mb-3" style={{ color: INK, fontFamily: SERIF }}>{title}</h4>
      <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{children}</p>
    </div>
  )
}

function PillCard({ tag, title, children }) {
  return (
    <div className="border-t-0 border-l-0 border border-[#eeeeee] bg-white p-8 transition-colors">
      <span className="inline-flex rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.22em] font-semibold mb-4" style={{ background: `${tag === 'For Investors' ? '#ECFDF5' : tag === 'For Businesses' ? '#EFF6FF' : tag === 'For Researchers' ? '#ECFEFF' : '#FEF3C7'}`, color: INK }}>
        {tag}
      </span>
      <h4 className="text-xl mb-3" style={{ color: INK, fontFamily: SERIF }}>{title}</h4>
      <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{children}</p>
    </div>
  )
}

export default function ArgusPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white" style={{ color: INK }}>
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

      <section className="mx-auto max-w-[1440px] px-8 pt-12 pb-20">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex flex-col gap-3 w-full">
              <Link to="/projects/more" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-8">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                All projects
              </Link>
              
              <div className="flex flex-wrap items-center gap-8 text-xs uppercase tracking-[0.16em]" style={{ color: SLATE_LIGHT }}>
                <span>PROJECT / ARGUS</span>
                <span>SCOPE / LANDING PAGE</span>
              </div>
              <h1 className=" leading-[0.95] text-[64px] font-normal" style={{ fontFamily: SERIF, color: INK }}>
                Argus
                <span className="block italic" style={{ color: '#4b5563' }}>AI-Powered Blockchain</span>
                <span className="block">Analytics</span>
              </h1>
              <div className='flex justify-between w-full'>
                <p className="max-w-2xl text-lg leading-relaxed" style={{ color: SLATE }}>
                Designing a unified intelligence platform that transforms raw blockchain data into actionable insights — across 27 chains, in real time.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  {/* <div className="max-w-2xl text-lg leading-relaxed" style={{ color: SLATE }}>
              
                  </div> */}
                  <div className="flex gap-5">
                    <StatTile value="27" label="Chains" />
                    <StatTile value="100K+" label="Wallets tracked" />
                    <StatTile value="1" label="Dashboard" />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col items-end gap-3">
              <div className="text-right text-sm tracking-[0.16em] uppercase" style={{ color: SLATE_LIGHT }}>
                2024
              </div>
              <Link
                to="/projects/more"
                className="text-xs uppercase tracking-[0.16em] text-[#0a0c0d] hover:text-[#7C3AED] transition"
              >
                ← Back
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20">
        <div className='flex'>
          <div className="flex items-center gap-6 text-sm text-[#6D28D9] uppercase tracking-[0.18em] my-auto">
            <span>[01] Overview</span>
          </div>
          <h2 className="text-5xl font-normal tracking-[-0.03em] text-center flex-1" style={{ fontFamily: SERIF, color: INK }}>
            One dashboard. <span className="italic" style={{ color: SLATE }}>Total access.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <InfoCard label="The product" title="Argus">
            Argus is an AI-powered blockchain analytics platform designed to give crypto professionals unparalleled visibility across the entire blockchain ecosystem — from wallet behaviour to smart contract risks.
          </InfoCard>
          <InfoCard label="My role" title="Product Designer">
            Led end-to-end design from research through to high-fidelity prototypes. Responsible for information architecture, component systems, interaction patterns, and the overall visual language of the platform.
          </InfoCard>
          <InfoCard label="The problem" title="Fragmented data. No intelligence">
            Crypto professionals were forced to juggle dozens of disconnected tools to monitor wallets, assess risk, and interpret on-chain signals. There was no single source of truth — and no AI layer to connect it all.
          </InfoCard>
          <InfoCard label="The outcome" title="A unified intelligence hub">
            A comprehensive platform with AI-enhanced analytics, real-time anomaly detection, natural language querying, and multi-chain coverage — all accessible through a single, elegant interface.
          </InfoCard>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20">
        <div className='flex'>
          <div className="flex items-center gap-6 text-sm text-[#6D28D9] uppercase tracking-[0.18em] my-auto">
            <span>[02] Design</span>
          </div>
          <h2 className="text-5xl font-normal tracking-[-0.03em] text-center flex-1" style={{ fontFamily: SERIF, color: INK }}>
            <span className="italic" style={{ color: SLATE }}>The</span> full <span className="italic" style={{ color: SLATE }}>design.</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mt-16">
          <div className="overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-[#0f172a]">
            <img
              src="/Top half.png"
              alt="Argus landing page preview"
              className="w-full h-full object-cover"
              style={{ minHeight: '400px' }}
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-[#0f172a]">
            <img
              src="/Bottom half.png"
              alt="Argus design details preview"
              className="w-full h-full object-cover"
              style={{ minHeight: '400px' }}
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20">

        <div className='flex'>
          <div className="flex items-center gap-6 text-sm text-[#6D28D9] uppercase tracking-[0.18em] my-auto">
            <span>[03] Challenge</span>
          </div>
          <h2 className="text-5xl font-normal tracking-[-0.03em] text-center flex-1" style={{ fontFamily: SERIF, color: INK }}>
            <span className="italic" style={{ color: SLATE }}>The</span> complexity <span className="italic" style={{ color: SLATE }}>was the</span> enemy.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mt-16">
          <FeatureCard title="Data overload without context" icon={false} className="border rounded-2xl">
            Blockchain data is vast and raw. Users needed not just access to data, but a way to understand it at a glance — patterns, anomalies, and signals surfaced without manual effort.
          </FeatureCard>
          <FeatureCard title="Four very different user types" icon={false} className="border rounded-2xl">
            Investors, businesses, researchers, and compliance teams all had radically different needs, workflows, and mental models. A single interface had to flex intelligently across all four.
          </FeatureCard>
          <FeatureCard title="Making AI feel trustworthy" icon={false} className="border rounded-2xl">
            AI-generated insights in a high-stakes financial context had to feel transparent, reliable, and explainable. The design needed to build trust at every touchpoint.
          </FeatureCard>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20">

        <div className='flex'>
          <div className="flex items-center gap-6 text-sm text-[#6D28D9] uppercase tracking-[0.18em] my-auto">
            <span>[04] Process</span>
          </div>
          <h2 className="text-5xl font-normal tracking-[-0.03em] text-center flex-1" style={{ fontFamily: SERIF, color: INK }}>
            How we <span className="italic" style={{ color: SLATE }}>got</span> here.
          </h2>
        </div>

        <div className="grid xl:grid-cols-5 mt-16">
          <ProcessStep number="01" title="Discovery" active>
            Interviewed crypto investors, compliance leads, and on-chain researchers to map workflows, pain points, and mental models around blockchain data.
          </ProcessStep>
          <ProcessStep number="02" title="Architecture">
            Structured the information hierarchy to support four distinct user personas — balancing depth with progressive disclosure so the platform never felt overwhelmed.
          </ProcessStep>
          <ProcessStep number="03" title="Wireframing">
            Rapid wireframe iterations tested layout logic, dashboard density, and navigation patterns before any visual direction was locked in.
          </ProcessStep>
          <ProcessStep number="04" title="Visual Design">
            Developed a dark-first, technical design language with high-contrast data visualizations and a clear typographic hierarchy.
          </ProcessStep>
          <ProcessStep number="05" title="Prototype & Test">
            Interactive prototypes validated key flows — wallet labelling, anomaly alerts, and NLP query interactions — with real users before handoff.
          </ProcessStep>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20">

        <div className='flex'>
          <div className="flex items-center gap-6 text-sm text-[#6D28D9] uppercase tracking-[0.18em] my-auto">
            <span>[05] Key Features</span>
          </div>
          <h2 className="text-5xl font-normal tracking-[-0.03em] text-center flex-1" style={{ fontFamily: SERIF, color: INK }}>
            What Argus can do
          </h2>
        </div>

        <div className="grid md:grid-cols-3 mt-16">
          <FeatureCard 
            title="AI-Enhanced Wallet Labelling" 
            className="border-t-0 border-l-0 border" 
            icon={true}
            imageUrl={"/pulse.svg"}
            imageBackground="bg-[#11f611]/10"
          >
            ML models automatically identify and categorize wallet types — exchanges, whales, DeFi protocols — removing hours of manual tagging.
          </FeatureCard>

          <FeatureCard 
            title="Predictive Analytics" 
            className="border-t-0 border-l-0 border" 
            icon={true} 
            imageUrl={"/diamond.svg"}
            imageBackground="bg-[#3c0366]/10"
          >
            Time-series forecasting tracks blockchain metrics and surfaces early signals, helping users act ahead of the market.
          </FeatureCard>

          <FeatureCard 
            title="Anomaly Detection" 
            className="border-t-0 border-l-0 border-r-0 border" 
            icon={true} 
            imageUrl={"/warning.svg"}
            imageBackground="bg-[#d91316]/10"
          >
            Continuous monitoring flags unusual on-chain activity — sudden wallet movements, contract exploits, or suspicious clustering in real time.
          </FeatureCard>

          <FeatureCard 
            title="Smart Contract Analysis" 
            className="border-t-0 border-l-0 border border-b-0" 
            icon={true} 
            imageUrl={"/cube.svg"}
            imageBackground="bg-[#10afee]/10"
          >
            Deep inspection of contract behaviour, risk scoring, and interaction patterns — confidence before engaging with any protocol.
          </FeatureCard>

          <FeatureCard 
            title="Personalized Insights" 
            className="border-t-0 border-l-0 border border-b-0" 
            icon={true} 
            imageUrl={"/moon.svg"}
            imageBackground="bg-[#b4b707]/10"
          >
            AI recommendations tailored to each user's portfolio, watchlist, and behaviour — the platform gets smarter the more you use it.
          </FeatureCard>

          <FeatureCard 
            title="Natural Language Interface" 
            className="border-0" 
            icon={true} 
            imageUrl={"/stars.svg"}
            imageBackground="bg-[#510424]/10"
          >
            Query the entire blockchain dataset in plain English. No SQL, no technical overhead — ask a question, get an answer with supporting data instantly.
          </FeatureCard>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20">

        <div className='flex'>
          <div className="flex items-center gap-6 text-sm text-[#6D28D9] uppercase tracking-[0.18em] my-auto">
            <span>[06] Solutions</span>
          </div>
          <h2 className="text-5xl font-normal tracking-[-0.03em] text-center flex-1" style={{ fontFamily: SERIF, color: INK }}>
            Designed <span className="italic" style={{ color: SLATE }}>for every</span> professional.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 mt-16">
          <PillCard tag="For Investors" title="Data-driven investment decisions">
            <div>
              <p>
              The investor view surfaces portfolio risk, whale movement alerts, and market-timing signals in a single scannable dashboard.
              </p>
              <ul className='mt-3 list-disc pl-6'>
                <li>
                  Real-time whale wallet tracking and alerts
                </li>
                <li>
                  AI-scored risk assessment per asset
                </li>
                <li>
                  Portfolio exposure across 27 chains
                </li>
              </ul>
            </div>
          </PillCard>
          <PillCard tag="For Businesses" title="Optimize with blockchain intelligence">
            <div>
              <p>
                Businesses get automated monitoring, competitor on-chain analysis, and API access to embed Argus intelligence into their own products.
              </p>
              <ul className='mt-3 list-disc pl-6'>
                <li>
                  Custom monitoring dashboards per use case
                </li>
                <li>
                  Flexible API and SDK integrations
                </li>
                <li>
                  Competitor wallet and protocol tracking
                </li>
              </ul>
            </div>
          </PillCard>
          <PillCard tag="For Researchers" title="Deeper on-chain insights">
            <div>
              <p>
                Researchers get raw data access, interactive graph exploration, NLP querying, and exportable normalized datasets for serious investigation.
              </p>
              <ul className='mt-3 list-disc pl-6'>
                <li>
                  Interactive blockchain graph visualizations
                </li>
                <li>
                  NLP querying across full data history
                </li>
                <li>
                  Exportable normalized datasets
                </li>
              </ul>
            </div>
          </PillCard>
          <PillCard tag="For Compliance" title="Stay compliant with ease">
            <div>
              <p>
                Automated AML screening, regulatory reporting, smart contract auditing, and a complete audit trail with human-readable explanations built in.
              </p>
              <ul className='mt-3 list-disc pl-6'>
                <li>
                  Automated AML and sanctions screening
                </li>
                <li>
                  Regulatory report generation
                </li>
                <li>
                  Smart contract risk scoring and audit logs
                </li>
              </ul>
            </div>
          </PillCard>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 pb-20">

        <div className='flex'>
          <div className="flex items-center gap-6 text-sm text-[#6D28D9] uppercase tracking-[0.18em] my-auto">
            <span>[07] Design Decisions</span>
          </div>
          <h2 className="text-5xl font-normal tracking-[-0.03em] text-center flex-1" style={{ fontFamily: SERIF, color: INK }}>
            <span className="italic" style={{ color: SLATE }}>The</span> thinking <span className="italic" style={{ color: SLATE }}>behind the</span> work.
          </h2>
        </div>

        <div className="flex justify-between xl:flex-row mt-16">
          <div className="w-[581px] bg-white p-10 transition-colors">
            <div className='border-l-0 border-r-0 border border-[#8B5CF6] px-[24px] py-[14px]'>
              <h3 className="text-2xl mb-4" style={{ color: INK, fontFamily: SERIF }}>Dark-first visual language</h3>
              <p className="text-sm leading-relaxed" style={{ color: SLATE }}>
                Financial and data platforms live in dark environments — trading terminals, monitoring screens, late-night research sessions. Dark-first reduced eye strain across long sessions and made data visualizations dramatically more legible.
              </p>
            </div>

            <div className='border-l-0 border-r-0 border-t-0 border border-[#8B5CF6] px-[24px] py-[14px]'>
              <h3 className="text-2xl mb-4" style={{ color: INK, fontFamily: SERIF }}>Progressive disclosure over feature dumping</h3>
              <p className="text-sm leading-relaxed" style={{ color: SLATE }}>
                With six distinct feature areas and four user types, the risk of cognitive overload was real. Information architecture was structured around progressive disclosure — surface the signal, hide the noise.
              </p>
            </div>

            <div className='border-l-0 border-r-0 border-t-0 border border-[#8B5CF6] px-[24px] py-[14px]'>
              <h3 className="text-2xl mb-4" style={{ color: INK, fontFamily: SERIF }}>Trust through transparency in AI output</h3>
              <p className="text-sm leading-relaxed" style={{ color: SLATE }}>
                Every AI-generated insight was designed to show its reasoning — confidence scores, supporting data points, and clear labelling of what was predicted vs observed.
              </p>
            </div>

            <div className='border-l-0 border-r-0 border-t-0 border border-[#8B5CF6] px-[24px] py-[14px]'>
              <h3 className="text-2xl mb-4" style={{ color: INK, fontFamily: SERIF }}>Visual hierarchy through typography scale</h3>
              <p className="text-sm leading-relaxed" style={{ color: SLATE }}>
                Rather than leaning on colour to create hierarchy, we used aggressive typographic scale — large display headings, mono for metadata, small regular weight for body.
              </p>
            </div>
          </div>

          <div className="space-y-4 w-[431px] my-auto">
            {[
              'P1 Signal over noise — always surface the most important insight first',
              'P2 Trust is designed, not assumed — show the work behind every AI claim',
              'P3 Complexity lives in the data, not the interface',
              'P4 One system, four contexts — consistency builds fluency',
              'P5 Real-time should feel effortless, never anxious',
              'P6 Accessibility is a feature, especially in financial products',
            ].map((item) => (
              <div key={item} className="bg-[#eeeeee]/60 p-6 transition-colors">
                <p className="text-sm leading-relaxed" style={{ color: "#4A5565" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-[52px] text-center bg-[#8B5CF6]/10'>
        <div>
          <h1 className='text-5xl max-w-[880px] mx-auto' style={{fontFamily: SERIF}}>
            “The hardest design problems aren't visual — they're about deciding what not to show. Argus taught me that constraint is a creative act."
          </h1>
          <p className='mt-[22px] text-sm'>· REFLECTION ON THE PROJECT</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-8 py-20">

        <div className='flex'>
          <div className="flex items-center gap-6 text-sm text-[#6D28D9] uppercase tracking-[0.18em] my-auto">
            <span>[08] Learnings</span>
          </div>
          <h2 className="text-5xl font-normal tracking-[-0.03em] text-center flex-1" style={{ fontFamily: SERIF, color: INK }}>
            <span className="italic" style={{ color: SLATE }}>What I'd</span> take <span className="italic" style={{ color: SLATE }}>into the</span> next one.
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-3">
          <div className="border-t-0 border-l-0 border border-[#eeeeee] bg-white p-8 transition-colors">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#0a0c0d] text-[#0a0c0d]">
              <span className="text-xl">●</span>
            </div>
            <h3 className="text-2xl mb-4" style={{ color: INK, fontFamily: SERIF }}>
              Domain literacy changes everything
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: SLATE }}>
              Spending time learning the actual mechanics of blockchain, not just the user needs, made the design decisions sharper. The best insights came from understanding the data at a technical level, not just an abstract one.
            </p>
          </div>

          <div className="border-t-0 border-l-0 border border-[#eeeeee] bg-white p-8 transition-colors">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#0a0c0d] text-[#0a0c0d]">
              <span className="text-xl">◆</span>
            </div>
            <h3 className="text-2xl mb-4" style={{ color: INK, fontFamily: SERIF }}>
              Persona-driven design has limits
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: SLATE }}>
              Real users don't stay in their lane. An investor also does compliance checks. A researcher sometimes needs investor-style alerts. Designing for flexibility within persona frameworks was more valuable than strict isolation.
            </p>
          </div>

          <div className="border-t-0 border-l-0 border-r-0 border border-[#eeeeee] bg-white p-8 transition-colors">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#0a0c0d] text-[#0a0c0d]">
              <span className="text-xl">★</span>
            </div>
            <h3 className="text-2xl mb-4" style={{ color: INK, fontFamily: SERIF }}>
              AI UI is an emerging discipline
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: SLATE }}>
              There's no established playbook for how to present AI-generated insights in high-stakes contexts. Experimentation, user testing, and humility about what we didn't know led to better outcomes than relying on convention.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/projects/more"
            className="inline-flex items-center justify-center rounded-full bg-[#0a0c0d] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#111827]"
          >
            View other projects
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
