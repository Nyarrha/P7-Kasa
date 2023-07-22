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
      <div className={css.carousel}>
        <Carousel pictures={appart.pictures} title={appart.title} />
      </div>
      <div className={css.headercontainer}>
        <h1 className={css.title}>{appart.title}</h1>
        <span className={css.location}>{appart.location}</span>
        <div className={css.tags}>
          <Tags tags={appart.tags} />
        </div>
        <Rating host={appart.host} rating={appart.rating} />
      </div>
      <div className={css.description}>
        <Collapse id={id} title="Description" content={appart.description} />
      </div>
      <div className={css.equipments}>
        <Collapse title="Equipements" id={id} content={appart.equipments} />
      </div>
    </div>
  )
}

export default Appart
