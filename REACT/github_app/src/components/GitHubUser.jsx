import {useState, useEffect} from 'react'
import stylesUser from './CSSComponents/UserCardComponents.module.css'

const GitHubUser = () => {
    const token = "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";   //token para acessar a API
    const [data, setData] = useState([])
    const username = "francystrack" //apenas para teste

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`, {
            headers: new Headers({
                'Authorization': `Bearer ${token}`
            })
        })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error))
    }, [])

    return (
        <div className={stylesUser.userCard}>
            <div className={stylesUser.userCardContainer}>
                <img src={data.avatar_url} alt={`Foto de perfil de ${data.name}`} className={stylesUser.userPhoto}/>
                <div className={stylesUser.userDescription}>
                    <h1 className={stylesUser.userName}>
                        {data.name}
                    </h1>
                    <p className={stylesUser.userBio}>
                        {data.bio}
                    </p>
                </div>
            </div>
        </div>    
    )
}

export default GitHubUser
