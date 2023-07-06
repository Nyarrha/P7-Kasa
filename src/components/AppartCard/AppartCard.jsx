import { Link } from 'react-router-dom'

function AppartCard({ id, title, cover }) {
  return (
    <Link to={`/apparts/${id}`}>
      <li className="appart-item">
        <img src={cover} alt={`${title} cover`} className="appart-item-cover" />
        <span className="appart-item-title">{title}</span>
      </li>
    </Link>
  )
}

export default AppartCard
