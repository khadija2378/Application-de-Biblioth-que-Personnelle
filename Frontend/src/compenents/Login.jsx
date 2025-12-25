import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login(){

 
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
   
    const {login}=useContext(AuthContext);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const data={ 
      email,
      password,
      }
   const result= await login(data);
   if(!result){
    alert('pas conncter');
   }
   navigate('/dashboard');
    
  
    }

    return(
         <div className="flex flex-col justify-center px-10">
            <h2 class="text-center text-3xl font-semibold mb-9">Log In</h2>

    <form onSubmit={handleSubmit} class="space-y-4">
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Email"
        className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#4B0016]"
      />

      <input
        type="password"
         name="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Password"
        className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#4B0016]"
      />

      <div className="text-right">
        <a href="#" class="text-xs text-gray-400 hover:text-gray-600">
          Forgot password ?
        </a>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-[#800020] text-white py-3
               font-medium hover:bg-[#4B0016] transition"
      >
        Log In
      </button>
    </form>
          </div>
    )
}
export default Login;