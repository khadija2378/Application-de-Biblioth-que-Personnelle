import { Bookmark, PlusCircle } from 'lucide-react'
import React from 'react'

function MainBook() {
  return (
    
          <div className="bg-white rounded-xl p-8 border border-gray-100 min-h-[400px] m-4">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Your Books</h3>
            <div className="grid grid-cols-5 gap-4">
                <div className="flex flex-col items-center justify-center  transition-colors group">
                    <img src="/public/read.webp" alt="" className="rounded-xl h-48 w-33" />
                    <h2 className='font-medium'>Funaire</h2>
                    <p className='text-gray-600'>Aykroyd</p>
                </div>
                 <div className="flex flex-col items-center justify-center  transition-colors group">
                    <img src="/public/read1.webp" alt="" className="rounded-xl h-48 w-33" />
                    <h2 className='font-medium'>Under</h2>
                    <p className='text-gray-600'>Peters</p>
                </div>
                 <div className="flex flex-col items-center justify-center  transition-colors group">
                    <img src="/public/read2.webp" alt="" className="rounded-xl h-48 w-33" />
                    <h2 className='font-medium'>Hello</h2>
                    <p className='text-gray-600'>Stephanie</p>
                </div>
            <button className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-xl h-48 w-33 hover:bg-slate-50 transition-colors group">
          <PlusCircle className="text-slate-400 group-hover:text-red-800 mb-2" size={32} />
          <span className="text-slate-500 font-semibold text-sm">Add Book</span>
        </button>
        </div>
          </div>
        
  )
}

export default MainBook