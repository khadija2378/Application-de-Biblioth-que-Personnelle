
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './compenents/Footer'
import Navbar from './compenents/NavBar'
import Auth from './page/Auth'
import Home from './page/Home'
import Dashboard from './page/Dashboard'

function App() {

  return (
    <>
      {/* <Navbar/>
     <Routes>
      <Route path='/register' element={<Auth/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/' element={ <Home/> }/>
      
     </Routes>
       <Footer/>  */}

        <Dashboard/>  
      
    </>
  )
}

export default App
