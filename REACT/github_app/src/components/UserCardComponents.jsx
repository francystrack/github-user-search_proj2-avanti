import React from 'react'
import styles from './CSSComponents/UserCardComponents.module.css'

const UserCardComponents = (props) => {
  return (
    <div className={styles.userCard}>
        <div className={styles.userCardContainer}>
            <img src={props.avatar_url} alt={`Foto de perfil de ${props.name}`} className={styles.userPhoto}/>
            <div className={styles.userDescription}>
                <h1 className={styles.userName}>
                    {props.name}
                </h1>
                <p className={styles.userBio}>
                    {props.bio}
                </p>
            </div>
        </div>
    </div>
  )
}

export default UserCardComponents
