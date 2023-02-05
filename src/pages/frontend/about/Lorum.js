import React from 'react'
import chair from 'assets/chair.jpg'
export default function Lorum() {
  return (
    <>
    <div className="container lorum">
        <div className="row">
            <div className="col">
                <p className="text-secondary w-75  mx-auto text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolores, excepturi non iste laboriosam vel eaque alias, temporibus in omnis architecto iure possimus magnam numquam voluptatem voluptas tempora amet quibusdam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque assumenda vero accusamus quisquam itaque accusantium ut dolores? Mollitia ducimus enim, fugit et voluptas porro praesentium sint expedita illum quibusdam sed.</p>
            </div>
        </div>
        <div className="row">
            <div className="col my-5">
                <img src={chair} className="w-100 px-0 px-md-5" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}
