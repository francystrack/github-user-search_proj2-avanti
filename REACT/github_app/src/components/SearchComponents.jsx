import React from 'react'
import styles from './CSSComponents/SearchComponents.module.css'

const SearchComponents = () => {
  return (
    <form id={styles.group2}>
            <input type="text" name="search" id={styles.search} aria-label="Barra de pesquisa" placeholder="Digite um usuário do GitHub" />
            <button type="button" id={styles.searchButton}>
                <img src="images/search.svg" alt="Botão de busca" />
            </button>
    </form>
  )
}

export default SearchComponents
