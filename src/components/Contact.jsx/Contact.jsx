import React, { useState } from 'react'
import Child from '../Child.jsx/Child';



export default function Contact() {
  return(
    <>
    <div className='text-center'>
      <h1 className='fw-bolder text-uppercase my-4 text-center'>Contact Section</h1>
        <i _ngcontent-bui-c6="" className="fa-solid fa-star position-relative">
        <div className='home-slash bg-dark'></div>
        <div className='home-slash-left bg-dark'></div>
       </i>
    </div>
      <div className="form-floating mb-3 my-5 position-relative my-input">
        <input type="email" className="form-control in-input" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput" className='label'>userName</label>
      </div>
      <div className="form-floating mb-3 my-5 position-relative my-input">
        <input type="email" className="form-control in-input" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput" className='label'>userAge</label>
      </div>
      <div className="form-floating mb-3 my-5 position-relative my-input">
        <input type="email" className="form-control in-input" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput" className='label'>userEmail</label>
      </div>
      <div className="form-floating mb-3 my-4 position-relative my-input">
        <input type="email" className="form-control in-input in-last-input" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput" className='label'>userPassword</label>
      </div>

      <button className='btn contact-btn'>Send Message</button>


        <div className="home-footer my-home-footer">
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
          <div className="copy-right h-25">
            <h6 className='text-white-50 text-center'>Copyright © Your Website 2021</h6>
          </div>
        </div>

    </>
  )
}