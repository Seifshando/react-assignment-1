import React, { useEffect, useState } from 'react'

// useEffect

export default function Portfolio() {

  return (
    <>
      <div className='text-center p-2'>
        <h1 className='fw-bolder text-uppercase my-3'>portfolio component</h1>
          <i _ngcontent-bui-c6="" class="fa-solid fa-star position-relative">
          <div className='home-slash bg-dark'></div>
          <div className='home-slash-left bg-dark'></div>
        </i>
      </div>
        <div className=" container my-3">
          <div className="row g-5">
            <div className="col-md-4">
              <div className="inner-portfolio position-relative">
                <img src="src/components/imgs/poert1.png" className='w-100' alt="" />
                <div className='w-100 portfolio-Layout'> 
                  <i _ngcontent-bui-c19="" className="text-white fa-solid fa-plus fa-6x"></i> 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner-portfolio position-relative">
                <img src="src/components/imgs/port2.png" className='w-100' alt="" />
                <div className='w-100 portfolio-Layout'> 
                  <i _ngcontent-bui-c19="" className="text-white fa-solid fa-plus fa-6x"></i> 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner-portfolio position-relative">
                <img src="src/components/imgs/port3.png" className='w-100' alt="" />
                <div className='w-100 portfolio-Layout'> 
                  <i _ngcontent-bui-c19="" className="text-white fa-solid fa-plus fa-6x"></i> 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner-portfolio position-relative">
                <img src="src/components/imgs/poert1.png" className='w-100' alt="" />
                <div className='w-100 portfolio-Layout'> 
                  <i _ngcontent-bui-c19="" className="text-white fa-solid fa-plus fa-6x"></i> 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner-portfolio position-relative">
                <img src="src/components/imgs/port2.png" className='w-100' alt="" />
                <div className='w-100 portfolio-Layout'> 
                  <i _ngcontent-bui-c19="" className="text-white fa-solid fa-plus fa-6x"></i> 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner-portfolio position-relative">
                <img src="src/components/imgs/port3.png" className='w-100' alt="" />
                <div className='w-100 portfolio-Layout'> 
                  <i _ngcontent-bui-c19="" className="text-white fa-solid fa-plus fa-6x"></i> 
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="home-footer postfolio-footer my-4">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="inner-home text-white p-5">
                  <h4>LOCATION</h4>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="inner-home text-white p-5 position-relative">
                  <h3>AROUND THE WEB
                  <div className='p-1'>
                    <a href="">
                      <i _ngcontent-bui-c21="" class="home-footer-anqur fa-brands fa-facebook mx-1 icon text-white"><div></div></i>
                    </a>
                  </div>


                  <div className='p-1'>
                    <a href="">
                      <i _ngcontent-bui-c21="" class="home-footer-anqur-1 fa-brands fa-twitter mx-1 icon text-white"><div></div></i>
                    </a>
                  </div>
                  <div className='p-1'>
                    <a href="">
                      <i _ngcontent-bui-c21="" class="home-footer-anqur-2 fa-brands fa-linkedin-in mx-1 icon text-white"><div></div></i>
                    </a>
                  </div>
                  <div className='p-1'>
                    <a href="">
                      <i _ngcontent-bui-c21="" class="home-footer-anqur-3 fa-solid fa-globe mx-1 icon text-white"><div></div></i>
                    </a>
                  </div>
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="inner-home text-white p-5">
                  <h3>ABOUT FREELANCER</h3>
                  <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="copy-right h-75">
            <h6 className='text-white-50 text-center'>Copyright © Your Website 2021</h6>
          </div>
        </div>
    </>
  )
}


