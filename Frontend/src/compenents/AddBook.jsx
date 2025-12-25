import { CloudDownload } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { BookContext } from '../Context/BookContext';

function AddBook() {

 const [title,setTitle]=useState("");
 const [author,setAuthor]=useState("");
 const [image,setImage]=useState(null);
 const {AddBook}=useContext(BookContext);

 const handleBook = async (e) => {
   e.preventDefault();
const formData = new FormData();
formData.append("title", title);
formData.append("author", author);
formData.append("image", image);
    
   const result= await AddBook(formData);
 if (result) {
  alert("Book ajouté avec succès");
} else {
  alert("Erreur lors de l'ajout");
}

 }


  return (
    <>
     <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Add your Book</h2>
    <hr class="border-gray-200 mb-8" />
 <form onSubmit={handleBook} action="">
    <div class="space-y-6">
      <div>
        <label class="block text-gray-700 font-medium mb-2">Title</label>
        <input name='title' value={title} onChange={(e)=>setTitle(e.target.value)} type="text" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-800 focus:outline-none transition" placeholder=""/>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-2">Author</label>
        <input name='author' value={author} onChange={(e)=>setAuthor(e.target.value)} type="text" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-800 focus:outline-none transition" placeholder=""/>
      </div>

       <label for="dropzone-file" class="border-2 border-gray-300 cursor-pointer rounded-2xl p-4 flex flex-col items-center justify-center bg-white border-dashed hover:border-[#800020]">
        <div class="bg-gray-100 p-3 rounded-full mb-4">
          <CloudDownload color='#800020'/>
        </div>
        <p class="font-bold text-gray-800 mb-2 text-lg">Select Image to Upload</p>
        <p class="text-gray-400 text-sm mb-6 text-center">Supported Format : jpg,jpeg,png,webp</p>
        <input id="dropzone-file" name='image' onChange={(e)=>setImage(e.target.files[0])} type="file" class="hidden" />
      </label> 
    </div>

    <div class="flex justify-end gap-4 mt-10">
      <button type='reset' class="px-8 py-2 border border-gray-400 text-red-800 font-semibold rounded-xl hover:bg-gray-50 transition">
        Cancel
      </button>
      <button type='submit' class="px-8 py-2 bg-[#800020] text-white font-semibold rounded-xl hover:bg-[#4B0016] transition shadow-md">
        Confirm
      </button>   
    </div>
    </form>
    </>
  )
}

export default AddBook