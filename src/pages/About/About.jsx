import landscapeAbout from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'
import './About.module.scss'
import OpenButton from '../../components/OpenButton/OpenButton'
import aboutData from '../../Datas/About'

function About() {
  return (
    <div className="container">
      <img src={landscapeAbout} alt="about landscape" />
      <ul className="about-container">
        {aboutData.map(({ title, content }) => {
          return (
            <div key={title}>
              <h2 className="title">{title}</h2>
              <OpenButton title={title} content={content} />
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default About
