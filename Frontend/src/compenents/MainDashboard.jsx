import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { BookContext } from '../Context/BookContext';

function MainDashboard() {
  const {user}=useContext(AuthContext);
  const {GetBooks , books} = useContext(BookContext);

  useEffect(()=>{
   
     GetBooks()
  
  },[])
  if (!books) return <p>Loading...</p>;
  return (
    <div className="flex-1 overflow-y-auto p-4">
          <div className="bg-white rounded-xl px-10 py-5 flex justify-between items-center border border-gray-100 relative overflow-hidden mb-4">
            <div className="z-10">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Welcome, {user.name}</h2>
              <p className="text-gray-500">Begin your reading journey with MyBooks.</p>
            </div>
            <div className="block">
               <img 
                src="/public/header.jpg" 
                alt="Illustration" 
                className="w-30"
               />
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-100 min-h-[400px]">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Latest addition</h3>
             <div className="grid grid-cols-5 gap-4">
            {books.slice(0, 5).map((book)=>(
            <div key={book.id} className="flex flex-col items-center ">
            <img src={book.image} className="rounded-xl h-48 w-33" />
            <h2 className="font-medium">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
          </div>
            ))}
          </div>
          </div>
        </div>
  )
}

export default MainDashboard