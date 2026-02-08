import { useNavigate } from 'react-router-dom'

import doubleBeefNatche from '../assets/images/hamburgers/double-beef-natche.png'
import doubleChickenNatche from '../assets/images/hamburgers/double-chicken-natche.png'
import miniBeefNatche from '../assets/images/hamburgers/mini-beef-natche.png'
import miniChickenNatche from '../assets/images/hamburgers/mini-chicken-natche.png'
import tastyNatche from '../assets/images/hamburgers/tasty-natche.png'
import deluxeChickenNatche from '../assets/images/hamburgers/deluxe-chicken-natche.png'
import royalChickenNatchi from '../assets/images/hamburgers/royal-chicken-natche.png'
import nuggetsNatche from '../assets/images/hamburgers/nuggets-natche.png'
import chickenArabia from '../assets/images/hamburgers/chicken-arabia.png'
import lightChickenArabia from '../assets/images/hamburgers/light-chicken-arabia.png'

type BurgerItem = {
  id: string
  name: string
  image: string
}

const burgerItems: BurgerItem[] = [
  { id: 'double-beef-natche', name: 'Double Beef Natche', image: doubleBeefNatche },
  { id: 'double-chicken-natche', name: 'Double chicken Natche', image: doubleChickenNatche },
  { id: 'mini-beef-natche', name: 'Mini Beef Natche', image: miniBeefNatche },
  { id: 'mini-chicken-natche', name: 'Mini Chicken Natche', image: miniChickenNatche },
  { id: 'tasty-natche', name: 'Tasty Natche', image: tastyNatche },
  { id: 'deluxe-chicken-natche', name: 'Deluxe chicken Natche', image: deluxeChickenNatche },
  { id: 'royal-chicken-natchi', name: 'Royal chicken Natchi', image: royalChickenNatchi },
  { id: 'nuggets-natche', name: 'Nuggets Natche', image: nuggetsNatche },
  { id: 'chicken-arabia', name: 'Chicken Arabia', image: chickenArabia },
  { id: 'light-chicken-arabia', name: 'Light chicken Arabia', image: lightChickenArabia },
]

function BurgersMenu() {
  const navigate = useNavigate()

  const handleItemClick = (itemId: string) => {
    // Placeholder for item pages that will be designed later.
    void itemId
  }

  return (
    <section className="burgers-page" aria-label="Burgers menu">
      <button
        className="burgers-close"
        type="button"
        aria-label="Close burgers menu"
        onClick={() => navigate('/')}
      >
        ×
      </button>

      <div className="burgers-grid">
        {burgerItems.map((item) => (
          <button
            className="burger-card"
            type="button"
            key={item.id}
            onClick={() => handleItemClick(item.id)}
          >
            <span className="burger-image-wrap">
              <img src={item.image} alt={item.name} />
            </span>
            <span className="burger-name">{item.name}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default BurgersMenu
