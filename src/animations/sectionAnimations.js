import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** Slide-up du header de section au scroll */
export const animateSectionHeader = (containerRef) => {
  const ctx = gsap.context(() => {
    gsap.from('[data-anim="header"]', {
      scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
      opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
    })
  }, containerRef)
  return ctx
}

/** Stagger des cards au scroll */
export const animateCards = (containerRef) => {
  const ctx = gsap.context(() => {
    gsap.from('[data-anim="card"]', {
      scrollTrigger: { trigger: containerRef.current, start: 'top 72%' },
      opacity: 0, y: 55, duration: 0.7, stagger: 0.12, ease: 'power3.out',
    })
  }, containerRef)
  return ctx
}

/** Slide-in de la section about */
export const animateAbout = (containerRef) => {
  const ctx = gsap.context(() => {
    gsap.from('[data-anim="about-text"]', {
      scrollTrigger: { trigger: containerRef.current, start: 'top 75%' },
      opacity: 0, x: -50, duration: 0.9, ease: 'power3.out',
    })
    gsap.from('[data-anim="value"]', {
      scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
      opacity: 0, x: 50, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })
  }, containerRef)
  return ctx
}

/** Fade-in des étapes de commande */
export const animateOrderSteps = (containerRef) => {
  const ctx = gsap.context(() => {
    gsap.from('[data-anim="step"]', {
      scrollTrigger: { trigger: containerRef.current, start: 'top 75%' },
      opacity: 0, y: 40, scale: 0.95, duration: 0.6, stagger: 0.15, ease: 'power3.out',
    })
  }, containerRef)
  return ctx
}
