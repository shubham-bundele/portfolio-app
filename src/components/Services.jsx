import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { useLottie } from 'lottie-react'
import { toast } from 'sonner'
import checkAnim from '../assets/check.json'
import rocketAnim from '../assets/rocket.json'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, CalendarCheck, Check, ChevronDown, Clock, FileCheck, FileText, FlaskConical, RefreshCw, Rocket, Search, Send, Sparkles, Video, Wrench, Accessibility, Gauge, MessagesSquare, X } from 'lucide-react'
import Reveal, { SectionHead } from './Reveal'

const email = 'bundele.shubham23@gmail.com'

const practices = [
  {
    num: '01',
    kicker: 'TEST AUTOMATION & FRAMEWORKS',
    title: 'Playwright frameworks that scale',
    desc: 'For teams drowning in flaky suites and manual regression. I engineer Cucumber BDD + POM frameworks your developers trust in CI.',
    points: [
      { lead: 'Framework engineering:', text: '60+ feature files, 65+ POM classes, 140+ reusable BasePage methods — data-driven, parallel-ready.' },
      { lead: 'CI you can trust:', text: 'Azure Pipelines with 2–4 workers, worker-isolated caches, tag-based suites (@critical, @SmokeTest, @flaky).' },
      { lead: 'Evidence built-in:', text: 'custom HTML/PDF reporters with per-step screenshots, video recording and history diffs.' },
      { lead: 'API coverage:', text: 'REST validation and interception, including healthcare-grade contract checks.' },
    ],
    outcome: 'Track record: 85% automation coverage, 95%+ script stability, ~60% regression effort down across 500+ E2E scenarios.',
  },
  {
    num: '02',
    kicker: 'ACCESSIBILITY & QUALITY GOVERNANCE',
    title: 'WCAG 2.2 AA confidence, every release',
    desc: 'For products that must work for everyone — and stand up to audits. Automation plus manual testing, governed end-to-end.',
    points: [
      { lead: 'Automated a11y:', text: '37 @axe-core/playwright suites scanning 30+ pages for WCAG 2.1/2.2 AA.' },
      { lead: 'Manual audits:', text: 'WAVE, NVDA screen reader, Level Access, keyboard navigation and contrast validation.' },
      { lead: 'Quality governance:', text: 'RTM, defect lifecycle ownership and UAT sign-off — 98%+ in-sprint defect resolution.' },
      { lead: 'Cross-browser proof:', text: 'Chrome, Firefox, Safari, Edge and mobile across 10+ global markets.' },
    ],
    outcome: 'Outcome: AA-compliant releases with audit-ready evidence packs — no last-minute surprises.',
  },
  {
    num: '03',
    kicker: 'PERFORMANCE & AI-ACCELERATED QA',
    title: 'Ship fast without breaking things',
    desc: 'For teams where velocity meets risk. Load-test the APIs, stabilize the pipeline, then let AI multiply QA output.',
    points: [
      { lead: 'Performance:', text: 'K6 / JMeter load and stress testing with thresholds, dashboards and tuning reports.' },
      { lead: 'Agentic testing:', text: 'Playwright MCP agents that navigate, assert and audit live UIs autonomously.' },
      { lead: 'AI workflows:', text: 'Claude Code + Copilot setups — scaffolding, bulk test generation, prompt playbooks.' },
      { lead: 'Team enablement:', text: 'your QA learns the AI loop and keeps ~40% faster authoring after handover.' },
    ],
    outcome: 'Outcome: green load thresholds, stable pipelines, and a team shipping 40% faster.',
  },
]

const engagements = [
  { icon: <Search size={16} className="text-cyan-300" />, title: 'QA Health Check (1–2 weeks)', desc: 'Framework and process audit, stakeholder interviews, findings plus a scoped roadmap. Fixed scope.' },
  { icon: <FlaskConical size={16} className="text-violet-300" />, title: 'Automation Pilot (2–4 weeks)', desc: 'Playwright pilot suite with a CI quality gate and eval harness. Go / no-go decision.' },
  { icon: <Rocket size={16} className="text-emerald-300" />, title: 'Framework Build (1–3 months)', desc: 'Fractional QA lead embedded with your pod through rollout and handover.' },
  { icon: <RefreshCw size={16} className="text-amber-300" />, title: 'Advise & Govern (ongoing)', desc: 'Monthly quality reviews, backlog governance, release readiness, team enablement.' },
]

