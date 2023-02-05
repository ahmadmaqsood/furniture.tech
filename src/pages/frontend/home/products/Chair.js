import React from 'react'
import { Link } from 'react-router-dom'

export default function Chair(props) {
    return (
        <>
            <Link to="/product/chair" className="text-decoration-none text-dark">
            <div className={props.className} >
                <div className="col mt-4 mt-md-0">
                    <div className="card border-0 shadow">
                        <div className="card-image">
                            <img src="https://media.istockphoto.com/id/1334037436/photo/wooden-chair-isolated-on-white-with-clipping-path.jpg?b=1&s=170667a&w=0&k=20&c=QRc0iRt7B0o-kJM_qAHbMXjahg16vIPzpz0arcupEVw=" className="card-img-top img-fluid" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Beautiful Chairs</h5>
                            <h4 className="card-text text-info mt-3">$100</h4>
                        </div>
                    </div>
                </div>
                <div className="col mt-4 mt-md-0">
                    <div className="card border-0 shadow">
                        <div className="card-image">
                            <img src="https://cdn.shopify.com/s/files/1/1171/5940/products/Chair_Concord_Oak_85187_1024x.jpg?v=1604771318" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Beautiful Chairs</h5>
                            <h4 className="card-text text-info mt-3">$100</h4>
                        </div>
                    </div>
                </div>
                <div className="col mt-4 mt-md-0">
                    <div className="card border-0 shadow">
                        <div className="card-image">
                            <img src="https://media.istockphoto.com/id/869078270/photo/armchair-isolated-on-white-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=BSBGae3sdyCHLH911Iv3mplZFoCbjq22ryBMqGpC5Rk=" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Beautiful Chairs</h5>
                            <h4 className="card-text text-info mt-3">$100</h4>
                        </div>
                    </div>
                </div>
            </div>
</Link>
        </>
    )
}
