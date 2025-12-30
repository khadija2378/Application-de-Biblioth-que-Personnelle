import axios from 'axios';
import React, { createContext, useState } from 'react'
export const ReadContext=createContext();

export const ReadProvider = ({ children }) => {
    
    const token = localStorage.getItem("token");
    const [readings,setReadings]=useState([]);

    const AddReading = async(book)=>{
        try{

        const res=await axios.post(`http://127.0.0.1:8000/api/books/${book}/reading`,{},
        { headers: { Authorization: `Bearer ${token}` } });
        setReadings((prev)=>[...prev,res.data.read]);
        return true;
        }catch (err) {
      console.error("Erreur chargement book:",  err.response?.data || err.message);
      return false;
        }        

    }

    const GetRedings = async() =>{
        try{
            const res= await axios.get('http://127.0.0.1:8000/api/reading',
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setReadings(res.data.read);
        }catch(err){
        console.error("Erreur chargement book:",  err.response?.data || err.message);
        }

    }

    const DeleteReding = async(id) =>{
        try{
            const res= await axios.delete(`http://127.0.0.1:8000/api/reading/${id}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
             setReadings(prev =>
      prev.filter(read => read.id !== id)
    );
            return true;
        }catch(err){
        console.error("Erreur chargement book:",  err.response?.data || err.message);
        return false;
        }
    }

    const ModifyReading = async(id) =>{
        try{
         const res= await axios.put(`http://127.0.0.1:8000/api/reading/${id}`,{},
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setReadings(prev =>
  prev.map(r =>
    r.id === id ? res.data.reading : r
  )
);
        }catch(err){
        console.error("Erreur chargement book:",  err.response?.data || err.message);
        return false;
        }
    }

   
  return (
     <ReadContext.Provider
      value={{ AddReading , GetRedings , readings ,DeleteReding , ModifyReading}}
    >
      {children}
    </ReadContext.Provider>
  )
}

