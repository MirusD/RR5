import React from 'react'
import { NavLink, useLocation, useParams, Redirect } from "react-router-dom"
import UsersListPage from "../pages/usersListPage"
import UserPage from "../pages/userPage"
import EditUserPage from "../pages/editUserPage"
import { useUser } from "../hooks/useUsers"

const UsersLayout = () => {
    const { userId, type } = useParams()
    const location= useLocation()
    const { users } = useUser()

    return (
        <>
            <h1>Users Layout</h1>
            <NavLink
                to="/"
            >
                Main Page
            </NavLink>
            { userId ? (
                type === 'profile' ? (<UserPage/>) : ( type === 'edit' ? <EditUserPage/> : <Redirect to={ `/users/${userId}/profile` }/>)
            ) : <UsersListPage users={ users }/>}
        </>
    )
}

export default UsersLayout
