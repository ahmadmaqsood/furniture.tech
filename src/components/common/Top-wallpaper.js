import React from 'react'
import 'pages/frontend/about/_about.scss'
export default function TopWallpaper(props) {
  return (
    <>    
        <div className="container-fluid mb-5" >
            <div className="about">
        <div className="row">
          <div className="col">
              <div className="div2">
             </div>
                <div className="div3 pt-5">
                    <div className='d-flex  text-white flex-column justify-content-center'>
                        <h1 className='fw-bold ms-4 ms-md-5 mt-4 ps-0 ps-md-5'>{props.page}</h1>
                        <h6 className='ms-4 ms-md-5 ps-0 ps-md-5 '>Home {'>'} {props.path}</h6>
                    </div>
                </div>
          </div>
            </div>
        </div>
      </div>
    </>
  )
}
