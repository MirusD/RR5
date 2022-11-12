import React from "react"
import { Navigate, useParams } from "react-router-dom";

const Redirect = ({ to }) => {
    const { userId } = useParams()
    return (<Navigate to={`/users/${userId}/${to}`}/>)
}

export default Redirect
