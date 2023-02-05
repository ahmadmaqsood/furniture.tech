import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Frontend from 'pages/frontend/Index'
import Auth from 'pages/auth/Index'
import MyAccount from 'pages/dashboard/index'
import { AuthContext } from 'Context/AuthContext'
import ScrollToTop from 'scrollTop/ScrollToTop';
import PrivateRouting from 'PrivateRouting'

export default function Index() {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/*' element={<Frontend />} />
          <Route path='/auth/*' element={!isAuthenticated ? <Auth /> : <Navigate to="/" />} />
          <Route path='/my-account/*' element={<PrivateRouting Component={MyAccount} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
