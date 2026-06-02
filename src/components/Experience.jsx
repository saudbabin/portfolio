import styles from './Experience.module.css'

const jobs = [
  {
    company: 'Innovate Tech Pvt Ltd',
    role: 'Quality Assurance Engineer',
    period: '2023 — Present',
    type: 'Full-time',
    bullets: [
      'Oversaw QA for MySecondTeacher & Kung Fu Quiz, guiding 5+ junior QA members across 10+ modules',
      'Achieved 95% test coverage across unit, regression, E2E, API, security & accessibility',
      'Conducted API testing (Postman/Swagger) and security testing (BurpSuite), resolving critical vulnerabilities pre-release',
      'Reduced production defects by 50% and improved release cycle efficiency by 40%',
      'QA Lead for Kung Fu Quiz — inception to production, ensuring 100% on-time delivery',
      'Tested MST TV features, validating cross-platform performance across web, mobile & TV',
    ],
  },
  {
    company: 'Sursa Technology',
    role: 'Quality Assurance Engineer',
    period: 'Mar 2022 — Jan 2023',
    type: 'Full-time',
    bullets: [
      'Executed manual, exploratory, security, performance & accessibility testing for web and mobile apps',
      'Improved QA documentation completeness by 30% through detailed test case design',
      'Participated in Agile ceremonies, coordinating QA efforts across global teams',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="label">Work history</p>
          <h2 className={`${styles.title} serif`}>Experience</h2>
        </div>
        <div className={styles.list}>
          {jobs.map((job, i) => (
            <div key={job.company} className={styles.row}>
              <div className={styles.meta}>
                <p className={styles.period}>{job.period}</p>
                <span className="pill">{job.type}</span>
              </div>
              <div className={styles.content}>
                <div className={styles.roleRow}>
                  <h3 className={styles.role}>{job.role}</h3>
                  <span className={styles.company}>@ {job.company}</span>
                </div>
                <ul className={styles.bullets}>
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
