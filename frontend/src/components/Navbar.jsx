import { useEffect, useState } from 'react'

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [glassy, setGlassy] = useState(false)

  useEffect(() => {
    const handleScroll = () => setGlassy(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        glassy ? 'backdrop-blur-2xl bg-slate-950/70 border-b border-white/10 shadow-slate-950/20' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-slate-100 sm:px-10">
        <a href="#home" className="text-sm font-semibold tracking-[0.35em] uppercase text-white">
          KIRAN
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition duration-300 hover:text-white hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-8"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
