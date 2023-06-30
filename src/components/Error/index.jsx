import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <h1>
        404
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retourner à la page d'accueil</Link>
      </h1>
    </div>
  )
}

export default Error
