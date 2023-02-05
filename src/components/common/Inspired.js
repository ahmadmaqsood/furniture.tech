import React, { useEffect } from 'react'
import sofa from 'assets/image2.jpg'
import sofa1 from 'assets/image3.jpg'
import { Link } from 'react-router-dom'
import Aos from 'aos'
export default function Inspired() {
    useEffect(()=>{
        Aos.init({duration:1000})
      },[])
  
    return (
    <>
        <div className="container-fluid my-5 pb-5" data-aos="zoom-in-up">
            <div className="row g-0 ">
                <div className="col-12 col-md-3  px-3 px-lg-5">
                    <div><i className="fa-brands text-info fa-instagram"></i></div>
                    <h2 className='fw-bold my-4'>GET INSPIRED WITH INSTAGRAM</h2>
                <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>        
                <Link className="btn btn-outline-info text-start px-3 px-md-2 px-lg-3 px-xl-4 py-3 rounded-0 me-auto mt-4" to="/discover-more">DISCOVER MORE</Link>            
                </div>
                <div className="col-6 col-md-4 d-flex align-items-center mt-5">
                    <img src={sofa}  width="100%" alt="" />
                </div>
                <div className="col-6 col-md-4 d-flex align-items-center mt-5">
                    <img src={sofa1} width="100%" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}
