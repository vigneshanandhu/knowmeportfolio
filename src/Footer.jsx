import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footerpage text-light'>
       <div className='d-flex justify-content-around'>
           <div className='mt-5'>
                  <h2>Vignesh V</h2>
                    <p>Frontend & Full Stack Developer</p>
           </div>

        <div className='footerlist d-flex flex-column mt-3'>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skill">Skills</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact</a>
        </div>
        <div className='socialmedia d-flex flex-row gap-3 mt-5'>
             <a href="https://www.linkedin.com/in/vigneshv11/" target='_blank'><i class="fa-brands fa-square-linkedin"></i></a>
                <a href="https://github.com/vigneshanandhu?tab=repositories" target='_blank'><i class="fa-brands fa-github text-primary"></i></a>
                <a href="mailto:vigneshanandhu2003@gmail.com"><i class="fa-solid fa-envelope"></i></a>
        </div>
        </div>
        <p className='text-center mt-4'>@2026 Vignesh. All Rights Reserved</p>

    
    </div>
  )
}

export default Footer