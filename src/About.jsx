import React, { useEffect } from 'react'
import AboutImg from './assets/Aboutme.png'
import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
    <div>
        <div className='aboutbox d-flex gap-5 '>

        <div 
          className='aboutimg'
          data-aos="fade-right"
        >
          <img src={AboutImg} alt="" className='img-fluid border-0 rounded-0 aboutimage' />
        </div>

        <div 
          className='about-content mx-lg-5 lh-sm w-50 fs-5'
          data-aos="fade-left"
        >
          <h1 className='text-center abouthead'>About Me</h1>

          <p className='mt-5 fs-5 text-break text-wrap'>
            Hello! I'm <strong>Vignesh V</strong>, a passionate Computer Science Graduate and Full Stack Developer Focused on building modern, responsive, and user-friendly web applications.
          </p>

          <p className='mt-5 fs-5 text-break text-wrap'>
            I enjoy turning ideas into real-world projects using technologies like Reactjs, Bootstrap, Django, and MySQL.
          </p>

          <p className='mt-5 fs-5 text-break text-wrap'>
            As a Fresher, I am continuously learning new technologies and improving my development skills by working on practical projects. I am eager to contribute to innovative teams and grow as a software developer.
          </p>
        </div>
      </div>
    </div>

    <div className='studydiv d-flex gap-5'>

      <div 
        className='studies text-center'
        data-aos="zoom-in-up"
      >
        <h4 className='studyhead mt-4'>Studies</h4>

        <div className='studyin'>
          <h5>College</h5>
          <p>Mar Ephream College of Engineering and Technology (2021-2025)</p>

          <h5>School</h5>
          <p>Government Higher Secondary School Ezhudesapattu</p>
        </div>
      </div>

      <div 
        className='studies text-center'
        data-aos="zoom-in-up"
        data-aos-delay="200"
      >
        <h4 className='studyhead mt-4'>Internship</h4>

         <div className='studyin'>
          <h5>CCS</h5>
          <p>Completed a 6-month Full Stack Development Course</p>

          <h5>Ak Infopark</h5>
          <p>Completed a 1 month ReactJS</p>
        </div>
      </div>

      <div 
        className='studies text-center'
        data-aos="zoom-in-up"
        data-aos-delay="400"
      >
        <h4 className='studyhead mt-4'>Certification</h4>

         <div className='studyin'>
          <h5>CCS</h5>
          <p>Certified in Full Stack Development</p>

          <h5>Keltron</h5>
          <p>Certified in Python</p>
        </div>
      </div>

    </div>
    </>
  )
}

export default About