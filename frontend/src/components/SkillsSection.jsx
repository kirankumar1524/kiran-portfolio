import { motion } from 'framer-motion'

const skillCategories = [
  { title: 'Frontend', items: ['React', 'HTML', 'CSS', 'JavaScript'] },
  { title: 'Backend', items: ['NodeJS', 'Express'] },
  { title: 'Programming', items: ['Python', 'Java', 'C'] },
  { title: 'Database', items: ['MongoDB', 'PostgreSQL'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VSCode', 'Figma', 'Canva', 'Streamlit', 'n8n'] },
  { title: 'Cloud', items: ['AWS Beginner'] },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 text-slate-100 sm:px-10 lg:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.1),transparent_15%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.1),transparent_20%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-xl">
          <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">Skills</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Core skills</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_0.9fr] xl:grid-cols-[0.95fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl shadow-[0_35px_80px_-35px_rgba(0,0,0,0.75)]"
          >
            <p className="text-slate-300">Grouped by category with soft hover glow and floating pill elements.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {skillCategories.map((category) => (
                <div key={category.title} className="group rounded-[1.8rem] border border-white/10 bg-slate-950/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/5">
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {category.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition duration-300 group-hover:bg-cyan-500/10">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 shadow-[0_35px_80px_-35px_rgba(0,0,0,0.75)] backdrop-blur-3xl"
          >
            <div className="absolute -right-20 top-12 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-12 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03),transparent_45%)]" />
              <div className="relative grid gap-4 text-slate-100">
                {['React', 'NodeJS', 'Python', 'MongoDB', 'Figma', 'Git', 'Streamlit', 'AWS Beginner'].map((item) => (
                  <span key={item} className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm shadow-[0_16px_40px_-28px_rgba(0,0,0,0.55)] transition duration-300 hover:scale-105 hover:border-cyan-300/40">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
