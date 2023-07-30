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

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apparts/:id" element={<Appart />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
