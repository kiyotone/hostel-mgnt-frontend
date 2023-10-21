import Navbar from './components/Navbar'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Register from './pages/Register/index'
import Hero from './components/Hero'

function App() {

  return (
  <BrowserRouter>
    <div className='w-full h-full'>
      <Navbar />
      <Hero />
      <Routes >
        
        <Route path='/register' element={ <Register /> } />
        
      
      </Routes>
  
    </div>
  </BrowserRouter>
  )
}

export default App
