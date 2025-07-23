// import "./Navbar.css";
// import { useState, useEffect } from "react";
// import logo from '../../assets/logo.png'

// const Navbar = () => {

//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 30) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className={`nav z-10 fixed top-0 left-0 w-full  ${
//         scrolled
//           ? "bg-gradient-to-r from-pink-950/90 to-pink-500/40  backdrop-blur-xs backdrop-brightness-60"
//           : "backdrop-brightness-80 bg-gradient-to-r from-pink-950/40 to-pink-500/40"
//       }  pl-5 pr-5 `}
//     >

//       <div className={`nav-logo `}>
//         <a href="/">
//           <div className="flex">
//             <img className="w-20 h-20 mr-2 " src={logo}/>
//             <div>
//               <div className="-mb-3">
//                 <span style={{ fontFamily:'"Fondamento"'}} className="text-4xl">Grace </span>
//                 <span style={{fontFamily: "Great Vibes"}} className="text-3xl">Professional</span>
//               </div>
//               <div style={{fontFamily: "Allura"}} className="text-2xl text-center">Unisex Salon</div>
//             </div>
//           </div>
//         </a>

//       </div>
      // <ul className="nav-menu">
      //   <li
      //     className={` hover:pb-2 cursor-pointer font-serif  transition-all duration-200 relative group hidden lg:block  `}
      //   >
      //     <a href="/">About Us</a>
      //     <div
      //       className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200  bg-white`}
      //     ></div>
      //   </li>
      //   <li
      //     className={`font-serif hover:pb-2 cursor-pointer transition-all duration-200 relative group hidden lg:block  `}
      //   >
      //     <a href="/services" className="group inline-flex items-center">
      //     Services
      //     <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-180 ml-1">keyboard_arrow_down</span>
      //     </a>

      //     <div
      //       className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200  bg-white`}
      //     ></div>
      //   </li>
      //   <li
      //     className={`font-serif hover:pb-2 cursor-pointer transition-all duration-200 relative group hidden lg:block`}
      //   >
      //     <a href="/blog">Blog</a>
      //     <div
      //       className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200  bg-white`}
      //     ></div>
      //   </li>
      //   <li
      //     className={` font-serif hover:pb-2 cursor-pointer  transition-all duration-200 relative group hidden lg:block  `}
      //   >
      //     <a href="/gallery">Gallery</a>
      //     <div
      //       className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200  bg-white`}
      //     ></div>
      //   </li>
      //   <li
      //     className={` font-serif hover:pb-2 cursor-pointer transition-all duration-200 relative group hidden lg:block`}
      //   >
      //     <a href="/contact">Contact Us</a>
      //     <div
      //       className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200 bg-white`}
      //     ></div>
      //   </li>
      // </ul>
//     </div>
//   );
// };

// export default Navbar;



