import { useNavigate } from 'react-router-dom'

import iftarImage from '../assets/images/offers/iftar-meal.jpeg'

function IftarOfferImagePage() {
  const navigate = useNavigate()

  return (
    <section className="offer-image-page" aria-label="Iftar meal offer">
      <button
        type="button"
        className="menu-item-details__back-btn offer-image-back"
        aria-label="Go back"
        onClick={() => navigate('/offers')}
      >
        <span className="menu-item-details__back-icon" aria-hidden="true" />
      </button>

      <img className="offer-image" src={iftarImage} alt="Iftar meal offer" />

      <div className="offer-image-overlay">
        <strong className="offer-image-price">950,000 LL</strong>
        <button type="button" className="offer-image-options" onClick={() => navigate('/options')}>
          Options
        </button>
      </div>
    </section>
  )
}

export default IftarOfferImagePage
