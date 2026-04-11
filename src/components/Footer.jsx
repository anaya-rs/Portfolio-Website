import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>
          Anaya Sharma <span className={styles.dot}>✦</span> BITS Pilani '27
        </span>
        <span className={styles.copy}>
          Built with React · Deployed on Vercel
        </span>
      </div>
    </footer>
  )
}
