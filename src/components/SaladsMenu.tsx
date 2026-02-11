import { useNavigate } from 'react-router-dom'

import { salads } from '../data/salads'

function SaladsMenu() {
  const navigate = useNavigate()

  return (
    <section className="salads-page" aria-label="Salads menu">
      <button
        className="burgers-close"
        type="button"
        aria-label="Close salads menu"
        onClick={() => navigate('/')}
      >
        <span className="burgers-close-icon" aria-hidden="true" />
      </button>

      <div className="salads-list">
        {salads.map((item) => (
          <button
            key={item.id}
            className="salad-row"
            type="button"
            onClick={() => navigate(`/salads/${item.id}`)}
            aria-label={item.title}
          >
            <span className="salad-row__icon-wrap">
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

export default SaladsMenu
