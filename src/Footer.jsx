
import React from 'react'

const Footer = () => {
  return (
    <div className='container border-top'>
      <div className="row mt-4">
        <div className="col-6 col-md-4">
          <h2>Vignesh V</h2>
          <p>Frontend & Full Stack Developer</p>
        </div>
        <div className="col d-none col-md-6 d-md-block mt-4">
          <ul className='list-inline m-0'>

            <li className='list-inline-item mx-2'>
              <a className='text-decoration-none' href="#home">Home</a>
            </li>

            <li className='list-inline-item mx-2'>
              <a className='text-decoration-none' href="#about">About</a>
            </li>

            <li className='list-inline-item mx-2'>
              <a className='text-decoration-none' href="#skill">Skills</a>
            </li>

            <li className='list-inline-item mx-2'>
              <a className='text-decoration-none' href="#project">Projects</a>
            </li>

            <li className='list-inline-item mx-2'>
              <a className='text-decoration-none' href="#resume">Resume</a>
            </li>

            <li className='list-inline-item mx-2'>
              <a className='text-decoration-none' href="#contact">Contact</a>
            </li>

          </ul>

        </div>
        <div className="col-6 col-md-2 d-flex gap-3 justify-content-center mt-4">
          <a href="https://www.linkedin.com/in/vigneshv11/" target='_blank'><i class="fa-brands fa-square-linkedin"></i></a>
          <a href="https://github.com/vigneshanandhu?tab=repositories" target='_blank'><i class="fa-brands fa-github text-primary"></i></a>
          <a href="mailto:vigneshanandhu2003@gmail.com"><i class="fa-solid fa-envelope"></i></a>
        </div>
        <div className="col-12 text-center">
          <p className=''>@2026 Vignesh. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer