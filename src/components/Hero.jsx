import { useRef, useEffect } from 'react'
import { animateHeroEntrance, animateOrbs } from '../animations/heroAnimations'

const ARGS = [
  { icon: '🥩', title: 'Viande généreuse',    desc: 'Grillée lentement à la broche, tendre et savoureuse.' },
  { icon: '🍞', title: 'Pain chaud, maison',   desc: 'Cuit sur place, doré à point, chaque jour.' },
  { icon: '🫙', title: 'Sauces du matin',       desc: 'Blanche, harissa, barbecue — fraîches et généreuses.' },
]

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const c1 = animateHeroEntrance(heroRef)
    const c2 = animateOrbs(heroRef)
    return () => { c1.revert(); c2.revert() }
  }, [])

  return (
    <section ref={heroRef} id="hero" className="hero">

      {/* Orbes d'ambiance */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" data-orb="1" />
        <div className="hero__orb hero__orb--2" data-orb="2" />
      </div>

      <div className="container" style={{ width: '100%' }}>
        <div className="hero__grid">

          {/* Colonne gauche */}
          <div>
            <div className="hero__badge" data-hero="badge">
              <span className="hero__badge-dot" />
              Street food premium · Neuchâtel, Suisse
            </div>

            <h1 className="hero__title">
              <span className="hero__title-line" data-hero="line">Le vrai kebab,</span>
              <span className="hero__title-line gradient-text" data-hero="line">le bon goût. For sure</span>
            </h1>

            <p className="hero__subtitle" data-hero="subtitle">
              Viande grillée à la broche, pain maison doré, sauces préparées chaque matin.
              Pas du kebab vite fait — du kebab bien fait.
            </p>

            <div className="hero__ctas">
              <a href="#commande" className="btn btn-primary" data-hero="cta">Commander maintenant →</a>
              <a href="#menu"     className="btn btn-ghost"   data-hero="cta">Voir le menu</a>
            </div>
          </div>

          {/* Colonne droite — visuel */}
          <div className="hero__visual" data-hero="visual">
            <div className="hero__img-card">
              <span className="hero__emoji">🥙</span>
              <p className="hero__img-label">Kebab Spécial Anatolia</p>
            </div>
            <div className="hero__stat-badge">
              <span className="hero__stat-badge-icon">⭐</span>
              <div>
                <strong>Best-seller du jour</strong>
                <span>Kebab Spécial · 16.00 CHF</span>
              </div>
            </div>
          </div>
        </div>

        {/* Arguments clés */}
        <div className="hero__args" style={{ marginTop: '60px' }}>
          {ARGS.map((a) => (
            <div key={a.title} className="arg-card" data-hero="args">
              <span className="arg-card__icon">{a.icon}</span>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
