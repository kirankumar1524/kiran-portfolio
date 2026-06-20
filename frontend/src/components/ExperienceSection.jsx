import { motion } from 'framer-motion'

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden px-6 py-24 text-slate-100 sm:px-10 lg:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.08),transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.08),transparent_20%)]" />
      <div className="relative mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-3xl shadow-[0_40px_120px_-60px_rgba(0,0,0,0.7)]">
        <div className="mb-8">
          <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">Experience</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Timeline</h2>
        </div>

        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="rounded-[1.8rem] border border-white/10 bg-slate-950/80 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">rCloud Software Solution</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Software Development Intern</h3>
            <p className="mt-4 text-slate-300 leading-7">
              Worked on inventory tracking, customer management and order processing modules while learning collaboration using Git and software development workflows.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
