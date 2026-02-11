import { useNavigate } from 'react-router-dom'

import heartsDecoration from '../assets/images/brand/hearts-decoration.png'
import { kidsMeals } from '../data/kids'

function KidsMenu() {
  const navigate = useNavigate()

  return (
    <section className="kids-page" aria-label="Kids meals menu">
      <button
        className="burgers-close"
        type="button"
        aria-label="Close kids meals menu"
        onClick={() => navigate('/')}
      >
        <span className="burgers-close-icon" aria-hidden="true" />
      </button>

      <div className="kids-list">
        {kidsMeals.map((item) => (
          <button
            key={item.id}
            className="kids-row"
            type="button"
            onClick={() => navigate(`/kids/${item.id}`)}
            aria-label={item.listTitle}
          >
            <span className="kids-row__arrow" aria-hidden="true">
              {'\u2039'}
            </span>
            <span className="kids-row__title">{item.listTitle}</span>
            <span className="kids-row__image-wrap">
              <img src={item.listImage} alt={item.listTitle} />
            </span>
          </button>
        ))}
      </div>

      <div className="kids-hearts">
        <img src={heartsDecoration} alt="" aria-hidden="true" />
      </div>
    </section>
  )
}

export default KidsMenu
