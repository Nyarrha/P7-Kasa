// Récupérer id dans url
import { useParams } from 'react-router-dom'

function Appart() {
  const { id } = useParams()
  return <div>id : {id}</div>
}

export default Appart
