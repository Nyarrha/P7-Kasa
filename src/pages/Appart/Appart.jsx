// Import components, useParams, Navigate et données
import { useParams, Navigate } from 'react-router-dom'
import React from 'react'
import { appartList } from '../../Datas/appartList'
import Collapse from '../../components/Collapse/Collapse'
import Rating from '../../components/Rating/Rating'
import Carousel from '../../components/Carousel/Carousel'
import Tags from '../../components/Tags/Tags'
import css from './Appart.module.scss'

function Appart() {
  // variable id qui récupère l'id dans le lien dans l'URL
  const { id } = useParams()
  // Compare l'id de l'appart demandé à ceux disponibles
  const appart = appartList.find((item) => item.id === id)
  // Si aucun id n'est trouvé, redirige vers page error
  if (appart === undefined) {
    return <Navigate to="/error" />
  } else {
    // Sinon afficher page appart
    return (
      <div className={css.container}>
        {/* Appel component Carousel */}
        <div>
          <Carousel pictures={appart.pictures} title={appart.title} />
        </div>

        <div className={css.presentcontainer}>
          <div className={css.titlescontainer}>
            <h1 className={css.title}>{appart.title}</h1>
            <span className={css.location}>{appart.location}</span>
            {/* Appel component Tags */}
            <div className={css.tags}>
              <Tags tags={appart.tags} />
            </div>
          </div>
          <div className={css.ratingcontainer}>
            {/* Appel component Rating */}
            <div className={css.rating}>
              <Rating host={appart.host} rating={appart.rating} />
            </div>
          </div>
        </div>

        {/* Container details avec 
        appels component Collapse */}
        <div className={css.details}>
          <div className={css.description}>
            <Collapse
              id={id}
              title="Description"
              content={appart.description}
            />
          </div>
          <div className={css.equipments}>
            <Collapse title="Equipements" id={id} content={appart.equipments} />
          </div>
        </div>
      </div>
    )
  }
}

export default Appart
