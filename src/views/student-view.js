import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import Student from '../components/student'
import Chatbot from '../components/chatbot1'
import './home.css'

const StudentView = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Frugal Serious Manatee</title>
        <meta property="og:title" content="Frugal Serious Manatee" />
      </Helmet>
      <Navbar8></Navbar8>
      <Chatbot></Chatbot>
      <Student></Student>
      <Footer4></Footer4>
    </div>
  )
}

export default StudentView
