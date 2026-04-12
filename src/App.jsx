import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MapPage from './pages/MapPage'
import LanguagePage from './pages/LanguagePage'
import SongPage from './pages/SongPage'
import PinsPage from './pages/PinsPage'
import Layout from './pages/Layout'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/languages" element={<LanguagePage />} >
            <Route path=":year/:id" element={<SongPage />} />
          </Route>
          <Route path="/languages/:year/:id" element={<SongPage />} />
          <Route path="/pins" element={<PinsPage />} />
        </Route>
      </Routes >
    </>
  )
}

export default App
