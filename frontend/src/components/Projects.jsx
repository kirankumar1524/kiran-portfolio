import { motion } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    title: 'AR Product Review',
    desc: 'A smart augmented reality shopping experience for modern shoppers.',
    tech: 'React · Three.js · Node.js',
  },
  {
    title: 'Telemedicine Platform',
    desc: 'AI-powered healthcare assistant for secure remote consultations.',
    tech: 'MongoDB · Express · Python',
  },
]

function TiltCard({ project }) {
  const [transform, setTransform] = useState('perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)')

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    const rotateX = (-y / rect.height) * 14
    const rotateY = (x / rect.width) * 14
    setTransform(`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTransform('perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)')}
      style={{ transform }}
      className="group rounded-[2rem] border border-white/10 bg-slate-900/85 p-8 shadow-[0_35px_80px_-35px_rgba(15,23,42,0.85)] backdrop-blur-2xl transition-transform duration-300"
    >
      <div className="flex items-center justify-between gap-4 text-slate-400">
        <span className="rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300">Project</span>
        <span className="text-sm text-slate-500">{project.tech}</span>
      </div>
      <h3 className="mt-6 text-3xl font-semibold text-white">{project.title}</h3>
      <p className="mt-4 text-slate-300 leading-7">{project.desc}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        {project.tech.split(' · ').map((tech) => (
          <span key={tech} className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300 transition group-hover:bg-cyan-500/15">
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="space-y-10 py-24">
      <div>
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">Featured Work</p>
        <h2 className="mt-4 text-4xl font-semibold text-white">Projects</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <TiltCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
