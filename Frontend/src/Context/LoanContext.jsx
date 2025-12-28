import axios from 'axios';
import React, { createContext, useState } from 'react'
export const LoanContext=createContext();

export const LoanProvider = ({ children }) => {
    
    const token = localStorage.getItem("token");
    const [loans,setLoans]=useState([]);
    const [error, setError] = useState({});
  

    const AddLoan = async(book,formData)=>{
        try{

        const res=await axios.post(`http://127.0.0.1:8000/api/books/${book}/loans`,formData,
        { headers: { Authorization: `Bearer ${token}` } });
        setLoans((prev)=>[...prev,res.data.loan]);
        return true;
        }catch (err) {
      console.error("Erreur chargement book:",  err.response?.data || err.message);
            setError(err.response.data.errors);
        return false;
        }        

    }

    const GetLoans = async() =>{
        try{
            const res= await axios.get('http://127.0.0.1:8000/api/loan',
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setLoans(res.data.loans);
        }catch(err){
        console.error("Erreur chargement book:",  err.response?.data || err.message);
        }

    }

    const DeleteLoan = async(id) =>{
        try{
            const res= await axios.delete(`http://127.0.0.1:8000/api/reading/${id}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
             setLoans(prev =>
      prev.filter(loan => loan.id !== id)
    );
            return true;
        }catch(err){
        console.error("Erreur chargement book:",  err.response?.data || err.message);
        return false;
        }
    }

   
  return (
     <LoanContext.Provider
      value={{ AddLoan , GetLoans , loans , error , DeleteLoan}}
    >
      {children}
    </LoanContext.Provider>
  )
}

