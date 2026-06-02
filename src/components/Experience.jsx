import styles from './Experience.module.css'

const jobs = [
  {
    company: 'Innovate Tech Pvt Ltd',
    role: 'Quality Assurance Engineer',
    period: '2023 – Present',
    location: 'Kathmandu, Nepal',
    bullets: [
      'Oversaw QA processes for MySecondTeacher and Kung Fu Quiz, guiding 5+ junior QA members across 10+ modules.',
      'Developed and executed test plans covering unit, regression, end-to-end, black-box, API, security, and accessibility testing — achieving 95% coverage.',
      'Conducted API testing (Postman/Swagger) and security testing (BurpSuite), resolving critical vulnerabilities pre-release.',
      'Managed major MST feature releases on web and mobile Android, coordinating with developers, marketing, and project teams.',
      'Tested MST TV features, integrating mobile functionality and validating cross-platform performance.',
      'Reduced production defects by 50% and improved release cycle efficiency by 40% through process improvements.',
      'Served as QA Lead for Kung Fu Quiz — from inception to production release, ensuring 100% on-time delivery.',
    ],
  },
  {
    company: 'Sursa Technology',
    role: 'Quality Assurance Engineer',
    period: 'Mar 2022 – Jan 2023',
    location: 'Kathmandu, Nepal',
    bullets: [
      'Executed manual, exploratory, security, performance, and accessibility testing for web and mobile apps.',
      'Designed and maintained detailed test cases, improving QA documentation completeness by 30%.',
      'Participated in Agile ceremonies, coordinating QA efforts across global teams.',
      'Supported QA process improvements, enhancing test quality and release reliability.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-tag">Experience</div>
        <h2 className="section-title">Professional Experience</h2>
        <div className={styles.timeline}>
          {jobs.map(job => (
            <div key={job.company} className={styles.card}>
              <div className={styles.dot} />
              <div className={styles.header}>
                <div>
                  <h3 className={styles.role}>{job.role}</h3>
                  <p className={styles.company}>{job.company} · {job.location}</p>
                </div>
                <span className={styles.period}>{job.period}</span>
              </div>
              <ul className={styles.bullets}>
                {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
