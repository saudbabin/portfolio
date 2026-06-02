import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* Left */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Available for work
          </div>

          <h1 className={styles.heading}>
            <span className="serif">Quality</span>{' '}
            <span className={styles.outline}>Assurance</span>
            <br />
            <span className="serif">Engineer.</span>
          </h1>

          <p className={styles.sub}>
            3+ years finding what breaks before users do. Specialized in web, mobile (Android), and TV platform testing within Agile teams.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.btnPrimary}>View my work</a>
            <a href="#contact" className={styles.btnGhost}>Get in touch ↗</a>
          </div>

          <div className={styles.socials}>
            <a href="mailto:saudbabin@gmail.com" className={styles.social}>Email</a>
            <span className={styles.dot2} />
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.social}>LinkedIn</a>
            <span className={styles.dot2} />
            <span className={styles.social}>Kathmandu, Nepal</span>
          </div>
        </div>

        {/* Right */}
        <div className={styles.right}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatar}>
              <span className={styles.avatarInitials}>BS</span>
            </div>
            <div className={styles.glow} />
          </div>
          <div className={styles.floatCard}>
            <span className={styles.floatIcon}>🛡️</span>
            <div>
              <p className={styles.floatTitle}>95% Coverage</p>
              <p className={styles.floatSub}>Across all modules</p>
            </div>
          </div>
          <div className={`${styles.floatCard} ${styles.floatCard2}`}>
            <span className={styles.floatIcon}>📉</span>
            <div>
              <p className={styles.floatTitle}>50% Fewer Bugs</p>
              <p className={styles.floatSub}>In production</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
