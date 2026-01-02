import { Album, BadgeX, BookAIcon, BookCheck, Bookmark, BookOpen, Delete } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { ReadContext } from '../Context/ReadContext'
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

function AddUser() {
    
     const [name,setName]=useState("");
      const [email,setEmail]=useState("");
      const [password,setPassword]=useState("");
      const [confirmPassword,setconfirmPassword]=useState("");
      const [role, setRole] = useState("");
      const {register, errorR}=useContext(AuthContext);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const data={ 
        name,
        email,
        password,
        password_confirmation: confirmPassword,
        role,
        }
     const result= await register(data);
     if (result) {
      toast.success("Registration successful !");
      setName('')
      setEmail('')
      setPassword('')
      setconfirmPassword('')
      setRole('')
    } else {
      toast.error("Error during registration !");
    }
    
      }

          
  return (
    <div className="flex-1 overflow-y-auto p-4">
          
    
              <div className=" bg-white rounded-xl p-8 border border-gray-100 min-h-[400px]">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Add User</h3>
              
                    <form onSubmit={handleSubmit} class="space-y-5">
      <input
        type="name"
        name="name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Name"
        className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#393864]"
      />
{errorR.name && <p className="text-red-600 text-sm">{errorR.name[0]}</p>}

      <input
        type="email"
        name="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Email"
        className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#393864]"
      />
{errorR.email && <p className="text-red-600 text-sm">{errorR.email[0]}</p>}

      <input
        type="password"
        name="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Password"
        className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#393864]"
      />
{errorR.password && <p className="text-red-600 text-sm">{errorR.password}</p>}

      <input
        type="password"
        name="confirmpassword"
        value={confirmPassword}
        onChange={(e)=>setconfirmPassword(e.target.value)}
        placeholder="confirmed password"
        className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#393864]"
      />
{errorR.confirmPassword && <p className="text-red-600 text-sm">{errorR.confirmPassword[0]}</p>}
      <select
  value={role}
  onChange={(e) => setRole(e.target.value)}
  className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
  focus:outline-none focus:ring-2 focus:ring-[#393864]"
>
    <option >Select role</option>
  <option value="user">User</option>
  <option value="admin">Admin</option>
</select>

{errorR.role && (
  <p className="text-red-600 text-sm">{errorR.role[0]}</p>
)}
      <button
        type="submit"
        className="w-1/3 rounded-full bg-[#4B49AC] text-white py-3 cursor-pointer
               font-medium hover:bg-[#393864] transition"
      >
        Add
      </button>
    </form>
              </div>
            </div>
  )
}

export default AddUser;