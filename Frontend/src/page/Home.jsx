 import React from 'react';
import { BookOpen, Bookmark, Monitor, Layout, Facebook, Instagram, Linkedin } from 'lucide-react';
function Home(){
return(

  <section className="relative flex flex-row items-center px-10 py-16 rounded-br-[100px]">
    <div className="md:w-1/2 z-10">
      <h1 className="text-5xl font-bold text-red-900 leading-tight mb-6">
        Organize your books <br /> Read smarter
      </h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Build your personal digital library and find any book in seconds.
      </p>
      <button className="bg-red-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-950 hover:rounded-full transition">
        Create Account
      </button>
    </div>
    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
      <img src="./public/home.png" alt="Hero Illustration" className="max-w-full h-auto" />
    </div>
  </section>

  
);

}
export default Home;