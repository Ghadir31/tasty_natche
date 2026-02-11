import { Navigate, useNavigate, useParams } from 'react-router-dom'

import MenuItemDetails from './MenuItemDetails'
import { getKidsMealById } from '../data/kids'

function KidsMealPage() {
  const navigate = useNavigate()
  const { kidsId } = useParams()

  if (!kidsId) {
    return <Navigate to="/kids" replace />
  }

  const kidsMeal = getKidsMealById(kidsId)

  if (!kidsMeal) {
    return <Navigate to="/kids" replace />
  }

  return (
    <MenuItemDetails
      title={kidsMeal.title}
      imageSrc={kidsMeal.detailsImage}
      introDescription={kidsMeal.introDescription}
      description={kidsMeal.description}
      price={kidsMeal.price}
      descriptionDir="rtl"
      className={kidsMeal.className}
      onBack={() => navigate('/kids')}
    />
  )
}

export default KidsMealPage
