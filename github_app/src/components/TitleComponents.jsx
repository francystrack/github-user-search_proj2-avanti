import React from 'react'
import styles from './CSSComponents/TitleComponents.module.css'

const TitleComponent = () => {
  return (
    <div className={styles.group1}>
      <img src="images/github-logo.png" alt="Logo do GitHub" className={styles.githubLogo} />
      <span className={styles.perfil}>Perfil</span>
      <img src="images/github.png" alt="GitHub" className={styles.github} />
    </div>
  )
}

export default TitleComponent
