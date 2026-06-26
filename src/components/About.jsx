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
            Quality Assurance Engineer with 4 years of experience transitioning into a <strong>PM/QA hybrid role</strong>. Proven record of owning product quality end-to-end — from requirements to post-release — across <strong>web, mobile (Android), and TV platforms</strong> in Agile environments.
          </p>
          <p className={styles.body} style={{marginTop: '1rem'}}>
            I combine deep QA expertise (manual, API, security, performance, accessibility, automation) with product ownership skills including <strong>sprint planning, stakeholder collaboration, and requirements gathering</strong> — reducing production defects by 50% and release cycle time by 40%.
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
