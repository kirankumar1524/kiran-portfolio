export function Button({ variant = 'default', className = '', children, ...props }) {
  const base = 'inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2';
  const variants = {
    default: 'bg-cyan-500 text-slate-950 hover:bg-cyan-400',
    ghost: 'border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10',
    outline: 'border border-white/10 text-slate-100 hover:border-cyan-300/50 hover:text-cyan-300',
  }

  return (
    <button className={`${base} ${variants[variant] ?? variants.default} ${className}`} {...props}>
      {children}
    </button>
  )
}
