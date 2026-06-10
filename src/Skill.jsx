import React, { useEffect, useRef, useState } from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPython,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'

import {
  SiTailwindcss,
  SiDjango,
  SiMysql,
  SiMongodb,
  SiPostman,
} from 'react-icons/si'

import { VscVscode } from 'react-icons/vsc'

/* AOS */
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skill = () => {

  const skillsRef = useRef(null)
  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {

    // AOS Initialization
    AOS.init({
      duration: 1200,
      once: true,
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true)
        }
      },
      { threshold: 0.3 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])

  const frontendSkills = [
    { name: 'HTML', icon: <FaHtml5 />, percentage: 95 },
    { name: 'CSS', icon: <FaCss3Alt />, percentage: 90 },
    { name: 'JavaScript', icon: <FaJs />, percentage: 85 },
    { name: 'React JS', icon: <FaReact />, percentage: 90 },
    { name: 'Bootstrap', icon: <FaBootstrap />, percentage: 92 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, percentage: 80 },
  ]

  const backendSkills = [
    { name: 'Python', icon: <FaPython />, percentage: 88 },
    { name: 'Django', icon: <SiDjango />, percentage: 85 },
    { name: 'REST API', icon: <SiDjango />, percentage: 80 },
  ]

  const databaseSkills = [
    { name: 'MySQL', icon: <SiMysql />, percentage: 85 },
    { name: 'MongoDB', icon: <SiMongodb />, percentage: 75 },
  ]

  const toolsSkills = [
    { name: 'Git', icon: <FaGitAlt />, percentage: 90 },
    { name: 'GitHub', icon: <FaGithub />, percentage: 92 },
    { name: 'VS Code', icon: <VscVscode />, percentage: 95 },
    { name: 'Postman', icon: <SiPostman />, percentage: 85 },
  ]

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} className="mb-4">

        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="mb-0 d-flex align-items-center gap-2">
            <span style={{ fontSize: '22px' }}>
              {skill.icon}
            </span>
            {skill.name}
          </h6>

          <span>{skill.percentage}%</span>
        </div>

        <div
          className="progress"
          style={{ height: '10px' }}
        >
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{
              width: startAnimation ? `${skill.percentage}%` : '0%',
              transition: 'width 2s ease-in-out',
            }}
          ></div>
        </div>

      </div>
    ))
  }

  return (
    <div className='container py-5' ref={skillsRef}>

      <h1
        className='text-center mb-5'
        data-aos="fade-down"
      >
        Skills
      </h1>

      <div className="row g-4">

        {/* Frontend */}
        <div
          className="col-12 col-md-6"
          data-aos="fade-right"
        >
          <div className="shadow p-4 rounded h-100">
            <h4 className='text-center mb-4'>Frontend</h4>
            {renderSkills(frontendSkills)}
          </div>
        </div>

        {/* Backend */}
        <div
          className="col-12 col-md-6"
          data-aos="fade-left"
        >
          <div className="shadow p-4 rounded h-100">
            <h4 className='text-center mb-4'>Backend</h4>
            {renderSkills(backendSkills)}
          </div>
        </div>

        {/* Database */}
        <div
          className="col-12 col-md-6"
          data-aos="zoom-in"
        >
          <div className="shadow p-4 rounded h-100">
            <h4 className='text-center mb-4'>Database</h4>
            {renderSkills(databaseSkills)}
          </div>
        </div>

        {/* Tools */}
        <div
          className="col-12 col-md-6"
          data-aos="flip-left"
        >
          <div className="shadow p-4 rounded h-100">
            <h4 className='text-center mb-4'>Tools</h4>
            {renderSkills(toolsSkills)}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skill