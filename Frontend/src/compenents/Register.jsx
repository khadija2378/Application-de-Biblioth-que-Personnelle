import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

function Register(){
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setconfirmPassword]=useState("");
  const {register, errorR}=useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data={ 
    name,
    email,
    password,
    password_confirmation: confirmPassword,
    }
 const result= await register(data);
 if (result) {
  toast.success("Registration successful !");
  setName('')
  setEmail('')
  setPassword('')
  setconfirmPassword('')
} else {
  toast.error("Error during registration !");
}

  }
return(
  <div className="flex flex-col justify-center px-10 bg-gray-50">
            <h2 class="text-center text-3xl font-semibold mb-6">Sing Up</h2>
            

    <form onSubmit={handleSubmit} class="space-y-4">
      <input
        type="name"
        name="name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Name"
        className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#4B0016]"
      />
{errorR.name && <p className="text-red-600 text-sm">{errorR.name[0]}</p>}

      <input
        type="email"
        name="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Email"
        className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#4B0016]"
      />
{errorR.email && <p className="text-red-600 text-sm">{errorR.email[0]}</p>}

      <input
        type="password"
        name="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Password"
        className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#4B0016]"
      />
{errorR.password && <p className="text-red-600 text-sm">{errorR.password}</p>}

      <input
        type="password"
        name="confirmpassword"
        value={confirmPassword}
        onChange={(e)=>setconfirmPassword(e.target.value)}
        placeholder="confirmed password"
        className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#4B0016]"
      />
{errorR.confirmPassword && <p className="text-red-600 text-sm">{errorR.confirmPassword[0]}</p>}
      <button
        type="submit"
        className="w-full rounded-full bg-[#800020] text-white py-3 cursor-pointer
               font-medium hover:bg-[#4B0016] transition"
      >
        Sing Up
      </button>
    </form>
          </div>
)
}
export default Register;