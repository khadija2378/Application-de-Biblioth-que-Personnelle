import { Album, BadgeX, BookAIcon, BookCheck, Bookmark, BookOpen, Delete } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { ReadContext } from '../Context/ReadContext'
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

function TableAdmin() {
    const {users,getUsers,deleteUser}=useContext(AuthContext);

    useEffect(()=>{
    getUsers();
    },[])

const deleteAdmin =async(id)=>{
       const res=await deleteUser(id)
       if(res){
        toast.success("User deleted");
  } else {
    toast.error("Error deleting user");
       }
    }

          const admin=users.filter(f=>f.role == 'admin')
  return (
    <div className="flex-1 overflow-y-auto p-4">
           
    
              <div className=" bg-white rounded-xl p-8 border border-gray-100 min-h-full">
                                <h3 className="text-xl font-bold text-gray-800 mb-6">Liste Admin</h3>
                     <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-xl border border-gray-300">
  <table className="w-full text-sm text-left rtl:text-right text-body">
    <thead className="text-sm text-body bg-gray-100 border-b rounded-base border-gray-300">
      <tr>
        <th className="px-6 py-3 font-medium">ID</th>
        <th className="px-6 py-3 font-medium">Name</th>
        <th className="px-6 py-3 font-medium">Email</th>
        <th className="px-6 py-3 font-medium">role</th>
        <th className="px-6 py-3 font-medium">Action</th>
      </tr>
    </thead>

    <tbody>
      {admin?.map((u) => (
        <tr key={u.id} className="bg-neutral-primary border-b border-gray-300">
          <th className="px-6 py-4">{u.id}</th>
          <td className="px-6 py-4">{u.name}</td>
          <td className="px-6 py-4">{u.email}</td>
          <td className="px-6 py-4">{u.role}</td>
          <td className="px-6 py-4">
            <button onClick={()=>deleteAdmin(u.id)}  className='cursor-pointer'><BadgeX color="red" /></button>
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

export default TableAdmin