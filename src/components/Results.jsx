import { ArrowUpRight } from 'lucide-react'
import Reveal, { SectionHead } from './Reveal'

const cases = [
  {
    domain: 'Healthcare · WellSky program',
    accent: '#22d3ee',
    metric: '85%',
    metricLabel: 'automation coverage',
    problem: '500+ manual scenarios, releases gated on slow human regression.',
    action: 'Engineered a Playwright + Cucumber BDD framework — 60 features, 65+ POM classes, parallel Azure CI with evidence-rich reports.',
    outcome: '85% coverage, 95%+ stability, ~60% regression effort down.',
  },
  {
    domain: 'Healthcare · Accessibility',
    accent: '#34d399',
    metric: '37',
    metricLabel: 'axe-core suites, 30+ pages AA',
    problem: 'Patient-facing app with unknown WCAG exposure and audit risk.',
    action: '37 automated axe-core suites plus WAVE / NVDA / Level Access manual audits, governed with RTM and UAT sign-off.',
    outcome: 'WCAG 2.1/2.2 AA releases with audit-ready evidence packs.',
  },
  {
    domain: 'Healthcare APIs · Performance',
    accent: '#fbbf24',
    metric: '100%',
    metricLabel: 'K6 thresholds green',
    problem: 'No one knew when the APIs would fall over under load.',
    action: 'K6 load + stress testing with thresholds, Grafana dashboards and tuning reports.',
    outcome: 'Green thresholds and a repeatable performance gate in CI.',
  },
  {
    domain: 'Cross-domain · AI-QA',
    accent: '#a78bfa',
    metric: '~40%',
    metricLabel: 'faster test authoring',
    problem: 'Authoring couldn’t keep up with sprint velocity.',
    action: 'Playwright MCP agentic testing, Claude Code workflows, Copilot setup and prompt playbooks — with team enablement.',
    outcome: '98%+ in-sprint defect resolution at 40% faster authoring.',
  },
]

export default function Results() {
  return (
    <section id="results" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-8 sm:px-5">
      <SectionHead
        tag="Case Studies"
        title={<>Problems solved, <span className="gradient-text">numbers kept</span></>}
        sub="Every metric on this site has a story behind it. Here are four."
      />
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {cases.map((c, i) => (
          <Reveal key={c.domain} delay={(i % 2) * 0.07} effect="scale">
            <article className="glow-hover card-ring flex h-full flex-col rounded-2xl bg-[#0a0e1a] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-[0.62rem] text-slate-300">{c.domain}</span>
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: c.accent, boxShadow: `0 0 12px ${c.accent}` }} />
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="tabular text-3xl font-extrabold" style={{ color: c.accent }}>{c.metric}</span>
                <span className="text-[0.7rem] text-slate-400">{c.metricLabel}</span>
              </div>
              <dl className="mt-3 space-y-2 text-[0.78rem] leading-relaxed">
                <div><dt className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-rose-300/90">Problem</dt><dd className="text-slate-400">{c.problem}</dd></div>
                <div><dt className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-cyan-300/90">Action</dt><dd className="text-slate-300">{c.action}</dd></div>
                <div><dt className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-emerald-300/90">Outcome</dt><dd className="font-semibold text-slate-100">{c.outcome}</dd></div>
              </dl>
              <a href="#consult" className="mt-4 inline-flex items-center gap-1 pt-1 text-[0.75rem] font-bold text-cyan-300 hover:underline">
                Get results like these <ArrowUpRight size={13} />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
