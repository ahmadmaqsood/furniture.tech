import Services from 'components/common/Services'
import TopWallpaper from 'components/common/Top-wallpaper'
import Footer from 'components/Footer/Footer'
import Navbar from 'components/Header/Navbar-copy'
import React from 'react'
import Bed from './product/Bed'
import Chair from './product/Chair'
import Door from './product/Door'
import Sofa from './product/Sofa'

export default function DiscoverMore() {
    return (
        <>
            <Navbar />
            <TopWallpaper page={"PRODUCTS"} path={"Products"} />
            {/* Don't affraid to see this page bro actually you can see that there are some buttons of "Discover More" in home page. When you will click that button you will see this page */}
            <div className="container">
                <div className="row pt-5 ">
                    <div className="col mt-0 mt-md-5">
                        <h3 className='text-center border-bottom py-3'>BEDS</h3>
                        <Bed />
                        <h3 className='text-center border-bottom py-3'>SOFAS</h3>
                        <Sofa />
                        <h3 className='text-center border-bottom py-3'>CHAIRS</h3>
                        <Chair />
                        <h3 className='text-center border-bottom py-3'>DOORS</h3>
                        <Door />
                    </div>
                </div>
            </div>
            <Services />
            <Footer />
        </>
    )
}
