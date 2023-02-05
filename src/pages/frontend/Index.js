import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import About from './about/Index'
import Contact from './contact/Index'
import Product from './product/Index'
import Page from './pageLink/Index'
import Blog from './blog/Index'
import Cart from './Cart'
import PrivateRouting from 'PrivateRouting'
import DiscoverMore from './DiscoverMore'

export default function Index() {
  return (
        <>
            <Routes>
                <Route  path='/' element={<Home/>}/>
                <Route  path='about' element={<About/>}/>
                <Route  path='contact' element={<Contact/>}/>
                <Route  path='page' element={<Page/>}/>
                <Route  path='blog' element={<Blog/>}/>
                <Route  path='discover-more' element={<DiscoverMore/>}/>
                <Route  path='cart' element={<PrivateRouting Component={Cart}/>}/>
                {/* nested routing */}
                <Route  path='product/*' element={<Product/>}/>
                
            </Routes>
        </>
  )
}
