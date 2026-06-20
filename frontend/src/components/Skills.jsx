import { motion } from 'framer-motion'

const skills = ['React', 'Node.js', 'MongoDB', 'Express', 'Python', 'Java', 'Figma', 'AWS']

export default function Skills() {
  const radius = 120
  return (
    <motion.section id="skills" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} viewport={{ once: true }} className="space-y-10 py-24">
      <div>
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">My Skills</p>
        <h2 className="mt-4 text-4xl font-semibold text-white">Technology stack</h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.9)] backdrop-blur-3xl">
          <p className="text-slate-300 leading-8">
            The tools I use blend creativity with stability. These technologies help me build fast, maintainable, and elegant solutions for modern applications.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill} className="rounded-3xl border border-slate-800 bg-white/5 p-4 text-center text-slate-100 shadow-sm shadow-slate-950/20">
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative isolate flex items-center justify-center rounded-[2rem] border border-white/10 bg-slate-900/50 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.9)] backdrop-blur-3xl">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5" />
          <div className="relative h-[360px] w-[360px] rounded-full border border-white/10 bg-slate-950/70 shadow-[inset_0_0_80px_rgba(255,255,255,0.04)]">
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 ring-1 ring-cyan-300/20" />
            {skills.map((skill, index) => {
              const angle = (index / skills.length) * Math.PI * 2
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              return (
                <span
                  key={skill}
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  className="absolute left-1/2 top-1/2 inline-flex max-w-[8rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center text-sm text-slate-100 shadow-lg shadow-slate-950/10 backdrop-blur-md transition duration-300 hover:scale-110 hover:border-cyan-300/30"
                >
                  {skill}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
