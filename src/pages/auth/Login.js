import React, { useState } from 'react'
import { Divider } from 'antd'
import { auth, fbProvider, provider } from 'config/Firebase'
import { AuthContext } from 'Context/AuthContext'
import { FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './_auth.scss'

import { Input, Space } from 'antd';
const initialValue = {
  email: "",
  password: ""
}
export default function Login() {
  //input values
  const { user, dispatch } = useContext(AuthContext)
  const [value, setValue] = useState(initialValue)
  const [isloading, setLoading] = useState(false)
  const navigate = useNavigate()

  //handleChange
  const handleChange = (e) => {
    setValue(s => ({ ...s, [e.target.name]: e.target.value }))
  }
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = value;
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch({ type: "LOGIN", payload: user })
        window.toastify("Logged in successfully", "success")
        navigate("/")
      })
      .catch((error) => {
        window.toastify(error.message, "error")
      });
    setLoading(false)
  }
  //handleGoogle
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
        dispatch({ type: "LOGIN", payload: user })
        window.toastify("Registered successfully!", "success")
        navigate("/")
      }).catch((error) => {
        window.toastify(error.message, "error")
      });
  }
  //handleFacebook
  const handleFacebook = () => {
    signInWithPopup(auth, fbProvider)
      .then((result) => {
        const user = result.user;
        dispatch({ type: "LOGIN", payload: user })
        window.toastify("Registered successfully!", "success")
        navigate("/")
        const credential = FacebookAuthProvider.credentialFromResult(result);
      })
      .catch((error) => {
        window.toastify("Something went wrong", "error")
      });
  }


  return (
    <>
      <div className="container auth mt-5">
        <div className="row g-0 ">
          <div className="col-12 col-md-8 col-lg-6 offset-0 offset-lg-1  shadow-lg">
            <div className="card rounded-0 text-center py-5  border-0">
              <h2>WELOME BACK</h2>
              <form className='mt-5 mb-2 w-75 mx-auto' onSubmit={handleSubmit} >
                <Input placeholder="Enter your email" className='py-2 border-0 border-bottom border-2 border-info rounded-0 mb-4 shadow-none' name='email' onChange={handleChange} id="email" required="required" />
                <Space direction="vertical" className='w-100'>
                  <Input.Password className='py-2 border-0 border-bottom border-2 border-info rounded-0 shadow-none' placeholder="Enter your password" name='password' onChange={handleChange} id="password" required="required" />
                </Space>
                <div className='text-start mt-5 '>Forgot Password?<Link className='ms-2 text-dark fw-bold' to="/auth/forgot-password">click here</Link></div>
                <button className="btn btn-outline-info w-75 py-2 rounded-0 mt-5" disabled={isloading} >
                  {isloading
                    ? <div className='spinner-border spinner-border-sm'></div>
                    : "LOGIN"
                  }
                </button>
              </form>
              <div className=' my-3 '>Don't have account?<Link className='text-dark fw-bold ms-2' to="/auth/register">Register</Link></div>
              <Divider className='border-dark px-5'>Or</Divider>


              <div className="row row-cols-1">
                <div className="col">
                  <button className="btn btn-info px-4 text-white " onClick={handleGoogle}>Continue with Google <i className="fa-brands fa-google"></i></button>
                </div>
                <div className="col mt-3">
                  <button className="btn btn-info px-4 text-white " onClick={handleFacebook}>Continue with Facebook <i className="fa-brands fa-facebook-f"></i></button>
                </div>
              </div>
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
