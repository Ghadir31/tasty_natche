import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BurgerDetailsPage from './components/BurgerDetailsPage'
import BurgersMenu from './components/BurgersMenu'
import Home from './components/Home'
import PotatoesMenu from './components/PotatoesMenu'
import SaladItemPage from './components/SaladItemPage'
import SaladsMenu from './components/SaladsMenu'
import SaucesMenu from './components/SaucesMenu'
import TopBar from './components/TopBar'

function App() {
  return (
    <BrowserRouter>
      <div className="app" dir="rtl" lang="ar">
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/burgers" element={<BurgersMenu />} />
          <Route path="/burgers/:burgerId" element={<BurgerDetailsPage />} />
          <Route path="/potatoes" element={<PotatoesMenu />} />
          <Route path="/salads" element={<SaladsMenu />} />
          <Route path="/salads/:saladId" element={<SaladItemPage />} />
          <Route path="/sauces" element={<SaucesMenu />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
