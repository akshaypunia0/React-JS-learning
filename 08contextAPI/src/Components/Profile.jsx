import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)

    if (!user) {
        return <div>No user found</div>
    }
    
    return(
        <>
        <div>Hello {user.username} {user.password}</div>
        </>
    )
}

export default Profile