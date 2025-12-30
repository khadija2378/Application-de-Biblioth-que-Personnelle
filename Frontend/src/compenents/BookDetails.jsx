import { Pencil, Trash, X } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import AddLoan from './AddLoan'
import ModifyBook from './ModifyBook'
import { BookContext } from '../Context/BookContext'
import { ReadContext } from '../Context/ReadContext'
import { LoanContext } from '../Context/LoanContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function BookDetails({ book , onSucces}) {
  const [currentBook, setCurrentBook] = useState(null)
  const [openLoan, setOpenLoan] = useState(false)
  const [openModify, setOpenModify] = useState(false)
  const [select, setSelect] = useState(null)

  const navigate = useNavigate()

  const { ShowBook, DeleteBook } = useContext(BookContext)
  const { AddReading, ModifyReading } = useContext(ReadContext)
  const { BookReturne } = useContext(LoanContext)

  // Fetch book details
  useEffect(() => {
    const fetchBook = async () => {
      const data = await ShowBook(book)
      setCurrentBook(data)
    }
    fetchBook()
  }, [book, ShowBook])

  // Handle start reading
  const handleReading = async () => {
    if (!currentBook) return
    const res = await AddReading(currentBook.id)
    if (res) {
      toast.success('Reading added successfully ✅')
      const data = await ShowBook(currentBook.id)
      setCurrentBook(data)
    } else {
      toast.error('Error adding reading ❌')
    }
  }

  // Handle mark as finished
  const handleModifyReading = async (id) => {
    const res = await ModifyReading(id)
    if (res) {
      toast.success('Reading marked as finished ✅')
      const data = await ShowBook(currentBook.id)
      setCurrentBook(data)
    } else {
      toast.error('Error updating reading ❌')
    }
  }

  // Handle book return
  const handleReturnBook = async (id) => {
    const res = await BookReturne(id)
    if (res) {
      toast.success('Book returned successfully ✅')
      const data = await ShowBook(currentBook.id)
      setCurrentBook(data)
    } else {
      toast.error('Error returning book ❌')
    }
  }

  // Handle delete book
  const handleDeleteBook = async (id) => {
    const res = await DeleteBook(id)
    if (res) {
      toast.success('Book deleted ✅')
       onSucces && onSucces();
    } else {
      toast.error('Error deleting book ❌')
    }
  }

  if (!currentBook) return <p>Loading...</p>

  return (
    <>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Book Details
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
          <h1 className="text-2xl font-bold text-gray-900">{currentBook.title}</h1>
          <p className="text-gray-500 mt-1 mb-6">{currentBook.author}</p>

          <div className="border-t border-gray-200 mb-8"></div>

          <div className="space-y-3 max-w-xs">
            {/* Reading Button */}
            {currentBook.readings?.length === 0 ? (
              <button
                onClick={handleReading}
                className="w-full py-3 px-6 rounded-full font-semibold transition bg-[#800018] hover:bg-[#600012] text-white cursor-pointer"
              >
                Start to read
              </button>
            ) : (
              <button
                onClick={() => handleModifyReading(currentBook.readings?.[0]?.id)}
                disabled={currentBook.readings?.[0]?.status === 'finished'}
                className={`w-full py-3 px-6 rounded-full font-semibold transition text-white ${
                  currentBook.readings?.[0]?.status === 'finished'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#588157] hover:bg-[#3a5a40] cursor-pointer'
                }`}
              >
                Finished to read
              </button>
            )}

            {/* Loan Button */}
            {currentBook.loans?.length === 0 || currentBook.loans?.[0]?.returned === 1 ? (
              <button
                onClick={() => {
                  setSelect(currentBook.id)
                  setOpenLoan(true)
                }}
                className="w-full py-3 px-6 rounded-full font-semibold transition bg-[#1e2d42] hover:bg-[#15202f] text-white cursor-pointer"
              >
                Add to loan
              </button>
            ) : (
              <button
                onClick={() => handleReturnBook(currentBook.loans?.[0]?.id)}
                className="w-full py-3 px-6 rounded-full font-semibold transition bg-[#800f2f] hover:bg-[#590d22] text-white cursor-pointer"
              >
                Return Book
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modify/Delete buttons */}
      <div className="flex justify-end gap-4">
        <button
          onClick={() => {
            setOpenModify(true)
            setSelect(currentBook)
          }}
          className="cursor-pointer"
        >
          <Pencil color="#0a9396" />
        </button>
        <button onClick={() => handleDeleteBook(currentBook.id)} className="cursor-pointer">
          <Trash color="#c1121f" />
        </button>
      </div>

      {/* Add Loan Modal */}
      {openLoan && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-8 relative">
            <button
              onClick={() => setOpenLoan(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X />
            </button>
            <AddLoan book={select} onSuccess={async () => {
              const data = await ShowBook(currentBook.id)
              setCurrentBook(data)
              setOpenLoan(false)
            }}/>
          </div>
        </div>
      )}

      {/* Modify Book Modal */}
      {openModify && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-8 relative">
            <button
              onClick={() => setOpenModify(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X />
            </button>
            <ModifyBook book={select} onSuccess={async () => {
              const data = await ShowBook(currentBook.id)
              setCurrentBook(data)
              setOpenModify(false)
            }} />
          </div>
        </div>
      )}
    </>
  )
}

export default BookDetails
