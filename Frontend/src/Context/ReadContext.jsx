import axios from 'axios';
import React, { createContext, useState } from 'react'
export const ReadContext=createContext();

export const ReadProvider = ({ children }) => {
    
    const token = localStorage.getItem("token");
    const [readings,setReadings]=useState([]);

    const AddReading = async(book)=>{
        try{

        const res=await axios.post(`http://127.0.0.1:8000/api/books/${book}/reading`,
        { headers: { Authorization: `Bearer ${token}` } });
        setReadings((prev)=>[...prev,res.data.read]);
        }catch (err) {
      console.error("Erreur chargement book:",  err.response?.data || err.message);
        }        

    }

    const GetRedings = async() =>{
        try{
            const res= await axios.get('http://127.0.0.1:8000/api/loan',
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setReadings(res.data.read);
        }catch(err){
        console.error("Erreur chargement book:",  err.response?.data || err.message);
        }

    }

   
  return (
     <ReadContext.Provider
      value={{ AddReading , GetRedings , readings}}
    >
      {children}
    </ReadContext.Provider>
  )
}

