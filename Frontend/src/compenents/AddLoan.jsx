import React, { useContext, useState } from 'react'
import { LoanContext } from '../Context/LoanContext';

function AddLoan({book}) {
     const [borrower_name,setName]=useState("");
     const [return_date,setDate]=useState("");
     const {AddLoan} = useContext(LoanContext);

     const handleLoan = async (e) => {
     e.preventDefault(); 
        const data={
            borrower_name,
            return_date
        }
   const result= await AddLoan(book,data);
if (result) {
  alert("Loan ajouté avec succès");
} else {
  alert("Erreur lors de l'ajout");
}
  setName('');
  setDate('');
     }

  return (
    <>
     <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Add Loan</h2>
    <hr class="border-gray-200 mb-8" />
 <form onSubmit={handleLoan} action="">
    <div class="space-y-6">
      <div>
        <label class="block text-gray-700 font-medium mb-2">Name</label>
        <input type="text" value={borrower_name} onChange={(e)=>setName(e.target.value)} class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-800 focus:outline-none transition" placeholder=""/>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-2">Date return</label>
        <input type="date" value={return_date} onChange={(e)=>setDate(e.target.value)} class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-800 focus:outline-none transition"/>
      </div>

    </div>

    <div class="flex justify-end gap-4 mt-10">
      <button class="px-8 py-2 border border-gray-400 text-red-800 font-semibold rounded-xl hover:bg-gray-50 transition">
        Cancel
      </button>
      <button type="submit" class="px-8 py-2 bg-[#800020] text-white font-semibold rounded-xl hover:bg-[#4B0016] transition shadow-md">
        Confirm
      </button>   
    </div>
    </form>
    </>
  )
}

export default AddLoan;