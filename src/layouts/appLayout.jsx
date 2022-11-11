import React from 'react'
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import UserProvider from "../hooks/useUsers"

const AppLayout = ({ children }) => {
    return (
        <UserProvider>
            <h1>App Layout</h1>
            <NavLink
                aria-current="page"
                to="/users"
            >
                Users list Page
            </NavLink>
            { children }
        </UserProvider>
    )
}

AppLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default AppLayout
