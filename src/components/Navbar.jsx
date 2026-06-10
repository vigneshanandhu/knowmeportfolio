import React, { useState } from 'react'
import Home from './Home'
import About from '../About'
import Project from './Project'
import Resume from './Resume'
import Contact from './Contact'
import { Link } from 'react-router-dom'

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

        {/* Desktop Button */}
        <div className="col-md-3 d-none d-md-block text-end">

          <button className='btn btn-primary'>
            <Link
              className='text-light text-decoration-none'
              to='/contact'
            >
              Lets Talk
            </Link>
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
              <Link className='text-decoration-none' to='/home'>Home</Link>
            </li>

            <li className="list-group-item">
              <Link className='text-decoration-none' to='/about'>About</Link>
            </li>

            <li className="list-group-item">
              <Link className='text-decoration-none' to='/skill'>Skills</Link>
            </li>

            <li className="list-group-item">
              <Link className='text-decoration-none' to='/project'>Projects</Link>
            </li>

            <li className="list-group-item">
              <Link className='text-decoration-none' to='/resume'>Resume</Link>
            </li>

            <li className="list-group-item">
              <Link className='text-decoration-none' to='/contact'>Contact</Link>
            </li>

          </ul>

        </div>

      )}

    </div>
  )
}

export default Navbar