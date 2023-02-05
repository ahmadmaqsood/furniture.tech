import { Password } from '@mui/icons-material'
import { Divider } from 'antd'
import { auth, fbProvider, firestore, provider } from 'config/Firebase'
import { AuthContext } from 'Context/AuthContext'
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore/lite'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input, Space } from 'antd';
import './_auth.scss'

const initialValue = {
  email: "",
  password: "",
  confirmPassword: ""
}
export default function Login() {
  const { dispatch } = useContext(AuthContext)
  const [isLoading, setLoading] = useState(false)
  //input values
  const [value, setValue] = useState(initialValue)

  //handleChange
  const handleChange = (e) => {
    setValue(s => ({ ...s, [e.target.name]: e.target.value }))
  }
  //handle submit
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password, confirmPassword } = value;
    if (password !== confirmPassword) {
      window.toastify("Password doesn't match!", "error")
      return
    }
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, confirmPassword)
      .then((userCredential) => {
        // Signed in 
        dispatch({ type: "LOGIN" })
        const user = userCredential.user;
        setDocument(user)
        navigate("/my-account")
      })
      .catch((error) => {
        window.toastify(error.message, "error")
      });
  }
  //setting document
  const setDocument = async (user) => {
    try {
      await addDoc(collection(firestore, "users"), {
        email: user.email,
        uid: user.uid,
        date: serverTimestamp()
      });
    } catch (e) {
      window.toastify(e.message, "error")
    }
    setLoading(false)
  }
  //handleGoogle
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
        dispatch({ type: "LOGIN" })
        window.toastify("Registered successfully!", "success")
        navigate("/my-account")
      }).catch((error) => {
        window.toastify(error.message, "error")
      });
  }
  //handleFacebook
  const handleFacebook = () => {
    signInWithPopup(auth, fbProvider)
      .then((result) => {
        const user = result.user;
        dispatch({ type: "LOGIN" })
        window.toastify("Registered successfully!", "success")
        navigate("/my-account")
        const credential = FacebookAuthProvider.credentialFromResult(result);
      })
      .catch((error) => {
        window.toastify("Something went wrong", "error")
      });
  }


  return (
    <>
      <div className="container auth py-5">
        <div className="row g-0 ">
          <div className="col-12 col-md-8 col-lg-6 offset-0 offset-lg-1  shadow-lg">
            <div className="card rounded-0 text-center py-5  border-0">
              <h2>REGISTER</h2>
              <form className='mt-5 mb-4 w-75 mx-auto' onSubmit={handleSubmit} >
                <Input placeholder="Enter your email" className='py-2 border-0 border-bottom border-2 border-info rounded-0 shadow-none' name='email' onChange={handleChange} id="email" required="required" />
                <Space direction="vertical" className='w-100'>
                  <Input.Password className='py-2 border-0 border-bottom border-2 border-info rounded-0 shadow-none mt-4' placeholder="Password" name='password' onChange={handleChange} id="password" required="required" />
                  <Input.Password className='py-2 border-0 border-bottom border-2 border-info rounded-0 shadow-none mt-3' placeholder="Confirm Password" name='confirmPassword' onChange={handleChange} id="" required="required" />
                </Space>
                <div className='text-start mt-5'>Already have account?<Link className='text-dark fw-bold ms-2' to="/auth/login">Login</Link></div>
                <button className="btn btn-outline-info w-75 py-2 rounded-0 mt-5" disabled={isLoading}>
                  {isLoading
                    ? <div className='spinner-border spinner-border-sm'></div>
                    : "REGISTER"
                  }
                </button>
              </form>
              <Divider className='border-dark px-5'>Or</Divider>
              <div className="row row-cols-1">
                <div className="col ">
                  <button className="btn btn-info  px-4 text-white " onClick={handleGoogle}>Continue with Google <i className="fa-brands fa-google"></i></button>
                </div>
                <div className="col mt-3 ">
                  <button className="btn btn-info  px-4 text-white " onClick={handleFacebook}>Continue with Facebook <i className="fa-brands fa-facebook-f"></i></button>
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
