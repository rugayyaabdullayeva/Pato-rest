import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/admin/Header'

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  )
}

export default Root