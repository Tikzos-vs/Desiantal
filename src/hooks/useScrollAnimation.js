import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Hook custom — attache une animation GSAP à un ref et gère le cleanup.
 * @param {(ref: React.RefObject) => gsap.Context} animationFn
 * @param {any[]} deps
 */
const useScrollAnimation = (animationFn, deps = []) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = animationFn(ref)
    return () => ctx?.revert()
  }, deps) // eslint-disable-line

  return ref
}

export default useScrollAnimation
