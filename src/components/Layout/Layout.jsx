import React from 'react'
import Navbar from './../Navbar.jsx/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navbar />

      
      <div className="container p-5 my-4">
         <Outlet />
      </div>


      {/* <Footer /> */}
    </>
  )
}
