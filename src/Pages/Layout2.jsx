
import React from 'react'
import Header from '../Component/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer/Footer'
import DropDown from '../Component/DropDown'

function Layout2() {
  return (
    <>
    <DropDown className="DropDown"/>
    <Header />
     <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout2