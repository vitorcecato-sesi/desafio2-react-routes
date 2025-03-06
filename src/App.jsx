import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pagina1 from './pages/Pagina1'
import Pagina2 from './pages/page2'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
           
          </Routes>
        
      </BrowserRouter>
      
    </>
  )
}

export default App
