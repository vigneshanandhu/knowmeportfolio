import React from 'react'
import AboutImg from './assets/Aboutme.png'
import './About.css'

const About = () => {
  return (
    <div className='container'>
      <h1 className="text-center mt-5">About Me</h1>
      <div className="row align-items-center mt-5">
        <div className="col-12 col-md-6 order-2 order-md-1 ">
          <img src={AboutImg} alt="" className='img-fluid mt-3 w-75 w-md-25 rounded d-block mx-auto ' />
        </div>
        <div className="col-12 col-md-6 order-1 order-md-2">
          <p className='text-center mt-4 fs-6 fs-md-5  '>
            Hello! I'm <strong>Vignesh V</strong>, a passionate Computer Science Graduate and Full Stack Developer Focused on building modern, responsive, and user-friendly web applications.
            I enjoy turning ideas into real-world projects using technologies like Reactjs, Bootstrap, Django, and MySQL.
            As a Fresher, I am continuously learning new technologies and improving my development skills by working on practical projects. I am eager to contribute to innovative teams and grow as a software developer.
          </p>
        </div>
        <div className="col-12 order-3 mb-5 d-md-flex gap-5 justify-content-center mt-5 align-items-start">
          <div className='studies border w-100 w-md-50 mt-3 text-center'>
            <h4 className='my-5 studyhead'>Studies</h4>

            <div className='hoverin m-3'>
              <h5>College</h5>
              <p>Mar Ephream College of Engineering and Technology (2021-2025)</p>

              <h5>School</h5>
              <p>Government Higher Secondary School Ezhudesapattu</p>
            </div>
          </div>
          <div className='studies border w-100 w-md-50 mt-3 text-center'>
            <h4 className='my-5 studyhead'>Internship</h4>

            <div className='hoverin m-3'>
              <h5>CCS</h5>
              <p>Completed a 6-month Full Stack Development Course</p>

              <h5>Ak Infopark</h5>
              <p>Completed a 1 month ReactJS</p>
            </div>
          </div>

          <div className='studies border w-100 w-md-50 mt-3 text-center '>
            <h4 className='my-5 studyhead'>Certification</h4>

            <div className='hoverin m-3'>
              <h5>CCS</h5>
              <p>Certified in Full Stack Development</p>

              <h5>Keltron</h5>
              <p>Certified in Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About