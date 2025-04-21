import React from 'react'
import styles from './CSSComponents/UserCardComponents.module.css'

const UserCardComponents = () => {
  return (
    <div className={styles.userCard}>
        <div className={styles.userCardContainer}>
            <div className={styles.userPhoto}></div>
            <div className={styles.userDescription}>
                <h1 className={styles.userName}>Lorem ipsum dolor</h1>
                <p className={styles.userBio}>
                    Sit amet consectetur adipisicing elit. Aperiam laborum consequuntur dolorum, quaerat veniam, fuga, fugiat officia fugit provident nobis non voluptatibus! Consequuntur dolores dolore voluptatum perspiciatis nulla repudiandae ipsum, quos, numquam, magni saepe nemo.
                </p>
            </div>
        </div>
    </div>
  )
}

export default UserCardComponents
