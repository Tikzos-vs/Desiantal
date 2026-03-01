import { animateAbout } from '../animations/sectionAnimations'
import useScrollAnimation from '../hooks/useScrollAnimation'

const VALUES = [
  { icon: '👨‍🍳', title: 'Fait maison, vraiment',    desc: "Nos sauces, notre pain, nos falafels — préparés ici, tous les jours. Sans raccourci." },
  { icon: '🥬', title: 'Produits frais, toujours',   desc: "On commande ce qu'on va cuisiner aujourd'hui. Pas demain. Aujourd'hui." },
  { icon: '🤲', title: 'Un savoir-faire transmis',   desc: "Nos recettes viennent de loin. On les respecte, on les améliore, on les partage." },
]

export default function About() {
  const sectionRef = useScrollAnimation(animateAbout)

  return (
    <section id="apropos" className="section" ref={sectionRef}>
      <div className="container">
        <div className="about__grid">

          <div data-anim="about-text">
            <p className="section-tag">Notre histoire</p>
            <h2 className="about__title">Une histoire de <span className="gradient-text">passion et de saveurs</span></h2>
            <div className="about__body">
              <p>
                Anatolia Kebab est né d'une idée simple : proposer un kebab comme on aimerait
                qu'il soit toujours. Généreux. Frais. Préparé avec soin.
              </p>
              <p>
                Tout a commencé avec une recette familiale et une conviction : la qualité ne doit
                pas être un luxe. Un bon kebab peut être accessible, rapide, et fait avec de vrais produits.
              </p>
              <p>
                Depuis l'ouverture, on n'a jamais changé de cap. On sélectionne nos viandes avec
                exigence, on prépare nos sauces chaque matin, on fait cuire notre pain sur place.
                Pas par obligation — par fierté.
              </p>
              <p className="about__closing">
                <em>
                  Que vous soyez pressés, en famille ou juste en quête d'un bon repas —
                  on est là pour vous régaler. Bienvenue chez Anatolia.
                </em>
              </p>
            </div>
          </div>

          <div className="values">
            {VALUES.map((v) => (
              <div key={v.title} className="value-card" data-anim="value">
                <span className="value-card__icon">{v.icon}</span>
                <div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
