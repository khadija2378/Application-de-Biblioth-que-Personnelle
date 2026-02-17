import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ResetPassword({onForgot}) {
    const [email,setEmail]=useState("");
      const [password,setPassword]=useState("");
      const [confirmPassword,setconfirmPassword]=useState("");
    const {resetPassword,errorF}=useContext(AuthContext);
    

    const handleSubmit = async (e) => {

        e.preventDefault();

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  const data = {
    email,
    password,
    password_confirmation: confirmPassword,
  };

  const result = await resetPassword(data);

  if (result) {
    toast.success("Password reset successful!");
    setEmail("");
    setPassword("");
    setconfirmPassword("");
  } else {
    toast.error("Password reset failed!");
  }
};

  return (
    <div className="flex flex-col justify-center px-10">
            <h2 class="text-center text-3xl font-semibold mb-9">Change Password</h2>

    <form onSubmit={handleSubmit} class="space-y-4">
      <input
        type="email"
        name="email"
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
        placeholder="Your email"
        className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#4B0016]"
      />
       {errorF.email && <p className="text-red-600 text-sm">{errorF.email[0]}</p>} 

      <input
        type="password"
         name="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
        placeholder="New Password"
        className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#4B0016]"
      />
       {errorF.password && <p className="text-red-600 text-sm">{errorF.password[0]}</p>} 

      <input
        type="password"
         name="confirmpassword"
         value={confirmPassword}
         onChange={(e)=>setconfirmPassword(e.target.value)}
        placeholder="Confirm password"
        className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#4B0016]"
      />

     

      <button
        type="submit"
        className="w-full rounded-full bg-[#800020] text-white py-3 cursor-pointer
               font-medium hover:bg-[#4B0016] transition"
      >
        Reset Password
      </button>
      <div className="text-center">
        <a  onClick={onForgot} class="text-xs text-[#800020] hover:text-[#4B0016] cursor-pointer">
          Return to login
        </a>
      </div>
    </form>
          </div>
  )
}

export default ResetPassword