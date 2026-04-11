import { useEffect, useRef } from 'react'
import styles from './Experience.module.css'

const experiences = [
  {
    role: 'Full-Stack Development Intern',
    company: 'MarvelSync',
    period: 'Jul 2025 – Present',
    color: 'purple',
    tags: ['FastAPI', 'React', 'LLaMA-2', 'EasyOCR'],
    bullets: [
      'Built an AI-powered document platform processing hundreds of docs daily.',
      'Integrated open-source LLM — 92% accuracy in classification and entity extraction.',
      'Cut processing time 70% through smart OCR + pipeline design.',
    ],
  },
  {
    role: 'Java Development Intern',
    company: 'TexTac',
    period: 'Aug – Nov 2024',
    color: 'green',
    tags: ['Java', 'Microservices', 'REST APIs', 'ONDC'],
    bullets: [
      'Broke a monolith into 8 microservices for a live ONDC e-commerce platform.',
      'Improved scalability 60%, cut deployment time 40%.',
      'Integrated 15+ REST endpoints bridging frontend and backend teams.',
    ],
  },
  {
    role: 'Research Intern',
    company: 'Ordnance Factory India · Ministry of Defence',
    period: 'May – Jul 2024',
    color: 'coral',
    tags: ['Optics', 'SolidWorks', 'Research', 'Optomechanics'],
    bullets: [
      'Day-vision optics research for 7.62mm rifles across 25+ test scenarios.',
      'Designed 8 optomechanical components from scratch in SolidWorks.',
      'Studied full manufacturing flow: precision machining → QA → assembly.',
    ],
  },
]

const colorMap = {
  purple: { bg: '#E8E3FF', accent: '#6B5CE7', text: '#3a2fa0' },
  green:  { bg: '#B8E994', accent: '#3D6B2A', text: '#2a4d1c' },
  coral:  { bg: '#FFD6CC', accent: '#c0412a', text: '#7a2818' },
}

export default function Experience() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.12 }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="experience" ref={sectionRef}>
      <div className={styles.inner}>

        <div className={`${styles.header} reveal`}>
          <span className={styles.label}>Where I've worked</span>
          <h2 className={styles.title}>
            Experience<span className={styles.asterisk}>*</span>
          </h2>
        </div>

        <div className={styles.list}>
          {experiences?.map((exp, i) => {
            const c = colorMap[exp.color]
            return (
              <div
                key={i}
                className={`${styles.card} reveal reveal-delay-${Math.min(i + 1, 4)}`}
                style={{ '--card-accent': c.accent, '--card-bg': c.bg }}
              >
                {/* Coloured left accent bar */}
                <div className={styles.accentBar} style={{ background: c.accent }} />

                <div className={styles.cardInner}>
                  {/* Top row: role + period */}
                  <div className={styles.topRow}>
                    <div>
                      <h3 className={styles.role}>{exp.role}</h3>
                      <span className={styles.company} style={{ background: c.bg, color: c.text }}>
                        {exp.company}
                      </span>
                    </div>
                    <div className={styles.period}>{exp.period}</div>
                  </div>

                  {/* Bullets */}
                  <ul className={styles.bullets}>
                    {exp.bullets?.map((b, j) => (
                      <li key={j} className={styles.bullet}
                        style={{ '--delay': `${j * 0.06}s` }}
                      >{b}</li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className={styles.tags}>
                    {exp.tags?.map(t => (
                      <span key={t} className={styles.tag}
                        style={{ borderColor: c.accent, color: c.text }}
                      >{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
