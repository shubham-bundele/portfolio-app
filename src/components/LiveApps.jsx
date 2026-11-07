import { useEffect, useState } from 'react'
import { ExternalLink, MousePointerClick } from 'lucide-react'
import { apps } from '../data'
import Reveal, { SectionHead } from './Reveal'

export default function LiveApps() {
  const [active, setActive] = useState(apps[0].id)
  const current = apps.find((a) => a.id === active)
  // Iframes that refuse embedding (X-Frame-Options / CSP) can look like a blank box.
  // We can't reliably detect it cross-origin, so surface fallback actions after a delay.
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    setShowFallback(false)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setShowFallback(true), 5000)
    return () => clearTimeout(t)
  }, [active])

  return (
    <section id="live" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-8 sm:px-5">
      <SectionHead
        tag="Running Now"
        title={<>Live <span className="gradient-text">Projects</span></>}
        sub="Real deployed applications — running live, right on this page. Switch tabs and interact with them directly."
      />
      <Reveal delay={0.08}>
        <div className="mt-4 flex flex-wrap gap-2">
          {apps.map((a) => (
            <button
              key={a.id}
              onClick={() => setActive(a.id)}
              aria-pressed={active === a.id}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                active === a.id
                  ? 'border-cyan-300 bg-cyan-300 text-slate-900 shadow-[0_0_24px_rgba(34,211,238,0.4)]'
                  : 'border-cyan-400/25 bg-transparent text-slate-400 hover:border-cyan-300 hover:text-white'
              }`}
            >
              {a.icon} {a.tab}
            </button>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.12}>
        <div className="mt-5 overflow-hidden rounded-2xl border border-cyan-400/25 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-3 border-b border-cyan-400/20 bg-card px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: current.accent }} />
            <span className="hidden rounded-full border border-cyan-400/15 bg-black/50 px-3.5 py-1.5 font-mono text-xs text-slate-400 sm:inline-block">{current.url}</span>
            <a href={current.href} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-1 text-xs font-bold text-cyan-300 hover:underline">
              Open fullscreen <ExternalLink size={13} />
            </a>
          </div>
          {apps.map((a) => (
            <div key={a.id} className={`${a.id === active ? 'block' : 'hidden'} relative`}>
              <iframe
                src={a.href}
                title={`${a.tab} — live app`}
                loading="lazy"
                className="h-[62vh] max-h-[500px] min-h-[360px] w-full border-0 bg-white md:h-[600px]"
                onLoad={() => setShowFallback(false)}
              />
              {a.id === active && showFallback && (
                <div className="absolute inset-x-4 bottom-4 flex flex-col items-center gap-2 rounded-2xl border border-cyan-300/30 bg-black/80 px-5 py-4 text-center backdrop-blur md:flex-row md:justify-between md:text-left">
                  <p className="text-xs leading-relaxed text-slate-300">
                    Frame showing blank? The app may block embedding — open it directly instead.
                  </p>
                  <a href={a.href} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-cyan-300 px-4 py-2 text-xs font-bold text-slate-950 transition hover:bg-white">
                    {a.icon} Open {a.tab} <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-3.5 flex items-center gap-2 text-xs text-slate-400">
          <span className="dot-pulse h-2 w-2 rounded-full bg-emerald-400" />
          <MousePointerClick size={14} className="text-cyan-300" />
          All apps are fully interactive — click, type and explore right inside the frame.
        </p>
      </Reveal>
    </section>
  )
}
