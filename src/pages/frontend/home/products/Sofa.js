import React from 'react'
import { Link } from 'react-router-dom'
export default function Sofa(props) {
    return (
        <>
            <Link to="/product/sofa" className="text-decoration-none text-dark">
                <div className={props.className}>
                    <div className="col mt-4 mt-md-0">
                        <div className="card border-0 shadow">
                            <div className="card-image">
                                <img src="https://media.istockphoto.com/id/180696562/photo/white-fabric-sofa-with-clipping-path.jpg?b=1&s=170667a&w=0&k=20&c=MgqKTIkDwDFtsmBbJM1uD-pWctgXX0uDwa3mrCgBqe4=" className="card-img-top img-fluid" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">3 Seats White Sofa</h5>
                                <h4 className="card-text text-info mt-3"> $367 </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-4 mt-md-0">
                        <div className="card border-0 shadow">
                            <div className="card-image">
                                <img src="https://media.istockphoto.com/id/172130617/photo/white-leather-sofa.jpg?b=1&s=170667a&w=0&k=20&c=x0PMyYCK7pdUORoHJyK-8Ld7GGDO_IkOApFdWU1f94A=" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">2 Seats White Sofa </h5>
                                <h4 className="card-text text-info mt-3"> $367 </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-4 mt-md-0">
                        <div className="card border-0 shadow">
                            <div className="card-image">
                                <img src="https://5.imimg.com/data5/SELLER/Default/2021/9/LC/QL/SN/108893978/chesterfield-single-seater-sofa-chair-500x500.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">1 Seat White Sofa</h5>
                                <h4 className="card-text text-info mt-3"> $367 </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
