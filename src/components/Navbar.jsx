import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['About', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className={styles.monogram}>AS</div>
        <span className={styles.logoDot}>✦</span>
      </div>

      <ul className={styles.links}>
        {links?.map(l => (
          <li key={l}>
            <button onClick={() => scrollTo(l)} className={styles.link}>{l}</button>
          </li>
        ))}
        <li>
          <a
            href="mailto:F20221821@hyderabad.bits-pilani.ac.in"
            className={styles.hireCta}
          >
            Write Me!
          </a>
        </li>
      </ul>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.burgerLineOpen1 : styles.burgerLine} />
        <span className={menuOpen ? styles.burgerLineOpen2 : styles.burgerLine} />
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links?.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className={styles.mobileLink}>
              {l}
            </button>
          ))}
          <a
            href="mailto:F20221821@hyderabad.bits-pilani.ac.in"
            className={styles.mobileHire}
          >
            Send Email ↗
          </a>
        </div>
      )}
    </nav>
  )
}