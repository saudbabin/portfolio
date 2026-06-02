import styles from './Projects.module.css'

const projects = [
  {
    title: 'MySecondTeacher',
    type: 'Learning Platform',
    desc: 'Owned end-to-end QA for a large-scale e-learning application across web, mobile Android, and Smart TV platforms.',
    tags: ['Web', 'Android', 'TV', 'API', 'Security', 'Accessibility'],
    highlight: '50% fewer production issues',
    color: 'purple',
    size: 'large',
  },
  {
    title: 'Kung Fu Quiz',
    type: 'QA Lead',
    desc: 'Led the QA process from project inception to production release — strategy, sprint planning, retrospectives, automation support, and post-release analysis.',
    tags: ['QA Lead', 'Agile', 'E2E', 'Automation'],
    highlight: '100% on-time delivery',
    color: 'blue',
    size: 'normal',
  },
  {
    title: 'Cynergy Bank',
    type: 'Accessibility Testing',
    desc: 'Conducted WCAG 2.0 compliance testing using WAVE and NVDA tools, validating screen readers, keyboard nav, and color contrast.',
    tags: ['WCAG 2.0', 'WAVE', 'NVDA', 'Security'],
    highlight: 'Full WCAG 2.0 compliance',
    color: 'green',
    size: 'normal',
  },
  {
    title: 'New Straits Times',
    type: 'ePaper Testing',
    desc: 'Tested interactive ePaper features, subscription workflows, authentication, and cross-device access for a major news publisher.',
    tags: ['Exploratory', 'Cross-device', 'Usability'],
    highlight: 'Critical issues resolved',
    color: 'orange',
    size: 'normal',
  },
]

const colorMap = {
  purple: { bg: 'rgba(139,92,246,0.06)', border: 'rgba(139,92,246,0.18)', dot: '#8b5cf6' },
  blue:   { bg: 'rgba(59,130,246,0.06)', border: 'rgba(59,130,246,0.18)', dot: '#3b82f6' },
  green:  { bg: 'rgba(34,197,94,0.06)',  border: 'rgba(34,197,94,0.18)',  dot: '#22c55e' },
  orange: { bg: 'rgba(249,115,22,0.06)', border: 'rgba(249,115,22,0.18)', dot: '#f97316' },
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="label">Selected work</p>
          <h2 className={`${styles.title} serif`}>Projects</h2>
        </div>
        <div className={styles.grid}>
          {projects.map(p => {
            const c = colorMap[p.color]
            return (
              <div
                key={p.title}
                className={`${styles.card} ${p.size === 'large' ? styles.large : ''}`}
                style={{ background: c.bg, borderColor: c.border }}
              >
                <div className={styles.cardTop}>
                  <div className={styles.typeRow}>
                    <span className={styles.typeDot} style={{ background: c.dot }} />
                    <span className={styles.type}>{p.type}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardDesc}>{p.desc}</p>
                </div>
                <div className={styles.cardBottom}>
                  <div className={styles.tags}>
                    {p.tags.map(t => <span key={t} className="pill">{t}</span>)}
                  </div>
                  <div className={styles.highlight} style={{ color: c.dot }}>
                    ✦ {p.highlight}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
