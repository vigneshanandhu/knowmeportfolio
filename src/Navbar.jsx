import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Home from './Home'
import About from './About'
import Project from './Project'
import Resume from './Resume'
import Contact from './Contact'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (

    <nav>
      <h3 className='mt-2 mx-2'>KnowMe</h3>
      <ul className='mt-3'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skill">Skills</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>



      </ul>
      <button className='talkbtn btn btn-primary  mt-2'><a className='text-light' href="#contact">Lets Talk</a></button>
      <button onClick={() => setToggleMenu(!toggleMenu)} className='barbtn text-light'> <i id='baricon' className="fa-solid fa-bars mt-3 fs-3"></i></button>
      {toggleMenu && (
        <nav className="mobilenav">
          <ul
            onClick={() => setToggleMenu(false)}
            className="mobilelist"
          >
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skill">Skills</a></li>
            <li><a href="#project">Projects</a></li>

            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}
    </nav>

  )
}

export default Navbar