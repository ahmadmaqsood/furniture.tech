import React from 'react'
import { Link } from 'react-router-dom'

export default function TopPick() {
    return (
        <>
            <div className="container text-center">
                <h2 className='fw-bold my-4'>TOP PICK</h2>
                <p className='w-75 mx-auto px-0 px-md-5 pb-0 pb-md-5 text-secondary my-4'>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra arnare, eros dolor interdum nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit explicabo reiciendis perferendis officia quaerat suscipit hic. Vel ratione, id architecto ducimus enim libero blanditiis incidunt illum quia aliquam maiores ipsa?</p>
                <div className="row row-cols-1 row-cols-md-3 text-center px-0 px-lg-5 my-5">
                    <div className="col mt-4 mt-md-0">
                        <div className="card rounded-0">
                            <img src="https://www.wallpapers4u.org/wp-content/uploads/chair_green_room_69978_1920x1080.jpg" className="card-img-top rounded-0" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title mt-2">Bly Microfiber/ Microsuede 56" Armless Loveseat</h6>
                                <h5 className='text-info'>$367</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-4 mt-md-0">
                        <div className="card rounded-0">
                            <img src="https://e0.pxfuel.com/wallpapers/816/48/desktop-wallpaper-3d-couch-interior-design-other-in-jpg-format.jpg" className="card-img-top rounded-0" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title mt-2">Bly Microfiber/ Microsuede 56" Armless Loveseat</h6>
                                <h5 className='text-info'>$367</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-4 mt-md-0">
                        <div className="card rounded-0">
                            <img src="https://5.imimg.com/data5/SELLER/Default/2021/11/XG/OP/BS/46781793/new-product-500x500.jpeg" className="card-img-top rounded-0" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title mt-2">Bly Microfiber/ Microsuede 56" Armless Loveseat</h6>
                                <h5 className='text-info'>$367</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className="btn btn-outline-info text-start  px-3 px-md-5  py-3 rounded-0 me-auto mt-4 mb-5" to="/discover-more">DISCOVER MORE</Link>
            </div>


        </>
    )
}
