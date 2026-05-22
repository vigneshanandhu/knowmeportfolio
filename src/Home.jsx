
import React from 'react'
import myImage from './assets/Hero.png'
import './style.css'

const Home = () => {
  return (
    <div className='container my-5'>
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mt-5 text-center text-md-start ">
          <h1 className='mt-2'>I'm Vignesh V</h1>
        <div className="title-container position-relative d-flex justify-content-center justify-content-md-start">
    <span className="role role-1  start-50 translate-middle-x ">Full Stack Developer</span>
    <span className="role role-2 start-50  translate-middle-x ">Frontend Developer</span>
    <span className="role role-3 start-50  translate-middle-x ">ReactJS Developer</span>
</div>
          <p>
            Computer science graduate passionate about building responsive web applications.
          </p>

          <div className='d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start '>
            <button className='btn btn-outline-primary'>
              <a className='text-light text-decoration-none' href="#contact">Hire Me</a>
            </button>

            <button className='btn btn-primary '>
              <a className='text-light text-decoration-none' href="/vignesh_resume.pdf" download target='_blank' rel='noopener noreferrer'>Download Resume</a>
            </button>
          </div><br />
          <div className="d-flex gap-3 fs-3 justify-content-center justify-content-md-start">
            <a href="https://www.linkedin.com/in/vigneshv11/" target='_blank'>
              <i className="fa-brands fa-square-linkedin"></i>
            </a>

            <a href="https://github.com/vigneshanandhu?tab=repositories" target='_blank'>
              <i className="fa-brands fa-github text-primary"></i>
            </a>

            <a href="mailto:vigneshanandhu2003@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>

        </div>
        <div className="col-12 col-md-6 mt-md-5 mt-lg-2 mt-4">
          <img src={myImage} alt="" className='img-fluid w-75 w-md-25 rounded image-shadow d-block mx-auto' />
        </div>
      </div>

    </div>
  )
}

export default Home