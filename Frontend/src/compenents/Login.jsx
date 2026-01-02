import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login(){

 
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
   
    const {login,errorL}=useContext(AuthContext);
  
    const handleSubmit = async (e) => {
      
      e.preventDefault();
  
      const data={ 
      email,
      password,
      }
      
    const result = await login(data);

   if (result?.user?.role === "user") {
      navigate("/dashboard");
    } else if (result?.user?.role === "admin") {
      navigate("/dashboardAdmin");
    } else {
      toast.error("Invalid email or password");
    }
  
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
      {errorL.email && <p className="text-red-600 text-sm">{errorL.email[0]}</p>}

      <input
        type="password"
         name="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Password"
        className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#4B0016]"
      />
      {errorL.password && <p className="text-red-600 text-sm">{errorL.password[0]}</p>}

      <div className="text-right">
        <a href="#" class="text-xs text-gray-400 hover:text-gray-600">
          Forgot password ?
        </a>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-[#800020] text-white py-3 cursor-pointer
               font-medium hover:bg-[#4B0016] transition"
      >
        Log In
      </button>
    </form>
          </div>
    )
}
export default Login;