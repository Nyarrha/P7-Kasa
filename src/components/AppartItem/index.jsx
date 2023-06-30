import { Link } from 'react-router-dom'

function AppartItem({ id, title, cover }) {
  return (
    <Link to={`/${id}`}>
      <li className="appart-item">
        <img src={cover} alt={`${title} cover`} className="appart-item-cover" />
        <span className="appart-item-title">{title}</span>
      </li>
    </Link>
  )
}

export default AppartItem
