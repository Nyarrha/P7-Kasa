import './Header.module.css'
import { Link } from 'react-router-dom'
import logoHeader from '../../assets/LOGO.png'
import './Header.module.css'

function Header() {
  return (
    <div className="header">
      <img className="logoHeader" src={logoHeader} alt="logo" />
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </div>
  )
}

export default Header
