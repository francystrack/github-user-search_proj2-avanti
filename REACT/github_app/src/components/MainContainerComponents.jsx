import React from 'react'
import styles from './CSSComponents/MainContainerComponents.module.css'
import TitleComponent from './TitleComponents'
import SearchComponents from './SearchComponents'
import GitHubUser from './GitHubUser'


const MainContainerComponents = () => {
  return (
    <div className={styles.mainContainer}>
      <TitleComponent />
      <SearchComponents />
      <GitHubUser />
    </div>
  )
}

export default MainContainerComponents
