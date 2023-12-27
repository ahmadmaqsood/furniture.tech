import Services from 'components/common/Services'
import TopWallpaper from 'components/common/Top-wallpaper'
import Footer from 'components/Footer/Footer'
import Navbar from 'components/Header/Navbar-copy'
import { auth, firestore } from 'config/Firebase'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details(props) {
  const { productId,productPrice } = useParams()


  const [documents, setDocuments] = useState([])
  const [counter, setCounter] = useState(1)
  const [price, setPrice] = useState(Number(productPrice))

  
  useEffect(() => {
    getData()
  }, [])
  
  // console.log(typeof price);
  const getData = async () => {
    var array = []
    var id = Number(productId)
    const q = query(collection(firestore, "cart"), where("id", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      array.push(doc.data())
      setDocuments(array)
    });
    // setPrice(documents)
  }

   
  const handleCounter = (type) => {    
    const gettingPrice=documents[0].price
    
if (type==="increment") {
  
  setCounter(counter + 1)
  setPrice(price+gettingPrice)
} else {
  counter > 1 ? setCounter(counter - 1) : setCounter(counter)
  price===gettingPrice?setPrice(price):setPrice(price - gettingPrice)
  
}

  }


  return (
    <>
      <Navbar />
      <TopWallpaper page="PRODUCT DETAIL" path="Product Detail" />

      {documents.map((product, i) => {
        return <div className='container pt-5' key={i}>
          <div className="row ">
            <div className="col-12 col-md-5 d-flex align-items-center">
              <img src={product.img} className="w-100" alt="" />
            </div>

            <div className="col-12 col-md-7 mt-5 mt-md-0 px-4 ">
              <h2>{product.title}</h2>
              <h2 className='text-info'>{ price+"$"}</h2>
              <p>Category: <span className='text-info'>HouseHold</span></p>
              <p>Availability: In Stock</p><hr />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus deleniti laboriosam fugiat, obcaecati id numquam, quam alias repellat reiciendis nihil eum, quibusdam eligendi accusantium quisquam esse error aut? Reiciendis, vel.</p>
              <div className="rounded-pill border px-3 py-2 my-3 fw-bold d-flex align-items-center justify-content-between  w-25 counter">
                <button className='btn btn-link text-decoration-none text-dark p-2' onClick={() => handleCounter("increment")} >+</button>
                <span>{counter}</span>
                <button className='btn btn-link text-decoration-none text-dark p-2' onClick={() => handleCounter("decrement")}>-</button>
              </div>
              <button className='btn btn-info text-white px-5 py-3 mt-3 rounded-0'>CHECKOUT</button>


            </div>
          </div>
        </div>
      })}
      <Services />
      <Footer />
    </>

  )
}
