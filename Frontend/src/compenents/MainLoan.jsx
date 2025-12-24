import { Bookmark, LibraryBig, SquareArrowDown, TimerReset } from 'lucide-react'
import React from 'react'

function MainLoan() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-white rounded-xl p-10 flex justify-between items-center border border-gray-100 relative overflow-hidden ">
                <div className="z-10">
                  <h2 className="text-xl font-medium text-gray-800 mb-2">Books Loans</h2>
                  <p className="text-gray-500 font-bold text-2xl">23</p>
                </div> 
                <div className="w-12 h-12 bg-[#E9EBF8] rounded-full flex items-center justify-center mb-6">
                <LibraryBig color='#800020'/>
                </div> 
              </div>
              <div className="bg-white rounded-xl p-10 flex justify-between items-center border border-gray-100 relative overflow-hidden ">
                <div className="z-10">
                  <h2 className="text-xl font-medium text-gray-800 mb-2">Books returned</h2>
                  <p className="text-gray-500 font-bold text-2xl">30</p>
                </div> 
                <div className="w-12 h-12 bg-[#E9EBF8] rounded-full flex items-center justify-center mb-6">
                <SquareArrowDown color='#800020'/>
                </div> 
              </div>
              <div className="bg-white rounded-xl p-10 flex justify-between items-center border border-gray-100 relative overflow-hidden ">
                <div className="z-10">
                  <h2 className="text-xl font-medium text-gray-800 mb-2">Books Late</h2>
                  <p className="text-gray-500 font-bold text-2xl">40</p>
                </div>
                <div className="w-12 h-12 bg-[#E9EBF8] rounded-full flex items-center justify-center mb-6">
                <TimerReset color='#800020'/>
                </div> 
              </div>
              </div>
    
              <div className="bg-white rounded-xl p-8 border border-gray-100 min-h-[400px]">
                <div className="flex gap-5">
                <button className="bg-gray-200 rounded-full text-gray-800 px-6 py-2.5 font-medium  cursor-pointer hover:text-[#800020]">
                    All 
                </button>
                <button className="bg-gray-200 rounded-full text-gray-800 px-6 py-2.5 font-medium  cursor-pointer hover:text-[#800020]">
                    returned
                </button>
                <button className="bg-gray-200 rounded-full text-gray-800 px-6 py-2.5 font-medium  cursor-pointer hover:text-[#800020]">
                    Late
                </button>
                </div>
              </div>
            </div>
  )
}

export default MainLoan