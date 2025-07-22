import React, { useEffect, useState } from 'react'
import axios from 'axios/unsafe/axios.js';
// import { axios } from './../../../node_modules/axios/dist/esm/axios';
import Avatar from "../../assets/avataaars (1).svg"

export default function Home() {

  return(
    <>
    <div className='text-center'>
      <img src={Avatar} className=' w-25 my-5 ' alt="" />
      <h1 className='text-white fw-bolder'>Start Framework</h1>
      <i _ngcontent-bui-c6="" class="fa-solid fa-star text-white position-relative">
        <div className='home-slash'></div>
        <div className='home-slash-left'></div>
      </i>
      <p className='text-white my-2'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
        <div className=" home-footer">
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