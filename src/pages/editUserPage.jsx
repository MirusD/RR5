import React from 'react'
import { NavLink, useParams, Navigate } from "react-router-dom"
import { useUser } from "../hooks/useUsers"

const EditUserPage = () => {
    const { userId } = useParams()
    const { getUserById } = useUser()
    const user = getUserById(userId)

    if(!user) return <Navigate to="/users" />

    return (
        <>
            <h1>Edit User Page</h1>
            <ul>
                <li>
                    <NavLink to={`/users/${userId}`}>
                        User profile page
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/users/${+userId + 1}`}>
                        Another user
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users">
                        Users list page
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default EditUserPage
