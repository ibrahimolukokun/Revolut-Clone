import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'


const Layout = () => {
  return (
    <div>
        <Navbar />
            <Outlet />
        <Footer />
    </div>
  )
}

export default Layout