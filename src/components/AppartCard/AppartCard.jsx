import { Link } from 'react-router-dom'
import css from './AppartCard.module.scss'

// Création composant de carte individuelle de logement
function AppartCard({ id, title, cover }) {
  return (
    // Lien vers page logement sélectionné à partir de son id
    <Link to={`/apparts/${id}`}>
      <div className={css.card}>
        <img className={css.image} src={cover} alt={title} />
        <div className={css.overlay}>
          <h3 className={css.title}>{title}</h3>
        </div>
      </div>
    </Link>
  )
}

export default AppartCard
