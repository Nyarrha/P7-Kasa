import { Link } from 'react-router-dom'
import logoHeader from '../../assets/LOGO.png'
import css from './Header.module.scss'

function Header() {
  return (
    <div className={css.headercontainer}>
      <img className={css.logoheader} src={logoHeader} alt="logo" />
      <nav>
        <div className={css.link}>
          <Link to="/">Accueil</Link>
        </div>
        <div className={css.link}>
          <Link to="/about">A propos</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
