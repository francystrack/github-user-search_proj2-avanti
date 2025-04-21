import React from 'react'
import styles from './CSSComponents/MainContainerComponents.module.css'
import TitleComponent from './TitleComponents'
import SearchComponents from './SearchComponents'
import UserCardComponents from './UserCardComponents'
import ErrorCardComponents from './ErrorCardComponents'


const MainContainerComponents = () => {
  return (
    <div className={styles.mainContainer}>
      <TitleComponent />
      <SearchComponents />
      <UserCardComponents />
      <ErrorCardComponents />
    </div>
  )
}

export default MainContainerComponents
