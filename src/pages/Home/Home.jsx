import Footer from '../../components/Footer/Footer'
import homeLandScape from '../../assets/home-landscape.png'
import { appartList } from '../../Datas/appartList'
import AppartCard from '../../components/AppartCard/AppartCard'
import { Link } from 'react-router-dom'
import css from './Home.module.scss'
import Banner from '../../components/Banner/Banner'

function Home() {
  return (
    <div className={css.container}>
      <div className={css.bannercontainer}>
        <div className={css.bannerimg}>
          <Banner banner={homeLandScape} />
        </div>
        <div className={css.bannertitle}>Chez vous, partout et ailleurs</div>
      </div>

      <div className={css.appartlistcontainer}>
        <ul className={css.appartlist}>
          {appartList.map(({ id, title, cover }) => {
            return (
              <Link key={id} to={`/apparts/:${id}`}>
                <div>
                  <AppartCard id={id} cover={cover} title={title} />
                </div>
              </Link>
            )
          })}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Home
