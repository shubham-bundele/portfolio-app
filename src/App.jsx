import { useCallback, useEffect, useState } from 'react'
import Lenis from 'lenis'
import { Toaster } from 'sonner'
import { motion, useScroll } from 'framer-motion'
import Background from './components/Background'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats, { DomainStrip } from './components/Stats'
import { Skills, AILab } from './components/Skills'
import { Services, BookingHub, InterviewMocks } from './components/Services'
import Results from './components/Results'
import BeforeAfter from './components/BeforeAfter'
import LiveApps from './components/LiveApps'
import { Experience, Credentials } from './components/Experience'
import Testimonials from './components/Testimonials'
import Divider from './components/Divider'
import BackToTop from './components/BackToTop'
import { Contact, Footer } from './components/Contact'
import GlobalModal from './components/GlobalModal'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const finishIntro = useCallback(() => setIntroDone(true), [])
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    let raf
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)

    // anchor clicks -> lenis scroll or modal
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (id.length < 2) return
      
      if (id === '#consult' || id === '#resume' || id === '#mocks') {
        e.preventDefault()
        window.dispatchEvent(new CustomEvent('open-modal', { detail: id.substring(1) }))
        return
      }

      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.scrollIntoView()
      } else {
        lenis.scrollTo(el, { offset: -90, duration: 1.4 })
      }
    }
    document.addEventListener('click', onClick)
    return () => { cancelAnimationFrame(raf); document.removeEventListener('click', onClick); lenis.destroy() }
  }, [])

  return (
    <div className="min-h-[100svh] overflow-x-clip bg-black font-sans text-[#eef3ff]">
      <motion.div 
        className="fixed left-0 right-0 top-0 z-[100] h-1 origin-left bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400"
        style={{ scaleX: scrollYProgress }}
      />
      <Intro done={introDone} onDone={finishIntro} />
      <Background />
      <Toaster position="bottom-center" theme="dark" toastOptions={{ style: { background: '#0a0e1a', border: '1px solid rgba(34,211,238,.3)', color: '#eef3ff' } }} />
      <Navbar />
      <BackToTop />
      <GlobalModal />
      <main>
        <Hero />
        <Stats />
        <DomainStrip />
        <Skills />
        <Services />
        <Results />
        <BookingHub />
        <BeforeAfter />
        <InterviewMocks />
        <AILab />
        <LiveApps />
        <Experience />
        <Credentials />
        <Divider />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
