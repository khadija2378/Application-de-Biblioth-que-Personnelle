import { BarChart, BarChart3, BookOpen, LayoutDashboard, LogOut, RefreshCcw, User } from 'lucide-react'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom';

function SideBar({ activeSection, setActiveSection }) {
       const {logout}=useContext(AuthContext);
       const navigate=useNavigate();

       const handelLogout = async() =>{
      await logout();
       navigate('/login');
    }

  return (
     <div className="w-64 bg-white flex flex-col border-r border-gray-100">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-[#800020] p-1.5 rounded-lg">
            <BookOpen className="text-white" size={24} />
          </div>
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">MyBooks</h1>
        </div>

        <nav className="flex-1 px-4 mt-4 space-x-9">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 ml-2">Menu</p>
          <div>
            <button onClick={() => setActiveSection("dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-4 transition-all ${
            activeSection === "dashboard"
              ? "bg-[#800020] text-white shadow-lg shadow-red-900/20"
              : "text-gray-500 hover:bg-gray-100"
          }`}>
              <LayoutDashboard/>
              <span className="font-medium">Dashboard</span>
            </button>
            <button onClick={() => setActiveSection("book")}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-4 transition-all ${
            activeSection === "book"
              ? "bg-[#800020] text-white shadow-lg shadow-red-900/20"
              : "text-gray-500 hover:bg-gray-100"
          }`}>
              <BookOpen/>
              <span className="font-medium">Books</span>
            </button>
            <button onClick={() => setActiveSection("read")}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-4 transition-all ${
            activeSection === "read"
              ? "bg-[#800020] text-white shadow-lg shadow-red-900/20"
              : "text-gray-500 hover:bg-gray-100"
          }`}>
              <User/>
              <span className="font-medium">Readers</span>
            </button>
            <button onClick={() => setActiveSection("loan")}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-4 transition-all ${
            activeSection === "loan"
              ? "bg-[#800020] text-white shadow-lg shadow-red-900/20"
              : "text-gray-500 hover:bg-gray-100"
          }`}>
              <RefreshCcw/>
              <span className="font-medium">Loans</span>
            </button>
            <button onClick={() => setActiveSection("statistic")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-4 transition-all ${
            activeSection === "statistic"
              ? "bg-[#800020] text-white shadow-lg shadow-red-900/20"
              : "text-gray-500 hover:bg-gray-100"
          }`}>
              <BarChart3/>
              <span className="font-medium">Statistics</span>
            </button>
            </div>
        </nav>

        <div className="p-4 border-t border-gray-50">
          <button onClick={handelLogout} className="w-full flex items-center cursor-pointer gap-3 px-4 py-3 text-gray-500 hover:text-red-600 transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
  )
}

export default SideBar