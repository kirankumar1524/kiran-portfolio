export function Card({ title, className = '', children, ...props }) {
  return (
    <section className={`rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.75)] backdrop-blur-3xl ${className}`} {...props}>
      {title ? <h3 className="text-xl font-semibold text-white mb-4">{title}</h3> : null}
      {children}
    </section>
  )
}
