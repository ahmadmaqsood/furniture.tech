import Footer from 'components/Footer/Footer'
import Navbar from 'components/Header/Navbar-copy'
import React from 'react'
import TopWallpaper from '../../../components/common/Top-wallpaper'
import GetInTouch from './GetInTouch'
import Map from './Map'

export default function Index() {
  return (
    <>
      <Navbar />
      <main>
        <TopWallpaper page={"CONTACT"} path={"Contact"} />
        <Map />
        <GetInTouch />
      </main>
      <Footer />
    </>
  )
}
