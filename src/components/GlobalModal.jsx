import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'

export default function GlobalModal() {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('consult') // consult, resume, mocks

  useEffect(() => {
    const handleOpen = (e) => {
      setType(e.detail || 'consult')
      setOpen(true)
    }
    window.addEventListener('open-modal', handleOpen)
    return () => window.removeEventListener('open-modal', handleOpen)
  }, [])

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
            role="dialog" aria-modal="true"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative my-auto w-full max-w-lg overflow-hidden rounded-2xl border border-cyan-300/25 bg-[#0a0e1a] shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-gradient-to-r from-cyan-400/10 to-violet-400/10 px-5 py-4">
              <div>
                <div className="text-[0.9rem] font-extrabold">{titles[type]}</div>
                <div className="font-mono text-[0.65rem] text-slate-400">{subs[type]}</div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close form" className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                <X size={16} />
              </button>
            </div>
            <div className="grid gap-4 p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
                  Your name *
                  <input autoFocus value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Rahul Verma" className="rounded-xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:border-transparent" />
                </label>
                <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
                  Your email *
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" className="rounded-xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:border-transparent" />
                </label>
              </div>
              <label className="grid gap-1.5 text-[0.72rem] font-semibold text-slate-300">
                How can I help? (optional)
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} placeholder="Tell me a bit about your current challenges..." className="w-full resize-none rounded-xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-sm font-normal text-white outline-none placeholder:text-slate-600 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:border-transparent" />
              </label>
            </div>
            <div className="border-t border-white/10 p-5 pt-4">
              <button onClick={sendReq} className="shine-btn flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-400 to-cyan-300 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:shadow-[0_0_28px_rgba(34,211,238,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0e1a]">
                <Send size={16} /> Send inquiry
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

