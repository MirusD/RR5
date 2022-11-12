import React from 'react'
import { Outlet, NavLink } from "react-router-dom"

const UsersLayout = () => {
    return (
        <>
            <h1>Users Layout</h1>
            <NavLink
                to="/"
            >
                Main Page
            </NavLink>
            <Outlet/>
        </>
    )
}

export default UsersLayout
