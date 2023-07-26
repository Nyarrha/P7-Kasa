// Afficher photo auteur, nom auteur, et fonction notation

import Full from '../../assets/fullstar.png'
import Empty from '../../assets/emptystar.png'
import css from './Rating.module.scss'

function Rating({ host, rating }) {
  const range = [1, 2, 3, 4, 5]
  const [firstName, lastName] = host.name.split(' ')

  return (
    <div className={css.container}>
      <div className={css.host}>
        <div className={css.hostname}>
          <div>{firstName}</div>
          <div>{lastName}</div>
        </div>
        <img className={css.hostpic} src={host.picture} alt="host profile" />
      </div>
      <div>
        {range.map((rangeAppart) =>
          rating >= rangeAppart ? (
            <img src={Full} alt="Full star" key={rangeAppart.toString()} />
          ) : (
            <img src={Empty} alt="Empty star" key={rangeAppart.toString()} />
          )
        )}
      </div>
    </div>
  )
}

export default Rating
