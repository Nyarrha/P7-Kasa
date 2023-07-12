import { useState } from 'react'
import Up from '../../assets/Up.svg'
import Down from '../../assets/Down.svg'

function OpenButton({ content }) {
  const [isOpen, setOpen] = useState(true)
  return isOpen ? (
    <div className="title-container">
      <button
        className=""
        onClick={() => {
          setOpen(false)
        }}
      >
        <span>{Down}</span>
      </button>
    </div>
  ) : (
    <div className="tab-container">
      <button
        className=""
        onClick={() => {
          setOpen(true)
        }}
      >
        <span>{Up}</span>
      </button>{' '}
      <p>{content}</p>
    </div>
  )
}

export default OpenButton
