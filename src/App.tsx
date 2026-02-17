import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import LocationPage from './components/LocationPage'
import BurgerDetailsPage from './components/BurgerDetailsPage'
import BurgersMenu from './components/BurgersMenu'
import DrinksMenu from './components/DrinksMenu'
import Home from './components/Home'
import KidsMealPage from './components/KidsMealPage'
import KidsMenu from './components/KidsMenu'
import PotatoesMenu from './components/PotatoesMenu'
import SaladItemPage from './components/SaladItemPage'
import SaladsMenu from './components/SaladsMenu'
import SaucesMenu from './components/SaucesMenu'
import TopBar from './components/TopBar'

function AppContent() {
  const location = useLocation()
  const isAboutPage = location.pathname === '/about'
  const isLocationPage = location.pathname === '/location'
  const isContactPage = location.pathname === '/contact'
  const hideTopBar = isAboutPage || isLocationPage || isContactPage

  return (
    <div className="app" dir="rtl" lang="ar">
      {hideTopBar ? null : <TopBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/burgers" element={<BurgersMenu />} />
        <Route path="/burgers/:burgerId" element={<BurgerDetailsPage />} />
        <Route path="/potatoes" element={<PotatoesMenu />} />
        <Route path="/drinks" element={<DrinksMenu />} />
        <Route path="/kids" element={<KidsMenu />} />
        <Route path="/kids/:kidsId" element={<KidsMealPage />} />
        <Route path="/salads" element={<SaladsMenu />} />
        <Route path="/salads/:saladId" element={<SaladItemPage />} />
        <Route path="/sauces" element={<SaucesMenu />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/location" element={<LocationPage />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
