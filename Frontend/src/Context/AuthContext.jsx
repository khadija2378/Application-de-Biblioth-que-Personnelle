import axios from 'axios';
import React, { createContext, useState } from 'react'
export const AuthContext=createContext();

export const AuthProvider = ({ children }) => {
    const [errorR, setErrorR] = useState({});
    const [users, setUsers] = useState([]);
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

    const getUsers = async() =>{
      try{
        const res=await axios.get('http://127.0.0.1:8000/api/users',
          { headers: { Authorization: `Bearer ${token}` } });
          setUsers(res.data.users)
          return true;

      }catch (error) {
            console.error('Erreur chargement users:', error);
            return false;
        }  
    }

    const deleteUser = async(id) =>{
        try{
            const res= await axios.delete(`http://127.0.0.1:8000/api/user/${id}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
             setUsers(prev =>
      prev.filter(user => user.id !== id)
    );
            return true;
        }catch(err){
        console.error("Erreur chargement users:",  err.response?.data || err.message);
        return false;
        }
    }

  return (
     <AuthContext.Provider
      value={{ register , login , user , logout , errorR , errorL , getUsers , users ,deleteUser}}
    >
      {children}
    </AuthContext.Provider>
  )
}

