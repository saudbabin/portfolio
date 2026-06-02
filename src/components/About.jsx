import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <p className="label">About me</p>
        </div>
        <div className={styles.right}>
          <h2 className={`${styles.heading} serif`}>
            I make sure software<br />
            <span className={styles.muted}>works flawlessly.</span>
          </h2>
          <p className={styles.body}>
            Quality Assurance Engineer with 3+ years of experience in <strong>web, mobile (Android), and TV platform testing</strong> within Agile environments. Skilled in manual, API, performance, security, automation, and accessibility testing.
          </p>
          <p className={styles.body} style={{marginTop: '1rem'}}>
            I have a proven record of <strong>mentoring junior QA members</strong>, optimizing QA processes, and managing major feature releases — reducing production defects by 50% and improving release cycle efficiency by 40%.
          </p>
          <div className={styles.tools}>
            {['Postman', 'BurpSuite', 'Playwright', 'Selenium', 'JMeter', 'WAVE', 'NVDA', 'Azure Test Plans'].map(t => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
