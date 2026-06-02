import styles from './Projects.module.css'

const projects = [
  {
    title: 'MySecondTeacher',
    subtitle: 'Learning Online Application',
    tags: ['Web', 'Mobile Android', 'TV', 'API Testing', 'Security', 'Accessibility'],
    bullets: [
      'Owned QA for major components, supervised junior QA members, and coordinated test execution across modules.',
      'Conducted API and security testing, resulting in early defect detection and resolution.',
      'Managed mobile Android testing and feature rollout, reducing production issues by 50%.',
      'Validated MST TV feature integration and ensured cross-platform performance stability.',
    ],
  },
  {
    title: 'Kung Fu Quiz',
    subtitle: 'QA Lead — Inception to Production',
    tags: ['QA Lead', 'Agile', 'Automation', 'Regression', 'End-to-End'],
    bullets: [
      'Served as QA Lead from project initiation to production release; trained new interns.',
      'Managed requirement discussions, sprint planning, and creation of detailed QA strategy.',
      'Led retrospectives and root cause analysis, improving QA processes and release quality.',
      'Ensured consistent, on-time production deployment and coordinated post-release fixes.',
    ],
  },
  {
    title: 'Cynergy Bank',
    subtitle: 'Bank Accessibility & Usability Testing',
    tags: ['Accessibility', 'WCAG 2.0', 'WAVE', 'NVDA', 'Security'],
    bullets: [
      'Conducted accessibility testing to ensure WCAG 2.0 compliance for the bank\'s web interfaces.',
      'Used WAVE and NVDA tools to validate screen reader compatibility, keyboard navigation, and color contrast.',
      'Tested login workflows, account overview, navigation, forms, and session security.',
    ],
  },
  {
    title: 'New Straits Times',
    subtitle: 'ePaper & Digital Features Testing',
    tags: ['Exploratory', 'Cross-device', 'Usability', 'Authentication'],
    bullets: [
      'Tested interactive ePaper features including issue navigation, zoom, search, multimedia, and archive retrieval.',
      'Validated subscription workflows, authentication, and cross-device access.',
      'Assessed usability features (bookmarking, navigation, content sharing), reporting critical issues.',
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-tag">Projects</div>
        <h2 className="section-title">Key Projects</h2>
        <div className={styles.grid}>
          {projects.map(p => (
            <div key={p.title} className={styles.card}>
              <div className={styles.cardTop}>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.subtitle}>{p.subtitle}</p>
                <div className={styles.tags}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <ul className={styles.bullets}>
                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
