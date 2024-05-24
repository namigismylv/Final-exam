import React from 'react'
import Header from '../../Layouts/Admin/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Layouts/Admin/Footer/Footer'

const AdminRoot = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AdminRoot