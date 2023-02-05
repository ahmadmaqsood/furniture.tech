import React from 'react'
import { Link } from 'react-router-dom'

export default function Door(props) {
    return (
        <>
            <Link to="/product/door" className="text-decoration-none text-dark">
                <div className={props.className} >
                    <div className="col mt-4 mt-md-0">
                        <div className="card shadow border-0">
                            <div className="card-image">
                                <img src="https://media.istockphoto.com/id/173201523/photo/wooden-interior-door-with-handle.jpg?b=1&s=170667a&w=0&k=20&c=UhHyvzewPctsz3hV5ob6SX5FwJx8hvz7rCaA_vY0XnA=" className="card-img-top img-fluid" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Stylish Wooden Doors</h5>
                                <h4 className="card-text text-info mt-3">$100</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-4 mt-md-0">
                        <div className="card shadow border-0">
                            <div className="card-image">
                                <img src="https://media.istockphoto.com/id/1303044148/photo/two-closed-red-doors-and-one-open-door-isolated-on-a-white-background-creative-glamorous.jpg?b=1&s=170667a&w=0&k=20&c=OyPGO1yHzP-PBNWw76JiHSilvCVmnK0fkqRwU5mdh6A=" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Stylish Wooden Doors</h5>
                                <h4 className="card-text text-info mt-3">$100</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-4 mt-md-0">
                        <div className="card shadow border-0">
                            <div className="card-image">
                                <img src="https://images.unsplash.com/photo-1537199322506-85bfd51c0601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvb3J8ZW58MHx8MHx8&w=1000&q=80" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Stylish Wooden Doors</h5>
                                <h4 className="card-text text-info mt-3">$100</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
