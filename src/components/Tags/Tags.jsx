import css from './Tags.module.scss'

// Création component Tags
function Tags({ tags }) {
  return (
    <div className={css.tags}>
      {/* Itération liste tags */}
      {tags.map((tag) => (
        // affichage chaque valeur de la liste
        <div className={css.tag} key={tag}>
          {tag}
        </div>
      ))}
    </div>
  )
}

export default Tags
