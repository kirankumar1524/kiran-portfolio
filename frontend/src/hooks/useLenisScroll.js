import { useEffect, useRef } from 'react'
import Lenis from "lenis";

export default function useLenisScroll() {
  const lenisRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto'

    if (lenisRef.current) return

    lenisRef.current = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.08,
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1.2,
      wheelMultiplier: 0.85,
      gestureOrientation: 'vertical',
      direction: 'vertical',
      infinite: false,
    })

    const animate = (time) => {
      lenisRef.current.raf(time)
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (lenisRef.current) lenisRef.current.destroy()
      lenisRef.current = null
    }
  }, [])
}
