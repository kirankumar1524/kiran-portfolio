import { motion } from 'framer-motion'

const stats = [
  { label: 'Projects shipped', value: '14+' },
  { label: 'AI experiments', value: '7' },
  { label: 'Interfaces crafted', value: '24' },
]

export default function About() {
  return (
    <motion.section id="about" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} viewport={{ once: true }} className="space-y-10 py-24">
      <div className="max-w-3xl">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">About Me</p>
        <h2 className="mt-4 text-4xl font-semibold text-white">I bridge design and engineering to build strong digital products.</h2>
        <p className="mt-6 text-slate-300 leading-8">
          As a Computer Science and Design student at SNS College of Engineering, I build AI-first applications with crisp interfaces, efficient backend logic, and smooth user interactions.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.9)] backdrop-blur-3xl">
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm">Deep focus</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">MERN, AI, UI/UX and Cloud</h3>
          <p className="mt-5 text-slate-300 leading-8">
            I specialize in bringing ideas to life with performant React applications, intelligent backend systems, and visually rich interfaces that feel fluid and modern.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-800 bg-white/5 p-5">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-3xl">
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm">Philosophy</p>
          <ul className="mt-6 space-y-4 text-slate-300">
            <li className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
              <strong className="text-white">Design-first development</strong> — every app should feel intuitive, polished, and effortless to use.
            </li>
            <li className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
              <strong className="text-white">Data-driven decisions</strong> — I build systems optimized for performance, maintainability, and scale.
            </li>
            <li className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
              <strong className="text-white">Motion that matters</strong> — subtle animation improves clarity and keeps interactions feeling modern.
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  )
}
