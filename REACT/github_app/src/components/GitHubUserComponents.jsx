import React, {useState, useEffect} from 'react'
import ErrorCardComponents from './ErrorCardComponents';
import UserCardComponents from './UserCardComponents';

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

export default GitHubUserComponents
