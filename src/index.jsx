import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import Header from './components/Header/'
import Error from './components/Error'
import About from './pages/About'
import Appart from './pages/Appart'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/apparts/id" element={<Appart />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
