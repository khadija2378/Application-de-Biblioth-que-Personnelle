
import { BookCopy, BookOpenCheck, LibraryBig } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { BookContext } from '../Context/BookContext';
import { ReadContext } from '../Context/ReadContext';
import { LoanContext } from '../Context/LoanContext';
import LineChart from './LineChart';

function MainStatistic() {

  const {GetBooks , books} = useContext(BookContext);

  const {GetLoans , loans} = useContext(LoanContext);

  const {GetRedings,readings}=useContext(ReadContext);
      
      useEffect(()=>{
        GetBooks();
        GetLoans();
        GetRedings();
      },[])


  return (
    <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-xl p-10 flex justify-between items-center border border-gray-100 relative overflow-hidden ">
            <div className="z-10">
              <h2 className="text-xl font-medium text-gray-800 mb-2">Books added</h2>
              <p className="text-gray-500 font-bold text-2xl">{books.length}</p>
            </div> 
            <div className="w-12 h-12 bg-[#E9EBF8] rounded-full flex items-center justify-center mb-6">
            <LibraryBig color='#800020'/>
            </div> 
          </div>
          <div className="bg-white rounded-xl p-10 flex justify-between items-center border border-gray-100 relative overflow-hidden ">
            <div className="z-10">
              <h2 className="text-xl font-medium text-gray-800 mb-2">Books read</h2>
              <p className="text-gray-500 font-bold text-2xl">{readings.length}</p>
            </div> 
            <div className="w-12 h-12 bg-[#E9EBF8] rounded-full flex items-center justify-center mb-6">
            <BookOpenCheck color='#800020'/>
            </div> 
          </div>
          <div className="bg-white rounded-xl p-10 flex justify-between items-center border border-gray-100 relative overflow-hidden ">
            <div className="z-10">
              <h2 className="text-xl font-medium text-gray-800 mb-2">Books borrowed</h2>
              <p className="text-gray-500 font-bold text-2xl">{loans.length}</p>
            </div>
            <div className="w-12 h-12 bg-[#E9EBF8] rounded-full flex items-center justify-center mb-6">
            <BookCopy color='#800020'/>
            </div> 
          </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-100 min-h-[400px]">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Latest addition</h3>
            <LineChart/>
          </div>
        </div>
  )
}

export default MainStatistic