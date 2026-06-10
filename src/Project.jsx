import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import ProjectImg1 from './assets/portimage.jpg'
import ProjectImg2 from './assets/jobportal.jpg'
import ProjectImg3 from './assets/simpleshop.jpg'
import ProjectImg4 from './assets/whatsappcloneimage.jpg'
import ProjectImg5 from './assets/farmimage.jpg'

const Project = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    })
  }, [])

  return (
    <div className='container mb-5'>
      
      <h1 
        className='text-center mt-3'
        data-aos="fade-up"
      >
        My Projects
      </h1>

      <div className="row mt-3">

        {/* Project 1 */}
        <div 
          className="col-12 col-sm-6 col-md-6 col-lg-3 mt-md-2 my-sm-2"
          data-aos="zoom-in"
        >
          <div className="card bg-white shadow">
            <img
              className='card-img-top img-fluid rounded-0 border-0'
              style={{ height: '200px', objectFit: 'cover' }}
              src={ProjectImg1}
              alt=""
            />

            <div className="card-body">
              <h4 className='card-title'>Portfolio Website</h4>

              <p className='card-text'>
                I build a portfolio website to showcase my skill using reactjs and bootstrap.
              </p>

              <div className="card-btn d-flex gap-3">
                <button className="btn btn-primary">
                  <a
                    className='text-decoration-none text-white'
                    href="https://github.com/vigneshanandhu/knowmeportfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </button>

                <button className="btn btn-primary">
                  <a
                    className='text-decoration-none text-white'
                    href="https://knowmeportfolio.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="col-12 col-sm-6 col-md-6 col-lg-3 mt-md-2 mt-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="card bg-white shadow">
            <img
              className='card-img-top img-fluid rounded-0 border-0'
              style={{ height: '200px', objectFit: 'cover' }}
              src={ProjectImg2}
              alt=""
            />

            <div className="card-body">
              <h4 className='card-title'>Job Portal Platform</h4>

              <p className='card-text'>
                I build a job portal platform for job seekers and employers using reactjs, tailwind css, django rest framework and postgresql.
              </p>

              <div className="card-btn d-flex gap-3">
                <button className="btn btn-primary">
                  <a
                    className='text-decoration-none text-white'
                    href="https://github.com/vigneshanandhu/React-Frontend-Job-Portal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </button>

                <button className="btn btn-primary">
                  <a
                    className='text-decoration-none text-white'
                    href="https://react-frontend-job-portal.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div
          className="col-12 col-sm-6 col-md-6 col-lg-3 mt-md-2 mt-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="card bg-white shadow">
            <img
              className='card-img-top img-fluid rounded-0 border-0'
              style={{ height: '200px', objectFit: 'cover' }}
              src={ProjectImg3}
              alt=""
            />

            <div className="card-body">
              <h4 className='card-title'>Shop Website</h4>

              <p className='card-text'>
                This is my first frontend simple shop website using html, css and javascript.
              </p>

              <div className="card-btn d-flex gap-3">
                <button className="btn btn-primary">
                  <a
                    className='text-decoration-none text-white'
                    href="https://github.com/vigneshanandhu/simpleshop"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </button>

                <button className="btn btn-primary">
                  <a
                    className='text-decoration-none text-white'
                    href="https://simpleshop-eight.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div
          className="col-12 col-sm-6 col-md-6 col-lg-3 mt-md-2 mt-2"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="card bg-white shadow">
            <img
              className='card-img-top img-fluid rounded-0 border-0'
              style={{ height: '200px', objectFit: 'cover' }}
              src={ProjectImg4}
              alt=""
            />

            <div className="card-body">
              <h4 className='card-title'>Whatsappclone Website</h4>

              <p className='card-text'>
                I build a frontend for whatsapp clone website using html and css.
              </p>

              <div className="card-btn d-flex gap-3">
                <button className="btn btn-primary">
                  <a
                    className='text-decoration-none text-white'
                    href="https://github.com/vigneshanandhu/whatsappclone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </button>

                <button className="btn btn-primary">
                  <a
                    className='text-decoration-none text-white'
                    href="https://whatsappclone-flax.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div
          className="col-12 col-sm-6 col-md-6 col-lg-3 mt-md-2 mt-2"
          data-aos="flip-left"
          data-aos-delay="600"
        >
          <div className="card bg-white shadow">
            <img
              className='card-img-top img-fluid rounded-0 border-0'
              style={{ height: '200px', objectFit: 'cover' }}
              src={ProjectImg5}
              alt=""
            />

            <div className="card-body">
              <h4 className='card-title'>Farm Website</h4>

              <p className='card-text'>
                I build a Vegetables shopping website using reactjs and bootstrap.
              </p>

              <div className="card-btn d-flex gap-3">
                <button className="btn btn-primary">
                  <a
                    className='text-decoration-none text-white'
                    href="https://github.com/vigneshanandhu/Farm2Home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </button>

                <button className="btn btn-primary">
                  <a
                    className='text-decoration-none text-white'
                    href="https://farm2-home-three.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project