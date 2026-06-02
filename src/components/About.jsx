import styles from './About.module.css'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '50%', label: 'Defect Reduction' },
  { value: '95%', label: 'Test Coverage' },
  { value: '40%', label: 'Release Efficiency' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-tag">About</div>
        <h2 className="section-title">Profile</h2>
        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              Quality Assurance Engineer with 3+ years of experience in <strong>web, mobile (Android), and TV platform testing</strong> within Agile environments. Skilled in manual, API, performance, security, automation, and accessibility testing, with a proven record of mentoring junior QA members, optimizing QA processes, and managing major feature releases.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Experienced in unit, regression, end-to-end, black-box, security, and accessibility testing using <strong>Postman, Swagger, BurpSuite, WAVE, and NVDA tools</strong>. Adept at gathering feedback from CSD and support teams, coordinating retrospectives and root cause analysis meetings, and ensuring timely and reliable production delivery.
            </p>
          </div>
          <div className={styles.stats}>
            {stats.map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
