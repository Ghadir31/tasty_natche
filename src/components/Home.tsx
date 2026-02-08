import { useNavigate } from 'react-router-dom'

import burger from '../assets/images/home-menu/hamburger.png'
import potato from '../assets/images/home-menu/potatoe.png'
import salad from '../assets/images/home-menu/salad.png'
import drink from '../assets/images/home-menu/dring.png'
import dessert from '../assets/images/home-menu/dessert.png'
import sauce from '../assets/images/home-menu/sauce.png'
import kids from '../assets/images/home-menu/kids_meal.png'
import hearts from '../assets/images/home-menu/hearts.png'

const menuItems = [
  { label: 'البرغر', image: burger },
  { label: 'البطاطا', image: potato },
  { label: 'السلطات', image: salad },
  { label: 'المشروبات', image: drink },
  { label: 'الحلويات', image: dessert },
  { label: 'الصلصات', image: sauce },
  { label: 'وجبة للاطفال', image: kids },
]

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <section className="menu-card" aria-label="قائمة الأقسام">
        {menuItems.map((item, index) => (
          <button
            className="menu-row"
            type="button"
            key={item.label}
            onClick={index === 0 ? () => navigate('/burgers') : undefined}
          >
            <span className="menu-icon-wrap">
              <img src={item.image} alt="" aria-hidden="true" />
            </span>
            <span className="menu-label">{item.label}</span>
            <span className="menu-chevron" aria-hidden="true">
              ‹
            </span>
          </button>
        ))}
      </section>

      <div className="hearts">
        <img src={hearts} alt="" aria-hidden="true" />
      </div>
    </>
  )
}

export default Home
