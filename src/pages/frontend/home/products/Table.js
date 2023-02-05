import React from 'react'
import { Link } from 'react-router-dom'

export default function Table(props) {
    return (
        <>
            <Link to="/product/table" className="text-decoration-none text-dark">
                <div className={props.className}>
                    <div className="col mt-4 mt-md-0">
                        <div className="card border-0 shadow">
                            <div className="card-image">
                                <img src="https://media.istockphoto.com/id/1250026682/photo/coffee-table-isolated-on-white-background-with-clipping-path-included-3d-render.jpg?b=1&s=612x612&w=0&k=20&c=61hoW8FS0NdubFBflooJiYZOUui_t57698CwPP668pk=" className="card-img-top img-fluid" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Stlish table</h5>
                                <h4 className="card-text text-info mt-3">$150</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-4 mt-md-0">
                        <div className="card border-0 shadow">
                            <div className="card-image">
                                <img src="https://target.scene7.com/is/image/Target/GUEST_fee1d7f8-316f-4981-82ff-a41e4cb76122" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Stlish table</h5>
                                <h4 className="card-text text-info mt-3">$150</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-4 mt-md-0">
                        <div className="card border-0 shadow">
                            <div className="card-image">
                                <img src="https://thumbs.dreamstime.com/b/wooden-dining-table-chairs-isolated-white-background-image-84995256.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Stlish table</h5>
                                <h4 className="card-text text-info mt-3">$150</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
