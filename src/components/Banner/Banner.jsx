import css from './Banner.module.scss'

function Banner({ banner }) {
  return <img src={banner} alt="banner" className={css.banner} />
}

export default Banner
