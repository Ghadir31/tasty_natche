import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logoN from '../assets/images/brand/logo-n.png'
import natcheBlue from '../assets/images/contact/Natche-blue.png'
import manEating from '../assets/images/contact/man-eating.png'
import contactMain from '../assets/images/general/contact-main.png'
import facebookIcon from '../assets/images/general/facebook-natche.png'
import instagramIcon from '../assets/images/general/insta-natche.png'
import whatsappIcon from '../assets/images/general/whats-natche.png'

const aboutParagraphs = [
  'مطعم برغر بمفهوم عصري يجمع بين السرعة، الجودة، والإتقان',
  'استوحينا فكرتنا من أشهر العلامات العالمية في مجال البرغر، واعتنينا بأدق التفاصيل، اخترنا اللحم البقري المُغذّى على الحبوب، والخبز الطازج، وصُنعنا صلصاتنا الخاصة بخلطات سرّية تميّز كل وجبة.',
  'لأننا نؤمن أن الطعام الجيد يجب أن يُرى كما يُتذوّق، نقوم بكل خطوات التحضير أمام الزبون مباشرةً، بشفافية كاملة ونظافة مضمونة.',
  'ولأن الانتظار ليس جزءًا من المتعة،',
  'اعتمدنا خدمة Drive-Thru لتتسلّم طلبك خلال دقائق قليلة معدودة.',
  'الجودة في Natche ليست مادةً ترويجية، بل نظامُ عمل، نلتزم فيه بمعايير السلامة الغذائية العالمية ISO 22000، حرصًا على أعلى درجات النظافة والدقة والاحتراف.',
  'وفي Natche، نؤمن أن الطعم المميّز لا ينبغي أن يكون مرتفع التكلفة،',
  'لذلك صمّمنا أسعارنا بعناية لتناسب ميزانيات الشباب دون أي تفريط بالجودة أو الكمية.',
]

