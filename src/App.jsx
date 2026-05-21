import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import About from './About.jsx'
import Project from './Project.jsx'
import Contact from './Contact.jsx'
import { Routes,Route } from 'react-router-dom'
import Skill from './Skill.jsx'
import Footer from './Footer.jsx'
import Resume from './Resume.jsx'

function App() {
  

  return (
    <>
     <Navbar/>
     {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/skill' element={<Skill/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
     </Routes> */}
     {/* <section id='home'>
      <Home/>
      </section>
     <section id='about'>
      <About/>
      </section>
     <section id='skill'>
      <Skill/>
      </section> */}
     {/* <section id='project'>
      <Project/>
      </section> */}
     {/* <section id='resume'>
      <Resume/>
      </section> */}
     <section id='contact'>
      <Contact/>
      </section>
      

      <Footer/>
   
    
   

   
     
    </>
  )
}

export default App
