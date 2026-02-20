import { useNavigate } from 'react-router-dom'

import offerMax from '../assets/images/general/offer-max-ramadan.png'

function MaxIftarOfferPage() {
  const navigate = useNavigate()

  return (
    <section className="offer-details-page" aria-label="Max iftar meal offer">
      <header className="offer-details-header">
        <button className="offer-details-back" type="button" aria-label="Go back" onClick={() => navigate('/offers')}>
          <span className="offer-details-back-icon" aria-hidden="true" />
        </button>
      </header>

      <div className="offer-details-content">
        <h1 className="offer-details-title">وجبة افطار Max</h1>
        <ul className="offer-details-list">
          <li>1 تستي</li>
          <li>1 ديلوكس تشكن</li>
          <li>بطاطا</li>
          <li>بيبسي</li>
          <li>سلطة ملفوف</li>
          <li>شوربة عدس</li>
          <li>قطعة تمر بالشوكولا</li>
        </ul>
        <div className="offer-details-hero">
          <img src={offerMax} alt="Max Iftar Meal Offer" />
        </div>
        <div className="offer-details-cta">
          <strong className="offer-details-price">1,250,000 LL</strong>
          <button className="offer-details-order" type="button">
            ORDER NOW
          </button>
        </div>
      </div>
    </section>
  )
}

export default MaxIftarOfferPage
