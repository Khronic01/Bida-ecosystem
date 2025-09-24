import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Ecosystem from './pages/Ecosystem.jsx'
import Tokenomics from './pages/Tokenomics.jsx'
import Roadmap from './pages/Roadmap.jsx'
import Governance from './pages/Governance.jsx'

function AppContent() {
  const location = useLocation()
  const currentPageName = location.pathname === '/' ? 'Home' : 
    location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2)

  return (
    <Layout currentPageName={currentPageName}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/governance" element={<Governance />} />
      </Routes>
    </Layout>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
