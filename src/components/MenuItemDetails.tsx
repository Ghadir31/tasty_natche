import heartsDecoration from '../assets/images/brand/hearts-decoration.png'

type MenuItemDetailsProps = {
  title: string
  imageSrc: string
  introDescription?: string
  description: string
  price: string
  price2?: string
  orderLabel?: string
  onBack?: () => void
  onOrder?: () => void
  descriptionDir?: 'ltr' | 'rtl'
  className?: string
}

function MenuItemDetails({
  title,
  imageSrc,
  introDescription,
  description,
  price,
  price2,
  orderLabel = 'Order now',
  onBack,
  onOrder,
  descriptionDir = 'rtl',
  className,
}: MenuItemDetailsProps) {
  const rootClassName = ['menu-item-details', className].filter(Boolean).join(' ')
  const whatsappUrl = 'https://wa.me/96181960888'
  const handleOrder = () => {
    window.open(whatsappUrl, '_blank', 'noopener')
    onOrder?.()
  }

  return (
    <section className={rootClassName} aria-label="Menu item details">
      <div className="menu-item-details__top-row">
        <button type="button" className="menu-item-details__back-btn" aria-label="Go back" onClick={onBack}>
          <span className="menu-item-details__back-icon" aria-hidden="true" />
        </button>
      </div>

      <div className="menu-items-details__inner-content">
        <h1 className="menu-item-details__title">{title}</h1>

        <div className="menu-item-details__image-wrap">
          <img src={imageSrc} alt={title} className="menu-item-details__image" />
        </div>

        {introDescription ? (
          <p className="menu-item-details__intro-description" dir={descriptionDir}>
            {introDescription}
          </p>
        ) : null}

        <p className="menu-item-details__description" dir={descriptionDir}>
          {description}
        </p>

        <div className="menu-item-details__cta-list">
          <div className="menu-item-details__cta-row">
            <button type="button" className="menu-item-details__order-btn" onClick={handleOrder}>
              {orderLabel}
            </button>
            <strong className="menu-item-details__price">{price}</strong>
          </div>

          {price2 ? (
            <div className="menu-item-details__cta-row menu-item-details__cta-row--secondary">
              <button type="button" className="menu-item-details__order-btn" onClick={handleOrder}>
                {orderLabel}
              </button>
              <strong className="menu-item-details__price">{price2}</strong>
            </div>
          ) : null}
        </div>
      </div>

      <div className="menu-item-details__hearts">
        <img src={heartsDecoration} alt="" aria-hidden="true" className="menu-item-details__hearts-image" />
      </div>
    </section>
  )
}

export type { MenuItemDetailsProps }
export default MenuItemDetails
