import styles from './Experience.module.css'

const jobs = [
  {
    company: 'Innovate Tech Pvt Ltd',
    role: 'Quality Assurance Engineer',
    period: '2023 — Present',
    type: 'Full-time',
    bullets: [
      'Served as QA Lead for Kung Fu Quiz — owned full product lifecycle from inception to production including requirements discussions, sprint planning, test strategy, automation support, and post-release analysis',
      'Achieved 100% on-time delivery by proactively flagging risks during sprint planning and coordinating closely with developers and stakeholders to resolve ambiguities early',
      'Reduced production defects by 50% via structured root cause analysis, regression checklists, and pre-release QA sign-off gates; improved release cycle efficiency by 40% through standardized templates and risk-based prioritization',
      'Designed end-to-end QA strategies covering unit, regression, E2E, black-box, API, security, and accessibility testing, achieving 95% test coverage',
      'Conducted API testing (Postman/Swagger) and security testing (BurpSuite), identifying critical vulnerabilities before each release',
      'Led and mentored 5+ junior QA members across 10+ modules of MySecondTeacher and Kung Fu Quiz',
      'Gathered and synthesized feedback from CSD and support teams, acting as a bridge between users, product, and engineering',
      'Managed major MST feature releases on web and mobile Android; tested and validated MST TV features for cross-platform performance',
      'Supported automation efforts using Playwright and Selenium, reducing manual testing effort',
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
