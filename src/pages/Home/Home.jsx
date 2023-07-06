import Footer from '../../components/Footer/Footer'
import homeLandScape from '../../assets/home-landscape.png'
import { appartList } from '../../Datas/appartList'
import AppartCard from '../../components/AppartCard/AppartCard'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <p>
        <img src={homeLandScape} alt="home landscape" />
        Test
      </p>
      <div className="appart-list-container">
        <ul className="appart-list">
          {appartList.map(({ id, title, cover }) => {
            return (
              <Link to={`/apparts/:${id}`}>
                <div key={id}>
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
