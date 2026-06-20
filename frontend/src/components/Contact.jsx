export default function Contact() {
  return (
    <section id="contact" className="space-y-10 py-24">
      <div className="max-w-3xl">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">Contact</p>
        <h2 className="mt-4 text-4xl font-semibold text-white">Let's work together</h2>
        <p className="mt-4 text-slate-300 leading-8">
          I’m open to new opportunities and freelance projects. Send a message with details about your idea and I’ll get back to you soon.
        </p>
      </div>

      <form className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 p-4 text-slate-100 focus:border-cyan-400 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 p-4 text-slate-100 focus:border-cyan-400 focus:outline-none"
        />
        <textarea
          placeholder="Message"
          rows="6"
          className="sm:col-span-2 w-full rounded-3xl border border-slate-800 bg-slate-900/90 p-4 text-slate-100 focus:border-cyan-400 focus:outline-none"
        />
        <button
          type="submit"
          className="sm:col-span-2 inline-flex justify-center rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
