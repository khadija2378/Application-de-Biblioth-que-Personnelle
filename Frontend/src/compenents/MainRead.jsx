import { Album, BadgeX, BookAIcon, BookCheck, Bookmark, BookOpen, Delete } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { ReadContext } from '../Context/ReadContext'

function MainRead() {
    const {GetRedings,readings,DeleteReding}=useContext(ReadContext);

    useEffect(()=>{
   GetRedings();
    },[])

    const deleteRead =(id)=>{
        DeleteReding(id)
    }

    const readCout =readings.filter((read)=>read.status === 'reading');
    const finishCout=readings.filter((read)=>read.status === 'finished');
    
  return (
    <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-white rounded-xl p-10 flex justify-between items-center border border-gray-100 relative overflow-hidden ">
                <div className="z-10">
                  <h2 className="text-xl font-medium text-gray-800 mb-2">Books added</h2>
                  <p className="text-gray-500 font-bold text-2xl">{readings.length}</p>
                </div> 
                <div className="w-12 h-12 bg-[#E9EBF8] rounded-full flex items-center justify-center mb-6">
                <BookAIcon color='#800020'/>
                </div> 
              </div>
              <div className="bg-white rounded-xl p-10 flex justify-between items-center border border-gray-100 relative overflow-hidden ">
                <div className="z-10">
                  <h2 className="text-xl font-medium text-gray-800 mb-2">Books Reading</h2>
                  <p className="text-gray-500 font-bold text-2xl">{readCout.length}</p>
                </div> 
                <div className="w-12 h-12 bg-[#E9EBF8] rounded-full flex items-center justify-center mb-6">
                <BookOpen color='#800020'/>
                </div> 
              </div>
              <div className="bg-white rounded-xl p-10 flex justify-between items-center border border-gray-100 relative overflow-hidden ">
                <div className="z-10">
                  <h2 className="text-xl font-medium text-gray-800 mb-2">Books Finishe</h2>
                  <p className="text-gray-500 font-bold text-2xl">{finishCout.length}</p>
                </div>
                <div className="w-12 h-12 bg-[#E9EBF8] rounded-full flex items-center justify-center mb-6">
                <Album color='#800020'/>
                </div> 
              </div>
              </div>
    
              <div className=" bg-white rounded-xl p-8 border border-gray-100 min-h-[400px]">
                                <h3 className="text-xl font-bold text-gray-800 mb-6">Liste Reading</h3>
                     <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-xl border border-gray-300">
  <table className="w-full text-sm text-left rtl:text-right text-body">
    <thead className="text-sm text-body bg-gray-100 border-b rounded-base border-gray-300">
      <tr>
        <th className="px-6 py-3 font-medium">image</th>
        <th className="px-6 py-3 font-medium">Name Book</th>
        <th className="px-6 py-3 font-medium">Author Book</th>
        <th className="px-6 py-3 font-medium">Status</th>
        <th className="px-6 py-3 font-medium">Action</th>
      </tr>
    </thead>

    <tbody>
      {readings.map((read) => (
        <tr key={read.id} className="bg-neutral-primary border-b border-gray-300">
          <th className="px-6 py-4">
            <img src={read.book?.image} className="w-10 h-10 rounded-full" />
          </th>
          <td className="px-6 py-4">{read.book?.title}</td>
          <td className="px-6 py-4">{read.book?.author}</td>
          <td className="px-6 py-4">
            {read.status === "reading" ? (
    <div className="py-1.5 px-2.5 bg-amber-50 rounded-full flex justify-center w-20">
      <span className="font-medium text-xs text-amber-600">reading</span>
    </div>
  ) : (
    <div className="py-1.5 px-2.5 bg-emerald-50 rounded-full flex justify-center w-20">
      <span className="font-medium text-xs text-emerald-600">finished</span>
    </div>
  )}
          </td>
          <td className="px-6 py-4">
            <button  onClick={() => deleteRead(read.id)}  className='cursor-pointer'><BadgeX color="red" /></button>
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

export default MainRead