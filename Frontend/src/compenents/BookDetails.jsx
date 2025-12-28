import { X } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import AddLoan from './AddLoan'
import { BookContext } from '../Context/BookContext'
import { ReadContext } from '../Context/ReadContext'
import { toast } from 'react-toastify'
import { LoanContext } from '../Context/LoanContext'

function BookDetails({book}) {
    const [open, setOpen] = useState(false)
    const [currentBook, setCurrentBook] = useState(null);
    const {ShowBook} = useContext(BookContext);
    const {AddReading} = useContext(ReadContext);

    const [select,setSelect] = useState(null)

    

    useEffect(()=>{
    const fetchBook = async () => {
      const data = await ShowBook(book); 
      setCurrentBook(data); 
    };
    fetchBook();
  }, [book]);

   const handleReading = async () => {
      const res= await AddReading(book);
      if(res){
        toast.success("Loan ajouté avec succès");
      }else{
        toast.error("Erreur lors de l'ajout");
      }
   } 

    if (!currentBook) return <p>Laoding ...</p>;

  return (
    <>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">your Book</h2>
          <hr className="border-gray-200 mb-8" />
    <div>    
  <div className="flex flex-row gap-8 items-start mb-12">
    
    <div class="w-48">
      <img 
        src={currentBook.image}
        alt="The Lies We Inherit" 
        className="rounded-lg shadow-lg w-full h-auto object-cover"
      />
    </div>

    <div className="flex-1">
      <h1 className="text-2xl font-bold text-gray-900 leading-tight">
        {currentBook.title}
      </h1>
      <p className="text-gray-500 mt-1 mb-6">{currentBook.author}</p>
      
      <div className="w-full border-t border-gray-200 mb-8"></div>

      <div className="space-y-3 max-w-xs">
        <button onClick={handleReading} className={`w-full bg-[#800018] hover:bg-[#600012] text-white font-semibold py-3 px-6 rounded-full transition duration-200 ${
    currentBook.readings.length>0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  }`}
  disabled={currentBook.readings.length>0}
  >
          Start to read
        </button>
     <button
  onClick={() => {
    setSelect(currentBook.id);
    if (currentBook.loans.length === 0) setOpen(true); 
  }}
  className={`w-full bg-[#1e2d42] hover:bg-[#15202f] text-white font-semibold py-3 px-6 rounded-full transition duration-200 ${
    currentBook.loans.length>0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  }`}
  disabled={currentBook.loans.length>0}
>
  Add to loan
</button>
        
        
      </div>
    </div>
  </div>

  <div class="flex justify-end gap-4">
    <button class="flex items-center gap-2 px-6 py-2 border border-gray-400 text-gray-600 rounded-xl hover:bg-gray-50 transition">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
      Edit
    </button>
    <button class="flex items-center gap-2 px-6 py-2 border border-gray-400 text-gray-600 rounded-xl hover:bg-gray-50 transition">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
      Delete
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
          <AddLoan book={select}/>
          </div>
        </div>
      )}
        </>  
  )
}

export default BookDetails