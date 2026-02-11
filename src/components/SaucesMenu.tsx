import { useNavigate } from 'react-router-dom'

import bbqImage from '../assets/images/sauces/BBQ.png'
import ketchupImage from '../assets/images/sauces/ketchup.png'
import mayonnaiseImage from '../assets/images/sauces/Mayonnaise.png'
import mustardImage from '../assets/images/sauces/mustard.png'
import natcheSpecialSauceImage from '../assets/images/sauces/natche-special-sauce.png'
import tastySauceImage from '../assets/images/sauces/tasty-sauce.png'

const sauces = [
  { id: 'tasty-sauce', title: 'Tasty sauce', image: tastySauceImage, size:60, margin: 0},
  { id: 'natche-special-sauce', title: 'Natche special sauce', image: natcheSpecialSauceImage, size:70, margin: 0 },
  { id: 'ketchup', title: 'ketchup', image: ketchupImage, size:90, margin: 5 },
  { id: 'mayonnaise', title: 'mayonnaise', image: mayonnaiseImage, size:60, margin: -10},
  { id: 'bbq', title: 'BBQ', image: bbqImage, size:60, margin: -5 },
  { id: 'mustard', title: 'Mustard', image: mustardImage, size:60, margin: -8 },
]

function SaucesMenu() {
  const navigate = useNavigate()

  return (
    <section className="sauces-page" aria-label="Sauces menu">
      <button
        className="burgers-close"
        type="button"
        aria-label="Close sauces menu"
        onClick={() => navigate('/')}
      >
        <span className="burgers-close-icon" aria-hidden="true" />
      </button>

      <div className="sauces-list">
        {sauces.map((item) => (
          <article key={item.id} className="sauce-row" aria-label={item.title}>
            <span className="sauce-row__price">90,000LL</span>
            <div className="sauce-row__info">
              <span className="sauce-row__title">{item.title}</span>
              <span className="sauce-row__image-wrap">
                <img src={item.image} alt={item.title} style={{width: item.size, marginRight: item.margin}}/>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SaucesMenu
