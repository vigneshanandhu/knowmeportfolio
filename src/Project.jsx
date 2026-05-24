import React from 'react'
import ProjectImg1 from './assets/portimage.jpg'
import ProjectImg2 from './assets/simpleshop.jpg'
import ProjectImg3 from './assets/whatsappcloneimage.jpg'
import ProjectImg4 from './assets/farmimage.jpg'


const Project = () => {
  return (
    <div className='container mb-5'>
      <h1 className='text-center mt-3'>My Projects</h1>
      <div className="row mt-3">
        <div className=" col-12 col-sm-6 col-md-6 col-lg-3 mt-md-2 my-sm-2 ">
          <div className="card bg-white ">
            <img className='card-img-top img-fluid rounded-0 border-0   mt-0' style={{ height: '200px' }} src={ProjectImg1} alt="" />
            <div className="card-body">
              <h4 className='card-title'>Portfolio Website</h4>
              <p className='card-text'>I build a portfolio website to showcase my skill using reactjs and bootstrap. </p>
              <div className="card-btn d-flex gap-5 mx-3">
                <button className="btn btn-primary"><a className='text-decoration-none text-white' href="https://github.com/vigneshanandhu/knowmeportfolio">Code</a></button>
                <button className="btn btn-primary"><a className='text-decoration-none text-white' href="https://knowmeportfolio.vercel.app/">Live</a></button>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-12 col-sm-6 col-md-6 col-lg-3 mt-md-2 mt-2">
          <div className="card bg-white ">
            <img className='card-img-top img-fluid rounded-0 border-0   mt-0' style={{ height: '200px' }} src={ProjectImg2} alt="" />
            <div className="card-body">
              <h4 className='card-title'>Shop Website</h4>
              <p className='card-text'>This is my first frontend simple shop website using html, css and javascript.</p>
              <div className="card-btn  d-flex gap-5 mx-3">
                <button className="btn btn-primary"><a className='text-decoration-none text-white' href="https://github.com/vigneshanandhu/simpleshop">Code</a></button>
                <button className="btn btn-primary"><a className='text-decoration-none text-white' href="https://simpleshop-eight.vercel.app/">Live</a></button>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-12 col-sm-6 col-md-6 col-lg-3 mt-md-2 mt-2">
          <div className="card bg-white ">
            <img className='card-img-top img-fluid rounded-0 border-0   mt-0' style={{ height: '200px' }} src={ProjectImg3} alt="" />
            <div className="card-body">
              <h4 className='card-title'>Whatsappclone Website</h4>
              <p className='card-text'>I think build a frontend for whatsappclone website using html and css.</p>
              <div className="card-btn  d-flex gap-5 mx-3">
                <button className="btn btn-primary"><a className='text-decoration-none text-white' href="https://github.com/vigneshanandhu/whatsappclone">Code</a></button>
                <button className="btn btn-primary"><a className='text-decoration-none text-white' href="https://whatsappclone-flax.vercel.app/">Live</a></button>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-12 col-sm-6 col-md-6 col-lg-3 mt-md-2 mt-2">
          <div className="card bg-white ">
            <img className='card-img-top img-fluid rounded-0 border-0   mt-0' style={{ height: '200px' }} src={ProjectImg4} alt="" />
            <div className="card-body">
              <h4 className='card-title'>Farm Website</h4>
              <p className='card-text'>I build a Vegetables shopping website using reactjs and bootstrap. </p>
              <div className="card-btn d-flex gap-5 mx-3">
                <button className="btn btn-primary"><a className='text-decoration-none text-white' href="https://github.com/vigneshanandhu/Farm2Home">Code</a></button>
                <button className="btn btn-primary"><a className='text-decoration-none text-white' href="https://farm2-home-three.vercel.app/">Live</a></button>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Project