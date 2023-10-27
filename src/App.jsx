import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './pages/signup'
import SignIn from './pages/signin'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (
  <>
  <Routes>
    <Route path='/' element={<Navbar/>}>
    <Route path='/' element={<Home/>}/>
    </Route>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>}/>
  </Routes>

  </>
  )
}

export default App
