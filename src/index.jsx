import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Error from './pages/Error/Error'
import About from './pages/About/About'
import Appart from './pages/Appart/Appart'
import Footer from './components/Footer/Footer'

// Création page React index
ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* Appel component Header */}
      <Header />
      {/* Création liste routes */}
      <Routes>
        {/* Route page Home */}
        <Route path="/" element={<Home />} />
        {/* Route page About */}
        <Route path="/about" element={<About />} />
        {/* Route page détails logement choisi */}
        <Route path="/apparts/:id" element={<Appart />} />
        {/* Route page Error */}
        <Route path="/error" element={<Error />} />
        {/* Redirection page Error pour gestion mauvaises URL */}
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
      {/* Appel component Footer */}
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
