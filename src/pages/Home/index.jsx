import Footer from '../../components/Footer'
import homeLandScape from '../../assets/home-landscape.png'
import { appartList } from '../../components/Datas/appartList'
import AppartItem from '../../components/AppartItem'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

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
              <Link to={`/apparts/${id}`}>
                <div key={id}>
                  <AppartItem id={id} cover={cover} title={title} />
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
