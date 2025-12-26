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
    
              <div className=" bg-white rounded-xl p-8 border border-gray-100 min-h-[400px]">
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
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary border-b border-gray-300">
                <th class="px-6 py-4 ">
                    <img src="public/read.webp" className="w-10 h-10 rounded-full" alt="" />
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    02/10/2025
                </td>
                <td class="px-6 py-4">
                    12/10/2025
                </td>
                <td class="px-6 py-4">
                   <div class="py-1.5 px-2.5 bg-amber-50 rounded-full flex items-center justify-center w-20 gap-1">
                                <span class="font-medium text-xs text-amber-600 ">Reading</span>
                            </div>
                </td>
            </tr>
            <tr class="bg-neutral-primary border-b border-gray-300">
                <th class="px-6 py-4 ">
                    <img src="public/read.webp" className="w-10 h-10 rounded-full" alt="" />
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    12/10/2025
                </td>
                <td class="px-6 py-4">
                    12/10/2025
                </td>
                <td class="px-6 py-4">
                   <div class="py-1.5 px-2.5 bg-amber-50 rounded-full flex items-center justify-center w-20 gap-1">
                                <span class="font-medium text-xs text-amber-600 ">Reading</span>
                            </div>
                </td>
            </tr>
            <tr class="bg-neutral-primary">
                <th class="px-6 py-4 ">
                    <img src="public/read.webp" className="w-10 h-10 rounded-full" alt="" />
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    12/10/2025
                </td>
                <td class="px-6 py-4">
                    12/10/2025
                </td>
                <td class="px-6 py-4">
                    <div class="py-1.5 px-2.5 bg-emerald-50 rounded-full flex justify-center w-20 items-center gap-1">
                    <span class="font-medium text-xs text-emerald-600 ">Finishe</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
              </div>
            </div>
  )
}

export default MainRead