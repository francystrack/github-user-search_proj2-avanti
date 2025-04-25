import React from 'react'
import styles from './CSSComponents/ErrorCardComponents.module.css'

const ErrorCardComponents = () => {
  return (
    <div className={styles.errorMessage}>
        <p>Nenhum perfil foi encontrado com esse nome de usuário.<br />Tente novamente.</p>
        <img src={`${import.meta.env.BASE_URL}/images/error.gif`} alt="John Travolta confuso no filme Pulp Fiction" className={styles.errorGif} />
    </div>
  )
}

export default ErrorCardComponents
