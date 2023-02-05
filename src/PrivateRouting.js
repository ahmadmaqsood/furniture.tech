import Navbar from 'components/Header/Navbar-copy'
import { AuthContext } from 'Context/AuthContext'
import Login from 'pages/auth/Login'
import React, { useContext } from 'react'

export default function PrivateRouting(props) {
    const { isAuthenticated } = useContext(AuthContext)
    const { Component } = props
    if (!isAuthenticated) {
        return <>
            <Navbar />
            <Login />
        </>
    }
    return (
        <Component />
    )
}
