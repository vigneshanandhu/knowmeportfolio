import React from 'react'

const Resume = () => {
    return (
        <div className='container text-center border border-light w-75 mt-5'>
           <div className="row">
            <div className="col-12">
                 <h1 className='mt-3'>Resume</h1>
            <p className='mt-2'>I am a passionate Full Stack Developer with knowledge in
                React.js, JavaScript, Bootstrap, Django, and MySQL.
                I enjoy building responsive and user-friendly web applications.
                I am looking for an opportunity to improve my skills and               
                contribute to real-world projects.</p>

            <div className="d-flex justify-content-center gap-5 mb-3">
                <button className='btn btn-primary'><a className='text-white text-decoration-none' href="/vignesh_Resume.pdf">Preview</a></button>
                <button className='btn btn-primary'><a className='text-white text-decoration-none' download="vignesh_Resume.pdf" href="public/vignesh_Resume.pdf">Download</a></button>

            </div>
            </div>
           </div>

        </div>
    )
}

export default Resume