import { motion, useAnimation } from 'framer-motion'
import { useRef, useState } from 'react'
import { sendContactMessage } from '../utils/email'

export default function ContactSection() {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)
  const controls = useAnimation()
  const [status, setStatus] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    }
    try {
      await sendContactMessage(data)
      setStatus('Message sent successfully!')
      controls.start({ scale: [1, 1.03, 1], transition: { duration: 0.4 } })
    } catch {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 text-slate-100 sm:px-10 lg:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.08),transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.08),transparent_20%)]" />
      <div className="relative mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-3xl shadow-[0_40px_120px_-60px_rgba(0,0,0,0.7)]">
        <div className="mb-8">
          <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Get in touch</h2>
        </div>

        <motion.form onSubmit={handleSubmit} animate={controls} className="grid gap-6 sm:grid-cols-2">
          <input ref={nameRef} type="text" placeholder="Name" className="rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-300/50" required />
          <input ref={emailRef} type="email" placeholder="Email" className="rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-300/50" required />
          <textarea ref={messageRef} placeholder="Message" rows="6" className="sm:col-span-2 rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-300/50" required />
          <button type="submit" className="sm:col-span-2 inline-flex justify-center rounded-full bg-cyan-500 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            Send Message
          </button>
        </motion.form>

        {status && <p className="mt-6 text-center text-sm text-cyan-300">{status}</p>}
      </div>
    </section>
  )
}
