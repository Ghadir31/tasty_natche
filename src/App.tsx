import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BurgersMenu from './components/BurgersMenu'
import Home from './components/Home'
import TopBar from './components/TopBar'

function App() {
  return (
    <BrowserRouter>
      <div className="app" dir="rtl" lang="ar">
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/burgers" element={<BurgersMenu />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
