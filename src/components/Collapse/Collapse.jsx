import { useState } from 'react'
import Up from '../../assets/Up.png'
import Down from '../../assets/Down.png'
import css from './Collapse.module.scss'

function Collapse({ title, content }) {
  const [isOpen, setOpen] = useState(true)
  const toggle = () => setOpen(!isOpen)
  console.log(typeof content)
  return (
    <div className={css.dropdown}>
      <div className={css.titlecontainer}>
        <h2>{title}</h2>
        <img
          src={isOpen ? `${Up}` : `${Down}`}
          alt="Collapse"
          onClick={toggle}
          className={css.collapse}
        />
      </div>
      <div className={isOpen ? `${css.content}` : `${css.hidden}`}>
        {typeof content === 'string'
          ? content
          : content.map((element, i) => <div key={i}>{element}</div>)}
      </div>
    </div>
  )
}

export default Collapse
