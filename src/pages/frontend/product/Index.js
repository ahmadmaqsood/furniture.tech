import React from 'react'
import Footer from 'components/Footer/Footer'
import Navbar from 'components/Header/Navbar-copy'
import { Route, Routes } from 'react-router-dom'
import Bed from './Bed'
import Chair from './Chair'
import Door from './Door'
import Sofa from './Sofa'
import Table from './Table'

export default function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/sofa' element={<Sofa />} />
          <Route path='/table' element={<Table />} />
          <Route path='/chair' element={<Chair />} />
          <Route path='/bed' element={<Bed />} />
          <Route path='/door' element={<Door />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
