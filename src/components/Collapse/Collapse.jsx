// Importation images, state et CSS
import { useState } from 'react'
import Up from '../../assets/Up.png'
import Down from '../../assets/Down.png'
import css from './Collapse.module.scss'

// Création component collapse avec
// title et content en props
function Collapse({ title, content }) {
  // écoute état du bouton collapse(ouvert/fermé)
  const [isOpen, setOpen] = useState(true)
  // fonction toggle : quand appelée,
  // passe le bouton collapse dans son état opposé
  const toggle = () => setOpen(!isOpen)
  return (
    <div className={css.dropdown}>
      <div className={css.titlecontainer}>
        {/* titre h2 avec props title variable */}
        <h2>{title}</h2>
        {/* Changement de l'image(flèche) 
          selon état bouton */}
        <img
          src={isOpen ? `${Up}` : `${Down}`}
          alt="Collapse"
          // Appel fonction toggle évènement click
          onClick={toggle}
          className={css.collapse}
        />
      </div>
      {/* Si état bouton = fermé : cacher contenu texte
      sinon, l'afficher(via classes CSS) */}
      <div className={isOpen ? `${css.content}` : `${css.hidden}`}>
        {/* Si le content est de type string */}
        {typeof content === 'string' ? (
          // l'afficher
          <div>{content}</div>
        ) : (
          // sinon itérer contenu pour
          // afficher chaque élément
          content.map((element, i) => <div key={i}>{element}</div>)
        )}
      </div>
    </div>
  )
}

export default Collapse
