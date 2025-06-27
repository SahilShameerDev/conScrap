import React from 'react'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderContent}>
        <div className={styles.spinner}></div>
        <div className={styles.text}>Conscrap</div>
        <div className={styles.tagline}>Build. Unbuild. Rebuild.</div>
      </div>
    </div>
  )
}

export default Loader
