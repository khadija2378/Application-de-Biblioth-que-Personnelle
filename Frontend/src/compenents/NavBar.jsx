import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ scrollToAbout ,scrollToWork}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center py-5 px-6 md:px-16 bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="bg-[#800020] p-1.5 rounded-lg">
          <BookOpen className="text-white w-5 h-5" />
        </div>
        <Link to="/">
          <span className="font-bold text-xl text-[#4A0E0E]">MyBooks</span>
        </Link>
      </div>

      <div className="hidden md:flex gap-10 text-gray-700 font-medium">
        <Link to="/" className="hover:text-[#800020] transition-colors duration-200">Home</Link>
        <Link to="/">
        <button onClick={scrollToAbout} className="hover:text-[#800020] cursor-pointer transition-colors duration-200">
          About
        </button>
        </Link>
        <Link to="/">
        <button onClick={scrollToWork} className="hover:text-[#800020] cursor-pointer transition-colors duration-200">
          How it works
        </button>
        </Link>
      </div>

      <div className="hidden md:flex gap-3">
        <Link to="/login">
          <button className="px-5 py-1.5 border border-[#800020] text-[#800020] rounded-full font-semibold cursor-pointer hover:text-white hover:bg-[#800020] transition-colors duration-200">
            Log in
          </button>
        </Link>
        <Link to="/register">
          <button className="px-5 py-1.5 bg-[#800020] text-white rounded-full cursor-pointer font-semibold hover:bg-[#4B0016] transition-colors duration-200">
            Sign up
          </button>
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-4 py-4 z-40">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#800020] transition-colors duration-200">
            Home
          </Link>
          <button onClick={() => { scrollToAbout(); setIsOpen(false); }} className="hover:text-[#800020] cursor-pointer transition-colors duration-200">
            About
          </button>
          <button onClick={() => { scrollToWork(); setIsOpen(false); }} className="hover:text-[#800020] cursor-pointer transition-colors duration-200">
            How it works
          </button>
          <div className="flex gap-3 mt-2">
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <button className="px-5 py-1.5 border border-[#800020] text-[#800020] rounded-full font-semibold cursor-pointer hover:text-white hover:bg-[#800020] transition-colors duration-200">
                Log in
              </button>
            </Link>
            <Link to="/register" onClick={() => setIsOpen(false)}>
              <button className="px-5 py-1.5 bg-[#800020] text-white rounded-full cursor-pointer font-semibold hover:bg-[#4B0016] transition-colors duration-200">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
