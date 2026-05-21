import React from 'react'
import './Resume.css'

const Resume = () => {
    return (
        <div className='resumepage'>
            <h1 className='resumehead text-center mt-4'>Resume</h1>
            <p className='sent fs-5 text-center mt-4 mx-2'>I am a passionate Full Stack Developer with knowledge in
                React.js, JavaScript, Bootstrap, Django, and MySQL.
                I enjoy building responsive and user-friendly web applications.
                I am looking for an opportunity to improve my skills and
                contribute to real-world projects.</p>

            <div className='resumeflexbtn d-flex'>
                <div className="resume-btn-container">
                <a
                    href="public/vignesh_resume.pdf"
                    
                    className="btn btn-primary"
                >
                    View Resume
                </a>
            </div>
            <div className="resume-btn-container">
                <a
                    href="/resume.pdf"
                    download="Vignesh_Resume.pdf"
                    className="btn btn-primary"
                >
                    Download Resume
                </a>
            </div>
            </div>
        </div>
    )
}

export default Resume