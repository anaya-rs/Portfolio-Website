import { useEffect, useRef, useState } from 'react'
import styles from './Projects.module.css'

const projects = [
  {
    num: '01',
    name: 'GNN Surrogate for Airfoil Pressure',
    tagline: 'Making CFD 95% faster with graph neural networks.',
    tech: ['PyTorch', 'PyTorch Geometric', 'GCN/GAT', 'CFD'],
    details: [
      'Trained GNN surrogates on 1,000+ CFD simulation samples.',
      'Achieved Cp MSE < 1e-3 and <10% lift error — near CFD fidelity.',
      '95% inference speedup vs. full CFD simulation.',
      'Evaluated generalization on unseen airfoil geometries.',
    ],
    color: '#6B5CE7',
    bg: '#E8E3FF',
    link: 'https://github.com/anaya-rs',
  },
  {
    num: '02',
    name: 'Adaptive Learning Platform',
    tagline: 'Deterministic FSM engine that separates AI content from execution control.',
    tech: ['Python', 'FastAPI', 'React', 'Pydantic', 'Zod'],
    details: [
      'Designed a deterministic FSM runtime with DAG validation and cycle detection.',
      'Schema-validated lesson authoring with retry limits and pacing.',
      'Enforced backend–frontend consistency via mirrored Pydantic ↔ Zod schemas.',
      'Event-based analytics tracking state entry, retries, correctness, completion.',
    ],
    color: '#3D6B2A',
    bg: '#B8E994',
    link: 'https://github.com/anaya-rs',
  },
  {
    num: '03',
    name: 'Blockchain Payment System',
    tagline: 'Cryptographic transaction integrity with multi-node consensus.',
    tech: ['Python', 'Flask', 'SHA-256', 'Merkle Trees', 'HTML/CSS'],
    details: [
      'Implemented SHA-256 hashing and Merkle trees for transaction integrity.',
      'Designed a prototype web app simulating a secure payment system.',
      'Built multi-node consensus mechanism from scratch.',
    ],
    color: '#c0412a',
    bg: '#FFD6CC',
    link: 'https://github.com/anaya-rs',
  },
  {
    num: '04',
    name: 'Heuristic Robot Path Planning',
    tagline: 'GA, ACO, PSO beating A* on 50+ obstacle maps.',
    tech: ['Python', 'NumPy', 'Matplotlib', 'GA', 'ACO', 'PSO'],
    details: [
      'Applied genetic algorithms, ant colony, and particle swarm optimization.',
      '15% faster convergence and 12% shorter paths vs A* and Dijkstra.',
      'Benchmarked across 50+ distinct obstacle map configurations.',
    ],
    color: '#B07D00',
    bg: '#FFE566',
    link: 'https://github.com/anaya-rs',
  },
]

function ProjectCard({ proj, i }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`${styles.card} reveal reveal-delay-${(i % 3) + 1}`}
      style={{ '--accent': proj.color, '--light': proj.bg }}
      onClick={() => setOpen(!open)}
      data-hover
    >
      <div className={styles.cardTop}>
        <span className={styles.num}>{proj.num}</span>
        <div
          className={styles.expand}
          style={{ background: open ? proj.color : 'transparent', borderColor: proj.color }}
        >
          <span style={{ color: open ? '#fff' : proj.color }}>
            {open ? '−' : '+'}
          </span>
        </div>
      </div>

      <h3 className={styles.name}>{proj.name}</h3>
      <p className={styles.tagline}>{proj.tagline}</p>

      <div className={styles.tags}>
        {proj.tech?.map(t => (
          <span key={t} className={styles.tag}
            style={{ borderColor: proj.color, color: proj.color, background: proj.bg }}
          >
            {t}
          </span>
        ))}
      </div>

      {open && (
        <div className={styles.details}>
          <ul className={styles.detailList}>
            {proj.details?.map((d, j) => (
              <li key={j}>{d}</li>
            ))}
          </ul>
          <a
            href={proj.link}
            target="_blank"
            rel="noreferrer"
            className={styles.ghLink}
            style={{ color: proj.color, borderColor: proj.color }}
            onClick={e => e.stopPropagation()}
          >
            GitHub ↗
          </a>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
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
    <section className={styles.section} id="projects" ref={sectionRef}>
      <div className={styles.inner}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.label}>Things I've built</span>
          <h2 className={styles.title}>
            Projects
            <em className={styles.italic}> — click to expand</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {projects?.map((proj, i) => (
            <ProjectCard key={i} proj={proj} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
