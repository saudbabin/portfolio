import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-tag">Contact</div>
        <h2 className="section-title">Get In Touch</h2>
        <div className={styles.card}>
          <p className={styles.tagline}>
            Open to new opportunities and collaborations.<br />
            Feel free to reach out — I'd love to connect.
          </p>
          <div className={styles.links}>
            <a href="mailto:saudbabin@gmail.com" className={styles.link}>
              <span className={styles.linkIcon}>✉</span>
              <span>
                <strong>Email</strong>
                <small>saudbabin@gmail.com</small>
              </span>
            </a>
            <a href="tel:+9779815607433" className={styles.link}>
              <span className={styles.linkIcon}>📞</span>
              <span>
                <strong>Phone</strong>
                <small>+977 9815607433</small>
              </span>
            </a>
            <div className={styles.link}>
              <span className={styles.linkIcon}>📍</span>
              <span>
                <strong>Location</strong>
                <small>Kathmandu, Nepal</small>
              </span>
            </div>
          </div>
        </div>
        <p className={styles.footer}>
          Built with React & Vite · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  )
}
