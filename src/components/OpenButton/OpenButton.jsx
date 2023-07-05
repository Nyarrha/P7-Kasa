import { useState } from 'react'
import Up from '../../assets/arrow-up.svg'
import Down from '../../assets/arrow-down.svg'

function OpenButton({ title, content }) {
  const [isOpen, setOpen] = useState(true)
  return isOpen ? (
    <li>
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
    </li>
  ) : (
    <li>
      <div className="tab-container">
        <button
          className=""
          onClick={() => {
            setOpen(true)
          }}
        >
          <span>{Up}</span>
        </button>
      </div>
      <p>{content}</p>
    </li>
  )
}

export default OpenButton
