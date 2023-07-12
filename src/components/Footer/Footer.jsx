import logoFooter from '../../assets/LOGOFooter.png'
import './Footer.module.scss'

function Footer() {
  return (
    <div className="footer">
      <img src={logoFooter} alt="logo" />
      <h2>2020 Kasa. All rights reserved</h2>
    </div>
  )
}

export default Footer
