import React, { useEffect } from 'react'
import './Project.css'
import ProjectImg from './assets/portimage.jpg'
import ProjectImg2 from './assets/simpleshop.jpg'
import ProjectImg3 from  './assets/whatsappcloneimage.jpg'
import ProjectImg4 from './assets/farmimage.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Project = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    })
  }, [])

  return (
    <div className='projectpage'>
      <h1 
        className='projecthead text-center mt-5'
        data-aos='fade-down'
      >
        Projects
      </h1>

      <div className='probox d-flex gap-5 mt-5 flex-wrap'>

        <div className="projectdiv" data-aos='zoom-in-up'>
          <img src={ProjectImg}className='proimage' alt="" />
          <div className="hoverin text-light pt-5 bg-dark">
             <p  className='mx-2'>I build a my own Portfolio website using Reactjs and Bootstrap.</p>
              <div className=" d-flex gap-3 mt-5 mx-5">
                <button className='btn btn-primary'>Code</button>
                <button className='btn btn-primary'>Live</button>
              </div>
          </div>
        </div>

        <div className="projectdiv" data-aos='zoom-in-up'>
          <img src={ProjectImg2}className='proimage' alt="" />
          <div className="hoverin text-light pt-5 bg-dark">
             <p className='mx-2'>I build a simple shopping website using Html, Css and JavaScript.</p>
              <div className=" d-flex gap-3 mt-5 mx-5">
                <button className='btn btn-primary'><a className='text-light' href="https://github.com/vigneshanandhu/simpleshop">Code</a></button>
                <button className='btn btn-primary'><a className='text-light' href='https://simpleshop-eight.vercel.app/'>Live</a></button>
              </div>
          </div>
        </div>

        <div className="projectdiv" data-aos='zoom-in-up'>
          <img src={ProjectImg3}className='proimage' alt="" />
          <div className="hoverin text-light pt-5 bg-dark">
             <p  className='mx-2'>I build a simple whatsapp clone UI using Html and Css.</p>
              <div className=" d-flex gap-3 mt-5 mx-5">
                <button className='btn btn-primary'><a className='text-light' href="https://github.com/vigneshanandhu/whatsappclone">Code</a></button>
                <button className='btn btn-primary'><a className='text-light' href="https://whatsappclone-flax.vercel.app/">Live</a></button>
              </div>
          </div>
        </div>

        <div className="projectdiv" data-aos='zoom-in-up'>
          <img src={ProjectImg4}className='proimage' alt="" />
          <div className="hoverin text-light pt-4 bg-dark">
             <p  className='mx-2'>I build a vegetables shopping website with Food AI suggesstion using reactJS and Bootstrap.</p>
              <div className=" d-flex gap-3 mt-5 mx-5">
                <button className='btn btn-primary'><a className='text-light' href="https://github.com/vigneshanandhu/Farm2Home">Code</a></button>
                <button className='btn btn-primary'><a className='text-light' href="https://farm2-home-three.vercel.app/">Live</a></button>
              </div>
          </div>
        </div>

        <div className="projectdiv" data-aos='zoom-in-up'>
          <img src={ProjectImg}className='proimage' alt="" />
          <div className="hoverin text-light pt-5 bg-dark">
             <p  className='mx-2'>I build a my own Portfolio website using Reactjs and Bootstrap.</p>
              <div className=" d-flex gap-3 mt-5 mx-5">
                <button className='btn btn-primary'>Code</button>
                <button className='btn btn-primary'>Live</button>
              </div>
          </div>
        </div>

        <div className="projectdiv" data-aos='zoom-in-up'>
          <img src={ProjectImg}className='proimage' alt="" />
          <div className="hoverin text-light pt-5 bg-dark">
             <p  className='mx-2'>I build a my own Portfolio website using Reactjs and Bootstrap.</p>
              <div className=" d-flex gap-3 mt-5 mx-5">
                <button className='btn btn-primary'>Code</button>
                <button className='btn btn-primary'>Live</button>
              </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Project