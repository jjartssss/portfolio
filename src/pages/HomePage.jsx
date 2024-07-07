import React from 'react'
import Home from '../sections/Home'
import Navigation from '../sections/Navigation'
import AboutMe from '../sections/AboutMe'
import Projects from '../sections/Projects'
import Blogs from '../sections/Blogs'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

const HomePage = () => {
  return (
    <div>
        <Navigation></Navigation>
        <Home></Home>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Blogs></Blogs>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default HomePage