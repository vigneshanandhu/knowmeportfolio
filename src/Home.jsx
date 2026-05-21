import React, { useEffect } from 'react'
import myImage from './assets/Hero.png'
import Contact from './Contact.jsx'
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() =>{
        AOS.init({
            duration:1000,
            once:true,
        });
    },[]);

  return (
    <div className='homepage pt-5'>
       <div className='intro'>
            <h1 
              className='text-primary'
              data-aos='fade-right'
            >
              I'm Vignesh V
            </h1>

            <div 
              className="title-container"
              data-aos='zoom-in'
            >
                <span className="role role-1">Full Stack Developer</span>
                <span className="role role-2">Frontend Developer</span>
                <span className="role role-3">ReactJS Developer</span>
            </div>

            <p data-aos='fade-up'>
              Computer science graduate passionate about building responsive web applications.
            </p>

            <div data-aos='fade-up'>
              <button className='btn btn-outline-primary hirebtn'>
                <a className='text-light' href="#contact">Hire Me</a>
              </button>

              <button className='resumebtn btn btn-primary mx-3'>
                <a className='text-light' href="public/vignesh_resume.pdf" download target='_blank' rel='noopener noreferrer'>Download Resume</a>
              </button>
            </div>

            <br></br>

            <div 
              className="icon mt-3 fs-2 d-flex gap-3 text-primary"
              data-aos='zoom-in-up'
            >
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

        <div 
          className='mt-5 heroimage'
          data-aos='fade-left'
        >
            <img src={myImage} alt="" className='img-fluid'/>
        </div>
    </div>
  )
}

export default Home