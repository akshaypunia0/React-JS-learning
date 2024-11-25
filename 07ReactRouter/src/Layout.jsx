import React from 'react'
import Header from './comopnents/Header/Header'
import Footer from './comopnents/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout