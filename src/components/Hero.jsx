import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import Marquee from './Marquee'

const PHOTO_URL = '/WhatsApp Image 2026-04-10 at 17.01.56.jpeg'
const BAR_HEIGHTS = Array.from({ length: 40 }, () => Math.floor(Math.random() * 22 + 8))

export default function Hero() {
  const headRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      if (!headRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 6
      headRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero} id="about">
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.inner}>

        {/* Left: headline + ctas */}
        <div className={styles.textCol}>
          <h1 className={styles.headline} ref={headRef}>
            <span className={styles.nameLine}>I'm Anaya.</span>
            <span className={styles.line2}>Learning the tools</span>
            <span className={styles.line3}>
              <em className={styles.italic}>needed to solve problems.</em>
            </span>
          </h1>

          <p className={styles.sub}>
            4th year at BITS Pilani. Full-stack, ML, backend — whatever the sprint needs.
            Currently building AI document pipelines. Looking for my next hard problem.
          </p>

          <div className={styles.ctas}>
            <a href="/AnayaSharma2026.pdf" target="_blank" className={styles.ctaOutline}>
              Resume ↗
            </a>
            <a
              href="https://wa.me/qr/RAE7UKQREWI4D1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaWhatsapp}
            >
              <svg className={styles.waIcon} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Let's talk
            </a>
          </div>
        </div>

        {/* Right: horizontal driver's-license card */}
        <div className={styles.cardCol}>
          <div className={styles.licenseCard}>

            {/* Photo strip on the left */}
            <div className={styles.licensePhoto}>
              <img
                src={PHOTO_URL}
                alt="Anaya Sharma"
                className={styles.photo}
                onError={e => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className={styles.photoFallback}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </div>
              <div className={styles.licenseFlag}>IN · BPHYD</div>
            </div>

            {/* Body */}
            <div className={styles.licenseBody}>
              <div className={styles.licenseHeader}>
                <span className={styles.licenseOrg}>BITS PILANI · HYDERABAD</span>
                <span className={styles.licenseStar}>✦</span>
                <span className={styles.licenseOrg}>STUDENT ID</span>
              </div>

              <div className={styles.licenseName}>ANAYA SHARMA</div>
              <div className={styles.licenseRole}>Software Engineer · Full-Stack · ML</div>

              <div className={styles.licenseGrid}>
                <div className={styles.licenseField}>
                  <span className={styles.fieldLabel}>ID No.</span>
                  <span className={styles.fieldVal}>F20221821</span>
                </div>
                <div className={styles.licenseField}>
                  <span className={styles.fieldLabel}>Degree</span>
                  <span className={styles.fieldVal}>MSc Math + BE Mech</span>
                </div>
                <div className={styles.licenseField}>
                  <span className={styles.fieldLabel}>Graduation</span>
                  <span className={styles.fieldVal}>May 2027</span>
                </div>
                <div className={styles.licenseField}>
                  <span className={styles.fieldLabel}>City</span>
                  <span className={styles.fieldVal}>Hyderabad, IN</span>
                </div>
                <div className={styles.licenseField}>
                  <span className={styles.fieldLabel}>Focus</span>
                  <span className={styles.fieldVal}>SDE / ML Intern</span>
                </div>
                <div className={styles.licenseField}>
                  <span className={styles.fieldLabel}>Mode</span>
                  <span className={styles.fieldVal + ' ' + styles.fieldValGreen}>● Building</span>
                </div>
              </div>

              <div className={styles.licenseTags}>
                {['Python', 'PyTorch', 'React', 'FastAPI', 'Docker', 'PostgreSQL', 'Git', 'Linux', 'AWS', 'GCP'].map(t => (
                  <span key={t} className={styles.licenseTag}>{t}</span>
                ))}
              </div>

              <div className={styles.barcodeRow}>
                <div className={styles.barcode}>
                  {BAR_HEIGHTS.map((h, i) => (
                    <div key={i} className={styles.bar} style={{ height: `${h}px` }} />
                  ))}
                </div>
                <span className={styles.barcodeText}>BPHYD · 2022-27 · SDE · F20221821</span>
              </div>
            </div>

            <div className={styles.shine} />
            <div className={styles.punch} />
          </div>
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        <Marquee />
      </div>
    </section>
  )
}