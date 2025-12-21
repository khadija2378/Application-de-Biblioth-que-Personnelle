function Home(){
return(
    <section className="bg-secondary px-10 py-20 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-4xl font-bold text-primary mb-6">
          Organize your books.<br />Read smarter.
        </h2>
        <p className="text-gray-600 mb-6">
          Build your personal digital library and find any book in seconds.
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-full">
          Create Account
        </button>
      </div>

      <div className="flex justify-center">
        <img
          src="/public/home.png"
          alt="Books"
          className="max-w-md"
        />
      </div>
    </section>
)
}
export default Home;