import Navbar from 'components/Header/Navbar-copy'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ForgotPassword from './ForgotPassword'
import Login from './Login'
import Register from './Register'
import ResetPassword from './ResetPassword'

export default function Index() {
  return (
    <>
    <Navbar/>
    <main>      
        <Routes>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='forgot-password' element={<ForgotPassword/>}/>
            <Route path='reset-password' element={<ResetPassword/>}/>
        </Routes>
    </main>
    </>
  )
}
