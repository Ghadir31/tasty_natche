import logoN from '../assets/images/brand/logo-n.png'

function TopBar() {
  return (
    <header className="top-bar">
      <img className="brand" src={logoN} alt="شعار" />
      <button className="menu-button" type="button" aria-label="القائمة">
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}

export default TopBar
