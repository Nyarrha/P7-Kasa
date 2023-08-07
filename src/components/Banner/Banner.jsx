import css from './Banner.module.scss'

// Création composant Banner pour page Home et About
function Banner({ imageUrl, text }) {
  // return <img src={banner} alt="banner" />
  return (
    <div className={css.banner}>
      <img src={imageUrl} className={css.image} alt="Banner" />
      <div className={css.overlay}>
        <span className={css.slogan}>{text}</span>
      </div>
    </div>
  )
}

export default Banner
