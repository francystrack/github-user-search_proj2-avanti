import { Suspense, useState } from 'react'
import styles from './CSSComponents/SearchComponents.module.css'
import GitHubUserComponents from './GitHubUserComponents';

const SearchComponents = () => {
const [searchTerm, setSearchTerm] = useState("");
const [user, setUser] = useState("");

const submitSearch = (event) => {
  setSearchTerm(user)
  event.preventDefault();
  console.log("Searching for:", searchTerm);
  event.target.value = {searchTerm}
}

  return (
    <>
      <form id={styles.group2}>
      <input
            type="text"
            name="search"
            id={styles.search}
            aria-label="Barra de pesquisa"
            placeholder="Digite um usuário do GitHub"
            onChange={(event) => {setUser(event.target.value)}}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                submitSearch(event)
              }
            }}
            value={user}
          />
          <button
            type="button"
            id={styles.searchButton}
            onClick={submitSearch}
          >
            <img src="images/search.svg" alt="Botão de busca" />
          </button>
          {/* <input
            type="text"
            name="search"
            id={styles.search}
            aria-label="Barra de pesquisa"
            placeholder="Digite um usuário do GitHub"
            onChange={(event) => {setSearchTerm(event.target.value)}}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                submitSearch(event)
              }
            }}
            value={searchTerm}
          />
          <button
            type="button"
            id={styles.searchButton}
            onClick={submitSearch}
          >
            <img src="images/search.svg" alt="Botão de busca" />
          </button> */}
      </form>

<div>Termo buscado: {searchTerm}</div>
      {
            <GitHubUserComponents username={searchTerm} />
      }
    </>
  )
}

export default SearchComponents
