import axios from 'axios';
import React, { createContext, useState } from 'react'
export const BookContext=createContext();

export const BookProvider = ({ children }) => {
    
    const token = localStorage.getItem("token");
    const [books,setBooks]=useState([]);
     const [error, setError] = useState({});
    

    const AddBook = async(formData)=>{
        try{

        const res=await axios.post('http://127.0.0.1:8000/api/books',formData,
        { headers: { Authorization: `Bearer ${token}` } });
        setBooks((prev)=>[...prev,res.data.book]);
        return true;
        }catch (err) {
      console.error("Erreur chargement book:",  err.response?.data || err.message);
      setError(err.response.data.errors);
      return false;
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
    const SearchBook = async (search = "") => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/books/search?search=${search}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    setBooks(res.data)
  } catch (err) {
    console.error("Erreur chargement book:", err.response?.data || err.message)
  }
}
    const DeleteBook = async(id) =>{
      try{
              const res = await axios.delete(`http://127.0.0.1:8000/api/books/${id}`,
                { headers: { Authorization: `Bearer ${token}` } });
                setBooks(prev => prev.filter(book => book.id !== id))
                return true;
      }catch(err){
        console.error("Erreur chargement book:",  err.response?.data || err.message);
        return false;
    }
    }    
    const UpdateBook = async (id, data) => {
    try {
      const res = await axios.post(`http://127.0.0.1:8000/api/books/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      setBooks(prev =>
      prev.map(book =>
        book?.id === id ? res.data.book : book
      )
    );
    
            return true;
    } catch (err) {
      console.error("Erreur ModifyBook:", err.response?.data || err.message);
      return false;
    }
  };
  return (
     <BookContext.Provider
      value={{ AddBook , GetBooks , ShowBook ,books , error , DeleteBook, UpdateBook , SearchBook}}
    >
      {children}
    </BookContext.Provider>
  )
}

