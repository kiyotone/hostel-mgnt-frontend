import Navbar from './components/Navbar'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Register from './pages/Register/index'
import Home from './pages/Home'
import Footer from './components/Footer/index'
import SingleHostelPage from './pages/SingleHostelPage/index'
function App() {

  return (
  <BrowserRouter>
    <div className='w-full h-full'>
      <Navbar />
     
      <Routes >
        
        <Route path='/' element={ <Home /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/hostel' element={ <SingleHostelPage /> } />
        
      
      </Routes>

      <Footer />
  
    </div>
  </BrowserRouter>
  )
}

export default App
