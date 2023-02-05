import React, { useContext } from 'react'
import logo from 'assets/logo2.png'
import { Link } from 'react-router-dom'
import { ShoppingCartOutlined } from '@mui/icons-material'

import './_navbar.scss';
import { CartContext } from 'Context/CartContext';
export default function Navbar() {
  const { cartLength } = useContext(CartContext)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/"><img src={logo} alt="pic of logo" width="70" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 text-center  mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown mx-auto">
                <button className="btn btn-link nav-link dropdown-toggle text-decoration-none " role="button" data-bs-auto-close="false" data-bs-toggle="dropdown" aria-expanded="false">Products</button>
                <ul className="dropdown-menu ">
                  <li><Link className="dropdown-item  " to="/product/sofa">Sofa</Link></li>
                  <li><Link className="dropdown-item  " to="/product/table">Table</Link></li>
                  <li><Link className="dropdown-item  " to="/product/chair">Chair </Link></li>
                  <li><Link className="dropdown-item  " to="/product/bed">Bed</Link></li>
                  <li><Link className="dropdown-item  " to="/product/door">Door</Link></li>
                </ul>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/page">Page</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link " to="/blog">Blog</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link " to="/contact">Contact</Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input className="form-control bg-transparent border-0 border-secondary p-1 shadow-none border-bottom border-bottom-3 rounded-0" type="search" placeholder="Search Products" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-outline-secondary border-0 border-secondary border-bottom border-bottom-3 rounded-0" type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
          </div>
          <div className="extra-links ">
            <div className='account '>
              <Link className='nav-link mx-0 mx-md-3 me-2 me-md-3 ' to="/my-account">My Account</Link>
            </div>
            <div className='account me-3 '>
              <Link className="btn btn-info p-1 p-sm-2 position-relative text-white" to="/cart"><ShoppingCartOutlined/>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{backgroundColor:"#dc3545"}}>{cartLength}</span>                
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
