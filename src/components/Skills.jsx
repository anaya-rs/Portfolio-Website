import { useEffect, useRef } from 'react'
import styles from './Skills.module.css'

const skillGroups = [
  {
    category: 'Core Computing',
    icon: '</>',
    color: '#6B5CE7',
    bg: '#E8E3FF',
    skills: ['Python', 'Java', 'JavaScript', 'SQL'],
  },
  {
    category: 'Backend & Systems',
    icon: '⚙',
    color: '#00A8A8',
    bg: '#D5F5F5',
    skills: ['FastAPI', 'Flask', 'REST APIs', 'RBAC', 'Microservices'],
  },
  {
    category: 'Machine Learning',
    icon: 'ML',
    color: '#B07D00',
    bg: '#FFE566',
    skills: [
      'PyTorch',
      'PyTorch Geometric',
      'GNN (GCN/GAT)',
      'Transformers',
      'LLaMA-2 / GPT4All',
      'EasyOCR',
    ],
  },
  {
    category: 'Frontend',
    icon: 'UI',
    color: '#3D6B2A',
    bg: '#B8E994',
    skills: ['React', 'State Management', 'Form Builders', 'UI Integration'],
  },
  {
    category: 'Algorithms & Optimization',
    icon: '∑',
    color: '#FF6B6B',
    bg: '#FFD6D6',
    skills: [
      'Graph Algorithms',
      'GA / ACO / PSO',
      'Path Planning',
      'NumPy',
      'State Machines',
      'DAG Validation',
    ],
  },
  {
    category: 'Infra & Tooling',
    icon: '▣',
    color: '#c0412a',
    bg: '#FFD6CC',
    skills: ['Git', 'Vercel', 'AWS', 'Docker'],
  },
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="skills" ref={sectionRef}>
      <div className={styles.inner}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.label}>Technical arsenal</span>
          <h2 className={styles.title}>Skills</h2>
          <p className={styles.subtitle}>
            I prioritize outcomes over tools. Stack follows the problem.
          </p>
        </div>

        <div className={styles.grid}>
          {skillGroups?.map((g, i) => (
            <div
              key={i}
              className={`${styles.card} reveal reveal-delay-${(i % 3) + 1}`}
              style={{ '--accent': g.color, '--bg': g.bg }}
            >
              <div className={styles.cardHead}>
                <span
                  className={styles.icon}
                  style={{ background: g.bg, color: g.color }}
                >
                  {g.icon}
                </span>
                <span className={styles.category}>{g.category}</span>
              </div>

              <div className={styles.chips}>
                {g.skills?.map(s => (
                  <span
                    key={s}
                    className={styles.chip}
                    style={{
                      borderColor: g.color,
                      color: g.color,
                      background: g.bg,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}