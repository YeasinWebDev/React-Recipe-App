
import React from 'react'
import Header from '../Component/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer/Footer'
import Search from '../Component/Search'
import Category from '../Component/Category'
import DropDown from '../Component/DropDown'

function Layout() {
  return (
    <>
    <DropDown className="DropDown"/>
    <Header />
    <Search/>
    <Category/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout