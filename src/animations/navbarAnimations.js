import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const animateNavbarEntrance = (navRef) => {
  const ctx = gsap.context(() => {
    gsap.from(navRef.current, { y: -80, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 })
  }, navRef)
  return ctx
}

export const animateNavbarOnScroll = (navRef) => {
  const ctx = gsap.context(() => {
    ScrollTrigger.create({
      start:    'top -60px',
      onEnter:     () => navRef.current?.classList.add('scrolled'),
      onLeaveBack: () => navRef.current?.classList.remove('scrolled'),
    })
  }, navRef)
  return ctx
}
