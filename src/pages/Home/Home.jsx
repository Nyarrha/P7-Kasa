import homeLandScape from '../../assets/home-landscape.png'
import { appartList } from '../../Datas/appartList'
import AppartCard from '../../components/AppartCard/AppartCard'
import { Link } from 'react-router-dom'
import css from './Home.module.scss'
import Banner from '../../components/Banner/Banner'

// Création page Home(accueil)
function Home() {
  return (
    <div className={css.container}>
      <div className={css.bannercontainer}>
        <div className={css.bannerimg}>
          {/* Appel component Banner */}
          <Banner banner={homeLandScape} />
        </div>
        {/* Affichage texte sur banner */}
        <div className={css.bannertitle}>Chez vous, partout et ailleurs</div>
      </div>

      <div className={css.appartlistcontainer}>
        {/* Création liste de tous les logements */}
        <ul className={css.appartlist}>
          {/* Itération sur liste logements */}
          {appartList.map(({ id, title, cover }) => {
            return (
              // Création carte de chaque logement
              // en lien redirigeant vers la page Appart correspondante
              <Link key={id} to={`/apparts/:${id}`}>
                <div>
                  <AppartCard id={id} cover={cover} title={title} />
                </div>
              </Link>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Home
