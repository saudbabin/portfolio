import styles from './Stats.module.css'

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '10+', label: 'Modules Tested' },
  { value: '50%', label: 'Defects Reduced' },
  { value: '95%', label: 'Test Coverage' },
  { value: '40%', label: 'Release Efficiency' },
  { value: '100%', label: 'On-time Delivery' },
]

export default function Stats() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        {stats.map((s, i) => (
          <>
            <div key={s.label} className={styles.item}>
              <span className={styles.val}>{s.value}</span>
              <span className={styles.lbl}>{s.label}</span>
            </div>
            {i < stats.length - 1 && <div key={`d${i}`} className={styles.sep} />}
          </>
        ))}
      </div>
    </div>
  )
}
