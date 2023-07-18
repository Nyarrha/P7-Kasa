import { Link } from 'react-router-dom'
import css from './AppartCard.module.scss'

function AppartCard({ id, title, cover }) {
  return (
    <Link to={`/apparts/${id}`}>
      <li className={css.appartcard}>
        <img
          src={cover}
          alt={`${title} cover`}
          className={css.appartitemcover}
        />
        <span className={css.appartitemtitle}>{title}</span>
      </li>
    </Link>
  )
}

export default AppartCard
