
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './compenents/Footer'
import Navbar from './compenents/NavBar'
import Auth from './page/Auth'
import Home from './page/Home'
import DashboardUser from './page/DashboardUser'
import MainBook from './compenents/MainBook'
import DashboardAdmin from './page/DashboardAdmin'
import { useRef } from 'react'

function App() {
    const location = useLocation();
    const hideLayout = location.pathname === '/dashboard' || location.pathname === '/dashboardAdmin';
    const aboutRef = useRef(null);
    const workRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWork = () => {
    workRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
       {!hideLayout && <Navbar scrollToAbout={scrollToAbout} scrollToWork={scrollToWork}/>}
     <Routes>
      <Route path='/register' element={<Auth/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/' element={ <Home about={aboutRef} work={workRef}/> }/>
      <Route path='/dashboard' element={ <DashboardUser/> }/>
      <Route path='/dashboardAdmin' element={ <DashboardAdmin/> }/>
      
     </Routes>
      {!hideLayout && <Footer />}
          

        
      
    </>
  )
}

export default App
