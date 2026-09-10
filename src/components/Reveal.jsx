import { motion } from 'framer-motion'

const effects = {
  up: { initial: { opacity: 0, y: 28 }, inView: { opacity: 1, y: 0 } },
  scale: { initial: { opacity: 0, scale: 0.94, y: 12 }, inView: { opacity: 1, scale: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -28 }, inView: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 28 }, inView: { opacity: 1, x: 0 } },
}

export default function Reveal({ children, delay = 0, y = 28, className = '', effect = 'up' }) {
  const e = effects[effect] || effects.up
  const initial = effect === 'up' ? { opacity: 0, y } : e.initial
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={e.inView}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHead({ tag, title, sub, underline = true, action }) {
  return (
    <Reveal>
      <div className="font-mono text-[11px] font-bold tracking-[0.22em] uppercase text-cyan-300">// {tag}</div>
      <div className="mt-1.5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">{title}</h2>
          {underline && (
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-3 h-[3px] w-24 origin-left rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-300 shadow-[0_0_14px_rgba(34,211,238,0.6)]"
            />
          )}
          {sub && <p className="mt-2.5 max-w-2xl text-[0.85rem] sm:text-[0.9rem] leading-relaxed text-slate-400">{sub}</p>}
        </div>
        {action && (
          <div className="mt-4 lg:mt-0 lg:ml-4 shrink-0 self-start lg:self-auto">
            {action}
          </div>
        )}
      </div>
    </Reveal>
  )
}
