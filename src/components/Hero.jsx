import { Suspense, lazy, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarCheck, ChevronDown, FileText, MapPin } from 'lucide-react'
import Particles from './Particles'

const Hero3D = lazy(() => import('./Hero3D'))
import { roles, terminalLines } from '../data'

function useScramble(words) {
  const [text, setText] = useState(words[0])
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const glyphs = '!<>-_\\/[]{}=+*^?#________'
    let w = 0
    let frame = 0
    let raf = 0
    let hold = 0
    const next = () => {
      w = (w + 1) % words.length
      frame = 0
      clearTimeout(hold)
      scramble()
    }
    const scramble = () => {
      const target = words[w]
      frame++
      const reveal = Math.floor(frame / 2)
      let out = ''
      for (let i = 0; i < target.length; i++) {
        out += i < reveal ? target[i] : target[i] === ' ' ? ' ' : glyphs[Math.floor(Math.random() * glyphs.length)]
      }
      setText(out)
      if (reveal <= target.length) {
        raf = requestAnimationFrame(() => setTimeout(scramble, 34))
      } else {
        setText(target)
        hold = setTimeout(next, 2300)
      }
    }
    hold = setTimeout(next, 2300)
    return () => { cancelAnimationFrame(raf); clearTimeout(hold) }
  }, [words])
  return text
}

function Terminal() {
  const [count, setCount] = useState(0)
  const toneClasses = { c: 'text-cyan-300', g: 'text-emerald-300', v: 'text-violet-300', d: 'text-slate-500' }

  useEffect(() => {
    if (count >= terminalLines.length) return
    const t = setTimeout(() => setCount((v) => v + 1), count === 0 ? 800 : count === 1 ? 900 : 620)
    return () => clearTimeout(t)
  }, [count])

  return (
    <div className="terminal-tilt w-full overflow-hidden rounded-2xl border border-cyan-400/25 bg-card/90 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_24px_rgba(34,211,238,0.18)]">
      <div className="flex items-center gap-2 border-b border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-3">
        <span className="h-[11px] w-[11px] rounded-full bg-mac-red" />
        <span className="h-[11px] w-[11px] rounded-full bg-mac-yellow" />
        <span className="h-[11px] w-[11px] rounded-full bg-mac-green" />
        <span className="ml-auto font-mono text-xs text-slate-400">shubham@qa-lab: ~/playwright-framework</span>
      </div>
      <div className="min-h-[220px] space-y-1.5 p-4 font-mono text-xs leading-relaxed text-slate-400 sm:p-5">
        {terminalLines.slice(0, count).map((segs, i) => (
          <div key={i} className="cmd-line show">
            {segs.map((s, j) => (
              <span key={j} className={s.tone ? toneClasses[s.tone] : undefined}>{s.t}</span>
            ))}
          </div>
        ))}
        {count < terminalLines.length && <span className="cursor-blink inline-block h-4 w-[8px] bg-cyan-300" />}
      </div>
    </div>
  )
}

export default function Hero() {
  const typed = useScramble(roles)
  return (
    <header id="top" className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 overflow-visible px-4 pb-10 pt-28 sm:px-5 lg:flex-row lg:gap-10 lg:pt-28">
      <Particles density={80} />
      <Suspense fallback={null}>
        <Hero3D />
      </Suspense>
      {/* floating orbs */}
      <motion.div aria-hidden className="pointer-events-none absolute -left-20 top-24 h-56 w-56 rounded-full bg-cyan-400/15 blur-[100px]" animate={{ y: [0, 30, 0], x: [0, 18, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div aria-hidden className="pointer-events-none absolute -right-16 top-64 h-64 w-64 rounded-full bg-violet-500/15 blur-[110px]" animate={{ y: [0, -26, 0], x: [0, -16, 0] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="w-full flex-[1.2]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <motion.div whileHover={{ scale: 1.02 }} className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-medium text-cyan-300 sm:px-4">
          <span className="dot-pulse h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
          <span className="truncate">QA Solutions · 1:1 Mentorship · Resume Studio</span>
        </motion.div>
        <h1 className="mt-5 text-[clamp(2.4rem,8vw,3.8rem)] font-extrabold leading-[1.05] tracking-tight">
          Shubham Bundele
        </h1>
        <div className="mt-4 min-h-[2em] font-mono text-base text-pale sm:text-lg">
          <span className="text-cyan-300">&gt; </span>{typed}<span className="cursor-blink ml-0.5 inline-block h-[1em] w-[3px] translate-y-[2px] bg-cyan-300" />
        </div>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
          Playwright Automation Engineer &amp; SDET with <strong className="text-pale">5+ years</strong> across QA and development — building
          enterprise-grade test frameworks across Healthcare, Banking, Automotive &amp; SaaS. <strong className="text-pale">I provide QA solutions</strong> to
          teams — frameworks, accessibility &amp; performance — and <strong className="text-pale">mentor QA newcomers</strong> with 30-min 1:1 career calls.
        </p>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
          <motion.a href="#consult" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }} className="shine-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-400 to-cyan-300 px-4 py-3.5 text-sm font-bold text-slate-950 transition hover:shadow-[0_0_24px_rgba(167,139,250,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
            <CalendarCheck size={16} /> <span className="hidden min-[400px]:inline">Book 30-min call</span><span className="min-[400px]:hidden">Book call</span>
          </motion.a>
          <motion.a href="#live" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3.5 text-sm font-bold text-cyan-300 transition hover:bg-cyan-400/20 hover:border-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
            <ArrowRight size={16} strokeWidth={2.5} /> <span className="hidden min-[400px]:inline">View Live Projects</span><span className="min-[400px]:hidden">Live Projects</span>
          </motion.a>
          <motion.a href="#resume" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-pink-300/40 bg-pink-300/5 px-4 py-3.5 text-sm font-bold text-pink-200 transition hover:bg-pink-300/10 hover:border-pink-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
            <FileText size={16} /> <span className="hidden min-[400px]:inline">Build my resume</span><span className="min-[400px]:hidden">Resume</span>
          </motion.a>
          <motion.a href="https://linkedin.com/in/connectshubham23" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/30 bg-transparent px-4 py-3.5 text-sm font-semibold text-pale transition hover:border-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
            <span className="grid h-4 w-4 place-items-center rounded-[4px] bg-linkedin text-[10px] font-black text-white">in</span> <span className="hidden min-[400px]:inline">LinkedIn</span><span className="min-[400px]:hidden">in</span>
          </motion.a>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-2xs text-slate-500 sm:text-xs">
          <MapPin size={13} className="shrink-0" /> ISTQB® CTFL · Playwright · K6 · WCAG 2.2
        </div>
      </motion.div>
      <motion.div className="hidden w-full flex-1 lg:block" initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }}>
          <Terminal />
        </motion.div>
        <div className="mt-3 flex flex-wrap gap-2">
          {['85% coverage', 'WCAG 2.2 AA', 'K6 passed', 'CI green'].map((t, i) => (
            <motion.span key={t} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.12 }} className={`${['float-a', 'float-b', 'float-c'][i % 3]} inline-block rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-2xs text-slate-300 backdrop-blur`}>
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />{t}
            </motion.span>
          ))}
        </div>
      </motion.div>
      <a href="#skills" aria-label="Scroll to skills" className="scroll-hint absolute -bottom-1 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 font-mono text-2xs uppercase tracking-[0.25em] text-slate-500 transition hover:text-cyan-300 lg:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
        scroll
        <ChevronDown size={15} />
      </a>
    </header>
  )
}
