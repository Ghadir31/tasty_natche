import { useNavigate } from 'react-router-dom'

function LocationPage() {
  const navigate = useNavigate()

  const handleClose = () => {
    navigate('/')
  }

  return (
    <section className="location-page" aria-label="Location map">
      <button className="location-close" type="button" aria-label="Close location page" onClick={handleClose}>
        <span className="location-close-icon" aria-hidden="true" />
      </button>

      <div className="location-map">
        <iframe
          title="Natche Burger location map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.785701451547!2d35.47006137566719!3d33.37666035310072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151e93007be8e65f%3A0xde0368c064942253!2sNatche.burger!5e0!3m2!1sen!2slb!4v1771199847106!5m2!1sen!2slb"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}

export default LocationPage
