import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '../styles/DessertsSection.module.css'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────────────
// Données — prix minimum 12.00 CHF (règle en vigueur)
// Pour utiliser votre propre image : placez-la dans
// /public/dessert.jpg et remplacez le placeholder par :
// <img src="/dessert.jpg" alt="Tiramisu" className={styles.image} />
// ─────────────────────────────────────────────────────
const DESSERTS = [
  { name: 'Tiramisu Spéculos', price: '12.00 CHF' },
  { name: 'Tiramisu Nutella',  price: '12.00 CHF' },
  { name: 'Tiramisu Oreo',     price: '12.00 CHF' },
]

export default function DessertsSection() {
  const sectionRef  = useRef(null)
  const imageRef    = useRef(null)
  const dividerRef  = useRef(null)
  const contentRef  = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image glisse depuis la gauche
      gsap.from(imageRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        opacity: 0,
        x: -60,
        duration: 1,
        ease: 'power3.out',
      })

      // Ligne grandit verticalement
      gsap.from(dividerRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.3,
      })

      // Contenu texte glisse depuis la droite
      gsap.from(contentRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
        opacity: 0,
        x: 60,
        duration: 1,
        ease: 'power3.out',
        delay: 0.15,
      })

      // Items de la liste — stagger
      gsap.from('[data-dessert-item]', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
        delay: 0.5,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.section} id="desserts">
      <div className={styles.inner}>
        <div className={styles.layout}>

          {/* ── Image ── */}
          <div ref={imageRef} className={styles.imageWrapper}>
            <img
              src="/images.jpg"
              alt="Tiramisu maison — Anatolia Kebab"
              className={styles.image}
            />
          </div>

          {/* ── Ligne décorative verticale ── */}
          <div ref={dividerRef} className={styles.divider} />

          {/* ── Contenu ── */}
          <div ref={contentRef} className={styles.content}>
            <span className={styles.eyebrow}>Fait maison</span>
            <h2 className={styles.title}>Desserts</h2>

            <ul className={styles.list}>
              {DESSERTS.map((d) => (
                <li key={d.name} className={styles.item} data-dessert-item>
                  <span className={styles.name}>{d.name}</span>
                  <span className={styles.dots} />
                  <span className={styles.price}>{d.price}</span>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  )
}
