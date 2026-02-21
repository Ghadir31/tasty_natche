import { useNavigate } from 'react-router-dom'

import ahlaWSahlaImage from '../assets/images/offers/ahla-w-sahla-meal.jpeg'

function AhlaWSahlaOfferImagePage() {
  const navigate = useNavigate()

  return (
    <section className="offer-image-page offer-image-page--red" aria-label="Ahla W Sahal offer">
      <button
        type="button"
        className="menu-item-details__back-btn offer-image-back"
        aria-label="Go back"
        onClick={() => navigate('/offers')}
      >
        <span className="menu-item-details__back-icon" aria-hidden="true" />
      </button>

      <img className="offer-image" src={ahlaWSahlaImage} alt="Ahla W Sahal offer" />

      <div className="offer-image-overlay offer-image-overlay--split-red">
        <div className="offer-image-overlay__content">
          <strong className="offer-image-price">450,000 LL</strong>
          <button
            type="button"
            className="offer-image-options offer-image-options--red"
            onClick={() => navigate('/options')}
          >
            Options
          </button>
        </div>
      </div>
    </section>
  )
}

export default AhlaWSahlaOfferImagePage
