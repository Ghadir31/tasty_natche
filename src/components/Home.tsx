import { useNavigate } from 'react-router-dom'

import burger from '../assets/images/home-menu/hamburger.png'
import potato from '../assets/images/home-menu/potatoe.png'
import salad from '../assets/images/home-menu/salad.png'
import drink from '../assets/images/home-menu/dring.png'
import sauce from '../assets/images/home-menu/sauce.png'
import kids from '../assets/images/home-menu/kids_meal.png'
import hearts from '../assets/images/home-menu/hearts.png'

const menuItems = [
  { label: 'البرغر', image: burger },
  { label: 'البطاطا', image: potato },
  { label: 'السلطات', image: salad },
  { label: 'المشروبات', image: drink },
  // { label: 'الحلويات', image: dessert },
  { label: 'الصلصات', image: sauce },
  { label: 'وجبة للاطفال', image: kids },
]

function Home() {
  const navigate = useNavigate()
  const routeByIndex: Record<number, string> = {
    0: '/burgers',
    1: '/potatoes',
    2: '/salads',
    3: '/drinks',
    4: '/sauces',
    5: '/kids',
  }

  return (
    <>
      <section className="menu-card" aria-label="قائمة الأقسام">
        {menuItems.map((item, index) => (
          <button
            className="menu-row"
            type="button"
            key={item.label}
            onClick={routeByIndex[index] ? () => navigate(routeByIndex[index]) : undefined}
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
