import { Input } from 'antd'
import { auth } from 'config/Firebase'
import { sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './_auth.scss'

const initialValue = {
  email: "",
}
export default function ForgotPassword() {
  //input values
  const [value, setValue] = useState(initialValue)
  const [isloading, setLoading] = useState(false)
  //handleChange
  const handleChange = (e) => {
    setValue(s => ({ ...s, [e.target.name]: e.target.value }))
  }
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    const { email } = value;
    setLoading(true)
    sendPasswordResetEmail(auth, email)
      .then((userCredential) => {
        window.toastify("Please check your email inbox", "info")
      })
      .catch((error) => {
        window.toastify(error.message, "error")
      });
    setLoading(false)

  }

  return (
    <>
      <div className="container auth mt-5">
        <div className="row g-0 ">
          <div className="col-12 col-md-8 col-lg-6 offset-0 offset-lg-1  shadow-lg">
            <div className="card rounded-0 text-center py-5  border-0">
              <h2>FORGOT PASSWORD</h2>
              <form className='my-5 w-75 mx-auto' onSubmit={handleSubmit} >
                <Input placeholder="Enter your email" className='py-2 border-0 border-bottom border-2 border-info rounded-0 shadow-none' name='email' onChange={handleChange} id="email" required="required" />
                <button className="btn btn-outline-info px-2 px-md-4 py-2 rounded-0 mt-5">
                  {isloading
                    ? <div className='spinner-border spinner-border-sm'></div>
                    : "FORGOT PASSWORD"
                  }
                </button>
              </form>
              <div className=' mt-3'>Do you know password?<Link className='text-dark fw-bold ms-2' to="/auth/login">Login</Link></div>
            </div>
          </div>
          <div className="col-4 col-md-4 d-none d-md-block">
            <img src="https://www.teahub.io/photos/full/95-955862_hd-seat-sofa-frame-walls-vintage-wedding-photography.jpg" className='w-100' alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
