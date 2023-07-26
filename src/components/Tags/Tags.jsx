import css from './Tags.module.scss'

function Tags({ tags }) {
  return (
    <div className={css.tags}>
      {tags.map((tag) => (
        <div className={css.tag} key={tag}>
          {tag}
        </div>
      ))}
    </div>
  )
}

export default Tags
