import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import JunctaPage from './pages/JunctaPage'
import CargolandfoodPage from './pages/CargolandfoodPage'
import OrgspherePage from './pages/OrgspherePage'
import HelpnestPage from './pages/HelpnestPage'
import MoreProjectsPage from './pages/MoreProjectsPage'
import ArgusPage from './pages/ArgusPage'
import LighterOfLivesPage from './pages/LighterOfLivesPage'
import CartAgroPage from './pages/CartAgroPage'
import SneakerStorePage from './pages/SneakerStorePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/juncta" element={<JunctaPage />} />
      <Route path="/projects/cargolandfood" element={<CargolandfoodPage />} />
      <Route path="/projects/orgsphere" element={<OrgspherePage />} />
      <Route path="/projects/helpnest" element={<HelpnestPage />} />
      <Route path="/projects/more" element={<MoreProjectsPage />} />
      <Route path="/projects/argus" element={<ArgusPage />} />
      <Route path="/projects/lighter-of-lives" element={<LighterOfLivesPage />} />
      <Route path="/projects/cartagro" element={<CartAgroPage />} />
      <Route path="/projects/sneaker-store" element={<SneakerStorePage />} />
    </Routes>
  )
}
