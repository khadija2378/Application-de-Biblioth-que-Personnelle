import React from 'react';
import { BookOpen, Bookmark, LayoutGrid, UserPlus, BookAIcon, BookCheck, BookAudioIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"; // Note: assurez-vous que c'est bien "framer-motion"

// Variantes pour les conteneurs de listes (stagger effect)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

function Home({ about, work }) {
  return (
    <>
      {/* SECTION HERO */}
      <section className="flex flex-col-reverse md:flex-row items-center px-6 md:px-16 py-16 overflow-hidden">
        <motion.div 
          className="md:w-1/2 z-10 text-center md:text-left space-y-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Organize your books <br /> 
            <span className="text-[#800020]">Read smarter</span>
          </h1>
          
          <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
            Build your personal digital library and find any book in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/register">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#800020] text-white px-8 py-3 rounded-2xl cursor-pointer font-semibold hover:bg-[#4B0016] transition-all duration-200 shadow-lg"
              >
                Create Account
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="md:w-1/2 mb-10 md:mt-0 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/home.png" alt="Hero Illustration" className="max-w-full h-auto" />
        </motion.div>
      </section>

      {/* SECTION WHY MYBOOKS (Grid avec Stagger) */}
      <section className="bg-[#f3f4f6] py-20 px-4 font-sans">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a2b4b] mb-4">Why MyBooks?</h2>
          <p className="text-gray-600 text-lg">Discover the advantages of MyBooks for your library.</p>
        </div>

        <motion.div 
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { icon: <Bookmark color="#fff" />, title: "Intuitive management", desc: "Organize and track all your books effortlessly." },
            { icon: <BookAIcon color="#fff" />, title: "Data Privacy", desc: "Your data is secure and never shared." },
            { icon: <BookCheck color="#fff" />, title: "Multiplatform", desc: "Your library, always with you on any device." },
            { icon: <BookAudioIcon color="#fff" />, title: "No Ads", desc: "Enjoy a smooth experience without ads." }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-[#800020] rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-[#1a2b4b] font-bold text-lg mb-4">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION ABOUT (Fade In) */}
      <section ref={about} className="px-6 md:px-16 flex flex-col md:flex-row items-center gap-12 pt-20">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src="/books.avif" alt="Books" className="w-full h-auto" />
        </motion.div>
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#1a2b4b] mb-6">About us</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our Personal Digital Library is a modern platform created to help readers organize their reading life...
          </p>
          <p className="text-gray-600 italic">Read smarter today, and enjoy every page.</p>
        </motion.div>
      </section>

      {/* SECTION FEATURES (Alternating Layout) */}
      <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto space-y-32">
        {[
          { title: "Create your library", desc: "Scan barcodes to add books instantly.", img: "/phone.png", rev: false },
          { title: "Keep up with reading", desc: "Track read, unread and currently reading books.", img: "/phone.png", rev: true },
          { title: "Manage loans", desc: "Share books with confidence. Never lose a book again!", img: "/phone.png", rev: false }
        ].map((item, i) => (
          <motion.div 
            key={i}
            className={`flex flex-col-reverse ${item.rev ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#1a2b4b] mb-6">{item.title}</h2>
              <p className="text-gray-600 text-lg mb-8">{item.desc}</p>
              <Link to="/register">
                <button className="bg-[#800020] text-white px-8 py-3 cursor-pointer rounded-2xl font-semibold hover:bg-[#4B0016] transition-all duration-200">
                  Join Now
                </button>
              </Link>
            </div>
            <div className="flex-1 flex justify-center">

              <motion.img 
                src={item.img} 
                alt="App Preview" 
                className="w-64 md:w-80"
                whileHover={{ rotate: item.rev ? -5 : 5 }}
              />

            </div>
          </motion.div>
        ))}
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

        <motion.div 
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { icon: <UserPlus color="#800020" size={40}/>, title: "Create your account", desc: "Create your free MyBooks account in just a few seconds using your email or social login." },
            { icon: <LayoutGrid color="#800020" size={40}/>, title: "Add your books", desc: "Scan book barcodes with the mobile app or add books manually to build your digital library." },
            { icon: <Bookmark color="#800020" size={40}/>, title: "Organize & track", desc: "Organize books on virtual shelves, track your reading progress, and manage loans easily." }
            
          ].map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition-shadow"
            >
                {feature.icon}
              <h3 className="text-[#1a2b4b] font-bold text-lg mb-4">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </section>

      {/* CTA FINAL */}

      <motion.section 
        className="relative h-[400px] w-full overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >

        <div
          className="absolute inset-0 z-0 scale-110"
          style={{
            backgroundImage: 'url("/cover.avif")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative z-20 text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Create your free Virtual Library today!
          </h2>
          <Link to="/register">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#800020] hover:bg-[#4B0016] cursor-pointer text-white font-bold py-4 px-12 rounded-full transition-colors duration-200 text-xl shadow-2xl"
            >
              Start now
            </motion.button>
          </Link>
        </div>
      </motion.section>

      
    </>
  );
}

export default Home;