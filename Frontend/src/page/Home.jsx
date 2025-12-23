 import React from 'react';
import { BookOpen, Bookmark, Monitor, Layout, Facebook, Instagram, Linkedin, UserPlus, LayoutGrid } from 'lucide-react';
function Home(){
return(
<>
  <section className="relative flex flex-row items-center px-10 py-16 rounded-br-[100px]">
    <div className="md:w-1/2 z-10">
      <h1 className="text-5xl font-bold text-red-900 leading-tight mb-6">
        Organize your books <br /> Read smarter
      </h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Build your personal digital library and find any book in seconds.
      </p>
      <button className="bg-[#800020] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#4B0016] hover:rounded-full transition-all duration-200">
        Create Account
      </button>
    </div>
    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
      <img src="./public/home.png" alt="Hero Illustration" className="max-w-full h-auto" />
    </div>
  </section>

      <section className="bg-[#f3f4f6] py-20 px-4 font-sans">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#1a2b4b] mb-4">
          Why MyBlio ?
        </h2>
        <p className="text-gray-600 text-lg">
          Discover the advantages of MyBooks for building and optimizing your library.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6">
       <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
    <div className="w-16 h-16 bg-[#800020] rounded-full flex items-center justify-center mb-6">
      <Bookmark color='#fff'/>
    </div>
    <h3 className="text-[#1a2b4b] font-bold text-lg mb-4">Book Management</h3>
    <p className="text-gray-500 leading-relaxed">
      Organize your library efficiently and keep track of everything.
    </p>
  </div>
  <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
    <div className="w-16 h-16 bg-[#800020] rounded-full flex items-center justify-center mb-6">
      <Bookmark color='#fff'/>
    </div>
    <h3 className="text-[#1a2b4b] font-bold text-lg mb-4">Book Management</h3>
    <p className="text-gray-500 leading-relaxed">
      Organize your library efficiently and keep track of everything.
    </p>
  </div>
  <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
    <div className="w-16 h-16 bg-[#800020] rounded-full flex items-center justify-center mb-6">
      <Bookmark color='#fff'/>
    </div>
    <h3 className="text-[#1a2b4b] font-bold text-lg mb-4">Book Management</h3>
    <p className="text-gray-500 leading-relaxed">
      Organize your library efficiently and keep track of everything.
    </p>
  </div>
  <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
    <div className="w-16 h-16 bg-[#800020] rounded-full flex items-center justify-center mb-6">
      <Bookmark color='#fff'/>
    </div>
    <h3 className="text-[#1a2b4b] font-bold text-lg mb-4">Book Management</h3>
    <p className="text-gray-500 leading-relaxed">
      Organize your library efficiently and keep track of everything.
    </p>
  </div>
      </div>
    </section>


      <section className="py-16 px-6 md:px-16 flex flex-col flex-row items-center gap-12 ">
        <div className="md:w-1/2">
           <img src="./public/books.avif" alt="Books"  />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#1a2b4b] mb-6">About us</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our Personal Digital Library is a modern platform created to help readers organize their reading life. 
            With MyBooks, users can browse books, create reading programs, view tracking, and enjoy a user-friendly experience across all their devices.
          </p>
          <p className="text-gray-600 italic">Read smarter today, and enjoy every page.</p>
        </div>
      </section>

      
      
      

     
      <section className="py-24 px-6 max-w-6xl mx-auto space-y-32">
        
        <div className="flex flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#1a2b4b] mb-6">Create your library</h2>
            <p className="text-gray-600 text-lg mb-8">
              To get started, create a free MyBlio account on our website or via the iOS or Android app. 
              Then, simply scan the barcodes of your books to add them to your library.
            </p>
            <button className="bg-[#800020] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#4B0016] hover:rounded-full transition-all duration-200">
              Create Account
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="./public/phone.png"alt="Phone App" className="w-80"  />
          </div>
        </div>

        <div className="flex flex-row-reverse items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#1a2b4b] mb-6">Keep up with reading</h2>
            <p className="text-gray-600 text-lg mb-8">Set reading goals and track your progress daily with insightful charts.</p>
            <button className="bg-[#800020] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#4B0016] hover:rounded-full transition-all duration-200">Join Now</button>
          </div>
          <div className="flex-1 flex justify-center">
             <img src="./public/phone.png" alt="Phone App" className="w-80" />
          </div>
        </div>

        <div className="flex flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#1a2b4b] mb-6">Manage your loans and borrowings</h2>
            <p className="text-gray-600 text-lg mb-8">
              To get started, create a free MyBlio account on our website or via the iOS or Android app. 
              Then, simply scan the barcodes of your books to add them to your library.
            </p>
            <button className="bg-[#800020] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#4B0016] hover:rounded-full transition-all duration-200">
              Create Account
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="./public/phone.png"alt="Phone App" className="w-80"  />
          </div>
        </div>

      </section>

       <section className="bg-[#f3f4f6] py-20 px-4 font-sans">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#1a2b4b] mb-4">
          How it works
        </h2>
        <p className="text-gray-600 text-lg">
          Discover the advantages of MyBooks for building and optimizing your library.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
       <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
    <div>
      <UserPlus color='#800020' size={40}/>
    </div>
    <h3 className="text-[#1a2b4b] font-bold text-lg mb-4">Book Management</h3>
    <p className="text-gray-500 leading-relaxed">
      Organize your library efficiently and keep track of everything.
    </p>
  </div>
  <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
    <div>
      <LayoutGrid color='#800020' size={40}/>
    </div>
    <h3 className="text-[#1a2b4b] font-bold text-lg mb-4">Book Management</h3>
    <p className="text-gray-500 leading-relaxed">
      Organize your library efficiently and keep track of everything.
    </p>
  </div>
  <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
    <div>
      <Bookmark color='#800020' size={40}/>
    </div>
    <h3 className="text-[#1a2b4b] font-bold text-lg mb-4">Book Management</h3>
    <p className="text-gray-500 leading-relaxed">
      Organize your library efficiently and keep track of everything.
    </p>
  </div>
  
      </div>
    </section>

    <section className="relative h-[300px] w-full overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/cover.avif")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 tracking-tight">
          Create your free Virtual Library today!
        </h2>
        
        <button className="bg-[#800020] hover:bg-[#4B0016] text-white font-semibold py-3 px-10 rounded-lg transition-colors duration-200 text-lg">
          Start now
        </button>
      </div>
    </section>
    
</>
  
);

}
export default Home;