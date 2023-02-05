import Footer from 'components/Footer/Footer'
import Navbar from 'components/Header/Navbar-copy'
import React from 'react'
import TopWallpaper from '../../../components/common/Top-wallpaper'

export default function Index() {
  return (
    <>
      <Navbar />
      <main>
        <TopWallpaper page={"PAGE"} path={"Page"} />
        <h1 className="text-center mt-5 pt-5">This is a page</h1>
      </main>
      <Footer />
    </>
  )
}
