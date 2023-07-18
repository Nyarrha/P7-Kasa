import Footer from '../../components/Footer/Footer'
import homeLandScape from '../../assets/home-landscape.png'
import { appartList } from '../../Datas/appartList'
import AppartCard from '../../components/AppartCard/AppartCard'
import { Link } from 'react-router-dom'
import css from './Home.module.scss'

function Home() {
  return (
    <div className={css.container}>
      <div className={css.covercontainer}>
        <img src={homeLandScape} alt="home landscape" className={css.homepic} />
        <span className={css.hometitle}>Chez vous, partout et ailleurs</span>
      </div>
      <div className={css.appartlistcontainer}>
        <ul className="appart-list">
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
