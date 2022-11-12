import React from 'react'
import UsersList from "../components/usersList"
import { useUser } from "../hooks/useUsers"

const UsersListPage = () => {
    const { users } = useUser()

    return (
        <>
            <h1>User List Page</h1>
            <UsersList users={ users }/>
        </>
    )
}

export default UsersListPage
