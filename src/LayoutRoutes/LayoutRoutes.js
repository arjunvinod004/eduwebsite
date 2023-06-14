import React from 'react'
import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom'
import Plans from '../components/Pages/Plans/Plans'
import Courses from '../components/Pages/Courses/Courses'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../components/Pages/Home/Home'
import AboutUs from '../components/Pages/AboutUs/AboutUs'
import Contact from '../components/Pages/Contact/Contact'
function LayoutRoutes() {
  return (
  <Router>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Plans/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/about us' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
  </Router>
  )
}

export default LayoutRoutes
