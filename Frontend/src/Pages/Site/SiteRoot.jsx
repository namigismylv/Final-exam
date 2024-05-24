import React from 'react'
import Header from '../../Layouts/Site/Header/Header'
import { Outlet  } from "react-router-dom";
import Footer from '../../Layouts/Site/Footer/Footer';
const SiteRoot = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default SiteRoot