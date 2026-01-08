import React from 'react';
import { BookOpen, Bookmark, LayoutGrid, UserPlus, BookAIcon, BookCheck, BookAudioIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home({ about, work }) {
  return (
    <>
     
      <section className="flex flex-col-reverse md:flex-row items-center px-6 md:px-16 py-16">
        <div className="md:w-1/2 z-10 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight ">
            Organize your books <br /> Read smarter
          </h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0 ">
            Build your personal digital library and find any book in seconds.
          </p>
          <Link to="/register">
          <button className="bg-[#800020] text-white px-8 py-3 rounded-2xl cursor-pointer font-semibold hover:bg-[#4B0016] hover:rounded-full transition-all duration-200">
            Create Account
          </button>
          </Link>
        </div>
        <div className="md:w-1/2 mb-10 md:mt-0 flex justify-center">
          <img src="/home.png" alt="Hero Illustration" className="max-w-full h-auto" />
        </div>
      </section>

      
      <section className="bg-[#f3f4f6] py-20 px-4 font-sans">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a2b4b] mb-4">
            Why MyBooks?
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the advantages of MyBooks for building and optimizing your library.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="w-16 h-16 bg-[#800020] rounded-full flex items-center justify-center mb-6">
              <Bookmark color="#fff" />
            </div>
            <h3 className="text-[#1a2b4b] font-bold text-lg mb-4">Intuitive management</h3>
            <p className="text-gray-500 leading-relaxed">
              Organize and track all your books effortlessly.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="w-16 h-16 bg-[#800020] rounded-full flex items-center justify-center mb-6">
              <BookAIcon color="#fff" />
            </div>
            <h3 className="text-[#1a2b4b] font-bold text-lg mb-4">Data Privacy</h3>
            <p className="text-gray-500 leading-relaxed">
              Your data is secure and never shared.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="w-16 h-16 bg-[#800020] rounded-full flex items-center justify-center mb-6">
              <BookCheck color="#fff" />
            </div>
            <h3 className="text-[#1a2b4b] font-bold text-lg mb-4">Multiplatform</h3>
            <p className="text-gray-500 leading-relaxed">
              Your library, always with you on any device.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="w-16 h-16 bg-[#800020] rounded-full flex items-center justify-center mb-6">
              <BookAudioIcon color="#fff" />
            </div>
            <h3 className="text-[#1a2b4b] font-bold text-lg mb-4">No Ads</h3>
            <p className="text-gray-500 leading-relaxed">
              Enjoy a smooth experience without ads.
            </p>
          </div>
        </div>
      </section>


      <section ref={about} className="px-6 md:px-16 flex flex-col md:flex-row items-center gap-12 pt-20">
        <div className="md:w-1/2">
          <img src="/books.avif" alt="Books" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#1a2b4b] mb-6">About us</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our Personal Digital Library is a modern platform created to help readers organize their reading life.
            With MyBooks, users can browse books, create reading programs, view tracking, and enjoy a user-friendly experience across all their devices.
          </p>
          <p className="text-gray-600 italic">Read smarter today, and enjoy every page.</p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto space-y-32">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#1a2b4b] mb-6">Create your library</h2>
            <p className="text-gray-600 text-lg mb-8">
              To get started, create a free MyBlio account on our website or via the iOS or Android app.
              Then, simply scan the barcodes of your books to add them to your library.
            </p>
            <Link to="/register">
            <button className="bg-[#800020] text-white px-8 py-3 cursor-pointer rounded-2xl font-semibold hover:bg-[#4B0016] hover:rounded-full transition-all duration-200">
              Join Now
            </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center mt-10 md:mt-0">
            <img src="/phone.png" alt="Phone App" className="w-64 md:w-80" />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#1a2b4b] mb-6">Keep up with reading</h2>
            <p className="text-gray-600 text-lg mb-8">
              Easily track your reading status: read, unread, to read, and currently reading. You'll always know where you are in your reading pile. Create reading lists, take notes, and share your thoughts.
            </p>
            <Link to="/register">
            <button className="bg-[#800020] text-white px-8 py-3 cursor-pointer rounded-2xl font-semibold hover:bg-[#4B0016] hover:rounded-full transition-all duration-200">
              Join Now
            </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center mt-10 md:mt-0">
            <img src="/phone.png" alt="Phone App" className="w-64 md:w-80" />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#1a2b4b] mb-6">Manage your loans and borrowings</h2>
            <p className="text-gray-600 text-lg mb-8">
              Never lose your books again! The MyBlio app lets you share your books with complete confidence. The integrated messaging system makes it easy to communicate with other users.
            </p>
            <Link to="/register">
            <button className="bg-[#800020] text-white px-8 py-3 cursor-pointer rounded-2xl font-semibold hover:bg-[#4B0016] hover:rounded-full transition-all duration-200">
              Join Now
            </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center mt-10 md:mt-0">
            <img src="/phone.png" alt="Phone App" className="w-64 md:w-80" />
          </div>
        </div>
      </section>

      <section ref={work} className="bg-[#f3f4f6] py-20 px-4 md:px-16 font-sans">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a2b4b] mb-4">
            How it works
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the advantages of MyBooks for building and optimizing your library.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center space-y-3 text-center border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <UserPlus color="#800020" size={40} />
            <h3 className="text-[#1a2b4b] font-bold text-lg">Create your account</h3>
            <p className="text-gray-500 leading-relaxed">
              Create your free MyBooks account in just a few seconds using your email or social login.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center space-y-3 text-center border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <LayoutGrid color="#800020" size={40} />
            <h3 className="text-[#1a2b4b] font-bold text-lg">Add your books</h3>
            <p className="text-gray-500 leading-relaxed">
              Scan book barcodes with the mobile app or add books manually to build your digital library.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center space-y-3 text-center border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <Bookmark color="#800020" size={40} />
            <h3 className="text-[#1a2b4b] font-bold text-lg">Organize & track</h3>
            <p className="text-gray-500 leading-relaxed">
              Organize books on virtual shelves, track your reading progress, and manage loans easily.
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
            backgroundSize: 'cover',
          }}
        />

        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 tracking-tight">
            Create your free Virtual Library today!
          </h2>
           <Link to="/register">
          <button className="bg-[#800020] hover:bg-[#4B0016] cursor-pointer text-white font-semibold py-3 px-10 rounded-lg transition-colors duration-200 text-lg">
            Start now
          </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
