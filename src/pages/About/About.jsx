import landscapeAbout from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'
import './About.module.scss'
import Collapse from '../../components/Collapse/Collapse'
import aboutData from '../../Datas/About'
import css from './About.module.scss'

function About() {
  return (
    <div className={css.container}>
      <div>
        <img
          src={landscapeAbout}
          alt="about landscape"
          className={css.landscapeabout}
        />
      </div>
      <ul className={css.aboutcontainer}>
        {aboutData.map(({ title, content }) => {
          return (
            <div className={css.aboutcard} key={title}>
              <h2 className={css.title}>{title}</h2>
              <Collapse title={title} content={content} />
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default About
