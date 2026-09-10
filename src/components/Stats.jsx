import { useEffect, useRef, useState } from 'react'
import { stats } from '../data'
import Reveal from './Reveal'

function Counter({ value, suffix }) {
  const [n, setN] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (es) => {
        if (es[0].isIntersecting && !started.current) {
          started.current = true
          let c = 0
          const step = () => {
            c += Math.max(1, Math.ceil(value / 42))
            if (c >= value) c = value
            setN(c)
            if (c < value) requestAnimationFrame(step)
          }
          step()
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return (
    <span ref={ref} className="tabular text-2xl font-extrabold text-cyan-300">
      {n}{suffix}
    </span>
  )
}

export function DomainStrip() {
  const items = ['Healthcare — WellSky', 'Automotive — Suzuki', 'Banking — K2 Ventures', 'SaaS — Ascendion', 'Playwright', 'WCAG 2.2 AA', 'K6 Performance', 'AI-QA']
  return (
    <div className="mx-auto mt-4 max-w-6xl overflow-hidden px-4 sm:px-5">
      <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] py-2.5">
        <div className="marquee-track flex w-max items-center gap-8 pr-8 hover:[animation-play-state:paused]">
          {[0, 1].map((k) => (
            <span key={k} className="flex items-center gap-8">
              {items.map((t) => (
                <span key={t + k} className="flex items-center gap-8 whitespace-nowrap font-mono text-[0.68rem] text-slate-400">
                  {t} <span className="h-1 w-1 rounded-full bg-cyan-300/70" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Stats() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:px-5 lg:grid-cols-5">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.06} effect="scale">
          <div className="glow-hover card-ring rounded-2xl bg-[#0a0e1a] p-5 sm:p-6 text-center">
            <Counter value={s.value} suffix={s.suffix} />
            <div className="mt-1.5 text-[0.72rem] font-medium text-slate-400">{s.label}</div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
