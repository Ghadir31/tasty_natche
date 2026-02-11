import { Navigate, useNavigate, useParams } from 'react-router-dom'

import MenuItemDetails from './MenuItemDetails'
import { getHamburgerById } from '../data/hamburgers'

function BurgerDetailsPage() {
  const navigate = useNavigate()
  const { burgerId } = useParams()

  if (!burgerId) {
    return <Navigate to="/burgers" replace />
  }

  const burger = getHamburgerById(burgerId)

  if (!burger) {
    return <Navigate to="/burgers" replace />
  }

  return (
    <MenuItemDetails
      title={burger.title}
      imageSrc={burger.detailsImage}
      className={burger.className}
      introDescription={burger.introDescription}
      description={burger.description}
      price={burger.price}
      price2={burger.price2}
      descriptionDir="rtl"
      onBack={() => navigate('/burgers')}
    />
  )
}

export default BurgerDetailsPage
