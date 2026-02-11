type MenuItemDetailsProps = {
  title: string
  imageSrc: string
  description: string
  price: string
  orderLabel?: string
  onBack?: () => void
  onOrder?: () => void
  descriptionDir?: 'ltr' | 'rtl'
  className?: string
}

function HeartOutline({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 54 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M27 45.5L24.8 43.6C11.7 31.8 3 24.1 3 14.4C3 6.7 8.9 1 16.2 1C20.3 1 24.2 3 27 6.3C29.8 3 33.7 1 37.8 1C45.1 1 51 6.7 51 14.4C51 24.1 42.3 31.8 29.2 43.6L27 45.5Z"
        stroke="#ef3434"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuItemDetails({
  title,
  imageSrc,
  description,
  price,
  orderLabel = 'Order now',
  onBack,
  onOrder,
  descriptionDir = 'rtl',
  className,
}: MenuItemDetailsProps) {
  const rootClassName = ['menu-item-details', className].filter(Boolean).join(' ')

  return (
    <section className={rootClassName} aria-label="Menu item details">
      <div className="menu-item-details__top-row">
        <button type="button" className="menu-item-details__back-btn" aria-label="Go back" onClick={onBack}>
          {'\u2039'}
        </button>
      </div>

      <h1 className="menu-item-details__title">{title}</h1>

      <div className="menu-item-details__image-wrap">
        <img src={imageSrc} alt={title} className="menu-item-details__image" />
      </div>

      <p className="menu-item-details__description" dir={descriptionDir}>
        {description}
      </p>

      <div className="menu-item-details__cta-row">
        <button type="button" className="menu-item-details__order-btn" onClick={onOrder}>
          {orderLabel}
        </button>
        <strong className="menu-item-details__price">{price}</strong>
      </div>

      <div className="menu-item-details__hearts">
        <HeartOutline className="menu-item-details__heart menu-item-details__heart--left" />
        <HeartOutline className="menu-item-details__heart menu-item-details__heart--right" />
        <HeartOutline className="menu-item-details__heart menu-item-details__heart--bottom" />
      </div>
    </section>
  )
}

export type { MenuItemDetailsProps }
export default MenuItemDetails
