import React, {useState, useEffect, Suspense, lazy} from 'react'
const ErrorCardComponents = lazy(() => import('./ErrorCardComponents'))
const UserCardComponents = lazy(() => import('./UserCardComponents'))
import styles from './CSSComponents/GitHubUserComponents.module.css'


const GitHubUserComponents = (props) => {
    const token = "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";   //token para acessar a API
    
    const [userData, setUserData] = useState(null)
    const [hasError, setHasError] = useState(false)
    
    useEffect(() => {
        if(props.username) {
            fetch(`https://api.github.com/users/${props.username}`, {
                headers: new Headers({
                    'Authorization': `Bearer ${token}`
                })
            })
            .then((response) => {
                return response.json();
            })
            .then((userData) => {
                console.log("data", userData)
                if(userData.status === "404") {
                    throw new Error("User not found")
                }
                setUserData(userData)
                setHasError(false)          
            })
            .catch((error) => {
                console.error(error)
                console.log("erro")
                setHasError(true)
                setUserData(false)
            })
        }
    }, [props.username])

    return (
        <>
        <Suspense fallback={<img src="images/loading.gif" alt="Carregando" className={styles.loading} />}>
                {
                    userData && (
                        <UserCardComponents avatar_url={userData.avatar_url} name={userData.name} bio={userData.bio} />
                    )
                }
                {
                    hasError && (
                        <ErrorCardComponents />
                    )
                }
        </Suspense>
                
        </>   
    )
}

export default GitHubUserComponents
