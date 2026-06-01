import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../components/Footer'

/* ─────────────────────────────────────────────────────────────
   DESIGN TOKENS
───────────────────────────────────────────────────────────── */
const TEAL = '#17CFAA'
const INK = '#0a0c0d'
const SLATE = '#4a5565'
const SERIF = '"Instrument Serif", Georgia, serif'

/* ─────────────────────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────────────────────── */
function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#f3f4f6]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-3">
        <Link
          to="/"
          className="rounded-full bg-[#0a0c0d] px-4 py-1.5 text-sm font-medium text-white hover:bg-[#4a5565] transition-colors"
        >
          Oladimeji
        </Link>

        <div className="flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-sm text-[#4a5565]">
          <span className="h-2 w-2 rounded-full" style={{ background: TEAL }} />
          Case Study 04
        </div>

        <Link
          to="/"
          className="flex items-center gap-1.5 text-sm text-[#4a5565] hover:text-[#0a0c0d] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          All projects
        </Link>
      </div>
    </header>
  )
}

function SectionLabel({ number, children }) {
  return (
    <p className="text-sm font-medium mb-8 mt-3" style={{ color: TEAL }}>
      {number && <span>[{number}]</span>}{' '}{children}
    </p>
  )
}

function ProblemCard({ n, title, body }) {
  return (
    <div className="helpnest-card rounded-2xl p-8 flex flex-col gap-4">
      <span className="text-sm font-medium" style={{ color: TEAL }}>{n}</span>
      <h3 className="text-lg font-semibold leading-snug" style={{ color: INK }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{body}</p>
    </div>
  )
}

export default function HelpnestPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <style>{`
        .helpnest-card {
          border: 1.5px solid #EEEEEE;
          transition: border-color 0.2s;
        }
        .helpnest-card:hover {
          border-color: ${TEAL};
        }
      `}</style>

      <div className="min-h-screen bg-white" style={{ color: INK }}>
        <Navbar />

        <main className="mx-auto max-w-[1440px] px-8 pt-20 pb-16">
          <p className="text-sm tracking-[0.12em] uppercase text-[#2F6D9B] mb-8">
            04 — CUSTOMER SUPPORT · SAAS PLATFORM
          </p>

          <div className="mb-10">
            <h1
              className="leading-[1] tracking-[-0.03em]"
              style={{ fontFamily: SERIF, fontSize: 'clamp(80px,11vw,144px)', color: INK }}
            >
              Helpnest.
            </h1>
            <p
              className="leading-[1.1] mt-2"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(56px,8vw,108px)',
                fontStyle: 'italic',
                color: SLATE,
                letterSpacing: '-0.02em',
              }}
            >
              Closing the gap
            </p>
            <p
              className="leading-[1] mt-2"
              style={{ fontFamily: SERIF, fontSize: 'clamp(80px,11vw,144px)', color: INK }}
            >
              between bot and human.
            </p>
          </div>

          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: SLATE }}>
            An AI-native support platform that blends intelligent triage, seamless human escalation,
            and cross-product analytics into one workspace. Built for B2B SaaS teams who can't afford
            to choose between speed and context.
          </p>
        </main>

        <section className="mx-auto max-w-[1440px] px-8 py-20">
          <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
            <div className="flex flex-col gap-2 pt-1">
              <SectionLabel number="01">Overview</SectionLabel>
              <p className="text-sm mt-4" style={{ color: SLATE }}>The brief</p>
            </div>
            <div>
              <h2
                className="font-normal leading-[1.1] mb-8"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(36px,4vw,56px)',
                  letterSpacing: '-0.02em',
                  color: INK,
                }}
              >
                Helpnest bridges support automation with human escalation.
              </h2>
              <div className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl" style={{ color: SLATE }}>
                <p>
                  Support teams need a single workspace where bots resolve common issues, agents
                  regain context instantly, and customer intent never gets lost in handoff.
                  Helpnest is designed for that handoff moment — the place where AI and humans
                  must work together without friction.
                </p>
                <p>
                  The platform combines triage, conversation history, and product-aware escalation
                  so managers can see what matters, agents can act with confidence, and customers
                  feel the full service flow instead of the break in it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 py-16 border-t border-[#EEEEEE]">
          <div className="grid grid-cols-[240px_1fr] gap-16 items-start mb-16">
            <div className="flex flex-col gap-2 pt-1">
              <SectionLabel number="02">Problem solved</SectionLabel>
              <p className="text-sm" style={{ color: SLATE }}>The challenge</p>
            </div>
            <div>
              <h2
                className="font-normal leading-[1] tracking-[-0.03em]"
                style={{ fontFamily: SERIF, fontSize: 'clamp(36px,4vw,56px)', color: INK }}
              >
                Five structural failures <span style={{ fontStyle: 'italic', color: SLATE }}>every support team inherits.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: '01',
                title: 'Context death at escalation',
                body: 'When the bot hands off to a human agent, the conversation thread resets and the agent loses the customer context the bot already collected.',
              },
              {
                n: '02',
                title: 'Invisible queue priority',
                body: 'Without a structured triage layer, agents can’t distinguish urgent product issues from routine tickets until it’s too late.',
              },
              {
                n: '03',
                title: 'Fragmented performance visibility',
                body: 'Support managers lack a unified view of which product friction points are driving volume and which actions actually resolve cases.',
              },
              {
                n: '04',
                title: 'Knowledge base outside the flow',
                body: 'Agents switch tabs to consult documentation while customers wait, breaking the support flow and increasing resolution time.',
              },
              {
                n: '05',
                title: 'Reactive escalation rules',
                body: 'Escalation logic often triggers too late, after customers have already expressed frustration and the handoff becomes more expensive.',
              },
              {
                n: '06',
                title: 'The throughline',
                body: 'Helpnest treats the bot-to-human transition as a first-class design problem instead of a broken afterthought.',
              },
            ].map((item) => (
              <ProblemCard key={item.n} {...item} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 py-16 border-t border-[#EEEEEE]">
          <div className="grid grid-cols-[240px_1fr] gap-16 items-start mb-12">
            <div className="flex flex-col gap-2 pt-1">
              <SectionLabel number="03">Who uses it</SectionLabel>
            </div>
            <div>
              <h2
                className="font-normal leading-[1.1] mb-4"
                style={{ fontFamily: SERIF, fontSize: 'clamp(36px,4vw,56px)', color: INK }}
              >
                Three roles, <span style={{ fontStyle: 'italic', color: SLATE }}>one shared surface.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                role: 'Support agent',
                desc: 'Handles live conversations across multiple products with the bot context and response tools in a single workspace.',
              },
              {
                role: 'Support manager',
                desc: 'Monitors performance, configures escalation rules, and uses analytics to reduce repeat tickets.',
              },
              {
                role: 'End customer',
                desc: 'Gets faster, more consistent responses as the system keeps the full conversation context visible through every transition.',
              },
            ].map(({ role, desc }) => (
              <div key={role} className="helpnest-card rounded-2xl p-8 flex flex-col gap-4">
                <h3 className="text-lg font-semibold" style={{ color: INK }}>{role}</h3>
                <p className="text-sm leading-relaxed" style={{ color: SLATE }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full bg-[#F8FAFC] py-24">
          <div className="mx-auto max-w-2xl text-center px-8">
            <h2
              className="font-normal leading-[1.1] tracking-[-0.02em] mb-6"
              style={{ fontFamily: SERIF, fontSize: 'clamp(36px,4vw,64px)', color: INK }}
            >
              "The best escalation is the one the customer never notices has happened."
            </h2>
            <p className="text-xs font-mono tracking-[0.15em] uppercase" style={{ color: SLATE }}>
              DESIGN PRINCIPLE · HELPNEST
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
