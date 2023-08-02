import previmg from '../../assets/previous.png'
import nextimg from '../../assets/nextimg.png'
import { useState } from 'react'
import css from './Carousel.module.scss'

// Création composant Carousel
function Carousel({ pictures, title }) {
  // Ecoute de l'index de l'image parmi
  // la liste de celles disponibles(1ère par défaut)
  const [pictureIndex, setpictureIndex] = useState(0)
  // Evènement pour passer d'une image à l'autre
  const previous = () => {
    // Si l'index image = 0(1ère image)
    pictureIndex === 0
      ? // Retourner fin du tableau pour sélectionner dernière
        setpictureIndex(pictures.length - 1)
      : // Sinon, sélectionner image précédente
        setpictureIndex(pictureIndex - 1)
  }
  const next = () => {
    // Si index image = la dernière
    pictureIndex === pictures.length - 1
      ? // Retourner début tableau pour sélectionner première
        setpictureIndex(0)
      : // Sinon, sélectionner image suivante
        setpictureIndex(pictureIndex + 1)
  }

  return (
    // div container pour positionner
    // éléments adjacents sur image
    <div className={css.carousel}>
      {/* Flèche précédente avec écoute évènement click */}
      {/* Si click : fonction previous */}
      <img
        className={pictures.length === 1 ? `${css.hidden}` : `${css.prev}`}
        src={previmg}
        onClick={previous}
        alt="Previous"
      />
      {/* Image sélectionnée avec écoute useState */}
      <img className={css.cover} src={pictures[pictureIndex]} alt={title} />
      {/* Numérotation image(caché s'il n'y a qu'une image) */}
      <span
        className={pictures.length === 1 ? `${css.hidden}` : `${css.number}`}
      >{`${pictureIndex + 1}/${pictures.length}`}</span>
      {/* Flèche précédente avec écoute évènement click */}
      {/* Si click : fonction next */}
      <img
        className={pictures.length === 1 ? `${css.hidden}` : `${css.next}`}
        src={nextimg}
        alt="Next"
        onClick={next}
      />
    </div>
  )
}

export default Carousel
