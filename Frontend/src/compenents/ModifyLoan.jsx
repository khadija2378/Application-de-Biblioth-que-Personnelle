
import React, { useContext, useEffect, useState } from 'react'
import { LoanContext } from '../Context/LoanContext';
import { toast } from 'react-toastify';

function ModifyLoan({loan, onSuccess}) {
     const [borrower_name,setBorrowerName]=useState("");
     const [return_date,setReturnDate]=useState("");
     const {ModifyLoan} = useContext(LoanContext);

     useEffect(() => {
        if (loan) {
            setBorrowerName(loan.borrower_name);
            setReturnDate(loan.return_date);
        }
    }, [loan]);

     const handleLoan = async (e) => {
     e.preventDefault(); 
        const data={
            borrower_name,
            return_date
        }
   const result= await ModifyLoan(loan.id,data);
if (result) {
  toast.success("Loan modifier avec succès");
   onSuccess && onSuccess();
} else {
  toast.error("Erreur lors de l'ajout");
}
  
     }

  return (
    <>
     <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Add Loan</h2>
    <hr class="border-gray-200 mb-8" />
 <form onSubmit={handleLoan} action="">
    <div class="space-y-6">
      <div>
        <label class="block text-gray-700 font-medium mb-2">Name</label>
        <input type="text" value={borrower_name} onChange={(e)=>setBorrowerName(e.target.value)} class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-800 focus:outline-none transition" placeholder=""/>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-2">Date return</label>
        <input type="date" value={return_date} onChange={(e)=>setReturnDate(e.target.value)} class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-800 focus:outline-none transition"/>

      </div>

    </div>

    <div class="flex justify-end gap-4 mt-10">
      
      <button type="submit" class="px-8 py-2 bg-[#800020] text-white font-semibold cursor-pointer rounded-xl hover:bg-[#4B0016] transition shadow-md">
        Modify
      </button>   
    </div>
    </form>
    </>
  )
}

export default ModifyLoan;