
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <h1 className="text-xl font-bold text-primary">MyBooks</h1>

      <ul className="flex font-medium gap-8 text-gray-800">
        <li>Home</li>
        <li>About</li>
        <li>How it works</li>
      </ul>

      <div className="flex gap-4">
        <button className="border border-[#800020] font-medium text-primary px-7 py-2 rounded-full hover:bg-[#800020] hover:text-white">
          Login
        </button>
        <button className="bg-[#800020] text-white font-medium px-6 py-2 rounded-full">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
