import { gsap } from 'gsap'

/** Stagger fade-in + translateY pour la section Hero */
export const animateHeroEntrance = (containerRef) => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('[data-hero="badge"]',    { opacity: 0, y: -20, duration: 0.6 })
      .from('[data-hero="line"]',     { opacity: 0, y: 70, duration: 0.9, stagger: 0.12 }, '-=0.3')
      .from('[data-hero="subtitle"]', { opacity: 0, y: 28, duration: 0.7 }, '-=0.5')
      .from('[data-hero="cta"]',      { opacity: 0, y: 18, scale: 0.94, duration: 0.6, stagger: 0.1 }, '-=0.4')
      .from('[data-hero="visual"]',   { opacity: 0, scale: 0.9, y: 40, duration: 1.1, ease: 'power2.out' }, '-=0.9')
      .from('[data-hero="args"]',     { opacity: 0, y: 30, duration: 0.7, stagger: 0.1 }, '-=0.5')
  }, containerRef)
  return ctx
}

/** Flottement continu des orbes de fond */
export const animateOrbs = (containerRef) => {
  const ctx = gsap.context(() => {
    gsap.to('[data-orb="1"]', { y: -40, x: 20,  duration: 5,   repeat: -1, yoyo: true, ease: 'sine.inOut' })
    gsap.to('[data-orb="2"]', { y: 30,  x: -25, duration: 6.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 })
  }, containerRef)
  return ctx
}
