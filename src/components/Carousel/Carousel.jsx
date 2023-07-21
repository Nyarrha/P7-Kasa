import previmg from '../../assets/previous.png'
import nextimg from '../../assets/nextimg.png'
import { useState } from 'react'
import css from './Carousel.module.scss'

function Carousel({ pictures, title }) {
  const [pictureIndex, setpictureIndex] = useState(0)
  const previous = () => {
    pictureIndex === 0
      ? setpictureIndex(pictures.length - 1)
      : setpictureIndex(pictureIndex - 1)
  }
  const next = () => {
    pictureIndex === pictures.length - 1
      ? setpictureIndex(0)
      : setpictureIndex(pictureIndex + 1)
  }

  return (
    <div className={css.carousel}>
      <img
        className={pictures.length === 1 ? `${css.hidden}` : `${css.prev}`}
        src={previmg}
        onClick={previous}
        alt="Previous"
      />
      <img src={pictures[pictureIndex]} alt={title} />
      <span
        className={pictures.length === 1 ? `${css.hidden}` : `${css.number}`}
      >{`${pictureIndex + 1}/${pictures.length}`}</span>
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
