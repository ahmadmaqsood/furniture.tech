import Footer from 'components/Footer/Footer'
import NavbarCopy from 'components/Header/Navbar-copy'
import React, { useEffect } from 'react'
import Inspired from '../../../components/common/Inspired'
import Services from '../../../components/common/Services'
import Journey from './Journey'
import Lorum from './Lorum'
import TopWallpaper from '../../../components/common/Top-wallpaper'
import Aos from 'aos'
export default function Index() {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <>
      <NavbarCopy />
      <main>
        <TopWallpaper page={"ABOUT"} path={"About"} />
        <Lorum />
        <Journey />
        <Inspired data-aos="zoom-in-up"/>
        <Services />
      </main>
      <Footer />
    </>
  )
}
