import { Pencil, Trash, X } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import AddLoan from './AddLoan'
import { BookContext } from '../Context/BookContext'
import { ReadContext } from '../Context/ReadContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function BookDetails({ book }) {
  const [openLoan, setOpenLoan] = useState(false)
    const [openModify, setOpenModify] = useState(false)

  const [currentBook, setCurrentBook] = useState(null)
  const [select, setSelect] = useState(null)
 const navigate = useNavigate();


  const { ShowBook, DeleteBook } = useContext(BookContext)
  const { AddReading } = useContext(ReadContext)

  useEffect(() => {
    const fetchBook = async () => {
      const data = await ShowBook(book)
      setCurrentBook(data)
    }
    fetchBook()
  }, [book])

  const handleReading = async () => {
    const res = await AddReading(book)
    if (res) {
      toast.success('Reading ajoutée avec succès')
      const data = await ShowBook(book)
      setCurrentBook(data)
    } else {
      toast.error("Erreur lors de l'ajout")
    }
  }

  const handelDelete = async (id) => {
    const res = await DeleteBook(id)
    
    if (res){
       toast.success("delete book !");
          navigate('/dashboard');
    } else {
       toast.error("Error while adding book !");
    }
  }

if (!currentBook) return <p>Loading...</p>

  return (
    <>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Your Book
      </h2>
      <hr className="border-gray-200 mb-8" />

      <div className="flex flex-row gap-8 items-start mb-12">
        <div className="w-48">
          <img
            src={currentBook.image}
            alt={currentBook.title}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">
            {currentBook.title}
          </h1>
          <p className="text-gray-500 mt-1 mb-6">
            {currentBook.author}
          </p>

          <div className="border-t border-gray-200 mb-8"></div>

          <div className="space-y-3 max-w-xs">
            <button
              onClick={handleReading}
              disabled={currentBook.readings.length > 0}
              className={`w-full py-3 px-6 rounded-full font-semibold transition
                ${currentBook.readings.length > 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#800018] hover:bg-[#600012] text-white cursor-pointer'}
              `}
            >
              Start to read
            </button>

            <button
              onClick={() => {
                setSelect(currentBook.id)
                if (currentBook.loans.length === 0) setOpenLoan(true)
              }}
              disabled={currentBook.loans.length > 0}
              className={`w-full py-3 px-6 rounded-full font-semibold transition
                ${currentBook.loans.length > 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#1e2d42] hover:bg-[#15202f] text-white cursor-pointer'}
              `}
            >
              Add to loan
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button onClick={()=>{setOpenModify(true); setSelect(currentBook)}} className=" cursor-pointer ">
          <Pencil color='#0a9396'/>
         
        </button>

        <button
          onClick={() => handelDelete(currentBook.id)}
          className=" cursor-pointer "
        >
          <Trash color='#c1121f'/>
        </button>
      </div>

      {openLoan && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-8 relative">
            <button
              onClick={() => setOpenLoan(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X />
            </button>

            <AddLoan book={select} />
          </div>
        </div>
      )}
      {openModify && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-8 relative">
            <button
              onClick={() => setOpenModify(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X />
            </button>

            <AddLoan book={select} />
          </div>
        </div>
      )}
    </>
  )
}

export default BookDetails
