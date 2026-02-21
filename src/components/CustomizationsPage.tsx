import { useNavigate } from 'react-router-dom'

const boostItems = ['Side fries', 'Side soft drinks']
const removeItems = ['Cheddar Cheese', 'Pickeles Dill', 'Onions', 'Lettuce', 'Tomato']

function CustomizationsPage() {
  const navigate = useNavigate()

  return (
    <section className="customizations-page" aria-label="Customize your meal">
      <div className="customizations-header">
        <button
          type="button"
          className="menu-item-details__back-btn"
          aria-label="Go back"
          onClick={() => navigate(-1)}
        >
          <span className="menu-item-details__back-icon" aria-hidden="true" />
        </button>
      </div>

      <div className="customizations-content">
        <h2 className="customizations-title">BOOST WITH</h2>
        <ul className="customizations-list">
          {boostItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="customizations-title">REMOVE</h2>
        <ul className="customizations-list">
          {removeItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="customizations-order-btn"
        onClick={() => window.open('https://wa.me/96181960888', '_blank', 'noopener')}
      >
        Order now
      </button>
    </section>
  )
}

export default CustomizationsPage
