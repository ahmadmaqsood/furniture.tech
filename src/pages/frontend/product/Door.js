import { firestore } from 'config/Firebase';
import { AuthContext } from 'Context/AuthContext';
import { addDoc, collection, getDocs, query, serverTimestamp } from 'firebase/firestore/lite';
import doorList from 'productDetail/Doors'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Door() {
    const { isAuthenticated, userDetail } = useContext(AuthContext)
    const [isLoading, setLoading] = useState(false)
    const [exists, setExists] = useState(false)
    const navigate = useNavigate()

    const handleCart = async (items) => {
        if (!isAuthenticated) {
            return navigate("/auth/login")
        }
        let cartData = {}
        cartData.createdBy = {
            email: userDetail.email,
            uid: userDetail.uid
        }
        cartData.date = serverTimestamp()
        cartData.img = items.img
        cartData.id = items.id
        cartData.title = items.title
        cartData.price = items.price

        setLoading(true)
        setExists(false)
        const q = query(collection(firestore, "cart"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            if (items.id == doc.data().id) {
                setExists(true)
            }
        });

        if (exists === true) {
            setLoading(false)
            return window.toastify("This product is already in cart", "info")
        } else {
            addDocument(cartData)
        }
    }
    //this is firebase code to add cart data in firebase 
    //i have created a folder "productDetail" in which i just add some data about all products like image url,title ,price etc in the form of array.
    //And you can see that in html section i just use map() function to show all the data. When user will click add to cart button then all data about product will be delivered in "Cart.js" file and in cart file we will show all cart products

    const addDocument = async (cartData) => {
        try {
            await addDoc(collection(firestore, "cart"), cartData);
            window.toastify("Addedd Successfully", "success")
        } catch (e) {
            window.toastify(e.message, "error")
        }
        setLoading(false)
    }

    return (
        <>
            <div className="container my-5">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3 g-md-4">
                    {doorList.map((items) => {
                        return <div className="col mt-3" key={items.id}>
                            <div className="card cart-products" >
                                <div className="card-image">
                                    <img src={items.img} className="card-img-top" alt="product" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{items.title}</h5>
                                    <div className="card-text ">{items.price}</div>
                                    <div className="card-text my-2">{items.rating}</div>
                                    <button className='btn btn-sm btn-info text-white rounded-0 w-100 mx-auto mb-3' onClick={() => handleCart(items)} disabled={isLoading} >
                                        {isLoading ? <div className='spinner-border spinner-border-sm'></div>
                                            : "Add to cart"
                                        }

                                    </button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </>
    )
}
