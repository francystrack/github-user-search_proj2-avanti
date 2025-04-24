import React, {useState, useEffect, Suspense} from 'react'
import UserCardComponents from './UserCardComponents';
import ErrorCardComponents from './ErrorCardComponents';

const GitHubUser = () => {
    const token = "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";   //token para acessar a API
    const [userData, setUserData] = useState(null)
    const [hasError, setHasError] = useState(false)
    const username = "sdfdfdhx"
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`, {
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

    }, [])

    return (
        <>
            <Suspense fallback={<div>CARREGANDO</div>}></Suspense>
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
        </>   
    )
}

export default GitHubUser