function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuClosing, setIsMenuClosing] = useState(false)
  const [mobileView, setMobileView] = useState<'root' | 'about' | 'location' | 'contact'>('root')
  const [isMobileViewClosing, setIsMobileViewClosing] = useState(false)
  const navigate = useNavigate()
  const closeTimerRef = useRef<number | null>(null)
  const mobileViewTimerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current)
      }
      if (mobileViewTimerRef.current !== null) {
        window.clearTimeout(mobileViewTimerRef.current)
      }
    }
  }, [])

  const openMenu = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }

    setIsMenuClosing(false)
    setIsMenuOpen(true)
    setMobileView('root')
    setIsMobileViewClosing(false)
  }

  const closeMenu = () => {
    if (!isMenuOpen || isMenuClosing) {
      return
    }

    setIsMenuClosing(true)
    closeTimerRef.current = window.setTimeout(() => {
      setIsMenuOpen(false)
      setIsMenuClosing(false)
      setMobileView('root')
      setIsMobileViewClosing(false)
      closeTimerRef.current = null
    }, 240)
  }

  const handleNavigate = (path: string) => {
    navigate(path)
  }

  const handleGoHome = () => {
    handleNavigate('/')
  }

  const handleGoAbout = () => {
    handleNavigate('/about')
  }

  const handleGoLocation = () => {
    handleNavigate('/location')
  }

  const handleGoContact = () => {
    handleNavigate('/contact')
  }

  const handleMobileBack = () => {
    if (isMobileViewClosing) {
      return
    }
    setIsMobileViewClosing(true)
    mobileViewTimerRef.current = window.setTimeout(() => {
      setMobileView('root')
      setIsMobileViewClosing(false)
      mobileViewTimerRef.current = null
    }, 240)
  }

  const handleMobileHome = () => {
    navigate('/')
    closeMenu()
  }

  const handleMobileOpenView = (view: 'about' | 'location' | 'contact') => {
    setMobileView(view)
    setIsMobileViewClosing(false)
  }

  const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent)
  const instagramHref = isMobile ? 'instagram://user?username=natcheburger' : 'https://www.instagram.com/natcheburger/'

  return (
    <>
      <header className="top-bar">
        <button className="brand-button" type="button" aria-label="Go to homepage" onClick={handleGoHome}>
          <img className="brand" src={logoN} alt="Logo" />
        </button>
        <button className="menu-button" type="button" aria-label="Open navigation menu" onClick={openMenu}>
          <span />
          <span />
          <span />
        </button>
      </header>

      {isMenuOpen ? (
        <div className="nav-drawer-layer" role="dialog" aria-modal="true" aria-label="Main navigation">
          <button className="nav-drawer-backdrop" type="button" aria-label="Close menu" onClick={closeMenu} />

          <aside className={`nav-drawer nav-drawer--desktop ${isMenuClosing ? 'is-closing' : 'is-open'}`}>
            <button className="nav-drawer-close" type="button" aria-label="Close menu" onClick={closeMenu}>
              {'\u00D7'}
            </button>

            <nav className="nav-drawer-links" aria-label="Site links">
              <button className="nav-drawer-link" type="button" onClick={handleGoHome}>
                THE MENU
              </button>
              <button className="nav-drawer-link" type="button" onClick={handleGoAbout}>
                ABOUT OUR FOOD
              </button>
              <button className="nav-drawer-link" type="button" onClick={handleGoLocation}>
                LOCATION
              </button>
              <button className="nav-drawer-link" type="button" onClick={handleGoContact}>
                CONTACT US
              </button>
            </nav>
          </aside>

          <aside className={`nav-drawer nav-drawer--mobile ${isMenuClosing ? 'is-closing' : 'is-open'}`}>
            {mobileView === 'root' ? (
              <button className="nav-drawer-close" type="button" aria-label="Close menu" onClick={closeMenu}>
                {'\u00D7'}
              </button>
            ) : null}

            {mobileView === 'root' ? (
              <nav className="nav-drawer-links nav-drawer-links--mobile" aria-label="Mobile site links">
                <button className="nav-drawer-link" type="button" onClick={handleMobileHome}>
                  THE MENU
                </button>
                <button className="nav-drawer-link" type="button" onClick={() => handleMobileOpenView('about')}>
                  ABOUT OUR FOOD
                </button>
                <button className="nav-drawer-link" type="button" onClick={() => handleMobileOpenView('location')}>
                  LOCATION
                </button>
                <button className="nav-drawer-link" type="button" onClick={() => handleMobileOpenView('contact')}>
                  CONTACT US
                </button>
              </nav>
            ) : (
              <div
                className={`nav-drawer-mobile-view ${isMobileViewClosing ? 'is-closing' : 'is-open'}`}
                role="region"
                aria-live="polite"
              >
                <div className="nav-drawer-mobile-header">
                  <button className="nav-drawer-mobile-back" type="button" onClick={handleMobileBack}>
                    {'\u2039'} Back
                  </button>
                  <span className="nav-drawer-mobile-title">
                    {mobileView === 'about' ? 'ABOUT OUR FOOD' : mobileView === 'location' ? 'LOCATION' : 'CONTACT US'}
                  </span>
                </div>

                <div
                  className={`nav-drawer-mobile-body ${
                    mobileView === 'contact' ? 'nav-drawer-mobile-body--contact' : ''
                  }`}
                >
                  {mobileView === 'about' ? (
                    <>
                      <div className="about-content">
                        {aboutParagraphs.map((paragraph) => (
                          <p className="about-paragraph" key={paragraph}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      <div className="about-art">
                        <img className="about-man" src={manEating} alt="Man eating burger" />
                        <img className="about-natche" src={natcheBlue} alt="Natche" />
                      </div>
                    </>
                  ) : null}

                  {mobileView === 'location' ? (
                    <div className="location-map nav-drawer-mobile-map">
                      <iframe
                        title="Natche Burger location map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.785701451547!2d35.47006137566719!3d33.37666035310072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151e93007be8e65f%3A0xde0368c064942253!2sNatche.burger!5e0!3m2!1sen!2slb!4v1771199847106!5m2!1sen!2slb"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  ) : null}

                  {mobileView === 'contact' ? (
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
                            href={instagramHref}
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
                  ) : null}
                </div>
              </div>
            )}
          </aside>
        </div>
      ) : null}
    </>
  )
}

export default TopBar
