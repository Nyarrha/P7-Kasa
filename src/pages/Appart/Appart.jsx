// Récupérer id dans url
// Page détails d'un appartement spécifique
import { useParams } from 'react-router-dom'
import React from 'react'
import { appartList } from '../../Datas/appartList'
import OpenButton from '../../components/OpenButton/OpenButton'

function Appart() {
  const { id } = useParams()
  const appart = appartList.find((item) => item.id === id)
  return (
    <div className="container" key={id}>
      id trouvé : {appart.id}
      {/* <Images /> */}
      <div className="header-container">
        <h1>{appart.title}</h1>
        {/* <Rating /> */}
        <ul>{/* <Tags /> */}</ul>
      </div>
      <div className="details-container">
        <div className="description">
          <h2>Description</h2>
          <OpenButton id={id} content={appart.description} />
        </div>

        <div className="equipments">
          <h2>Equipements</h2>
          {/* Liste equipments */}
        </div>
      </div>
    </div>
  )
}

export default Appart
