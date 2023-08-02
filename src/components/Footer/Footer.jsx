import logoFooter from '../../assets/LOGOFooter.png'
import css from './Footer.module.scss'

// Création component Footer
function Footer() {
  return (
    <div className={css.footer}>
      <img src={logoFooter} alt="logo" />
      <h2 className={css.footertxt}>2020 Kasa. All rights reserved</h2>
    </div>
  )
}

export default Footer
