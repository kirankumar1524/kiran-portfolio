import { useEffect, useMemo, useRef, useState } from 'react'
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiMongodb, SiPython, SiFigma, SiOpenai } from 'react-icons/si'

const icons = [
  { icon: FaReact, label: 'React' },
  { icon: FaNodeJs, label: 'NodeJS' },
  { icon: SiMongodb, label: 'MongoDB' },
  { icon: SiPython, label: 'Python' },
  { icon: SiFigma, label: 'Figma' },
  { icon: FaGithub, label: 'Git' },
  { icon: SiOpenai, label: 'OpenAI' },
]

const blobs = [
  { className: 'left-[-14%] top-12 bg-cyan-500/16', size: 'w-72 h-72', duration: 'animate-blob-1' },
  { className: 'right-[-12%] top-64 bg-violet-500/14', size: 'w-80 h-80', duration: 'animate-blob-2' },
  { className: 'left-[45%] top-1/4 bg-white/10', size: 'w-96 h-96', duration: 'animate-blob-3' },
]

export default function BackgroundEffects() {
  const cursorRef = useRef(null)
  const [showVisuals, setShowVisuals] = useState(false)
  const positions = useMemo(
    () =>
      icons.map((item, index) => ({
        ...item,
        left: `${8 + (index % 4) * 18}%`,
        top: `${12 + Math.floor(index / 4) * 22}%`,
        delay: `${index * 1.1}s`,
      })),
    [],
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const lowPower = typeof navigator !== 'undefined' && navigator.deviceMemory && navigator.deviceMemory < 4
    const fewCores = typeof navigator !== 'undefined' && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4

    const updateShowVisuals = () => {
      setShowVisuals(
        !mediaQuery.matches &&
          window.innerWidth >= 1024 &&
          !lowPower &&
          !fewCores,
      )
    }

    updateShowVisuals()
    window.addEventListener('resize', updateShowVisuals)
    mediaQuery.addEventListener?.('change', updateShowVisuals)

    return () => {
      window.removeEventListener('resize', updateShowVisuals)
      mediaQuery.removeEventListener?.('change', updateShowVisuals)
    }
  }, [])

  useEffect(() => {
    let frameId
    const handleMouseMove = (event) => {
      if (frameId) cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.left = `${event.clientX}px`
          cursorRef.current.style.top = `${event.clientY}px`
        }
      })
    }

    if (showVisuals) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [showVisuals])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.08),transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.08),transparent_18%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_55%)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_30px),repeating-linear-gradient(90deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_30px)] opacity-20" />

      {showVisuals &&
        blobs.map((blob, index) => (
          <div
            key={`blob-${index}`}
            className={`absolute ${blob.className} ${blob.size} rounded-full blur-[120px] opacity-20 ${blob.duration}`}
          />
        ))}

      {showVisuals &&
        positions.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.label}
              className="absolute animate-float-slow rounded-full border border-white/10 bg-white/5 p-3 text-slate-100 shadow-[0_24px_64px_-42px_rgba(0,0,0,0.55)]"
              style={{ left: item.left, top: item.top, animationDelay: item.delay }}
            >
              <Icon className="h-5 w-5 text-cyan-300" />
            </div>
          )
        })}

      {showVisuals && (
        <div
          ref={cursorRef}
          className="absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-3xl transition-all duration-300"
          style={{ left: 0, top: 0 }}
        />
      )}
    </div>
  )
}
