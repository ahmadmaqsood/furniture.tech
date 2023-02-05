import { ContactsOutlined, HomeOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import AutoStoriesTwoToneIcon from '@mui/icons-material/AutoStoriesTwoTone';
import RssFeedTwoToneIcon from '@mui/icons-material/RssFeedTwoTone';
import './_dashboard.scss'
import { CartContext } from 'Context/CartContext';
export default function Menubar() {
  const { cartLength } = useContext(CartContext)

  return (
    <>
      <div style={{ height: '100%' }}>
        <ol className="list-group border-0 mx-2 mt-1 sideNavbar" style={{ minHeight: "100vh" }}>
          <li className="list-group-item py-3 bg-info  px-1  border-0 "><Link to="/" className='btn text-start w-100 text-white'><HomeOutlined /> Home</Link></li>
          <li className="list-group-item py-3 bg-info  px-1 border-0">
            <Link to="/cart" className='btn  text-white text-start w-100 position-relative'>
              <div className='position-relative'>
                <ShoppingCartOutlined /> Cart
                <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#dc3545" }}>{cartLength}</span>
              </div>
            </Link>
          </li>
          <li className="list-group-item py-3 bg-info  px-1 border-0"><Link to="/about" className='btn text-start text-white w-100'><SupportAgentTwoToneIcon /> About</Link></li>
          <li className="list-group-item py-3 bg-info  px-1 border-0"><Link to="/pages" className='btn text-start text-white w-100'><AutoStoriesTwoToneIcon /> Pages</Link></li>
          <li className="list-group-item py-3 bg-info  px-1 border-0"><Link to="/blog" className='btn text-start text-white w-100'><RssFeedTwoToneIcon /> Blog</Link></li>
          <li className="list-group-item py-3 bg-info  px-1 border-0"><Link to="/contact" className='btn text-start text-white w-100'><ContactsOutlined /> Contact</Link></li>
        </ol>
      </div>
    </>
  )
}
