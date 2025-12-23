import { Album, BookAIcon, Bookmark, BookOpen } from 'lucide-react'
import React from 'react'

function MainRead() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-white rounded-xl p-10 flex justify-between items-center border border-gray-100 relative overflow-hidden ">
                <div className="z-10">
                  <h2 className="text-xl font-medium text-gray-800 mb-2">Books added</h2>
                  <p className="text-gray-500 font-bold text-2xl">23</p>
                </div> 
                <div className="w-12 h-12 bg-[#E9EBF8] rounded-full flex items-center justify-center mb-6">
                <BookAIcon color='#800020'/>
                </div> 
              </div>
              <div className="bg-white rounded-xl p-10 flex justify-between items-center border border-gray-100 relative overflow-hidden ">
                <div className="z-10">
                  <h2 className="text-xl font-medium text-gray-800 mb-2">Books Reading</h2>
                  <p className="text-gray-500 font-bold text-2xl">30</p>
                </div> 
                <div className="w-12 h-12 bg-[#E9EBF8] rounded-full flex items-center justify-center mb-6">
                <BookOpen color='#800020'/>
                </div> 
              </div>
              <div className="bg-white rounded-xl p-10 flex justify-between items-center border border-gray-100 relative overflow-hidden ">
                <div className="z-10">
                  <h2 className="text-xl font-medium text-gray-800 mb-2">Books Finishe</h2>
                  <p className="text-gray-500 font-bold text-2xl">40</p>
                </div>
                <div className="w-12 h-12 bg-[#E9EBF8] rounded-full flex items-center justify-center mb-6">
                <Album color='#800020'/>
                </div> 
              </div>
              </div>
    
              <div className="bg-white rounded-xl p-8 border border-gray-100 min-h-[400px]">
                <h3 className="text-lg font-bold text-gray-800 mb-6">Latest addition</h3>
                <div className="border-2 border-dashed border-gray-100 rounded-2xl h-64 flex items-center justify-center">
                    <p className="text-gray-400 italic">No books added recently</p>
                </div>
              </div>
            </div>
  )
}

export default MainRead