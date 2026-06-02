import styles from './Education.module.css'

const edu = [
  {
    degree: "Bachelor's Degree",
    institution: 'The British College',
    location: 'Kathmandu, Nepal',
    period: '2017 – 2022',
  },
  {
    degree: 'Intermediate',
    institution: 'Aishwarya Vidya Niketan',
    location: 'Dhangadhi, Nepal',
    period: '2015 – 2017',
  },
]

const interests = [
  {
    icon: '🔍',
    title: 'QA & Automation',
    desc: 'Exploring new tools, AI in QA, and process improvement.',
  },
  {
    icon: '🚀',
    title: 'Entrepreneurship',
    desc: 'Passionate about startups and innovative business ventures.',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-tag">Education</div>
        <h2 className="section-title">Education & Interests</h2>
        <div className={styles.grid}>
          <div>
            <p className={styles.sub}>Education</p>
            <div className={styles.eduList}>
              {edu.map(e => (
                <div key={e.institution} className={styles.eduCard}>
                  <div>
                    <p className={styles.degree}>{e.degree}</p>
                    <p className={styles.institution}>{e.institution} · {e.location}</p>
                  </div>
                  <span className={styles.period}>{e.period}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className={styles.sub}>Interests</p>
            <div className={styles.interestList}>
              {interests.map(i => (
                <div key={i.title} className={styles.interestCard}>
                  <span className={styles.icon}>{i.icon}</span>
                  <div>
                    <p className={styles.intTitle}>{i.title}</p>
                    <p className={styles.intDesc}>{i.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
