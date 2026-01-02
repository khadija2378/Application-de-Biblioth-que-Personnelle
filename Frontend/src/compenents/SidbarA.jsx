import { BarChart, BarChart3, BookOpen, LayoutDashboard, LogOut, Plus, RefreshCcw, User, Users } from 'lucide-react'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom';

function SidebarA({ activeSection, setActiveSection }) {
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
            <button onClick={() => setActiveSection("dashboardA")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-4 transition-all ${
            activeSection === "dashboardA"
              ? "bg-[#4B49AC] text-white shadow-lg shadow-[#4B49AC]/20"
              : "text-gray-500 hover:bg-gray-100"
          }`}>
              <LayoutDashboard/>
              <span className="font-medium">Dashboard</span>
            </button>
            <button onClick={() => setActiveSection("add")}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-4 transition-all ${
            activeSection === "add"
              ? "bg-[#4B49AC] text-white shadow-lg shadow-[#4B49AC]/20"
              : "text-gray-500 hover:bg-gray-100"
          }`}>
              <Plus/>
              <span className="font-medium">Add</span>
            </button>
            <button onClick={() => setActiveSection("users")}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-4 transition-all ${
            activeSection === "users"
              ? "bg-[#4B49AC] text-white shadow-lg shadow-[#4B49AC]/20"
              : "text-gray-500 hover:bg-gray-100"
          }`}>
              <Users/>
              <span className="font-medium">Users</span>
            </button>
            <button onClick={() => setActiveSection("admin")}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-4 transition-all ${
            activeSection === "admin"
              ? "bg-[#4B49AC] text-white shadow-lg shadow-[#4B49AC]/20"
              : "text-gray-500 hover:bg-gray-100"
          }`}>
              <User/>
              <span className="font-medium">Admins</span>
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

export default SidebarA;