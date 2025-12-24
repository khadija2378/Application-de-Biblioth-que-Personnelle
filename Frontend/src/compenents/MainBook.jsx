import { PlusCircle, X } from 'lucide-react'
import React, { useState } from 'react'
import AddBook from './AddBook'
import BookDetails from './BookDetails'

function MainBook() {
  const [open, setOpen] = useState(false)
  const [openBook, setOpenBook] = useState(false)

  return (
    <>
      <div className="bg-white rounded-xl p-8 border border-gray-100 min-h-[400px] m-4">
        <h3 className="text-lg font-bold text-gray-800 mb-6">Your Books</h3>

        <div className="grid grid-cols-5 gap-4">
          <div  onClick={() => setOpenBook(true)} className="flex flex-col items-center cursor-pointer">
            <img src="/public/read.webp" className="rounded-xl h-48 w-33" />
            <h2 className="font-medium">Funaire</h2>
            <p className="text-gray-600">Aykroyd</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/public/read1.webp" className="rounded-xl h-48 w-33" />
            <h2 className="font-medium">Under</h2>
            <p className="text-gray-600">Peters</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/public/read2.webp" className="rounded-xl h-48 w-33" />
            <h2 className="font-medium">Hello</h2>
            <p className="text-gray-600">Stephanie</p>
          </div>

          <button  onClick={() => setOpen(true)} className="flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-slate-200 rounded-xl h-48 w-33 hover:bg-slate-50 transition-colors group">
          <PlusCircle className="text-slate-400 group-hover:text-red-800 mb-2" size={32} />
          <span className="text-slate-500 font-semibold text-sm">Add Book</span>
        </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-8 relative">
            
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X />
            </button>
          <AddBook/>
          </div>
        </div>
      )}
      {openBook && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-xl p-10 relative">
            
            <button
              onClick={() => setOpenBook(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X />
            </button>
          <BookDetails/>
          </div>
        </div>
      )}
    </>
  )
}

export default MainBook
