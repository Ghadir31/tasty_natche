import { Navigate, useNavigate, useParams } from 'react-router-dom'

import MenuItemDetails from './MenuItemDetails'
import { getSaladById } from '../data/salads'

function SaladItemPage() {
  const navigate = useNavigate()
  const { saladId } = useParams()

  if (!saladId) {
    return <Navigate to="/salads" replace />
  }

  const salad = getSaladById(saladId)

  if (!salad) {
    return <Navigate to="/salads" replace />
  }

  return (
    <MenuItemDetails
      title={salad.title}
      imageSrc={salad.detailsImage}
      description={salad.description}
      price={salad.price}
      price2={salad.price2}
      descriptionDir="rtl"
      className={salad.className}
      onBack={() => navigate('/salads')}
    />
  )
}

export default SaladItemPage

