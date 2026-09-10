import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BadgeCheck, Briefcase, ExternalLink, ImagePlus } from 'lucide-react'
import { certifications, experience } from '../data'
import Reveal, { SectionHead } from './Reveal'

gsap.registerPlugin(ScrollTrigger)

export function Experience() {
  const railRef = useRef(null)
  const fillRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.fromTo(fillRef.current, { scaleY: 0 }, {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: railRef.current, start: 'top 75%', end: 'bottom 55%', scrub: 0.6 },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-8 sm:px-5">
      <SectionHead
        tag="Career Path"
        title={<>Professional <span className="gradient-text">Experience</span></>}
        sub="5+ years across Healthcare, Automotive, Banking & SaaS — shipping quality at enterprise scale."
      />
      <div ref={railRef} className="timeline-rail relative mt-5 space-y-4 pl-7">
        <span aria-hidden ref={fillRef} className="absolute bottom-1 left-[8px] top-1 w-[2px] origin-top rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
        {experience.map((e, i) => (
          <Reveal key={e.role} delay={i * 0.06}>
            <article className="glow-hover card-ring relative rounded-2xl bg-[#0a0e1a] p-5 sm:p-6">
              <span className="absolute -left-8 top-8 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.7)]" style={{ left: '-25px' }} />
              <div className="flex flex-wrap items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-cyan-300">
                <Briefcase size={13} /> {e.date}
              </div>
              <h3 className="mt-2 text-[1.04rem] font-bold leading-snug">{e.role}</h3>
              <div className="mt-1 text-[0.83rem] font-medium text-cyan-300/90">{e.org}</div>
              <ul className="mt-3.5 space-y-2">
                {e.points.map((p) => (
                  <li key={p.slice(0, 32)} className="relative pl-4 text-[0.8rem] leading-relaxed text-slate-400">
                    <span className="absolute left-0 top-0 text-cyan-300">▸</span>{p}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function CertCard({ c }) {
  const [hasImg, setHasImg] = useState(false)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    let live = true
    const im = new Image()
    im.onload = () => live && setHasImg(true)
    im.onerror = () => live && setHasImg(false)
    im.src = c.image
    return () => { live = false }
  }, [c.image])

  return (
    <div
      className="card-ring relative h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-[#0a0e1a]"
      onMouseEnter={() => hasImg && setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => hasImg && setFlipped((v) => !v)}
    >
      {/* DETAILS FACE */}
      <div className={`absolute inset-0 flex flex-col p-5 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${flipped ? '-rotate-2 scale-[0.94] opacity-0' : 'rotate-0 scale-100 opacity-100'}`}>
        <div className="flex items-start gap-3">
                  <span className="float-b grid h-11 w-11 shrink-0 place-items-center rounded-2xl border text-lg font-black" style={{ borderColor: `${c.accent}55`, background: `${c.accent}18`, color: c.accent }}>
            {c.badge}
          </span>
          <div className="min-w-0">
            <h3 className="text-[0.85rem] font-bold leading-snug">{c.title}</h3>
            <div className="mt-0.5 truncate text-[0.75rem] text-slate-400">{c.issuer}</div>
            <div className="mt-0.5 font-mono text-[0.68rem] text-slate-500">Issued {c.date}</div>
          </div>
        </div>
        {c.credentialId && (
          <div className="mt-3 font-mono text-[0.68rem] text-slate-500">
            ID <span className="text-slate-300">{c.credentialId}</span>
          </div>
        )}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {c.skills.map((s) => (
            <span key={s} className="rounded-full border border-cyan-400/[0.16] bg-cyan-400/[0.06] px-2.5 py-1 text-[0.64rem] font-medium text-[#dbe4ff]">{s}</span>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-2 border-t border-white/[0.06] pt-3 text-[0.72rem] font-semibold text-emerald-300">
          <BadgeCheck size={14} /> Verified
          {hasImg ? (
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-2.5 py-1 text-[0.64rem] text-cyan-200">
              <ExternalLink size={11} /> Hover / tap to view
            </span>
          ) : (
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-dashed border-amber-300/40 bg-amber-300/10 px-2.5 py-1 text-[0.64rem] text-amber-200">
              <ImagePlus size={11} /> Image pending
            </span>
          )}
        </div>
      </div>

      {/* IMAGE FACE — only rendered when file exists */}
      {hasImg && (
        <div className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${flipped ? 'translate-y-0 rotate-0 scale-100 opacity-100' : 'translate-y-4 rotate-1 scale-[1.04] opacity-0 pointer-events-none'}`}>
          <img src={c.image} alt={`${c.title} certificate`} loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-3">
            <span className="truncate rounded-full bg-black/70 px-3 py-1.5 font-mono text-[0.65rem] text-white backdrop-blur">{c.title}</span>
            <a
              href={c.image}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex shrink-0 items-center gap-1 rounded-full bg-cyan-300 px-3 py-1.5 text-[0.65rem] font-bold text-slate-900 hover:bg-white"
            >
              <ExternalLink size={11} /> Full view
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export function Credentials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-5">
      <SectionHead tag="Credentials" title={<>Professional <span className="gradient-text">Certifications</span></>} sub="Hover / tap a tile to reveal the certificate image. Anthropic AI, ISO/IEC AI management, security & testing foundations." />
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.id} delay={(i % 3) * 0.07}>
            <CertCard c={c} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