const cardThemes = [
  { orb: 'from-cyan-300 to-sky-500', glow: 'rgba(34,211,238,.35)', beam: 'from-transparent via-cyan-300 to-transparent', num: 'text-cyan-300/15', ring: 'hover:border-cyan-300/60 hover:shadow-[0_0_44px_rgba(34,211,238,0.28)]', pill: 'MOST BOOKED', pillStyle: 'border-cyan-300/50 bg-cyan-300/15 text-cyan-200' },
  { orb: 'from-emerald-300 to-teal-500', glow: 'rgba(52,211,153,.32)', beam: 'from-transparent via-emerald-300 to-transparent', num: 'text-emerald-300/15', ring: 'hover:border-emerald-300/60 hover:shadow-[0_0_44px_rgba(52,211,153,0.25)]', pill: null },
  { orb: 'from-violet-400 to-fuchsia-500', glow: 'rgba(167,139,250,.35)', beam: 'from-transparent via-violet-300 to-transparent', num: 'text-violet-300/15', ring: 'hover:border-violet-300/60 hover:shadow-[0_0_44px_rgba(167,139,250,0.28)]', pill: null },
]

export function Services() {
  const proposalHref = `mailto:${email}?subject=${encodeURIComponent('[Inquiry: Proposal Request] QA engagement')}&body=${encodeURIComponent(`Hi Shubham,\n\nThis is an inquiry for a scoped QA proposal.\n\nTeam size:\nGoal (framework / accessibility / performance / AI-QA):\nTimeline:\n\nThanks!`)}`
  return (
    <section id="services" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-8 sm:px-5">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-24 h-72 w-72 rounded-full bg-violet-500/10 blur-[110px]" />

      <SectionHead
        tag="SERVICES"
        title={<>What I can do <span className="gradient-text">for your team</span></>}
        sub="Three focused practices — engage me for one, or combine them for idea → pilot → scale. Every engagement starts with a 1-on-1 consultation and a scoped proposal."
        action={
          <motion.a
            href={proposalHref}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="shine-btn inline-flex shrink-0 items-center gap-1.5 rounded-2xl border border-cyan-300/40 bg-cyan-300/10 px-5 py-3 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950 hover:shadow-[0_0_32px_rgba(34,211,238,0.6)]"
          >
            Request proposal <ArrowUpRight size={15} />
          </motion.a>
        }
      />

      <div className="mt-6 grid items-stretch gap-4 lg:grid-cols-3">
        {practices.map((p, i) => {
          const t = cardThemes[i % cardThemes.length]
          return (
            <Reveal key={p.num} delay={i * 0.08} effect="scale" className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`); e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`) }}
                className={`spotlight group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0c1329] to-[#070b18] p-6 transition-colors duration-300 ${t.ring} ${i === 0 ? 'border-cyan-300/40 shadow-[0_0_34px_rgba(34,211,238,0.16)]' : ''}`}
              >
                <span aria-hidden className={`absolute inset-x-8 top-0 h-px bg-gradient-to-r ${t.beam}`} />
                <span aria-hidden className={`float-b pointer-events-none absolute -right-2 -top-5 select-none text-[5.2rem] font-black leading-none ${t.num}`}>{p.num}</span>
                {t.pill && (
                  <span className={`absolute right-4 top-4 rounded-full border px-2.5 py-1 font-mono text-[0.58rem] font-bold tracking-[0.14em] ${t.pillStyle}`}>{t.pill}</span>
                )}
                <div className="flex items-center gap-3">
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4.5 + i, repeat: Infinity, ease: 'easeInOut' }}
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${t.orb} text-lg text-slate-950`}
                    style={{ boxShadow: `0 0 26px ${t.glow}` }}
                  >
                    {['⚙️', '♿', '🚀'][i % 3]}
                  </motion.span>
                  <div className="font-mono text-[0.62rem] font-bold tracking-[0.14em] text-slate-400">{p.num} — {p.kicker}</div>
                </div>
                <h3 className="mt-3 text-xl font-extrabold leading-snug text-white">{p.title}</h3>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-slate-400">{p.desc}</p>
                <ul className="mt-4 space-y-2.5">
                  {p.points.map((pt, j) => (
                    <motion.li
                      key={pt.lead}
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ delay: 0.15 + j * 0.09, duration: 0.4 }}
                      className="flex gap-2 text-[0.78rem] leading-relaxed text-slate-300"
                    >
                      <span className="font-bold text-cyan-300" style={{ textShadow: '0 0 10px rgba(34,211,238,.8)' }}>▸</span>
                      <span><strong className="text-white">{pt.lead}</strong> {pt.text}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="rounded-2xl border border-white/10 bg-black/50 p-5 sm:p-6 text-[0.75rem] font-medium leading-relaxed text-slate-200"
                    style={{ boxShadow: `inset 0 0 24px rgba(0,0,0,.6), 0 0 22px ${t.glow.replace(/[\d.]+\)$/, '0.14)')}` }}
                  >
                    {p.outcome}
                  </motion.div>
                </div>
              </motion.div>
            </Reveal>
          )
        })}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {engagements.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.05} className="h-full">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur transition-colors duration-300 hover:border-cyan-300/50 hover:shadow-[0_0_28px_rgba(34,211,238,0.22)]"
            >
              <div className="flex items-center gap-2 text-[0.82rem] font-bold text-white">
                <motion.span animate={{ y: [0, -4, 0] }} transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: 'easeInOut' }} className="inline-flex [filter:drop-shadow(0_0_8px_rgba(34,211,238,0.6))]">{e.icon}</motion.span>
                {e.title}
              </div>
              <p className="mt-2 text-[0.74rem] leading-relaxed text-slate-400">{e.desc}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.05}>
        <motion.div
          whileHover={{ y: -2 }}
          className="mt-4 flex flex-col gap-3 rounded-2xl border border-pink-300/25 bg-gradient-to-r from-pink-400/10 to-violet-400/10 p-5 sm:p-6 shadow-[0_0_34px_rgba(244,114,182,0.12)] sm:flex-row sm:items-center"
        >
          <div className="flex-1">
            <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-pink-200 [text-shadow:0_0_12px_rgba(244,114,182,0.6)]">For job-seekers</div>
            <p className="mt-1 text-[0.8rem] text-slate-300">Resumes that beat the ATS, mocks that land offers, and 1:1 calls that set direction.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="#resume" className="rounded-xl border border-cyan-300/30 px-4 py-2.5 text-[0.76rem] font-bold text-cyan-300 transition hover:bg-cyan-300/10 hover:border-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Resume Studio</a>
            <a href="#mocks" className="rounded-xl border border-cyan-300/30 px-4 py-2.5 text-[0.76rem] font-bold text-cyan-300 transition hover:bg-cyan-300/10 hover:border-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Interview mocks</a>
            <a href="#consult" className="shine-btn rounded-xl bg-gradient-to-r from-violet-400 to-cyan-300 px-4 py-2.5 text-[0.76rem] font-extrabold text-slate-950 transition hover:shadow-[0_0_24px_rgba(34,211,238,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">30-min call</a>
          </div>
        </motion.div>
      </Reveal>
    </section>
  )
}

const atsChecks = [
  { id: 'single-col', label: 'Single-column layout, no tables / text-boxes / graphics', tip: 'ATS parsers read top-to-bottom; multi-column scrambles order.' },
  { id: 'keywords', label: 'QA keywords mirror the job post (Playwright, API, CI, Agile)', tip: 'Copy 8–12 exact terms from the job description naturally.' },
  { id: 'metrics', label: 'Every role has 2+ metrics (% coverage, defects, time saved)', tip: '“85% coverage, 95% stability” beats “responsible for testing”.' },
  { id: 'tools', label: 'Dedicated Skills section with tools, not just prose', tip: 'Playwright · JavaScript · Cucumber · Postman · K6 · Azure · Jira.' },
  { id: 'action-verbs', label: 'Bullets start with strong verbs (Engineered, Automated, Led)', tip: 'No “worked on” / “helped with” — own the impact.' },
  { id: 'one-page', label: 'Under 5 yrs exp → 1 page; file is .docx or text-based PDF', tip: 'Scanned/image PDFs score zero on most parsers.' },
]

const qaKeywords = ['Playwright', 'SDET', 'Cucumber BDD', 'POM', 'REST API', 'Postman', 'K6', 'Azure Pipelines', 'WCAG 2.2', 'axe-core', 'Regression', 'CI/CD', 'Jira', 'Agile']

const topics = [
  'Manual → Automation roadmap',
  'Playwright from zero',
  'Framework design (POM/BDD)',
  'Accessibility testing career',
  'Performance testing (K6)',
  'Interview prep + resume',
  'Mock interview (SDET)',
  'AI-QA / vibe coding',
]

const mockQA = [
  {
    q: 'How does Playwright auto-waiting actually work?',
    a: 'Every action runs actionability checks — visible, stable, enabled, receiving events — retried until the timeout. Strong answers mention web-first assertions, zero hard sleeps, and tuned expect timeouts.',
  },
  {
    q: 'Design a Playwright framework for 500 tests on a tight deadline.',
    a: 'Layers: specs → steps → POM pages → fixtures → utils, per-env configs. Parallel workers with sharding, retries only for @flaky, CI quality gates, and evidence-rich reports from day one.',
  },
  {
    q: 'Suite is flaky in CI but green locally. How do you debug it?',
    a: 'Quarantine with @flaky, pull trace + video, audit waits, worker-index data collisions, timezone/env drift. Then a fix-or-quarantine policy so CI stays trustworthy.',
  },
  {
    q: 'How do you test a REST API end-to-end in Playwright?',
    a: 'APIRequestContext for setup/teardown, UI+API hybrid flows, request interception for edge cases, contract assertions, and clean auth-token handling.',
  },
  {
    q: 'Which metrics prove QA is actually working?',
    a: 'Defect escape rate, in-sprint resolution %, coverage trend, flake rate, and regression hours saved — the same numbers on this site’s stats strip.',
  },
]

const mockRounds = [
  { lead: 'Automation deep-dive:', text: 'Playwright locators, waits, fixtures, POM, API mocking, live coding.' },
  { lead: 'Framework design round:', text: 'whiteboard a framework live — structure, CI strategy, reporting.' },
  { lead: 'Take-home review:', text: 'line-by-line feedback on your assignment before you submit.' },
  { lead: 'Managerial round:', text: 'metrics you own, mentoring stories, conflict and trade-off answers.' },
]

const mockWeakAreas = ['Automation deep-dive', 'Framework design', 'API + CI', 'Debugging flaky suites', 'Managerial round', 'Take-home review']

export function InterviewMocks() {
  const [openQA, setOpenQA] = useState(null)
  const [mockOpen, setMockOpen] = useState(false)
  const [mName, setMName] = useState('')
  const [mFrom, setMFrom] = useState('')
  const [mRole, setMRole] = useState('')
  const [mWeak, setMWeak] = useState(mockWeakAreas[0])
  const [mSlot, setMSlot] = useState('')
  const [mNotes, setMNotes] = useState('')

  const mockHref = `mailto:${email}?subject=${encodeURIComponent(`[Inquiry: Mock Interview] ${mRole || 'SDET mock'} — ${mName || 'New request'}`)}&body=${encodeURIComponent(`Hi Shubham,\n\nThis is an inquiry for an SDET MOCK INTERVIEW.\n\nName: ${mName}\nEmail: ${mFrom}\nTarget role / company: ${mRole}\nWeakest area: ${mWeak}\nPreferred slot: ${mSlot}\nNotes: ${mNotes}\n\nThanks!`)}`

  const closeMock = () => setMockOpen(false)

  useEffect(() => {
    if (!mockOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') closeMock() }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [mockOpen])

  const sendMock = () => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 }, colors: ['#38bdf8', '#22d3ee', '#a78bfa', '#ffffff'] })
    toast.success('Mock inquiry ready — email opened ✉')
    closeMock()
  }
  return (
    <section id="mocks" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-8 sm:px-5">
      <SectionHead
        tag="Mock Interviews"
        title={<>SDET Interview <span className="gradient-text">Mocks</span></>}
        sub="Real SDET questions, a scored rubric, and written feedback — walk into your next interview having already done it once."
      />
      <div className="mt-5 grid items-stretch gap-3 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="flex h-full flex-col rounded-2xl border border-sky-300/25 bg-gradient-to-br from-sky-400/10 to-violet-400/10 p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300/30 bg-sky-300/15 px-3 py-1 text-[0.65rem] font-bold text-sky-200"><Video size={11} /> 45-min video mock</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 font-mono text-[0.62rem] text-cyan-200"><FileCheck size={11} /> scored rubric + notes in 24h</span>
            </div>
            <ul className="mt-4 space-y-2.5 text-[0.82rem] leading-relaxed text-slate-300">
              {mockRounds.map((r) => (
                <li key={r.lead}>🎯 <strong className="text-white">{r.lead}</strong> {r.text}</li>
              ))}
            </ul>
            <div className="mt-4">
              <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-slate-500">Scored on 5 axes</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {['Automation depth', 'Framework thinking', 'API + CI', 'Debugging', 'Communication'].map((a) => (
                  <span key={a} className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[0.62rem] text-slate-300">{a}</span>
                ))}
              </div>
            </div>
            <div className="mt-auto flex flex-col gap-2 pt-5 sm:flex-row">
              <button onClick={() => setMockOpen(true)} className="shine-btn flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-300 to-cyan-300 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:shadow-[0_0_28px_rgba(56,189,248,0.5)]">
                <CalendarCheck size={16} /> Book a mock
              </button>
              <a href="#consult" className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-violet-300/40 px-5 py-3 text-sm font-bold text-violet-200 transition hover:bg-violet-300 hover:text-slate-950">
                Use consult form
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="h-full">
          <div className="card-ring flex h-full flex-col rounded-2xl bg-[#0a0e1a] p-5 sm:p-6">
            <div className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-slate-400">Sample question bank — tap to reveal model answers</div>
            <div className="mt-3 space-y-2">
              {mockQA.map((item, i) => {
                const open = openQA === i
                return (
                  <div key={item.q} className={`overflow-hidden rounded-2xl border transition ${open ? 'border-cyan-300/40 bg-cyan-300/[0.06]' : 'border-white/10 bg-black/30 hover:border-white/25'}`}>
                    <button onClick={() => setOpenQA(open ? null : i)} className="flex w-full items-center gap-3 p-3.5 text-left">
                      <span className="font-mono text-[0.65rem] font-bold text-cyan-300">Q{i + 1}</span>
                      <span className="flex-1 text-[0.8rem] font-semibold text-slate-200">{item.q}</span>
                      <ChevronDown size={15} className={`shrink-0 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="border-t border-white/[0.07] p-3.5 text-[0.76rem] leading-relaxed text-slate-400"><span className="font-mono text-[0.65rem] font-bold text-emerald-300">MODEL ANSWER — </span>{item.a}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="mt-3 font-mono text-[0.62rem] text-slate-500">Full bank (50+ questions) is covered inside the mock + feedback notes.</p>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {mockOpen && (
          <div className="fixed inset-0 z-[90] grid place-items-center overflow-y-auto p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeMock} className="fixed inset-0 bg-black/75 backdrop-blur-sm" />
            <motion.div
              role="dialog" aria-modal="true" aria-label="Book a mock interview"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative my-auto w-full max-w-lg overflow-hidden rounded-2xl border border-sky-300/25 bg-[#0a0e1a] shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
            >
              <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-gradient-to-r from-sky-400/10 to-violet-400/10 px-5 py-4">
                <div>
                  <div className="text-[0.9rem] font-extrabold">Book a mock interview</div>
                  <div className="font-mono text-[0.65rem] text-slate-400">45-min video · rubric + notes in 24h</div>
                </div>
                <button onClick={closeMock} aria-label="Close booking form" className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-white/30 hover:text-white">
                  <X size={16} />
                </button>
              </div>
              <div className="grid max-h-[70vh] gap-2.5 overflow-y-auto p-5">
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
                    Your name <span className="text-rose-400">*</span>
                    <input autoFocus value={mName} onChange={(e) => setMName(e.target.value)} placeholder="e.g. Rahul Verma" className="rounded-2xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus:border-sky-300/60" />
                  </label>
                  <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
                    Your email <span className="text-rose-400">*</span>
                    <input value={mFrom} onChange={(e) => setMFrom(e.target.value)} type="email" placeholder="you@example.com" className="rounded-2xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus:border-sky-300/60" />
                  </label>
                </div>
                <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
                  Target role / company
                  <input value={mRole} onChange={(e) => setMRole(e.target.value)} placeholder="e.g. SDET @ fintech startup" className="rounded-2xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus:border-sky-300/60" />
                </label>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
                    Weakest area <span className="text-rose-400">*</span>
                    <select value={mWeak} onChange={(e) => setMWeak(e.target.value)} className="rounded-2xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none focus:border-sky-300/60">
                      {mockWeakAreas.map((w) => <option key={w}>{w}</option>)}
                    </select>
                  </label>
                  <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
                    Preferred slot
                    <input value={mSlot} onChange={(e) => setMSlot(e.target.value)} placeholder="e.g. Sun 10 AM (your time)" className="rounded-2xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus:border-sky-300/60" />
                  </label>
                </div>
                <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
                  Anything I should know? <span className="font-normal text-slate-500">(optional)</span>
                  <textarea value={mNotes} onChange={(e) => setMNotes(e.target.value)} rows={2} placeholder="Take-home deadline, past rejections, focus areas…" className="w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus:border-sky-300/60" />
                </label>
              </div>
              <div className="border-t border-white/10 p-5 pt-4">
                <a href={mockHref} onClick={sendMock} className="shine-btn flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-300 to-cyan-300 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:shadow-[0_0_28px_rgba(56,189,248,0.5)]">
                  <Send size={16} /> Send booking request
                </a>
                <p className="mt-2.5 text-center font-mono text-[0.62rem] text-slate-500">Subject auto-tagged <span className="text-cyan-300">[Inquiry: Mock Interview]</span> · <span className="text-rose-400">*</span> = required</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

function Anim({ data, className = '' }) {
  const { View } = useLottie({ animationData: data, loop: false, autoplay: true })
  return <div className={className}>{View}</div>
}

const purposes = [  { id: 'review', label: 'Resume Review', icon: <FileText size={14} /> },
  { id: 'build', label: 'Build My Resume', icon: <Sparkles size={14} /> },
  { id: 'consult', label: '30-min Consultation', icon: <Video size={14} /> },
]

export function BookingHub() {
  const [purpose, setPurpose] = useState('review')
  const [checked, setChecked] = useState(['keywords'])
  const [name, setName] = useState('')
  const [from, setFrom] = useState('')
  const [link, setLink] = useState('')
  const [role, setRole] = useState('')
  const [exp, setExp] = useState('')
  const [topic, setTopic] = useState(topics[0])
  const [slot, setSlot] = useState('')
  const [about, setAbout] = useState('')

  const score = Math.round((checked.length / atsChecks.length) * 100)
  const toggle = (id) => setChecked((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]))

  const subjects = {
    review: `[Inquiry: Resume Review] ${name || 'New request'}`,
    build: `[Inquiry: Fresh Resume Build] ${name || 'New request'}`,
    consult: `[Inquiry: 30-min Consultation] ${topic} — ${name || 'New request'}`,
  }
  const bodies = {
    review: `Hi Shubham,\n\nThis is an inquiry for a RESUME REVIEW (ATS + QA-friendly).\n\nName: ${name}\nEmail: ${from}\nResume link: ${link}\nTarget role: ${role}\nMy ATS self-check score: ${score}/100\n\nThanks!`,
    build: `Hi Shubham,\n\nThis is an inquiry to BUILD MY RESUME from scratch (ATS + QA-friendly).\n\nName: ${name}\nEmail: ${from}\nTarget role: ${role}\nExperience snapshot: ${exp}\nExisting resume / LinkedIn (if any): ${link}\n\nThanks!`,
    consult: `Hi Shubham,\n\nThis is an inquiry for a 30-MIN 1:1 CONSULTATION.\n\nName: ${name}\nEmail: ${from}\nTopic: ${topic}\nPreferred slot: ${slot}\nAbout me: ${about}\n\nThanks!`,
  }
  const href = `mailto:${email}?subject=${encodeURIComponent(subjects[purpose])}&body=${encodeURIComponent(bodies[purpose])}`
  const [sent, setSent] = useState(false)
  const [flash, setFlash] = useState(false)

  useEffect(() => {
    const onFlash = () => {
      setFlash(true)
      setTimeout(() => setFlash(false), 2600)
    }
    window.addEventListener('flash-resume', onFlash)
    return () => window.removeEventListener('flash-resume', onFlash)
  }, [])

  const celebrate = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    confetti({ particleCount: 90, spread: 75, origin: { y: 0.75 }, colors: ['#22d3ee', '#a78bfa', '#f472b6', '#34d399', '#ffffff'] })
  }

  const onSend = () => {
    celebrate()
    toast.success(purpose === 'review' ? 'Review inquiry ready — email opened ✉' : purpose === 'build' ? 'Build inquiry ready — email opened ✉' : 'Consultation request ready — email opened ✉')
    setSent(true)
    setTimeout(() => setSent(false), 2800)
  }

  const pickTopic = (t) => { setTopic(t); setPurpose('consult') }

  return (
    <section id="consult" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-8 sm:px-5">
      <SectionHead
        tag="Book a Service"
        title={<>Resume Studio <span className="gradient-text">& 1:1 Consultation</span></>}
        sub="One hub for job-seekers: get your resume past the ATS, or get a 30-min 1:1 career call. Pick a purpose below — your email opens with everything pre-filled."
      />

      {/* ROW 1 — two aligned cards */}
      <div className="mt-5 grid items-stretch gap-3 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="card-ring flex h-full flex-col rounded-2xl bg-[#0a0e1a] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 font-mono text-[0.72rem] text-slate-400"><FileCheck size={14} className="text-emerald-300" /> interactive ATS self-check</div>
              <div className={`rounded-full px-3 py-1 font-mono text-[0.7rem] font-bold ${score >= 80 ? 'bg-emerald-300/15 text-emerald-300' : score >= 50 ? 'bg-amber-300/15 text-amber-300' : 'bg-rose-400/15 text-rose-300'}`}>
                {score}/100
              </div>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
              <motion.div className={`h-full rounded-full ${score >= 80 ? 'bg-emerald-300' : score >= 50 ? 'bg-amber-300' : 'bg-rose-400'}`} animate={{ width: `${score}%` }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} />
            </div>
            <div className="mt-4 space-y-2">
              {atsChecks.map((c) => {
                const on = checked.includes(c.id)
                return (
                  <button key={c.id} onClick={() => toggle(c.id)} className={`flex w-full items-start gap-3 rounded-2xl border p-3 text-left transition ${on ? 'border-emerald-300/40 bg-emerald-300/[0.07]' : 'border-white/10 bg-black/30 hover:border-white/25'}`}>
                    <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border ${on ? 'border-emerald-300 bg-emerald-300 text-slate-950' : 'border-slate-600 text-transparent'}`}>
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span>
                      <span className="block text-[0.78rem] font-semibold text-slate-200">{c.label}</span>
                      <span className="mt-0.5 block text-[0.68rem] text-slate-500">{c.tip}</span>
                    </span>
                  </button>
                )
              })}
            </div>
            <p className="mt-3 font-mono text-[0.65rem] text-slate-500">
              {score >= 80 ? '✓ Strong — send it for a pro polish.' : score >= 50 ? '→ Halfway — fix the unchecked items, then send it.' : '✗ At risk — fix these before applying anywhere.'}
            </p>
            <div className="mt-3 border-t border-white/[0.07] pt-3">
              <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-slate-500">QA keywords we weave in</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {qaKeywords.map((k) => (
                  <span key={k} className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[0.62rem] text-slate-300">{k}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="h-full">
          <div className="flex h-full flex-col rounded-2xl border border-violet-400/25 bg-gradient-to-br from-cyan-400/10 to-violet-400/10 p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-400/15 px-3 py-1 text-[0.65rem] font-bold text-violet-200"><Video size={11} /> 1:1 video call</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 font-mono text-[0.62rem] text-cyan-200"><Clock size={11} /> 30 minutes</span>
            </div>
            <ul className="mt-4 space-y-2.5 text-[0.82rem] leading-relaxed text-slate-300">
              <li>🎯 <strong className="text-white">Personal roadmap</strong> — where you are → automation-ready, step by step</li>
              <li>🛠️ <strong className="text-white">Playwright starter</strong> — what to learn first, free resources, first framework</li>
              <li>📝 <strong className="text-white">Interview prep</strong> — resume review, real SDET questions, take-home strategy</li>
              <li>🤖 <strong className="text-white">AI-QA edge</strong> — Copilot / Claude Code from day one</li>
              <li>📄 <strong className="text-white">Resume outcomes</strong> — review (48h polish) or fresh build (ATS 90+, 1 free revision)</li>
            </ul>
            <div className="mt-4">
              <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-slate-500">Tap a topic — form below switches to consultation</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {topics.map((t) => (
                  <button key={t} onClick={() => pickTopic(t)} className={`rounded-full border px-2.5 py-1 text-[0.65rem] font-medium transition ${purpose === 'consult' && topic === t ? 'border-violet-300 bg-violet-300 text-slate-950' : 'border-white/10 bg-black/40 text-slate-300 hover:border-violet-300/60'}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-auto pt-4 font-mono text-[0.65rem] leading-relaxed text-slate-500">How it works: pick a purpose below → fill the form → send — your email opens with the inquiry purpose pre-filled. Confirmation within ~24h.</p>
          </div>
        </Reveal>
      </div>

      {/* ROW 2 — one full-width inquiry form (id=resume anchor) */}
      <div id="resume" className="scroll-mt-28" />
      <Reveal delay={0.05}>
        <div id="resume-form" className={`card-ring relative mt-3 scroll-mt-28 overflow-hidden rounded-2xl bg-[#0a0e1a] p-5 sm:p-6 transition-all duration-500 sm:p-6 ${flash ? 'ring-2 ring-pink-300 shadow-[0_0_44px_rgba(244,114,182,0.55)]' : ''}`}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="font-mono text-[0.72rem] text-slate-500">$ booking --inquiry <span className="text-slate-600">— all buttons email me directly</span></div>
            <div className="flex flex-wrap gap-2">
              {purposes.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPurpose(p.id)}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[0.78rem] font-bold transition ${purpose === p.id ? 'bg-gradient-to-r from-violet-400 to-cyan-300 text-slate-950 shadow-[0_0_20px_rgba(167,139,250,0.4)]' : 'border border-white/10 bg-black/40 text-slate-300 hover:border-violet-300/50'}`}
                >
                  {p.icon} {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
              Your name <span className="text-rose-400">*</span>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Priya Sharma" className="rounded-2xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/60" />
            </label>
            <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
              Your email <span className="text-rose-400">*</span>
              <input value={from} onChange={(e) => setFrom(e.target.value)} placeholder="you@example.com" type="email" className="rounded-2xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/60" />
            </label>
          </div>

          {purpose === 'review' && (
            <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
              <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
                Resume link (Drive / Docs) <span className="text-rose-400">*</span>
                <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="Paste share link to your current resume" className="rounded-2xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/60" />
              </label>
              <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
                Target role <span className="font-normal text-slate-500">(optional)</span>
                <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="e.g. SDET / Playwright Automation" className="rounded-2xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/60" />
              </label>
            </div>
          )}

          {purpose === 'build' && (
            <div className="mt-2.5 grid gap-2.5">
              <div className="grid gap-2.5 sm:grid-cols-2">
                <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
                  Target role <span className="text-rose-400">*</span>
                  <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="e.g. SDET / Playwright Automation" className="rounded-2xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/60" />
                </label>
                <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
                  Existing resume / LinkedIn <span className="font-normal text-slate-500">(if any)</span>
                  <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="Link, or leave blank for fresh build" className="rounded-2xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/60" />
                </label>
              </div>
              <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
                Experience snapshot <span className="text-rose-400">*</span>
                <textarea value={exp} onChange={(e) => setExp(e.target.value)} rows={2} placeholder="Years, tools, 2–3 wins — e.g. 2 yrs manual, Selenium basics, cut regression by 30%" className="w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/60" />
              </label>
            </div>
          )}

          {purpose === 'consult' && (
            <div className="mt-2.5 grid gap-2.5">
              <div className="grid gap-2.5 sm:grid-cols-2">
                <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
                  Topic <span className="text-rose-400">*</span>
                  <select value={topic} onChange={(e) => setTopic(e.target.value)} className="rounded-2xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none focus:border-cyan-300/60">
                    {topics.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </label>
                <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
                  Preferred slot <span className="font-normal text-slate-500">(optional)</span>
                  <input value={slot} onChange={(e) => setSlot(e.target.value)} placeholder="e.g. Sat 11:00 AM (your time)" className="rounded-2xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/60" />
                </label>
              </div>
              <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
                About you <span className="font-normal text-slate-500">(1–2 lines, optional)</span>
                <textarea value={about} onChange={(e) => setAbout(e.target.value)} rows={2} placeholder="Manual tester, 1 yr exp, want to learn Playwright…" className="w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/60" />
              </label>
            </div>
          )}

          {purpose !== 'consult' && (
            <p className="mt-3 font-mono text-[0.65rem] text-slate-500">Your ATS self-check score <span className="font-bold text-cyan-300">{score}/100</span> is included in the email automatically.</p>
          )}

          <a href={href} onClick={onSend} className="shine-btn mt-4 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-400 to-cyan-300 px-5 py-3.5 text-sm font-extrabold text-slate-950 transition hover:shadow-[0_0_28px_rgba(167,139,250,0.55)]">
            <Send size={16} /> {purpose === 'review' ? 'Send resume review inquiry' : purpose === 'build' ? 'Send resume build inquiry' : 'Send consultation inquiry'}
          </a>
          {sent && (
            <div className="absolute inset-0 z-10 grid place-items-center bg-[#04060f]/85 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-2 p-6 text-center">
                <Anim data={purpose === 'consult' ? rocketAnim : checkAnim} className="h-24 w-24" />
                <div className="text-sm font-bold text-white">Inquiry ready — email opened!</div>
                <div className="font-mono text-[0.65rem] text-slate-400">Just hit send in your mail app ✉</div>
              </div>
            </div>
          )}
          <p className="mt-2.5 text-center font-mono text-[0.62rem] text-slate-500">Opens your email app — subject auto-tagged <span className="text-cyan-300">{purpose === 'review' ? '[Inquiry: Resume Review]' : purpose === 'build' ? '[Inquiry: Fresh Resume Build]' : '[Inquiry: 30-min Consultation]'}</span> · <span className="text-rose-400">*</span> = required</p>
          <ul className="mt-2 grid gap-1 border-t border-white/[0.07] pt-2.5 font-mono text-[0.62rem] leading-relaxed text-slate-500 sm:grid-cols-3">
            <li><span className="text-pink-300">*</span> 48h turnaround, business days</li>
            <li><span className="text-pink-300">*</span> 1 free revision in 7 days · 90+ ATS or rework free</li>
            <li><span className="text-pink-300">*</span> Your data stays private — never shared</li>
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

// Back-compat aliases (App renders BookingHub once)
export function ResumeStudio() { return <BookingHub /> }
