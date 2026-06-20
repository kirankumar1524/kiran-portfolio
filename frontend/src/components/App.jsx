import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),transparent_22%),linear-gradient(180deg,#020617_0%,#040b14_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-80 mix-blend-screen">
        <div className="absolute left-[-10%] top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl animate-float" />
        <div className="absolute right-16 top-72 h-60 w-60 rounded-full bg-fuchsia-500/12 blur-3xl animate-float animation-delay-2000" />
        <div className="absolute left-1/2 top-[55%] h-64 w-64 -translate-x-1/2 rounded-full bg-slate-400/10 blur-3xl animate-float animation-delay-3500" />
      </div>
      <Navbar />
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 space-y-28">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
