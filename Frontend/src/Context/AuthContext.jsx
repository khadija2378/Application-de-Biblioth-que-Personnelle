import axios from 'axios';
import React, { createContext, useState } from 'react'
export const AuthContext=createContext();

export const AuthProvider = ({ children }) => {
    const [errorR, setErrorR] = useState({});
        const [errorL, setErrorL] = useState({});


    const [user,setUser]=useState(() => {
  return JSON.parse(localStorage.getItem("user") || "null");
});
    const token = localStorage.getItem("token");
        
    const register = async(data) =>{

        try{
      const res=await axios.post('http://127.0.0.1:8000/api/register',data);

       return res.data.user;
    
        }catch (err) {
      console.error("Erreur chargement user:", err);
       setErrorR(err.response.data.errors)

        }   
    }


    const login = async(data) =>{
        try{
      const res=await axios.post('http://127.0.0.1:8000/api/login',data);
      localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
       setUser(res.data.user);
       return {
      token: res.data.token,
      user: res.data.user,
    };
        }catch (err) {
      console.error("Erreur chargement user:", err);
       if (err.response?.status === 401) {
      setErrorL({
        email: ["Email ou mot de passe invalide"],
        password: ["Email ou mot de passe invalide"]
      });
    }
        }
    }

    const logout = async() =>{
        try{ 
        await axios.post('http://127.0.0.1:8000/api/logout',{},
       { headers: { Authorization: `Bearer ${token}` } });
         localStorage.removeItem('user');
          localStorage.removeItem('token');
         setUser(null);   
        } catch (error) {
            console.error('Logout failed:', error);
        }
         
    }

  return (
     <AuthContext.Provider
      value={{ register , login , user , logout , errorR , errorL}}
    >
      {children}
    </AuthContext.Provider>
  )
}

