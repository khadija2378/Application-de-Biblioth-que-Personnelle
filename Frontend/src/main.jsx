import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext.jsx'
import { BookProvider } from './Context/BookContext.jsx'
import { LoanProvider } from './Context/LoanContext.jsx'
import { ReadProvider } from './Context/ReadContext.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BookProvider>
        <LoanProvider>
          <ReadProvider>
    <BrowserRouter>
    <App />
    <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
    </ReadProvider>
    </LoanProvider>
    </BookProvider>
    </AuthProvider>
    
  </StrictMode>,
)
