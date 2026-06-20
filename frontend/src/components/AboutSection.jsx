import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden px-6 py-24 text-slate-100 sm:px-10 lg:px-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.12),transparent_16%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.1),transparent_18%)]" />
      <div className="relative mx-auto max-w-6xl rounded-[2.25rem] border border-white/10 bg-white/5 p-10 backdrop-blur-3xl shadow-[0_40px_120px_-70px_rgba(0,0,0,0.7)]">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="max-w-xl">
              <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">About Me</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">About Me</h2>
            </div>
            <div className="space-y-5 text-slate-300 leading-8">
              <p>
                I am currently pursuing Computer Science and Design at SNS College of Engineering. I enjoy exploring new technologies, building side projects, experimenting with AI tools, and improving how software feels.
              </p>
              <p>
                My interests mainly revolve around MERN development, AI applications, UI/UX design, and modern web technologies.
              </p>
              <p>
                I enjoy transforming ideas into interactive experiences while continuously learning and refining my workflow.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-8 shadow-[inset_0_0_50px_rgba(255,255,255,0.03)]">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">What I enjoy</p>
            <div className="mt-6 space-y-4 text-slate-300">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">Real products, not buzzwords</p>
                <p className="mt-2 text-sm text-slate-400">Building tools and interfaces that people actually use.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">Learning by doing</p>
                <p className="mt-2 text-sm text-slate-400">Experimenting with AI, design systems, and faster workflows.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">Design that feels quiet</p>
                <p className="mt-2 text-sm text-slate-400">Keeping interfaces clean, calm, and easy to navigate.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
