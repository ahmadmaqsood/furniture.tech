import React from 'react'
import sofa from 'assets/sofa.jpg' 
export default function Journey() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col text-center my-4">
                    <h1 className="fw-bold">JOURNEY START FROM</h1>
                        <p className="text-secondary mx-auto mt-3 w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi illum ad, magni autem ipsa optio voluptates explicabo id aspernatur cumque, soluta rerum quia eligendi magnam ab! Tenetur, perferendis voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo totam fugit aspernatur iste? Accusamus quas rem deleniti odit quae fugiat deserunt, hic ad magnam atque maiores, ab eaque ipsa?</p>
                </div>
            </div>
            <div className="row">
                <div className="col my-5">
                    <img src={sofa} className="w-100 px-0 px-md-5" alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col text-center my-4">
                    <h1 className="fw-bold">2020</h1>
                        <p className="text-secondary mx-auto mt-3 w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi illum ad, magni autem ipsa optio voluptates explicabo id aspernatur cumque, soluta rerum quia eligendi magnam ab! Tenetur, perferendis voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo totam fugit aspernatur iste? Accusamus quas rem deleniti odit quae fugiat deserunt, hic ad magnam atque maiores, ab eaque ipsa?</p>
                </div>
            </div>
        </div>
    </>
  )
}
