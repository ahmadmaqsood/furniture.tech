import { Breadcrumb, Button, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Navbar from 'components/Header/Navbar-copy';
import { auth } from 'config/Firebase';
import { AuthContext } from 'Context/AuthContext';
import { signOut } from 'firebase/auth';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Topbar() {
  const { dispatch } = useContext(AuthContext)
  //handle logout
  const navigate = useNavigate()
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        window.toastify("Log-out successfully.", "success")
        dispatch({ type: "LOGOUT" })
        navigate("/")
      }).catch((error) => {
        window.toastify(error.message, "error")
      });
  }
  return (
    <>
      <Header className='d-none d-md-block' style={{ padding: 0,border: "1px solid #e0e0e0", borderTop: "none", borderLeft: "none", background: "#fae1dd", }}>
        <div className="d-flex justify-content-between  align-items-center">
          <Breadcrumb style={{ margin: '16px 0 16px 24px' }}>
            <Breadcrumb.Item>Customers</Breadcrumb.Item>
            <Breadcrumb.Item><strong>List</strong></Breadcrumb.Item>
          </Breadcrumb>
          <button className='btn btn-info text-white me-4 px-5 rounded-0' onClick={handleLogout}>LOGOUT</button>
        </div>
      </Header>
      <div className='d-block d-md-none'>
        <Navbar button={<button className='btn btn-info text-white mx-3 px-5 rounded-0' onClick={handleLogout}>LOGOUT</button>} display={"d-none"} />
      </div>
    </>
  )
}
