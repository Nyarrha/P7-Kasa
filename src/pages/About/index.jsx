import landscapeAbout from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'
import './About.module.css'
import { useState } from 'react'

function About() {
  const [isFiabilityOpen, setIsFiabilityOpen] = useState(true)
  const [isRespectOpen, setIsRespectOpen] = useState(true)
  const [isServiceOpen, setIsServiceOpen] = useState(true)
  const [isSecurityOpen, setIsSecurityOpen] = useState(true)

  return (
    <div className="container">
      <img src={landscapeAbout} alt="about landscape" />
      {isFiabilityOpen ? (
        <div className="title-container">
          <h2 className="tab-title">Fiabilité</h2>
          <button
            className=""
            onClick={() => {
              // changer sens flèche
              setIsFiabilityOpen(false)
            }}
          >
            <span>ouvrir</span>
          </button>
        </div>
      ) : (
        <div className="tab-container">
          <div className="title-container">
            <h2 className="tab-title">Fiabilité</h2>
            <button
              className=""
              onClick={() => {
                // changer sens flèche
                setIsFiabilityOpen(true)
              }}
            >
              <span>fermer</span>
            </button>
          </div>

          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </div>
      )}

      {isRespectOpen ? (
        <div className="title-container">
          <h2 className="tab-title">Respect</h2>
          <button
            className=""
            onClick={() => {
              // changer sens flèche
              setIsRespectOpen(false)
            }}
          >
            <span>ouvrir</span>
          </button>
        </div>
      ) : (
        <div className="tab-container">
          <div className="title-container">
            <h2 className="tab-title">Respect</h2>
            <button
              className=""
              onClick={() => {
                // changer sens flèche
                setIsRespectOpen(true)
              }}
            >
              <span>fermer</span>
            </button>
          </div>

          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
      )}

      {isServiceOpen ? (
        <div className="title-container">
          <h2 className="tab-title">Service</h2>
          <button
            className=""
            onClick={() => {
              // changer sens flèche
              setIsServiceOpen(false)
            }}
          >
            <span>ouvrir</span>
          </button>
        </div>
      ) : (
        <div className="tab-container">
          <div className="title-container">
            <h2 className="tab-title">Service</h2>
            <button
              className=""
              onClick={() => {
                // changer sens flèche
                setIsServiceOpen(true)
              }}
            >
              <span>fermer</span>
            </button>
          </div>

          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </div>
      )}

      {isSecurityOpen ? (
        <div className="title-container">
          <h2 className="tab-title">Sécurité</h2>
          <button
            className=""
            onClick={() => {
              // changer sens flèche
              setIsSecurityOpen(false)
            }}
          >
            <span>ouvrir</span>
          </button>
        </div>
      ) : (
        <div className="tab-container">
          <div className="title-container">
            <h2 className="tab-title">Sécurité</h2>
            <button
              className=""
              onClick={() => {
                // changer sens flèche
                setIsSecurityOpen(true)
              }}
            >
              <span>fermer</span>
            </button>
          </div>
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </div>
      )}
    </div>
  )
}

export default About
