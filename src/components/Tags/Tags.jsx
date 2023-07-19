import css from './Tags.module.scss'

function Tags({ tags }) {
  return (
    <div className={css.tags}>
      <span>{tags}</span>
    </div>
  )
}

export default Tags
