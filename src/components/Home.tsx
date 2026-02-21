import { useNavigate } from 'react-router-dom'

import burger from '../assets/images/home-menu/hamburger.png'
import potato from '../assets/images/home-menu/potatoe.png'
import salad from '../assets/images/home-menu/salad.png'
import drink from '../assets/images/home-menu/dring.png'
import sauce from '../assets/images/home-menu/sauce.png'
import kids from '../assets/images/home-menu/kids_meal.png'
import hearts from '../assets/images/home-menu/hearts.png'
import offersIcon from '../assets/images/home-menu/offers.png'

const menuItems = [
  { label: 'البرغر', image: burger },
  { label: 'البطاطا', image: potato },
  { label: 'السلطات', image: salad },
  { label: 'المشروبات', image: drink },
  // { label: 'الحلويات', image: dessert },
  { label: 'الصلصات', image: sauce },
  { label: 'وجبة للاطفال', image: kids },
  { label: 'العروضات', image: offersIcon },
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
    6: '/offers',
  }

  return (
    <>
      <section className="menu-card" aria-label="قائمة الأقسام">
        {/* <div className="menu-contact" aria-label="Whatsapp number">
          <span className="menu-contact__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
              <path
                d="M12.04 2.01c-5.52 0-10 4.48-10 10 0 1.76.46 3.47 1.34 4.98L2 22l5.15-1.35A9.96 9.96 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.2c-1.58 0-3.13-.43-4.48-1.24l-.32-.19-3.05.8.82-2.97-.21-.34a8.15 8.15 0 0 1-1.25-4.36 8.29 8.29 0 0 1 8.3-8.29 8.29 8.29 0 0 1 8.29 8.29 8.29 8.29 0 0 1-8.1 8.3Zm4.54-5.78c-.25-.12-1.5-.74-1.73-.83-.23-.08-.4-.12-.57.12-.17.25-.65.82-.8.99-.15.17-.3.2-.55.08-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.38.11-.5.11-.11.25-.3.38-.45.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43l-.49-.01c-.17 0-.45.06-.69.32-.25.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.12.17 1.82 2.78 4.41 3.9.62.27 1.1.43 1.47.55.62.2 1.18.17 1.62.1.5-.07 1.5-.61 1.71-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.28Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="menu-contact__number" dir="ltr">
            81 960 888
          </span>
        </div> */}
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
