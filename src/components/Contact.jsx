import { Copy, Check, Mail, MapPin, Briefcase, Clock, Send } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import Reveal, { SectionHead } from './Reveal'

export function Contact() {
  const email = 'bundele.shubham23@gmail.com'
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(email); setCopied(true); toast.success('Email copied — talk soon!'); setTimeout(() => setCopied(false), 1600) } catch { toast.error('Copy failed — long-press the address instead') }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-8 sm:px-5">
      <SectionHead tag="Work Together" title={<>Let&apos;s ship <span className="gradient-text">quality</span></>} sub="Need a QA solution, a resume that gets interviews, or 1:1 mentorship? Frameworks, audits, resume studio, and 30-min career calls." />
      <Reveal delay={0.1}>
        <div className="mt-5 grid items-start gap-3 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card-ring rounded-2xl bg-[#0a0e1a] p-5 sm:p-6">
            <div className="font-mono text-[0.72rem] text-slate-500">$ contact --candidate shubham.bundele</div>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
              <code className="flex-1 truncate rounded-2xl border border-cyan-400/20 bg-black/50 px-4 py-3 font-mono text-sm text-cyan-200">{email}</code>
              <button onClick={copy} className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-900 transition hover:shadow-[0_0_24px_rgba(34,211,238,0.45)]">
                {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={`mailto:${email}`} className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 px-5 py-2.5 text-sm font-semibold text-[#dbe4ff] transition hover:border-cyan-300 hover:shadow-[0_0_18px_rgba(34,211,238,0.3)]">
                <Mail size={15} /> Email me
              </a>
              <a href="https://linkedin.com/in/connectshubham23" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 px-5 py-2.5 text-sm font-semibold text-[#dbe4ff] transition hover:border-cyan-300 hover:shadow-[0_0_18px_rgba(34,211,238,0.3)]">
                <span className="grid h-4 w-4 place-items-center rounded-[4px] bg-[#0a66c2] text-[10px] font-black text-white">in</span> LinkedIn
              </a>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-2.5 border-t border-white/[0.07] pt-5 sm:grid-cols-3">
              <div className="float-a rounded-2xl border border-white/[0.07] bg-black/30 p-3.5">
                <div className="flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-widest text-slate-500"><MapPin size={12} /> Engagement</div>
                <div className="mt-1.5 text-[0.8rem] font-semibold">Project · Retainer · 1:1</div>
              </div>
              <div className="float-b rounded-2xl border border-white/[0.07] bg-black/30 p-3.5">
                <div className="flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-widest text-slate-500"><Briefcase size={12} /> Focus</div>
                <div className="mt-1.5 text-[0.8rem] font-semibold">SDET · Playwright · AI-QA</div>
              </div>
              <div className="float-c rounded-2xl border border-white/[0.07] bg-black/30 p-3.5">
                <div className="flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-widest text-slate-500"><Clock size={12} /> Replies</div>
                <div className="mt-1.5 text-[0.8rem] font-semibold">Within ~24 hours</div>
              </div>
            </div>
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {['QA Solutions', 'Resume Studio', '1:1 Mentorship · Online'].map((t) => (
                <span key={t} className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1 text-[0.68rem] text-slate-300">{t}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-violet-400/25 bg-gradient-to-br from-cyan-400/10 to-violet-400/10 p-6 sm:p-7">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-400/15 px-3 py-1 text-[0.65rem] font-bold text-violet-300"><Send size={11} /> response time: ~24h</div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 font-mono text-[0.62rem] text-cyan-200">booking open · replies ~24h</div>
            </div>

            <div className="mt-5 font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-slate-400">Core QA</div>
            <ul className="mt-2.5 space-y-2 text-[0.8rem] leading-relaxed text-slate-300">
              <li>✓ Playwright + Cucumber BDD frameworks from scratch — 500+ scenarios, 85% coverage</li>
              <li>✓ WCAG 2.2 AA audits — 37 axe-core suites + WAVE / NVDA manual</li>
              <li>✓ K6 performance + Azure Pipelines CI — parallel 4 workers, 95%+ stability</li>
            </ul>

            <div className="mt-5 font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-violet-300">Vibe coding · AI-QA Lab</div>
            <ul className="mt-2.5 space-y-2 text-[0.8rem] leading-relaxed text-slate-300">
              <li>🤖 <strong className="text-white">Agentic testing</strong> via Playwright MCP — AI navigates, asserts & audits live UIs</li>
              <li>⌨️ <strong className="text-white">Claude Code 101 certified</strong> — scaffolding, bulk test gen, refactoring (~40% faster authoring)</li>
              <li>✨ <strong className="text-white">Copilot + GenAI</strong> — POM classes, fixtures, custom HTML/PDF reporters with evidence</li>
              <li>🧠 <strong className="text-white">Prompt engineering</strong> — Gherkin generation, negative-test ideation, defect RCA</li>
              <li>🛡️ <strong className="text-white">Responsible AI</strong> — ISO/IEC 42001 AIMS + InfoSec aware, Cognixia GenAI 101</li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {['Playwright MCP', 'Claude Code', 'Copilot', 'axe-core', 'K6', 'Azure'].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[0.62rem] text-slate-300">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="mt-4 border-t border-cyan-400/10 px-5 py-8 text-center">
      <div className="text-2xl font-black tracking-[0.08em] text-white sm:text-3xl">SHUBHAM BUNDELE</div>
      <p className="mt-2 text-[0.83rem] text-slate-400">QA solutions · Resume studio · 1:1 mentorship for QA careers.</p>
      <div className="mt-6 flex flex-col gap-2 text-[0.9rem] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 sm:text-[0.83rem]">
        <a href="#consult" className="rounded-xl px-4 py-3 text-cyan-300 hover:bg-cyan-300/10 hover:underline sm:px-2 sm:py-1">Book 30-min call</a>
        <a href="#services" className="rounded-xl px-4 py-3 text-cyan-300 hover:bg-cyan-300/10 hover:underline sm:px-2 sm:py-1">QA Solutions</a>
        <a href="#resume" className="rounded-xl px-4 py-3 text-cyan-300 hover:bg-cyan-300/10 hover:underline sm:px-2 sm:py-1">Resume Studio</a>
        <a href="mailto:bundele.shubham23@gmail.com" className="rounded-xl px-4 py-3 text-cyan-300 hover:bg-cyan-300/10 hover:underline sm:px-2 sm:py-1">Email</a>
        <a href="https://linkedin.com/in/connectshubham23" target="_blank" rel="noopener noreferrer" className="rounded-xl px-4 py-3 text-cyan-300 hover:bg-cyan-300/10 hover:underline sm:px-2 sm:py-1">LinkedIn</a>
        <a href="https://qa-data-studio.vercel.app/" target="_blank" rel="noopener noreferrer" className="rounded-xl px-4 py-3 text-cyan-300 hover:bg-cyan-300/10 hover:underline sm:px-2 sm:py-1">QA Data Studio</a>
        <a href="https://career-canvas-eta.vercel.app/" target="_blank" rel="noopener noreferrer" className="rounded-xl px-4 py-3 text-cyan-300 hover:bg-cyan-300/10 hover:underline sm:px-2 sm:py-1">Career Canvas</a>
      </div>
      <p className="mt-5 font-mono text-[0.72rem] text-slate-500">© 2026 Shubham Bundele · Built with React + Tailwind ⚡</p>
    </footer>
  )
}
