import previmg from '../../assets/previous.png'
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
        className={css.prev}
        src={previmg}
        onClick={previous}
        alt="Previous"
      />
      <img src={pictures[pictureIndex]} alt={title} />
      <button onClick={next}>Next</button>
    </div>
  )
}

export default Carousel
