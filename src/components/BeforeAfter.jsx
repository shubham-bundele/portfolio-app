import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Pause, Play } from 'lucide-react'
import Reveal, { SectionHead } from './Reveal'

const rows = [
  {
    before: 'Responsible for testing the application',
    after: 'Engineered Playwright + Cucumber suite covering 85% of checkout — regression down 60%',
    tags: ['+metric', '+verb'],
  },
  {
    before: 'Worked on Selenium and helped with regression',
    after: 'Automated 200+ E2E cases across 4 products; cut release QA from 2 days to 3 hours',
    tags: ['+metric', '+keyword'],
  },
  {
    before: 'Found bugs and reported them to developers',
    after: 'Owned defect lifecycle to 98% in-sprint resolution; axe-core scans blocking AA violations',
    tags: ['+ownership', '+tool'],
  },
]

const INTERVAL = 3800

export default function BeforeAfter() {
  const [view, setView] = useState('after')
  const [auto, setAuto] = useState(true)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (!auto || hover) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => {
      if (!document.hidden) setView((v) => (v === 'before' ? 'after' : 'before'))
    }, INTERVAL)
    return () => clearInterval(t)
  }, [auto, hover, view])

  const pick = (v) => {
    setView(v)
    setAuto(true)
  }

  const after = view === 'after'
  const score = after ? 94 : 12

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-8 sm:px-5">
      <div aria-hidden className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-pink-500/10 blur-[110px]" />
      <div aria-hidden className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[110px]" />

      <Reveal>
        <SectionHead tag="Resume Proof" title={<>Weak resume vs <span className="gradient-text">rewritten resume</span></>} sub="Same experience, two resumes. Watch it flip — which one gets the interview?" />
      </Reveal>

      <Reveal delay={0.08}>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0c1329] to-[#070b18] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          <span aria-hidden className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />

          <div className="relative flex flex-col items-stretch gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex rounded-2xl border border-white/10 bg-black/40 p-1">
              {[
                { id: 'before', label: '✗ Before' },
                { id: 'after', label: '✓ After' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => pick(t.id)}
                  className={`relative flex-1 rounded-lg px-5 py-2.5 text-[0.78rem] font-bold transition-colors sm:flex-none sm:px-7 ${view === t.id ? 'text-slate-950' : 'text-slate-400 hover:text-white'}`}
                >
                  {view === t.id && (
                    <motion.span
                      layoutId="resume-tab"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className={`absolute inset-0 rounded-lg ${after ? 'bg-gradient-to-r from-emerald-300 to-cyan-300 shadow-[0_0_20px_rgba(52,211,153,0.5)]' : 'bg-gradient-to-r from-rose-400 to-amber-300 shadow-[0_0_20px_rgba(251,113,133,0.5)]'}`}
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em] text-slate-500">ATS score</span>
                <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/10 sm:w-32">
                  <motion.div
                    className={`h-full rounded-full ${after ? 'bg-gradient-to-r from-emerald-400 to-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.8)]' : 'bg-gradient-to-r from-rose-500 to-rose-400 shadow-[0_0_12px_rgba(251,113,133,0.7)]'}`}
                    animate={{ width: `${score}%` }}
                    transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                  />
                </div>
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={score}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className={`tabular font-mono text-[0.8rem] font-bold ${after ? 'text-emerald-300' : 'text-rose-300'}`}
                  >
                    {score}
                  </motion.span>
                </AnimatePresence>
              </div>
              <button
                onClick={() => setAuto((a) => !a)}
                aria-label={auto ? 'Pause auto-play' : 'Resume auto-play'}
                className="grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/50 hover:text-white"
              >
                {auto ? <Pause size={14} /> : <Play size={14} />}
              </button>
            </div>
          </div>

          <div className="relative min-h-[300px] px-5 pb-5 sm:min-h-[264px] sm:px-6">
            <AnimatePresence mode="wait">
              <motion.ul
                key={view}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                className="space-y-2.5"
              >
                {rows.map((r, i) => (
                  <motion.li
                    key={r.before}
                    initial={{ opacity: 0, x: after ? 22 : -22 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                    className={`rounded-2xl border p-3.5 text-[0.78rem] leading-relaxed transition-colors ${
                      after
                        ? 'border-emerald-300/25 bg-emerald-300/[0.05] text-slate-100 hover:border-emerald-300/50 hover:shadow-[0_0_22px_rgba(52,211,153,0.18)]'
                        : 'border-white/[0.07] bg-black/30 text-slate-500'
                    }`}
                  >
                    <span>• {after ? r.after : r.before}</span>
                    {after && (
                      <span className="mt-1.5 flex flex-wrap gap-1">
                        {r.tags.map((t) => (
                          <span key={t} className="rounded-full bg-emerald-300/15 px-2 py-0.5 font-mono text-[0.58rem] font-bold text-emerald-300">{t}</span>
                        ))}
                      </span>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

          <div className="relative flex items-center justify-center gap-2 border-t border-white/[0.07] bg-black/40 px-5 py-3">
            <span className={`h-1.5 w-1.5 rounded-full ${auto && !hover ? 'animate-pulse bg-emerald-400' : 'bg-slate-600'}`} />
            <span className="font-mono text-[0.62rem] text-slate-500">
              {auto && !hover ? 'auto-playing — hover to pause, or tap a tab' : 'paused — tap Before / After to compare'}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
