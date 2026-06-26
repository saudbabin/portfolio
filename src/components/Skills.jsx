import styles from './Skills.module.css'

const categories = [
  {
    label: 'Testing',
    items: ['Manual Testing', 'API Testing', 'Security Testing', 'Performance Testing', 'Accessibility Testing', 'Regression', 'End-to-End', 'Unit Testing', 'Black-Box', 'Exploratory'],
  },
  {
    label: 'Tools',
    items: ['Postman', 'Swagger', 'BurpSuite', 'JMeter', 'WAVE', 'NVDA', 'GitLab', 'Azure Test Plans'],
  },
  {
    label: 'Automation',
    items: ['Playwright', 'Selenium', 'Java'],
  },
  {
    label: 'Product & Project',
    items: ['Sprint Planning', 'Requirements Gathering', 'Risk Management', 'Stakeholder Collaboration', 'Release Coordination'],
  },
  {
    label: 'Process',
    items: ['Agile', 'Scrum', 'Root Cause Analysis', 'Retrospectives'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="label">What I work with</p>
          <h2 className={`${styles.title} serif`}>Skills</h2>
        </div>
        <div className={styles.grid}>
          {categories.map(cat => (
            <div key={cat.label} className={styles.cat}>
              <p className={styles.catLabel}>{cat.label}</p>
              <div className={styles.pills}>
                {cat.items.map(item => (
                  <span key={item} className="pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
