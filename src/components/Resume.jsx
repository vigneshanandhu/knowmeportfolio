import React, { useEffect, useRef, useState } from 'react'

const Resume = () => {

    const sectionRef = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShow(true)
                }
            },
            {
                threshold: 0.3,
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }

    }, [])

    return (
        <div
            ref={sectionRef}
            className={`container text-center border border-light w-75 mt-5 mb-5 resume-box ${show ? 'show' : ''
                }`}
        >

            <div className="row ">

                <div className="col-12">

                    <h1 className='mt-3'>Resume</h1>

                    <p className='mt-2'>
                        I am a passionate Full Stack Developer with knowledge in
                        React.js, JavaScript, Bootstrap, Django, and MySQL.
                        I enjoy building responsive and user-friendly web applications.
                        I am looking for an opportunity to improve my skills and
                        contribute to real-world projects.
                    </p>

                    <div className="d-flex justify-content-center gap-5 mb-3">

                        <button className='btn btn-primary'>
                            <a
                                className='text-white text-decoration-none'
                                href="/VigneshResume.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Preview
                            </a>
                        </button>

                        <button className='btn btn-primary'>
                            <a
                                className='text-white text-decoration-none'
                                download="VigneshResume.pdf"
                                href="/VigneshResume.pdf"
                            >
                                Download
                            </a>
                        </button>

                    </div>

                </div>

            </div>

            {/* CSS */}
            <style>
                {`
                    .resume-box{
                        opacity: 0;
                        transform: translateY(80px);
                        transition: all 1s ease;
                    }

                    .resume-box.show{
                        opacity: 1;
                        transform: translateY(0);
                    }
                `}
            </style>

        </div>
    )
}

export default Resume