import Navbar from 'components/Header/Navbar-copy'
import { auth, firestore } from 'config/Firebase'
import { AuthContext } from 'Context/AuthContext'
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore/lite'
import React, { useContext, useEffect, useState } from 'react'
import TopWallpaper from '../../components/common/Top-wallpaper'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Services from 'components/common/Services'
import Footer from 'components/Footer/Footer'
import Details from './Details'
import { Link } from 'react-router-dom'

export default function Cart() {
    const { user } = useContext(AuthContext)
    const [isloading, setLoading] = useState(false)
    const [documents, setDocuments] = useState([])
    const [isProcessing, setProcessing] = useState(true)
    //useeffect to get all cart products and user
    useEffect(() => {
        //when useeffect will render first time then it will give an error because it can't get data from the firebase in less time 
        //To control this error i just create a logic in useEffect so that it can't get error and useEffect will render so many times until it get our users all information which i have stored in useContext 
        if (user !== undefined) {
            getData()
        }
    }, [user, documents])

    const getData = async () => {
        var array = []

        const q = query(collection(firestore, "cart"), where("createdBy.uid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let data = { firebaseId: doc.id, ...doc.data() }
            array.push(data)
            setDocuments(array)
        });
        setProcessing(false)
    }

    //handle delete
    const handleDeleteCart = async (item) => {
        setLoading(true)
        await deleteDoc(doc(firestore, "cart", item));
        getData()
        window.toastify("Deleted successfully", "success")
        setLoading(false)
    }

    //handle Detail
    const handleDetail = (product) => {
        console.log(product);
        return <>
            <Details product={product} />
        </>
    }

    return (
        <>
            <Navbar />
            <TopWallpaper page={"CART LIST"} path={"Cart"} />
            {/* This all data in cart is coming from "ProductDetail" file indirectly.  */}
            {isProcessing
                ? <div className="container  text-center" style={{ marginTop: "200px" }}>
                    <div className="spinner-border text-primary p-4" role="status">
                    </div>
                    <div className="mt-2">Loading...</div>
                </div>
                : <div className="container py-5">
                    <div className="row mt-5">
                        <div className="col">
                            {!documents.length
                                ? <div className='row'>
                                    <div className="col">
                                        <div className="card py-4 text-center">
                                            <h3>No Products Are Added Yet</h3>
                                        </div>
                                    </div>
                                </div>
                                : <div className="table-responsive">
                                    <table className="table cart-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Products</th>
                                                <th scope="col" className='text-center'>Price</th>
                                                <th scope="col" className='text-center'>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {documents.map((products, i) => {
                                                return <tr key={i} >
                                                    <td >
                                                        <div className='cart-items'>
                                                            {isloading
                                                                ? <div className='spinner-border text-secondary d-flex align-items-center me-3'></div>
                                                                : <img src={products.img} className="me-4" width="100px" height="100px" alt="" />
                                                            }
                                                            <div className="d-block d-md-inline-block">{products.title}</div>
                                                            <Link className='d-block d-md-none view-details' to={`/details/${products.id}/${products.price}`}>View Details</Link>
                                                        </div>
                                                    </td>
                                                    <td className='text-center pt-5'>{products.price + "$"}</td>
                                                    <td className='text-center position-relative '>
                                                        <div><button className='btn btn-info btn-sm text-white  mt-4'><ShoppingCartOutlinedIcon />CheckOut</button></div>
                                                        <button type="button" className="btn-close position-absolute end-0 top-0" aria-label="Close" onClick={() => handleDeleteCart(products.firebaseId)}></button></td>
                                                </tr>
                                            })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            }

                        </div>
                    </div>
                </div>

            }
            <Services />
            <Footer />
        </>
    )
}
