import axios from 'axios';
import React, { createContext, useState } from 'react'
export const BookContext=createContext();

export const BookProvider = ({ children }) => {
    
    const token = localStorage.getItem("token");

    const AddBook = async(formData)=>{

        try{

        const res=await axios.post('http://127.0.0.1:8000/api/books',formData,
        { headers: { Authorization: `Bearer ${token}` } });

        return res.data.book;

        }catch (err) {
      console.error("Erreur chargement book:",  err.response?.data || err.message);
        }   
       

    }
        
  return (
     <BookContext.Provider
      value={{ AddBook }}
    >
      {children}
    </BookContext.Provider>
  )
}

