import React, { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore/lite';
import { firestore } from 'config/Firebase';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';

const initialState = {
    message: "",
    name: "",
    email: "",
    subject: "",
}
export default function GetInTouch() {
    const [state, setState] = useState(initialState)
    const [isLoading, setLoading] = useState(false)

    //handlechange
    const handlechange = (e) => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    //handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault()
        state.date = serverTimestamp()
        state.id = window.getRandomId()
        // this is validation for email
        var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!state.email.match(validRegex)) {
            return window.toastify("Please enter valid email", "error")
        }
        setLoading(true)
        try {
            await addDoc(collection(firestore, "contact-us"), state);
            window.toastify("Message sent", "success")
        } catch (e) {
            window.toastify("Something went wrong", "error")
        }
        setLoading(false)
        setState(initialState)
    }
    return (
        <>
            <div className="container mt-4 px-2 px-md-5">
                <h2 className='fw-bold'>Get in Touch</h2>
                <div className="row">
                    <div className="col-12 col-lg-8 py-4 mb-5 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" name='message' placeholder='Enter Message' cols="2" rows="6" value={state.message} onChange={handlechange}></textarea>
                            </div>
                            <div className="row row-cols-1 row-cols-md-2 my-4">
                                <div className="col ">
                                    <input type="text" className="form-control rounded-0 py-2" id="exampleFormControlInput1" name='name' minLength="3" placeholder="Enter Your Name" value={state.name} onChange={handlechange}></input>
                                </div>
                                <div className="col mt-4 mt-md-0">
                                    <input type="email" className="form-control rounded-0 py-2" id="exampleFormControlInput1" name='email' placeholder="Enter Your Email" value={state.email} onChange={handlechange}></input>
                                </div>
                            </div>
                            <div className='my-4'>
                                <input type="text" className="form-control rounded-0 py-2" id="exampleFormControlInput1" name='subject' placeholder="Enter Subject" value={state.subject} onChange={handlechange}></input>
                            </div>
                            <button className="btn btn-outline-info py-2 px-5 rounded-0" disabled={isLoading}>
                                {isLoading
                                    ? <div className='spinner-border spinner-border-sm'></div>
                                    : "SEND"
                                }
                            </button>
                        </form>
                    </div>
                    {/* second col */}
                    <div className="col text-secondary px-5 ">
                        <div className="row py-3">
                            <div className="col-12 col-md-2"><HouseOutlinedIcon className='fs-1' /></div>
                            <div className="col-12 col-md-10 mt-3 mt-md-0">
                                <h6 className='text-dark'>Saylani Mass It Faisalabad</h6>
                                <p>Thu-Fri 6pm to 8pm</p>
                            </div>
                        </div>
                        <div className="row py-3">
                            <div className="col-12 col-md-2"><PhoneIphoneOutlinedIcon className='fs-1' /></div>
                            <div className="col-12 col-md-10 mt-3 mt-md-0">
                                <h6 ><a className='text-decoration-none text-dark' href="tel:+923007588836">+92 300 7588836</a></h6>
                                <p>Thu-Fri 6pm to 8pm</p>
                            </div>
                        </div>
                        <div className="row py-3">
                            <div className="col-12 col-md-2"><EmailOutlinedIcon className='fs-1' /></div>
                            <div className="col-12 col-md-10 mt-3 mt-md-0">
                                <h6><a className='text-decoration-none text-dark' href="mailto:usmanarif2913@gmail.com">usmanarif2913 @gmail.com</a></h6>
                                <p>Send us your query anytime</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
