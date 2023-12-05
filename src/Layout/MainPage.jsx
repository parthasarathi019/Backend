import React from 'react'
import Header from '../Components/SharedComponents/Header/Header'
import Footer from '../Components/SharedComponents/Footer/Footer'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default MainPage
