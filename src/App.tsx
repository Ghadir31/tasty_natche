import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import TopBar from './components/TopBar'

function App() {
  return (
    <BrowserRouter>
      <div className="app" dir="rtl" lang="ar">
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
