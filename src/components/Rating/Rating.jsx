// Afficher photo auteur, nom auteur, et fonction notation

function Rating({ host, rating }) {
  const range = [1, 2, 3, 4, 5]
  const name = host.name.replace(
    '\u0020'
    // trouver unicode linebreak
  )

  return (
    <div className="container">
      <div className="host">
        {name}
        <img src={host.picture} alt="host pp" />
      </div>
      {/* faire saut de ligne pour nom/prénom*/}
      <div className="rating">
        {range.map((rangeAppart) =>
          rating >= rangeAppart ? (
            <span key={rangeAppart.toString()}>
              M{/* remplacer par étoile pleine */}
            </span>
          ) : (
            <span key={rangeAppart.toString()}>
              O{/* remplacer par étoile pleine */}
            </span>
          )
        )}
      </div>
    </div>
  )
}

export default Rating
