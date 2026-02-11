import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logoN from '../assets/images/brand/logo-n.png'

function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuClosing, setIsMenuClosing] = useState(false)
  const navigate = useNavigate()
  const closeTimerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current)
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
  }

  const closeMenu = () => {
    if (!isMenuOpen || isMenuClosing) {
      return
    }

    setIsMenuClosing(true)
    closeTimerRef.current = window.setTimeout(() => {
      setIsMenuOpen(false)
      setIsMenuClosing(false)
      closeTimerRef.current = null
    }, 240)
  }

  const handleGoHome = () => {
    navigate('/')
    closeMenu()
  }

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

          <aside className={`nav-drawer ${isMenuClosing ? 'is-closing' : 'is-open'}`}>
            <button className="nav-drawer-close" type="button" aria-label="Close menu" onClick={closeMenu}>
              {'\u00D7'}
            </button>

            <nav className="nav-drawer-links" aria-label="Site links">
              <button className="nav-drawer-link" type="button" onClick={handleGoHome}>
                THE MENU
              </button>
              <button className="nav-drawer-link" type="button">
                ABOUT OUR FOOD
              </button>
              <button className="nav-drawer-link" type="button">
                LOCATION
              </button>
              <button className="nav-drawer-link" type="button">
                CONTACT US
              </button>
            </nav>
          </aside>
        </div>
      ) : null}
    </>
  )
}

export default TopBar
