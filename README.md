# 🥙 Anatolia Kebab — Site Web React

Site web premium pour le restaurant **Anatolia Kebab** à Neuchâtel, Suisse.
Construit avec Vite + React + GSAP. Dark mode, responsive, animations fluides.

---

## Stack technique

| Outil         | Rôle                          |
|---------------|-------------------------------|
| Vite          | Bundler + dev server          |
| React 18      | UI components                 |
| GSAP 3        | Animations avancées           |
| CSS Variables | Design system (dark + orange) |

---

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvre ensuite : **http://localhost:5174**

---

## Structure du projet

```
src/
├── main.jsx               # Point d'entrée React
├── App.jsx
├── styles/
│   ├── variables.css      # CSS custom properties (couleurs, typo)
│   └── global.css         # Styles globaux + tous les composants
├── animations/
│   ├── navbarAnimations.js   # Entrance + scroll behavior
│   ├── heroAnimations.js     # Stagger + orbes flottants
│   └── sectionAnimations.js  # ScrollTrigger pour les sections
├── hooks/
│   └── useScrollAnimation.js # Hook custom GSAP avec cleanup
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Menu.jsx
│   ├── About.jsx
│   ├── Order.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
└── pages/
    └── Home.jsx
```

---

## Sections du site

| Section  | Contenu                                            |
|----------|----------------------------------------------------|
| Hero     | Slogan, arguments clés, CTA commander              |
| Menu     | Kebabs, wraps, assiettes, menus — prix en CHF      |
| À propos | Histoire du restaurant, 3 valeurs                  |
| Commander| 3 étapes animées + CTA + horaires                  |
| Contact  | Adresse Neuchâtel, téléphone, email, horaires      |
| Footer   | Logo + infos                                       |

---

## Règles métier

- Tous les prix sont en **CHF**
- Prix minimum : **12.00 CHF** par produit
- Aucune fourchette de prix
- Localisation : **Rue de la Gare 4, 2000 Neuchâtel**

---

## Animations GSAP

Toutes les animations respectent le pattern :

```js
const el = useRef()

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(el.current, { opacity: 0, y: 50, duration: 1 })
  }, el)

  return () => ctx.revert() // cleanup automatique
}, [])
```

---

## Build production

```bash
npm run build
npm run preview
```
