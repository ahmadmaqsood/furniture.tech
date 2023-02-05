import React from 'react'
import logo from 'assets/logo2.png'
import './_footer.scss'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container-fluid footer-container">
          <div className="container text-secondary pt-5 pb-2">
            <div className="row my-5 px-4">
              <div className="col-12 col-md-4">
                <div> <img src={logo} alt="" /></div>
                <p className='mt-4 mb-5'>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra arnare, eros dolor interdum nulla.</p>
                <div>
                <i className="fa-brands text-white fs-5 p-2 me-2 rounded-circle border fa-facebook-f "></i>
                <i className="fa-brands text-white fs-5 p-2 mx-2 rounded-circle border fa-twitter"></i>
                <i className="fa-brands text-white fs-5  p-2 mx-2 rounded-circle border fa-pinterest-p"></i>
                </div>
              </div>
              <div className="col-6 col-md-3 mt-5 mt-md-0">
                <h5 className='text-white'>Quick Links</h5>
                <div className='mt-4'><Link className='text-decoration-none text-secondary '>Image Licensin</Link></div>
                <div><Link className='text-decoration-none text-secondary '>Style Guide</Link></div>
                <div><Link className='text-decoration-none text-secondary '>Privacy Policy</Link></div>
              
              </div>
              <div className="col-6 col-md-3 mt-5 mt-md-0">
                <h5 className='text-white'>Shop Chatagory</h5>
                <div className='mt-4'><Link className='text-decoration-none text-secondary '>Image Licensin</Link></div>
                <div><Link className='text-decoration-none text-secondary '>Style Guide</Link></div>
                <div><Link className='text-decoration-none text-secondary '>Privacy Policy</Link></div>
              </div>
              <div className="col-6 col-md-2 mt-5 mt-md-0">
                <h5 className='text-white'>Partners</h5>
                <div className='mt-4'><Link className='text-decoration-none text-secondary '>Image Licensin</Link></div>
                <div><Link className='text-decoration-none text-secondary '>Style Guide</Link></div>
                <div><Link className='text-decoration-none text-secondary '>Privacy Policy</Link></div>
              </div>
            </div><hr />
            <div className="row">
              <div className="col text-center">
                <p>Copyright &copy; 2023. All rights reserved.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
