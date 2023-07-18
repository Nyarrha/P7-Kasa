// Récupérer id dans url
// Page détails d'un appartement spécifique
import { useParams } from 'react-router-dom'
import React from 'react'
import { appartList } from '../../Datas/appartList'
import Collapse from '../../components/Collapse/Collapse'
import Rating from '../../components/Rating/Rating'
import Carousel from '../../components/Carousel/Carousel'
import Tags from '../../components/Tags/Tags'
import css from './Appart.module.scss'

function Appart() {
  const { id } = useParams()
  const appart = appartList.find((item) => item.id === id)
  return (
    <div className={css.container} key={id}>
      id trouvé : {appart.id}
      <Carousel pictures={appart.pictures} title={appart.title} />
      <div className={css.headercontainer}>
        <h1>{appart.title}</h1>
        <span>{appart.location}</span>
        <Rating host={appart.host} rating={appart.rating} />
        <div className={css.tags}>
          <Tags tags={appart.tags} />
        </div>
      </div>
      <div className={css.detailscontainer}>
        <div className={css.description}>
          <h2>Description</h2>
          <Collapse id={id} content={appart.description} />
        </div>

        <div className={css.equipments}>
          <h2>Equipements</h2>
          <div>
            <Collapse id={id} content={appart.equipments} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appart
