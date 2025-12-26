import axios from 'axios';
import React, { createContext, useState } from 'react'
export const BookContext=createContext();

export const BookProvider = ({ children }) => {
    
    const token = localStorage.getItem("token");
    const [books,setBooks]=useState([]);

    const AddBook = async(formData)=>{
        try{

        const res=await axios.post('http://127.0.0.1:8000/api/books',formData,
        { headers: { Authorization: `Bearer ${token}` } });
        setBooks((prev)=>[...prev,res.data.book]);
        }catch (err) {
      console.error("Erreur chargement book:",  err.response?.data || err.message);
        }        

    }

    const GetBooks = async() =>{
        try{
            const res= await axios.get('http://127.0.0.1:8000/api/books',
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setBooks(res.data.books);
        }catch(err){
        console.error("Erreur chargement book:",  err.response?.data || err.message);
        }

    }

    const ShowBook = async(book) =>{
        try{
            const res = await axios.get(`http://127.0.0.1:8000/api/books/${book}`,
                { headers: { Authorization: `Bearer ${token}` } });
            return res.data.book;
        }catch(err){
        console.error("Erreur chargement book:",  err.response?.data || err.message);

        }
    }
        
  return (
     <BookContext.Provider
      value={{ AddBook , GetBooks , ShowBook ,books}}
    >
      {children}
    </BookContext.Provider>
  )
}

