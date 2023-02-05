import React, { useEffect } from 'react'
import Picture from 'assets/image1.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos'


export default function BestFuture() {
    useEffect(()=>{
        AOS.init({duration:1000})
      },[])
    return (
        <>
            <div className="container-fluid mt-5 ">
                <div className="row g-0 row-cols-1 row-cols-md-2 py-5" >
                    <div className="col d-flex align-items-center" data-aos="fade-up" >
                        <img src={Picture} className="sofa w-100" height="auto" alt="" />
                    </div>
                    <div className="col bg-danger d-flex flex-column justify-content-center py-5 py-md-4 py-lg-0 px-3 px-md-5" data-aos="fade-down">
                        <h1 className='fw-bold w-50 mb-4'>BEST FUTURE MANUFACTURER</h1>
                        <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. </p>
                        <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                        <button className="btn btn-info text-start text-white px-2 px-md-5  py-3 rounded-0 me-auto mt-4">DISCOVER MORE</button>
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <h2 className='fw-bold my-5'>PRODUCTS YOU MAY LIKE</h2>
                <p className='w-75 px-0 px-md-5 mx-auto pb-0 pb-md-5 text-secondary my-4'>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra arnare, eros dolor interdum nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="row row-cols-1 row-cols-md-3 text-center px-0 px-lg-5 my-5" data-aos="fade-up" >
                    <div className="col mt-4 mt-md-0">
                        <div className="card rounded-0">
                            <img src="https://www.teahub.io/photos/full/347-3472722_comfortable-white-and-orange-chair-modern-chair-photography.jpg" className="card-img-top rounded-0" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title mt-2">Bly Microfiber/ Microsuede 56" Armless Loveseat</h6>
                                <h5 className='text-info'>$367</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-4 mt-md-0">
                        <div className="card rounded-0">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApWVsCYahW3c0s4wN0iEnzwvFyl_x1uQ1AkvwBPNL0inr87KOIRCwbH5jqiMFyslVdCg&usqp=CAU" className="card-img-top rounded-0" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title mt-2">Bly Microfiber/ Microsuede 56" Armless Loveseat</h6>
                                <h5 className='text-info'>$367</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-4 mt-md-0">
                        <div className="card rounded-0">
                            <img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8&w=1000&q=80" className="card-img-top rounded-0" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title mt-2">Bly Microfiber/ Microsuede 56" Armless Loveseat</h6>
                                <h5 className='text-info'>$367</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className="btn btn-outline-info text-start  px-3 px-md-5  py-3 rounded-0 me-auto mt-4" to="/discover-more">DISCOVER MORE</Link>
            </div>
        </>
    )
}
