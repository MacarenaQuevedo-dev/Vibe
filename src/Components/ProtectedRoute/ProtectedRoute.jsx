import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import { Navigate } from 'react-router'

export default function ProtectedRoute({ children }) {

    const { user } = useContext(UserContext)

    if (!user) {
        return <Navigate to="/login" />
    }

    return children
}