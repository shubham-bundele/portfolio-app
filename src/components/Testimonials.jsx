import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import Reveal, { SectionHead } from './Reveal'

// TODO: replace these draft placeholders with real client quotes.
const quotes = [
  {
    text: 'Shubham took our regression from a two-day manual grind to a green CI run we actually trust. The evidence-packed reports ended every “did we test that?” debate.',
    name: 'Sagar Singh',
    role: 'Engineering Manager · Healthcare SaaS program',
    initials: 'SS',
    accent: '#22d3ee',
  },
  {
    text: 'The accessibility audit was the most thorough we have had — automated suites plus manual screen-reader walkthroughs, with fixes prioritized by user impact.',
    name: 'Ankit Ojha',
    role: 'Product Owner · Automotive web platform',
    initials: 'AO',
    accent: '#a78bfa',
  },
  {
    text: 'He learns fast, documents everything, and his framework survived three team changes without rotting. That almost never happens.',
    name: 'Anagha Kapse',
    role: 'QA Lead · Banking & fintech',
    initials: 'AK',
    accent: '#34d399',
  },
]

export default function Testimonials() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }))
  const [viewportRef, embla] = useEmblaCarousel({ loop: true, align: 'center' }, [autoplay.current])
  const [selected, setSelected] = useState(0)

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelected(embla.selectedScrollSnap())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    embla.on('select', onSelect)
    onSelect()
  }, [embla, onSelect])

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-5">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <SectionHead tag="Wall of Love" title={<>What teams <span className="gradient-text">say</span></>} sub="Draft quotes in the voice of past engagements — send me your testimonial and I'll feature it here." />
          <div className="flex gap-2">
            <button onClick={() => embla && embla.scrollPrev()} aria-label="Previous testimonial" className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/50 hover:text-white">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => embla && embla.scrollNext()} aria-label="Next testimonial" className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/50 hover:text-white">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.08} effect="scale">
        <div ref={viewportRef} className="mt-5 overflow-hidden rounded-2xl">
          <div className="flex touch-pan-y gap-4">
            {quotes.map((q, i) => (
              <figure key={q.name + i} className={`flex min-w-0 shrink-0 grow-0 basis-[86%] flex-col rounded-2xl border bg-[#0a0e1a] p-6 transition-all duration-500 sm:basis-[64%] lg:basis-[52%] ${i === selected ? 'border-cyan-300/40 shadow-[0_0_36px_rgba(34,211,238,0.18)]' : 'border-white/10 opacity-70'}`}>
                <Quote size={22} className="text-cyan-300/70" />
                <blockquote className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-slate-200">“{q.text}”</blockquote>
                <div className="mt-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={13} className="fill-amber-300 text-amber-300" />
                  ))}
                </div>
                <figcaption className="mt-3 flex items-center gap-3 border-t border-white/[0.07] pt-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-[0.72rem] font-black text-slate-950" style={{ background: `linear-gradient(135deg, ${q.accent}, #ffffff)` }}>
                    {q.initials}
                  </span>
                  <span>
                    <span className="block text-[0.82rem] font-bold">{q.name}</span>
                    <span className="block font-mono text-[0.65rem] text-slate-500">{q.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-1.5">
          {quotes.map((q, i) => (
            <button key={q.name + i} onClick={() => embla && embla.scrollTo(i)} aria-label={`Go to testimonial ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === selected ? 'w-7 bg-cyan-300' : 'w-1.5 bg-white/20 hover:bg-white/40'}`} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
