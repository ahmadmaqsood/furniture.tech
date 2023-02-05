import React from 'react'
import { Link } from 'react-router-dom'

export default function Bed(props) {
    return (
        <>
            <Link to="/product/bed" className="text-decoration-none text-dark">
                <div className={props.className} >
                    <div className="col mt-4 mt-md-0">
                        <div className="card border-0 shadow">
                            <div className="card-image">
                                <img src="https://media.istockphoto.com/id/1284744586/photo/coastal-bedroom-interior-mockup-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=iVEJNgoJrKCGQbAJGeVbg_oTPZbc1Zhdjqd6cs2Sh9A=" className="card-img-top w-100" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Stylish White Colored Bed</h5>
                                <h4 className="card-text text-info mt-3">$1100</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-4 mt-md-0">
                        <div className="card border-0 shadow">
                            <div className="card-image">
                                <img src="https://media.istockphoto.com/id/1268584721/photo/white-cozy-farmhouse-bedroom-interior-wall-mockup.jpg?b=1&s=170667a&w=0&k=20&c=7c2P3oHhdbq1TURUVJanISInloH9X6O8o3cP1kDe_ow=" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Stylish White Colored Bed</h5>
                                <h4 className="card-text text-info mt-3">$1100</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-4 mt-md-0">
                        <div className="card border-0 shadow">
                            <div className="card-image">
                                <img src="https://www.shutterstock.com/image-photo/comfortable-white-bed-room-260nw-407959678.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Stylish White Colored Bed</h5>
                                <h4 className="card-text text-info mt-3">$1100</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
