import { BadgeX, Bookmark, LibraryBig, SquareArrowDown, SquarePen, TimerReset } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { LoanContext } from '../Context/LoanContext';

function MainLoan() {
    const {GetLoans , loans, DeleteLoan} = useContext(LoanContext);

    useEffect(()=>{
      GetLoans();
    },[])

    const deleteLoans =(id)=>{
        DeleteLoan(id)
    }

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
                <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-xl border border-gray-300">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-gray-100 border-b rounded-base border-gray-300">
            <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                    image
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Name Book
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Name Borrower
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Date Loan
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Date return
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Status
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {loans.map((loan)=>(
               <tr key={loan.id} class="bg-neutral-primary border-b border-gray-300">
                <th class="px-6 py-4 ">
                    <img src={loan.book.image} className="w-10 h-10 rounded-full" alt="" />
                </th>
                <td class="px-6 py-4">
                     {loan.book.title}
                </td>
                <td class="px-6 py-4">
                    {loan.borrower_name}
                </td>
                <td class="px-6 py-4">
                   {loan.loan_date}
                </td>
                <td class="px-6 py-4">
                    {loan.return_date}
                </td>
                <td class="px-6 py-4">
                    <td className="px-6 py-4 space-y-1">
  {loan.returned === 1 ? (
    <div className="py-1.5 px-2.5 bg-emerald-50 rounded-full flex justify-center w-20">
      <span className="font-medium text-xs text-emerald-600">Returned</span>
    </div>
  ) : new Date(loan.return_date) < new Date() ? (
    <div className="py-1.5 px-2.5 bg-red-50 rounded-full flex justify-center w-20">
      <span className="font-medium text-xs text-red-600">Late</span>
    </div>
  ) : (
    <div className="py-1.5 px-2.5 bg-amber-50 rounded-full flex justify-center w-20">
      <span className="font-medium text-xs text-amber-600">Pending</span>
    </div>
  )}
</td>
                   
                </td>
                 <td className="px-6 py-4 space-x-5">
            <button onClick={()=>deleteLoans(loan.id)} className='cursor-pointer'><BadgeX color="red" /></button>
            <button className='cursor-pointer'><SquarePen color="green" /></button>
          </td>
            </tr>
            ))}
            
            
        </tbody>
    </table>
</div>
              </div>
            </div>
  )
}

export default MainLoan