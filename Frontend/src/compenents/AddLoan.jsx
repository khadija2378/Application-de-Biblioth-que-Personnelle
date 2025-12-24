import React from 'react'

function AddLoan() {
  return (
    <>
     <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Add Loan</h2>
    <hr class="border-gray-200 mb-8" />
 <form action="">
    <div class="space-y-6">
      <div>
        <label class="block text-gray-700 font-medium mb-2">Name</label>
        <input type="text" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-800 focus:outline-none transition" placeholder=""/>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-2">Date return</label>
        <input type="date" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-800 focus:outline-none transition"/>
      </div>

    </div>

    <div class="flex justify-end gap-4 mt-10">
      <button class="px-8 py-2 border border-gray-400 text-red-800 font-semibold rounded-xl hover:bg-gray-50 transition">
        Cancel
      </button>
      <button class="px-8 py-2 bg-[#800020] text-white font-semibold rounded-xl hover:bg-[#4B0016] transition shadow-md">
        Confirm
      </button>   
    </div>
    </form>
    </>
  )
}

export default AddLoan;