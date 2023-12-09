import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../../components/admin/Header"
import Footer from "../../components/admin/Footer"

const AdminRoot = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default AdminRoot