import { useNavigate } from 'react-router-dom'

import iftarMaxImage from '../assets/images/offers/iftar-meal-max.jpeg'

function MaxIftarOfferImagePage() {
  const navigate = useNavigate()

  return (
    <section className="offer-image-page" aria-label="Max iftar meal offer">
      <button
        type="button"
        className="menu-item-details__back-btn offer-image-back"
        aria-label="Go back"
        onClick={() => navigate('/offers')}
      >
        <span className="menu-item-details__back-icon" aria-hidden="true" />
      </button>

      <img className="offer-image" src={iftarMaxImage} alt="Max iftar meal offer" />

      <div className="offer-image-overlay">
        <strong className="offer-image-price">1,250,000 LL</strong>
        <button type="button" className="offer-image-options" onClick={() => navigate('/options')}>
          Options
        </button>
      </div>
    </section>
  )
}

export default MaxIftarOfferImagePage
