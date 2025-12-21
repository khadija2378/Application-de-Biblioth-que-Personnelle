function Register(){
return(
  <div className="flex flex-col justify-center px-10 bg-gray-50">
            <h2 class="text-center text-3xl font-semibold mb-6">Sing Up</h2>

    <form class="space-y-4">
      <input
        type="name"
        placeholder="Name"
        className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#4B0016]"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#4B0016]"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#4B0016]"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm
               focus:outline-none focus:ring-2 focus:ring-[#4B0016]"
      />

      <button
        type="submit"
        className="w-full rounded-full bg-[#800020] text-white py-3
               font-medium hover:bg-[#4B0016] transition"
      >
        Sing Up
      </button>
    </form>
          </div>
)
}
export default Register;