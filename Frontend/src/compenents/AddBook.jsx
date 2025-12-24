import { CloudDownload } from 'lucide-react'
import React from 'react'

function AddBook() {
  return (
    <>
     <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Add your Book</h2>
    <hr class="border-gray-200 mb-8" />
 <form action="">
    <div class="space-y-6">
      <div>
        <label class="block text-gray-700 font-medium mb-2">Title</label>
        <input type="text" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-800 focus:outline-none transition" placeholder=""/>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-2">Author</label>
        <input type="text" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-800 focus:outline-none transition" placeholder=""/>
      </div>

       <label for="dropzone-file" class="border-2 border-gray-300 cursor-pointer rounded-2xl p-4 flex flex-col items-center justify-center bg-white border-dashed hover:border-[#800020]">
        <div class="bg-gray-100 p-3 rounded-full mb-4">
          <CloudDownload color='#800020'/>
        </div>
        <p class="font-bold text-gray-800 mb-2 text-lg">Select Image to Upload</p>
        <p class="text-gray-400 text-sm mb-6 text-center">Supported Format : jpg,jpeg,png,webp</p>
        <input id="dropzone-file" type="file" class="hidden" />
      </label> 
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

export default AddBook