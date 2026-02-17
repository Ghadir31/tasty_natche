import { useNavigate } from 'react-router-dom'

import friedPotatoesImage from '../assets/images/general/fried-potatoes.png'

const potatoItems = [
  {
    id: 'large',
    title: 'البطاطا المقرمشة (كبير)',
    price: '200,000',
  },
  {
    id: 'small',
    title: 'البطاطا المقرمشة (صغير)',
    price: '270,000',
    isSmallImage: true,
  },
]

function PotatoesMenu() {
  const navigate = useNavigate()
  const whatsappUrl = 'https://wa.me/96181960888'
  const handleOrderClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener')
  }

  return (
    <section className="potatoes-page" aria-label="Potatoes menu">
      <button
        className="burgers-close"
        type="button"
        aria-label="Close potatoes menu"
        onClick={() => navigate('/')}
      >
        <span className="burgers-close-icon" aria-hidden="true" />
      </button>

      <div className="potatoes-list">
        {potatoItems.map((item) => (
          <article className="potato-card" key={item.id}>
            <div className={`potato-image-wrap ${item.isSmallImage ? 'is-small' : ''}`}>
              <img src={friedPotatoesImage} alt={item.title} />
            </div>
            <h2 className="potato-title">{item.title}</h2>
            <div className="potato-cta-row">
              <button type="button" className="potato-order-btn" onClick={handleOrderClick}>
                Order now
              </button>
              <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <p className="potato-price">{item.price}</p>
                <span className="potato-price">LL</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PotatoesMenu
