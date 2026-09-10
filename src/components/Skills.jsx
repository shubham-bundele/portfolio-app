import { skills, aiItems } from '../data'
import Reveal, { SectionHead } from './Reveal'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-6 pt-12 sm:px-5">
      <SectionHead
        tag="Capabilities"
        title={<>Technical <span className="gradient-text">Arsenal</span></>}
        sub="Full-spectrum quality engineering — from framework architecture to accessibility audits and load testing."
      />
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.title} delay={(i % 2) * 0.08} effect="scale">
            <div
              onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`); e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`) }}
              className="spotlight glow-hover card-ring h-full rounded-2xl bg-[#0a0e1a] p-5 sm:p-6"
            >
              <h3 className="flex items-center gap-3 text-[0.98rem] font-bold">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-lg ${['float-a', 'float-b', 'float-c', 'float-b'][i % 4]}`}>{s.icon}</span>
                {s.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((c) => (
                  <span key={c} className="chip-fx rounded-full border border-cyan-400/[0.18] bg-cyan-400/[0.07] px-3 py-1.5 text-[0.7rem] font-medium text-[#dbe4ff]">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function AILab() {
  return (
    <section id="ai" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-8 sm:px-5">
      <SectionHead
        tag="Vibe Coding Division"
        title={<>AI-Assisted <span className="gradient-text">QA Lab</span></>}
        sub="I don't just test software — I pair with LLMs to write it, break it, and validate it faster. ~40% faster scenario authoring through prompt-engineered agentic workflows."
      />
      <Reveal delay={0.1}>
        <div className="mt-5 rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-400/10 to-violet-400/10 p-5 sm:p-6 sm:p-5">
          <div className="grid gap-3 sm:grid-cols-2">
            {aiItems.map((a) => (
              <div key={a.title} className="group rounded-2xl border border-violet-400/25 bg-[#04060f]/80 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_0_24px_rgba(167,139,250,0.28)]">
                <h4 className="text-[0.88rem] font-bold text-violet-300">{a.icon} {a.title}</h4>
                <p className="mt-2 text-[0.78rem] leading-relaxed text-slate-400">{a.desc}</p>
                <span className="mt-3 inline-block rounded-full border border-violet-400/30 bg-violet-400/15 px-2.5 py-1 text-[0.62rem] font-semibold text-violet-300">{a.tag}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 overflow-hidden rounded-xl border border-cyan-400/15 bg-black/40">
            <div className="flex w-max marquee-track gap-8 px-6 py-3 font-mono text-[0.7rem] text-slate-500 hover:[animation-play-state:paused]">
              {[0, 1].map((k) => (
                <span key={k} className="flex gap-8">
                  <span>playwright-mcp · claude-code · copilot · prompt-engineering · axe-core · k6 · azure-pipelines ·</span>
                  <span>playwright-mcp · claude-code · copilot · prompt-engineering · axe-core · k6 · azure-pipelines ·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
