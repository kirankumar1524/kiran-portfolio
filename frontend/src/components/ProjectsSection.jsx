import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AR Product Review System',
    description: 'An augmented reality application that helps users visualize products and access reviews in an interactive environment.',
    tech: ['Python', 'AR', 'Web Technologies'],
  },
  {
    title: 'Vernacular Telemedicine Platform',
    description: 'A multilingual healthcare assistant that processes prescriptions, supports native language interactions, and reminds users about medications.',
    tech: ['Python', 'Streamlit', 'OCR', 'AI'],
  },
  {
    title: 'Boutique Management System',
    description: 'Contributed as part of an internship team to manage inventory, customers, and orders.',
    tech: ['Java', 'HTML', 'CSS'],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24 text-slate-100 sm:px-10 lg:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.08),transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.08),transparent_18%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-xl">
          <h2 className="text-4xl font-semibold text-white">Projects</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 * index }} className="group rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.7)] backdrop-blur-3xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-white/10">
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Project</p>
                <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-slate-300 leading-7">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
