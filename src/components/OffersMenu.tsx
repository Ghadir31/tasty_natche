import { useNavigate } from 'react-router-dom'

import offerNormal from '../assets/images/general/offer-normal-ramadan.png'
import offerMax from '../assets/images/general/offer-max-ramadan.png'

const offers = [
  { id: 'iftar-meal-offer', title: 'Iftar Meal Offer', listImage: offerNormal },
  { id: 'max-iftar-meal-offer', title: 'Max Iftar Meal Offer', listImage: offerMax },
]

function OffersMenu() {
  const navigate = useNavigate()

  return (
    <section className="salads-page offers-page" aria-label="Offers menu">
      <button
        className="burgers-close"
        type="button"
        aria-label="Close offers menu"
        onClick={() => navigate('/')}
      >
        <span className="burgers-close-icon" aria-hidden="true" />
      </button>

      <div className="salads-list">
        {offers.map((item) => (
          <button
            key={item.id}
            className="salad-row"
            type="button"
            aria-label={item.title}
            onClick={
              item.id === 'iftar-meal-offer'
                ? () => navigate(`/offers/${item.id}`)
                : item.id === 'max-iftar-meal-offer'
                  ? () => navigate(`/offers/${item.id}`)
                  : undefined
            }
          >
            <span className="salad-row__icon-wrap offers-row__icon-wrap">
              <img src={item.listImage} alt="" aria-hidden="true" />
            </span>
            <span className="salad-row__title">{item.title}</span>
            <span className="salad-row__arrow" aria-hidden="true">
              {'\u2039'}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default OffersMenu
