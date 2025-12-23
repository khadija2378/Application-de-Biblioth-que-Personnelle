import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
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
    <div className="flex gap-10 text-gray-700 font-medium">
      <Link to="/">
      <a href="#" className="hover:text-[#800020] transition-colors duration-200">Home</a>
      </Link>
      <a href="#" className="hover:text-[#800020] transition-colors duration-200">About</a>
      <a href="#" className="hover:text-[#800020] transition-colors duration-200">How it works</a>
    </div>
    <div className="flex gap-3">
      <Link to="/login">
            <button className="px-5 py-1.5 border border-[#800020] text-[#800020] rounded-full font-semibold hover:text-[#fff] hover:bg-[#800020] transition-colors duration-200">Log in</button>
      </Link>
      <Link to="/register">
            <button className="px-5 py-1.5 bg-[#800020] text-white rounded-full font-semibold hover:bg-[#4B0016] transition-colors duration-200">Sign up</button>
      </Link>
    </div>
  </nav>
  );
}
