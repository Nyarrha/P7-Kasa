import { Link } from 'react-router-dom'
import logoHeader from '../../assets/LOGO.png'
import './Header.module.scss'

function Header() {
  return (
    <div className="header">
      <img className="logoHeader" src={logoHeader} alt="logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </div>
  )
}

export default Header
