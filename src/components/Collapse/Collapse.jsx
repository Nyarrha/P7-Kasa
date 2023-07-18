import { useState } from 'react'
import Up from '../../assets/Up.png'
import Down from '../../assets/Down.png'
import css from './Collapse.scss'

function Collapse({ content }) {
  const [isOpen, setOpen] = useState(true)
  const down = () => setOpen(false)
  const up = () => setOpen(true)
  return isOpen ? (
    <div className={css.titlecontainer}>
      <img src={Down} alt="Collapse" onClick={down} className={css.down} />
    </div>
  ) : (
    <div className={css.tabcontainer}>
      <img src={Up} alt="Collapse" onClick={up} className={css.up} />
      <p>{content}</p>
    </div>
  )
}

export default Collapse
