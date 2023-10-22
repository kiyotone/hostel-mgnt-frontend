import Navbar from './components/Navbar'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Register from './pages/Register/index'
import Hero from './components/Hero'
import Home from './pages/Home'
import Footer from './components/Footer/index'
function App() {

  return (
  <BrowserRouter>
    <div className='w-full h-full'>
      <Navbar />
      <Hero />
      <Routes >
        
        <Route path='/' element={ <Home /> } />
        <Route path='/register' element={ <Register /> } />
        
      
      </Routes>

      <Footer />
  
    </div>
  </BrowserRouter>
  )
}

export default App
