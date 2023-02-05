import React from 'react'
export default function Services() {
  return (
    <>
    <div className="service">
        <div className="container-fluid mt-4 bg-danger ">
            <div className="container">
            <div className="row  row-cols-2  row-cols-md-4 py-5">
                <div className="col px-md-4 py-4">
                    <div><i className="icons fa-solid fa-truck"></i></div>
                      <h4 className='my-3'>Fast & Free Delivery</h4>  
                      <p className="text-secondary">Free Delivery on all orders</p>
                </div>
                <div className="col px-md-4 py-4">
                    <div><i className="icons fa-solid fa-credit-card"></i></div>
                      <h4 className='my-3'>Secure Payment</h4>  
                      <p className="text-secondary">Free Delivery on all orders</p>

                </div>
                <div className="col px-md-4 py-4 mt-4 mt-md-0">
                    <div><i className="icons fa-solid fa-money-bill"></i></div>
                      <h4 className='my-3'>Money Back Gurrantee</h4>  
                      <p className="text-secondary">Free Delivery on all orders</p>

                </div>
                <div className="col px-md-4 py-4 mt-4 mt-md-0">
                    <div><i className="icons fa-solid fa-phone-volume"></i></div>
                      <h4 className='my-3'>Online Support</h4>  
                      <p className="text-secondary">Free Delivery on all orders</p>

                </div>
            </div>    
            </div>
        </div>        
    </div>
    </>
  )
}
