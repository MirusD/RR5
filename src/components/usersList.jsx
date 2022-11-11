import React from 'react'
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const UsersList = ({ users }) => {
    return (
        <ul>
            {users.map(({_id: id}) => (
                <li key={id}>
                    <NavLink
                        to={`/users/${id}`}
                    >
                        User {id}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

UsersList.propTypes = {
    users: PropTypes.array
}

export default UsersList
