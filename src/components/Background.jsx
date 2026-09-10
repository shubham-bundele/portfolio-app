import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Background() {
  const glowRef = useRef(null)
  const mx = useMotionValue(-600)
  const my = useMotionValue(-600)
  const sx = useSpring(mx, { stiffness: 120, damping: 22, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 120, damping: 22, mass: 0.6 })

  useEffect(() => {
    const move = (e) => {
      mx.set(e.clientX - 300)
      my.set(e.clientY - 300)
    }
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('pointermove', move, { passive: true })
    }
    return () => window.removeEventListener('pointermove', move)
  }, [mx, my])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_10%,rgba(34,211,238,0.08),transparent),radial-gradient(ellipse_50%_40%_at_10%_80%,rgba(167,139,250,0.06),transparent),linear-gradient(#000_0%,#04060f_100%)]" />
      <div className="bg-grid-fx absolute inset-0" />
      {/* cursor-follow spotlight — spring smoothed, desktop pointers only */}
      <motion.div ref={glowRef} style={{ x: sx, y: sy }} className="absolute left-0 top-0 hidden h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.10),rgba(167,139,250,0.05)_45%,transparent_65%)] blur-2xl md:block" />
      <div className="float-slow absolute -top-24 -right-24 h-[min(400px,60vw)] w-[min(400px,60vw)] rounded-full bg-cyan-400/[0.07] blur-[120px]" />
      <div className="float-slower absolute bottom-[20%] -left-24 h-[min(300px,50vw)] w-[min(300px,50vw)] rounded-full bg-violet-400/[0.06] blur-[120px]" />
    </div>
  )
}
