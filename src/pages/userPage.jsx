import React from 'react'
import { NavLink, useParams, Navigate } from "react-router-dom"
import { useUser } from "../hooks/useUsers"

const UserPage = () => {
    const { userId } = useParams()
    const { getUserById } = useUser()
    const user = getUserById(userId)

    if(!user) return <Navigate to="/users" />

    return (
        <>
            <h1>User Page</h1>
            <ul>
                <li>
                    <NavLink to="/users">
                        User list page
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/users/${userId}/edit`}>
                        Edit this user
                    </NavLink>
                </li>
            </ul>
            <span>userId: { userId }</span>
        </>
    )
}

export default UserPage
