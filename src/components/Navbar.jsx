import { useRef, useEffect } from 'react'
import { animateNavbarEntrance, animateNavbarOnScroll } from '../animations/navbarAnimations'

const LINKS = [
  { label: 'Menu',      href: '#menu'     },
  { label: 'À propos',  href: '#apropos'  },
  { label: 'Commander', href: '#commande' },
  { label: 'Contact',   href: '#contact'  },
]

export default function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    const c1 = animateNavbarEntrance(navRef)
    const c2 = animateNavbarOnScroll(navRef)
    return () => { c1.revert(); c2.revert() }
  }, [])

  return (
    <nav ref={navRef} className="navbar">
      <div className="container">
        <div className="navbar__inner">
          <a href="#hero" className="navbar__logo">🥙 Anatolia Kebab</a>

          <ul className="navbar__links">
            {LINKS.map(({ label, href }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>

          <a href="#commande" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.88rem' }}>
            Commander →
          </a>
        </div>
      </div>
    </nav>
  )
}
