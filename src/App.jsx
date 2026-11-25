import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/Home'
import Services from './Components/Services'
import AboutMe from './Components/About'
import Contact from './Components/Contact'
import RefundPolicy from './Components/RefundPolicy'
import PrivacyPolicy from './Components/PrivacyPolicy'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/RefundPolicy" element={<RefundPolicy />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      
      </Routes>
    </Router>
  )
}

export default App