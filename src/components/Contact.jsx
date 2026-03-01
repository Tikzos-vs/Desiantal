import { animateSectionHeader } from '../animations/sectionAnimations'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function Contact() {
  const sectionRef = useScrollAnimation(animateSectionHeader)

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="container">
        <div className="contact__grid">

          <div data-anim="header">
            <p className="section-tag">Nous trouver</p>
            <h2 className="contact__title">On est là — venez, appelez, écrivez.</h2>
            <div className="contact__body">
              <p>
                Vous avez une question, une commande spéciale, ou juste envie de nous dire
                que vous avez adoré ? On est toujours disponibles et vraiment contents de vous entendre.
              </p>
              <p>
                La meilleure façon de nous connaître, c'est encore de passer nous voir.
                On vous accueille avec le sourire — et un kebab qui sent bon.
              </p>
              <p className="contact__closing">
                Pas de réservation nécessaire. Juste de l'appétit. On s'occupe du reste.
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-block">
              <span className="info-block__icon">📍</span>
              <div>
                <h4>Adresse</h4>
                <p>Rue de la Gare 4, 2000 Neuchâtel<br /><small>à 2 min de la gare de Neuchâtel</small></p>
              </div>
            </div>
            <div className="info-block">
              <span className="info-block__icon">📞</span>
              <div>
                <h4>Téléphone</h4>
                <p><a href="tel:+41320000000">032 XXX XX XX</a><br /><small>Lundi – Dimanche, 11h – 23h</small></p>
              </div>
            </div>
            <div className="info-block">
              <span className="info-block__icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:contact@anatoliakebab.ch">contact@anatoliakebab.ch</a></p>
              </div>
            </div>
            <div className="info-block">
              <span className="info-block__icon">🕐</span>
              <div>
                <h4>Horaires</h4>
                <p>Lun – Jeu : 11h – 22h30<br />Ven – Sam : 11h – 23h30<br />Dim : 12h – 22h</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
