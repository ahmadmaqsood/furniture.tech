import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../_frontend.scss';
import Bed from './products/Bed';
import Chair from './products/Chair';
import Door from './products/Door';
import Sofa from './products/Sofa';
import Table from './products/Table';
export default function Products() {
    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }

    return (
        <>
            <div className="container text-center products">
                <div className="row ">
                    <h2 className='fw-bold'>POPULAR PRODUCTS</h2>
                    <p className='w-75 mx-auto px-0 px-md-5 text-secondary pb-4 my-5 paragraph'>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra arnare, eros dolor interdum nulla. Lorem ipsum dolor sit amet consectetur</p>
                    <div className="products-items">
                        <ul className="border-bottom border-2">
                            <div className="row row-cols-3 row-cols-md-5">
                                <div className="col py-3">
                                    <li className={toggle === 1 ? "active" : ""}>
                                        <Link className="nav-link fw-bold" onClick={() => toggleTab(1)}>Sofa</Link>
                                    </li>
                                </div>
                                <div className="col py-3 ">
                                    <li className={toggle === 2 ? "active" : ""}>
                                        <Link className="nav-link fw-bold" onClick={() => toggleTab(2)}>Table</Link>
                                    </li>
                                </div>
                                <div className="col py-3">
                                    <li className={toggle === 3 ? "active" : ""}>
                                        <Link className="nav-link fw-bold" onClick={() => toggleTab(3)}>Chair</Link>
                                    </li>
                                </div>
                                <div className="col py-3 offset-1 offset-md-0  text-center ">
                                    <li className={toggle === 4 ? "active" : ""}>
                                        <Link className="nav-link fw-bold" onClick={() => toggleTab(4)}>Bed</Link>
                                    </li>
                                </div>
                                <div className="col py-3 offset-1 offset-md-0 text-center">
                                    <li className={toggle === 5 ? "active" : ""}>
                                        <Link className="nav-link fw-bold" onClick={() => toggleTab(5)}>Doors</Link>
                                    </li>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <Sofa className={toggle === 1 ? "row row-cols-1 row-cols-md-3 mx-auto active-content" : "row row-cols-1 row-cols-md-3 card-row"} />
                    <Table className={toggle === 2 ? "row row-cols-1 row-cols-md-3 mx-auto active-content" : "row row-cols-1 row-cols-md-3 card-row"} />
                    <Chair className={toggle === 3 ? "row row-cols-1 row-cols-md-3 mx-auto active-content" : "row row-cols-1 row-cols-md-3 card-row"} />
                    <Bed className={toggle === 4 ? "row row-cols-1 row-cols-md-3 mx-auto active-content" : "row row-cols-1 row-cols-md-3 card-row"} />
                    <Door className={toggle === 5 ? "row row-cols-1 row-cols-md-3 mx-auto active-content" : "row row-cols-1 row-cols-md-3 card-row"} />
                </div>
            </div>
        </>
    )
}
