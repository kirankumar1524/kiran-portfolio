import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 py-28 text-slate-100 sm:px-10 lg:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.16),transparent_16%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.14),transparent_20%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.92),rgba(3,7,18,0.98))]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/55 px-4 py-2 text-sm text-slate-200 backdrop-blur-2xl shadow-slate-950/20">
            <span className="text-cyan-300">Computer Science & Design</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}>
            <h1 className="max-w-3xl text-[clamp(3.4rem,7vw,5.5rem)] font-semibold leading-[0.9] text-white">
              Hello.
              <br /> I'm Kiran.
            </h1>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            SNS College of Engineering
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-slate-100 transition hover:border-cyan-300">
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.85, delay: 0.25 }} className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/65 p-1 shadow-[0_40px_120px_-70px_rgba(0,0,0,0.7)] backdrop-blur-3xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950/75 px-8 py-10 shadow-inner shadow-slate-950/20">
            <div className="space-y-5 text-slate-300">
              <div className="rounded-[1.8rem] border border-white/10 bg-slate-950/90 p-6 shadow-[inset_0_0_40px_rgba(0,0,0,0.35)]">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Details</p>
                <p className="mt-4 text-white">SNS College of Engineering</p>
                <p className="mt-2 text-white">Computer Science and Design</p>
              </div>
              <div className="grid gap-4 text-slate-300 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Focus</p>
                  <p className="mt-3 text-white">MERN · AI · UI/UX</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Tools</p>
                  <p className="mt-3 text-white">React · Node.js · MongoDB · Figma</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/80 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
