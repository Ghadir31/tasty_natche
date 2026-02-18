import { useNavigate } from 'react-router-dom'

import contactMain from '../assets/images/general/contact-main.png'
import facebookIcon from '../assets/images/general/facebook-natche.png'
import instagramIcon from '../assets/images/general/insta-natche.png'
import whatsappIcon from '../assets/images/general/whats-natche.png'

function ContactPage() {
  const navigate = useNavigate()

  return (
    <section className="contact-page" aria-label="Contact us">
      <button className="contact-close" type="button" aria-label="Close contact page" onClick={() => navigate('/')}>
        <span className="contact-close-icon" aria-hidden="true" />
      </button>

      <div className="contact-content">
        <div className="contact-art" aria-hidden="true">
          <div className="contact-social-icons">
            <a
              className="contact-icon-group whatsapp"
              href="https://wa.me/96181960888"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <img className="contact-icon contact-icon--whatsapp" src={whatsappIcon} alt="" />
            </a>
            <a
              className="contact-icon-group facebook"
              href="https://www.facebook.com/profile.php?id=61587090407602"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Facebook page"
            >
              <img className="contact-icon contact-icon--facebook" src={facebookIcon} alt="" />
            </a>
            <a
              className="contact-icon-group instagram"
              href="https://www.instagram.com/natcheburger/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Instagram profile"
            >
              <img className="contact-icon contact-icon--instagram" src={instagramIcon} alt="" />
            </a>
          </div>
          <img className="contact-main" src={contactMain} alt="Customer support" />
        </div>
      </div>
    </section>
  )
}

export default ContactPage
