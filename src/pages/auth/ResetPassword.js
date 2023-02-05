import { Input, Space } from 'antd'
import { auth } from 'config/Firebase'
import { confirmPasswordReset } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './_auth.scss'

const initialValue = {
  password: "",
  confirmPassword: "",
}
export default function ResetPassword() {
  //input values
  const [value, setValue] = useState(initialValue)
  const [isLoading, setLoading] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  //handleChange
  const handleChange = (e) => {
    setValue(s => ({ ...s, [e.target.name]: e.target.value }))
  }
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    const { password, confirmPassword } = value;
    if (password !== confirmPassword) {
      return window.toastify("Password doesn't match!", "error")
    }
    const queryPerms = new URLSearchParams(location.search)
    const oobCode = queryPerms.get("oobCode")
    setLoading(true)
    confirmPasswordReset(auth, oobCode, confirmPassword).then(() => {
      window.toastify("Password changed", "success")
      navigate("/auth/login")
    }).catch((error) => {
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
              <h2>RESET PASSWORD</h2>
              <form className='my-5 w-75 mx-auto' onSubmit={handleSubmit} >
                <Space direction="vertical" className='w-100'>
                  <Input.Password className='py-2 border-0 border-bottom border-2 border-info rounded-0 shadow-none' placeholder="Password" name='password' onChange={handleChange} id="password" required="required" />
                  <Input.Password className='py-2 border-0 border-bottom border-2 border-info rounded-0 shadow-none mt-3' placeholder="Confirm Password" name='confirmPassword' onChange={handleChange} id="password" required="required" />
                </Space>
                <button className="btn btn-outline-info px-2 px-md-4 py-2 rounded-0 mt-5" disabled={isLoading}>
                  {isLoading
                    ? <div className='spinner-border spinner-border-sm'></div>
                    : "RESET PASSWORD"
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
