import Full from '../../assets/fullstar.png'
import Empty from '../../assets/emptystar.png'
import css from './Rating.module.scss'

// Création component rating avec props hôte et notation
function Rating({ host, rating }) {
  // range pour comparer à valeur rating logement
  const range = [1, 2, 3, 4, 5]
  // split pour saut à la ligne sur nom hôte
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
        {/* itération sur array range */}
        {range.map((rangeAppart) =>
          // Si notation logement >= valeur index range
          rating >= rangeAppart ? (
            // Afficher étoile pleine
            <img src={Full} alt="Full star" key={rangeAppart.toString()} />
          ) : (
            // sinon afficher étoile vide
            <img src={Empty} alt="Empty star" key={rangeAppart.toString()} />
          )
        )}
      </div>
    </div>
  )
}

export default Rating
