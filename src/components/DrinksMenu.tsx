import { useNavigate } from 'react-router-dom'

import sevenUpImage from '../assets/images/drinks/7up.png'
import dietSevenUpImage from '../assets/images/drinks/diet-7up.png'
import dietPepsiImage from '../assets/images/drinks/diet-pepsi.png'
import mirandaImage from '../assets/images/drinks/Mirinda.png'
import pepsiImage from '../assets/images/drinks/pepsi.png'

const drinkItems = [
  { id: 'pepsi', title: 'PEPSI', image: pepsiImage },
  { id: 'diet-pepsi', title: 'DIET PEPSI', image: dietPepsiImage },
  { id: '7up', title: '7UP', image: sevenUpImage },
  { id: 'diet-7up', title: 'Diet 7UP', image: dietSevenUpImage },
  { id: 'miranda', title: 'MIRANDA', image: mirandaImage },
]

function DrinksMenu() {
  const navigate = useNavigate()
  const whatsappUrl = 'https://wa.me/96181960888'
  const handleOrderClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener')
  }

  return (
    <section className="drinks-page" aria-label="Drinks menu">
      <button
        className="burgers-close"
        type="button"
        aria-label="Close drinks menu"
        onClick={() => navigate('/')}
      >
        <span className="burgers-close-icon" aria-hidden="true" />
      </button>

      <div className="drinks-list">
        {drinkItems.map((item) => (
          <article className="drink-row" key={item.id} aria-label={item.title}>
            <h2 className="drink-row__title">{item.title}</h2>
            <span className="drink-row__image-wrap">
              <img src={item.image} alt={item.title} />
            </span>
          </article>
        ))}
      </div>

      <div className="drinks-size-pricing" aria-label="Drink size pricing">
        <div className="drinks-price-row">
          <button type="button" className="drinks-order-btn" onClick={handleOrderClick}>
            Order now
          </button>
          <div className="drinks-price-meta">
            <p className="drinks-size-label">حجم صغير</p>
            <p className="drinks-size-price">100,000 LBP</p>
          </div>
        </div>

        <div className="drinks-price-row">
          <button type="button" className="drinks-order-btn" onClick={handleOrderClick}>
            Order now
          </button>
          <div className="drinks-price-meta">
            <p className="drinks-size-label">حجم كبير</p>
            <p className="drinks-size-price">200,000 LBP</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DrinksMenu
