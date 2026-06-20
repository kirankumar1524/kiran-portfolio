import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const phrases = ['AI-powered products', 'Fluid developer experiences', 'Scalable full-stack systems']

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const currentPhrase = phrases[index % phrases.length]

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayText((prev) => {
        const nextText = isDeleting
          ? currentPhrase.slice(0, prev.length - 1)
          : currentPhrase.slice(0, prev.length + 1)
        return nextText
      })

      if (!isDeleting && displayText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 900)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setIndex((prev) => prev + 1)
      }
    }, isDeleting ? 80 : 120)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentPhrase])

  return (
    <section id="home" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 px-6 py-24 shadow-[0_60px_120px_-60px_rgba(15,23,42,0.8)] backdrop-blur-3xl sm:px-10">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl animate-float" />
        <div className="absolute right-[-6%] top-20 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl animate-float animation-delay-1500" />
        <div className="absolute left-1/2 top-[55%] h-64 w-64 -translate-x-1/2 rounded-full bg-slate-400/10 blur-3xl animate-float animation-delay-3000" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300">
          AI Developer's Workspace
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          Crafting intelligent products with precision and polish.
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <p className="text-lg text-slate-300 sm:text-xl">
            {displayText}
            <span className="ml-1 inline-block h-6 w-1 animate-pulse rounded bg-cyan-300" />
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-10 grid w-full gap-6 sm:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Role</p>
            <p className="mt-4 text-2xl font-semibold text-white">Full Stack AI Developer</p>
            <p className="mt-3 text-slate-400">Building end-to-end platforms that feel fast, secure, and polished.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Focus</p>
            <p className="mt-4 text-2xl font-semibold text-white">Design, code and scale interfaces</p>
            <p className="mt-3 text-slate-400">From AI visualizations to polished web apps, I ship crisp experiences that users enjoy.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
