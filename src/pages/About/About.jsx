// Import components et données(ex : banner) de la page
import landscapeAbout from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'
import './About.module.scss'
import Collapse from '../../components/Collapse/Collapse'
import aboutData from '../../Datas/About'
import css from './About.module.scss'
import Banner from '../../components/Banner/Banner'

// Création page About
function About() {
  return (
    <div className={css.container}>
      <div className={css.banner}>
        {/* Appel component Banner avec prop banner */}
        <Banner banner={landscapeAbout} />
      </div>
      {/* Création liste de collapses à afficher */}
      <ul className={css.aboutcontainer}>
        {/* Itération liste des infos About appelé
        depuis fichier .json */}
        {aboutData.map(({ title, content }) => {
          return (
            // appel component Collapse à chaque élément about
            // avec props title et content
            <div className={css.aboutcard} key={title}>
              <Collapse title={title} content={content} />
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default About
