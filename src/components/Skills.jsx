import styles from './Skills.module.css'

const groups = [
  {
    label: 'Tools',
    items: ['Postman', 'Swagger', 'BurpSuite', 'JMeter', 'Playwright', 'Selenium', 'WAVE', 'NVDA', 'GitLab', 'Azure Test Plans'],
  },
  {
    label: 'Testing Types',
    items: ['Manual', 'Exploratory', 'API', 'Performance', 'Security', 'Unit', 'Regression', 'End-to-End', 'Black-Box', 'Accessibility'],
  },
  {
    label: 'Automation & Scripting',
    items: ['Java', 'Selenium', 'Playwright'],
  },
  {
    label: 'Methodologies',
    items: ['Agile', 'Scrum', 'Sprint Planning'],
  },
  {
    label: 'Soft Skills',
    items: ['Communication', 'Collaboration', 'Mentorship', 'Problem Solving'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-tag">Skills</div>
        <h2 className="section-title">Technical Skills</h2>
        <div className={styles.groups}>
          {groups.map(g => (
            <div key={g.label} className={styles.group}>
              <p className={styles.groupLabel}>{g.label}</p>
              <div className={styles.tags}>
                {g.items.map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
