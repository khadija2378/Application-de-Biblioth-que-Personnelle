import { Bell, Search } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { BookContext } from '../Context/BookContext';
import { LoanContext } from '../Context/LoanContext';

function Header() {
    const {user}=useContext(AuthContext);
     const {loans,GetLoans} = useContext(LoanContext);
    const {SearchBook}=useContext(BookContext);
     const [search, setSearch] = useState('');
     const [open, setOpen] = useState(false);

    useEffect(()=>{
     SearchBook(search);
    },[search])

    useEffect(()=>{
         GetLoans();
    
        },[])

    const date = new Date();    
    const loansLate =loans.filter((loan)=>loan?.returned === 0 && new Date(loan?.return_date) < date);

  return (
    <header className="h-20 bg-white flex items-center justify-between px-8 border-b border-gray-100">
          <div className="relative w-96">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Search size={18}  color='#800020'/>
            </span>
            <input
              type="text"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              placeholder="Search here..."
              className="w-full pl-10 pr-4 py-2.5 bg-indigo-50/30 border-none rounded-xl focus:ring-2 focus:ring-indigo-100 transition-all outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-8">
            <button onClick={() => setOpen(!open)} className="text-gray-400 hover:text-gray-600 relative ">
              <Bell size={22} />
             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
         {loansLate.length}
        </span>
            </button>
            {open && (
        <div className="absolute right-0 mt-39 w-72 bg-white rounded-xl shadow-lg border border-gray-300 z-50">
          
          <div className="p-3 font-semibold border-b border-gray-300">
            Notifications
          </div>

          <div className="max-h-60 overflow-y-auto">
            
              {loansLate.length === 0 ? (
              <p className="p-3 text-gray-500">
                Aucune notification
              </p>
            ) : (
              loansLate.map((i) => (
                <div
                  key={i}
                  className="flex justify-between p-3 hover:bg-gray-100 cursor-pointer"
                >
                  <div>
                  <p className="font-medium">
                        {i?.book?.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {i?.borrower_name}
                      </p>
                      </div>
                      <div className="py-1.5 px-2.5  justify-center w-20">
      <span className="font-medium  text-red-600">Late</span>
    </div>
                </div>
              ))
            )}
           
          </div>

        </div>
      )}
            <div className="flex flex-row-reverse items-center gap-3 border-l border-gray-200 pl-6">
              <div className="text-left">
                <p className="text-sm font-bold text-gray-800">{user.name}</p>
                <p className="text-xs text-gray-400">{user.email}</p>
              </div>
              <div className="h-10 w-10 bg-red-900 rounded-full flex items-center justify-center text-white font-bold">
                {user.name[0].toUpperCase()}
              </div>
            </div>
          </div>
        </header>
  )
}

export default Header