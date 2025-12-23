import React from 'react'

function MainDashboard() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
          <div className="bg-white rounded-xl px-10 py-5 flex justify-between items-center border border-gray-100 relative overflow-hidden mb-4">
            <div className="z-10">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Welcome, Khadija</h2>
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
            <h3 className="text-lg font-bold text-gray-800 mb-6">Latest addition</h3>
            <div className="border-2 border-dashed border-gray-100 rounded-2xl h-64 flex items-center justify-center">
                <p className="text-gray-400 italic">No books added recently</p>
            </div>
          </div>
        </div>
  )
}

export default MainDashboard