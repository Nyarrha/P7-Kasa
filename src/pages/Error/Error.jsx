import { Link } from 'react-router-dom'
import css from './Error.module.scss'

function Error() {
  return (
    <div className={css.container}>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <div className={css.backhome}>
        {/* Lien redirigeant sur page Home */}
        <Link to="/">Retourner à la page d'accueil</Link>
      </div>
    </div>
  )
}

export default Error
