import React from 'react'
import Home from '../sections/Home'
import Navigation from '../sections/Navigation'
import AboutMe from '../sections/AboutMe'

const HomePage = () => {
  return (
    <div>
        <Navigation></Navigation>
        <Home></Home>
        <AboutMe></AboutMe>
    </div>
  )
}

export default HomePage