import { useState } from 'react'
import Up from '../../assets/arrow-up.svg'
import Down from '../../assets/arrow-down.svg'

function OpenButton({ title, content }) {
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
