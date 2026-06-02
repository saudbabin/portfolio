import styles from './Education.module.css'

const edu = [
  { degree: "Bachelor's Degree", school: 'The British College', location: 'Kathmandu, Nepal', period: '2017–2022' },
  { degree: 'Intermediate', school: 'Aishwarya Vidya Niketan', location: 'Dhangadhi, Nepal', period: '2015–2017' },
]

const interests = [
  { emoji: '🔍', title: 'QA & Automation', desc: 'Exploring new tools, AI in QA, and process improvement.' },
  { emoji: '🚀', title: 'Entrepreneurship', desc: 'Passionate about startups and innovative business ventures.' },
]

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className="container">
        <div className={styles.cols}>
          <div>
            <p className="label" style={{marginBottom:'1.25rem'}}>Education</p>
            <div className={styles.list}>
              {edu.map(e => (
                <div key={e.school} className={styles.item}>
                  <div>
                    <p className={styles.degree}>{e.degree}</p>
                    <p className={styles.school}>{e.school}</p>
                    <p className={styles.loc}>{e.location}</p>
                  </div>
                  <span className={styles.period}>{e.period}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="label" style={{marginBottom:'1.25rem'}}>Interests</p>
            <div className={styles.list}>
              {interests.map(i => (
                <div key={i.title} className={styles.item}>
                  <span className={styles.emoji}>{i.emoji}</span>
                  <div>
                    <p className={styles.degree}>{i.title}</p>
                    <p className={styles.loc}>{i.desc}</p>
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
