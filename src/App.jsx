// Components
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
//.

// Style
  import './App.css'
//.

// Pages
  import Home from './pages/Home'
  import Pagina1 from './pages/Pagina1'
//.

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/interlakqn-suica' element={<Pagina1/>}/>
          <Route path='/paris-franca' element={} />
          <Route path='/disney-eua' element={} /> 
          <Route path='/newyork-eua' element={} />         
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
