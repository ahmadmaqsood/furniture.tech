import Footer from 'components/Footer/Footer'
import Navbar from 'components/Header/Navbar'
import React from 'react'
import '../_frontend.scss'
import BestFuture from './BestFuture'
import Inspired from '../../../components/common/Inspired'
import Products from './Products'
import Services from '../../../components/common/Services'
import TopPick from './TopPick'
export default function Home() {
  return (
    <>
      <Navbar />
      <main>

        <div className="container-fluid">
          <div className="row">
            <div className="col coll">
              <div className="div2">
              </div>
              <div className="div3 d-flex align-items-center">
                <div className=' bg-white sale'>
                  <h5 className='text-secondary'>70%  SALE OFF</h5>
                  <h1 className=''>FURNITURE AT COST</h1>
                  <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra arnare, eros dolor interdum nulla.</p>
                  <button className="btn btn-info px-2 px-md-5  py-2 py-md-3 rounded-0 mt-4 text-white">DISCOVER MORE</button>

                </div>
              </div>
            </div>
          </div>
        </div>
        <Products />
        <BestFuture />
        <Inspired />
        <TopPick />
        <Services />
 
      </main>
      <Footer />


    </>
  )
}
