import React from 'react'
import styles from './CSSComponents/TitleComponents.module.css'

const TitleComponent = () => {
  return (
    <div className={styles.group1}>
      <img src={`${import.meta.env.BASE_URL}/images/github-logo.png`} alt="Logo do GitHub" className={styles.githubLogo} />
      <span className={styles.perfil}>Perfil</span>
      <img src={`${import.meta.env.BASE_URL}/images/github.png`} alt="GitHub" className={styles.github} />
    </div>
  )
}

export default TitleComponent
