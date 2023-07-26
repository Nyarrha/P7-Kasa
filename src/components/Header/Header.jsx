import { NavLink } from 'react-router-dom'
import logoHeader from '../../assets/LOGO.png'
import './Header.scss'

function Header() {
  return (
    <div className="headercontainer">
      <img className="logoheader" src={logoHeader} alt="logo" />
      <nav className="navlinks">
        <div className="link">
          <NavLink to="/">Accueil</NavLink>
        </div>
        <div className="link">
          <NavLink to="/about">A propos</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Header
