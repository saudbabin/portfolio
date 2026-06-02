import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className="container">
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.name}>Babin Saud</h1>
        <p className={styles.role}>Quality Assurance Engineer</p>
        <p className={styles.sub}>
          3+ years of experience in web, mobile, and TV platform testing.
          Turning bugs into features — before they reach production.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary}>Get in touch</a>
          <a href="#experience" className={styles.btnGhost}>View experience</a>
        </div>
        <div className={styles.meta}>
          <span>📍 Kathmandu, Nepal</span>
          <span>·</span>
          <a href="mailto:saudbabin@gmail.com">saudbabin@gmail.com</a>
          <span>·</span>
          <span>+977 9815607433</span>
        </div>
      </div>
    </section>
  )
}
