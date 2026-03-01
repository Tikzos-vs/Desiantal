import { animateCards, animateSectionHeader } from '../animations/sectionAnimations'
import useScrollAnimation from '../hooks/useScrollAnimation'

const KEBABS = [
  { name: 'Kebab Classique',          price: '12.00 CHF', best: false, desc: 'Viande de veau et poulet, salade croquante, tomates fraîches, oignons, sauce blanche maison. Dans un pain tendre et chaud.' },
  { name: 'Kebab Spécial Anatolia',   price: '16.00 CHF', best: true,  desc: 'Notre signature. Double viande, mozzarella fondante, poivrons grillés, sauce maison secrète. Un kebab qui change tout.' },
  { name: 'Kebab Fromage',            price: '13.50 CHF', best: false, desc: 'Viande grillée, cheddar fondu, cornichons, sauce barbecue fumée.' },
  { name: 'Kebab Poulet Croustillant',price: '14.00 CHF', best: false, desc: 'Filets de poulet marinés, sauce curry légère, salade fraîche, tomates cerises.' },
]

const WRAPS = [
  { name: 'Wrap Méditerranéen', price: '13.00 CHF', veggie: false, desc: 'Galette moelleuse, viande grillée, feta émiettée, concombre, menthe fraîche, sauce yaourt.' },
  { name: 'Wrap Épicé',         price: '13.00 CHF', veggie: false, desc: 'Pour ceux qui aiment le piquant. Viande, piment doux, harissa maison, chou rouge croquant.' },
  { name: 'Wrap Veggie',        price: '12.00 CHF', veggie: true,  desc: 'Légumes rôtis, houmous généreux, roquette, tomates séchées, sauce citronnée.' },
]

const ASSIETTES = [
  { name: 'Assiette Kebab', price: '18.00 CHF', best: false, veggie: false, desc: 'Généreuse portion de viande à la broche, riz pilaf, salade fraîche, pain grillé, sauce au choix.' },
  { name: 'Assiette Mixte', price: '22.00 CHF', best: true,  veggie: false, desc: 'Viande de veau + poulet, frites croustillantes, salade, pain, 2 sauces au choix.' },
  { name: 'Assiette Veggie',price: '17.00 CHF', best: false, veggie: true,  desc: 'Légumes grillés, falafels maison, riz, salade, sauce blanche au yaourt.' },
]

const DEALS = [
  { name: 'Menu Rapide',  price: '16.00 CHF', desc: '1 kebab ou wrap + 1 boisson' },
  { name: 'Menu Complet', price: '19.00 CHF', desc: '1 kebab ou wrap + 1 frites + 1 boisson' },
  { name: 'Menu Famille', price: '58.00 CHF', desc: '4 kebabs, 2 portions de frites, 4 boissons (pour 4 personnes)' },
]

function MenuCard({ item }) {
  return (
    <div
      className={`menu-card${item.best ? ' menu-card--best' : ''}${item.veggie ? ' menu-card--veggie' : ''}`}
      data-anim="card"
    >
      {item.best   && <span className="menu-card__tag tag-best">⭐ Best-seller</span>}
      {item.veggie && <span className="menu-card__tag tag-veggie">🌿 Végétarien</span>}
      <div className="menu-card__header">
        <h4>{item.name}</h4>
        <span className="menu-card__price">{item.price}</span>
      </div>
      <p>{item.desc}</p>
    </div>
  )
}

export default function Menu() {
  const sectionRef = useScrollAnimation((ref) => {
    animateSectionHeader(ref)
    animateCards(ref)
    return { revert: () => {} }
  })

  return (
    <section id="menu" className="section menu-section" ref={sectionRef}>
      <div className="container">

        <div className="section-header" data-anim="header">
          <p className="section-tag">Notre carte</p>
          <h2 className="section-title">Un menu pensé pour <span className="gradient-text">tous les appétits</span></h2>
          <p className="section-subtitle">Du classique qui régale, aux options veggie qui surprennent.</p>
        </div>

        <div className="menu-categories">

          {/* Kebabs */}
          <div>
            <h3 className="menu-cat__title">🥙 Kebabs — Les Incontournables</h3>
            <div className="menu-grid">
              {KEBABS.map((k) => <MenuCard key={k.name} item={k} />)}
            </div>
          </div>

          {/* Wraps */}
          <div>
            <h3 className="menu-cat__title">🌯 Wraps — La Street Food Revisitée</h3>
            <div className="menu-grid">
              {WRAPS.map((w) => <MenuCard key={w.name} item={w} />)}
            </div>
          </div>

          {/* Assiettes */}
          <div>
            <h3 className="menu-cat__title">🍽️ Assiettes — Pour les Grands Appétits</h3>
            <div className="menu-grid">
              {ASSIETTES.map((a) => <MenuCard key={a.name} item={a} />)}
            </div>
          </div>

          {/* Menus deals */}
          <div>
            <h3 className="menu-cat__title">🎯 Menus — Complet et Malin</h3>
            <div className="menu-deals">
              {DEALS.map((d) => (
                <div key={d.name} className="menu-deal" data-anim="card">
                  <h4>{d.name}</h4>
                  <span className="menu-deal__price">{d.price}</span>
                  <p>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Extras */}
        <div className="extras-bar">
          <h4>Extras :</h4>
          <span>🍟 Frites maison</span>
          <span>🫙 Sauce supplémentaire</span>
          <span>🍞 Pain supplémentaire</span>
          <span>🥤 Boissons</span>
        </div>

      </div>
    </section>
  )
}
