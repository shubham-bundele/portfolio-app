import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'
import { toast } from 'sonner'

export default function GlobalModal() {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('consult') // consult, resume, mocks
  const dialogRef = useRef(null)
  const triggerRef = useRef(null) // element that opened the modal

  useEffect(() => {
    const handleOpen = (e) => {
      triggerRef.current = document.activeElement
      setType(e.detail || 'consult')
      setOpen(true)
    }
    window.addEventListener('open-modal', handleOpen)
    return () => window.removeEventListener('open-modal', handleOpen)
  }, [])

  // Escape to close + basic focus trap + body scroll lock
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); return }
      if (e.key !== 'Tab' || !dialogRef.current) return
      const focusables = dialogRef.current.querySelectorAll('a[href], button:not([disabled]), input, select, textarea')
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Restore focus to the trigger when closed
  useEffect(() => {
    if (!open && triggerRef.current) {
      triggerRef.current.focus()
      triggerRef.current = null
    }
  }, [open])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')

  const titles = {
    consult: 'Book 30-min Consultation',
    resume: 'Resume Studio Inquiry',
    mocks: 'Book a Mock Interview',
  }
  const subs = {
    consult: 'Discuss QA strategy, automation, or career.',
    resume: 'ATS + QA-friendly resume rebuild.',
    mocks: '45-min video session + actionable feedback.',
  }

  const sendReq = () => {
    if (!name.trim() || !email.trim()) {
      toast.error('Please add your name and email before sending')
      return
    }
    const subject = `[Inquiry: ${titles[type]}] ${name || 'New request'}`
    const body = `Hi Shubham,\n\nI'm interested in: ${titles[type]}.\n\nName: ${name}\nEmail: ${email}\nNotes: ${notes}\n\nThanks!`
    window.location.href = `mailto:bundele.shubham23@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpen(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed inset-0 bg-black/75 backdrop-blur-sm" />
          <motion.div
            ref={dialogRef}
            role="dialog" aria-modal="true" aria-labelledby="global-modal-title"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative my-auto w-full max-w-lg overflow-hidden rounded-2xl border border-cyan-300/25 bg-card shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-gradient-to-r from-cyan-400/10 to-violet-400/10 px-5 py-4">
              <div>
                <div id="global-modal-title" className="text-sm font-extrabold">{titles[type]}</div>
                <div className="font-mono text-2xs text-slate-400">{subs[type]}</div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close form" className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                <X size={16} />
              </button>
            </div>
            <form
              className="grid gap-4 p-5"
              onSubmit={(e) => { e.preventDefault(); sendReq() }}>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="grid gap-1.5 text-xs font-semibold text-slate-300">
                  Your name *
                  <input autoFocus required aria-required="true" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Rahul Verma" className="rounded-xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:border-transparent" />
                </label>
                <label className="grid gap-1.5 text-xs font-semibold text-slate-300">
                  Your email *
                  <input required aria-required="true" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" className="rounded-xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:border-transparent" />
                </label>
              </div>
              <label className="grid gap-1.5 text-xs font-semibold text-slate-300">
                How can I help? (optional)
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} placeholder="Tell me a bit about your current challenges..." className="w-full resize-none rounded-xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:border-transparent" />
              </label>
              <button type="submit" className="shine-btn mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-400 to-cyan-300 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:shadow-[0_0_28px_rgba(34,211,238,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-card">
                <Send size={16} /> Send inquiry
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
