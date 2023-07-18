// Afficher photo auteur, nom auteur, et fonction notation

// import Full from '../../assets/star-active 1.svg'
// import Empty from '../../assets/star-inactive 1.svg'

function Rating({ host, rating }) {
  const range = [1, 2, 3, 4, 5]
  const [firstName, lastName] = host.name.split(' ')

  return (
    <div className="container">
      <div className="host">
        <div className="hostname">
          <div>{firstName}</div>
          <div>{lastName}</div>
        </div>

        <img src={host.picture} alt="host pp" />
      </div>
      {/* faire saut de ligne pour nom/prénom*/}
      <div className="rating">
        {range.map((rangeAppart) =>
          rating >= rangeAppart ? (
            <span key={rangeAppart.toString()}>
              Full
              {/* {Full} */}
              {/* remplacer par étoile pleine */}
            </span>
          ) : (
            <span key={rangeAppart.toString()}>
              Empty
              {/* {Empty} */}
              {/* remplacer par étoile vide */}
            </span>
          )
        )}
      </div>
    </div>
  )
}

export default Rating
