import styles from './Marquee.module.css'

const items = [
  'Math + Mechanical',
  'Systems-first engineer',
  'Tool-agnostic builder',
  'Backend · ML · Product',
  'Built AI systems processing real-world data',
  'FastAPI · PyTorch · React',
  'Building AI systems that matter',
]

export default function Marquee() {
  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.sep}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}