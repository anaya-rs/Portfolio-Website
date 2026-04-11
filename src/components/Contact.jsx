import { useEffect, useRef } from 'react'
import styles from './Contact.module.css'

const links = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/anaya-sharma', tag: 'Professional' },
  { label: 'GitHub', href: 'https://github.com/anaya-rs', tag: 'Code' },
  { label: 'Email (BITS)', href: 'mailto:F20221821@hyderabad.bits-pilani.ac.in', tag: 'Academic' },
  { label: 'Email (Personal)', href: 'mailto:anayasharma18feb@gmail.com', tag: 'General' },
]

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="contact" ref={sectionRef}>
      <div className={styles.inner}>
        <div className={`${styles.left} reveal`}>
          <span className={styles.label}>Get in touch</span>
          <h2 className={styles.title}>
            Let's work<br />
            <em className={styles.italic}>together.</em>
          </h2>
          <p className={styles.body}>
            Open to collaborating on interesting projects
            where I can actually own something. If you're building something meaningful,
            I'd love to hear about it.
          </p>
          <a
            href="mailto:anayasharma18feb@gmail.com"
            className={styles.bigCta}
          >
            Say hello ↗
          </a>
        </div>

        <div className={`${styles.right} reveal reveal-delay-2`}>
          <div className={styles.linkList}>
            {links?.map((l, i) => (
              <a
                key={i}
                href={l.href}
                target={l.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className={styles.linkRow}
                data-hover
              >
                <div className={styles.linkLeft}>
                  <span className={styles.linkTag}>{l.tag}</span>
                  <span className={styles.linkLabel}>{l.label}</span>
                </div>
                <span className={styles.arrow}>↗</span>
              </a>
            ))}
          </div>

          <div className={styles.note}>
            <span className={styles.noteDot}>✦</span>
            <span>+91 98210 84124 · Hyderabad, India</span>
          </div>
        </div>
      </div>
    </section>
  )
}
