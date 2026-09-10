import { motion } from 'framer-motion'

export default function Divider({ flip = false }) {
  return (
    <div aria-hidden className="pointer-events-none relative mx-auto max-w-6xl overflow-hidden px-4 sm:px-5">
      <motion.svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="h-[42px] w-[200%] opacity-60"
        animate={{ x: flip ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
      >
        <path
          d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1050,55 1200,5 1350,30 C1500,55 1650,5 1800,30 C1950,55 2100,5 2250,30 L2250,60 L0,60 Z"
          fill="none"
          stroke="url(#divGrad)"
          strokeWidth="1.5"
        />
        <defs>
          <linearGradient id="divGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="25%" stopColor="#22d3ee" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.7" />
            <stop offset="75%" stopColor="#f472b6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
}
