import { useNavigate } from 'react-router-dom'

import offerNormal from '../assets/images/general/offer-normal-ramadan.png'

function IftarOfferPage() {
  const navigate = useNavigate()

  return (
    <section className="offer-details-page" aria-label="Iftar meal offer">
      <header className="offer-details-header">
        <button className="offer-details-back" type="button" aria-label="Go back" onClick={() => navigate('/offers')}>
          <span className="offer-details-back-icon" aria-hidden="true" />
        </button>
      </header>

      <div className="offer-details-content">
        <h1 className="offer-details-title">وجبة الافطار</h1>
        <ul className="offer-details-list">
          <li>1 دوبل بيف</li>
          <li>1 ميني تشكن</li>
          <li>بطاطا</li>
          <li>بيبسي</li>
          <li>سلطة ملفوف</li>
          <li>شوربة عدس</li>
          <li>قطعة تمر بالشوكولا في علبة مميزة</li>
        </ul>
        <div className="offer-details-hero">
          <img src={offerNormal} alt="Iftar Meal Offer" />
        </div>
        <div className="offer-details-cta">
          <strong className="offer-details-price">950,000 LL</strong>
          <button className="offer-details-order" type="button">
            ORDER NOW
          </button>
        </div>
      </div>
    </section>
  )
}

export default IftarOfferPage
