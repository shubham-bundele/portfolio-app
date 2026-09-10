import { useState } from 'react'
import { ExternalLink, MousePointerClick } from 'lucide-react'
import { apps } from '../data'
import Reveal, { SectionHead } from './Reveal'

export default function LiveApps() {
  const [active, setActive] = useState(apps[0].id)
  const current = apps.find((a) => a.id === active)

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
              className={`rounded-full border px-5 py-2.5 text-[0.83rem] font-semibold transition-all ${
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
          <div className="flex items-center gap-3 border-b border-cyan-400/20 bg-[#0a0e1a] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: current.accent }} />
            <span className="rounded-full border border-cyan-400/15 bg-black/50 px-3.5 py-1.5 font-mono text-[0.72rem] text-slate-400">{current.url}</span>
            <a href={current.href} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-1 text-[0.74rem] font-bold text-cyan-300 hover:underline">
              Open fullscreen <ExternalLink size={13} />
            </a>
          </div>
          {apps.map((a) => (
            <div key={a.id} className={a.id === active ? 'block' : 'hidden'}>
              <iframe src={a.href} title={`${a.tab} — live app`} loading="lazy" className="h-[62vh] max-h-[500px] min-h-[360px] w-full border-0 bg-white md:h-[600px]" />
            </div>
          ))}
        </div>
        <p className="mt-3.5 flex items-center gap-2 text-[0.76rem] text-slate-400">
          <span className="dot-pulse h-2 w-2 rounded-full bg-emerald-400" />
          <MousePointerClick size={14} className="text-cyan-300" />
          Both apps are fully interactive — click, type and explore right inside the frame. If a frame stays blank, the app blocks embedding — use “Open fullscreen”.
        </p>
      </Reveal>
    </section>
  )
}
