import React from 'react'
import styles from './CSSComponents/MainContainerComponents.module.css'
import TitleComponent from './TitleComponents'
import SearchComponents from './SearchComponents'


const MainContainerComponents = () => {
  return (
    <div className={styles.mainContainer}>
      <TitleComponent />
      <SearchComponents />
    </div>
  )
}

export default MainContainerComponents
