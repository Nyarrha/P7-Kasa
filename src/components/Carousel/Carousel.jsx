import CarouselItem from './CarouselItem'

function Carousel({ pictures }) {
  return (
    <ul className="carousel">
      {pictures.map((index, picture) => {
        return (
          <div key={index}>
            <CarouselItem picture={picture} />
          </div>
        )
      })}
      <CarouselItem />
    </ul>
  )
}

export default Carousel
