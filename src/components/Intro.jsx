import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Intro({ done, onDone }) {
  useEffect(() => {
    if (done) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { onDone(); return }
    if (sessionStorage.getItem('sb-intro')) { onDone(); return }
    const t = setTimeout(() => {
      sessionStorage.setItem('sb-intro', '1')
      onDone()
    }, 1500)
    return () => clearTimeout(t)
  }, [done, onDone])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-black"
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -12 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-500 text-xl font-black text-slate-950 shadow-[0_0_60px_rgba(34,211,238,0.5)]"
            >
              SB
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-4 text-sm font-extrabold tracking-[0.3em] text-white"
            >
              SHUBHAM BUNDELE
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.9, ease: 'easeInOut' }}
              className="mt-3 h-[2px] w-40 origin-left rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-300"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
