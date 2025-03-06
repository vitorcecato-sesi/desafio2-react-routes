import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pagina1 from './pages/Pagina1'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/interlaken-suica' element={}/>
          <Route path='/paris-franca' element={} />
          <Route path='/disney-eua' element={} /> 
          <Route path='/newyork-eua' element={} />          */}
          <Route path='/newyork-eua' element={<Page4/>} />  
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
