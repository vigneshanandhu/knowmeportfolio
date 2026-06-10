
import React from 'react'
import { Link } from 'react-router-dom'

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
              <Link className='text-decoration-none' to='/home'>Home</Link>
            </li>

            <li className='list-inline-item mx-2'>
              <Link className='text-decoration-none' to='/about'>About</Link>
            </li>

            <li className='list-inline-item mx-2'>
              <Link className='text-decoration-none' to='/skill'>Skills</Link>
            </li>

            <li className='list-inline-item mx-2'>
              <Link className='text-decoration-none' to='/project'>Projects</Link>
            </li>

            <li className='list-inline-item mx-2'>
              <Link className='text-decoration-none' to='/resume'>Resume</Link>
            </li>

            <li className='list-inline-item mx-2'>
              <Link className='text-decoration-none' to='/contact'>Contact</Link>
            </li>

          </ul>

        </div>
        <div className="col-6 col-md-2 d-flex gap-3 justify-content-center mt-4">
          <a href="https://www.linkedin.com/in/vigneshv11/" target='_blank'><i className="fa-brands fa-square-linkedin"></i></a>
          <a href="https://github.com/vigneshanandhu" target='_blank'><i className="fa-brands fa-github text-primary"></i></a>
          <a href="mailto:vigneshanandhu2003@gmail.com"><i className="fa-solid fa-envelope"></i></a>
        </div>
        <div className="col-12 text-center">
          <p className=''>@2026 Vignesh. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer