import React, {useContext, useState, useEffect, useReducer} from 'react'
import PropTypes from 'prop-types'
import userServices from '../services/user.services'


const UserContext = React.createContext()

export const useUser = () => {
    return useContext(UserContext)
}

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState()
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        if (error !== null) {
            setError(null)
        }
    }, [error])

    async function getUsers() {
        try {
            const content = await userServices.get()
            setUsers(content)
            setLoading(false)
        } catch (error) {
            errorCatcher(error)
        }
    }

    function errorCatcher(error) {
        const { message } = error.response.data
        setError(message)
    }

    function getUserById(userId) {
        return users.find((u) => u._id === userId)
    }

    return (
        <UserContext.Provider value={{ users, getUserById, isLoading }}>
            {!isLoading ? children : <h1>I get users. Please wait...</h1>}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default UserProvider
