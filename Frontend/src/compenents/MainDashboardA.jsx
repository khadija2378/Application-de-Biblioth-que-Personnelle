import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { User2, UserCheck, UserCircle, Users } from 'lucide-react';

function MainDashboardA() {

  const {users,getUsers}=useContext(AuthContext);

    useEffect(()=>{
    getUsers();
    },[])
          const user=users.filter(f=>f.role == 'user')
          const admin=users.filter(f=>f.role == 'admin')
  
  return (
    <div className="flex-1 overflow-y-auto p-4">
           <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-white rounded-xl p-10 flex justify-between items-center border border-gray-100 relative overflow-hidden ">
                <div className="z-10">
                  <h2 className="text-xl font-medium text-gray-800 mb-2">All users</h2>
                  <p className="text-gray-500 font-bold text-2xl">{users.length}</p>
                </div> 
                <div className="w-12 h-12 bg-[#E9EBF8] rounded-full flex items-center justify-center mb-6">
                <Users color='#4B49AC'/>
                </div> 
              </div>
              <div className="bg-white rounded-xl p-10 flex justify-between items-center border border-gray-100 relative overflow-hidden ">
                <div className="z-10">
                  <h2 className="text-xl font-medium text-gray-800 mb-2">Users Add</h2>
                  <p className="text-gray-500 font-bold text-2xl">{user.length}</p>
                </div> 
                <div className="w-12 h-12 bg-[#E9EBF8] rounded-full flex items-center justify-center mb-6">
                <UserCheck color='#4B49AC'/>
                </div> 
              </div>
              <div className="bg-white rounded-xl p-10 flex justify-between items-center border border-gray-100 relative overflow-hidden ">
                <div className="z-10">
                  <h2 className="text-xl font-medium text-gray-800 mb-2">Admin Add</h2>
                  <p className="text-gray-500 font-bold text-2xl">{admin.length}</p>
                </div>
                <div className="w-12 h-12 bg-[#E9EBF8] rounded-full flex items-center justify-center mb-6">
                <User2 color='#4B49AC'/>
                </div> 
              </div>
              </div>

          <div className="bg-white rounded-xl p-8 border border-gray-100 min-h-[400px]">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Latest addition</h3>
             
          </div>
          </div>
        
  )
}

export default MainDashboardA