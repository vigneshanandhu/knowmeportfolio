import React, { useState } from 'react'
import Home from './Home'
import About from './About'
import Project from './Project'
import Resume from './Resume'
import Contact from './Contact'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='container border-bottom'>

      <div className="row align-items-center py-2">

        {/* Logo */}
        <div className="col-6 col-md-3">
          <h2 className='m-0'>Know Me</h2>
        </div>

        {/* Desktop Menu */}
        <div className="col-md-6 d-none d-md-block text-center">

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

        {/* Desktop Button */}
        <div className="col-md-3 d-none d-md-block text-end">

          <button className='btn btn-primary'>
            <a
              className='text-light text-decoration-none'
              href="#contact"
            >
              Lets Talk
            </a>
          </button>

        </div>

        {/* Mobile Menu Button */}
        <div className="col-6 d-flex d-md-none justify-content-end">

          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className='btn border-0'
          >
            <i className="fa-solid fa-bars fs-3 text-white"></i>
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {toggleMenu && (

        <div className="d-md-none">

          <ul
            onClick={() => setToggleMenu(false)}
            className="list-group text-center"
          >

            <li className="list-group-item">
              <a className='text-decoration-none' href="#home">Home</a>
            </li>

            <li className="list-group-item">
              <a className='text-decoration-none' href="#about">About</a>
            </li>

            <li className="list-group-item">
              <a className='text-decoration-none' href="#skill">Skills</a>
            </li>

            <li className="list-group-item">
              <a className='text-decoration-none' href="#project">Projects</a>
            </li>

            <li className="list-group-item">
              <a className='text-decoration-none' href="#resume">Resume</a>
            </li>

            <li className="list-group-item">
              <a className='text-decoration-none' href="#contact">Contact</a>
            </li>

          </ul>

        </div>

      )}

    </div>
  )
}

export default Navbar