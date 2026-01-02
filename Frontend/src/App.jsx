
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './compenents/Footer'
import Navbar from './compenents/NavBar'
import Auth from './page/Auth'
import Home from './page/Home'
import DashboardUser from './page/DashboardUser'
import MainBook from './compenents/MainBook'
import DashboardAdmin from './page/DashboardAdmin'

function App() {
    const location = useLocation();
    const hideLayout = location.pathname === '/dashboard' || location.pathname === '/dashboardAdmin';
  return (
    <>
       {!hideLayout && <Navbar />}
     <Routes>
      <Route path='/register' element={<Auth/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/' element={ <Home/> }/>
      <Route path='/dashboard' element={ <DashboardUser/> }/>
      <Route path='/dashboardAdmin' element={ <DashboardAdmin/> }/>
      
     </Routes>
      {!hideLayout && <Footer />}
          

        
      
    </>
  )
}

export default App
