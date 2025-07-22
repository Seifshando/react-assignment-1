import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Portfolio from './../Portfolio.jsx/Portfolio';
export default function Navbar() {
  
// const [Portfolio, setPortfolio] = useState("Portfolio");  
  


return (
  <>
    <div className='p-4 fixed-top navbar'>
        <ul className='list-unstyled d-flex mb-0 pb-0 mx-5  gap-5 position-relative'>
          <li><NavLink className='text-decoration-none text-white  fs-3  fw-bolder' to="/">Start FrameWork</NavLink></li>
          <li><NavLink className='text-decoration-none text-white  fs-4 about' to="about">About</NavLink></li>
          <li><NavLink className='text-decoration-none text-white  fs-4' to="porfolio">Portfolio</NavLink></li>
          <li><NavLink className='text-decoration-none text-white  fs-4' to="contact">Contact</NavLink></li>
        </ul>
    </div>
  </>  


  )
}


