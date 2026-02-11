import { useNavigate } from 'react-router-dom'

import { hamburgers } from '../data/hamburgers'

function BurgersMenu() {
  const navigate = useNavigate()

  const handleItemClick = (itemId: string) => {
    navigate(`/burgers/${itemId}`)
  }

  return (
    <section className="burgers-page" aria-label="Burgers menu">
      <button
        className="burgers-close"
        type="button"
        aria-label="Close burgers menu"
        onClick={() => navigate('/')}
      >
        <span className="burgers-close-icon" aria-hidden="true" />
      </button>

      <div className="burgers-grid">
        {hamburgers.map((item) => (
          <button
            className={`burger-card ${item.id === 'beef-deluxe-natche' ? 'burger-card--framed' : ''}`}
            type="button"
            key={item.id}
            onClick={() => handleItemClick(item.id)}
          >
            <span className="burger-image-wrap">
              <img src={item.listImage} alt={item.menuName} />
            </span>
            <span className="burger-name">{item.menuName}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default BurgersMenu

