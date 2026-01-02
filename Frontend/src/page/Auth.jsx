import { useState } from "react";
import Login from "../compenents/Login";
import Register from "../compenents/Register";
import { LogIn, UserRoundPlus } from "lucide-react";

export default function AuthCard() {
  const [flip, setFlip] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-full max-w-4xl h-[480px] bg-white rounded-xl shadow-xl overflow-hidden perspective-1200">

        <div className="absolute inset-0 grid grid-cols-2">
         <Login/>
         <Register/>
          
        </div>

        <div
          className={`absolute top-0 left-0 h-full w-1/2 transition-transform duration-700 preserve-3d
          ${flip ? "translate-x-full rotate-y-180" : ""}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#800020] to-[#4B0016] text-white flex flex-col justify-center items-center space-y-9 backface-hidden">
            <LogIn size={60}/>
            <h2 className="text-3xl font-bold ">Welcome Back</h2>
            <p className="font-thin">Access your personal library and manage your books easily</p>
            <button
              onClick={() => setFlip(true)}
              className="border px-6 py-2 font-semibold rounded-full hover:bg-white hover:text-[#800020] transition"
            >
              Sign In
            </button>
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-[#800020] to-[#4B0016] text-white flex flex-col justify-center items-center space-y-9 backface-hidden rotate-y-180">
            <UserRoundPlus size={60}/>
            <h2 className="text-3xl font-bold ">Hello, Friend</h2>
            <p className="font-thin text-center mx-7">Create an account to start building and organizing your personal book collection</p>
            <button
              onClick={() => setFlip(false)}
              className="border px-6 py-2 font-semibold rounded-full hover:bg-white hover:text-[#800020] transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
