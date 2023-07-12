import { useState } from 'react'

function CarouselItem({ pictures, picture }) {
  const [pictureIndex, setpictureIndex] = useState(0)
  return (
    <div>
      <button
        onClick={() => {
          pictureIndex <= 0
            ? setpictureIndex(pictures.length)
            : setpictureIndex(pictureIndex - 1)
        }}
      >
        Previous
      </button>
      <img src={picture} alt="room visuals" />
      <button
        onClick={() => {
          pictureIndex >= pictures.length
            ? setpictureIndex(pictures.length)
            : setpictureIndex(pictureIndex + 1)
        }}
      >
        Next
      </button>
    </div>
  )
}

export default CarouselItem
