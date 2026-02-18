import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {
   const { user } = useSelector((state) => state.auth);

   const [menuOpen, setMenuOpen] = React.useState(false);

   return (
      <>
         <div className="min-h-screen pb-20 bg-gray-950">
            {/* Navbar */}
            <nav className="flex items-center justify-between w-full py-5 px-6 md:px-12 lg:px-20 border-b border-gray-800/50">
               <Link to="/" className="flex items-center">
                  <img src="/logo.svg" alt="logo" className="h-10 w-auto" />
               </Link>

               <div className="hidden md:flex items-center gap-10 text-sm">
                  <a
                     href="#features"
                     className="text-gray-300 hover:text-white transition"
                  >
                     Features
                  </a>
                  <a
                     href="#testimonials"
                     className="text-gray-300 hover:text-white transition"
                  >
                     Testimonials
                  </a>
                  <a href="#cta" className="text-gray-300 hover:text-white transition">
                     Contact
                  </a>
               </div>

               <div className="flex items-center gap-3">
                  {!user ? (
                     <>
                        <Link
                           to="/app?state=login"
                           className="hidden md:block px-5 py-2 text-gray-300 hover:text-white transition text-sm"
                        >
                           Login
                        </Link>
                        <Link
                           to="/app?state=register"
                           className="px-5 py-2 bg-green-600 hover:bg-green-700 transition rounded-md text-white text-sm font-medium"
                        >
                           Get Started
                        </Link>
                     </>
                  ) : (
                     <Link
                        to="/app"
                        className="px-6 py-2 bg-green-600 hover:bg-green-700 transition rounded-md text-white text-sm font-medium"
                     >
                        Dashboard
                     </Link>
                  )}

                  <button
                     onClick={() => setMenuOpen(true)}
                     className="md:hidden p-2 text-gray-300 hover:text-white transition"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                     >
                        <path d="M4 6h16M4 12h16M4 18h16" />
                     </svg>
                  </button>
               </div>
            </nav>

            {/* Mobile Menu */}
            <div
               className={`fixed inset-0 z-[100] bg-gray-950/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
               <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                  >
                     <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
               </button>

               <a
                  href="#features"
                  onClick={() => setMenuOpen(false)}
                  className="text-xl text-gray-200 hover:text-white transition"
               >
                  Features
               </a>
               <a
                  href="#testimonials"
                  onClick={() => setMenuOpen(false)}
                  className="text-xl text-gray-200 hover:text-white transition"
               >
                  Testimonials
               </a>
               <a
                  href="#cta"
                  onClick={() => setMenuOpen(false)}
                  className="text-xl text-gray-200 hover:text-white transition"
               >
                  Contact
               </a>

               {!user && (
                  <div className="flex flex-col gap-3 mt-4">
                     <Link
                        to="/app?state=login"
                        className="px-8 py-3 text-center text-gray-200 hover:text-white transition"
                     >
                        Login
                     </Link>
                     <Link
                        to="/app?state=register"
                        className="px-8 py-3 bg-green-600 hover:bg-green-700 transition rounded-md text-white text-center font-medium"
                     >
                        Get Started
                     </Link>
                  </div>
               )}
            </div>

            {/* Hero Section */}
            <div className="relative flex flex-col items-center justify-center px-6 py-32 text-gray-100">
               {/* Headline + CTA */}
               <div className="text-center max-w-4xl">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                     Create Your Perfect{" "}
                     <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                        Resume
                     </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
                     Build professional resumes in minutes. Choose from beautiful
                     templates and download instantly.
                  </p>

                  {/* CTA Button */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                     <Link
                        to="/app"
                        className="group bg-green-600 hover:bg-green-700 text-white rounded-xl px-8 py-4 flex items-center gap-2 transition-all font-semibold text-lg shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40"
                     >
                        Get Started Free
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           className="size-5 group-hover:translate-x-1 transition-transform"
                        >
                           <path d="M5 12h14"></path>
                           <path d="m12 5 7 7-7 7"></path>
                        </svg>
                     </Link>
                     <a
                        href="#features"
                        className="px-8 py-4 border border-gray-700 hover:border-gray-600 rounded-xl text-gray-300 hover:text-white transition-all font-semibold text-lg"
                     >
                        Learn More
                     </a>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap items-center justify-center gap-8 mt-16 text-sm">
                     <div className="text-center">
                        <div className="text-3xl font-bold text-white">10,000+</div>
                        <div className="text-gray-400 mt-1">Active Users</div>
                     </div>
                     <div className="h-12 w-px bg-gray-800"></div>
                     <div className="text-center">
                        <div className="text-3xl font-bold text-white">50,000+</div>
                        <div className="text-gray-400 mt-1">Resumes Created</div>
                     </div>
                     <div className="h-12 w-px bg-gray-800"></div>
                     <div className="text-center">
                        <div className="text-3xl font-bold text-white">4.9/5</div>
                        <div className="text-gray-400 mt-1">User Rating</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <style>
            {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

            * {
                font-family: 'Poppins', sans-serif;
            }
        `}
         </style>
      </>
   );
};

export default Hero;
