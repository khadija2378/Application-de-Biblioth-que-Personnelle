import { Bell, Search } from 'lucide-react'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

function Header() {
    const {user}=useContext(AuthContext);

    

  return (
    <header className="h-20 bg-white flex items-center justify-between px-8 border-b border-gray-100">
          <div className="relative w-96">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Search size={18}  color='#800020'/>
            </span>
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-10 pr-4 py-2.5 bg-indigo-50/30 border-none rounded-xl focus:ring-2 focus:ring-indigo-100 transition-all outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-gray-600 relative">
              <Bell size={22} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex flex-row-reverse items-center gap-3 border-l pl-6">
              <div className="text-left">
                <p className="text-sm font-bold text-gray-800">{user.name}</p>
                <p className="text-xs text-gray-400">{user.email}</p>
              </div>
              <div className="h-10 w-10 bg-red-900 rounded-full flex items-center justify-center text-white font-bold">
                
              </div>
            </div>
          </div>
        </header>
  )
}

export default Header