import "./Navbar.css";
import { useState, useEffect } from "react";
import logo from '../../assets/logo.png'
import { Menu, X } from "lucide-react"; // For hamburger and close icons
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`nav z-10 fixed top-0 left-0 w-full ${
        scrolled
          ? "bg-gradient-to-r from-pink-950/90 to-pink-500/40 backdrop-blur-xs backdrop-brightness-60"
          : "backdrop-brightness-80 bg-gradient-to-r from-pink-950/40 to-pink-500/40"
      } pl-5 pr-5 flex items-center justify-between`}
    >
      <div className="nav-logo">
        <a href="/">
          <div className="flex">
            <img className="w-20 h-20 mr-2" src={logo} />
            <div>
              <div className="-mb-3">
                <span style={{ fontFamily: '"Fondamento"' }} className="text-4xl">Grace </span>
                <span style={{ fontFamily: "Great Vibes" }} className="text-3xl">Professional</span>
              </div>
              <div style={{ fontFamily: "Allura" }} className="text-2xl text-center">Unisex Salon</div>
            </div>
          </div>
        </a>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Nav Menu */}
      {/* <ul
        className={`nav-menu ${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:space-x-6 absolute lg:static top-16 right-5 lg:top-auto lg:right-auto bg-pink-900/90 p-4 rounded-lg lg:bg-transparent lg:p-0 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 lg:opacity-100"
        } lg:opacity-100`}
      >
        <li
          className={`font-serif hover:pb-2 cursor-pointer transition-all duration-200 relative group ${
            isMenuOpen ? "block" : "hidden lg:block"
          }`}
        >
          <a href="/">About Us</a>
          <div
            className={`absolute bottom-0 w-full h-1 hidden group-hover:block transition-all duration-200 bg-white`}
          ></div>
        </li>
        <li
          className={`font-serif hover:pb-2 cursor-pointer transition-all duration-200 relative group ${
            isMenuOpen ? "block" : "hidden lg:block"
          }`}
        >
          <a href="/services" className="group inline-flex items-center">
            Services
            <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-180 ml-1">
              keyboard_arrow_down
            </span>
          </a>
          <div
            className={`absolute bottom-0 w-full h-1 hidden group-hover:block transition-all duration-200 bg-white`}
          ></div>
        </li>
        <li
          className={`font-serif hover:pb-2 cursor-pointer transition-all duration-200 relative group ${
            isMenuOpen ? "block" : "hidden lg:block"
          }`}
        >
          <a href="/blog">Blog</a>
          <div
            className={`absolute bottom-0 w-full h-1 hidden group-hover:block transition-all duration-200 bg-white`}
          ></div>
        </li>
        <li
          className={`font-serif hover:pb-2 cursor-pointer transition-all duration-200 relative group ${
            isMenuOpen ? "block" : "hidden lg:block"
          }`}
        >
          <a href="/gallery">Gallery</a>
          <div
            className={`absolute bottom-0 w-full h-1 hidden group-hover:block transition-all duration-200 bg-white`}
          ></div>
        </li>
        <li
          className={`font-serif hover:pb-2 cursor-pointer transition-all duration-200 relative group ${
            isMenuOpen ? "block" : "hidden lg:block"
          }`}
        >
          <a href="/contact">Contact Us</a>
          <div
            className={`absolute bottom-0 w-full h-1 hidden group-hover:block transition-all duration-200 bg-white`}
          ></div>
        </li>
      </ul> */}
      <ul className="nav-menu">
        <li
          className={` hover:pb-2 cursor-pointer font-serif  transition-all duration-200 relative group hidden lg:block  `}
        >
          <a href="/aboutus">About Us</a>
          <div
            className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200  bg-white`}
          ></div>
        </li>
        <li
          className={`font-serif hover:pb-2 cursor-pointer transition-all duration-200 relative group hidden lg:block  `}
        >
          <a href="/services" className="group inline-flex items-center">
          Services
          <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-180 ml-1">keyboard_arrow_down</span>
          </a>

          <div
            className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200  bg-white`}
          ></div>
        </li>
        <li
          className={`font-serif hover:pb-2 cursor-pointer transition-all duration-200 relative group hidden lg:block`}
        >
          <a href="/blog">Blog</a>
          <div
            className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200  bg-white`}
          ></div>
        </li>
        <li
          className={` font-serif hover:pb-2 cursor-pointer  transition-all duration-200 relative group hidden lg:block  `}
        >
          <a href="/gallery">Gallery</a>
          <div
            className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200  bg-white`}
          ></div>
        </li>
        <li
          className={` font-serif hover:pb-2 cursor-pointer transition-all duration-200 relative group hidden lg:block`}
        >
          <a href="/contact">Contact Us</a>
          <div
            className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200 bg-white`}
          ></div>
        </li>
      </ul>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-full bg-pink-950/90 backdrop-blur-md p-6 pt-24 z-40 flex flex-col items-center gap-8 text-white font-serif text-xl transition-all duration-300"
          onClick={() => setIsMenuOpen(false)} // Close when clicking outside
        >
          {/* Close Icon */}
          <FaTimes
            className="absolute top-6 right-6 text-2xl cursor-pointer hover:text-red-400"
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing twice
              setIsMenuOpen(false);
            }}
          />

          {/* Menu Items */}
          {/* {["About Us", "Services", "Blog", "Gallery", "Contact Us"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(/ /g, "")}`}
              className="hover:underline"
              onClick={(e) => {
                e.stopPropagation(); // Prevent outer click handler
                setIsMenuOpen(false);
              }}
            >
              {item}
            </a>
          ))} */}
          <ul className="">
            <li
              className={` hover:pb-2 cursor-pointer font-serif  transition-all duration-200 relative group mb-4 text-center`}
            >
              <a href="/">Home</a>
              <div
                className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200  bg-white`}
              ></div>
            </li>
            <li
              className={` hover:pb-2 cursor-pointer font-serif  transition-all duration-200 relative group mb-4 text-center`}
            >
              <a href="/aboutus">About Us</a>
              <div
                className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200  bg-white`}
              ></div>
            </li>
            <li
              className={`font-serif hover:pb-2 cursor-pointer transition-all duration-200 relative group mb-4 text-center`}
            >
              <a href="/services" className="group inline-flex items-center">
              Services
              <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-180 ml-1">keyboard_arrow_down</span>
              </a>

              <div
                className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200  bg-white`}
              ></div>
            </li>
            <li
              className={`font-serif hover:pb-2 cursor-pointer transition-all duration-200 relative group mb-4 text-center`}
            >
              <a href="/blog">Blog</a>
              <div
                className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200  bg-white`}
              ></div>
            </li>
            <li
              className={` font-serif hover:pb-2 cursor-pointer  transition-all duration-200 relative group mb-4 text-center`}
            >
              <a href="/gallery">Gallery</a>
              <div
                className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200  bg-white`}
              ></div>
            </li>
            <li
              className={` font-serif hover:pb-2 cursor-pointer transition-all duration-200 relative group mb-4 text-center`}
            >
              <a href="/contact">Contact Us</a>
              <div
                className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200 bg-white`}
              ></div>
            </li>
          </ul>

        </div>
      )}


    </div>
  );
};

export default Navbar;

