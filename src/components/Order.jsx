import { animateOrderSteps } from '../animations/sectionAnimations'
import useScrollAnimation from '../hooks/useScrollAnimation'

const STEPS = [
  { num: 1, icon: '📱', title: 'Choisissez',   desc: 'Parcourez le menu et composez votre repas en quelques secondes.' },
  { num: 2, icon: '💳', title: 'Payez',         desc: 'Paiement sécurisé en ligne. Votre commande est lancée immédiatement.' },
  { num: 3, icon: '🔥', title: 'Récupérez',     desc: 'Prêt en 15 min chrono. Chaud, soigné, emballé avec attention.' },
]

export default function Order() {
  const sectionRef = useScrollAnimation(animateOrderSteps)

  return (
    <section id="commande" className="section order-section" ref={sectionRef}>
      <div className="container">

        <div className="section-header">
          <p className="section-tag">Commande en ligne</p>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Commandez en quelques clics,<br />récupérez un repas qui déchire
          </h2>
          <p className="section-subtitle">
            Pas le temps ? Pas envie d'attendre ? On a tout prévu.
          </p>
        </div>

        <div className="order-steps">
          {STEPS.map((s, i) => (
            <>
              <div key={s.num} className="order-step" data-anim="step">
                <span className="order-step__num">{s.num}</span>
                <span className="order-step__icon">{s.icon}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
              {i < STEPS.length - 1 && <span className="order-arrow">→</span>}
            </>
          ))}
        </div>

        <div className="order-btns">
          <a href="#" className="btn btn-white">Commander en ligne</a>
          <a href="tel:+41320000000" className="btn btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.35)' }}>
            📞 032 XXX XX XX
          </a>
        </div>

        <p className="order-note">Disponible tous les jours · 11h – 23h · Livraison dans un rayon de 5 km</p>

      </div>
    </section>
  )
}
