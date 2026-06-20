import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 py-12 text-slate-100 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-3xl shadow-[0_40px_120px_-60px_rgba(0,0,0,0.7)]">
        <p className="text-lg font-medium text-slate-100">Still learning. Still building. Still curious.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-slate-300">
          <a href="https://github.com/kirankumar1524" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/kirankumar-saravanan/?skipRedirect=true" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300"><FaLinkedin /></a>
          <a href="mailto:kirankumarkiran2434@gmail.com" className="transition hover:text-cyan-300"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  )
}
