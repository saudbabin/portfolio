import styles from './Nav.module.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#" className={styles.name}>Babin Saud</a>
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <a href="/CV_Babin_Saud_QA.pdf" download className={styles.resume}>Resume ↓</a>
        <a href="mailto:saudbabin@gmail.com" className={styles.cta}>Hire me</a>
      </div>
    </nav>
  )
}
