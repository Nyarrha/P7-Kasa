// Récupérer id dans url
// Page détails d'un appartement spécifique
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
// import { appartList } from '../../components/Datas/appartList'

function Appart(/*{
  id,
  title,
  pictures,
  description,
  host,
  rating,
  location,
  equipments,
  tags,
}*/) {
  const [isDescriptionOpen, setDescriptionOpen] = useState(true)
  const [isEquipmentsOpen, setEquipmentsOpen] = useState(true)
  const { appartId } = useParams()
  return (
    <div className="container">
      id trouvé : {appartId}
      {/* <img src={image random} alt="room" /> */}
      <div className="header-container">
        <h1>{/* {Title} */}</h1>
        {/* <Rating /> */}
        <ul>{/* <Equipments /> */}</ul>
      </div>
      <div className="details-container">
        {isDescriptionOpen ? (
          <div className="description-container">
            <h2 className="tab-description">Description</h2>
            <button
              onClick={() => {
                // changer sens flèche
                setDescriptionOpen(false)
              }}
            >
              <span>ouvrir</span>
            </button>
          </div>
        ) : (
          <div className="description-container">
            <h2 className="tab-description">Description</h2>
            <button
              onClick={() => {
                // changer sens flèche
                setDescriptionOpen(true)
              }}
            >
              <span>fermer</span>
            </button>
            <p className="details-text">{/* {description} */}</p>
          </div>
        )}

        <div className="equipments">
          {isEquipmentsOpen ? (
            <div className="equipments-container">
              <h2 className="tab-equipments">Équipements</h2>
              <button
                onClick={() => {
                  // changer sens flèche
                  setDescriptionOpen(false)
                }}
              >
                <span>ouvrir</span>
              </button>
            </div>
          ) : (
            <div className="equipments-container">
              <h2 className="tab-equipments">Description</h2>
              <button
                onClick={() => {
                  // changer sens flèche
                  setEquipmentsOpen(false)
                }}
              >
                <span>fermer</span>
              </button>
              <p className="details-text">{/* {equipments} */}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Appart
