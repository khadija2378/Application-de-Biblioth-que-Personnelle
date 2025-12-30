import { CloudDownload } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { BookContext } from '../Context/BookContext'
import { toast } from 'react-toastify'

function ModifyBook({ book ,onSuccess }) {

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [image, setImage] = useState(null)

  const { UpdateBook } = useContext(BookContext)

  useEffect(() => {
    if (book) {
      setTitle(book.title)
      setAuthor(book.author)
      setImage(book.image) 
    }
  }, [book])

  const handleBook = async (e) => {
    e.preventDefault()

    const data = new FormData()
    data.append("title", title)
    data.append("author", author)

    if (image instanceof File) {
      data.append("image", image)
    }

    const updated = await UpdateBook(book.id, data)

   if (updated) {
      toast.success("Book modified successfully ✅");
      onSuccess && onSuccess(updated); 
    } else {
      toast.error("Error while modifying book ❌");
    }
  
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Modify your Book
      </h2>

      <hr className="border-gray-200 mb-8" />

      <form onSubmit={handleBook}>
        <div className="space-y-6">

          <div>
            <label className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-800 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Author</label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-800 focus:outline-none"
            />
          </div>

          <label className="border-2 border-dashed border-gray-300 cursor-pointer rounded-2xl p-4 flex flex-col items-center hover:border-[#800020]">

            {image ? (
              <img
                src={
                  image instanceof File
                    ? URL.createObjectURL(image)
                    : image
                }
                alt="Preview"
                className="w-24 h-24 object-cover rounded-xl"
              />
            ) : (
              <>
                <div className="bg-gray-100 p-3 rounded-full mb-4">
                  <CloudDownload color="#800020" />
                </div>
                <p className="font-bold text-gray-800">Select Image</p>
              </>
            )}

            <input
              type="file"
              className="hidden"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>

        </div>

        <div className="flex justify-end mt-10">
          <button
            type="submit"
            className="px-8 py-2 bg-[#800020] text-white font-semibold cursor-pointer rounded-xl hover:bg-[#4B0016]"
          >
            Modify
          </button>
        </div>
      </form>
    </>
  )
}

export default ModifyBook
