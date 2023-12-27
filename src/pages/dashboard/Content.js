import React, { useContext, useEffect, useState } from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import './_dashboard.scss'
import { updateProfile } from 'firebase/auth';
import { auth, firestore, storage } from 'config/Firebase';
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, where } from 'firebase/firestore/lite';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { Progress, Space } from 'antd';
import { AuthContext } from 'Context/AuthContext';

const initialState = {
    fullName: "",
    phone: "",
    address: "",
    gender: "",
    dateOfBirth: "",
    // imageURL: "",
}

export default function Content() {
    const {setCurrentUser}=useContext(AuthContext)
    const [state, setState] = useState(initialState)
    //getting data   
    const [ourUser, setOurUser] = useState({})
    const [showUser, setShowUsers] = useState({})
    const [documents, setDocuments] = useState([])
    const [progress, setProgress] = useState(0)
    // loading states0
    const [isLoading, setLoading] = useState(false)
    const [imgLoading, setImgLoading] = useState(false)
    //image taking 
    const [file, setFile] = useState({})


    //useEffect
    useEffect(() => {
        setShowUsers(auth.currentUser)
        gettingData()
    }, [ourUser, documents])

    //handleChange function for other
    const handleChange = (e) => {
        setState((s) => ({ ...s, [e.target.name]: e.target.value }))
    }
    //handleChange function for profile picture
    const handleChangeFile = (e) => {
        let file = e.target.files[0]
        if (file && file.size > 5000000) {
            return window.toastify("Please choose file size less then 5MB", "error")
        }
        if (!file) {
            return window.toastify("File not found", "error")
        }

        setFile(file)
    }

    //handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        let { fullName } = state;

        fullName = fullName.trim()
        if (fullName.length < 3) {
            return window.toastify("Please enter minimun 3 characters in name", "error")
        }
        var data = {}
        //this is firestorage section to get image from user and set in auth.currentUser
        if (file.name == undefined) {
            return window.toastify("Please re-confirm your profile photo", "error")
        }
        const fileExt = file.name.split('.').pop();
        const imagesRef = ref(storage, `images/${window.getRandomId()}.${fileExt}`)
        const uploadTask = uploadBytesResumable(imagesRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                setImgLoading(true)
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress)
                setTimeout(() => {
                    setImgLoading(false)
                }, 1000);
            },
            (error) => {
                window.toastify(error.message, "error")
                setImgLoading(false)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    updateProfile(auth.currentUser, {
                        displayName: fullName,
                        photoURL: downloadURL,
                    }).then(() => {
                        data.displayName = auth.currentUser.displayName
                        data.photoURL = auth.currentUser.photoURL                        
                        setOurUser(data)
                        setCurrentUser(auth.currentUser)
                    }).catch((error) => {
                        window.toastify("Something went wrong in updating name or profile photo", "error")
                    });
                });
            }
        );
        handleProfile()

    }

    //storing data in database
    const handleProfile = async () => {
        state.date = serverTimestamp()
        state.id = window.getRandomId()
        state.createdBy = {
            email: auth.currentUser.email,
            uid: auth.currentUser.uid
        }

        state.phone = state.phone.trim()
        state.address = state.address.trim()

        //this is pattern for phone number verification
        var pattern = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i);

        if (state.phone.length < 11 || state.phone.length > 12) {
            return window.toastify("Please write 11 characters in phone number", "error")
        }
        if (!pattern.test(state.phone)) {
            return window.toastify("Please Enter Number Only in phone number", "error")
        }

        if (state.address.length < 10) {
            return window.toastify("Please write address carefully", "error")
        }
        setLoading(true)

        // Here in 74 line i am just creating an id so that we can just update in firestore. 
        // if we didn't check the id and create an doc in collection then same user will have so many documents of updated data. we just want update not new data
        let id = state.createdBy.uid
        const docRef = doc(firestore, "userProfile", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            await setDoc(doc(firestore, "userProfile", state.createdBy.uid), state, { merge: true })
            window.toastify("Profile Updated successfully", "success")
        } else {
            await setDoc(doc(firestore, "userProfile", state.createdBy.uid), state)
            window.toastify("Something went wrong", "error")
        }

        setLoading(false)
        setState(initialState)
    }


    //getting data of only those user who created account .
    //this function will render when we will enter in this page.

    const gettingData = async () => {
        let array = []
        const q = query(collection(firestore, "userProfile"), where("createdBy.uid", "==", auth.currentUser.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            array.push(doc.data())
            setDocuments(array)
        });
    }

    return (
        <>
            <div className="row">
                <div className="col-12 col-lg-3 ">
                    <div className="card shadow">
                        <div className="profile ">
                            <div className='circle-pic position-relative'>
                                {imgLoading
                                    ?
                                    <Space wrap style={{ position: "absolute", backgroundColor: "white", borderRadius: "50%", top: "30%", left: "20%" }}>
                                        <Progress type="circle" strokeColor={{
                                            '0%': '#108ee9',
                                            '100%': '#87d068',
                                        }} percent={progress} width={80} />
                                    </Space>
                                    : ""
                                }
                                <img src={showUser.photoURL ? showUser.photoURL : "https://freesvg.org/img/abstract-user-flat-4.png"} className='mt-3' alt="profile" />

                                <div className='position-absolute bottom-0 end-0 d-block d-md-none camera'>
                                    <label htmlFor="displayPic" className='btn btn-sm btn-info rounded-circle text-white' ><CameraAltIcon /></label>
                                    <input type="file" className='form-control mt-5 d-none' accept='image/*' onChange={handleChangeFile} id="displayPic" />
                                </div>
                            </div>
                            <div className='text-white text-center mt-2'>
                                <h5>{auth.currentUser.displayName}</h5>
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title fw-bold mb-3" >Contact Details</h6>

                            <form onSubmit={handleSubmit} >
                                <div className="form-floating ">
                                    <input type="text" className="form-control border-0 border-bottom border-info shadow-none rounded-0 " name='fullName' value={state.fullName} id="floatingInput" onChange={handleChange} placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Full Name</label>
                                </div>
                                <div className="form-floating ">
                                    <input type="text" className="form-control border-0 border-bottom border-info shadow-none rounded-0 " name='phone' value={state.phone} id="floatingInput" onChange={handleChange} placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Phone Number</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control border-0 border-bottom border-info shadow-none rounded-0 " name='address' value={state.address} id="floatingInput" onChange={handleChange} placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Default Address</label>
                                </div>
                                <h6 >Gender</h6>
                                <div className="form-check mt-3 d-flex justify-content-around">
                                    <span>
                                        <input className="form-check-input" type="radio" name="gender" value="male" onChange={handleChange} id="flexRadioDefault1" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                                    </span>
                                    <span>
                                        <input className="form-check-input" type="radio" name="gender" value="female" onChange={handleChange} id="flexRadioDefault2" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                                    </span>
                                </div>
                                <h6 className='mt-3'>Date of Birth</h6>
                                <input type="date" className='form-control' name="dateOfBirth" onChange={handleChange} id="" />

                                <div className="text-center mt-5">
                                    <button className="btn btn-sm btn-info text-white  w-100" disabled={isLoading}>
                                        {isLoading
                                            ? <div className='spinner-border spinner-border-sm'></div>
                                            : "Update Profile"
                                        }
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* user detail part starts here */}
                <div className="col-12 col-lg-9 mt-3 mt-lg-0 ">
                    {isLoading
                        ? <div className='loader'>
                            <div className="spinner-grow text-primary" role="status">
                            </div>
                            <div className="spinner-grow text-secondary mx-3" role="status">
                            </div>
                            <div className="spinner-grow text-success" role="status">
                            </div>
                        </div>
                        : <div className="card shadow p-5 ">
                            <div className="row">
                                {documents.map((document, i) => {
                                    return <div className="col" key={i}>
                                        <h4 className='fw-bold mb-5'><u>User Detail</u></h4>
                                        <div className='mb-4'>
                                            <h6 className='text-info'>Full Name*</h6>
                                            <p>{auth.currentUser.displayName}</p>
                                        </div>
                                        <div className='mb-4'>
                                            <h6 className='text-info'>Phone Number*</h6>
                                            <p>{document.phone}</p>
                                        </div>
                                        <div className='mb-4'>
                                            <h6 className='text-info'>Address*</h6>
                                            <p>{document.address}</p>
                                        </div>
                                        <div className='mb-4'>
                                            <h6 className='text-info'>Gender*</h6>
                                            <p>{document.gender}</p>
                                        </div>
                                        <div className='mb-4'>
                                            <h6 className='text-info'>Date of Birth*</h6>
                                            <p>{document.dateOfBirth}</p>
                                        </div>
                                    </div>
                                })
                                }

                                {/* second column */}
                                <div className="col">
                                    <h4 className='fw-bold mb-5'><u>Account Detail</u></h4>
                                    <div className='mb-4'>
                                        <h6 className='text-info'>Email*</h6>
                                        <p>{showUser.email}</p>
                                    </div>
                                    <div className='mb-4'>
                                        <h6 className='text-info'>Account No.*</h6>
                                        <p>{showUser.uid}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

        </>
    )
}
