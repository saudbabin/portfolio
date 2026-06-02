import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <p className="label">Let's connect</p>
            <h2 className={`${styles.heading} serif`}>
              Got a project<br />
              <span className={styles.muted}>in mind?</span>
            </h2>
          </div>
          <div className={styles.right}>
            <p className={styles.body}>
              I'm open to new QA opportunities, freelance testing work, or just a good conversation about software quality.
            </p>
            <div className={styles.links}>
              <a href="mailto:saudbabin@gmail.com" className={styles.link}>
                <span className={styles.linkLabel}>Email</span>
                <span className={styles.linkVal}>saudbabin@gmail.com ↗</span>
              </a>
              <div className={styles.divider} />
              <a href="tel:+9779815607433" className={styles.link}>
                <span className={styles.linkLabel}>Phone</span>
                <span className={styles.linkVal}>+977 9815607433</span>
              </a>
              <div className={styles.divider} />
              <div className={styles.link}>
                <span className={styles.linkLabel}>Location</span>
                <span className={styles.linkVal}>Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <span>© {new Date().getFullYear()} Babin Saud</span>
          <span>Quality Assurance Engineer</span>
          <span>Built with React & Vite</span>
        </div>
      </div>
    </section>
  )
}
