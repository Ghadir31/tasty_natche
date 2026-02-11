import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BurgerDetailsPage from './components/BurgerDetailsPage'
import BurgersMenu from './components/BurgersMenu'
import Home from './components/Home'
import PotatoesMenu from './components/PotatoesMenu'
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
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
