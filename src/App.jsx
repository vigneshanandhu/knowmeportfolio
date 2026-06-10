import LandingPage from './LandingPage.jsx'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import About from './About.jsx'
import Project from './Project.jsx'
import Contact from './Contact.jsx'
import { Routes, Route } from 'react-router-dom'
import Skill from './Skill.jsx'
import Footer from './Footer.jsx'
import Resume from './Resume.jsx'


function App() {


  return (
    <>
      <Navbar />
     
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/project' element={<Project />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />










    </>
  )
}

export default App
