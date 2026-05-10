import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import MapMain from './pages/MapMain'
import Admin from './pages/Admin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />        {/* localhost:5173/ */}
        <Route path="/map" element={<MapMain />} />     {/* localhost:5173/map */}
        <Route path="/admin" element={<Admin />} />     {/* localhost:5173/admin */}
      </Routes>
    </BrowserRouter>
  )
}

export default App