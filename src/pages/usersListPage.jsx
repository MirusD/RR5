import React from 'react'
import PropTypes from "prop-types"
import UsersList from "../components/usersList"

const UsersListPage = ({ users }) => {
    return (
        <>
            <h1>User List Page</h1>
            <UsersList users={ users }/>
        </>
    )
}

UsersListPage.propTypes = {
    users: PropTypes.array
}

export default UsersListPage
