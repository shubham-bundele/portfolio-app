import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarCheck, Menu, X } from 'lucide-react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#resume', label: 'Resume' },
  { href: '#ai', label: 'AI Lab' },
  { href: '#live', label: 'Live Apps' },
  { href: '#consult', label: 'Consult' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)
  const lastY = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setHidden(y > lastY[0] && y > 320)
      lastY[1](y)
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? Math.min(1, y / h) : 0)

      const ids = ['skills', 'services', 'consult', 'resume', 'mocks', 'ai', 'live', 'experience', 'contact']
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) current = `#${id}`
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-2 sm:px-4">
      <div className="mx-auto h-[2px] max-w-6xl overflow-hidden rounded-full bg-transparent">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-emerald-300" style={{ width: `${progress * 100}%` }} />
      </div>

      <motion.nav
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: hidden && !open ? '-115%' : 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
        className={`glass mx-auto mt-2 flex max-w-6xl items-center justify-between gap-2 rounded-2xl border px-2.5 py-2 transition-all duration-300 sm:gap-3 sm:px-4 sm:py-2.5 ${scrolled ? 'border-cyan-300/25 bg-[#04060f]/90 shadow-[0_12px_50px_rgba(0,0,0,0.55),0_0_30px_rgba(34,211,238,0.12)]' : 'border-white/10 bg-[#04060f]/60 shadow-[0_8px_30px_rgba(0,0,0,0.4)]'}`}
      >
        <a href="#top" className="group flex min-w-0 flex-1 items-center gap-2.5 sm:flex-none">
          <motion.span whileHover={{ rotate: -8, scale: 1.06 }} className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-500 text-[0.8rem] font-black text-slate-950 sm:h-10 sm:w-10 sm:text-sm">
            SB
          </motion.span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate text-[0.78rem] font-extrabold tracking-[0.08em] text-white sm:text-[0.9rem]">SHUBHAM BUNDELE</span>
            <span className="mt-1 truncate font-mono text-[0.55rem] uppercase tracking-[0.2em] text-cyan-300/80 sm:text-[0.6rem]">qa solutions · mentorship</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <motion.a
                href={l.href}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                className={`relative rounded-xl px-3 py-2 text-[0.83rem] font-medium transition-colors xl:px-3.5 ${active === l.href ? 'bg-cyan-300/15 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
              >
                {l.label}
                {active === l.href && (
                  <motion.span layoutId="nav-pill" className="absolute -bottom-[1px] left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                )}
              </motion.a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-[0.68rem] font-semibold text-emerald-200 min-[1200px]:inline-flex">
            <span className="dot-pulse h-1.5 w-1.5 rounded-full bg-emerald-400" /> Booking open
          </span>
          <motion.a
            href="#consult"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="shine-btn pulse-glow hidden items-center gap-1.5 rounded-2xl bg-gradient-to-r from-violet-400 to-cyan-300 px-3.5 py-2.5 text-[0.8rem] font-extrabold text-slate-950 transition hover:shadow-[0_0_28px_rgba(167,139,250,0.55)] sm:inline-flex"
          >
            <CalendarCheck size={14} strokeWidth={2.75} /> Book Call
          </motion.a>
          <button
            className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/40 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="glass mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#04060f]/95 shadow-2xl md:hidden"
          >
            <ul className="p-2">
              {links.map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${active === l.href ? 'bg-cyan-300/15 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
                  >
                    {l.label}
                    <span className="ml-auto text-slate-600">→</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="border-t border-white/10 p-3">
              <a href="#consult" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-400 to-cyan-300 px-4 py-3 text-sm font-extrabold text-slate-950">
                <CalendarCheck size={15} strokeWidth={2.75} /> Book 30-min call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
